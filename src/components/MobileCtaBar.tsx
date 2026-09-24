import Link from "next/link";
import { primaryCta, site } from "@/lib/site";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-4">
      <path d="M4.5 3.5h3l1.5 3.75-1.9 1.15a8 8 0 0 0 4.5 4.5l1.15-1.9L16.5 12.5v3a1.5 1.5 0 0 1-1.6 1.5C8.5 16.6 3.4 11.5 3 5.1a1.5 1.5 0 0 1 1.5-1.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-4">
      <path d="M10 17.5s-5.5-5-5.5-9a5.5 5.5 0 1 1 11 0c0 4-5.5 9-5.5 9Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="8.5" r="1.75" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream/95 backdrop-blur-md md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="grid grid-cols-[1fr_1fr_1.6fr] gap-2 px-3 py-2.5">
        <a href={site.phoneHref} className="inline-flex items-center justify-center gap-1.5 rounded-full border border-navy/20 py-2.5 text-sm font-semibold text-navy">
          <PhoneIcon /> Call
        </a>
        <a href={site.mapsHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full border border-navy/20 py-2.5 text-sm font-semibold text-navy">
          <PinIcon /> Map
        </a>
        <Link href={primaryCta.href} className="inline-flex items-center justify-center rounded-full bg-sun py-2.5 text-sm font-semibold text-navy-deep shadow-soft">
          {primaryCta.label}
        </Link>
      </div>
    </div>
  );
}
