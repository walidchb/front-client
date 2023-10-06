'use client'
import React, { useState, useEffect } from 'react'

import NavBar from './components/navbar'
import { useDispatch, useSelector } from 'react-redux'
import { setLang } from '@/store/features/main/mainSlice'

export default function Home({ params: { locale } }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLang(locale))
  }, [])
  return (
    <section className=''>
      <div className=''>
        <NavBar Lang='en' />
      </div>
    </section>
  )
}
