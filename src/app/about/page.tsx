export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 text-lg text-center max-w-2xl">
        I'm a software develope with experience in [Your Skills]. I have worked
        on various projects involving [Technologies].
      </p>
      <div className="mt-8">
        <a
          href="/resume.pdf"
          className="text-blue-600 hover:text-blue-800 underline"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
