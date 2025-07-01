import React from "react";
import { View } from "react-native";
import { MobileUIButton } from "@crewlingo/mobile-button";
import tw from "twrnc";
import { Alert } from "react-native";

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <MobileUIButton onPress={() => Alert.alert("Pressed!")}>Старт</MobileUIButton>
    </View>
  );
}
