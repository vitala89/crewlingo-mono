import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";
import { useAccountSetupStore } from "../../model/useAccountSetupStore";

const LEVELS = [
  { key: "a1", labelKey: "levelA1" },
  { key: "a2", labelKey: "levelA2" },
  { key: "b1", labelKey: "levelB1" },
  { key: "b2", labelKey: "levelB2" },
  { key: "c1", labelKey: "levelC1" },
  { key: "c2", labelKey: "levelC2" }
];

export const AccountSetupLevelStep = ({ onNext, onBack }: any) => {
  const { t } = useTranslation();
  const { level, setField } = useAccountSetupStore();

  return (
    <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold mb-6`}>{t("yourLevel")}</Text>
      {LEVELS.map(levelItem => (
        <TouchableOpacity
          key={levelItem.key}
          style={[
            tw`w-64 py-4 rounded-xl mb-4 border-2`,
            level === levelItem.key ? tw`bg-blue-700 border-blue-700` : tw`bg-white border-gray-300`
          ]}
          onPress={() => setField("level", levelItem.key)}
        >
          <Text style={tw`text-lg font-bold text-center ${level === levelItem.key ? 'text-white' : 'text-blue-700'}`}>
            {t(levelItem.labelKey)}
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
          disabled={!level}
        >
          <Text style={tw`text-white text-lg font-bold text-center`}>
            {t("next")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
