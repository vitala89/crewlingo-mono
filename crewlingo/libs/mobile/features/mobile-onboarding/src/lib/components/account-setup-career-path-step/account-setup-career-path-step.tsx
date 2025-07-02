import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";
import { useAccountSetupStore } from "../../model/useAccountSetupStore";

const PATHS = [
  { key: "engine", labelKey: "engineDepartment" },
  { key: "deck", labelKey: "deckDepartment" },
  { key: "galley", labelKey: "galleyDepartment" }
];

export const AccountSetupCareerPathStep = ({ onNext, onBack }: any) => {
  const { t } = useTranslation();
  const { department, setField } = useAccountSetupStore();

  return (
    <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold mb-6`}>{t("chooseCareerPath")}</Text>
      {PATHS.map(path => (
        <TouchableOpacity
          key={path.key}
          style={[
            tw`w-64 py-4 rounded-xl mb-4 border-2`,
            department === path.key ? tw`bg-blue-700 border-blue-700` : tw`bg-white border-gray-300`
          ]}
          onPress={() => setField("department", path.key)}
        >
          <Text style={tw`text-lg font-bold text-center ${department === path.key ? 'text-white' : 'text-blue-700'}`}>
            {t(path.labelKey)}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={tw`flex-row w-64 mt-8`}>
        <TouchableOpacity
          style={tw`flex-1 mr-2 border border-blue-700 py-4 rounded-xl`}
          onPress={onBack}
        >
          <Text style={tw`text-blue-700 text-lg font-bold text-center`}>
            {t("back")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-1 ml-2 bg-blue-700 py-4 rounded-xl`}
          onPress={onNext}
          disabled={!department}
        >
          <Text style={tw`text-white text-lg font-bold text-center`}>
            {t("next")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
