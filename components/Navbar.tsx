import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-orange-600 px-8 py-3 antialiased">
      <Link className="text-white font-bold" href={"/"}>
        TCBlog
      </Link>
      <Link className="bg-white p-2" href={"/"}>
        Add Blog
      </Link>
    </nav>
  );
}
