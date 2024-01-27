import Link from "next/link";
import { Icons } from "./icons";

interface Job {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string | JSX.Element;
  skills: string[];
  href?: string;
}

const jobs = [
  {
    title: "Lead Frontend Developer",
    company: "Like Minded Labs",
    location: "Los Angeles, CA • Montreal, QC",
    startDate: "2022",
    endDate: "Present",
    description:
      "Lead a team of 5 engineers to develop our live over-the-shoulder video conferencing software (TODA Live) across web, desktop, and mobile applications. Collaborate closely with the Head of Product and VP of Tech to transform business objectives into technical direction, as well as deployment frequency.",
    href: "https://lmmv.com/lml",
    skills: ["React", "React Native", "Node.js", "TypeScript"],
  },
  {
    title: "Founder",
    company: "TruDine",
    location: "Los Angeles, CA",
    startDate: "2020",
    endDate: "Present",
    description:
      "Founded and evolved an interactive restaurant menu platform, transforming local restaurant marketing by offering immersive digital experiences with detailed dish visuals, ingredient insights, customer reviews, custom domains, themes, an admin portal, and detailed customer analytics. This platform successfully connected thousands of new customers with local eateries. Adapted the business model to create a unique social platform, utilizing menu data to enable users to upload food pictures, write reviews, and discover new dishes nearby. Led a team of six in engineering, marketing, data collection, restaurant outreach, and pitch material creation.",
    href: "https://trudine.com",
    skills: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "Swift",
      "Kotlin",
      "Node.js",
      "MySQL",
      "AWS",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "I.D. Me Promotions",
    location: "Los Angeles, CA",
    startDate: "2017",
    endDate: "2021",
    description:
      "Developed internal and public-facing merchandise websites for California Pizza Kitchen, UCLA Health, ElectraMeccanica, University of California (UCOP). Worked with Stanford Children's Health to design, develop, and deploy holiday popup stores for over 10,000 employees. Managed an external development team to rebuild main promotional products ecommerce website, along with industry suppliers for database integration.",
    skills: ["React", "Next.js", "Symfony", "Node.js", "TypeScript"],
  },
] satisfies Job[];

export function Work() {
  return (
    <div>
      <h3 className="mb-6">Work</h3>

      <div className="flex flex-col space-y-8">
        {jobs.map((job, jobIdx) => (
          <div
            key={jobIdx}
            className="grid content-start grid-cols-1 gap-2 sm:grid-cols-4"
          >
            <p className="text-sm prose prose-neutral dark:prose-invert">
              {job.startDate} – {job.endDate}
            </p>
            <div className="space-y-1 text-sm prose sm:col-span-3 prose-neutral dark:prose-invert">
              {job.href ? (
                <>
                  <Link href={job.href} target="_blank">
                    {job.title} – {job.company}
                    <Icons.arrow className="inline-flex items-center w-3.5 h-3.5 ml-1 prose prose-neutral dark:prose-invert" />
                  </Link>
                </>
              ) : (
                <a className="no-underline">
                  {job.title} – {job.company}
                </a>
              )}
              <p className="text-xs leading-6 prose prose-neutral dark:prose-invert">
                {job.location}
              </p>
              <p>{job.description}</p>
              {job.skills.length > 0 && (
                <div className="flex flex-wrap">
                  {job.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="px-2 py-1 mt-2 mr-2 text-xs font-medium leading-4 rounded-full bg-neutral-100 dark:bg-neutral-900"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
