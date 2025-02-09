import Button from "@/components/base/Button";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Image from "next/image";

export default function Test() {
  return (
    <div>
      <Button>Walahi I'm finished</Button>
      <ThemeToggle />

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
