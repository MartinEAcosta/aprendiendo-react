import { useDispatch, useSelector } from "react-redux"
import { onChecking } from "../store";
import calendarApi from "../api/calendarApi";


export const useAuthStore = () => {

    const { status , user , errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async( { email , password } ) => {
        
        dispatch( onChecking() );
        
        try{
            const res = await calendarApi.post('/auth/', { email , password } );
            console.log(res);

        }
        catch(error){
            console.log(error);
        }

    }

    return{
        status , user , errorMessage,

        startLogin,

    }
}