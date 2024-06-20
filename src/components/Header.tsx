interface HeaderProps {
  name: string;
  profession: string;
}

const Header: React.FC<HeaderProps> = ({ name, profession }) => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold">
        Hello, I'm <span className="text-blue-600">{name}</span>
      </h1>
      <p className="mt-3 text-2xl">
        Welcome to my portfolio website. I'm a {profession}.
      </p>
    </div>
  );
};

export default Header;
