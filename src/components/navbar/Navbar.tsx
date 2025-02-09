import TableIcon from "@/components/base/TableIcon";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 h-16 w-full px-4 bg-black grid grid-cols-3">
      <div className="self-center flex gap-1">
        <TableIcon name="menu-2" href="/" className="self-center" />

        <ThemeToggle />
      </div>

      <TableIcon
        name="building-store"
        size="xl"
        href="/"
        className="place-self-center rounded-xl"
      />

      <div className="self-center justify-self-end flex gap-1">
        <TableIcon name="search" href="/" />
        <TableIcon name="user-circle" href="/" />
        <TableIcon name="shopping-cart" href="/" />
      </div>
    </nav>
  );
}
