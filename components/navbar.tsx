import Image from "next/image";

export function Navbar() {
  return (
    <div className="max-w-xl px-4 py-4 mx-auto">
      <div className="flex items-center justify-between flex-1">
        <Image
          src={"/logo.png"}
          width={45}
          height={45}
          alt="Nathan Levitt"
          className="border rounded-2xl border-neutral-200 dark:border-neutral-700"
        />
      </div>
    </div>
  );
}
