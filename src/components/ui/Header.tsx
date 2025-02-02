'use client';
import Image from "next/image";
import logo from '../../../public/img/logo.png';
import Link from "next/link";
import { SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs";
import { useState } from "react";
import { LayoutDashboardIcon } from "lucide-react";

export default function Header() {

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Component: Navbar with Avatar --> */}
      {/*<!-- Header --> */}
      <header className="rounded relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="/"
            >
              <Image src={logo} alt="logo" width={50} height={50} />
              <span className="sm:block hidden font-bold text-2xl">Blood Lagbe</span>
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
                }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
                }`}
            >
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[var(--blood-color)] focus:text-[var(--blood-color)] focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/findblood"
                >
                  <span className="font-semibold text-xl">Find Blood</span>
                </Link>
              </li>
              {/* <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[var(--blood-color)] focus:text-[var(--blood-color)] focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/beadonor"
                >
                  <span className="font-semibold text-xl">Be a Donor</span>
                </Link>
              </li> */}
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-[var(--blood-color)] focus:text-[var(--blood-color)] focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/contact-us"
                >
                  <span className="font-semibold text-xl">Contact Us</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
                  {/*        <!-- Avatar --> */}
                  <SignedOut>
                    <SignInButton className='font-semibold text-xl bg-[var(--blood-color)] text-slate-50 shadow hover:shadow-3 rounded px-5 py-2'>Be a Donor</SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton>
                      <UserButton.MenuItems>
                        <UserButton.Link
                          label="Dashboard"
                          labelIcon={<LayoutDashboardIcon />}
                          href="/dashboard"
                        />
                      </UserButton.MenuItems>
                    </UserButton>
                  </SignedIn>
                  {/*        <!-- End Avatar --> */}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with Avatar--> */}
    </>
  )
}

