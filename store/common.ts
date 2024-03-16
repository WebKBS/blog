import { create } from 'zustand';

interface IMenuToggle {
  menuOpen: boolean;
  setToggleMenu: (menuOpen: boolean) => void;
}

export const useMenuToggle = create<IMenuToggle>((set) => ({
  menuOpen: false,
  setToggleMenu: (menuOpen) => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    set({ menuOpen });
  },
}));
