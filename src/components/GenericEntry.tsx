import GenericEntryType from '@/types/GenericEntryType'
import React from 'react'
import { Separator } from "react95"
import { LazyLoadImage } from 'react-lazy-load-image-component';

type GenericEntryProps = {
    entry: GenericEntryType,
    isLast: boolean
}

const GenericEntry = ({ entry, isLast }: GenericEntryProps) => {
  return (
    <>
        <h4 className='generic-entry-name'>{ entry.name } | <span className='year'>{ entry.year}</span></h4>
        <div className='generic-entry-image-wrapper'>
          <LazyLoadImage 
            className='generic-entry-image'
            width={'50%'}
            effect='blur'
            src={`/static/images/${entry.image}`}
          />
        </div>
        <p>
            { entry.description}
        </p>
        { !isLast && <Separator /> }
    </>
  )
}

export default GenericEntry