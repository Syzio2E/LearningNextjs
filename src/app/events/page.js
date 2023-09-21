"use client"

import React from 'react'
import EventList from '@/components/events/event-list'
import { getAllEvents } from '../../../dummy-data'
import EventSearch from '@/components/events/events-search'
import { useRouter } from 'next/navigation'


const Eventpage = () => {
  const router = useRouter()
  const events = getAllEvents()

  function findEventHandler(year,month){
    const fullpath = `/events/${year}/${month}`
  
    router.push(fullpath)
  }

  return (
    <div>
      <EventSearch onSearch={findEventHandler}/>
      <EventList items={events}/>
    </div>
  )
}

export default Eventpage
