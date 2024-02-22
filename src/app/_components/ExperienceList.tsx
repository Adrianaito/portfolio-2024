import { Card } from "./Card";
import { experience } from "@/data/experience";

export default function ExperienceList() {
  return (
    <>
      {experience.map((exp, index) => (
        <Card.Root key={index}>
          <Card.TimeLine start={exp.startDate} end={exp.endDate} />
          <Card.TechStackContentContainer>
            <Card.Content
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
            </Card.Content>
            <Card.TechStack>
              {exp.techStack.map((tech) => (
                <Card.TechStackItem key={tech} name={tech} />
              ))}
            </Card.TechStack>
          </Card.TechStackContentContainer>
        </Card.Root>
      ))}
    </>
  );
}
