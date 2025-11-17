import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] grid place-items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.35),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.25),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
          Introducing our AI automation builder
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
          Automate complex workflows
          <br className="hidden sm:block" />
          with an intelligent visual builder
        </h1>
        <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Design, orchestrate, and deploy automations in minutes. Connect apps, add AI steps, and ship resilient processes without code.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#cta" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-600/30 hover:from-purple-500 hover:to-fuchsia-500 transition-colors">
            Start free
          </a>
          <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/15 px-5 py-3 text-sm font-medium text-white/90 border border-white/15">
            See how it works
          </a>
        </div>
        <p className="mt-4 text-xs text-white/60">No credit card required</p>
      </div>
    </section>
  )
}
