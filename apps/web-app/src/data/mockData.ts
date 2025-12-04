// Expanded mock data for demonstration
import type { NotableCompound, CabinetItem, OnboardingState } from '../types'

export interface HerbSpice {
  id: string
  name: string
  scientificName: string
  category: 'herb' | 'spice'
  description: string
  iconName: string
  imageUrl: string
  healthBenefits: {
    condition: string
    description: string
    evidenceLevel: 'traditional' | 'preliminary' | 'moderate' | 'strong'
  }[]
  culinaryUses: string[]
  precautions: string[]
  tastProfile: string
  pairsWith: string[]
  // IA v2 additions
  notableCompounds: NotableCompound[]
  growthOrigin: string
  hardinessZone: string
  healingPotential: string[]
}

export type { CabinetItem, OnboardingState }

export const herbsAndSpices: HerbSpice[] = [
  {
    id: 'turmeric',
    name: 'Turmeric',
    scientificName: 'Curcuma longa',
    category: 'spice',
    description: 'A golden-yellow spice from the ginger family, turmeric has been used in India for thousands of years as both a spice and medicinal herb.',
    iconName: 'turmeric',
    imageUrl: '/images/spices/turmeric.jpg',
    healthBenefits: [
      { condition: 'Inflammation', description: 'Contains curcumin with powerful anti-inflammatory effects', evidenceLevel: 'strong' },
      { condition: 'Joint Pain', description: 'May help reduce arthritis symptoms', evidenceLevel: 'moderate' },
      { condition: 'Brain Health', description: 'May boost brain-derived neurotrophic factor', evidenceLevel: 'preliminary' },
      { condition: 'Heart Health', description: 'May improve endothelial function', evidenceLevel: 'moderate' },
    ],
    culinaryUses: ['Curries', 'Golden milk lattes', 'Rice dishes', 'Smoothies', 'Soups'],
    precautions: ['May interact with blood thinners', 'High doses may cause digestive issues', 'Absorbs better with black pepper'],
    tastProfile: 'Earthy, slightly bitter, warm',
    pairsWith: ['Black pepper', 'Ginger', 'Cumin', 'Coriander'],
    notableCompounds: [
      { name: 'Curcumin', description: 'Primary active compound with potent anti-inflammatory and antioxidant properties' },
      { name: 'Turmerone', description: 'Essential oil compound that may support brain health' },
      { name: 'Demethoxycurcumin', description: 'Curcuminoid with antioxidant effects' },
    ],
    growthOrigin: 'Southeast Asia, primarily India and Indonesia',
    hardinessZone: 'USDA Zones 8-11',
    healingPotential: ['Anti-inflammatory support', 'Joint health', 'Cognitive function', 'Digestive wellness'],
  },
  {
    id: 'ginger',
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    category: 'spice',
    description: 'A flowering plant whose rhizome (root) is widely used as a spice and folk medicine. One of the healthiest spices on the planet.',
    iconName: 'ginger',
    imageUrl: '/images/spices/ginger.jpg',
    healthBenefits: [
      { condition: 'Nausea', description: 'Highly effective against nausea and morning sickness', evidenceLevel: 'strong' },
      { condition: 'Digestion', description: 'Accelerates gastric emptying and reduces bloating', evidenceLevel: 'strong' },
      { condition: 'Muscle Pain', description: 'May reduce exercise-induced muscle soreness', evidenceLevel: 'moderate' },
      { condition: 'Blood Sugar', description: 'May lower blood sugar levels', evidenceLevel: 'preliminary' },
    ],
    culinaryUses: ['Stir-fries', 'Teas', 'Baked goods', 'Marinades', 'Soups', 'Smoothies'],
    precautions: ['May cause heartburn in some people', 'Can interact with blood thinners'],
    tastProfile: 'Spicy, pungent, warm, slightly sweet',
    pairsWith: ['Garlic', 'Turmeric', 'Lemon', 'Honey'],
    notableCompounds: [
      { name: 'Gingerol', description: 'Main bioactive compound responsible for anti-nausea and anti-inflammatory effects' },
      { name: 'Shogaol', description: 'Formed when ginger is dried, has potent antioxidant properties' },
      { name: 'Zingiberene', description: 'Essential oil that gives ginger its distinctive aroma' },
    ],
    growthOrigin: 'Southeast Asia, likely originated in Maritime Southeast Asia',
    hardinessZone: 'USDA Zones 9-12',
    healingPotential: ['Nausea relief', 'Digestive support', 'Anti-inflammatory', 'Circulation boost'],
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon',
    scientificName: 'Cinnamomum verum',
    category: 'spice',
    description: 'Made from the inner bark of trees called Cinnamomum. Used as a flavoring and traditional medicine for centuries.',
    iconName: 'cinnamon',
    imageUrl: '/images/spices/cinnamon.jpg',
    healthBenefits: [
      { condition: 'Blood Sugar', description: 'Can lower blood sugar and improve insulin sensitivity', evidenceLevel: 'strong' },
      { condition: 'Antioxidant', description: 'Loaded with powerful antioxidants like polyphenols', evidenceLevel: 'strong' },
      { condition: 'Heart Health', description: 'May reduce cholesterol and blood pressure', evidenceLevel: 'moderate' },
      { condition: 'Anti-inflammatory', description: 'Helps fight inflammation in the body', evidenceLevel: 'moderate' },
    ],
    culinaryUses: ['Oatmeal', 'Coffee', 'Baked goods', 'Curries', 'Apple dishes', 'Smoothies'],
    precautions: ['Cassia cinnamon contains coumarin - use Ceylon for daily use', 'May interact with diabetes medications'],
    tastProfile: 'Sweet, warm, woody',
    pairsWith: ['Apple', 'Nutmeg', 'Ginger', 'Cardamom', 'Vanilla'],
    notableCompounds: [
      { name: 'Cinnamaldehyde', description: 'Gives cinnamon its flavor and scent, has antimicrobial properties' },
      { name: 'Eugenol', description: 'Natural antiseptic with pain-relieving properties' },
      { name: 'Coumarin', description: 'Found more in Cassia; high doses may affect liver (Ceylon is safer)' },
    ],
    growthOrigin: 'Sri Lanka (Ceylon cinnamon), Southeast Asia (Cassia)',
    hardinessZone: 'USDA Zones 10-12',
    healingPotential: ['Blood sugar regulation', 'Metabolic support', 'Cardiovascular health', 'Antimicrobial'],
  },
  {
    id: 'garlic',
    name: 'Garlic',
    scientificName: 'Allium sativum',
    category: 'herb',
    description: 'A species in the onion genus. Throughout history, garlic has been used for both culinary and medicinal purposes.',
    iconName: 'garlic',
    imageUrl: '/images/spices/garlic.jpg',
    healthBenefits: [
      { condition: 'Immune Support', description: 'Can boost immune function and reduce cold severity', evidenceLevel: 'strong' },
      { condition: 'Blood Pressure', description: 'Supplements can significantly reduce blood pressure', evidenceLevel: 'strong' },
      { condition: 'Cholesterol', description: 'Can lower total and LDL cholesterol', evidenceLevel: 'moderate' },
      { condition: 'Detoxification', description: 'May help protect against heavy metal toxicity', evidenceLevel: 'preliminary' },
    ],
    culinaryUses: ['Sautés', 'Roasted dishes', 'Sauces', 'Marinades', 'Soups', 'Dressings'],
    precautions: ['May cause bad breath', 'Can interact with blood thinners', 'Raw garlic may cause digestive upset'],
    tastProfile: 'Pungent, savory, sharp when raw, sweet when roasted',
    pairsWith: ['Olive oil', 'Lemon', 'Parsley', 'Rosemary', 'Thyme'],
    notableCompounds: [
      { name: 'Allicin', description: 'Released when garlic is crushed; provides antimicrobial and cardiovascular benefits' },
      { name: 'Diallyl disulfide', description: 'Organosulfur compound with anti-inflammatory properties' },
      { name: 'S-allyl cysteine', description: 'Water-soluble compound found in aged garlic with antioxidant effects' },
    ],
    growthOrigin: 'Central Asia, likely northeastern Iran',
    hardinessZone: 'USDA Zones 3-8',
    healingPotential: ['Immune boost', 'Cardiovascular support', 'Blood pressure regulation', 'Antimicrobial'],
  },
  {
    id: 'peppermint',
    name: 'Peppermint',
    scientificName: 'Mentha × piperita',
    category: 'herb',
    description: 'A hybrid mint, a cross between watermint and spearmint. Known for its cooling sensation and digestive benefits.',
    iconName: 'peppermint',
    imageUrl: '/images/spices/peppermint.jpg',
    healthBenefits: [
      { condition: 'IBS Relief', description: 'Peppermint oil capsules effectively relieve IBS symptoms', evidenceLevel: 'strong' },
      { condition: 'Headaches', description: 'Topical application may relieve tension headaches', evidenceLevel: 'moderate' },
      { condition: 'Energy', description: 'Aroma may increase alertness and reduce fatigue', evidenceLevel: 'preliminary' },
      { condition: 'Breath', description: 'Natural antibacterial properties freshen breath', evidenceLevel: 'moderate' },
    ],
    culinaryUses: ['Teas', 'Desserts', 'Cocktails', 'Salads', 'Lamb dishes', 'Chocolate pairings'],
    precautions: ['May worsen GERD/acid reflux', 'Not recommended for infants', 'Can interact with certain medications'],
    tastProfile: 'Cool, refreshing, slightly sweet',
    pairsWith: ['Chocolate', 'Lemon', 'Lime', 'Basil', 'Lamb'],
    notableCompounds: [
      { name: 'Menthol', description: 'Primary active compound providing cooling sensation and muscle relaxation' },
      { name: 'Menthone', description: 'Contributes to the minty aroma and has mild analgesic effects' },
      { name: 'Rosmarinic acid', description: 'Antioxidant compound with anti-inflammatory properties' },
    ],
    growthOrigin: 'Europe, hybrid that originated in England in the late 1600s',
    hardinessZone: 'USDA Zones 3-11',
    healingPotential: ['Digestive comfort', 'Headache relief', 'Mental clarity', 'Respiratory support'],
  },
  {
    id: 'basil',
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    category: 'herb',
    description: 'A culinary herb from the mint family. Central to Italian cuisine and many Asian dishes.',
    iconName: 'basil',
    imageUrl: '/images/spices/basil.jpg',
    healthBenefits: [
      { condition: 'Stress Relief', description: 'Holy basil is an adaptogen that reduces cortisol', evidenceLevel: 'moderate' },
      { condition: 'Antibacterial', description: 'Contains compounds that inhibit bacterial growth', evidenceLevel: 'moderate' },
      { condition: 'Blood Sugar', description: 'May help regulate blood sugar levels', evidenceLevel: 'preliminary' },
      { condition: 'Inflammation', description: 'Essential oils have anti-inflammatory properties', evidenceLevel: 'preliminary' },
    ],
    culinaryUses: ['Pesto', 'Caprese salad', 'Pizza', 'Thai curries', 'Pasta', 'Tomato dishes'],
    precautions: ['Generally very safe', 'Holy basil may affect fertility - avoid if pregnant'],
    tastProfile: 'Sweet, peppery, slightly minty',
    pairsWith: ['Tomato', 'Mozzarella', 'Garlic', 'Olive oil', 'Lemon'],
    notableCompounds: [
      { name: 'Eugenol', description: 'Primary essential oil with anti-inflammatory and antiseptic properties' },
      { name: 'Linalool', description: 'Aromatic compound with calming and stress-reducing effects' },
      { name: 'Rosmarinic acid', description: 'Antioxidant that helps reduce inflammation' },
    ],
    growthOrigin: 'Tropical regions of Africa and Southeast Asia, notably India',
    hardinessZone: 'USDA Zones 10-11 (annual in cooler zones)',
    healingPotential: ['Stress relief', 'Antibacterial support', 'Digestive aid', 'Anti-inflammatory'],
  },
  {
    id: 'rosemary',
    name: 'Rosemary',
    scientificName: 'Salvia rosmarinus',
    category: 'herb',
    description: 'A fragrant evergreen herb native to the Mediterranean. Symbol of remembrance with cognitive benefits.',
    iconName: 'rosemary',
    imageUrl: '/images/spices/rosemary.jpg',
    healthBenefits: [
      { condition: 'Memory', description: 'Aroma may improve concentration and memory', evidenceLevel: 'moderate' },
      { condition: 'Hair Growth', description: 'Rosemary oil may promote hair growth', evidenceLevel: 'moderate' },
      { condition: 'Circulation', description: 'May improve blood circulation', evidenceLevel: 'preliminary' },
      { condition: 'Digestion', description: 'Traditionally used to ease digestive issues', evidenceLevel: 'traditional' },
    ],
    culinaryUses: ['Roasted meats', 'Potatoes', 'Bread', 'Olive oil infusions', 'Grilled vegetables'],
    precautions: ['High doses may cause seizures', 'Avoid large amounts during pregnancy'],
    tastProfile: 'Pine-like, woody, slightly bitter',
    pairsWith: ['Lamb', 'Chicken', 'Potato', 'Garlic', 'Lemon'],
    notableCompounds: [
      { name: 'Rosmarinic acid', description: 'Powerful antioxidant with anti-inflammatory and neuroprotective effects' },
      { name: 'Carnosic acid', description: 'Compound that may protect brain cells and support cognitive function' },
      { name: '1,8-Cineole', description: 'Aromatic compound linked to improved memory and alertness' },
    ],
    growthOrigin: 'Mediterranean region, particularly coastal areas',
    hardinessZone: 'USDA Zones 7-10',
    healingPotential: ['Cognitive support', 'Hair health', 'Circulation boost', 'Memory enhancement'],
  },
  {
    id: 'cayenne',
    name: 'Cayenne Pepper',
    scientificName: 'Capsicum annuum',
    category: 'spice',
    description: 'A type of chili pepper used to add heat to dishes. Contains capsaicin, which has numerous health benefits.',
    iconName: 'cayenne',
    imageUrl: '/images/spices/cayenne.jpg',
    healthBenefits: [
      { condition: 'Metabolism', description: 'Capsaicin boosts metabolism and fat burning', evidenceLevel: 'strong' },
      { condition: 'Pain Relief', description: 'Topical capsaicin relieves various types of pain', evidenceLevel: 'strong' },
      { condition: 'Appetite', description: 'May reduce hunger and calorie intake', evidenceLevel: 'moderate' },
      { condition: 'Circulation', description: 'Promotes healthy blood flow', evidenceLevel: 'moderate' },
    ],
    culinaryUses: ['Hot sauces', 'Chili', 'Cajun dishes', 'Eggs', 'Chocolate', 'Detox drinks'],
    precautions: ['Can cause burning sensation', 'May irritate digestive system', 'Wash hands after handling'],
    tastProfile: 'Hot, spicy, slightly fruity',
    pairsWith: ['Lime', 'Cumin', 'Garlic', 'Chocolate', 'Mango'],
    notableCompounds: [
      { name: 'Capsaicin', description: 'Primary active compound responsible for heat; boosts metabolism and relieves pain' },
      { name: 'Dihydrocapsaicin', description: 'Second most prevalent capsaicinoid with similar properties' },
      { name: 'Vitamin C', description: 'High concentration supports immune function and collagen production' },
    ],
    growthOrigin: 'Central and South America, domesticated in Mexico',
    hardinessZone: 'USDA Zones 9-11 (annual in cooler zones)',
    healingPotential: ['Metabolism boost', 'Pain management', 'Circulation support', 'Weight management'],
  },
]

