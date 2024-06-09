'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { inclusions, noHeaderFooterUrls } from '../../constants'
import { Gutter } from '../Gutter'

const FooterComponent = () => {
  const Pathname = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(Pathname) ? 'hidden' : ''}>
      <Gutter>
        <ul className=''>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
              />
            </li>
          ))}
        </ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent
