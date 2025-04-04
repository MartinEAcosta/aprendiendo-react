import { addHours } from "date-fns";
import { useMemo, useState } from "react";


export const useModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formValues, setFormValues] = useState({
    title: "Martin",
    notes: "Acosta",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const titleClass = useMemo(() => {
    if( !formSubmitted ) return '';

    return (formValues.title.length > 0) ? '' : 'is-invalid';
  }, [formSubmitted , formValues.title ]);


  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onCloseModal = () => {
    console.log("cerrando modal");
    setIsOpen(false);
  };

  const onDateChange = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  return {
    formSubmitted,
    ...formValues,
    isOpen,
    onCloseModal,
    onDateChange,
    onInputChange,
    setFormSubmitted,
    setFormValues,
    setIsOpen,
    titleClass,
  }

}