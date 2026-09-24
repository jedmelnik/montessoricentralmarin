import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { ArrowIcon, ButtonLink } from "@/components/Button";
import { docs, programs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "School Day (9–2:45), Day Care (7:30–5:30), partial week, and Summer School. Ages 2–6.",
};

const rhythm = [
  { time: "7:30 – 8:45", label: "Early arrival", note: "Art and games for Day Care arrivals." },
  { time: "9:00 – 12:00", label: "Montessori work period", note: "Independent work with the materials, plus group time." },
  { time: "12:00", label: "Lunch", note: "Friday Fun Lunch, cooked by the children." },
  { time: "12:30 – 2:30", label: "Nap or cultural program", note: "Rest, or zoology, botany, geography, history, music, and art." },
  { time: "2:45", label: "School Day pick-up", note: "15-minute window on either side." },
  { time: "2:45 – 5:30", label: "Extended day", note: "Until 5:30 pm for Day Care children." },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        kicker="Programs"
        title="Hours, days, and summer school"
        lede={`Ages 2–6. Open ${site.hours}.`}
        image={{
          src: "/images/hero-classroom.png",
          alt: "A bright Montessori classroom with low wooden shelves of materials",
          // Focal: the pink tower atop the shelf, right of center.
          focal: "66% 40%",
        }}
      />

      <Section tone="white">
        <SectionHeading
          kicker="Options"
          title="Our programs"
          lede="Ages 24 months through 6. Same curriculum in every schedule."
        />
        <div className="mt-12 space-y-16">
          {programs.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className="scroll-mt-28 grid gap-6 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-4">
                <p className="kicker text-sage">
                  {String(i + 1).padStart(2, "0")} · {p.hours}
                </p>
                <h3 className="font-display mt-3 text-3xl font-medium leading-[1.1] text-navy">{p.name}</h3>
              </div>
              <div className="prose-school text-[1.0625rem] text-ink/85 lg:col-span-8">
                {p.body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading kicker="Schedule" title="A typical day" />
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/guide-and-child.jpg" alt="A teacher guides a child through a tray activity" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <ol className="lg:col-span-7">
            {rhythm.map((r) => (
              <li key={r.time} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                <p className="font-semibold tabular-nums text-navy">{r.time}</p>
                <div>
                  <p className="font-semibold text-navy">{r.label}</p>
                  <p className="mt-0.5 text-[0.95rem] text-muted">{r.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="white">
        <div className="flex flex-col gap-8 rounded-3xl bg-navy-tint p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <p className="kicker text-sage">Tuition</p>
            <h2 className="font-display mt-3 text-2xl font-medium text-navy sm:text-3xl">Tuition and sibling discount</h2>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted">
              Nine monthly payments. Families with more than one child enrolled receive 10%
              off the oldest child&rsquo;s tuition.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={docs.tuition.href} variant="navy">
              Tuition (PDF)
            </ButtonLink>
            <ButtonLink href="/admissions" variant="ghost">
              Admissions <ArrowIcon />
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
