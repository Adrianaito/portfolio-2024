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
      <Card.Root className="sm:grid-cols-8 grid-cols-1 grid-rows-2 sm:grid-rows-1">
        <Card.TechStackContentContainer className="sm:col-span-6">
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
          <Card.Thumbnail
            src={project.thumbnail}
            alt={project.name}
            className="sm:col-span-2"
          />
        )}
      </Card.Root>
    </>
  );
}
