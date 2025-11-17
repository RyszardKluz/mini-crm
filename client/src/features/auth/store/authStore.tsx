import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { apiClient } from '../../../api/apiClient';

export interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: true,

      login: async (email, password) => {
        const { user } = await apiClient<{ user: User }>('/auth/login', {
          method: 'POST',
          body: JSON.stringify({ email: email, password: password }),
        });
        console.log(user);
        set({ user, isAuthenticated: true });
      },

      fetchUser: async () => {
        try {
          const { user } = await apiClient<{ user: User }>('/auth/me', {
            credentials: 'include',
          });

          set({ user, isAuthenticated: true, loading: false });
        } catch {
          set({ user: null, isAuthenticated: false, loading: false });
        }
      },

      logout: async () => {
        await apiClient('/auth/logout', { method: 'POST' });
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
