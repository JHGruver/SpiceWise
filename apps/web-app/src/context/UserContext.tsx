import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { CabinetItem, OnboardingState } from '../types'

export interface UserProfile {
  name: string
  conditions: string[]
  goals: string[]
  allergies: string[]
  dietaryRestrictions: string[]
  savedHerbs: string[]
  cabinet: CabinetItem[]
  onboarding: OnboardingState
}

interface UserContextType {
  user: UserProfile
  setUser: (user: UserProfile) => void
  updateProfile: (updates: Partial<UserProfile>) => void
  toggleCondition: (conditionId: string) => void
  toggleGoal: (goalId: string) => void
  toggleSavedHerb: (herbId: string) => void
  hasCompletedProfile: boolean
  hasCompletedOnboarding: boolean
  completeOnboardingStep: (step: keyof OnboardingState) => void
  addToCabinet: (item: Omit<CabinetItem, 'id' | 'addedAt'>) => void
  removeFromCabinet: (itemId: string) => void
  updateCabinetItem: (itemId: string, updates: Partial<CabinetItem>) => void
}

const defaultOnboarding: OnboardingState = {
  hasSeenWelcome: false,
  hasAcceptedDisclaimer: false,
  hasCompletedInstructions: false,
}

const defaultUser: UserProfile = {
  name: '',
  conditions: [],
  goals: [],
  allergies: [],
  dietaryRestrictions: [],
  savedHerbs: [],
  cabinet: [],
  onboarding: defaultOnboarding,
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('spicewise-user')
    if (saved) {
      const parsed = JSON.parse(saved)
      // Ensure new fields exist for existing users
      return {
        ...defaultUser,
        ...parsed,
        cabinet: parsed.cabinet || [],
        onboarding: { ...defaultOnboarding, ...parsed.onboarding },
      }
    }
    return defaultUser
  })

  useEffect(() => {
    localStorage.setItem('spicewise-user', JSON.stringify(user))
  }, [user])

  const updateProfile = (updates: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...updates }))
  }

  const toggleCondition = (conditionId: string) => {
    setUser(prev => ({
      ...prev,
      conditions: prev.conditions.includes(conditionId)
        ? prev.conditions.filter(c => c !== conditionId)
        : [...prev.conditions, conditionId]
    }))
  }

  const toggleGoal = (goalId: string) => {
    setUser(prev => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter(g => g !== goalId)
        : [...prev.goals, goalId]
    }))
  }

  const toggleSavedHerb = (herbId: string) => {
    setUser(prev => ({
      ...prev,
      savedHerbs: prev.savedHerbs.includes(herbId)
        ? prev.savedHerbs.filter(h => h !== herbId)
        : [...prev.savedHerbs, herbId]
    }))
  }

  const completeOnboardingStep = (step: keyof OnboardingState) => {
    setUser(prev => ({
      ...prev,
      onboarding: {
        ...prev.onboarding,
        [step]: true,
        ...(step === 'hasCompletedInstructions' ? { completedAt: new Date().toISOString() } : {}),
      }
    }))
  }

  const addToCabinet = (item: Omit<CabinetItem, 'id' | 'addedAt'>) => {
    const newItem: CabinetItem = {
      ...item,
      id: `cabinet-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      addedAt: new Date().toISOString(),
    }
    setUser(prev => ({
      ...prev,
      cabinet: [...prev.cabinet, newItem]
    }))
  }

  const removeFromCabinet = (itemId: string) => {
    setUser(prev => ({
      ...prev,
      cabinet: prev.cabinet.filter(item => item.id !== itemId)
    }))
  }

  const updateCabinetItem = (itemId: string, updates: Partial<CabinetItem>) => {
    setUser(prev => ({
      ...prev,
      cabinet: prev.cabinet.map(item =>
        item.id === itemId ? { ...item, ...updates } : item
      )
    }))
  }

  const hasCompletedProfile = user.name.length > 0 && (user.conditions.length > 0 || user.goals.length > 0)

  const hasCompletedOnboarding =
    user.onboarding.hasSeenWelcome &&
    user.onboarding.hasAcceptedDisclaimer &&
    user.onboarding.hasCompletedInstructions

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      updateProfile,
      toggleCondition,
      toggleGoal,
      toggleSavedHerb,
      hasCompletedProfile,
      hasCompletedOnboarding,
      completeOnboardingStep,
      addToCabinet,
      removeFromCabinet,
      updateCabinetItem,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
