import type { HealthCondition } from '@spicewise/shared-types'

export const healthConditions: HealthCondition[] = [
  {
    id: 'arthritis',
    name: 'Arthritis',
    category: 'Joint Health',
    description: 'Joint inflammation causing pain and stiffness',
    relatedHerbsSpices: ['turmeric', 'ginger'],
  },
  {
    id: 'digestive-issues',
    name: 'Digestive Issues',
    category: 'Digestive Health',
    description: 'General digestive discomfort including bloating and indigestion',
    relatedHerbsSpices: ['ginger', 'peppermint'],
  },
  {
    id: 'inflammation',
    name: 'Chronic Inflammation',
    category: 'Immune Health',
    description: 'Persistent low-grade inflammation in the body',
    relatedHerbsSpices: ['turmeric', 'ginger', 'cinnamon'],
  },
  {
    id: 'blood-sugar',
    name: 'Blood Sugar Management',
    category: 'Metabolic Health',
    description: 'Difficulty maintaining stable blood sugar levels',
    relatedHerbsSpices: ['cinnamon', 'turmeric'],
  },
  {
    id: 'stress-anxiety',
    name: 'Stress & Anxiety',
    category: 'Mental Health',
    description: 'Feelings of stress, worry, or nervousness',
    relatedHerbsSpices: ['basil', 'peppermint'],
  },
  {
    id: 'nausea',
    name: 'Nausea',
    category: 'Digestive Health',
    description: 'Feeling of sickness with an urge to vomit',
    relatedHerbsSpices: ['ginger', 'peppermint'],
  },
  {
    id: 'headaches',
    name: 'Headaches',
    category: 'Pain Management',
    description: 'Tension headaches and migraines',
    relatedHerbsSpices: ['peppermint', 'ginger'],
  },
]
