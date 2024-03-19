import { create } from 'zustand';

interface ITagStore {
  tagState: string;
  setTags: (tagState: string) => void;
}

export const useTagStore = create<ITagStore>((set) => ({
  tagState: '',
  setTags: (tagState) => set({ tagState }),
}));
