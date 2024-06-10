'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer } from '../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls } from '../../constants'
import { Gutter } from '../Gutter'

const FooterComponent = ({ footer }: { footer: Footer }) => {
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
                width={36}
                height={36}
                className=''
              />
              <h5 className=''>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div>
        <Gutter>
          <Link href='/'>
            <Image
              src='/logo-white.svg'
              alt='logo'
              width={170}
              height={50}
            />
          </Link>
          <p>{footer?.copyright}</p>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
