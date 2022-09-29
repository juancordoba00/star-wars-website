import { Chip } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import { Person } from '../../../interfaces/charactersResponse';

interface IProps {
  character: Person
}

export const Card = ({ character}: IProps) => {

  const router = useRouter();

  return (
    <div className='card-container'>
        <div className='card-container__boxTitle'>
            <h2 className='card-container__boxTitle__title'>{character.name}</h2>
            <Chip 
              className='card-container__boxTitle__seeDetails'
              label="See details" 
              onClick={() => router.push(`?id=${character.id}`)}
              color='primary'
              size='small'
              variant='outlined'
            />
        </div>
        <img src={character.img} alt={character.name} className='card-container__character' />
    </div>
  )
}
