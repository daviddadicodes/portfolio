export default function Loading() {
  return (
    <main className="min-h-screen px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-8">
        <div className="h-16 rounded-3xl bg-white/5" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="h-6 w-40 rounded-full bg-white/5" />
            <div className="h-16 rounded-3xl bg-white/5" />
            <div className="h-24 rounded-3xl bg-white/5" />
          </div>
          <div className="h-80 rounded-[2rem] bg-white/5" />
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-80 rounded-[2rem] bg-white/5" />
          ))}
        </div>
      </div>
    </main>
  );
}
