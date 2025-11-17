export default function Logos() {
  const items = ['Notion', 'Slack', 'HubSpot', 'Airtable', 'Gmail', 'Stripe']
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-sm text-white/50">Trusted by fast-moving teams at</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
          {items.map((i) => (
            <div key={i} className="h-10 rounded-md bg-gradient-to-b from-white/10 to-white/[0.06] border border-white/10 grid place-items-center text-white/70 text-sm">
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
