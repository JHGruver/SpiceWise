// Biochemistry Data Types and Mock Data

export type StatusLevel = 'optimal' | 'good' | 'attention' | 'warning' | 'critical'

export interface BioMarker {
  id: string
  name: string
  category: string
  value: number
  unit: string
  optimalRange: { min: number; max: number }
  status: StatusLevel
  description: string
  recommendations?: string[]
}

export interface ChakraReading {
  id: string
  name: string
  sanskritName: string
  color: string
  location: string
  balance: number // 0-100
  status: StatusLevel
  associations: string[]
  healingTips: string[]
}

export interface SystemHealth {
  id: string
  name: string
  icon: string
  overallScore: number
  status: StatusLevel
  markers: BioMarker[]
}

export interface ScanResult {
  id: string
  timestamp: Date
  overallWellness: number
  vitalityScore: number
  balanceScore: number
  systems: SystemHealth[]
  chakras: ChakraReading[]
  minerals: BioMarker[]
  aminoAcids: BioMarker[]
  tissues: BioMarker[]
  parasites: BioMarker[]
  toxins: BioMarker[]
}

// Status helper
export const getStatus = (value: number, min: number, max: number): StatusLevel => {
  const range = max - min
  const midpoint = (min + max) / 2
  const distance = Math.abs(value - midpoint) / (range / 2)

  if (value >= min && value <= max) {
    if (distance < 0.3) return 'optimal'
    return 'good'
  }
  if (value < min * 0.7 || value > max * 1.3) return 'critical'
  if (value < min * 0.85 || value > max * 1.15) return 'warning'
  return 'attention'
}

