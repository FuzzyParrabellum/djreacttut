import { create } from "zustand";

interface SignUpStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useSignUpModal = create<SignUpStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useSignUpModal;
