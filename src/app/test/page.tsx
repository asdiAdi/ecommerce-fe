import Image from "next/image";

export default function Test() {
  return (
    <div>
      <Image
        src={"/icons/sport-car.png"}
        alt={"sports car"}
        width={64}
        height={64}
        className={"dark:invert"}
      />
    </div>
  );
}
