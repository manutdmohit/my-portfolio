import Link from 'next/link';

const ProjectsOverview: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      link: 'https://github.com/yourprofile/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      link: 'https://github.com/yourprofile/project2',
    },
    // Add more projects here
  ];

  return (
    <section className="text-center mt-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <Link
              href={project.link}
              className="text-blue-600 hover:text-blue-800 mt-2 block"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsOverview;
