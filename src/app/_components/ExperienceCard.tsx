import { Card } from "./Card";
import { Link2 } from "lucide-react";

type ExperienceCardProps = {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  companyLink: string;
  description: string[];
  techStack: string[];
  extLinks?: { link: string; title: string }[];
};

export default function ExperienceCard({
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
            link={experience.companyLink}
          >
            {experience.description.map((desc, index) => (
              <p
                className="mt-2 text-sm font-common leading-normal text-content-2"
                key={index}
              >
                {desc}
              </p>
            ))}
          </Card.Content>
          <div className="flex gap-2">
            {experience.extLinks &&
              experience.extLinks.map((extLink) => (
                <Card.CardLink
                  key={extLink.link}
                  link={extLink.link}
                  title={extLink.title}
                  icon={<Link2 size={16} />}
                />
              ))}
          </div>
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
