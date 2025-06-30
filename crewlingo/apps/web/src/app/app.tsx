import { WebButton } from "@crewlingo/web-button";
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Crewlingo Web</h1>
        <WebButton onClick={() => alert("clicked!")}>Старт</WebButton>
      </div>
    </div>
  );
}
