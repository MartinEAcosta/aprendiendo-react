import { useCalendarStore } from "../../hooks"
import { useMemo } from "react";


export const FabDeleteEvent = () => {

    const { activeEvent , startDeletingEvent } = useCalendarStore();

    const isEventSelected = useMemo( () => activeEvent === null, [ activeEvent ]);

    const onClickDelete = ( activeEvent ) => {
        if( activeEvent != null){
            startDeletingEvent( {activeEvent} )
        }
    }

  return (
    <button 
        onClick={ () => onClickDelete( activeEvent ) }
        className="btn btn-danger fab-danger"
        disabled={isEventSelected}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
