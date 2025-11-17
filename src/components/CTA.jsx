export default function CTA() {
  return (
    <section id="cta" className="bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-700/40 to-fuchsia-700/30 p-10 text-center">
          <div className="absolute -inset-1 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.25),transparent_40%)] blur-2xl" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Build your first automation in minutes</h3>
            <p className="mt-3 text-white/80 max-w-2xl mx-auto">Get started free with templates, drag-and-drop steps, and secure connections to your favorite tools.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">
                Create free account
              </a>
              <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/15 border border-white/20 px-5 py-3 text-sm font-medium text-white/90">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
