"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NavHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center">
            <Link href="/">
            <Image
                src="/logo.png"
                alt="Logo"
                width={180}
                height={100}
                className="hidden sm:block"
              />
            <Image
                src="/logo.png"
                alt="Logo"
                width={130}
                height={80}
                className="block sm:hidden"
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link href="/election-info" className="text-[#008000] hover:text-green-900 text-lg">
              選挙とは？
            </Link>
            <Link href="/candidates" className="text-[#008000] hover:text-green-900 text-lg">
              候補者一覧
            </Link>
            <a
              href="https://drive.google.com/file/d/1UTIbJA8vp0z4_pXENxEnEYMmFaOkS9Ng/view"
              className="text-[#008000] hover:text-green-900 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              生徒会役員選挙細則
            </a>
          </nav>

          <button
            className="md:hidden text-[#008000]"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/election-info"
              className="text-[#008000] text-lg"
              onClick={() => setOpen(false)}
            >
              選挙とは？
            </Link>
            <Link
              href="/candidates"
              className="text-[#008000] text-lg"
              onClick={() => setOpen(false)}
            >
              候補者一覧
            </Link>
            <a
              href="https://drive.google.com/file/d/1UTIbJA8vp0z4_pXENxEnEYMmFaOkS9Ng/view"
              className="text-[#008000] text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              生徒会役員選挙細則
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}