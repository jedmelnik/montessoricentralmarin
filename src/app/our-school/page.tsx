import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { ArrowIcon, ButtonLink } from "@/components/Button";
import { afterSchool, enrichment, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our School",
  description:
    "AMS-affiliated bilingual Montessori preschool in San Rafael since 1974. Mission, philosophy, and enrichment.",
};

export default function OurSchoolPage() {
  return (
    <>
      <PageHero
        kicker="Our school"
        title="Bilingual Montessori in San Rafael"
        lede="English and Spanish. Ages 2–6. Serving Marin families since 1974."
        image={{
          src: "/images/hero-garden.png",
          alt: "A sunny preschool garden with a lemon tree and raised beds",
          // Focal: the lemon tree canopy, right of center.
          focal: "72% 45%",
        }}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading kicker="About us" title="Who we are" />
            <div className="prose-school mt-6 max-w-2xl text-[1.0625rem] text-ink/85">
              <p>
                We follow Dr. Maria Montessori and are an affiliate of the{" "}
                <a href={site.social.ams} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-navy">
                  American Montessori Society
                </a>
                . Children work in English and Spanish throughout the day.
              </p>
              <p>
                The full Montessori curriculum sits alongside music, yoga, cooking,
                gardening, dance, and art. Gymnastics and drama are offered after school.
                Indoor and outdoor work, monthly field trips, and families from many
                cultures are part of daily life.
              </p>
            </div>
          </div>
          <div className="grid gap-4 self-start sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/garden-friends.jpg" alt="Children and a teacher gathered around a rabbit in the garden" fill sizes="(min-width: 1024px) 35vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/child-painting.jpg" alt="A child painting at an easel" fill sizes="(min-width: 1024px) 35vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="kicker text-sun">Mission</p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-[1.1]">Support each child's development</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/80">
              We follow Dr. Montessori&rsquo;s insights: the nature of the child, the role of
              the teacher, and a prepared environment. Staff and parent education help
              adults do the same. The child is the focus.
            </p>
          </div>
          <div>
            <p className="kicker text-sun">Philosophy</p>
            <h2 className="font-display mt-3 text-3xl font-medium leading-[1.1]">Children learn by doing</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/80">
              Children are curious and absorb the world around them. Sensitive periods for
              movement, language, and order pull them into further learning. A calm,
              accepting classroom gives those tendencies room to grow.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker="Enrichment"
          title="Music, yoga, cooking, and more"
          lede="Weekly classes, plus optional after-school gymnastics and drama."
        />
        <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {enrichment.map((e) => (
            <li key={e.name} className="border-t border-navy/15 pt-4">
              <p className="font-display text-xl font-medium text-navy">{e.name}</p>
              <p className="mt-1 text-[0.95rem] text-muted">{e.note}</p>
            </li>
          ))}
          {afterSchool.map((e) => (
            <li key={e.name} className="border-t border-navy/15 pt-4">
              <p className="font-display text-xl font-medium text-navy">
                {e.name} <span className="kicker ml-1 align-middle text-[0.65rem] text-sage">After school</span>
              </p>
              <p className="mt-1 text-[0.95rem] text-muted">{e.note}</p>
            </li>
          ))}
          <li className="border-t border-navy/15 pt-4">
            <p className="font-display text-xl font-medium text-navy">Monthly field trips</p>
            <p className="mt-1 text-[0.95rem] text-muted">Into the community</p>
          </li>
        </ul>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading kicker="Recognition" title="Awards and affiliations" />
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">
              Best of Marin 2026, voted by Pacific Sun readers. Affiliate of the American
              Montessori Society.
            </p>
            <ButtonLink href="/admissions" variant="ghost" className="mt-7">
              How to apply <ArrowIcon />
            </ButtonLink>
          </div>
          <div className="flex flex-wrap items-center gap-8 lg:col-span-7 lg:justify-end">
            <Image src="/brand/best-of-marin-2026.png" alt="Pacific Sun Best of Marin 2026" width={624} height={784} className="h-40 w-auto" />
            <a href={site.social.ams} target="_blank" rel="noreferrer" aria-label="American Montessori Society (opens in new tab)">
              <Image src="/brand/ams-logo.jpg" alt="American Montessori Society — education that transforms lives" width={1517} height={308} className="h-14 w-auto" />
            </a>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