export const healthConditions = [
  { id: 'inflammation', name: 'Inflammation', iconName: 'flame' },
  { id: 'digestion', name: 'Digestive Issues', iconName: 'stomach' },
  { id: 'blood-sugar', name: 'Blood Sugar', iconName: 'chart' },
  { id: 'immunity', name: 'Immune Support', iconName: 'shield' },
  { id: 'stress', name: 'Stress & Anxiety', iconName: 'stress' },
  { id: 'pain', name: 'Pain Relief', iconName: 'pill' },
  { id: 'heart', name: 'Heart Health', iconName: 'heart-health' },
  { id: 'energy', name: 'Energy & Focus', iconName: 'lightning' },
  { id: 'sleep', name: 'Sleep Quality', iconName: 'sleep' },
  { id: 'weight', name: 'Weight Management', iconName: 'scale' },
]

export const healthGoals = [
  { id: 'reduce-inflammation', name: 'Reduce Inflammation', description: 'Combat chronic inflammation naturally' },
  { id: 'improve-digestion', name: 'Improve Digestion', description: 'Better gut health and less bloating' },
  { id: 'boost-immunity', name: 'Boost Immunity', description: 'Strengthen your immune defenses' },
  { id: 'manage-stress', name: 'Manage Stress', description: 'Find calm and balance' },
  { id: 'increase-energy', name: 'Increase Energy', description: 'Natural vitality without crashes' },
  { id: 'support-heart', name: 'Support Heart Health', description: 'Cardiovascular wellness' },
  { id: 'balance-blood-sugar', name: 'Balance Blood Sugar', description: 'Stable energy throughout the day' },
  { id: 'better-sleep', name: 'Better Sleep', description: 'Rest and recover fully' },
]

