import type { NextPage } from 'next'
import React from 'react'

import classes from './Card.module.css'

const Card: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classes.card}>{children}</div>
}

export default Card
