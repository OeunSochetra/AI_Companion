import { Menu } from 'lucide-react'
import {Poppins} from"next/font/google"
import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'

    const font = Poppins ({
        weight:"600",
        subsets:["latin"]
    });

const Navbar = () => {
  return (
    <div className='fixed w-full flex justify-between items-center py-2 px-4 border-b
    border-primary/10 bg-secondary'>
        <div className='flex items-center'>
            <Menu className='block md:hidden'></Menu>
            <Link href="/">
                <h1 className={cn('hidden md:block text-xl md:text-3xl font-[700] text-primary0',
                    font.className
                )}>
                    companion.ai
                </h1>
            </Link>
        </div>
    </div>
  )
}

export default Navbar