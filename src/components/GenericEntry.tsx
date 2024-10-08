import GenericEntryType from '@/types/GenericEntryType'
import React from 'react'
import { Separator } from "react95"

type GenericEntryProps = {
    entry: GenericEntryType,
    isLast: boolean
}

const GenericEntry = ({ entry, isLast }: GenericEntryProps) => {
  return (
    <>
        <h4 className='generic-entry-name'>{ entry.name } | <span className='year'>{ entry.year}</span></h4>
        <div className='generic-entry-image-wrapper'>
          <img className='generic-entry-image' src={`/static/images/${entry.image}`} width='50%' />
        </div>
        <p>
            { entry.description}
        </p>
        { !isLast && <Separator /> }
    </>
  )
}

export default GenericEntry