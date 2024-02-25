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
      <Card.Root className="flex justify-between">
        <Card.TechStackContentContainer>
          <Card.Content subtitle="" title={project.name} link={project.link}>
            {project.description.map((desc, index) => (
              <p
                className="mt-2 text-md font-common leading-normal text-content-2"
                key={index}
              >
                {desc}
              </p>
            ))}
          </Card.Content>
          <Card.TechStack>
            {project.techStack?.map((tech) => (
              <Card.TechStackItem key={tech} name={tech} />
            ))}
          </Card.TechStack>
        </Card.TechStackContentContainer>
        {project.thumbnail && (
          <Card.Thumbnail src={project.thumbnail} alt={project.name} />
        )}
      </Card.Root>
    </>
  );
}
