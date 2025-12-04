import React from 'react'
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { LayoutDashboard, PenBox } from "lucide-react"
const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white-100 backdrop-blur-md z-50 border-b">
        <nav className='container mx-auto py-3 flex items-center justify-between'>
           <Link href="/">
           <Image 
            src={"/logo_final.png"} 
            alt='finova logo' 
            height={60} 
            width={150}
            className='h-12 w-auto object-contain'/>
           </Link>
            <div className='flex items-center space-x-4'>
                <SignedIn> 
                    <Link href={"/dashboard"}>
                        <button className="btn 'text-gray-600 hover:text-blue-600 flex items-center gap-2">
                            <LayoutDashboard size={18}/>
                            <span className='hidden md:inline'>Dashboard</span>
                        </button>
                    </Link>

                    <Link href={"/transaction/create"}>
                        <button className="btn bg-black text-white hover:bg-neutral-600  flex items-center gap-2">
                            <PenBox size={18}/>
                            <span className='hidden md:inline'>Add transaction</span>
                        </button>
                    </Link>
                </SignedIn>
            <SignedOut>
                <SignInButton forceRedirectUrl='/dashboard'>
                    <button className="btn btn-outline">Login</button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton  
                    appearance={{
                        elements:{
                            avatarBox:"w-10 h-10 "
                        }
                    }}
                />
            </SignedIn>
            </div>
        </nav>
    </div>
  )
}

export default Header