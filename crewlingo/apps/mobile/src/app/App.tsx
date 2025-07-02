import 'react-native-url-polyfill/auto';
import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import '@crewlingo/mobile-i18n';

import { LaunchScreen } from "@crewlingo/mobile-onboarding";
import { WelcomeScreen } from "@crewlingo/mobile-onboarding";
import { OnboardingMascotScreen } from "@crewlingo/mobile-onboarding";
// импортируй другие шаги по мере готовности

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Launch" component={LaunchScreenWrapper} />
        <Stack.Screen name="Welcome" component={WelcomeScreenWrapper} />
        <Stack.Screen name="Mascot" component={OnboardingMascotScreenWrapper} />
        {/* ...other steps */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Обертки нужны для передачи navigation
function LaunchScreenWrapper({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace("Welcome"), 2000);
    return () => clearTimeout(timer);
  }, []);
  return <LaunchScreen onFinish={() => navigation.replace("Welcome")} />;
}

function WelcomeScreenWrapper({ navigation }: any) {
  return (
    <WelcomeScreen
      onGetStarted={() => navigation.navigate("Mascot")}
      onSignIn={() => {/* навигация к экрану логина */}}
    />
  );
}

function OnboardingMascotScreenWrapper({ navigation }: any) {
  return (
    <OnboardingMascotScreen
      onContinue={() => {/* например, navigation.navigate("NextStep") */}}
      onBack={() => navigation.goBack()}
    />
  );
}
