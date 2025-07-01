import { WebButton } from '@crewlingo/web-button';
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Crewlingo Web</h1>
        <WebButton variant="crewLingo">{t("welcome")}</WebButton>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Старт
        </button>
      </div>
    </div>
  );
}
