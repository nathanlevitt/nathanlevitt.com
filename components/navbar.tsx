import Image from "next/image";
import { DigitalClock } from "@/components/clock";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="max-w-xl px-4 py-4 mx-auto">
        <div className="flex items-center justify-between flex-1">
          <Image
            src={"/logo.png"}
            width={45}
            height={45}
            alt="Nathan Levitt"
            className="border rounded-2xl border-neutral-200 dark:border-neutral-700"
          />

          <DigitalClock />
        </div>
      </div>
    </div>
  );
}
