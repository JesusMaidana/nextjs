import Link from "next/link";

export default function Navbar () {
    return (
        <nav className="py-6 flex justify-between items-center bg-black px-4">
          <Link href="/">
            <h1 className="text-3xl font-bold">Nextjs Curso</h1>
          </Link>
         <ul className="flex gap-4 list-none">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/tienda">Tienda</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
        </ul>
         
       </nav>
    );
}