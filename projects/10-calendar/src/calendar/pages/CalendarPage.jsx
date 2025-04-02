import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getMessagesES, localizer } from '../../helpers';
import { Navbar , CalendarEvent } from "../";
import { addHours } from 'date-fns';

const events = [{
  title: 'Consigo un trabajo',
  notes: 'Lo hago antes de fin de año',
  start: new Date(),
  end: addHours( new Date() , 2),
  bgColort: '#fafafa',
  user: {
    _id: '123',
    name: 'Martin'
  }
}]

export const CalendarPage = () => {

  const eventStyleGetter = ( event , start , end , isSelected ) => {
    // console.log( event , start , end , isSelected);
    
    const style = {
      backgroundColor : '#348CF7',
      borderRadius : '0px',
      opacity : '0.8',
      color : 'white',
    }

    return {
      style
    }

  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{ 
          event : CalendarEvent
         }}
      />

    </>
  )
}
