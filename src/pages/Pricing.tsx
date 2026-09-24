import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionBadge } from '../components/ui';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/motion';

function PricingHero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionBadge>Pricing</SectionBadge>
        <motion.h1
          className="font-display font-extrabold text-4xl sm:text-5xl text-[#0F0F0F] mt-6"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          Transparent pricing. No surprises.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-[#6B7280]"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          Start free. Upgrade when you're ready. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}

function PricingCards() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { text: '5 clients', included: true },
        { text: '10 invoices/month', included: true },
        { text: 'PDF download', included: true },
        { text: 'Email invoices', included: true },
        { text: 'Recurring invoices', included: false },
        { text: 'Custom branding', included: false },
        { text: 'Revenue analytics', included: false },
        { text: 'Team members', included: false },
        { text: 'Client portal', included: false },
        { text: 'Stripe + Paystack', included: false },
      ],
      cta: 'Start Free',
      highlight: false,
    },
    {
      name: 'Pro',
      monthlyPrice: 9,
      annualPrice: 7,
      features: [
        { text: 'Unlimited clients + invoices', included: true },
        { text: 'PDF download', included: true },
        { text: 'Email invoices', included: true },
        { text: 'Recurring invoices', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Auto payment reminders', included: true },
        { text: 'Revenue analytics', included: true },
        { text: 'Multi-currency', included: true },
        { text: 'Team members', included: false },
        { text: 'Client portal', included: false },
      ],
      cta: 'Start Pro',
      highlight: true,
    },
    {
      name: 'Business',
      monthlyPrice: 25,
      annualPrice: 21,
      features: [
        { text: 'Everything in Pro', included: true },
        { text: 'Team members', included: true },
        { text: 'Client payment portal', included: true },
        { text: 'Paystack + Stripe integration', included: true },
        { text: 'Tax reports', included: true },
        { text: 'API access', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom domain', included: true },
        { text: 'White-label PDFs', included: true },
        { text: 'Dedicated account manager', included: true },
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!annual ? 'text-[#0F0F0F]' : 'text-[#6B7280]'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full ${annual ? 'bg-[#4F46E5]' : 'bg-[#E5E7EB]'}`}
            aria-label="Toggle annual pricing"
          >
            <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white ${annual ? 'translate-x-6' : ''}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-[#0F0F0F]' : 'text-[#6B7280]'}`}>
            Annual <span className="text-[#10B981] text-xs">(2 months free)</span>
          </span>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`p-8 rounded-2xl border ${plan.highlight ? 'border-[#4F46E5] bg-[#EEF2FF]' : 'border-[#E5E7EB] bg-white'} shadow-sm relative`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-[#4F46E5] text-white">Most Popular</span>
              )}
              <h3 className="font-semibold text-lg text-[#0F0F0F]">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-4xl font-bold text-[#0F0F0F]">
                  ${annual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-sm text-[#6B7280]">/mo</span>
              </div>
              {annual && plan.monthlyPrice > 0 && (
                <p className="text-xs text-[#10B981] mt-1">Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year</p>
              )}
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className={`flex items-center gap-2 text-sm ${f.included ? 'text-[#0F0F0F]' : 'text-[#6B7280] opacity-50'}`}>
                    {f.included ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 8l3 3 5-5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M5 8h6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 block text-center py-3 rounded-xl font-semibold text-sm ${plan.highlight ? 'bg-[#4F46E5] text-white' : 'border border-[#E5E7EB] text-[#0F0F0F] bg-white'}`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we\'ll prorate any charges.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit cards (Visa, Mastercard, Amex), bank transfers, and for Nigerian users, Paystack supports local payment methods including USSD and bank transfers.' },
    { q: 'Is there a free trial for Pro?', a: 'The Free plan is free forever with no time limit. When you\'re ready for more features, you can upgrade to Pro. We also offer a 14-day money-back guarantee on all paid plans.' },
    { q: 'Can I use InvoiceFlow for multiple businesses?', a: 'Yes! On the Business plan, you can create separate workspaces for each business. Each workspace has its own clients, invoices, and branding.' },
    { q: 'Does InvoiceFlow support Nigerian Naira (NGN)?', a: 'Yes. InvoiceFlow supports NGN, USD, EUR, GBP, and 20+ other currencies. Exchange rates are updated daily for accurate multi-currency invoicing.' },
    { q: 'How do I cancel my subscription?', a: 'You can cancel anytime from your account settings. Your access continues until the end of your billing period. No cancellation fees, no questions asked.' },
  ];

  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-display font-bold text-2xl sm:text-3xl text-[#0F0F0F] text-center mb-12"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
        >
          Frequently asked questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-[#E5E7EB] rounded-2xl bg-white overflow-hidden"
              initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-[#0F0F0F]">{faq.q}</span>
                <svg
                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                  className={`flex-shrink-0 ml-4 ${openIndex === i ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M5 8l5 5 5-5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-sm text-[#6B7280]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <PricingFAQ />
    </>
  );
}
