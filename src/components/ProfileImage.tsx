import Image from 'next/image';

const ProfileImage: React.FC = () => {
  return (
    <div className="mt-8">
      <Image
        src="/images/profile.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full"
      />
    </div>
  );
};

export default ProfileImage;
