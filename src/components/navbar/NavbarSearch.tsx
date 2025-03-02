"use client";
import TableIcon from "@/components/core/TableIcon";
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { clsx } from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { debounce } from "next/dist/server/utils";

type NavbarSearchProps = ComponentPropsWithoutRef<"label">;

export default function NavbarSearch(props: NavbarSearchProps) {
  const { className } = props;
  // TODO: Join (group items) - daisy

  const [input, setInput] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    setInput("");
  }, [pathname]);

  const handleSearch = useCallback(
    (search: string) => {
      const searchParams = new URLSearchParams(params.toString());
      searchParams.set("search", search);
      searchParams.delete("offset");
      if (search === "") {
        searchParams.delete("search");
      }
      router.push(`${pathname}?${searchParams.toString()}`);
    },
    [params, pathname, router],
  );

  // TODO: search suggestions
  return (
    <label className={clsx("daisy-input overflow-hidden pr-0", className)}>
      <input
        type="search"
        required
        placeholder="Search"
        value={input}
        onInput={(e) => {
          setInput(e.currentTarget.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch(input);
          }
        }}
      />
      <TableIcon
        name="search"
        className="box-border h-full rounded-none border-l-1 border-neutral-content bg-base-300 opacity-75"
        size="xl"
      />
    </label>
  );
}
