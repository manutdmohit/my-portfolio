import Header from '@/components/Header';
import ProfileImage from '@/components/ProfileImage';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <Header name="Mohit Saud" profession="Software Developer" />
        <ProfileImage />
        <SocialLinks />
      </main>
    </div>
  );
}
