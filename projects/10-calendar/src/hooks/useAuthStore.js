import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";
import calendarApi from "../api/calendarApi";


export const useAuthStore = () => {

    const { status , user , errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async( { email , password } ) => {
        
        dispatch( onChecking() );
        
        try{
            const { data } = await calendarApi.post('/auth/', { email , password } );

            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            
            dispatch( onLogin( { name: data.name , uid: data.uid } ) );
        }
        catch(error){
            dispatch( onLogout( 'Las credenciales son incorrectas.' ) );

            setTimeout(() =>{
                dispatch( clearErrorMessage() );
            }, 10);
            console.log(error);

        }

    }

    const startRegister = async( { name , email , password } ) => {

        dispatch( onChecking() );
        try{

            const { data , errorMessage } = await calendarApi.post('/auth/new' , { name , email , password } );
            localStorage.setItem('name' , data.name);
            localStorage.setItem('uid' , data.uid);

            dispatch( onLogin( { name: data.name , uid: data.uid } ) );
        }
        catch(error){
            dispatch( onLogout(  ) );

            setTimeout(() =>{
                dispatch( clearErrorMessage() );
            }, 10);
            console.log(error);

        }
    }

    return{
        status , user , errorMessage,

        startLogin,
        startRegister,

    }
}