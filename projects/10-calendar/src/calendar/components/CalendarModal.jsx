import { useState } from "react";
import { addHours, differenceInSeconds } from "date-fns";

import Modal from "react-modal";
import DatePicker, { registerLocale ,  } from "react-datepicker";
import es from 'date-fns/locale/es';

import "react-datepicker/dist/react-datepicker.css";

registerLocale('es', es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {

  const [isOpen, setIsOpen] = useState(true);

  const [formValues, setFormValues] = useState({
    title: 'Martin',
    notes: 'Acosta',
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const onCloseModal = () => {
    console.log("cerrando modal");
    setIsOpen(false);
  };

  const onInputChange = ( { target } ) => {
    setFormValues({
        ...formValues,
        [target.name]: target.value
    })  
  }

  const onDateChange = ( event , changing ) => {
    setFormValues({
        ...formValues,
        [changing]: event,
    })
  }

  const onSumbit = ( event ) => {
    event.preventDefault();

    const diff = differenceInSeconds( formValues.end, formValues.start);

    if( diff <= 0 || isNaN( diff ) ) return {...formValues,
                                                errorMessage: 'Error en fechas.'
                                            };

    if( formValues.title.length <= 0 ) return console.log('Error en titulo');

    console.log(formValues);

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={ onSumbit }>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <br />
          <DatePicker 
            minDate={ formValues.start }
            selected={ formValues.start }
            onChange={ (event) => onDateChange(event , 'start' ) }
            className="form-control"
            dateFormat="Pp"
            showTimeSelect
            locale='es'
            timeCaption="Hora"

            />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <br />
          <DatePicker 
            selected={ formValues.end }
            onChange={ (event) => onDateChange(event , 'end' ) }
            className="form-control"
            dateFormat="Pp"
            minDate={ formValues.start }
            showTimeSelect
            locale='es'
            timeCaption="Hora"
            />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            value={ formValues.title }
            autoComplete="off"
            onChange={ onInputChange }
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={ formValues.notes }
            onChange={ onInputChange }
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
