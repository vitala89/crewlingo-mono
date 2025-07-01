import {
  Tree,
  createProjectGraphAsync,
  joinPathFragments,
  formatFiles,
} from '@nx/devkit';
import { SyncGeneratorResult } from 'nx/src/utils/sync-generators';

export default async function updateTailwindSourcesGenerator(
  tree: Tree,
  schema: { appName: string; stylesPath: string }
): Promise<SyncGeneratorResult> {
  const appName = schema.appName;
  const stylesPath = schema.stylesPath;

  const projectGraph = await createProjectGraphAsync();

  const dependencies = new Set<string>();
  const queue = [appName];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (visited.has(current)) continue;
    visited.add(current);

    const deps = projectGraph.dependencies[current] || [];
    deps.forEach((dep) => {
      dependencies.add(dep.target);
      queue.push(dep.target);
    });
  }

  const sourceDirectives: string[] = [];
  dependencies.forEach((dep) => {
    const project = projectGraph.nodes[dep];
    if (
      project &&
      project.data &&
      project.data.root &&
      project.type === 'lib'
    ) {
      const relativePath = joinPathFragments('../../../', project.data.root);
      sourceDirectives.push(`@source "${relativePath}";`);
    }
  });

  const currentContent = tree.read(stylesPath)?.toString() || '';

  const lines = currentContent.split('\n');
  const importIndex = lines.findIndex((line) =>
    line.includes('@import') && line.includes('tailwindcss')
  );

  let newLines: string[] = [];
  if (importIndex !== -1) {
    newLines = [
      ...lines.slice(0, importIndex + 1),
      ...sourceDirectives,
      ...lines.slice(importIndex + 1).filter(
        (line) => !line.trim().startsWith('@source')
      ),
    ];
  } else {
    newLines = [...sourceDirectives, ...lines];
  }

  tree.write(stylesPath, newLines.join('\n'));

  await formatFiles(tree);

  return {
    outOfSyncMessage: `Tailwind @source directives updated for ${appName}`,
  };
}
