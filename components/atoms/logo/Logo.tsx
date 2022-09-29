import Image from 'next/image'
import React from 'react'

interface IProps {
  source: string
}

export const Logo = ({source}: IProps) => {

  return (
    <img src={source} alt="star-wars-logo" className='logo__star_wars' />
  )
}
