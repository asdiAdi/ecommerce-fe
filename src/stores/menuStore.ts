import { create } from "zustand";
import Cookies from "js-cookie";

// TODO: menu count
type AuthStore = {
  isAuth: boolean;
  token: string | null;
  logout: () => void;
  setToken: (token: string) => void;
};

export const useMenuStore = create<AuthStore>((set) => ({
  isAuth: !!Cookies.get("token"),

  token: Cookies.get("token") || null,

  setToken: (token: string) => {
    Cookies.set("token", token, { expires: 7 });
    set(() => ({ isAuth: true, token: token }));
  },

  logout: () => {
    Cookies.remove("token");
    set({ token: null, isAuth: false });
  },
}));
