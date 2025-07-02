import { create } from "zustand";

export interface AccountSetupState {
  nativeLanguage: string;
  targetLanguage: string;
  howFound: string;
  level: string;
  reason: string;
  dailyGoal: string;
  notificationsAllowed: boolean;
  mode: string;
  department: string;
  // Добавь, если что-то понадобится ещё
  setField: (field: string, value: any) => void;
}

export const useAccountSetupStore = create<AccountSetupState>((set) => ({
  nativeLanguage: "",
  targetLanguage: "",
  howFound: "",
  level: "",
  reason: "",
  dailyGoal: "",
  notificationsAllowed: false,
  mode: "",
  department: "",
  setField: (field, value) => set({ [field]: value }),
}));
