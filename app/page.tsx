import { Intro } from "@/components/intro";
import { Links } from "@/components/links";
import { Work } from "@/components/work";

export default function Page() {
  return (
    <div className="max-w-xl px-4 py-24 mx-auto space-y-10 md:py-28">
      <Intro />
      <Work />
      <Links />
    </div>
  );
}
