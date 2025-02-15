import Link from "next/link";
import Image from "next/image";
import Img404 from "../../public/img-404.svg";
import TableIcon from "@/components/core/TableIcon";

export default function NotFound() {
  return (
    <div className="daisy-hero min-h-[calc(100vh-56px)] bg-base-200">
      <div className="daisy-hero-content text-center">
        <div className="flex max-w-md flex-col items-center justify-center">
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
            <div className="text-md flex w-fit items-center gap-2 border-b-2 px-1 py-0 font-bold">
              <TableIcon name="arrow-back-up" /> Go Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
