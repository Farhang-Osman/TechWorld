import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

export const CustomHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  const mediaUrl =
    media &&
    typeof media !== 'string' &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`

  return (
    <section className='flex h-full'>
      <div style={{ backgroundImage: `url(${mediaUrl})` }}>
        <RichText content={richText} />
        {Array.isArray(links) && links.length > 0 && (
          <ul className=''>
            {links.map(({ link }, i) => {
              return (
                <li
                  key={i}
                  className='list-none'
                >
                  <CMSLink
                    {...link}
                    className='rounded-lg'
                  />
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <div className=''>
        {typeof media === 'object' && (
          <Fragment>
            <Media
              resource={media}
              // fill
              imgClassName=''
              priority
            />
            {media?.caption && (
              <RichText
                content={media.caption}
                className=''
              />
            )}
          </Fragment>
        )}
      </div>
    </section>
  )
}
