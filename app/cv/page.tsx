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
        <div className="relative w-24 h-24 ml-4 overflow-hidden transition-transform duration-300 rounded-full bg-neutral-50 hover:scale-105">
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
            <Link href="https://levitt.vercel.app">levitt.vercel.app</Link>
          </p>
        </div>
      </div>

      <div>
        <h3>About</h3>
        {/* <p>
          GM, I'm Nathan. I enjoy building things that live on the internet. I
          develop exceptional websites and web apps that provide intuitive,
          pixel-perfect user interfaces with efficient and modern backends.
        </p> */}
        <p className="prose prose-neutral dark:prose-invert">
          {`Currently living & working in Los Angeles. I'm a frontend developer, optimist, and community builder. I currently `}
          <Link href="/work">work</Link>
          {` as the Lead Frontend Developer at `}
          <Badge href="https://lmmv.com">
            <svg
              width="13"
              height="13"
              role="img"
              aria-label="Like Minded Labs logo"
              className="inline-flex mr-1"
            >
              <use href="/sprite.svg#lml" />
            </svg>
            Like Minded Labs
          </Badge>
          {`, where I help build `}
          <Badge href="https://lmmv.com/toda-live">
            <svg
              width="20"
              height="13"
              role="img"
              aria-label="TODA Live logo"
              className="inline-flex mr-1"
            >
              <use href="/sprite.svg#toda" />
            </svg>
            TODA Live
          </Badge>
          {`, a teleconferencing and media production software built with `}
          <Badge href="https://react.dev">
            <svg
              width="14"
              height="14"
              role="img"
              aria-label="React logo"
              className="!mr-1"
            >
              <use href="/sprite.svg#react" />
            </svg>
            React
          </Badge>
          .
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="max-w-xl px-4 mx-auto space-y-10 py-28">
      <Intro />
      <Work />
    </div>
  );
}
