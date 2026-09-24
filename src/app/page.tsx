import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { ArrowIcon, ButtonLink } from "@/components/Button";
import { EventList } from "@/components/EventList";
import { CtaBand } from "@/components/CtaBand";
import { curriculum, docs, gallery, primaryCta, programs, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <PageHero
        size="home"
        kicker="San Rafael, CA"
        title="Bilingual Montessori for ages 2–6"
        lede="English and Spanish. School day, full day, and summer. AMS affiliate since 1974."
        actions={
          <>
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label} <ArrowIcon />
            </ButtonLink>
            <span className="hidden sm:contents">
              <ButtonLink href="/programs" variant="ghost-light" size="lg">
                See programs
              </ButtonLink>
            </span>
          </>
        }
        image={{
          src: "/images/hero-children-wide.png",
          alt: "Three smiling preschoolers leaning on a wooden railing outdoors",
          // Focal: the laughing girl's face (~66% x) — the group's anchor, clear of the left lockup.
          focal: "66% 42%",
        }}
      />

      {/* Welcome + credentials: one job — establish who we are and why families trust us. */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading kicker="Welcome" title="Who we are" />
            <div className="prose-school mt-6 max-w-2xl text-[1.0625rem] text-ink/85">
              <p>
                We follow Dr. Maria Montessori and are an affiliate of the American
                Montessori Society. Children learn in English and Spanish every day. The
                full Montessori curriculum is paired with music, yoga, cooking, gardening,
                dance, art, monthly field trips, and families from many cultures.
              </p>
            </div>
            <ButtonLink href="/our-school" variant="link" className="mt-6 font-semibold">
              About our school <ArrowIcon />
            </ButtonLink>
          </div>
          <div className="lg:col-span-5">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <li className="flex items-center gap-5 rounded-2xl border border-line bg-cream p-5">
                <Image
                  src="/brand/best-of-marin-2026.png"
                  alt=""
                  width={624}
                  height={784}
                  className="h-20 w-auto shrink-0"
                />
                <div>
                  <p className="font-semibold text-navy">Best of Marin 2026</p>
                  <p className="mt-1 text-sm text-muted">Voted by Pacific Sun readers.</p>
                </div>
              </li>
              <li className="flex items-center gap-5 rounded-2xl border border-line bg-cream p-5">
                <Image
                  src="/brand/ams-logo.jpg"
                  alt=""
                  width={1517}
                  height={308}
                  className="h-9 w-auto shrink-0"
                />
                <div>
                  <p className="font-semibold text-navy">AMS affiliate</p>
                  <p className="mt-1 text-sm text-muted">
                    Member of the{" "}
                    <a href={site.social.ams} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-navy">
                      American Montessori Society
                    </a>
                    .
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-5 rounded-2xl border border-line bg-cream p-5 sm:col-span-2 lg:col-span-1">
                <p className="font-display shrink-0 text-4xl font-semibold leading-none text-navy">
                  {new Date().getFullYear() - site.founded}
                  <span className="text-sun">+</span>
                </p>
                <div>
                  <p className="font-semibold text-navy">Years in San Rafael</p>
                  <p className="mt-1 text-sm text-muted">Since {site.founded}.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Programs */}
      <Section id="programs">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="Programs"
            title="Hours and days"
            lede="School day, full day, partial week, or summer. Same curriculum in every schedule."
          />
          <ButtonLink href="/programs" variant="ghost" className="shrink-0">
            All programs <ArrowIcon />
          </ButtonLink>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <li key={p.id}>
              <Link
                href={`/programs#${p.id}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <p className="kicker text-sage">{p.hours}</p>
                <h3 className="font-display mt-3 text-2xl font-medium text-navy">{p.name}</h3>
                <p className="mt-3 hidden flex-1 text-[0.95rem] leading-relaxed text-muted sm:block">{p.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy sm:mt-5">
                  Details <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Bilingual + curriculum */}
      <Section tone="white" id="curriculum">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:col-span-6 lg:aspect-[5/4]">
            <Image
              src="/images/hero-spanish.png"
              alt="A bilingual language shelf with Spanish vocabulary cards and objects"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              // Focal: the vocabulary cards + globe on the right; anchor right so no card is clipped.
              style={{ objectPosition: "100% 50%" }}
            />
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              kicker="Curriculum"
              title="What children learn"
              lede="Practical Life, Sensorial, Math, Language, Spanish, and Cultural Studies."
            />
            <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-5">
              {curriculum.map((c) => (
                <li key={c.id}>
                  <Link href={`/curriculum#${c.id}`} className="group block">
                    <p className="font-semibold text-navy group-hover:underline underline-offset-4">{c.name}</p>
                    <p className="mt-1 hidden text-sm leading-relaxed text-muted sm:block">{c.short}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href="/curriculum" variant="ghost" className="mt-8">
              Curriculum <ArrowIcon />
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Gallery — real photos from the school. */}
      <Section tone="sand">
        <SectionHeading kicker="Photos" title="In the classroom" />
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gallery.map((g, i) => (
            <li
              key={g.src}
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-tint ${i >= 4 ? "hidden md:block" : ""}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </Section>

      {/* Events + calendar */}
      <Section tone="white" id="events">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading kicker="Calendar" title="News and events" />
            <div className="mt-8">
              <EventList />
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-navy p-7 text-white md:p-9">
              <p className="kicker text-sun">School calendar</p>
              <h3 className="font-display mt-3 text-2xl font-medium">2026–27 calendar</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/75">
                Holidays, closures, and parent nights in one PDF.
              </p>
              <ButtonLink href={docs.calendar.href} className="mt-6">
                Download calendar (PDF)
              </ButtonLink>
              <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/70">
                Parent Education Nights are open to current and prospective families.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
