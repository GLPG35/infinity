import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
	language: 'en'|'es',
	setLanguage: (language: 'en'|'es') => void
}

export const useSiteStore = create<State>()(persist((set) => ({
	language: 'en',
	setLanguage: (language) => {
		set({ language })
	}
}), { name: 'infinity' }))