"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./themebtn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <nav className="border-b bg-background/50 sticky backdrop-blur shadow-md top-0 w-full z-50">
      <div className="max-w-7xl mx-auto mt-2 flex items-center justify-between px-4">
        <Link href="/">
          <div className="text-2xl font-bold">HA-Blogs</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium items-center p-1">
          <Link
            href="/"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Contact
          </Link>
          <div className="flex items-center">
            <Button className="mx-1 text-xs" variant="outline">
              LogIn
            </Button>
            <Button className="mx-1 text-xs" variant="outline">
              SignUp
            </Button>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Sheet Menu Trigger */}
        <div className="md:hidden p-1">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="font-extrabold">
                <Menu size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="font-bold">HA-Blogs</SheetTitle>
              </SheetHeader>
              <SheetDescription>
                <div className="mt-4 space-y-4 font-medium pl-3">
                  <Link href="#home" className="block hover:underline">
                    Home
                  </Link>
                  <Link href="#blogs" className="block hover:underline">
                    Blogs
                  </Link>
                  <Link href="#about" className="block hover:underline">
                    About
                  </Link>
                  <Link href="#contact" className="block hover:underline">
                    Contact
                  </Link>
                  <div className="pt-4 flex flex-col gap-2 pr-3">
                    <Button className="text-xs" variant="outline">
                      LogIn
                    </Button>
                    <Button className="text-xs" variant="outline">
                      SignUp
                    </Button>
                  </div>
                </div>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
