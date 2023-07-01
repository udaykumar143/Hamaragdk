import React from 'react'
import { NavLinks } from '@/constants'
import Image from 'next/image' 
import Link from 'next/link'
import Authproviders from './Authproviders'


const Navbar = () => {
   const session = {}
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10"> 
        <Link href="/">
          <Image
            src="/logo.svg"
            width={115}  
            height={43}  
            alt="logo"
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((navLink) => (
            <li key={navLink.key}>
              <Link href={navLink.href}>
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {
          session? (
            <>
            userPhoto
            <Link href="/create-project">
              share Work
              </Link></>) : (
                <Authproviders/>
              )

        }

      </div>
    </nav>
  )
}

export default Navbar
