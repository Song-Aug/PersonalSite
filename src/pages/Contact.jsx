import GradientText from '../components/GradientText'

export default function Contact() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-white">
      <div className="pointer-events-auto w-full max-w-3xl space-y-10 rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center shadow-[0_36px_80px_rgba(53,32,91,0.55)] backdrop-blur-2xl sm:px-12">
        <GradientText className="block text-3xl font-semibold sm:text-4xl" showBorder={false}>
          Let&apos;s stay in touch
        </GradientText>
        <p className="text-base text-white/70 sm:text-lg">
          This space is getting ready for a curated contact experience. Soon you&apos;ll be able to reach out directly,
          explore collaboration opportunities, and get quick answers right here.
        </p>
        <div className="space-y-2 text-sm text-white/50">
          <p>Prefer email? Drop a note to hello@example.com and I&apos;ll get back soon.</p>
          <p>More ways to connect are coming shortly—stay tuned!</p>
        </div>
      </div>
    </section>
  )
}
