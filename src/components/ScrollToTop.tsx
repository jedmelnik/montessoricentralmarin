"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/**
 * Next.js will skip or mis-aim scroll on client navigations when:
 * - `scroll-behavior: smooth` is set on <html> (animations keep running after the route commits)
 * - `scroll-padding-top` makes the new hero look "not in view", so it scrollIntoView()s past the banner
 *
 * Force the document to the top on every path change, except hash links (#tour, program ids).
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const toTop = () => {
      if (window.location.hash) return;
      const html = document.documentElement;
      const previous = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      html.scrollTop = 0;
      document.body.scrollTop = 0;
      html.style.scrollBehavior = previous;
    };

    toTop();
    // Next.js may focus the new page after this layout pass; catch that late jump.
    const raf = requestAnimationFrame(toTop);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
