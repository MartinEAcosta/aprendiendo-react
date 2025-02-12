import { types } from '../types/types'

export const authReducer = ( state = {} , action ) => {

//  NO SE DEBE LLAMAR LOCALSTORAGE ACA. MALA PRACTICA

    switch ( action.type ){

        case types.login:
            return {
                ...action,
                logged : true,
                user : action.payload
            };
            
        case types.logout:
            return {
                logged : false,

            };

        default: 
            return state;
    }

}