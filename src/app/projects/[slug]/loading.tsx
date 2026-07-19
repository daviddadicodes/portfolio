export default function ProjectLoading() {
  return (
    <main className="min-h-screen px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl animate-pulse space-y-6">
        <div className="h-6 w-32 rounded-full bg-white/5" />
        <div className="h-72 rounded-[2rem] bg-white/5" />
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-44 rounded-[2rem] bg-white/5" />
        ))}
      </div>
    </main>
  );
}
