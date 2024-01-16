import { cn } from "@/lib/utils";
import Image from "next/image";

export function Avatar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-16 h-16 bg-neutral-50 rounded-full overflow-hidden",
        className
      )}
    >
      <Image
        src="/avatar.jpg"
        width={144}
        height={144}
        alt="Nathan Levitt"
        className="object-cover"
      />
    </div>
  );
}
