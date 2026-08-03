import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-100 bg-black/10 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>
      <Link href="/about" className="hover:text-blue-600">
        About
      </Link>
      <Link href="/contact" className="hover:text-blue-600">
        Contact
      </Link>
      <Link href="/bulb" className="hover:text-blue-600">
        Bulb
       </Link>
    </nav>
  );
}