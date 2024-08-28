import React from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { ResumeCardXp } from "@/components/resume-card-xp";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/more-about-this-website";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const BlogPage: React.FC = () => {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="article">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`More about this blog`}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="badges">
        <div className="flex min-h-0 flex-col gap-y-3">
          <div className="space-y-12 w-full py-12">
          <div className="flex flex-wrap gap-1">
            {DATA.aboutThisWebsiteBadges.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
          </div>
        </div>
      </section>
      <section id="Introduction">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Hello,</h2>
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            Welcome to my blog, a resource for those interested in architecture, programming languages, technologies, and the journey of professional development in the tech industry.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            Here, I aim to provide clear, straightforward insights and practical knowledge that you can apply in your work and career.
        </BlurFade>
        <br/>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            This website is built using
             {" "}<Link
                  href="https://magicui.design/"
                  className="text-blue-500 hover:underline"
              >
                Magic UI
              </Link>{" "}
              and
             {" "}<Link
                  href="https://nextjs.org/"
                  className="text-blue-500 hover:underline"
              >
                Next.js
              </Link>
              , following an example provided on their respective sites.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          The combination of these tools allows me to maintain a clean, modern design, ensuring that you can find information quickly and navigate through the articles seamlessly.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            You can find the code for this blog in
             {" "}<Link
                  href="https://github.com/AmayaHena/Blog-Dev"
                  className="text-blue-500 hover:underline"
              >
                this repository
              </Link>
            .
        </BlurFade>
        <br/>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">What to expect</h2>
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Architecture Insights
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          Discussions on best practices and innovative approaches in software and systems architecture.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Cloud Technologies
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          Articles about AWS and other cloud platforms, offering insights into their features and practical applications.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Certification Guidance
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          Personal experiences and tips on obtaining certifications, including study strategies and resources for professional growth.
        </BlurFade>
        <br/>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          Whether you're a newcomer or a seasoned professional, I invite you to join me in exploring these topics as I share my journey and learning experiences.
        </BlurFade>
        <br/>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Happy learning!</h2>
        </BlurFade>
      </section>
    </main>
  );
}


export default BlogPage;
