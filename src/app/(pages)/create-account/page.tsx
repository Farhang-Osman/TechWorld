import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  return (
    <section className="bg-[url('/assets/images/image-2.svg')]">
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

      <div>
        <div>
          <RenderParams />
          <div>
            <h3>Create Account</h3>
            <Image
              src='/assets/icons/hand.png'
              alt='hand'
              width={30}
              height={30}
            />
          </div>
          <p>Please enter details</p>
          <CreateAccountForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
