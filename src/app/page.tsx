import Header from '@/components/Header';
import ProfileImage from '@/components/ProfileImage';
import SocialLinks from '@/components/SocialLinks';
import AboutMe from '../components/AboutMe';
import ProjectsOverview from '@/components/ProjectsOverview';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <Header name="Mohit Saud" profession="Software Engineer" />
        <ProfileImage />
        <SocialLinks />
        <AboutMe />
        <ProjectsOverview />
        <Contact />
      </main>
    </div>
  );
}
