import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import tw from "twrnc";

interface LaunchScreenProps {
  onFinish: () => void;
}

export const LaunchScreen: React.FC<LaunchScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={tw`flex-1 justify-center items-center bg-blue-700`}>
      <Image
        source={require("@crewlingo/mobile/assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: { width: 150, height: 150 },
});
