import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { TourForm } from "@/components/TourForm";
import { EventList } from "@/components/EventList";
import { ButtonLink } from "@/components/Button";
import { docs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `${site.address.full}. Call ${site.phone} or request a tour. Open ${site.hours}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Visit and tour"
        lede={`Open ${site.hours}. Tours by appointment.`}
        ledeOnMobile
      />

      <Section tone="white" still>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading kicker="Details" title="Phone, email, and address" />
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="kicker text-sage">Phone</dt>
                <dd className="mt-1.5">
                  <a href={site.phoneHref} className="font-display text-2xl font-medium text-navy tabular-nums hover:underline underline-offset-4">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="kicker text-sage">Email</dt>
                <dd className="mt-1.5">
                  <a href={`mailto:${site.email}`} className="break-all text-lg font-semibold text-navy hover:underline underline-offset-4">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="kicker text-sage">Address</dt>
                <dd className="mt-1.5 text-lg text-ink/85">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </dd>
                <dd className="mt-3">
                  <ButtonLink href={site.mapsHref} variant="ghost">
                    Get directions
                  </ButtonLink>
                </dd>
              </div>
              <div>
                <dt className="kicker text-sage">Hours</dt>
                <dd className="mt-1.5 text-lg text-ink/85">{site.hours}</dd>
              </div>
            </dl>
          </div>

          <div id="tour" className="scroll-mt-28 lg:col-span-7">
            <div className="rounded-3xl border border-line bg-cream p-6 sm:p-8 md:p-10">
              <h2 className="font-display text-3xl font-medium leading-[1.1] text-navy">Request a tour</h2>
              <p className="mt-3 text-[1rem] leading-relaxed text-muted">
                We&rsquo;ll confirm a time. You&rsquo;ll see the classroom during the work period.
              </p>
              <div className="mt-8">
                <TourForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-sand" aria-label="Map">
        <div className="site-wrap py-10 md:py-14">
          <div className="overflow-hidden rounded-3xl border border-line shadow-soft">
            <iframe
              title={`Map showing ${site.name} at ${site.address.full}`}
              src={site.mapsEmbed}
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[300px] w-full md:h-[420px]"
            />
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading kicker="Calendar" title="Upcoming dates" />
            <div className="mt-6">
              <EventList mobileLimit={4} />
            </div>
          </div>
          <div className="self-start rounded-3xl bg-navy-tint p-7 lg:col-span-5">
            <p className="kicker text-sage">Calendar</p>
            <p className="font-display mt-3 text-2xl font-medium text-navy">2026–27 calendar</p>
            <ButtonLink href={docs.calendar.href} variant="navy" className="mt-5">
              Download (PDF)
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
