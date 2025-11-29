"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function FocusOnNavigate() {
  const pathname = usePathname();
  const prevRef = useRef();

  useEffect(() => {
    const prev = prevRef.current;
    prevRef.current = pathname;

    // When navigating to the home page from another route, move focus to #content
    if (prev !== undefined && pathname === "/") {
      const el = document.getElementById("content");
      if (el) {
        // Ensure focusable, move focus, then clean up tabindex after blur
        el.setAttribute("tabindex", "-1");
        el.focus();
        const cleanup = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", cleanup);
        };
        el.addEventListener("blur", cleanup);
      }
    }
  }, [pathname]);

  return null;
}
