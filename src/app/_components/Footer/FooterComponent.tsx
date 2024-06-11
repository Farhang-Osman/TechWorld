'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls } from '../../constants'
import { Button } from '../Button'
import { Gutter } from '../Gutter'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const Pathname = usePathname()
  const navItems = footer?.navItems || []

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
        <Gutter className='bg-black'>
          <div>
            <Link href='/'>
              <Image
                src='/logo-white.svg'
                alt='logo'
                width={170}
                height={50}
              />
            </Link>
            <p>{footer?.copyright}</p>
            <div>
              {navItems.map(item => {
                const icon = item?.link?.icon as Media

                return (
                  <Button
                    key={item.link.label}
                    el='link'
                    href={item.link.url}
                    newTab={true}
                    className=''
                  >
                    <Image
                      src={icon?.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className=''
                    />
                  </Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
