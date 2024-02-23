import { Card } from "./Card";

type Project = {
  name: string;
  description: string[];
  techStack: string[];
  link: string;
  thumbnail: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <Card.Root>
        <Card.TechStackContentContainer>
          <Card.Content subtitle="" title={project.name} link={project.link}>
            {project.description.map((desc, index) => (
              <p
                className="mt-2 text-sm font-common leading-normal text-slate-400"
                key={index}
              >
                {desc}
              </p>
            ))}
          </Card.Content>
          <Card.TechStack>
            {project.techStack.map((tech) => (
              <Card.TechStackItem key={tech} name={tech} />
            ))}
          </Card.TechStack>
        </Card.TechStackContentContainer>
        <Card.Thumbnail src={project.thumbnail} alt={project.name} />
      </Card.Root>
    </>
  );
}