// Generate random scan data
export const generateScanData = (): ScanResult => {
  const randomInRange = (min: number, max: number) =>
    Math.round((Math.random() * (max - min) + min) * 10) / 10

  const randomStatus = (): StatusLevel => {
    const rand = Math.random()
    if (rand > 0.6) return 'optimal'
    if (rand > 0.3) return 'good'
    if (rand > 0.15) return 'attention'
    if (rand > 0.05) return 'warning'
    return 'critical'
  }

  // Minerals
  const minerals: BioMarker[] = [
    { id: 'calcium', name: 'Calcium', category: 'minerals', value: randomInRange(8.5, 11.5), unit: 'mg/dL', optimalRange: { min: 8.6, max: 10.3 }, status: 'optimal', description: 'Essential for bone health and muscle function' },
    { id: 'magnesium', name: 'Magnesium', category: 'minerals', value: randomInRange(1.5, 2.8), unit: 'mg/dL', optimalRange: { min: 1.7, max: 2.2 }, status: 'optimal', description: 'Critical for nerve and muscle function' },
    { id: 'potassium', name: 'Potassium', category: 'minerals', value: randomInRange(3.2, 5.8), unit: 'mEq/L', optimalRange: { min: 3.5, max: 5.0 }, status: 'optimal', description: 'Regulates heart rhythm and fluid balance' },
    { id: 'sodium', name: 'Sodium', category: 'minerals', value: randomInRange(130, 150), unit: 'mEq/L', optimalRange: { min: 136, max: 145 }, status: 'optimal', description: 'Maintains fluid balance and nerve function' },
    { id: 'iron', name: 'Iron', category: 'minerals', value: randomInRange(40, 180), unit: 'mcg/dL', optimalRange: { min: 60, max: 170 }, status: 'optimal', description: 'Essential for oxygen transport in blood' },
    { id: 'zinc', name: 'Zinc', category: 'minerals', value: randomInRange(55, 150), unit: 'mcg/dL', optimalRange: { min: 60, max: 120 }, status: 'optimal', description: 'Supports immune function and wound healing' },
    { id: 'copper', name: 'Copper', category: 'minerals', value: randomInRange(60, 150), unit: 'mcg/dL', optimalRange: { min: 70, max: 140 }, status: 'optimal', description: 'Aids iron metabolism and connective tissue' },
    { id: 'selenium', name: 'Selenium', category: 'minerals', value: randomInRange(50, 200), unit: 'mcg/L', optimalRange: { min: 70, max: 150 }, status: 'optimal', description: 'Powerful antioxidant and thyroid support' },
    { id: 'manganese', name: 'Manganese', category: 'minerals', value: randomInRange(4, 18), unit: 'mcg/L', optimalRange: { min: 4.7, max: 18.3 }, status: 'optimal', description: 'Bone formation and metabolism' },
    { id: 'chromium', name: 'Chromium', category: 'minerals', value: randomInRange(0.1, 2.5), unit: 'mcg/L', optimalRange: { min: 0.5, max: 2.0 }, status: 'optimal', description: 'Blood sugar regulation' },
    { id: 'iodine', name: 'Iodine', category: 'minerals', value: randomInRange(40, 200), unit: 'mcg/L', optimalRange: { min: 100, max: 199 }, status: 'optimal', description: 'Thyroid hormone production' },
    { id: 'phosphorus', name: 'Phosphorus', category: 'minerals', value: randomInRange(2.2, 5.0), unit: 'mg/dL', optimalRange: { min: 2.5, max: 4.5 }, status: 'optimal', description: 'Bone and teeth structure, energy production' },
  ]

  // Update status based on values
  minerals.forEach(m => {
    m.status = getStatus(m.value, m.optimalRange.min, m.optimalRange.max)
  })

  // Amino Acids
  const aminoAcids: BioMarker[] = [
    { id: 'leucine', name: 'Leucine', category: 'amino-acids', value: randomInRange(80, 200), unit: 'umol/L', optimalRange: { min: 100, max: 180 }, status: 'optimal', description: 'Muscle protein synthesis, BCAA' },
    { id: 'isoleucine', name: 'Isoleucine', category: 'amino-acids', value: randomInRange(40, 120), unit: 'umol/L', optimalRange: { min: 50, max: 100 }, status: 'optimal', description: 'Energy production, muscle recovery' },
    { id: 'valine', name: 'Valine', category: 'amino-acids', value: randomInRange(150, 350), unit: 'umol/L', optimalRange: { min: 180, max: 300 }, status: 'optimal', description: 'Muscle metabolism, tissue repair' },
    { id: 'lysine', name: 'Lysine', category: 'amino-acids', value: randomInRange(100, 280), unit: 'umol/L', optimalRange: { min: 130, max: 250 }, status: 'optimal', description: 'Collagen synthesis, calcium absorption' },
    { id: 'methionine', name: 'Methionine', category: 'amino-acids', value: randomInRange(15, 45), unit: 'umol/L', optimalRange: { min: 20, max: 40 }, status: 'optimal', description: 'Detoxification, antioxidant production' },
    { id: 'tryptophan', name: 'Tryptophan', category: 'amino-acids', value: randomInRange(30, 90), unit: 'umol/L', optimalRange: { min: 40, max: 80 }, status: 'optimal', description: 'Serotonin and melatonin precursor' },
    { id: 'phenylalanine', name: 'Phenylalanine', category: 'amino-acids', value: randomInRange(40, 100), unit: 'umol/L', optimalRange: { min: 50, max: 85 }, status: 'optimal', description: 'Neurotransmitter production' },
    { id: 'threonine', name: 'Threonine', category: 'amino-acids', value: randomInRange(80, 200), unit: 'umol/L', optimalRange: { min: 100, max: 180 }, status: 'optimal', description: 'Immune function, gut health' },
    { id: 'glutamine', name: 'Glutamine', category: 'amino-acids', value: randomInRange(400, 900), unit: 'umol/L', optimalRange: { min: 500, max: 800 }, status: 'optimal', description: 'Gut lining, immune cells fuel' },
    { id: 'glycine', name: 'Glycine', category: 'amino-acids', value: randomInRange(150, 400), unit: 'umol/L', optimalRange: { min: 200, max: 350 }, status: 'optimal', description: 'Collagen production, sleep quality' },
    { id: 'arginine', name: 'Arginine', category: 'amino-acids', value: randomInRange(50, 150), unit: 'umol/L', optimalRange: { min: 60, max: 130 }, status: 'optimal', description: 'Nitric oxide production, circulation' },
    { id: 'tyrosine', name: 'Tyrosine', category: 'amino-acids', value: randomInRange(40, 100), unit: 'umol/L', optimalRange: { min: 50, max: 90 }, status: 'optimal', description: 'Dopamine and thyroid hormones' },
  ]

  aminoAcids.forEach(a => {
    a.status = getStatus(a.value, a.optimalRange.min, a.optimalRange.max)
  })

  // Tissue Health
  const tissues: BioMarker[] = [
    { id: 'bone-density', name: 'Bone Density', category: 'tissues', value: randomInRange(-1.5, 2.0), unit: 'T-score', optimalRange: { min: -1.0, max: 1.0 }, status: 'optimal', description: 'Skeletal strength and integrity' },
    { id: 'muscle-mass', name: 'Muscle Mass Index', category: 'tissues', value: randomInRange(6, 12), unit: 'kg/m²', optimalRange: { min: 7.5, max: 10.5 }, status: 'optimal', description: 'Lean muscle tissue ratio' },
    { id: 'collagen-integrity', name: 'Collagen Integrity', category: 'tissues', value: randomInRange(60, 100), unit: '%', optimalRange: { min: 75, max: 95 }, status: 'optimal', description: 'Connective tissue health' },
    { id: 'hydration', name: 'Cellular Hydration', category: 'tissues', value: randomInRange(50, 75), unit: '%', optimalRange: { min: 55, max: 65 }, status: 'optimal', description: 'Intracellular water content' },
    { id: 'fascia-elasticity', name: 'Fascia Elasticity', category: 'tissues', value: randomInRange(60, 100), unit: '%', optimalRange: { min: 70, max: 90 }, status: 'optimal', description: 'Connective tissue flexibility' },
    { id: 'cartilage-health', name: 'Cartilage Health', category: 'tissues', value: randomInRange(55, 100), unit: '%', optimalRange: { min: 70, max: 95 }, status: 'optimal', description: 'Joint cushioning tissue' },
    { id: 'tendon-strength', name: 'Tendon Strength', category: 'tissues', value: randomInRange(60, 100), unit: '%', optimalRange: { min: 75, max: 95 }, status: 'optimal', description: 'Muscle-bone connectors' },
    { id: 'skin-elasticity', name: 'Skin Elasticity', category: 'tissues', value: randomInRange(50, 100), unit: '%', optimalRange: { min: 65, max: 90 }, status: 'optimal', description: 'Dermal health and resilience' },
  ]

  tissues.forEach(t => {
    t.status = getStatus(t.value, t.optimalRange.min, t.optimalRange.max)
  })

  // Parasites & Pathogens
  const parasites: BioMarker[] = [
    { id: 'candida', name: 'Candida Albicans', category: 'parasites', value: randomInRange(0, 50), unit: 'CFU/mL', optimalRange: { min: 0, max: 10 }, status: 'optimal', description: 'Yeast overgrowth indicator' },
    { id: 'h-pylori', name: 'H. Pylori', category: 'parasites', value: randomInRange(0, 30), unit: 'U/mL', optimalRange: { min: 0, max: 5 }, status: 'optimal', description: 'Stomach bacteria presence' },
    { id: 'parasitic-load', name: 'Parasitic Load', category: 'parasites', value: randomInRange(0, 40), unit: 'score', optimalRange: { min: 0, max: 10 }, status: 'optimal', description: 'Overall parasitic burden' },
    { id: 'viral-activity', name: 'Viral Activity', category: 'parasites', value: randomInRange(0, 35), unit: 'score', optimalRange: { min: 0, max: 8 }, status: 'optimal', description: 'Dormant viral presence' },
    { id: 'bacterial-balance', name: 'Bacterial Balance', category: 'parasites', value: randomInRange(50, 100), unit: '%', optimalRange: { min: 75, max: 95 }, status: 'optimal', description: 'Gut microbiome harmony' },
    { id: 'fungal-markers', name: 'Fungal Markers', category: 'parasites', value: randomInRange(0, 25), unit: 'score', optimalRange: { min: 0, max: 8 }, status: 'optimal', description: 'Systemic fungal presence' },
  ]

  parasites.forEach(p => {
    // Invert status for parasites (lower is better for most)
    if (p.id !== 'bacterial-balance') {
      p.status = p.value <= p.optimalRange.max ? 'optimal' :
                 p.value <= p.optimalRange.max * 1.5 ? 'attention' :
                 p.value <= p.optimalRange.max * 2 ? 'warning' : 'critical'
    } else {
      p.status = getStatus(p.value, p.optimalRange.min, p.optimalRange.max)
    }
  })

  // Toxins
  const toxins: BioMarker[] = [
    { id: 'heavy-metals', name: 'Heavy Metals', category: 'toxins', value: randomInRange(0, 50), unit: 'mcg/L', optimalRange: { min: 0, max: 10 }, status: 'optimal', description: 'Lead, mercury, cadmium burden' },
    { id: 'oxidative-stress', name: 'Oxidative Stress', category: 'toxins', value: randomInRange(100, 400), unit: 'U/mL', optimalRange: { min: 0, max: 200 }, status: 'optimal', description: 'Free radical damage level' },
    { id: 'liver-toxin-load', name: 'Liver Toxin Load', category: 'toxins', value: randomInRange(0, 60), unit: 'score', optimalRange: { min: 0, max: 15 }, status: 'optimal', description: 'Hepatic detox burden' },
    { id: 'environmental-toxins', name: 'Environmental Toxins', category: 'toxins', value: randomInRange(0, 45), unit: 'score', optimalRange: { min: 0, max: 12 }, status: 'optimal', description: 'Pesticides, pollutants exposure' },
    { id: 'metabolic-waste', name: 'Metabolic Waste', category: 'toxins', value: randomInRange(0, 40), unit: 'score', optimalRange: { min: 0, max: 15 }, status: 'optimal', description: 'Cellular waste accumulation' },
  ]

  toxins.forEach(t => {
    t.status = t.value <= t.optimalRange.max ? 'optimal' :
               t.value <= t.optimalRange.max * 1.5 ? 'attention' :
               t.value <= t.optimalRange.max * 2 ? 'warning' : 'critical'
  })

  // Chakra Readings
  const chakras: ChakraReading[] = [
    {
      id: 'root',
      name: 'Root Chakra',
      sanskritName: 'Muladhara',
      color: '#ff0000',
      location: 'Base of spine',
      balance: randomInRange(40, 100),
      status: randomStatus(),
      associations: ['Survival', 'Security', 'Grounding', 'Physical identity'],
      healingTips: ['Walk barefoot on earth', 'Red foods: beets, tomatoes', 'Grounding meditation']
    },
    {
      id: 'sacral',
      name: 'Sacral Chakra',
      sanskritName: 'Svadhisthana',
      color: '#ff7f00',
      location: 'Lower abdomen',
      balance: randomInRange(40, 100),
      status: randomStatus(),
      associations: ['Creativity', 'Sexuality', 'Emotions', 'Pleasure'],
      healingTips: ['Creative expression', 'Orange foods: carrots, oranges', 'Hip-opening yoga']
    },
    {
      id: 'solar',
      name: 'Solar Plexus',
      sanskritName: 'Manipura',
      color: '#ffff00',
      location: 'Upper abdomen',
      balance: randomInRange(40, 100),
      status: randomStatus(),
      associations: ['Personal power', 'Confidence', 'Self-worth', 'Will'],
      healingTips: ['Core exercises', 'Yellow foods: bananas, lemons', 'Sun exposure']
    },
    {
      id: 'heart',
      name: 'Heart Chakra',
      sanskritName: 'Anahata',
      color: '#00ff00',
      location: 'Center of chest',
      balance: randomInRange(40, 100),
      status: randomStatus(),
      associations: ['Love', 'Compassion', 'Acceptance', 'Relationships'],
      healingTips: ['Heart-opening poses', 'Green foods: leafy greens', 'Gratitude practice']
    },
    {
      id: 'throat',
      name: 'Throat Chakra',
      sanskritName: 'Vishuddha',
      color: '#00bfff',
      location: 'Throat',
      balance: randomInRange(40, 100),
      status: randomStatus(),
      associations: ['Communication', 'Truth', 'Expression', 'Authenticity'],
      healingTips: ['Singing or chanting', 'Blue foods: blueberries', 'Honest conversations']
    },
    {
      id: 'third-eye',
      name: 'Third Eye',
      sanskritName: 'Ajna',
      color: '#4b0082',
      location: 'Between eyebrows',
      balance: randomInRange(40, 100),
      status: randomStatus(),
      associations: ['Intuition', 'Insight', 'Imagination', 'Wisdom'],
      healingTips: ['Meditation', 'Purple foods: grapes, eggplant', 'Dream journaling']
    },
    {
      id: 'crown',
      name: 'Crown Chakra',
      sanskritName: 'Sahasrara',
      color: '#9400d3',
      location: 'Top of head',
      balance: randomInRange(40, 100),
      status: randomStatus(),
      associations: ['Spirituality', 'Enlightenment', 'Connection', 'Transcendence'],
      healingTips: ['Silent meditation', 'Fasting or light eating', 'Nature contemplation']
    },
  ]

  chakras.forEach(c => {
    c.status = c.balance >= 80 ? 'optimal' :
               c.balance >= 65 ? 'good' :
               c.balance >= 50 ? 'attention' :
               c.balance >= 35 ? 'warning' : 'critical'
  })

  // System Health
  const systems: SystemHealth[] = [
    {
      id: 'cardiovascular',
      name: 'Cardiovascular',
      icon: '❤️',
      overallScore: randomInRange(60, 100),
      status: randomStatus(),
      markers: []
    },
    {
      id: 'digestive',
      name: 'Digestive',
      icon: '🫁',
      overallScore: randomInRange(60, 100),
      status: randomStatus(),
      markers: []
    },
    {
      id: 'nervous',
      name: 'Nervous',
      icon: '🧠',
      overallScore: randomInRange(60, 100),
      status: randomStatus(),
      markers: []
    },
    {
      id: 'immune',
      name: 'Immune',
      icon: '🛡️',
      overallScore: randomInRange(60, 100),
      status: randomStatus(),
      markers: []
    },
    {
      id: 'endocrine',
      name: 'Endocrine',
      icon: '⚡',
      overallScore: randomInRange(60, 100),
      status: randomStatus(),
      markers: []
    },
    {
      id: 'musculoskeletal',
      name: 'Musculoskeletal',
      icon: '💪',
      overallScore: randomInRange(60, 100),
      status: randomStatus(),
      markers: []
    },
  ]

  systems.forEach(s => {
    s.status = s.overallScore >= 85 ? 'optimal' :
               s.overallScore >= 70 ? 'good' :
               s.overallScore >= 55 ? 'attention' :
               s.overallScore >= 40 ? 'warning' : 'critical'
  })

  // Calculate overall scores
  const allMarkers = [...minerals, ...aminoAcids, ...tissues]
  const optimalCount = allMarkers.filter(m => m.status === 'optimal' || m.status === 'good').length
  const overallWellness = Math.round((optimalCount / allMarkers.length) * 100)

  const chakraAvg = chakras.reduce((sum, c) => sum + c.balance, 0) / chakras.length
  const balanceScore = Math.round(chakraAvg)

  const systemsAvg = systems.reduce((sum, s) => sum + s.overallScore, 0) / systems.length
  const vitalityScore = Math.round(systemsAvg)

  return {
    id: `scan-${Date.now()}`,
    timestamp: new Date(),
    overallWellness,
    vitalityScore,
    balanceScore,
    systems,
    chakras,
    minerals,
    aminoAcids,
    tissues,
    parasites,
    toxins
  }
}
