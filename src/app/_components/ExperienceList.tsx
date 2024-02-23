import { ExperienceCard } from "./Card";
import { experience } from "@/data/experience";

export default function ExperienceList() {
  return (
    <>
      {experience.map((exp, index) => (
        <ExperienceCard.Root key={index}>
          <ExperienceCard.TimeLine start={exp.startDate} end={exp.endDate} />
          <ExperienceCard.TechStackContentContainer>
            <ExperienceCard.Content
              subtitle={exp.position}
              title={exp.company}
              link={exp.link}
            >
              {exp.description.map((desc, index) => (
                <p
                  className="mt-2 text-sm font-common leading-normal text-slate-400"
                  key={index}
                >
                  {desc}
                </p>
              ))}
            </ExperienceCard.Content>
            <ExperienceCard.TechStack>
              {exp.techStack.map((tech) => (
                <ExperienceCard.TechStackItem key={tech} name={tech} />
              ))}
            </ExperienceCard.TechStack>
          </ExperienceCard.TechStackContentContainer>
        </ExperienceCard.Root>
      ))}
    </>
  );
}
