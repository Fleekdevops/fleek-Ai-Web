'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'

const goals = [
  { id: 'website', label: 'Website', icon: '🌐', desc: 'Business website or landing page' },
  { id: 'app', label: 'Mobile App', icon: '📱', desc: 'Android/iOS app for your business' },
  { id: 'software', label: 'Custom Software', icon: '💻', desc: 'A system tailored to your workflow' },
  { id: 'portal', label: 'Portal / Web App', icon: '🧩', desc: 'Client, staff, or admin portal' },
  { id: 'support', label: 'IT Support', icon: '🛠️', desc: 'Technical support and troubleshooting' },
  { id: 'maintenance', label: 'Maintenance', icon: '🔧', desc: 'Updates, fixes, and improvements' },
]

const budgets = [
  { id: 'starter', label: 'KES 18,000 - 35,000', desc: 'Starter solutions' },
  { id: 'business', label: 'KES 35,000 - 65,000', desc: 'Business packages' },
  { id: 'advanced', label: 'KES 65,000 - 150,000', desc: 'Advanced/custom builds' },
  { id: 'custom', label: 'Custom / Flexible', desc: 'Highly custom or ongoing needs' },
]

const timelines = [
  { id: 'asap', label: 'ASAP', icon: '🚀' },
  { id: 'soon', label: '1-3 Weeks', icon: '⚡' },
  { id: 'planned', label: '1-2 Months', icon: '📅' },
  { id: 'flexible', label: 'Flexible', icon: '🗓️' },
]

export default function SolutionsFinder() {
  const [step, setStep] = useState(0)
  const [selectedGoal, setSelectedGoal] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [selectedTimeline, setSelectedTimeline] = useState('')

  const totalSteps = 3
  const progress = ((step + 1) / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 0) setStep(step - 1)
  }

  const resetFinder = () => {
    setStep(0)
    setSelectedGoal('')
    setSelectedBudget('')
    setSelectedTimeline('')
  }

  const getRecommendation = () => {
    if (!selectedGoal || !selectedBudget || !selectedTimeline) return null

    const goalData = goals.find((g) => g.id === selectedGoal)
    const budgetData = budgets.find((b) => b.id === selectedBudget)

    const timelineMap: Record<string, string> = {
      asap: 'Fast-track delivery',
      soon: '1–3 weeks (typical)',
      planned: '2–8 weeks (typical)',
      flexible: 'Flexible timeline',
    }

    return {
      title: goalData?.label || 'IT Solution',
      description: goalData?.desc || '',
      cost: budgetData?.label || '',
      timeline: timelineMap[selectedTimeline] || 'Flexible timeline',
      matchScore: 95,
    }
  }

  const recommendation = getRecommendation()
  const canProceed = step === 0 ? selectedGoal : step === 1 ? selectedBudget : selectedTimeline

  return (
    <section id="solutions" className="py-24 relative w-full">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Project Finder</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4">
            Find the Right <span className="gradient-text">Solution</span>
          </h2>
          <p className="text-gray text-lg">
            Answer a few questions and we&apos;ll suggest the best way to build or support your project—at an affordable price.
          </p>
        </div>

        <div className="card-bg rounded-3xl p-8 lg:p-10 animate-fade-in border border-white/10">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-gray">Step {step + 1} of {totalSteps}</span>
              <span className="gradient-text font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full gradient-bg rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="animate-fade-in">
            {step === 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-2">What do you need?</h3>
                <p className="text-gray">Choose the service that best matches your goal.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {goals.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal.id)}
                      className={`p-4 rounded-2xl text-left transition-all border ${
                        selectedGoal === goal.id ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{goal.icon}</span>
                        <div>
                          <div className="font-bold">{goal.label}</div>
                          <div className="text-sm text-gray">{goal.desc}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-2">What&apos;s your budget range?</h3>
                <p className="text-gray">We offer affordable options and custom quotes for any project size.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {budgets.map((budget) => (
                    <button
                      key={budget.id}
                      onClick={() => setSelectedBudget(budget.id)}
                      className={`p-6 rounded-2xl text-left transition-all border ${
                        selectedBudget === budget.id ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="font-bold text-lg mb-1">{budget.label}</div>
                      <div className="text-sm text-gray">{budget.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && !recommendation && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-2">What&apos;s your timeline?</h3>
                <p className="text-gray">We prioritize time efficiency and clear delivery plans.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {timelines.map((timeline) => (
                    <button
                      key={timeline.id}
                      onClick={() => setSelectedTimeline(timeline.id)}
                      className={`p-6 rounded-2xl text-left transition-all border ${
                        selectedTimeline === timeline.id ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{timeline.icon}</span>
                        <div className="font-bold text-lg">{timeline.label}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {recommendation && (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>

                <div>
                  <div className="text-sm text-accent font-bold uppercase tracking-wider mb-2">{recommendation.matchScore}% Match</div>
                  <h3 className="text-3xl font-black mb-2">{recommendation.title}</h3>
                  <p className="text-gray">{recommendation.description}</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 max-w-lg mx-auto">
                  <div className="card-bg rounded-xl p-4 border border-white/10">
                    <div className="text-sm text-gray mb-1">Budget Range</div>
                    <div className="font-bold gradient-text">{recommendation.cost}</div>
                  </div>
                  <div className="card-bg rounded-xl p-4 border border-white/10">
                    <div className="text-sm text-gray mb-1">Timeline</div>
                    <div className="font-bold">{recommendation.timeline}</div>
                  </div>
                  <div className="card-bg rounded-xl p-4 border border-white/10">
                    <div className="text-sm text-gray mb-1">Approach</div>
                    <div className="font-bold text-green-400">Custom & Affordable</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <button onClick={resetFinder} className="btn-secondary px-6 py-3 rounded-full font-bold">
                    Start Over
                  </button>
                  <a href="#contact" className="btn-primary px-6 py-3 rounded-full font-bold inline-flex items-center justify-center gap-2">
                    Get a Quote
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {!recommendation && (
            <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
              <button
                onClick={handlePrev}
                disabled={step === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  step === 0 ? 'opacity-50 cursor-not-allowed' : 'text-gray hover:text-light'
                }`}
              >
                <ArrowLeft size={18} />
                Previous
              </button>

              {step < 2 && (
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold ${
                    canProceed ? 'btn-primary' : 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  Next
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
