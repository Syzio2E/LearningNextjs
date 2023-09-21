
import { getEventById } from "../../../../dummy-data"
import { Fragment } from "react"
import EventSummary from "@/components/event-detail/event-summary"
import EventLogistics from "@/components/event-detail/event-logistics"
import EventContent from "@/components/event-detail/event-content"

const EventDetailpage = ({ params }) => {
  const eventId = params.id

  const event = getEventById(eventId)

  if(!event){
    return <p>No event found</p>
  }


  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.imageAlt}/>
      <EventContent><p>{event.description}</p></EventContent>
    </Fragment>
  )
}

export default EventDetailpage
