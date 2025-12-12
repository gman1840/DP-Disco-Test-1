'use client';

import Image from 'next/image';
import { Section, H2, Card, ButtonLink } from '../components/ui';
import { Headphones, MapPin, Music, Mic, CheckCircle2 } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen">
            {/* Hero */}
      <section id="home" className="hero">
        <div className="container items-center relative z-10 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="font-display text-5xl md:text-6xl text-ink mb-4">
              Silent Disco Rentals in Orange County & North SD
            </h1>
            <p className="text-lg md:text-xl text-ink/80 max-w-xl mb-6">
              Put on a headset and experience the magic of disco & connection.
            </p>
            <div className="flex items-center gap-4">
              <ButtonLink href="#quote">Get a Free Quote</ButtonLink>
              <a href="#packages" className="text-ruby font-semibold no-underline">See Packages ↓</a>
            </div>
          </div>
          <div className="hero-figure">
            <img src="/hero-art.png" alt="" aria-hidden className="hero-art" />
          </div>
        </div>
      </section>


      {/* Packages */}
      <Section id="packages">
        <H2>Our Packages</H2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <Headphones className="w-12 h-12 text-sunset mx-auto mb-4" />
            <h3 className="font-display text-2xl text-ink mb-2">Pickup</h3>
            <p className="text-ink/80">Grab the full kit, quick 10-min demo, run the party yourself.</p>
          </Card>
          <Card>
            <MapPin className="w-12 h-12 text-sunset mx-auto mb-4" />
            <h3 className="font-display text-2xl text-ink mb-2">Delivery</h3>
            <p className="text-ink/80">We deliver, set up, and pick up next day. Easy & stress-free.</p>
          </Card>
          <Card>
            <Music className="w-12 h-12 text-sunset mx-auto mb-4" />
            <h3 className="font-display text-2xl text-ink mb-2">Helper</h3>
            <p className="text-ink/80">Delivery + live walkthrough for your guests, on-site assistance for your event.</p>
          </Card>
          <Card>
            <Mic className="w-12 h-12 text-sunset mx-auto mb-4" />
            <h3 className="font-display text-2xl text-ink mb-2">Pro</h3>
            <p className="text-ink/80">Full DJ/MC service, live requests, announcements, and crowd hype.</p>
          </Card>
        </div>
      </Section>

      {/* Events */}
      <Section id="events" className="bg-white">
        <H2>Perfect For These Events</H2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "School Dances & Proms",
            "Church & Youth Nights",
            "Residential Dance Parties",
            "Charity Events & Fundraisers",
            "Corporate Events & Mixers",
            "Community Events",
            "Weddings & Receptions",
            "Birthdays & Special Events",
            "Bar/Bat Mitzvahs"
          ].map((label) => (
            <div key={label} className="flex items-center gap-3 bg-cream border border-sand rounded-xl p-4">
              <CheckCircle2 className="text-sunset w-6 h-6" />
              <span className="text-ink/90">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Sunset visual */}
      <section className="w-full">
        <div className="container">
          <div className="rounded-2xl overflow-hidden border border-sand shadow-dpd">
            <Image src="/sunset.jpg" alt="Retro sunset and waves" width={2048} height={720} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* What’s a Silent Disco */}
      <Section id="whats" className="bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <H2>What’s a Silent Disco?</H2>
          <div className="space-y-5 text-lg text-ink/85 leading-relaxed text-left md:text-center">
            <p>
              A silent disco is a party where everyone wears wireless LED headphones tuned into up to three channels. Guests choose their vibe — pop, hip-hop, EDM, or throwbacks — while the room stays quiet. It’s perfect for schools, weddings, corporate events, and backyard parties without upsetting the neighbors.
            </p>
            <p>
              Each headset has its own volume control and lets you switch between <span className="font-semibold">three color-coded channels</span> filled with custom tunes. The earcups glow with the channel you’re on, so the whole party can see what everyone’s jamming to — and switch together for sing-alongs, battles, or throwback moments.
            </p>
          </div>
          <div className="mt-10">
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-sand shadow-dpd">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/7A68HHodW5o" title="What is a Silent Disco?"
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </Section>

      <div className="stripes h-3"></div>

      {/* About with restored VW Bus/Daisy image */}
      <Section id="about" className="bg-cream">
        <H2>About Us</H2>
        <div className="max-w-3xl mx-auto text-ink/85 text-lg leading-relaxed text-center space-y-4">
          <p>
            Hey there! I’m Garrett, and I started Dana Point Disco because I love this community and the way it celebrates connection. The first time I experienced a silent disco was at my Senior Grad Night at Disneyland. I wandered into Cars Land, slipped on a headset, and suddenly I was transported — dancing with friends and total strangers, carefree and completely immersed in the music. That feeling stuck with me, and I thought: <span className="italic">what better place than here in Dana Point to bring that magic to life?</span>
          </p>
          <p>
            Today I get to share that joy through Dana Point Disco. I’m married to my wonderful wife, Jenna, and when I’m not helping people throw unforgettable parties, I’m at home with our two cats. For me, silent disco isn’t just about music — it’s about creating moments of connection, laughter, and memories you’ll never forget.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Image src="/van-clean.jpg" alt="Retro surf van with daisies" width={1200} height={420} className="w-full max-w-4xl h-auto" />
          </div>
        </div>
      </Section>

      <div className="stripes h-3"></div>

      {/* Request a Quote */}
      <Section id="quote" className="bg-white">
        <H2>Request a Quote</H2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-ink/80 mb-8">Fill this out and we’ll confirm availability and send pricing fast.</p>
          <form action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your_form_id'} method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="name" placeholder="Full Name" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <input name="email" type="email" placeholder="Email" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <input name="phone" type="tel" placeholder="Phone (optional)" className="bg-white border border-sand rounded-xl p-4 text-ink md:col-span-2" />
            <textarea name="message" placeholder="Tell us about your event (timeline, vibe, age group, extras)" rows={5} className="bg-white border border-sand rounded-xl p-4 text-ink md:col-span-2" />
            <input type="text" name="_gotcha" className="hidden" />
            <input type="hidden" name="_subject" value="New Quote Request — Dana Point Disco" />
            <div className="md:col-span-2 flex items-center justify-center">
              <button type="submit" className="bg-sunset hover:bg-coral rounded-2xl px-8 py-4 text-lg font-semibold text-white shadow-dpd">Send Request</button>
            </div>
          </form>
        </div>
      </Section>

      {/* Contact Us */}
      <Section id="contact" className="bg-white">
        <div className="max-w-3xl mx-auto">
          <H2>Contact Us</H2>
          <p className="text-center text-ink/80 mb-8">Questions or ready to book? Send us a message and we’ll get right back.</p>
          <form action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your_form_id'} method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="name" placeholder="Full Name" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <input name="email" type="email" placeholder="Email" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <input name="phone" type="tel" placeholder="Phone (optional)" className="bg-white border border-sand rounded-xl p-4 text-ink md:col-span-2" />
            <textarea name="message" placeholder="How can we help?" rows={5} className="bg-white border border-sand rounded-xl p-4 text-ink md:col-span-2" />
            <div className="md:col-span-2 flex items-center justify-center">
              <button type="submit" className="bg-sunset hover:bg-coral rounded-2xl px-8 py-4 text-lg font-semibold text-white shadow-dpd">Send Message</button>
            </div>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-sand/70 py-10 text-center text-sm text-ink/70 bg-cream">
        <div className="container">
          <p>© {new Date().getFullYear()} Dana Point Disco — Silent Disco Rentals in Orange County & North San Diego</p>
        </div>
      </footer>
    </div>
  );
}