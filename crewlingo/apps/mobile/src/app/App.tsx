import 'react-native-url-polyfill/auto';
import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import '@crewlingo/mobile-i18n';

import { LaunchScreen } from "@crewlingo/mobile-onboarding";
import { WelcomeScreen } from "@crewlingo/mobile-onboarding";
import { OnboardingMascotScreen } from "@crewlingo/mobile-onboarding";
import { AccountSetupLanguageStep } from "@crewlingo/mobile-onboarding";
import { AccountSetupTargetLanguageStep } from "@crewlingo/mobile-onboarding";
import { AccountSetupHowFoundStep } from "@crewlingo/mobile-onboarding";
import { AccountSetupLevelStep } from "@crewlingo/mobile-onboarding";
import { AccountSetupReasonStep } from "@crewlingo/mobile-onboarding";
import { AccountSetupDailyGoalStep } from "@crewlingo/mobile-onboarding";
import { AccountSetupNotificationStep } from "@crewlingo/mobile-onboarding";
import { AccountSetupModeStep } from "@crewlingo/mobile-onboarding";
import { AccountSetupCareerPathStep } from "@crewlingo/mobile-onboarding";
import { AccountSetupAuthStep } from "@crewlingo/mobile-onboarding";
import { Home } from "@crewlingo/mobile-onboarding";

export type RootStackParamList = {
  AccountSetupAuthStep: undefined;
  Home: undefined;
};
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Launch" component={LaunchScreenWrapper} />
        <Stack.Screen name="Welcome" component={WelcomeScreenWrapper} />
        <Stack.Screen name="Mascot" component={OnboardingMascotScreenWrapper} />
        <Stack.Screen name="Language" component={LanguageStepWrapper} />
        <Stack.Screen name="TargetLanguage" component={TargetLanguageStepWrapper} />
        <Stack.Screen name="HowFound" component={HowFoundStepWrapper} />
        <Stack.Screen name="Level" component={LevelStepWrapper} />
        <Stack.Screen name="Reason" component={ReasonStepWrapper} />
        <Stack.Screen name="DailyGoal" component={DailyGoalStepWrapper} />
        <Stack.Screen name="Notification" component={NotificationStepWrapper} />
        <Stack.Screen name="Mode" component={ModeStepWrapper} />
        <Stack.Screen name="CareerPath" component={CareerPathStepWrapper} />
        <Stack.Screen name="Auth" component={AuthStepWrapper} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- WRAPPERS для навигации ---
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
      onSignIn={() => {/* переход на экран логина или модалку */}}
    />
  );
}

function OnboardingMascotScreenWrapper({ navigation }: any) {
  return (
    <OnboardingMascotScreen
      onContinue={() => navigation.navigate("Language")}
      onBack={() => navigation.goBack()}
    />
  );
}

function LanguageStepWrapper({ navigation }: any) {
  return (
    <AccountSetupLanguageStep
      onNext={() => navigation.navigate("TargetLanguage")}
    />
  );
}

function TargetLanguageStepWrapper({ navigation }: any) {
  return (
    <AccountSetupTargetLanguageStep
      onNext={() => navigation.navigate("HowFound")}
      onBack={() => navigation.goBack()}
    />
  );
}

function HowFoundStepWrapper({ navigation }: any) {
  return (
    <AccountSetupHowFoundStep
      onNext={() => navigation.navigate("Level")}
      onBack={() => navigation.goBack()}
    />
  );
}

function LevelStepWrapper({ navigation }: any) {
  return (
    <AccountSetupLevelStep
      onNext={() => navigation.navigate("Reason")}
      onBack={() => navigation.goBack()}
    />
  );
}

function ReasonStepWrapper({ navigation }: any) {
  return (
    <AccountSetupReasonStep
      onNext={() => navigation.navigate("DailyGoal")}
      onBack={() => navigation.goBack()}
    />
  );
}

function DailyGoalStepWrapper({ navigation }: any) {
  return (
    <AccountSetupDailyGoalStep
      onNext={() => navigation.navigate("Notification")}
      onBack={() => navigation.goBack()}
    />
  );
}

function NotificationStepWrapper({ navigation }: any) {
  return (
    <AccountSetupNotificationStep
      onNext={() => navigation.navigate("Mode")}
      onBack={() => navigation.goBack()}
    />
  );
}

function ModeStepWrapper({ navigation }: any) {
  return (
    <AccountSetupModeStep
      onNext={() => navigation.navigate("CareerPath")}
      onBack={() => navigation.goBack()}
    />
  );
}

function CareerPathStepWrapper({ navigation }: any) {
  return (
    <AccountSetupCareerPathStep
      onNext={() => navigation.navigate("Auth")}
      onBack={() => navigation.goBack()}
    />
  );
}

function AuthStepWrapper() {
  return <AccountSetupAuthStep />;
}
