import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";


export const WelcomeScreen = ({ onGetStarted, onSignIn }: any) => {
  const { t } = useTranslation();
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Image
        source={require("@crewlingo/mobile/assets/logo.png")}
        style={{ width: 120, height: 120, marginBottom: 16 }}
        resizeMode="contain"
      />
      <Text style={tw`text-blue-700 text-3xl font-extrabold mb-2`}>{t("crewLingo")}</Text>
      <Text style={tw`text-gray-500 text-base mb-10`}>{t("welcomeScreen")}</Text>
      <TouchableOpacity
        style={tw`bg-blue-700 w-64 py-4 rounded-xl mb-4`}
        onPress={onGetStarted}
      >
        <Text style={tw`text-white text-lg font-bold text-center`}>{t("getStarted")}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`border-2 border-blue-700 w-64 py-4 rounded-xl`}
        onPress={onSignIn}
      >
        <Text style={tw`text-blue-700 text-lg font-bold text-center`}>
          {t("alreadyHaveAnAccount")}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
