import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Header } from '../../../payload/payload-types'
import { Gutter } from '../Gutter'
import { HeaderNav } from './Nav'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav>
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
