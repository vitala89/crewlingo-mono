import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";
import { useAccountSetupStore } from "../../model/useAccountSetupStore";

const OPTIONS = [
  { key: "friends", labelKey: "howFoundFriends" },
  { key: "search", labelKey: "howFoundSearch" },
  { key: "ad", labelKey: "howFoundAd" },
  { key: "other", labelKey: "howFoundOther" }
];

export const AccountSetupHowFoundStep = ({ onNext, onBack }: any) => {
  const { t } = useTranslation();
  const { howFound, setField } = useAccountSetupStore();

  return (
    <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold mb-6`}>{t("howDidYouFindUs")}</Text>
      {OPTIONS.map(opt => (
        <TouchableOpacity
          key={opt.key}
          style={[
            tw`w-64 py-4 rounded-xl mb-4 border-2`,
            howFound === opt.key ? tw`bg-blue-700 border-blue-700` : tw`bg-white border-gray-300`
          ]}
          onPress={() => setField("howFound", opt.key)}
        >
          <Text style={tw`text-lg font-bold text-center ${howFound === opt.key ? 'text-white' : 'text-blue-700'}`}>
            {t(opt.labelKey)}
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
          disabled={!howFound}
        >
          <Text style={tw`text-white text-lg font-bold text-center`}>
            {t("next")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
