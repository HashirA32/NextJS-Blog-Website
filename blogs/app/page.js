"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <main>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug md:text-4xl">
              A <span className="font-semibold">free repository</span> for
              community <br className="hidden lg:block" />
              components using{" "}
              <span className="font-semibold underline decoration-primary">
                Tailwind CSS
              </span>
            </h1>
            <p className="mt-4 text-lg">
              Open source Tailwind UI components and templates to{" "}
              <br className="hidden lg:block" />
              bootstrap your new apps, projects or landing sites!
            </p>

            <div className="mt-6 border rounded-lg lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary focus-within:ring-opacity-20">
              <form
                action="https://www.creative-tim.com/twcomponents/search"
                className="flex flex-wrap justify-between md:flex-row"
              >
                <input
                  type="search"
                  name="query"
                  placeholder="Search Components"
                  required
                  className="flex-1 h-10 px-4 m-1 placeholder-gray-400 border-none appearance-none lg:h-12 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center w-full p-2 m-1 transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
                >
                  <Search className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>

          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="Tailwind CSS Components"
              width={500}
              height={500}
              className="w-full h-full max-w-md mx-auto"
            />
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
  {/* Heading Section */}
  <div className="flex flex-col items-center justify-center text-center mb-16">
    <h2 className="text-4xl font-semibold tracking-tight mb-4">
      Pricing Plans
    </h2>
    <p className="text-lg max-w-xl">
      Choose the plan that suits your needs. Simple and transparent pricing for everyone.
    </p>
  </div>

  {/* Pricing Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Basic Plan */}
    <div className="relative flex flex-col justify-between items-center p-6 border rounded-lg text-center shadow-sm transition-all duration-300 hover:scale-[1.02]">
      <div>
        <h3 className="text-xl font-semibold mb-2">Basic</h3>
        <p className="text-2xl font-bold mb-4">$0</p>
        <ul className="space-y-2 text-sm">
          <li>Access to basic components</li>
          <li>Community support</li>
          <li>Unlimited usage</li>
        </ul>
      </div>
      <Button variant="destructive">
                Get Started
      </Button>
    </div>

    {/* Pro Plan */}
    <div className="relative flex flex-col justify-between items-center p-6 border-2 rounded-lg text-center shadow-lg scale-[1.02] transition-all duration-300 hover:scale-[1.04]">
      {/* Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium border rounded-full shadow-sm uppercase tracking-wide">
        Most Popular
      </div>

      <div className="mt-0 h-54">
        <h3 className="text-xl font-semibold mb-2">Pro</h3>
        <p className="text-2xl font-bold mb-4">$9/mo</p>
        <ul className="space-y-2 text-sm">
          <li>Everything in Basic</li>
          <li>Premium components</li>
          <li>Priority support</li>
          <li>New releases access</li>
        </ul>
      </div>
      <Button variant="destructive">        
        Upgrade Now
      </Button>
    </div>

    {/* Enterprise Plan */}
    <div className="relative flex flex-col justify-between items-center p-6 border rounded-lg text-center shadow-sm transition-all duration-300 hover:scale-[1.02]">
      <div>
        <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
        <p className="text-2xl font-bold mb-4">Custom</p>
        <ul className="space-y-2 text-sm">
          <li>Everything in Pro</li>
          <li>Custom components</li>
          <li>Dedicated team support</li>
          <li>Collaboration tools</li>
        </ul>
      </div>
      <Button variant="destructive">
        Contact Sales
      </Button>
    </div>
  </div>
</section>

      </main>
    </>
  );
}
