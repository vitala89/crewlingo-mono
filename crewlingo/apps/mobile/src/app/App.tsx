import 'react-native-url-polyfill/auto';
import React, { useState } from "react";
import '@crewlingo/mobile-i18n'; // 1 раз, до App

import { LaunchScreen } from "@crewlingo/mobile-onboarding";
import { WelcomeScreen } from "@crewlingo/mobile-onboarding";
import { OnboardingMascotScreen } from "@crewlingo/mobile-onboarding";

export default function App() {
  const [screen, setScreen] = useState<"launch" | "welcome" | "mascot">("launch");

  if (screen === "launch")
    return <LaunchScreen onFinish={() => setScreen("welcome")} />;
  if (screen === "welcome")
    return (
      <WelcomeScreen
        onGetStarted={() => setScreen("mascot")}
        onSignIn={() => {/* add your sign in logic */}}
      />
    );
  if (screen === "mascot")
    return (
      <OnboardingMascotScreen
        onContinue={() => {/* далее: например, setScreen("next") */}}
        onBack={() => setScreen("welcome")}
      />
    );
  return null;
}
