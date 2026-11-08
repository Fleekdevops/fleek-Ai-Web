export type ServiceKey = 'website' | 'portal' | 'app' | 'software' | 'support' | 'maintenance' | 'consultation'

export type PricingPlan = {
  key: ServiceKey
  name: string
  from: string
  timeline: string
  description: string
  factors: string[]
  deliverables: string[]
  featured?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    key: 'website',
    name: 'Websites & Landing Pages',
    from: 'From KES 18,000',
    timeline: 'Typical 5–14 working days',
    description: 'For business websites and marketing pages. Priced by page count, content readiness, forms, SEO, and design depth.',
    factors: ['Pages and content structure', 'Branding, copy, and visuals', 'Forms, SEO, and integrations'],
    deliverables: ['Responsive build', 'Contact/WhatsApp setup', 'Basic SEO and launch checks'],
  },
  {
    key: 'portal',
    name: 'Portals & Business Systems',
    from: 'From KES 55,000',
    timeline: 'Typical 2–8 weeks',
    description: 'For client/staff portals, dashboards, and workflow systems. Scoped by roles, data, approvals, and integrations.',
    factors: ['User roles and workflows', 'Data models and integrations', 'Testing, training, and handover'],
    deliverables: ['Custom workflows', 'Admin/client experiences', 'Performance and security checks'],
    featured: true,
  },
  {
    key: 'app',
    name: 'Mobile Apps',
    from: 'From KES 120,000',
    timeline: 'Typical 4–12+ weeks',
    description: 'For Android/iOS products. Quoted by platform, feature depth, APIs, authentication, and release support.',
    factors: ['Platform(s) and features', 'APIs, auth, and integrations', 'Store readiness and support plan'],
    deliverables: ['Scoped milestone delivery', 'Quality checks', 'Launch and maintenance options'],
  },
]

export const customServiceRanges = [
  { name: 'Custom Software', range: 'From KES 85,000', note: 'Scoped by workflow complexity, integrations, and reporting.' },
  { name: 'IT Support', range: 'From KES 4,500', note: 'Per request or monthly plan based on urgency and environment size.' },
  { name: 'Maintenance', range: 'From KES 8,000 / month', note: 'Updates, fixes, monitoring, and improvements by system scope.' },
  { name: 'Technical Consultation', range: 'Scoped quote', note: 'Discovery, audits, architecture, or delivery planning.' },
]

export const contactBudgetRanges = [
  'Website: KES 18,000 – 45,000',
  'Portal / Business System: KES 55,000 – 180,000',
  'Mobile App: KES 120,000 – 350,000+',
  'Custom Software: KES 85,000 – 350,000+',
  'IT Support: KES 4,500 – 25,000',
  'Maintenance: KES 8,000 – 40,000 / month',
  'Not sure yet — scope it with Fleektech',
]

export const chatPricingSummary =
  'Pricing is service-specific (not one rate for every project): websites from KES 18,000; portals/business systems from KES 55,000; mobile apps from KES 120,000; custom software from KES 85,000; IT support from KES 4,500; maintenance from KES 8,000/month. Final quotes depend on timeline and customization.'
