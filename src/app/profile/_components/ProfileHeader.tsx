"use client";
import TableIcon from "@/components/core/TableIcon";
import ButtonIcon from "@/components/core/ButtonIcon";
import { useSidebar } from "@/components/sidebar/SidebarProvider";
import Link from "next/link";

export default function ProfileHeader(props: { isEdit?: boolean }) {
  const { isEdit = false } = props;
  const { toggle } = useSidebar();

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-fit w-fit rounded-lg bg-base-300">
            <TableIcon name="user-filled" className="text-secondary" />
          </div>
          <h2 className="text-xl font-bold">My Profile</h2>
        </div>
        <div className="flex items-center gap-4">
          <ButtonIcon
            name="menu-2"
            onClick={() => toggle("account")}
            className="xl:hidden"
          />
          <Link href={isEdit ? "/profile" : "/profile/edit"}>
            <button className="daisy-btn hidden daisy-btn-secondary daisy-btn-soft sm:block">
              {isEdit ? "Back To Profile" : "Edit Profile"}
            </button>
          </Link>
        </div>
      </div>
      <Link href="/">
        <button className="daisy-btn mb-6 w-full daisy-btn-secondary daisy-btn-soft sm:hidden">
          Edit Profile
        </button>
      </Link>
    </>
  );
}
