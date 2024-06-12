import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

export default async function RecoverPassword() {
  return (
    <section className="bg-[url('/assets/images/image-1.svg')] w-full h-full">
      <div>
        <Link href='/'>
          <Image
            src='/logo-black.svg'
            alt='logo'
            width={250}
            height={23}
            className=''
          />
        </Link>
      </div>

      <div className='bg-orange-100'>
        <div>
          <RenderParams />
          <div className='flex'>
            <Image
              src='/assets/icons/arrow-left.svg'
              alt='hand'
              width={30}
              height={30}
            />
            <p>back</p>
          </div>
          <div className='text-4xl font-bold'>
            <p>Forgot Password</p>
          </div>
          <RecoverPasswordForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
