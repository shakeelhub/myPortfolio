"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {

   const pathName  =usePathname();

   console.log(pathName)
  return (
    <Link href={link.url} className={`rounded p-2 ${pathName === link.url && "bg-black text-white"}`}>{link.title}</Link>
  )
}

export default NavLink