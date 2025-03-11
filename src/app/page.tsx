import HomePost from "@/posts/home.mdx";

export default function Home() {
  return (
    <div className="">
      <main className="grid grid-cols-2 min-h-full">
        <div>
          <HomePost />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
