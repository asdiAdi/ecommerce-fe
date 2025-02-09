"use client";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React from "react";

type TableIconProps = {
  name: string;
  className?: string;
  size?: Size | number;
  href?: string;
  onClick?: () => void;
};

const sizeToDimension = (size: TableIconProps["size"]): number => {
  let num: number;
  switch (size) {
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
  const { name, className, size = "md", onClick, href } = props;

  const router = useRouter();
  const dimension = sizeToDimension(size);

  // 43, 52, 69
  // 210, 63, 87

  return (
    <span
      className={clsx(
        "inline-block w-fit h-fit p-1.5 rounded-lg text-slate-500 dark:text-stone-500",
        [(onClick || href) && "cursor-pointer hover:bg-gray-100"],
        className,
      )}
      onClick={() => {
        if (onClick) {
          onClick();
        }

        if (href) {
          router.push(href);
        }
      }}
    >
      {React.createElement(
        dynamic<SVGProps>(() => import(`../../../public/icons/${name}`), {
          ssr: false,
          loading: () => (
            <div style={{ width: dimension, height: dimension }} />
          ),
        }),
        { width: dimension, height: dimension },
      )}
    </span>
  );
}

// unfortunately, image don't change colors for svg
// return (
//   <Image
//     src={`${theme === "light" ? "/icons" : "/icons-dark"}/${name}.svg`}
//     alt={alt ?? `${name}-icon`}
//     className={clsx(
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
