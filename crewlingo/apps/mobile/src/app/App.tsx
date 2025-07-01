import React from "react";
import { Text, View } from 'react-native';
import { MobileUIButton } from "@crewlingo/mobile-button";
import tw from "twrnc";
import { Alert } from "react-native";
import '@crewlingo/mobile-i18n'; // 1 раз, до App
import { useTranslation } from "react-i18next";


export default function App() {
  const { t } = useTranslation();

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <MobileUIButton onPress={() => Alert.alert("Pressed!")}>Старт</MobileUIButton>
      <Text>{t("welcome")}</Text>
    </View>
  );
}
