"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">
            <div className="max-w-3xl mx-auto mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200 group"
                >
                    <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors duration-200">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    Back to Vistazo Studio
                </Link>
            </div>
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="mb-16">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Legal</p>
                    <h1 className="text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
                    <p className="text-white/50 text-sm">Effective Date: March 2026 &nbsp;·&nbsp; Vistazo Studio</p>
                    <div className="mt-8 h-px bg-white/10" />
                </div>

                {/* Content */}
                <div className="space-y-12 text-white/70 leading-relaxed text-[15px]">

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">1. Who We Are</h2>
                        <p>
                            Vistazo Studio is an IT services agency based in Karachi, Pakistan, offering web development,
                            UI/UX design, graphic design, copywriting, SEO optimization, and branding services. Our website
                            is located at{" "}
                            <a href="https://www.vistazo.studio" className="text-white underline underline-offset-4">
                                www.vistazo.studio
                            </a>
                            . This Privacy Policy explains how we collect, use, and protect your information when you visit
                            our website or interact with us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">2. Information We Collect</h2>
                        <p>
                            We only collect your email address when you voluntarily subscribe to our newsletter via the
                            sign-up form on our website. We do not collect names, phone numbers, payment information, or
                            any other personal data through automated means. Any additional information shared directly
                            (e.g., via email or social media) is handled with full discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">3. How We Use Your Email</h2>
                        <p>Your email address is used solely for the following purposes:</p>
                        <ul className="mt-3 space-y-2 list-disc list-inside text-white/60">
                            <li>Sending our newsletter with updates, insights, and agency news</li>
                            <li>Sharing relevant service announcements or offers</li>
                        </ul>
                        <p className="mt-3">
                            We will never sell, rent, or trade your email address to any third party. Ever.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">4. Third-Party Services</h2>
                        <p>
                            We use Formspree to process newsletter sign-ups. Your email is transmitted to Formspree's
                            servers solely for the purpose of delivering it to us. Formspree operates under its own privacy
                            policy, which you can review at{" "}
                            <a href="https://formspree.io/legal/privacy-policy" className="text-white underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                                formspree.io
                            </a>
                            . We do not use third-party analytics, tracking pixels, or advertising tools on our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">5. Data Retention</h2>
                        <p>
                            We retain your email address for as long as you remain subscribed to our newsletter. You may
                            unsubscribe at any time by contacting us directly, and we will remove your email from our
                            records promptly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="mt-3 space-y-2 list-disc list-inside text-white/60">
                            <li>Request access to the personal data we hold about you</li>
                            <li>Request correction or deletion of your data</li>
                            <li>Withdraw consent and unsubscribe at any time</li>
                        </ul>
                        <p className="mt-3">
                            To exercise any of these rights, email us at{" "}
                            <a href="mailto:support@vistazo.studio" className="text-white underline underline-offset-4">
                                support@vistazo.studio
                            </a>
                            .
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">7. Cookies</h2>
                        <p>
                            Our website does not use cookies for tracking or analytics purposes. Any cookies that may be
                            set are strictly functional and necessary for the website to operate.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">8. Children's Privacy</h2>
                        <p>
                            Our services are not directed at individuals under the age of 16. We do not knowingly collect
                            personal information from minors. If you believe a minor has submitted their information,
                            please contact us and we will delete it immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be reflected on this
                            page with an updated effective date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">10. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or how we handle your data, reach out to
                            us at{" "}
                            <a href="mailto:support@vistazo.studio" className="text-white underline underline-offset-4">
                                support@vistazo.studio
                            </a>
                            .
                        </p>
                    </section>

                </div>

                <div className="mt-16 h-px bg-white/10" />
                <p className="mt-6 text-white/30 text-xs text-center">© 2026 Vistazo Studio. All rights reserved.</p>
            </div>
        </main>
    );
}