import { Card } from "./Card";

type ExperienceCardProps = {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  link: string;
  description: string[];
  techStack: string[];
};

export default function ExperienceList({
  experience,
}: {
  experience: ExperienceCardProps;
}) {
  return (
    <>
      <Card.Root>
        <Card.TimeLine start={experience.startDate} end={experience.endDate} />
        <Card.TechStackContentContainer>
          <Card.Content
            subtitle={experience.position}
            title={experience.company}
            link={experience.link}
          >
            {experience.description.map((desc, index) => (
              <p
                className="mt-2 text-sm font-common leading-normal text-slate-400"
                key={index}
              >
                {desc}
              </p>
            ))}
          </Card.Content>
          <Card.TechStack>
            {experience.techStack.map((tech) => (
              <Card.TechStackItem key={tech} name={tech} />
            ))}
          </Card.TechStack>
        </Card.TechStackContentContainer>
      </Card.Root>
    </>
  );
}
