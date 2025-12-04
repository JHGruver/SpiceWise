import type { HerbSpice } from '@spicewise/shared-types'

export const herbsAndSpices: HerbSpice[] = [
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
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon',
    scientificName: 'Cinnamomum verum',
    category: 'spice',
    description: 'A warm, sweet spice from tree bark, used in both sweet and savory dishes.',
    healthBenefits: [
      {
        condition: 'Blood Sugar',
        description: 'May help regulate blood sugar levels',
        evidenceLevel: 'moderate',
      },
      {
        condition: 'Antioxidant',
        description: 'High in protective antioxidants',
        evidenceLevel: 'strong',
      },
    ],
    culinaryUses: ['Baked goods', 'Oatmeal', 'Coffee', 'Curries'],
    precautions: ['Cassia cinnamon contains coumarin - use Ceylon for regular consumption'],
    interactions: ['Diabetes medications', 'Liver medications'],
  },
  {
    id: 'basil',
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    category: 'herb',
    description: 'A fragrant herb essential to Mediterranean and Asian cuisines.',
    healthBenefits: [
      {
        condition: 'Stress',
        description: 'Holy basil variety is an adaptogen that may reduce stress',
        evidenceLevel: 'moderate',
      },
      {
        condition: 'Antibacterial',
        description: 'Contains compounds with antibacterial properties',
        evidenceLevel: 'preliminary',
      },
    ],
    culinaryUses: ['Pesto', 'Salads', 'Thai dishes', 'Pizza'],
    precautions: ['Generally safe in culinary amounts'],
    interactions: ['Blood thinning medications'],
  },
  {
    id: 'peppermint',
    name: 'Peppermint',
    scientificName: 'Mentha × piperita',
    category: 'herb',
    description: 'A refreshing herb known for its cooling sensation and digestive benefits.',
    healthBenefits: [
      {
        condition: 'IBS',
        description: 'Peppermint oil capsules may relieve IBS symptoms',
        evidenceLevel: 'strong',
      },
      {
        condition: 'Headaches',
        description: 'Topical peppermint oil may help tension headaches',
        evidenceLevel: 'moderate',
      },
    ],
    culinaryUses: ['Teas', 'Desserts', 'Cocktails', 'Salads'],
    precautions: ['May worsen GERD symptoms', 'Not recommended for infants'],
    interactions: ['Antacids', 'Certain heart medications'],
  },
]
