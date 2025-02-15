"use client";
import React, { useMemo } from "react";
// import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { cx } from "@/utils/common";

export type TableIconProps = {
  name: string;
  className?: string;
  size?: Size | number;
  href?: string;
  onClick?: () => void;
  hover?: boolean;
};

const sizeToDimension = (size: TableIconProps["size"]): number => {
  let num: number;
  switch (size) {
    case "3xs":
      num = 12;
      break;
    case "2xs":
      num = 16;
      break;
    case "xs":
      num = 20;
      break;
    case "sm":
      num = 24;
      break;
    case "md":
      num = 28;
      break;
    case "lg":
      num = 32;
      break;
    case "xl":
      num = 36;
      break;
    default:
      num = size ?? 28;
  }
  return num;
};

export default function TableIcon(props: TableIconProps) {
  const {
    name,
    className,
    size = "sm" /*onClick, href, hover = false*/,
  } = props;
  // const router = useRouter();
  const dimension = sizeToDimension(size);

  const DynamicComponent = useMemo(
    () =>
      dynamic<SVGProps>(() => import(`../../../public/icons/${name}`), {
        ssr: false,
        loading: () => (
          <div
            className="m-1.5 box-content daisy-skeleton bg-base-300"
            style={{
              width: dimension,
              height: dimension,
            }}
          />
        ),
      }),
    [name, dimension],
  );

  return (
    <DynamicComponent
      width={dimension}
      height={dimension}
      className={cx(
        "box-content p-1.5",
        // { "cursor-pointer": onClick || href },
        // { "hover:bg-base-300": hover || onClick || href },
        className,
      )}
      // onClick={() => {
      //   if (onClick) {
      //     onClick();
      //   }
      //
      //   if (href) {
      //     router.push(href);
      //   }
      // }}
    />
  );
}

// unfortunately, image don't change colors for svg
// return (
//   <Image
//     src={`${theme === "light" ? "/icons" : "/icons-dark"}/${name}.svg`}
//     alt={alt ?? `${name}-icon`}
//     className={cx(
//       "p-1.5 box-content rounded-md text-blue-500",
//       [(onClick || href) && "cursor-pointer hover:bg-gray-100 "],
//       className,
//     )}
//     width={width ?? sizeToDimension(size).width}
//     height={height ?? sizeToDimension(size).height}
//     priority={true}
//     unoptimized={true}
//     onClick={() => {
//       if (onClick) {
//         onClick();
//       }
//
//       if (href) {
//         router.push(href);
//       }
//     }}
//   />
// );
