import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SectionBadge } from '../components/ui';
import { fadeUp, viewportConfig } from '../lib/motion';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

function ContactHero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionBadge>Contact</SectionBadge>
        <motion.h1
          className="font-display font-extrabold text-4xl sm:text-5xl text-[#0F0F0F] mt-6"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          Got a question? We're quick.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-[#6B7280]"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          Average response time: under 4 hours.
        </motion.p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setSubmitStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted (demo):', data);
      setSubmitStatus('success');
      reset();
    }, 1000);
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            className="flex flex-col items-center justify-center text-center"
            initial="hidden" animate="visible" variants={fadeUp}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
              <circle cx="60" cy="60" r="50" fill="#EEF2FF" />
              <rect x="35" y="40" width="50" height="35" rx="4" fill="white" stroke="#4F46E5" strokeWidth="2" />
              <path d="M35 45l25 15 25-15" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
              <path d="M70 30l10-5 5 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="85" cy="30" r="8" fill="#D1FAE5" />
              <path d="M82 30l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="font-display font-bold text-2xl text-[#0F0F0F] mt-6">Message received!</h3>
            <p className="mt-2 text-[#6B7280]">This is a demo form. In production, we'd reply within 4 hours.</p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="mt-6 px-6 py-3 rounded-xl bg-[#4F46E5] text-white font-semibold text-sm"
            >
              Send another message
            </button>
          </motion.div>
          <ContactInfo />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
          noValidate
        >
          <div className="p-4 bg-[#FEF3C7] border border-[#F59E0B] rounded-lg">
            <p className="text-sm text-[#92400E]">
              <strong>Demo mode:</strong> This form doesn't actually send messages. It's for demonstration purposes only.
            </p>
          </div>

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-[#0F0F0F] mb-2">Full Name</label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              aria-invalid={errors.fullName ? 'true' : 'false'}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              {...register('fullName')}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#0F0F0F] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              placeholder="Your full name"
            />
            {errors.fullName && <p id="fullName-error" className="mt-1 text-xs text-[#EF4444]" role="alert">{errors.fullName.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#0F0F0F] mb-2">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              {...register('email')}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#0F0F0F] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              placeholder="you@example.com"
            />
            {errors.email && <p id="email-error" className="mt-1 text-xs text-[#EF4444]" role="alert">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#0F0F0F] mb-2">Subject</label>
            <select
              id="subject"
              aria-invalid={errors.subject ? 'true' : 'false'}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              {...register('subject')}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#0F0F0F] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            >
              <option value="">Select a subject</option>
              <option value="general">General</option>
              <option value="billing">Billing</option>
              <option value="feature">Feature Request</option>
              <option value="bug">Bug Report</option>
            </select>
            {errors.subject && <p id="subject-error" className="mt-1 text-xs text-[#EF4444]" role="alert">{errors.subject.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#0F0F0F] mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              {...register('message')}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#0F0F0F] text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] resize-none"
              placeholder="Tell us what's on your mind..."
            />
            {errors.message && <p id="message-error" className="mt-1 text-xs text-[#EF4444]" role="alert">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitStatus === 'submitting'}
            className="w-full py-3 rounded-xl bg-[#4F46E5] text-white font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        <ContactInfo />
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <motion.div
      className="p-8 rounded-2xl border border-[#E5E7EB] bg-white shadow-sm h-fit"
      initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}
    >
      <h3 className="font-semibold text-lg text-[#0F0F0F] mb-6">Get in touch</h3>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="2" y="5" width="16" height="10" rx="2" stroke="#4F46E5" strokeWidth="1.5" />
              <path d="M2 7l8 5 8-5" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[#0F0F0F]">Email</p>
            <a href="mailto:hello@invoiceflow.co" className="text-sm text-[#6B7280]">hello@invoiceflow.co</a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M18 10c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z" stroke="#4F46E5" strokeWidth="1.5" />
              <path d="M10 6v4l3 2" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[#0F0F0F]">Support hours</p>
            <p className="text-sm text-[#6B7280]">Mon–Fri, 8am–6pm WAT</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2C6 2 3 5 3 8.5C3 13 10 18 10 18s7-5 7-9.5C17 5 14 2 10 2z" stroke="#4F46E5" strokeWidth="1.5" />
              <circle cx="10" cy="8.5" r="2" stroke="#4F46E5" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[#0F0F0F]">Location</p>
            <p className="text-sm text-[#6B7280]">Lagos, Nigeria 🇳🇬</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M18 5c-.7.5-1.5.8-2.3 1A4 4 0 0012 4c-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9C5.7 8.6 3.5 7 2 4.8c-.5.8-.7 1.8-.5 2.8.4 1.8 1.8 3 3.5 3.2-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.7 2.2 2.9 4 3A8 8 0 012 15.3c1.8 1.2 4 1.8 6.2 1.8 7.3 0 11.3-6 11.3-11.3v-.5c.8-.6 1.5-1.3 2-2.1" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[#0F0F0F]">Twitter</p>
            <a href="https://twitter.com/invoiceflow" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B7280]">@invoiceflow</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
