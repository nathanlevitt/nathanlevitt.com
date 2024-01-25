import Link from "next/link";
import { Avatar } from "@/components/avatar";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const SOCIALS = [
  {
    href: "https://github.com/nathanlevitt",
    icon: <Icons.github className="w-6 h-6" />,
  },
  {
    href: "https://twitter.com/nathanlevitt",
    icon: <Icons.twitter className="w-6 h-6" />,
  },
  {
    href: "https://linkedin.com/in/nathanlevitt",
    icon: <Icons.linkedIn className="w-6 h-6" />,
  },
];

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

function CTAButton({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className={cn(
        "flex items-center justify-center font-medium text-white dark:text-neutral-100 bg-neutral-900 dark:bg-neutral-800 max-w-full min-w-56 py-3.5 rounded-full",
        className
      )}
    />
  );
}

export function Intro() {
  return (
    <div className="flex flex-col items-center p-6 mx-auto space-y-6 bg-white rounded-lg dark:bg-neutral-900 ring-1 ring-neutral-400/10">
      <Avatar />

      <h1 className="text-5xl font-black tracking-tight text-center">
        Senior Frontend Developer
      </h1>

      <p className="prose text-center prose-neutral dark:prose-invert">
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

      <div className="flex gap-4">
        {SOCIALS.map(({ href, icon }) => (
          <SocialLink key={href} href={href}>
            {icon}
          </SocialLink>
        ))}
      </div>

      <CTAButton href="mailto:nathan@trudine.com">Get in touch</CTAButton>
    </div>
  );
}
