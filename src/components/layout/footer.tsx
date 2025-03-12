import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-2 flex-wrap justify-center bg-orange-100 min-h-[500px] p-2 w-full">
      <div className="grid grid-cols-[3fr,1fr,1fr] gap-4 min-w-[900px]">
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold text-lg border-b border-orange-400"> Tools </h5>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <h6 className="font-bold"> JSON </h6>
              <Link href=""> Json Beautify </Link>
              <Link href=""> Json Minify </Link>
              <Link href=""> Json to String </Link>
              <Link href=""> Json to XML </Link>
              <Link href=""> Json to YAML </Link>
              <Link href=""> Json to CSV </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-bold"> XML </h6>
              <Link href=""> XML to Json </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-bold"> YAML </h6>
              <Link href=""> YAML to Json</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-bold"> Other </h6>
              <Link href=""> String to Json</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-2">
          <h5 className="font-semibold text-lg border-b border-orange-400 mb-7"> About </h5>
          <Link href=""> Learn </Link>
          <Link href=""> Contact </Link>
          <Link href=""> About </Link>
        </div>
        <div className="flex flex-col  gap-2">
          <h5 className="font-semibold text-lg border-b border-orange-400 mb-7">
            {" "}
            For Developers{" "}
          </h5>

          <Link href=""> Webeditors Documentation </Link>
          <Link href=""> Contribure </Link>
        </div>
      </div>
    </footer>
  );
};
