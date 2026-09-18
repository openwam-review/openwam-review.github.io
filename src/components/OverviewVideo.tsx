import { asset } from "@/lib/asset";

import { FILM } from "@/lib/paper";

/* Locally hosted silent overview for anonymous review. */
export default function OverviewVideo() {
  return (
    <figure className="mx-auto max-w-4xl px-4">
      <div className="overflow-hidden rounded-lg border border-border bg-black shadow-sm">
        <video
          src={asset(FILM.src)}
          poster={asset(FILM.poster)}
          controls
          muted
          playsInline
          preload="none"
          controlsList="nodownload"
          className="block h-auto w-full"
          style={{ aspectRatio: "16 / 9" }}
        />
      </div>
      <figcaption className="mt-3 text-center text-[13px] text-muted-foreground">
        A silent three-minute tour of the infrastructure, the study and the model.
      </figcaption>
    </figure>
  );
}
