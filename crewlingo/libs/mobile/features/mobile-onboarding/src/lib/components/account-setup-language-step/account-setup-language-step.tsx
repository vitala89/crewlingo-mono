import { Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";
import { useAccountSetupStore } from "../../model/useAccountSetupStore";

const LANGS = [
  { key: "ru", label: "Русский" },
  // ...добавляй языки по мере роста
];

export const AccountSetupLanguageStep = ({ onNext }: { onNext: () => void }) => {
  const { t } = useTranslation();
  const { nativeLanguage, setField } = useAccountSetupStore();

  return (
    <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold mb-6`}>{t("chooseNativeLanguage")}</Text>
      {LANGS.map(lang => (
        <TouchableOpacity
          key={lang.key}
          style={[
            tw`w-64 py-4 rounded-xl mb-4 border-2`,
            nativeLanguage === lang.key ? tw`bg-blue-700 border-blue-700` : tw`bg-white border-gray-300`
          ]}
          onPress={() => setField("nativeLanguage", lang.key)}
        >
          <Text style={tw`text-lg font-bold text-center ${nativeLanguage === lang.key ? 'text-white' : 'text-blue-700'}`}>
            {lang.label}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={tw`mt-8 bg-blue-700 w-64 py-4 rounded-xl`}
        onPress={onNext}
        disabled={!nativeLanguage}
      >
        <Text style={tw`text-white text-lg font-bold text-center`}>
          {t("next")}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
