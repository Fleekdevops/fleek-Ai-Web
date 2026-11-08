'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, ArrowLeft, Sparkles, Clock3, SlidersHorizontal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

type GoalId = 'website' | 'app' | 'software' | 'portal' | 'support' | 'maintenance'
type TimelineId = 'urgent' | 'standard' | 'planned' | 'flexible'
type ComplexityId = 'focused' | 'custom' | 'advanced'

const goals: { id: GoalId; label: string; icon: string; desc: string }[] = [
  { id: 'website', label: 'Website', icon: '🌐', desc: 'Marketing site, landing pages, or company profile' },
  { id: 'portal', label: 'Portal / System', icon: '🧩', desc: 'Dashboards, roles, workflows, or business operations' },
  { id: 'app', label: 'Mobile App', icon: '📱', desc: 'Android/iOS app with scoped features' },
  { id: 'software', label: 'Custom Software', icon: '💻', desc: 'Tailored tools, integrations, and automation' },
  { id: 'support', label: 'IT Support', icon: '🛠️', desc: 'Fixes, troubleshooting, and technical assistance' },
  { id: 'maintenance', label: 'Maintenance', icon: '🔧', desc: 'Updates, care plans, and ongoing improvements' },
]

const timelines: { id: TimelineId; label: string; factor: number; eta: string }[] = [
  { id: 'urgent', label: 'Urgent / priority', factor: 1.18, eta: 'priority scheduling' },
  { id: 'standard', label: 'Standard delivery', factor: 1.06, eta: 'standard delivery window' },
  { id: 'planned', label: 'Planned roadmap', factor: 1, eta: 'planned delivery window' },
  { id: 'flexible', label: 'Flexible', factor: 0.97, eta: 'flexible timeline' },
]

const complexities: { id: ComplexityId; label: string; detail: string; factor: number }[] = [
  { id: 'focused', label: 'Focused', detail: 'Clear scope and common features', factor: 1 },
  { id: 'custom', label: 'Custom', detail: 'Tailored features, integrations, or content', factor: 1.38 },
  { id: 'advanced', label: 'Advanced', detail: 'Complex workflows, multiple roles, or scale', factor: 1.82 },
]

const pricing: Record<GoalId, { baseMin: number; baseMax: number; unit: string; timelineHint: string; includes: string }> = {
  website: { baseMin: 18000, baseMax: 52000, unit: 'project', timelineHint: '5–14 working days for focused scopes', includes: 'design, responsive build, core pages, launch setup' },
  portal: { baseMin: 55000, baseMax: 195000, unit: 'project', timelineHint: '2–8 weeks depending on roles/workflows', includes: 'roles, dashboards, forms/data flows, scoped integrations' },
  app: { baseMin: 120000, baseMax: 420000, unit: 'project', timelineHint: '4–12+ weeks depending on platform/features', includes: 'scoped features, QA, release readiness, support options' },
  software: { baseMin: 85000, baseMax: 480000, unit: 'project', timelineHint: '3–12+ weeks depending on complexity', includes: 'discovery, custom logic, integrations, reporting as scoped' },
  support: { baseMin: 4500, baseMax: 28000, unit: 'request / month', timelineHint: 'response time depends on urgency and plan', includes: 'troubleshooting, fixes, guidance, technical care' },
  maintenance: { baseMin: 8000, baseMax: 45000, unit: 'month', timelineHint: 'monthly or retainer care plan', includes: 'updates, monitoring, improvements, backups as scoped' },
}

