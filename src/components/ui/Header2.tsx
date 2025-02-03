'use client'
import { ContactIcon, LayoutDashboardIcon, SearchIcon } from 'lucide-react'
import logo from '../../../public/img/logo.png'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import ThemeSwitcher from './ThemeSwitcher'

const Header2 = () => {
    return (
        <div className="navbar bg-base-200 h-[100px] min-h-[100px]">
            <div className="navbar-start">
                <div className="drawer z-50">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="btn drawer-button btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            <li className='mx-auto block md:hidden py-3'>
                                <SignedOut>
                                    <SignInButton className='font-semibold text-lg bg-[var(--blood-color)] text-slate-50 shadow hover:shadow-2 rounded px-5 py-2'>Be a Donor</SignInButton>
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
                            </li>
                            <li className='mx-auto'>
                                <Link href="/findblood"
                                >
                                    <span className="font-semibold text-xl text-base-700 p-3 rounded flex flex-row items-center gap-2"> <SearchIcon /> Find Blood</span>
                                </Link>
                            </li>
                            <li className='mx-auto'>
                                <Link href="/contact-us"
                                >
                                    <span className="font-semibold text-xl text-base-700 p-3 rounded flex flex-row items-center gap-2"><ContactIcon /> Contact Us</span>
                                </Link>
                            </li>
                            <li className='mx-auto'>
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <Link href="/" className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                >
                    <Image src={logo} alt="logo" width={50} height={50} />
                    <span className="font-bold text-2xl text-[var(--blood-color)]">Blood Lagbe</span>
                </Link>
            </div>
            <div className="navbar-end p-3 ">
            <div className='hidden md:block '>
                {/*        <!-- Avatar --> */}
                <SignedOut>
                <SignInButton className='font-semibold text-lg bg-[var(--blood-color)] text-slate-50 shadow hover:shadow-2 rounded px-5 py-2'>Be a Donor</SignInButton>
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
            </div>
        </div>
    )
}

export default Header2