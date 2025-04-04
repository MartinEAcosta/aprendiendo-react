import { useSelector } from "react-redux"


export const useCalendarStore = () => {

    const { events , activeEvent } = useSelector( (state) => state.calendar );

    // const selectActiveEvent = ( event ) => {
    //     console.log(event);
    // }

    return {
        events, activeEvent,
    }
}