"use client";
import Link from "next/link";
import TableIcon from "@/components/core/TableIcon";
import ButtonIcon from "@/components/core/ButtonIcon";
import { useSidebar } from "@/components/sidebar/SidebarProvider";

type ProfileHeaderProps = {
  iconName: string;
  title: string;
  link?: {
    href: string;
    label: string;
  };
};

export default function ProfileHeader(props: ProfileHeaderProps) {
  const { iconName, title, link } = props;

  const { toggle } = useSidebar();

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-fit w-fit rounded-lg bg-base-300">
            <TableIcon name={iconName} className="text-secondary" />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="flex items-center gap-4">
          <ButtonIcon
            name="menu-2"
            onClick={() => toggle("account")}
            className="xl:hidden"
          />

          {link && (
            <Link href={link.href}>
              <button className="daisy-btn hidden daisy-btn-secondary daisy-btn-soft sm:block">
                {link.label}
              </button>
            </Link>
          )}
        </div>
      </div>

      {link && (
        <Link href="/">
          <button className="daisy-btn mb-6 w-full daisy-btn-secondary daisy-btn-soft sm:hidden">
            {link.label}
          </button>
        </Link>
      )}
    </>
  );
}
