import { create } from 'zustand';

type ToastVariant = 'warning' | 'success' | 'error' | 'info';

interface ToastStore {
  isOpen: boolean;
  message: string;
  variant: ToastVariant;
  showToast: (message: string, variant: ToastVariant) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  isOpen: false,
  message: '',
  variant: 'info',
  showToast: (message, variant) => {
    set({ isOpen: true, message, variant });
    setTimeout(() => {
      set({ isOpen: false });
    }, 3000);
  },
  hideToast: () => {
    set({ isOpen: false, message: '', variant: 'info' });
  },
}));
