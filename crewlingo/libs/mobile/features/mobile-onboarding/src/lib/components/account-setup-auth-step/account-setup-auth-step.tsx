import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useTranslation } from "react-i18next";
// import auth logic as needed

export const AccountSetupAuthStep = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Обработчики для регистрации/логина

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
      <TouchableOpacity style={tw`bg-blue-700 w-full py-4 rounded-xl mb-3`}>
        <Text style={tw`text-white text-lg font-bold text-center`}>
          {t("register")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={tw`text-blue-700 text-base font-bold text-center mb-2`}>
          {t("signInWithGoogle")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={tw`text-blue-700 text-base font-bold text-center mb-2`}>
          {t("signInWithApple")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={tw`text-gray-400 text-base text-center`}>
          {t("continueAsGuest")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
