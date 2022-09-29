import React from 'react'

interface IDetails {
    title: String
    value: string | number
    type?: 'chip' | 'normal'
}

export const DetailCharacter = ({ title, value, type='normal' }: IDetails) => {

  return (
    <p className={`detailCharacter__title--${type}`}>
        {title}:<span className='detailCharacter__value'> {value}</span>
    </p>
  )
}
