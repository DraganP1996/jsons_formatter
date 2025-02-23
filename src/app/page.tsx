import { Header } from "@/components/layout";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">MAIN</main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {" "}
        FOOTER
      </footer>
    </div>
  );
}
