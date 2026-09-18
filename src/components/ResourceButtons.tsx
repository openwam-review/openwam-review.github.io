"use client";

import { RESOURCE_LINKS } from "@/lib/resources";

/* ------------------------------------------------------------------ */
/* Brand icons                                                        */
/* ------------------------------------------------------------------ */

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.52 7.52 0 0 1 8 3.86c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" />
    </svg>
  );
}

export const RESOURCE_BUTTONS = [{
  link: RESOURCE_LINKS.code, icon: <GitHubIcon />,
  bg: "#181717", bgHover: "#000000", text: "#ffffff",
}];

const PILL_BASE =
  "group inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wide leading-none transition-colors";

export default function ResourceButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {RESOURCE_BUTTONS.filter((item) => item.link.href).map((item) => {
        const { link } = item;
        const pending = "pending" in link && link.pending;

        /* Not published yet — render the same pill, muted and inert, with a
           "soon" tail so the slot is visibly reserved rather than missing. */
        if (pending) {
          return (
            <span
              key={link.label}
              className={`${PILL_BASE} cursor-default bg-muted text-muted-foreground`}
              title={`${link.label} link coming soon`}
            >
              <span className="inline-flex opacity-60">{item.icon}</span>
              {link.label}
              <span className="ml-0.5 text-[10px] font-medium normal-case tracking-normal opacity-70">
                soon
              </span>
            </span>
          );
        }

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={PILL_BASE}
            style={{
              backgroundColor: item.bg,
              color: item.text,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = item.bgHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = item.bg;
            }}
          >
            <span className="inline-flex">{item.icon}</span>
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
