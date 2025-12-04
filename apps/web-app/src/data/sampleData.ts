// Sample data structure - to be expanded with real content
import type { HerbSpice, HealthCondition, UserHealthGoal } from '../types'

export const sampleHerbsSpices: HerbSpice[] = [
  {
    id: 'turmeric',
    name: 'Turmeric',
    scientificName: 'Curcuma longa',
    category: 'spice',
    description: 'A golden-yellow spice commonly used in Indian cuisine, known for its anti-inflammatory properties.',
    healthBenefits: [
      {
        condition: 'Inflammation',
        description: 'Contains curcumin, which has powerful anti-inflammatory effects',
        evidenceLevel: 'strong',
      },
      {
        condition: 'Joint Health',
        description: 'May help reduce joint pain and stiffness',
        evidenceLevel: 'moderate',
      },
    ],
    culinaryUses: ['Curries', 'Golden milk', 'Rice dishes', 'Smoothies'],
    precautions: ['May interact with blood thinners', 'High doses may cause digestive issues'],
    interactions: ['Blood thinning medications', 'Diabetes medications'],
    notableCompounds: [
      { name: 'Curcumin', description: 'Primary active compound with potent anti-inflammatory and antioxidant properties' },
      { name: 'Turmerone', description: 'Essential oil compound that may support brain health' },
    ],
    growthOrigin: 'Southeast Asia, primarily India and Indonesia',
    hardinessZone: 'USDA Zones 8-11',
    healingPotential: ['Anti-inflammatory support', 'Joint health', 'Cognitive function'],
    pairsWith: ['Black pepper', 'Ginger', 'Cumin', 'Coriander'],
    tastProfile: 'Earthy, slightly bitter, warm',
  },
  {
    id: 'ginger',
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    category: 'spice',
    description: 'A pungent root used worldwide for both culinary and medicinal purposes.',
    healthBenefits: [
      {
        condition: 'Nausea',
        description: 'Effective for reducing nausea and morning sickness',
        evidenceLevel: 'strong',
      },
      {
        condition: 'Digestion',
        description: 'Helps stimulate digestion and reduce bloating',
        evidenceLevel: 'moderate',
      },
    ],
    culinaryUses: ['Stir-fries', 'Teas', 'Baked goods', 'Marinades'],
    precautions: ['May cause heartburn in some people'],
    interactions: ['Blood thinning medications'],
    notableCompounds: [
      { name: 'Gingerol', description: 'Main bioactive compound responsible for anti-nausea and anti-inflammatory effects' },
      { name: 'Shogaol', description: 'Formed when ginger is dried, has potent antioxidant properties' },
    ],
    growthOrigin: 'Southeast Asia, likely originated in Maritime Southeast Asia',
    hardinessZone: 'USDA Zones 9-12',
    healingPotential: ['Nausea relief', 'Digestive support', 'Anti-inflammatory'],
    pairsWith: ['Garlic', 'Turmeric', 'Lemon', 'Honey'],
    tastProfile: 'Spicy, pungent, warm, slightly sweet',
  },
]

export const healthGoals: UserHealthGoal[] = [
  { id: 'inflammation', name: 'Reduce Inflammation', description: 'Combat chronic inflammation' },
  { id: 'digestion', name: 'Improve Digestion', description: 'Support digestive health' },
  { id: 'immunity', name: 'Boost Immunity', description: 'Strengthen immune system' },
  { id: 'energy', name: 'Increase Energy', description: 'Natural energy support' },
  { id: 'sleep', name: 'Better Sleep', description: 'Improve sleep quality' },
  { id: 'stress', name: 'Manage Stress', description: 'Reduce stress and anxiety' },
]

export const healthConditions: HealthCondition[] = [
  {
    id: 'arthritis',
    name: 'Arthritis',
    category: 'Joint Health',
    description: 'Joint inflammation and pain',
    relatedHerbsSpices: ['turmeric', 'ginger'],
  },
  {
    id: 'digestive-issues',
    name: 'Digestive Issues',
    category: 'Digestive Health',
    description: 'General digestive discomfort',
    relatedHerbsSpices: ['ginger', 'peppermint'],
  },
]
