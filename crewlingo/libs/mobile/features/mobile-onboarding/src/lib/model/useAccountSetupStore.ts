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
  userId?: string;
  profile?: any;
  setField: (field: string, value: any) => void;
  setProfile: (profile: any) => void;
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
  userId: undefined,
  profile: undefined,
  setField: (field, value) => set({ [field]: value }),
  setProfile: (profile) => set({ profile }),
}));
