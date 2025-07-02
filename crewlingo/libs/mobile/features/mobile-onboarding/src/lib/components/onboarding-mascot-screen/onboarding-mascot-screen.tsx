import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';

interface OnboardingMascotScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

export const OnboardingMascotScreen: React.FC<OnboardingMascotScreenProps> = ({
  onContinue,
  onBack,
}) => {
  const { t } = useTranslation();

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Back arrow */}
      <TouchableOpacity
        style={tw`absolute top-12 left-5 z-10`}
        onPress={onBack}
      >
        <Ionicons name="arrow-back" size={32} color="#6b7280" />
      </TouchableOpacity>

      {/* Center mascot & speech bubble */}
      <View style={tw`flex-1 justify-center items-center`}>
        {/* Speech bubble */}
        <View style={tw`bg-gray-100 px-6 py-3 rounded-2xl mb-2`}>
          <Text style={tw`text-gray-700 text-base`}>
            {t('onboardingMascotGreeting')}
          </Text>
        </View>
        {/* Mascot image */}
        <Image
          source={require('@crewlingo/mobile/assets/welcome.png')}
          style={{ width: 110, height: 110 }}
          resizeMode="contain"
        />
      </View>
      {/* Continue button */}
      <TouchableOpacity
        style={tw`absolute bottom-10 self-center w-11/12 bg-blue-700 py-4 rounded-xl`}
        onPress={onContinue}
      >
        <Text style={tw`text-white text-lg font-bold text-center`}>
          {t('continue')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
