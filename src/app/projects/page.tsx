import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    link: 'https://github.com/yourprofile/project1',
  },
  {
    title: 'Project 1',
    description: 'Description of project 1',
    link: 'https://github.com/yourprofile/project1',
  },
  {
    title: 'Project 1',
    description: 'Description of project 1',
    link: 'https://github.com/yourprofile/project1',
  },
  {
    title: 'Project 1',
    description: 'Description of project 1',
    link: 'https://github.com/yourprofile/project1',
  },
  {
    title: 'Project 1',
    description: 'Description of project 1',
    link: 'https://github.com/yourprofile/project1',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
