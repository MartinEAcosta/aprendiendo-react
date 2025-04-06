import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"


export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { activeEvent , setActiveEvent } = useCalendarStore();

    const onClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date() , 2),
            bgColort: '#fafafa',
            user: {
                _id: '123',
                name: 'Martin'
            }
        });
        openDateModal();
    }

  return (
    <button 
        onClick={ onClickNew }
        className="btn btn-primary fab"
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
