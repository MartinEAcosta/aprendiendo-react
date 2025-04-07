import { useCalendarStore } from "../../hooks"
import { useMemo } from "react";


export const FabDeleteEvent = () => {

    const { activeEvent , startDeletingEvent , hasEventSelected } = useCalendarStore();


    const onClickDelete = (  ) => {
        if( activeEvent != null){
            startDeletingEvent( {activeEvent} )
        }
    }

  return (
    <button 
        onClick={ onClickDelete }
        className="btn btn-danger fab-danger"
        disabled={ !hasEventSelected }
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
