import Image from "next/image";
import Link from "next/link";

export function Intro() {
  return (
    <div className="">
      <div className="flex items-center mb-8 space-x-4">
        <div className="relative w-20 h-20 overflow-hidden transition-transform duration-300 rounded-full md:w-24 md:h-24 bg-neutral-50 hover:scale-105">
          <Image
            src="/avatar.jpg"
            width={144}
            height={144}
            alt="Nathan Levitt"
            className="object-cover w-full h-full"
            priority={true}
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
          <Link href="https://lmmv.com/lml" target="_blank">
            Like Minded Labs
          </Link>
          {`, where I help build `}
          <Link href="https://lmmv.com/toda-live" target="_blank">
            TODA Live
          </Link>
          {`, a teleconferencing and media production software built with `}
          <Link href="https://react.dev" target="_blank">
            React
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
