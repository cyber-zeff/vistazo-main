"use client";

import Link from "next/link";

export default function TermsOfService() {
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
                    <h1 className="text-5xl font-bold tracking-tight mb-6">Terms of Service</h1>
                    <p className="text-white/50 text-sm">Effective Date: March 2026 &nbsp;·&nbsp; Vistazo Studio</p>
                    <div className="mt-8 h-px bg-white/10" />
                </div>

                {/* Content */}
                <div className="space-y-12 text-white/70 leading-relaxed text-[15px]">

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using the website at{" "}
                            <a href="https://www.vistazo.studio" className="text-white underline underline-offset-4">
                                www.vistazo.studio
                            </a>{" "}
                            or engaging Vistazo Studio for any of our services, you agree to be bound by these Terms of
                            Service. If you do not agree, please do not use our website or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">2. About Vistazo Studio</h2>
                        <p>
                            Vistazo Studio is an IT services agency based in Karachi, Pakistan. We provide professional
                            services including web development, UI/UX design, graphic design, copywriting, SEO
                            optimization, and branding. All services are delivered remotely and governed by individual
                            project agreements in addition to these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">3. Services</h2>
                        <p>
                            The scope, timeline, deliverables, and pricing for each project are agreed upon in writing
                            before work begins. Vistazo Studio reserves the right to decline any project at its
                            discretion. All service engagements are subject to a separate project agreement or proposal
                            that takes precedence over these general terms where there is a conflict.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">4. Intellectual Property</h2>
                        <p>
                            Upon full payment for a project, the client receives full ownership of the final deliverables
                            created specifically for them. Vistazo Studio retains the right to showcase completed work in
                            our portfolio and marketing materials unless explicitly agreed otherwise in writing.
                        </p>
                        <p className="mt-3">
                            All pre-existing assets, tools, frameworks, templates, and processes used by Vistazo Studio
                            remain the intellectual property of Vistazo Studio or their respective owners.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">5. Client Responsibilities</h2>
                        <p>Clients are responsible for:</p>
                        <ul className="mt-3 space-y-2 list-disc list-inside text-white/60">
                            <li>Providing accurate and complete project briefs and materials</li>
                            <li>Reviewing and providing feedback within agreed timelines</li>
                            <li>Ensuring all content and assets shared with us are legally owned or licensed</li>
                            <li>Timely payment as outlined in the project agreement</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">6. Payments & Refunds</h2>
                        <p>
                            Payment terms are defined in each individual project proposal. We do not offer refunds on
                            work already completed or in progress. In the event of a dispute, both parties agree to
                            resolve the matter in good faith before pursuing any formal action.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">7. Limitation of Liability</h2>
                        <p>
                            Vistazo Studio is not liable for any indirect, incidental, or consequential damages arising
                            from the use of our services or website. Our total liability in any circumstance is limited to
                            the amount paid by the client for the specific service in question.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">8. Website Use</h2>
                        <p>
                            You agree not to use our website for any unlawful purpose or in any way that could damage,
                            disable, or impair the site. All content on this website — including text, design, graphics,
                            and code — is the property of Vistazo Studio and may not be reproduced without written
                            permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">9. Newsletter</h2>
                        <p>
                            By subscribing to our newsletter, you consent to receiving periodic emails from Vistazo
                            Studio. You may unsubscribe at any time by contacting us at{" "}
                            <a href="mailto:support@vistazo.studio" className="text-white underline underline-offset-4">
                                support@vistazo.studio
                            </a>
                            . We will never use your email for any purpose other than sending our newsletter.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">10. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of Pakistan. Any disputes arising from these Terms or
                            our services shall be subject to the jurisdiction of the courts of Karachi, Pakistan.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">11. Changes to These Terms</h2>
                        <p>
                            We reserve the right to update these Terms at any time. Changes will be posted on this page
                            with an updated effective date. Continued use of our website or services after any changes
                            constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-semibold mb-3">12. Contact</h2>
                        <p>
                            For any questions regarding these Terms of Service, please contact us at{" "}
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