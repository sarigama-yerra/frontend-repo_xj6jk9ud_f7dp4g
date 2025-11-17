import { Bot, Layout, Timer, Zap, Shuffle, Shield } from 'lucide-react'

const cards = [
  {
    icon: Bot,
    title: 'AI native steps',
    desc: 'Grounded LLMs, function calling, retrieval, and evaluators built-in. No glue code.',
  },
  {
    icon: Layout,
    title: 'Visual builder',
    desc: 'Drag, connect, and branch with a canvas built for clarity and speed.',
  },
  {
    icon: Zap,
    title: 'Realtime runs',
    desc: 'Stream tokens and events while your automations execute securely.',
  },
  {
    icon: Shuffle,
    title: 'Branching & retries',
    desc: 'Guardrails, human-in-the-loop, and deterministic fallbacks for reliability.',
  },
  {
    icon: Timer,
    title: 'Schedules & triggers',
    desc: 'Webhook, cron, and app triggers with robust observability.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'SSO, audit logs, RBAC, and SOC2 by default.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Build smarter, ship faster</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Everything you need to design and operate AI-augmented workflows that scale with your team.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-600/20 to-fuchsia-600/0 opacity-0 group-hover:opacity-100 blur-xl transition" />
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/10 grid place-items-center text-purple-300">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
