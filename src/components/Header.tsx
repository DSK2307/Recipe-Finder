import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-orange-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Recipe Finder
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-amber-100 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/favorites" className="hover:text-amber-100 transition">
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}