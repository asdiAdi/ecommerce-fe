import { ReactNode } from "react";
import MenuAccount from "@/components/menu/MenuAccount";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section className="mb-8 gap-6 p-6 xl:flex xl:flex-row">
      <div className="daisy-card hidden w-104 bg-base-100 shadow-sm xl:block">
        <MenuAccount className="daisy-card-body p-4" isCompact />
      </div>
      {children}
    </section>
  );
}
