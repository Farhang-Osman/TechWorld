'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../constants'
import { Gutter } from '../Gutter'
import { HeaderNav } from './Nav'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav
      className={['py-4', noHeaderFooterUrls.includes(pathname) && 'hidden']
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter>
        <Link href={'/'}>
          <Image src="/logo-black.svg" alt="logo" width={170} height={50} className="" />
        </Link>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
