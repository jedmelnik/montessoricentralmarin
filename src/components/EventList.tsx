import { events, type EventItem } from "@/lib/site";

type Props = {
  items?: EventItem[];
  /** Hide items beyond this count on small screens. */
  mobileLimit?: number;
};

export function EventList({ items = events, mobileLimit = 3 }: Props) {
  return (
    <ol className="divide-y divide-line">
      {items.map((e, i) => (
        <li
          key={`${e.date}-${e.title}`}
          className={`flex gap-5 py-4 ${i >= mobileLimit ? "hidden md:flex" : "flex"}`}
        >
          <time
            dateTime={e.date}
            className={`flex w-14 shrink-0 flex-col items-center justify-center rounded-xl py-2 leading-none ${
              e.closed ? "bg-sand text-muted" : "bg-navy-tint text-navy"
            }`}
          >
            <span className="kicker text-[0.65rem]">{e.month}</span>
            <span className="font-display mt-1 text-xl font-semibold">{e.day ?? "—"}</span>
          </time>
          <div className="min-w-0 self-center">
            <p className={`font-semibold ${e.closed ? "text-muted" : "text-navy"}`}>{e.title}</p>
            {e.detail && <p className="mt-0.5 text-sm text-muted">{e.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
