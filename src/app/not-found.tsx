import Link from "next/link";
import Image from "next/image";
import Img404 from "../../public/img-404.svg";
import TableIcon from "@/components/core/TableIcon";

export default function NotFound() {
  return (
    <div className="daisy-hero bg-base-200 min-h-[calc(100vh-56px)]">
      <div className="daisy-hero-content text-center">
        <div className="max-w-md flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">Oops!</h1>
          <p className="py-6 text-lg font-semibold">You are lost</p>
          <Image
            src={Img404}
            width={500}
            height={500}
            alt="Picture of the author"
            className="mb-20"
          />

          <Link href="/">
            <div className="flex gap-2 px-1 py-0 items-center text-md font-bold border-b-2 w-fit">
              <TableIcon name="arrow-back-up" size="sm" /> Go Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
