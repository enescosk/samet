// ─── PCD – Prestige Creative Displays ─────────────────────────────────────────
// İçerik artık bu klasördeki JSON dosyalarında tutulur ve yönetim panelinden
// (Decap CMS, /admin) düzenlenir. Bu dosya JSON verisini içe aktarıp tipli
// olarak dışa aktarır; bileşenler değişmeden çalışmaya devam eder.

import brandData from './brand.json'
import benefitsData from './benefits.json'
import featuresData from './features.json'
import stepsData from './steps.json'
import productsData from './products.json'
import projectsData from './projects.json'
import sectorsData from './sectors.json'
import faqsData from './faqs.json'
import referencesData from './references.json'

export type Benefit = { icon: string; title: string; description: string }
export type Feature = { icon: string; title: string; description: string }
export type Step = { number: string; title: string; description: string }
export type Product = {
  name: string
  height: string
  capacity: string
  description: string
  uses: string[]
  image: string
  highlighted: boolean
}
export type Project = { label: string; description: string; src: string; alt: string }
export type Sector = { icon: string; name: string; detail: string }
export type Faq = { question: string; answer: string }
export type Reference = {
  name: string
  logo: string
  image?: string
  description?: string
  url?: string
}

export const brand = brandData
export const benefits: Benefit[] = benefitsData.items
export const features: Feature[] = featuresData.items
export const steps: Step[] = stepsData.items
export const products: Product[] = productsData.items
export const projects: Project[] = projectsData.items
export const sectors: Sector[] = sectorsData.items
export const faqs: Faq[] = faqsData.items
export const references: Reference[] = referencesData.items
