import React from 'react'
import Link from 'next/link'

import { Header } from '../../../payload/payload-types'
import { Gutter } from '../Gutter'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav>
      <Gutter>
        <Link href={'/'}></Link>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
