import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { VideoCard } from "@/components/video-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { PersonSchema } from "@/components/schema/person-schema";
import { Metadata } from "next";
import { Icons } from "@/components/icons";
import ShinyButton from "@/components/ui/shiny-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SocialIconLink } from "@/components/social-icon-link";
import { BlogSkeleton } from "@/components/skeletons/blog-skeleton";
import { GithubSkeleton } from "@/components/skeletons/github-skeleton";
import { ProjectSkeleton } from "@/components/skeletons/project-skeleton";
import { HackathonSkeleton } from "@/components/skeletons/hackathon-skeleton";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GhibliSkyBackground } from "@/components/ghibli-elements";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.summary,
  openGraph: {
    title: DATA.name,
    description: DATA.summary,
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: "https://res.cloudinary.com/dbghbvuhb/image/upload/v1744607716/profileprofessional_nmfavf.jpg",
        width: 1200,
        height: 630,
        alt: `${DATA.name}'s Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.summary,
    creator: "@" + "0x4nud33p",
    images: [
      "https://res.cloudinary.com/dbghbvuhb/image/upload/v1744607716/profileprofessional_nmfavf.jpg",
    ],
  },
};

const BlogCard = dynamic(
  () => import("@/components/blog-card").then((mod) => mod.BlogCard),
  {
    ssr: true,
    loading: () => <BlogSkeleton />,
  }
);

const GithubContributions = dynamic(
  () =>
    import("@/components/github-calendar").then(
      (mod) => mod.GithubContributions
    ),
  {
    ssr: false,
    loading: () => <GithubSkeleton />,
  }
);

const ProjectCardDynamic = dynamic(
  () => import("@/components/project-card").then((mod) => mod.ProjectCard),
  {
    ssr: true,
    loading: () => <ProjectSkeleton />,
  }
);

const HackathonCardDynamic = dynamic(
  () => import("@/components/hackathon-card").then((mod) => mod.HackathonCard),
  {
    ssr: true,
    loading: () => <HackathonSkeleton />,
  }
);

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden font-sans">
        {/* <GhibliSkyBackground /> */}
      </div>

      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <PersonSchema />
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5 font-sans">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="profile-wrapper">
                  <Avatar className="size-28 relative z-10">
                    <AvatarImage
                      alt={DATA.name}
                      src={DATA.avatarUrl}
                      width={112}
                      height={112}
                      loading="eager"
                    />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold font-sans">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        <section id="connect">
          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-sans">
                Let's collaborate 🤝🏻
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {Object.entries(DATA.contact.social).map(
                  ([name, social], idx) => (
                    <SocialIconLink
                      key={name}
                      name={name}
                      url={social.url}
                      icon={<social.icon />}
                      delay={BLUR_FADE_DELAY * 5 + idx * 0.05}
                    />
                  )
                )}
              </div>
            </div>
          </BlurFade>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3 font-sans">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="blogs">
          <div className="flex min-h-0 flex-col gap-y-3 font-sans">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Recent Blog Posts</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="flex flex-col space-y-4">
                <BlogCard
                  post={{
                    title:
                      "EVM Internals Every Smart Contract Auditor Should Know",
                    publishedAt: "May 23, 2025",
                    summary:
                      "From calldata to memory pointers become memory aware",
                    slug: "solidity",
                    link: "https://medium.com/@0x4nud33p/evm-internals-every-smart-contract-auditor-should-know-74e77e8a997e",
                  }}
                />
                <BlogCard
                  post={{
                    title:
                      "Beyond the Basics: 10 Lesser-Known Facts About Solidity",
                    publishedAt: "Mar 21, 2025",
                    summary: "some surprising facts in solidity.",
                    slug: "solidity",
                    link: "https://medium.com/@0x4nud33p/beyond-the-basics-10-lesser-known-facts-about-solidity-2950487d48ea",
                  }}
                />
                <BlogCard
                  post={{
                    title: "Hash Collisions in Solidity and the Role of ABI",
                    publishedAt: "Mar 19, 2025",
                    summary:
                      "A comprehensive guide explaining Hash Collisions in Solidity",
                    slug: "Collisions",
                    link: "https://medium.com/@0x4nud33p/hash-collisions-in-solidity-and-the-role-of-abi-e18335abe8d5",
                  }}
                />
                {/* <Link
                  href="/blog"
                  className="mt-4 block"
                >
                  <RainbowButton
                    className="w-full sm:w-[160px] px-4 py-2 group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-bold text-sm"
                  >
                    Read More Blogs
                  </RainbowButton>
                </Link> */}
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="contributions">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold font-sans">
              GitHub Contributions
            </h2>
            <GithubContributions />
          </BlurFade>
        </section>
        <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-3 font-sans">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Featured Projects</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="grid gap-4 sm:grid-cols-2">
                {DATA.projects.slice(0, 4).map((project) => (
                  <div
                    key={project.title}
                    className="relative overflow-hidden rounded-xl"
                  >
                    <BorderBeam
                      duration={4}
                      size={300}
                      reverse
                      className="from-transparent via-purple-500 to-transparent"
                    />
                    <ProjectCard
                      {...project}
                      tags={Array.from(project.technologies)}
                    />
                  </div>
                ))}
              </div>
              <Link href="/projects" className="mt-4 block">
                <ShinyButton className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-semibold">
                  View All Projects →
                </ShinyButton>
              </Link>
            </BlurFade>
          </div>
        </section>
        <section id="experience">
          <div className="space-y-8 w-full py-2 font-sans">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Experience
                  </div>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.work.map((project, id) => (
                  <BlurFade
                    key={project.title + project.start}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCardDynamic
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.start}
                      image={project?.image}
                      // links={project?.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section id="hackathons">
          <div className="space-y-12 w-full py-12 font-sans">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block mb-2 rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I like building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my college years, I participated in some hackathons.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCardDynamic
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3 font-sans">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-4 font-sans">
              <h2 className="text-xl font-bold">Contact</h2>

              <p className="text-muted-foreground">
                Always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach
                out!
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:anudeepavula009@gmail.com"
                  className="flex items-center gap-2 underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  <Icons.email className="size-4" />
                  anudeepavula009@gmail.com
                </a>

                <a
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
                >
                  <DATA.contact.social.X.icon className="size-4" />
                  Connect on X
                </a>
              </div>
            </div>
          </BlurFade>
        </section>
        <footer className="mt-20 border-t py-8 font-sans">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>
                    © {new Date().getFullYear()} {DATA.name}. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </footer>
      </main>
    </>
  );
}
