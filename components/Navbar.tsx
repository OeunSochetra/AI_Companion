import { Menu, Sparkle } from 'lucide-react'
import {Poppins} from"next/font/google"
import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import MobileSidebar from '@/components/mobile-sidebar'

    const font = Poppins ({
        weight:"600",
        subsets:["latin"]
    });

const Navbar = () => {
  return (
    <div className='fixed w-full flex justify-between items-center py-2 px-4 border-b
    border-primary/10 bg-secondary h-[67px]'>
        <div className='flex items-center'>
           <MobileSidebar></MobileSidebar>
            <Link href="/">
                <h1 className={cn('hidden md:block text-xl md:text-3xl font-[700] text-primary',
                    font.className
                )}>
                    Pu DAn AI
                </h1>
            </Link>
        </div>
        <div className='flex items-center gap-3'>
            <Button variant="premium" size="sm">
                Upgrade
                <Sparkle
                className='h-4 fill-white text-white ml-2'
                />
            </Button>
           <ModeToggle></ModeToggle>
            <UserButton></UserButton>
        </div>
    </div>
  )
}

export default Navbar