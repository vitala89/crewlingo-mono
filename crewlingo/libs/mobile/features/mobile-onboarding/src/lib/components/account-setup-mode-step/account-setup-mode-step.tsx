import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";
import { useAccountSetupStore } from "../../model/useAccountSetupStore";

const MODES = [
  { key: "career", labelKey: "careerMode", descKey: "careerModeDesc" },
  { key: "role", labelKey: "roleBasedMode", descKey: "roleBasedModeDesc" },
  { key: "voyage", labelKey: "voyageMode", descKey: "voyageModeDesc" }
];

export const AccountSetupModeStep = ({ onNext, onBack }: any) => {
  const { t } = useTranslation();
  const { mode, setField } = useAccountSetupStore();

  return (
    <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold mb-6`}>{t("chooseLearningMode")}</Text>
      {MODES.map(modeItem => (
        <TouchableOpacity
          key={modeItem.key}
          style={[
            tw`w-64 py-4 rounded-xl mb-4 border-2`,
            mode === modeItem.key ? tw`bg-blue-700 border-blue-700` : tw`bg-white border-gray-300`
          ]}
          onPress={() => setField("mode", modeItem.key)}
        >
          <Text style={tw`text-lg font-bold text-center mb-1 ${mode === modeItem.key ? 'text-white' : 'text-blue-700'}`}>
            {t(modeItem.labelKey)}
          </Text>
          <Text style={tw`text-sm text-center ${mode === modeItem.key ? 'text-white' : 'text-blue-700'}`}>
            {t(modeItem.descKey)}
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
          disabled={!mode}
        >
          <Text style={tw`text-white text-lg font-bold text-center`}>
            {t("next")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
