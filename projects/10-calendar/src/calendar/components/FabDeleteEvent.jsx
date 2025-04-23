import { useCalendarStore } from "../../hooks"


export const FabDeleteEvent = () => {

    const { activeEvent , startDeletingEvent , hasEventSelected } = useCalendarStore();


    const onClickDelete = (  ) => {
        if( activeEvent != null){
            startDeletingEvent(  );
        }
    }

  return (
    <button 
        onClick={ onClickDelete }
        className="btn btn-danger fab-danger"
        style={{
            display : hasEventSelected ? '' : 'none'
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
