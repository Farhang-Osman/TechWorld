import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

export const CustomHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  return (
    <Gutter className='flex h-full'>
      <div className=''>
        <RichText content={richText} />
        {Array.isArray(links) && links.length > 0 && (
          <ul className=''>
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
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
    </Gutter>
  )
}
