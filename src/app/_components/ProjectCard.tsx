import { Card } from "./Card";

type Project = {
  name: string;
  description: string[];
  techStack: string[];
  link: string;
};

export default function ProjectCard({ projects }: { projects: Project[] }) {
  return (
    <>
      {projects.map((project, index) => (
        <Card.Root key={index}>
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
          <Card.Thumbnail src="/search.png" alt={project.name} />
        </Card.Root>
      ))}
    </>
  );
}