export const dietaryRestrictions = [
  { id: 'vegetarian', name: 'Vegetarian' },
  { id: 'vegan', name: 'Vegan' },
  { id: 'gluten-free', name: 'Gluten-Free' },
  { id: 'dairy-free', name: 'Dairy-Free' },
  { id: 'low-sodium', name: 'Low Sodium' },
  { id: 'keto', name: 'Keto' },
]

export const allergies = [
  { id: 'nightshades', name: 'Nightshades' },
  { id: 'mustard', name: 'Mustard' },
  { id: 'celery', name: 'Celery' },
  { id: 'sesame', name: 'Sesame' },
]

// Helper to get recommendations based on conditions
export function getRecommendationsForCondition(conditionId: string): HerbSpice[] {
  const conditionMap: Record<string, string[]> = {
    'inflammation': ['turmeric', 'ginger', 'cinnamon', 'basil'],
    'digestion': ['ginger', 'peppermint', 'garlic'],
    'blood-sugar': ['cinnamon', 'turmeric', 'basil'],
    'immunity': ['garlic', 'ginger', 'turmeric'],
    'stress': ['basil', 'peppermint', 'rosemary'],
    'pain': ['turmeric', 'ginger', 'cayenne'],
    'heart': ['garlic', 'turmeric', 'cinnamon', 'cayenne'],
    'energy': ['peppermint', 'rosemary', 'ginger'],
    'sleep': ['basil', 'peppermint'],
    'weight': ['cayenne', 'ginger', 'cinnamon'],
  }

  const herbIds = conditionMap[conditionId] || []
  return herbsAndSpices.filter(h => herbIds.includes(h.id))
}
