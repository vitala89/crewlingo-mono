import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "@crewlingo/mobile/src/app/App";
import { useAccountSetupStore } from "@crewlingo/mobile-onboarding";

export const AccountSetupAuthStep: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const {
    nativeLanguage,
    targetLanguage,
    mode,
    department,
    setField,
    setProfile,
  } = useAccountSetupStore();

  // "Зарегистрироваться"
  const handleRegister = () => {
    if (!email || !password || !name) {
      Alert.alert(t("pleaseFillAllFields"));
      return;
    }
    const fakeUserId = Math.random().toString(36).substring(2, 10);
    const profile = {
      userId: fakeUserId,
      name,
      email,
      nativeLanguage,
      targetLanguage,
      mode,
      department,
      currentRank: "engine_cadet",
      progress: { module: 1, lesson: 1, xp: 0 },
    };
    setField("userId", fakeUserId);
    setProfile(profile);
    navigation.replace("Home");
  };

  // Гостевой режим
  const handleGuest = () => {
    const fakeUserId = Math.random().toString(36).substring(2, 10);
    const profile = {
      userId: fakeUserId,
      name: "Guest",
      email: "",
      nativeLanguage,
      targetLanguage,
      mode,
      department,
      currentRank: "engine_cadet",
      progress: { module: 1, lesson: 1, xp: 0 },
      guest: true,
    };
    setField("userId", fakeUserId);
    setProfile(profile);
    navigation.replace("Home");
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-white px-6`}>
      <Text style={tw`text-2xl font-bold mb-6`}>{t("register")}</Text>
      <TextInput
        placeholder={t("name")}
        style={tw`w-full border border-gray-300 rounded-xl px-4 py-3 mb-3`}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder={t("email")}
        style={tw`w-full border border-gray-300 rounded-xl px-4 py-3 mb-3`}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder={t("password")}
        style={tw`w-full border border-gray-300 rounded-xl px-4 py-3 mb-3`}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={tw`bg-blue-700 w-full py-4 rounded-xl mb-3`}
        onPress={handleRegister}
      >
        <Text style={tw`text-white text-lg font-bold text-center`}>
          {t("register")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGuest}>
        <Text style={tw`text-gray-400 text-base text-center`}>
          {t("continueAsGuest")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
