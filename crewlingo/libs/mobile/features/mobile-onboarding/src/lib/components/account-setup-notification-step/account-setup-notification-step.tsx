import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";
import { useAccountSetupStore } from "../../model/useAccountSetupStore";

export const AccountSetupNotificationStep = ({ onNext, onBack }: any) => {
  const { t } = useTranslation();
  const { notificationsAllowed, setField } = useAccountSetupStore();

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-2xl font-bold mb-8 text-center`}>
        {t("notifications")}
      </Text>
      <View style={tw`flex-row mb-8`}>
        <TouchableOpacity
          style={[
            tw`w-32 py-4 rounded-xl mx-2 border-2`,
            notificationsAllowed ? tw`bg-blue-700 border-blue-700` : tw`bg-white border-gray-300`
          ]}
          onPress={() => setField("notificationsAllowed", true)}
        >
          <Text style={tw`text-lg font-bold text-center ${notificationsAllowed ? 'text-white' : 'text-blue-700'}`}>
            {t("allow")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`w-32 py-4 rounded-xl mx-2 border-2`,
            !notificationsAllowed ? tw`bg-blue-700 border-blue-700` : tw`bg-white border-gray-300`
          ]}
          onPress={() => setField("notificationsAllowed", false)}
        >
          <Text style={tw`text-lg font-bold text-center ${!notificationsAllowed ? 'text-white' : 'text-blue-700'}`}>
            {t("dontAllow")}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row w-64`}>
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
          disabled={notificationsAllowed === null}
        >
          <Text style={tw`text-white text-lg font-bold text-center`}>
            {t("next")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
