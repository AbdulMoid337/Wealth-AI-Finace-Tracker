import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import Hero from "@/components/Hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-blackish">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-beige dark:bg-blackish">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gold dark:text-champagne mb-2">
                  {stat.value}
                </div>
                <div className="text-blackish dark:text-tan">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-cream dark:bg-blackish">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blackish dark:text-cream">
            Choose Your Plan
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Light/Gold Card */}
            <div className="relative w-full max-w-sm">
              <div className="rounded-xl bg-champagne p-6 shadow-xl shadow-graphite">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-bronze rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
                      <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path>
                      <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path>
                      <line x1="12" y1="22" x2="12" y2="13"></line>
                      <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blackish">Basic Plan</h3>
                    <p className="text-sm text-blackish">Perfect for beginners</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blackish">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-blackish">Basic expense tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blackish">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-blackish">Monthly reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blackish">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-blackish">Up to 3 accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blackish">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-blackish">Basic AI insights</span>
                  </li>
                </ul>

                <div className="mb-4">
                  <p className="text-2xl font-bold text-blackish">$9.99</p>
                  <p className="text-blackish text-sm">Billed monthly</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-1/4 flex justify-center">
                <button className="bg-slate text-cream px-6 py-3 rounded-md font-medium">
                  Choose Basic Plan
                </button>
              </div>
            </div>

            {/* Dark Card */}
            <div className="relative w-full max-w-sm mt-16 md:mt-0">
              <div className="rounded-xl bg-slate p-6 shadow-xl shadow-chocolate">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-champagne rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blackish">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-champagne">Premium Plan</h3>
                    <p className="text-sm text-champagne/80">For serious finance tracking</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-champagne">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-champagne">Advanced expense tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-champagne">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-champagne">Weekly & monthly reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-champagne">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-champagne">Unlimited accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-champagne">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-champagne">Advanced AI financial advisor</span>
                  </li>
                </ul>

                <div className="mb-4">
                  <p className="text-2xl font-bold text-champagne">$19.99</p>
                  <p className="text-champagne/80 text-sm">Billed monthly</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-1/4 flex justify-center">
                <button className="bg-champagne text-blackish px-6 py-3 rounded-md font-medium">
                  Choose Premium Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-cream dark:bg-blackish mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blackish dark:text-cream">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card className="p-6 bg-beige dark:bg-charcoal border-tan dark:border-graphite" key={index}>
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-blackish dark:text-cream">{feature.title}</h3>
                  <p className="text-blackish dark:text-tan">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-beige dark:bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blackish dark:text-cream">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-champagne dark:bg-bronze rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blackish dark:text-cream">{step.title}</h3>
                <p className="text-blackish dark:text-tan">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-cream dark:bg-blackish">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-blackish dark:text-cream">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-beige dark:bg-charcoal border-tan dark:border-graphite">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-blackish dark:text-cream">{testimonial.name}</div>
                      <div className="text-sm text-mocha dark:text-sand">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-blackish dark:text-tan">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-chocolate dark:bg-mocha">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blackish mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-black mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-sand hover:bg-softgold text-black dark:bg-sand dark:hover:bg-copper animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;