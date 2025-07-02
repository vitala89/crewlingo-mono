import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";
import { useAccountSetupStore } from "../../model/useAccountSetupStore";

const REASONS = [
  { key: "career", labelKey: "reasonCareer" },
  { key: "travel", labelKey: "reasonTravel" },
  { key: "self", labelKey: "reasonSelf" },
  { key: "other", labelKey: "reasonOther" }
];

export const AccountSetupReasonStep = ({ onNext, onBack }: any) => {
  const { t } = useTranslation();
  const { reason, setField } = useAccountSetupStore();

  return (
    <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold mb-6`}>{t("whyLearn")}</Text>
      {REASONS.map(reasonItem => (
        <TouchableOpacity
          key={reasonItem.key}
          style={[
            tw`w-64 py-4 rounded-xl mb-4 border-2`,
            reason === reasonItem.key ? tw`bg-blue-700 border-blue-700` : tw`bg-white border-gray-300`
          ]}
          onPress={() => setField("reason", reasonItem.key)}
        >
          <Text style={tw`text-lg font-bold text-center ${reason === reasonItem.key ? 'text-white' : 'text-blue-700'}`}>
            {t(reasonItem.labelKey)}
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
          disabled={!reason}
        >
          <Text style={tw`text-white text-lg font-bold text-center`}>
            {t("next")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
