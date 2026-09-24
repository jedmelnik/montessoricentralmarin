import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { docs, nav, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-deep text-white">
      <div className="site-wrap grid gap-12 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
            An AMS-affiliated bilingual Montessori school in San Rafael. English and Spanish, ages 2–6. Since {site.founded}.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <a href={site.social.ams} target="_blank" rel="noreferrer" className="rounded-lg bg-white p-2.5 transition-opacity hover:opacity-90" aria-label="American Montessori Society (opens in new tab)">
              <Image src="/brand/ams-logo.jpg" alt="American Montessori Society" width={148} height={30} className="h-[30px] w-auto" />
            </a>
            <Image
              src="/brand/best-of-marin-2026.png"
              alt="Pacific Sun Best of Marin 2026"
              width={624}
              height={784}
              className="h-16 w-auto rounded-md bg-white p-1.5"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="kicker text-sun">Explore</h2>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={docs.calendar.href} target="_blank" rel="noreferrer" className="text-white/85 transition-colors hover:text-white">
                School Calendar (PDF)
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="kicker text-sun">Visit us</h2>
          <address className="mt-5 space-y-3 text-[0.95rem] not-italic text-white/85">
            <p>
              <a href={site.mapsHref} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </a>
            </p>
            <p>
              <a href={site.phoneHref} className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white">
                {site.email}
              </a>
            </p>
            <p className="text-white/60">{site.hours}</p>
          </address>
          <div className="mt-6 flex gap-4 text-sm">
            <a href={site.social.facebook} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
              Facebook
            </a>
            <a href={site.social.yelp} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
              Yelp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-wrap flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Affiliate of the American Montessori Society · Est. {site.founded}</p>
        </div>
      </div>
    </footer>
  );
}
