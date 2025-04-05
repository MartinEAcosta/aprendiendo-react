import { useEffect, useMemo, useState } from "react";
import { useCalendarStore } from "./useCalendarStore";
import { addHours } from "date-fns";

const initialForm = {
  title: '',
  notes: '',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
      _id: '123',
      name: 'Santiago'
  }
};


export const useModal = ( ) => {

  const { activeEvent } = useCalendarStore();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState(initialForm);

  useEffect(() => {
    if (activeEvent !== null) {
        setFormValues({ ...activeEvent });
    }
}, [activeEvent]);

  const titleClass = useMemo(() => {
    if( !formSubmitted ) return '';

    return (formValues.title.length > 0) ? '' : 'is-invalid';
  }, [formSubmitted , formValues ]);


  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChange = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  return {
    formSubmitted,
    formValues,
    onDateChange,
    onInputChange,
    setFormSubmitted,
    setFormValues,
    titleClass,
  }

}