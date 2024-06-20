import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        href={link}
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank"
      >
        View Project
      </Link>
    </div>
  );
};

export default ProjectCard;
