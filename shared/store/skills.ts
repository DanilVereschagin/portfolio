import { create } from 'zustand';

type State = {
	activeTab: string;
	setActiveTab: (tab: string) => void;
};

export const useSkillsStore = create<State>((set) => ({
	activeTab: 'level' as string,
	setActiveTab: (tab: string) => set({ activeTab: tab }),
}));
