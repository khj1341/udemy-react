import type { NextPage } from 'next'
import React from 'react'
import { Meetup } from '../../models'

import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

const MeetupList: NextPage<{ meetups: Meetup[] }> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  )
}

export default MeetupList
