"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Menu, X } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const showNavbar = pathname === "/";

  if (!showNavbar) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pingal-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-br from-pingal-lavender to-pingal-neon rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-white font-bold text-xl">Pingal</span>
          </Link>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <Link href="/login">
                <Button variant="outline" className="border-pingal-lavender text-pingal-lavender hover:bg-pingal-lavender/10">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-pingal-lavender to-pingal-neon text-white hover:opacity-90 btn-glow">
                  Register
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton showName appearance={{
                elements: {
                  userButtonBox: {
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "8px",
                    marginRight: "8px",
                    color: "white",
                  },
                  userButtonAvatarBox: {
                    width: "32px",
                    height: "32px"
                  }
                }
              }}>
                <UserButton.MenuItems>
                  <UserButton.Action label={"Dashboard"} labelIcon={<LayoutDashboard size={14} />} onClick={() => router.push("/dashboard")} />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg">
          <div className="px-5 py-4 border-t border-white/10">
            <div className="flex flex-col items-center space-y-3">
              <SignedOut>
                <Link href="/login">
                  <Button variant="outline" className="border-pingal-lavender text-pingal-lavender hover:bg-pingal-lavender/10">
                    Log in
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-pingal-lavender to-pingal-neon text-white hover:opacity-90 btn-glow">
                    Register
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton showName appearance={{
                  elements: {
                    userButtonBox: {
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "8px",
                      marginRight: "8px",
                      color: "white",
                    },
                    userButtonAvatarBox: {
                      width: "32px",
                      height: "32px"
                    }
                  }
                }}>
                  <UserButton.MenuItems>
                    <UserButton.Action label={"Dashboard"} labelIcon={<LayoutDashboard size={14} />} onClick={() => router.push("/dashboard")} />
                  </UserButton.MenuItems>
                </UserButton>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
