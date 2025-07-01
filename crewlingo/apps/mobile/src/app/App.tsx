import { LaunchScreen } from '@crewlingo/mobile-onboarding';
import { WelcomeScreen } from '@crewlingo/mobile-onboarding';
import React, { useState } from 'react';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  if (!showWelcome) {
    return <LaunchScreen onFinish={() => setShowWelcome(true)} />;
  }

  return (
    <WelcomeScreen
      onGetStarted={() => {
        /* навигация к регистрации */
      }}
      onSignIn={() => {
        /* навигация к логину */
      }}
    />
  );
}
