"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity, Menu, X } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pingal-blue to-pingal-purple p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                <Activity className="h-4 w-4 text-pingal-neon" />
              </div>
            </div>
            <span className="hidden font-bold text-xl sm:inline-block bg-gradient-to-r from-pingal-blue via-pingal-purple to-pingal-pink bg-clip-text text-transparent">
              Pingal
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <SignedOut>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-pingal-purple/30 bg-background hover:bg-accent hover:text-accent-foreground"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="bg-gradient-to-r from-pingal-blue to-pingal-purple hover:opacity-90 transition-opacity">
                  Register
                </Button>
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 grid gap-4">
            <SignedOut>
              <div className="flex flex-col gap-2 pt-4">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-pingal-purple/30 bg-background hover:bg-accent hover:text-accent-foreground"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-pingal-blue to-pingal-purple hover:opacity-90 transition-opacity">
                    Register
                  </Button>
                </Link>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}
