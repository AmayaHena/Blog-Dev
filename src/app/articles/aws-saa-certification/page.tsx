import React from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { ResumeCardXp } from "@/components/resume-card-xp";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/aws-saa-certification";
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
                text={`AWS SAA Certification`}
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
        This article explores the AWS Solutions Architect - Associate certification (SAA-C03).
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This past summer, I embarked on the journey to obtain this certification, gaining valuable insights along the way and developing some reflections on the process.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        At its core, this certification is described as: 
             {" "}<Link
                  href="https://aws.amazon.com/certification/exams/?nc1=h_ls"
                  className="text-blue-500 hover:underline"
              >
                &quot;Validates the ability to design and implement distributed systems on AWS.&quot;
              </Link>{" "}
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        However, my experience has taught me that the significance of this certification extends far beyond the credential itself.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        The role of a Solutions Architect encompasses a broader scope—one that involves strategic thinking and collaboration in a dynamic environment.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose text-m max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        With that in mind, let&apos;s delve into the essential components of the SAA-C03 certification, starting with a clear understanding of what it truly encompasses.
        </BlurFade>
        <br/>
      </section>
      <section id="Overview of the Certification">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Overview of the Certification</h2>
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This certification covers a wide array of topics, but it may not align with the expectations you have about modern cloud architectures.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This past summer, I embarked on the journey to obtain this certification, gaining valuable insights along the way and developing some reflections on the process.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        While the certification does touch on various AWS services, it primarily concentrates on non-microservices architectures.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This focus reflects a foundational approach to cloud design, ensuring that candidates understand core principles before diving into more complex scenarios.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        It&apos;s essential to grasp how traditional architectures function before exploring the intricacies of microservices.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Surprisingly, many scenario-based questions and case studies in the exam center around hybrid or on-premises architectures.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This focus highlights the practical realities organizations face as they transition to the cloud—many companies are not completely cloud-native.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        They often exist in a hybrid state, necessitating solutions that integrate both on-premises environments and cloud services.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This approach challenges candidates to think critically about designing scalable, resilient systems that can operate seamlessly across different infrastructures.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        However, one aspect that some may find disappointing is that the certification emphasizes the knowledge of service usage over hands-on experience.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        While you need to understand which AWS services to apply in various scenarios, the assessment doesn&apos;t prioritize hands-on expertise with those services.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This might leave you feeling less prepared for real-world applications, where practical experience can be just as important as theoretical knowledge.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        The SAA-C03 certification may not delve deeply into microservices or provide extensive hands-on practice, it equips you with a solid understanding of AWS’s foundational services and architectural principles—preparing you for the complex challenges you’ll face in the field.
        </BlurFade>
      </section>
      <section id="Resources">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Resources</h2>
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        In this section, I’ll share a selection of resources that I found useful while preparing for the AWS SAA certification.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        One standout resource is
        {" "}<Link
                  href="https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/"
                  className="text-blue-500 hover:underline"
              >
                Stephane Maarek’s course on Udemy
              </Link>
        , which I highly recommend. It provides excellent hands-on labs and real-world exercises focused on actual solutions architecture cases.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This practical approach sets you up to be an effective Solutions Architect in a real-world environment.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Additionally, Maarek offers a
        {" "}<Link
                  href="https://www.udemy.com/course/practice-exams-aws-certified-solutions-architect-associate/"
                  className="text-blue-500 hover:underline"
              >
                dedicated exam course with six practice exams
              </Link>
        , which are invaluable for exam preparation.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        AWS provides a wealth of free resources that are great starting points for anyone new to the platform.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        <Link
                  href="https://explore.skillbuilder.aws/learn"
                  className="text-blue-500 hover:underline"
              >
                Skill Builder
              </Link>{" "}
              offers a range of learning paths and modules to get you acquainted with AWS.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        <Link
                  href="https://aws.amazon.com/solutions/?nc1=h_ls"
                  className="text-blue-500 hover:underline"
              >
                AWS Architecture Center
              </Link>{" "}
        provides numerous architecture examples along with relevant resources to help you understand best practices.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        <Link
                  href="https://aws.amazon.com/solutions/?nc1=h_ls"
                  className="text-blue-500 hover:underline"
              >
                AWS Solutions
              </Link>{" "}
        offers comprehensive architectures and resources required to implement various solutions.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        <Link
                  href="https://portal.tutorialsdojo.com/courses/aws-certified-solutions-architect-associate-practice-exams/"
                  className="text-blue-500 hover:underline"
              >
                 Tutorials Dojo
              </Link>{" "}
        created a set of flashcards to help reinforce your knowledge.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        I personally didn’t make use of them, but many found them beneficial for quick review.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        For peer support and advice, I recommend checking out the
        {" "}<Link
                  href="https://www.reddit.com/r/AWSCertifications/"
                  className="text-blue-500 hover:underline"
              >
                 AWS Certifications subreddit
              </Link>
        .
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        It’s a great place to find tips, resources, and shared experiences from others pursuing AWS certifications.
        </BlurFade>
      </section>
      <section id="Make your journey successful">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Make your journey successful</h2>
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        As you prepare for the certification, here are some targeted tips based on my experience:
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="font-bold prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Master the Core Services First
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Before diving into architectural concepts, ensure you have a deep understanding of the key AWS services.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This foundational knowledge is critical, as architecture decisions often revolve around knowing service capabilities and limitations.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="font-bold prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Prioritize Hands-On Practice
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Theoretical knowledge alone won&apos;t cut it. Engage in hands-on labs using the AWS Free Tier.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Build actual projects, experiment with different services, and get comfortable navigating the console.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This practical experience is crucial to applying what you learn in the exam and in real-world scenarios.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="font-bold prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Delve Deep into Each Topic
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Don’t just skim through the exam objectives. Take the time to explore each subject in-depth.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        For instance, understanding networking concepts or IAM policies is not only beneficial for passing the exam but also vital for any architect role.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="font-bold prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Leverage Diagramming Tools
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Use tools like
        {" "}<Link
                  href="https://www.tldraw.com/"
                  className="text-blue-500 hover:underline"
              >
                tldraw.com
              </Link>{" "}
              to create architecture diagrams as you study.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Visualizing how different services interact helps reinforce your understanding and makes it easier to remember key concepts.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="font-bold prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Stay Updated on AWS Changes
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        AWS frequently evolves its services and features. Follow AWS blogs, webinars, or release notes to stay current.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        This knowledge not only aids in the exam but also keeps you relevant in the field.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        By focusing on these strategic insights, you&apos;ll position yourself not just to pass the certification but to become a competent Solutions Architect ready for the challenges ahead.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        Here are a few examples of the study maps I created myself.
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        While they aren&apos;t sufficient on their own to guarantee passing the certification, they serve as valuable tools for reinforcing the information.
        </BlurFade>
        <br/>
        <Link href={DATA.EC2Map}>
        <img src={DATA.EC2Map}/>
        </Link>
        <br/>
        <Link href={DATA.InstanceStorageMap}>
        <img src={DATA.InstanceStorageMap}/>
        </Link>
        <br/>
        <Link href={DATA.S3Map}>
        <img src={DATA.S3Map}/>
        </Link>
      </section>
      <section id="Conclusion">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Conclusion</h2>
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        In conclusion, the AWS SAA ceritification is a valuable asset that equips you with essential skills for architecting solutions in the AWS ecosystem. While it emphasizes understanding service usage and foundational architectures, practical experience is key.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        My own preparation highlighted the importance of combining structured coursework, hands-on practice with AWS, and deep exploration of services. Utilize resources like Stephane Maarek’s courses and AWS&apos;s free offerings to build a solid foundation.
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        As you embark on this journey, focus on both theoretical knowledge and practical application. Engage with the AWS community and stay updated on industry developments. This certification not only validates your skills but also opens doors to new opportunities and prepares you for the evolving challenges of cloud architecture.
        </BlurFade>
      </section>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Happy learning!</h2>
        </BlurFade>
    </main>
  );
}

export default BlogPage;
