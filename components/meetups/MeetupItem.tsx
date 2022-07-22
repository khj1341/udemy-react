import type { NextPage } from 'next'
import React from 'react'
import { Meetup } from '../../models'

import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

const MeetupItem: NextPage<{ meetup: Meetup }> = ({
  meetup: { title, image, address },
}) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
