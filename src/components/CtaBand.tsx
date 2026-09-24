import { ArrowIcon, ButtonLink } from "@/components/Button";
import { primaryCta, site } from "@/lib/site";

type Props = {
  title?: string;
  lede?: string;
};

export function CtaBand({
  title = "Schedule a tour",
  lede = "Tours are by appointment. Call, email, or send a request.",
}: Props) {
  return (
    <section className="bg-navy text-white">
      <div className="site-wrap reveal flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="max-w-xl">
          <p className="kicker text-sun">Visit</p>
          <h2 className="font-display mt-3 text-3xl font-medium text-balance leading-[1.08] sm:text-4xl">{title}</h2>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-white/75">{lede}</p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={primaryCta.href} size="lg">
            {primaryCta.label} <ArrowIcon />
          </ButtonLink>
          <a href={site.phoneHref} className="px-2 py-2 font-semibold text-white/90 tabular-nums underline-offset-4 hover:underline">
            or call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
