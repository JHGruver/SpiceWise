// Core data types for SpiceWise

export interface NotableCompound {
  name: string
  description: string
}

export interface HerbSpice {
  id: string
  name: string
  scientificName: string
  category: 'herb' | 'spice'
  description: string
  imageUrl?: string
  imageEmoji?: string
  healthBenefits: HealthBenefit[]
  culinaryUses: string[]
  precautions: string[]
  interactions: string[]
  // IA v2 additions
  notableCompounds: NotableCompound[]
  growthOrigin: string
  hardinessZone: string
  healingPotential: string[]
  pairsWith: string[]
  tastProfile: string
}

export interface CabinetItem {
  id: string
  herbSpiceId: string
  location: 'pantry' | 'fridge' | 'cupboard' | 'medicine-cabinet'
  quantity?: string
  expirationDate?: string
  addedAt: string
  notes?: string
}

export interface OnboardingState {
  hasSeenWelcome: boolean
  hasAcceptedDisclaimer: boolean
  hasCompletedInstructions: boolean
  completedAt?: string
}

export interface HealthBenefit {
  condition: string
  description: string
  evidenceLevel: 'traditional' | 'preliminary' | 'moderate' | 'strong'
}

export interface HealthCondition {
  id: string
  name: string
  category: string
  description: string
  relatedHerbsSpices: string[] // IDs of herbs/spices
}

export interface Recipe {
  id: string
  name: string
  ingredients: Ingredient[]
  instructions: string[]
  healthTags: string[]
}

export interface Ingredient {
  name: string
  amount: string
  isHerbSpice: boolean
  herbSpiceId?: string
}

export interface RemedySuggestion {
  herbSpice: HerbSpice
  reason: string
  usage: string
  dosage?: string
}

export interface UserHealthGoal {
  id: string
  name: string
  description: string
}
