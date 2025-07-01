import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

interface MobileUIButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}

export const MobileUIButton: React.FC<MobileUIButtonProps> = ({ children, onPress }) => (
  <TouchableOpacity style={tw`bg-blue-600 rounded-xl px-4 py-3`} onPress={onPress}>
    <Text style={tw`text-white text-center text-base font-bold`}>{children}</Text>
  </TouchableOpacity>
);
