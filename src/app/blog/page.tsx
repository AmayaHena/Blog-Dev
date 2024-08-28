import React from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/articles";

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
                text={`Articles`}
              />
            </div>
          </div>
        </div>
        <br/>
      </section>
      <section id="Articles List">
      <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.articles.map((education, id) => (
            <BlurFade
              key={education.name}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.name}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.name}
                title={education.name}
                subtitle={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;