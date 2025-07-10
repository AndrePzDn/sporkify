import type { UserCredential } from "firebase/auth";
import type { NavigateFunction } from "react-router-dom";
import { create } from "zustand";

interface AuthState {
  user: UserCredential | null;
  isAuthenticated: boolean;
  loginAndRedirect: (user: UserCredential, navigate: NavigateFunction) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  loginAndRedirect: (user: UserCredential, navigate) => {
    set({ user, isAuthenticated: true });
    navigate("/home");
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(user));
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
  },
}));
