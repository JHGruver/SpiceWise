// Core data types for SpiceWise - shared across web app and website

export interface HerbSpice {
  id: string
  name: string
  scientificName: string
  category: 'herb' | 'spice'
  description: string
  imageUrl?: string
  healthBenefits: HealthBenefit[]
  culinaryUses: string[]
  precautions: string[]
  interactions: string[]
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

export interface UserProfile {
  name: string
  healthProfile: HealthProfile
}

export interface HealthProfile {
  conditions: string[]
  allergies: string[]
  goals: string[]
  dietaryRestrictions: string[]
}

// Website-specific types
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  featuredImage?: string
  relatedHerbsSpices?: string[]
}

export interface Testimonial {
  id: string
  name: string
  quote: string
  rating: number
  date: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}