function formatKES(n: number) {
  return `KES ${Math.round(n / 500) * 500}`
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default function SolutionsFinder() {
  const [step, setStep] = useState(0)
  const [goal, setGoal] = useState<GoalId | ''>('')
  const [timeline, setTimeline] = useState<TimelineId | ''>('')
  const [complexity, setComplexity] = useState<ComplexityId | ''>('')

  const recommendation = useMemo(() => {
    if (!goal || !timeline || !complexity) return null
    const g = goals.find((x) => x.id === goal)!
    const t = timelines.find((x) => x.id === timeline)!
    const c = complexities.find((x) => x.id === complexity)!
    const p = pricing[goal]
    const min = p.baseMin * c.factor * t.factor
    const max = p.baseMax * c.factor * t.factor
    return {
      title: g.label,
      description: g.desc,
      range: `${formatKES(min)} – ${formatKES(max)}`,
      unit: p.unit,
      timeline: goal === 'support' || goal === 'maintenance' ? `${p.timelineHint} • ${t.eta}` : `${t.eta} • ${p.timelineHint}`,
      includes: p.includes,
      complexity: c.label,
      drivers: `${c.detail}. Time and service type also affect the range.`,
    }
  }, [goal, timeline, complexity])

  const canProceed = step === 0 ? !!goal : step === 1 ? !!complexity : !!timeline

  return (
    <section id="solutions" className="py-24 relative w-full">
      <div className="container max-w-4xl">
        <SectionHeading
          eyebrow="Project Finder"
          words={['Estimate by service, time, and scope', 'Different work has different pricing drivers', 'Get a realistic starting range']}
          lead="Select what you need, how custom it is, and your timeline. The estimate changes by service type—websites, portals, apps, software, and support are not priced the same."
        />

        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-bg interactive-card motion-sheen rounded-[1.7rem] p-7 lg:p-9 border border-white/8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-gray">Step {recommendation ? 3 : step + 1} of 3</span>
              <span className="text-accent font-semibold">{recommendation ? 100 : Math.round(((step + 1) / 3) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
              <motion.div className="h-full gradient-bg rounded-full" animate={{ width: `${recommendation ? 100 : ((step + 1) / 3) * 100}%` }} transition={{ duration: 0.35 }} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && !recommendation && (
              <motion.div key="s0" initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }} className="space-y-5">
                <h3 className="font-display text-2xl font-bold">What do you need?</h3>
                <p className="text-gray">Each service uses a different base scope and delivery model.</p>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {goals.map((g) => (
                    <button key={g.id} type="button" onClick={() => setGoal(g.id)} className={`p-4 rounded-2xl text-left transition-all border ${goal === g.id ? 'border-primary/45 bg-primary/10 -translate-y-0.5 shadow-glow' : 'border-white/8 bg-white/[0.02] hover:bg-white/[0.045] hover:border-white/14 hover:-translate-y-0.5'}`}>
                      <div className="flex items-center gap-3.5">
                        <span className="text-2xl">{g.icon}</span>
                        <div><div className="font-semibold">{g.label}</div><div className="text-sm text-gray">{g.desc}</div></div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 1 && !recommendation && (
              <motion.div key="s1" initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }} className="space-y-5">
                <h3 className="font-display text-2xl font-bold flex items-center gap-2"><SlidersHorizontal size={22} className="text-primary" /> How custom is it?</h3>
                <p className="text-gray">Customization changes design, logic, integrations, testing, and delivery effort.</p>
                <div className="grid gap-3.5">
                  {complexities.map((c) => (
                    <button key={c.id} type="button" onClick={() => setComplexity(c.id)} className={`p-5 rounded-2xl text-left transition-all border ${complexity === c.id ? 'border-primary/45 bg-primary/10 shadow-glow' : 'border-white/8 bg-white/[0.02] hover:bg-white/[0.045] hover:-translate-y-0.5'}`}>
                      <div className="font-semibold text-lg">{c.label}</div>
                      <div className="text-sm text-gray mt-1">{c.detail}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 2 && !recommendation && (
              <motion.div key="s2" initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }} className="space-y-5">
                <h3 className="font-display text-2xl font-bold flex items-center gap-2"><Clock3 size={22} className="text-primary" /> What’s your timeline?</h3>
                <p className="text-gray">Priority delivery and planning windows affect availability and effort.</p>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {timelines.map((t) => (
                    <button key={t.id} type="button" onClick={() => setTimeline(t.id)} className={`p-5 rounded-2xl text-left transition-all border ${timeline === t.id ? 'border-primary/45 bg-primary/10 shadow-glow' : 'border-white/8 bg-white/[0.02] hover:bg-white/[0.045] hover:-translate-y-0.5'}`}>
                      <div className="font-semibold">{t.label}</div>
                      <div className="text-sm text-gray mt-1">{t.eta}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            {recommendation && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.985, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center animate-pulse-glow"><Sparkles className="w-6 h-6 text-darker" /></div>
                  <div><div className="text-xs text-accent font-semibold tracking-wide uppercase">Service-specific estimate</div><h3 className="font-display text-2xl sm:text-3xl font-bold">{recommendation.title}</h3></div>
                </div>
                <p className="text-gray">{recommendation.description} Range reflects <strong className="text-light/90 font-semibold">{recommendation.complexity.toLowerCase()}</strong> customization and selected timeline. {recommendation.drivers}</p>
                <div className="grid sm:grid-cols-3 gap-3.5">
                  <div className="card-bg rounded-xl p-4 border border-white/7 interactive-card"><div className="text-xs text-gray mb-1">Estimated range</div><div className="font-display font-bold text-primary text-lg leading-tight">{recommendation.range}</div><div className="text-xs text-gray mt-1">{recommendation.unit}</div></div>
                  <div className="card-bg rounded-xl p-4 border border-white/7 interactive-card"><div className="text-xs text-gray mb-1">Timeline</div><div className="font-semibold text-sm leading-snug">{recommendation.timeline}</div></div>
                  <div className="card-bg rounded-xl p-4 border border-white/7 interactive-card"><div className="text-xs text-gray mb-1">Typical scope</div><div className="text-sm text-light/85 leading-snug">{recommendation.includes}</div></div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button type="button" onClick={() => { setStep(0); setGoal(''); setTimeline(''); setComplexity('') }} className="btn-secondary px-6 py-3 rounded-full font-semibold">Start over</button>
                  <a href="#contact" className="btn-primary px-6 py-3 rounded-full font-bold inline-flex items-center justify-center gap-2">Request exact quote <ArrowRight size={18} /></a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!recommendation && (
            <div className="flex justify-between mt-8 pt-6 border-t border-white/8">
              <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all ${step === 0 ? 'opacity-40 cursor-not-allowed' : 'text-gray hover:text-light hover:bg-white/5'}`}>
                <ArrowLeft size={17} /> Back
              </button>
              {step < 2 ? (
                <button type="button" onClick={() => canProceed && setStep(step + 1)} disabled={!canProceed} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold ${canProceed ? 'btn-primary' : 'opacity-40 cursor-not-allowed bg-white/5'}`}>
                  Next <ArrowRight size={17} />
                </button>
              ) : (
                <button type="button" onClick={() => canProceed && setStep(2)} disabled={!canProceed} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold ${canProceed ? 'btn-primary' : 'opacity-40 cursor-not-allowed bg-white/5'}`}>
                  See estimate <Sparkles size={17} />
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
