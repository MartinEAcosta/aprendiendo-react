import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const useForm = ( initialForm = {} , formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ])
    
    
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys(formValidation) ) {
            if( formValidation[formValue] != null ) return false;
        }
        
        return true;

    }, [ formValidation ]);

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations )) {
            const [ fn , errorMessage ] = formValidations[formField];

            // Se ejecuta la función con el input correspondiente y en caso de que no cumpla se muestra
            // el errorMessage
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }
        setFormValidation( formCheckedValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        isFormValid,
        ...formValidation,
    }
}