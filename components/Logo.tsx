import { cn } from "@/lib/utils";

/**
 * Refined star mark — a four-point "guiding star" motif, distinct from the
 * clinic's existing signage. Used as the primary brand icon site-wide.
 */
export function StarMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" className="fill-navy-800" />
      <path
        d="M20 8L22.3 17.7L32 20L22.3 22.3L20 32L17.7 22.3L8 20L17.7 17.7L20 8Z"
        className="fill-gold-400"
      />
    </svg>
  );
}

export default function Logo({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <StarMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading font-bold text-[17px] sm:text-lg tracking-tight",
            variant === "light" ? "text-navy-900" : "text-white"
          )}
        >
          Nakkshatra Clinic
        </span>
        <span
          className={cn(
            "text-[11px] font-medium tracking-wide mt-0.5",
            variant === "light" ? "text-navy-500" : "text-navy-200"
          )}
        >
          Family Healthcare
        </span>
      </span>
    </span>
  );
}
