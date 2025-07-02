import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";
import { useAccountSetupStore } from "../../model/useAccountSetupStore";

const GOALS = [
  { key: "5", labelKey: "goal5" },
  { key: "10", labelKey: "goal10" },
  { key: "15", labelKey: "goal15" }
];

export const AccountSetupDailyGoalStep = ({ onNext, onBack }: any) => {
  const { t } = useTranslation();
  const { dailyGoal, setField } = useAccountSetupStore();

  return (
    <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold mb-6`}>{t("dailyGoal")}</Text>
      {GOALS.map(goal => (
        <TouchableOpacity
          key={goal.key}
          style={[
            tw`w-64 py-4 rounded-xl mb-4 border-2`,
            dailyGoal === goal.key ? tw`bg-blue-700 border-blue-700` : tw`bg-white border-gray-300`
          ]}
          onPress={() => setField("dailyGoal", goal.key)}
        >
          <Text style={tw`text-lg font-bold text-center ${dailyGoal === goal.key ? 'text-white' : 'text-blue-700'}`}>
            {t(goal.labelKey)}
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
          disabled={!dailyGoal}
        >
          <Text style={tw`text-white text-lg font-bold text-center`}>
            {t("next")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
