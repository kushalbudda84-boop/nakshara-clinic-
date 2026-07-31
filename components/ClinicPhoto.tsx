import Image from "next/image";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Renders a real clinic photo when available, otherwise a tasteful designed
 * placeholder in brand colours so the layout never looks broken. Drop a real
 * file at the configured `src` path in /public and flip `hasImage` to true
 * in data/clinic.ts — no component changes required.
 */
export default function ClinicPhoto({
  src,
  alt,
  hasImage,
  label,
  className,
  imgClassName,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  hasImage: boolean;
  label?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (hasImage) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900",
        className
      )}
      role="img"
      aria-label={alt}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />
      <Camera className="h-6 w-6 text-gold-300/80" aria-hidden="true" />
      {label && (
        <span className="text-xs font-medium tracking-wide text-navy-100/80 px-3 text-center">
          {label}
        </span>
      )}
    </div>
  );
}
