import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getMessagesES, localizer } from '../../helpers';
import { Navbar , CalendarEvent, CalendarModal, FabAddNew , FabDeleteEvent } from "../";
import { useUiStore , useCalendarStore } from '../../hooks/';

export const CalendarPage = () => {
  
  const { events , setActiveEvent , startLoadingEvents } = useCalendarStore();
  const { openDateModal } = useUiStore();

  const [ lastView , setLastView ] = useState( localStorage.getItem('lastView') || 'week' );

  useEffect(() => {
    startLoadingEvents();
  }, []);
  

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

  const onDoubleClick = ( event ) => {
    openDateModal(  );
  }

  const onSelect = ( event ) => {
    setActiveEvent( event );

  }  

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event);
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <FabAddNew />
      <FabDeleteEvent />

      <CalendarModal />
    </>
  );
}
