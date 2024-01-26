import { Work } from "@/components/work";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function Badge(props: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center p-1 text-sm leading-4 no-underline border rounded border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
    />
  );
}

function SocialLink(props: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center p-2 text-sm leading-4 no-underline transition-all duration-300 bg-white border rounded-full border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 hover:bg-neutral-900 dark:hover:bg-white text-neutral-900 dark:text-neutral-100 hover:text-neutral-100 dark:hover:text-neutral-900"
    />
  );
}

function Intro() {
  return (
    <div className="">
      <div className="flex items-center mb-8 space-x-4">
        <div className="relative w-20 h-20 overflow-hidden transition-transform duration-300 rounded-full md:w-24 md:h-24 bg-neutral-50 hover:scale-105">
          <Image
            src="/avatar.jpg"
            width={144}
            height={144}
            alt="Nathan Levitt"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl">Nathan Levitt</h1>
          <p className="text-sm">Senior Frontend Developer</p>
          <p className="text-sm prose prose-neutral dark:prose-invert">
            <Link href="mailto:nathan@trudine.com">nathan@trudine.com</Link>
          </p>
        </div>
      </div>

      <div>
        <h3>About</h3>
        <p className="text-sm leading-6 prose prose-neutral dark:prose-invert">
          {`Currently living & working in Los Angeles. I'm a frontend developer passionate about creating intuitive user experiences and innovating solutions in a dynamic, fast-paced environment. I currently work as the Lead Frontend Developer at `}
          <Link href="https://lmmv.com/lml">Like Minded Labs</Link>
          {`, where I help build `}
          <Link href="https://lmmv.com/toda-live">TODA Live</Link>
          {`, a teleconferencing and media production software built with `}
          <Link href="https://react.dev">React</Link>.
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="max-w-xl px-4 py-24 mx-auto space-y-10 md:py-28">
      <Intro />
      <Work />
    </div>
  );
}
