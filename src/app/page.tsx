import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-white text-sm font-bold">
              A
            </div>
            <span className="text-lg font-bold tracking-tight">
              Advocate<span className="text-[var(--primary)]">AI</span>
            </span>
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors"
            >
              Get Started Free
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-1.5 text-sm font-medium text-[var(--muted)]">
            ✨ AI-Powered Consumer Rights Assistant
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Navigate Bureaucracy.
            <br />
            <span className="text-[var(--primary)]">Assert Your Rights.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            AdvocateAI turns complex legal jargon and administrative processes
            into plain-language, actionable guidance. Upload documents, generate
            dispute letters, and get step-by-step action plans — all in seconds.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-full bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors shadow-lg shadow-[var(--primary)]/25"
            >
              Start Free — No Credit Card
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full border border-[var(--border)] px-8 py-3.5 text-base font-semibold text-[var(--foreground)] hover:bg-[var(--border)]/50 transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-[var(--muted)]">
            <span>⚖️ No legal expertise needed</span>
            <span>🔒 Your documents are private</span>
            <span>🚀 Results in minutes</span>
          </div>
        </div>
      </section>

      {/* Trusted by / Stats */}
      <section className="border-y border-[var(--border)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "10K+", label: "Documents Analyzed" },
              { value: "85%", label: "Success Rate" },
              { value: "5K+", label: "Active Users" },
              { value: "50+", label: "Document Types Supported" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[var(--primary)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[var(--muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to fight back
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
              From understanding a confusing notice to drafting a professional
              dispute letter — we&apos;ve got you covered.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📄",
                title: "Document Analysis",
                description:
                  "Upload any PDF or document. Our AI reads, summarizes, and explains the key points in plain language — no legal degree required.",
              },
              {
                icon: "✍️",
                title: "Letter Generator",
                description:
                  "Generate professional dispute letters, appeal requests, and formal responses. Customize the tone and length to fit your situation.",
              },
              {
                icon: "🗺️",
                title: "Action Plans",
                description:
                  "Get step-by-step guidance on what to do next. Know exactly which forms to fill, who to call, and what to say.",
              },
              {
                icon: "📁",
                title: "Case Management",
                description:
                  "Track all your disputes and cases in one dashboard. Never lose track of deadlines, responses, or important documents.",
              },
              {
                icon: "🔍",
                title: "Plain Language Translation",
                description:
                  "Stuck on legal jargon? Translate complex terms and clauses into everyday English in one click.",
              },
              {
                icon: "⚡",
                title: "Instant Drafts",
                description:
                  "Answer a few questions and get a complete, well-crafted dispute letter ready to send. Edit and export in seconds.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8 transition-all hover:shadow-lg hover:border-[var(--primary-light)]"
              >
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="border-y border-[var(--border)] py-20 sm:py-28 bg-[var(--background)]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How it works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
              Three simple steps to take control of your consumer rights.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Upload Your Document",
                description:
                  "Upload any notice, contract, bill, or letter you've received. We support PDFs, images, and text files.",
              },
              {
                step: "02",
                title: "AI Analyzes & Explains",
                description:
                  "Our AI reads the document, identifies key issues, deadlines, and rights, then explains everything in plain language.",
              },
              {
                step: "03",
                title: "Take Action",
                description:
                  "Generate a dispute letter, follow a step-by-step action plan, or just export a clear summary. You're in control.",
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-2xl font-bold text-[var(--primary)]">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Who is AdvocateAI for?
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "🏠 Everyday Consumers",
                items: [
                  "Disputing utility bills",
                  "Challenging parking tickets",
                  "Understanding rental agreements",
                  "Returning faulty products",
                ],
              },
              {
                title: "💼 Small Business Owners",
                items: [
                  "Reviewing vendor contracts",
                  "Applying for permits",
                  "Handling customer disputes",
                  "Understanding regulations",
                ],
              },
              {
                title: "📋 Life Events",
                items: [
                  "Insurance claims & denials",
                  "Government benefits paperwork",
                  "Estate & probate documents",
                  "Medical bill disputes",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-[var(--border)] p-8"
              >
                <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                      <span className="text-[var(--success)]">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-[var(--border)] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
              Start for free. Upgrade when you need more power.
            </p>
          </div>
          <div className="mt-16 mx-auto max-w-3xl grid gap-8 sm:grid-cols-2">
            {/* Free Tier */}
            <div className="rounded-2xl border border-[var(--border)] p-8">
              <h3 className="text-xl font-semibold">Free</h3>
              <p className="mt-2 text-[var(--muted)] text-sm">
                For getting started
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-[var(--muted)]">/mo</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "3 document analyses per month",
                  "Basic plain-language summaries",
                  "Single user",
                  "Email support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--success)]">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="mt-8 block w-full rounded-full border border-[var(--border)] px-6 py-3 text-center text-sm font-semibold hover:bg-[var(--border)]/50 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Premium Tier */}
            <div className="rounded-2xl border-2 border-[var(--primary)] p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--primary)] px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold">Premium</h3>
              <p className="mt-2 text-[var(--muted)] text-sm">
                Full-featured power
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold">$15</span>
                <span className="text-[var(--muted)]">/mo</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Unlimited document analyses",
                  "Full dispute letter generation",
                  "Step-by-step action plans",
                  "Case management dashboard",
                  "Priority support",
                  "All document types",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--success)]">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="mt-8 block w-full rounded-full bg-[var(--primary)] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-[var(--muted)]">
            Also available: per-use credits ($5-10 per document) and annual
            plans at 20% off.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to take control?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">
            Join thousands of people who are standing up for their rights with
            AdvocateAI.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center rounded-full bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors shadow-lg shadow-[var(--primary)]/25"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--primary)] text-white text-xs font-bold">
                A
              </div>
              <span className="text-sm font-semibold">
                Advocate<span className="text-[var(--primary)]">AI</span>
              </span>
            </div>
            <p className="text-sm text-[var(--muted)]">
              &copy; {new Date().getFullYear()} AdvocateAI. All rights
              reserved. Not a substitute for legal advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}