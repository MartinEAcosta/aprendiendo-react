import { useState } from "react";
import { addHours } from "date-fns";

import Modal from "react-modal";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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

  const [formValue, setFormValue] = useState({
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
    setFormValue({
        ...formValue,
        [target.name]: target.value
    })  
  }

  const onDateChange = ( event , changing ) => {
    setFormValue({
        ...formValue,
        [changing]: event,
    })
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
      <form className="container">
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker 
            minDate={ formValue.start }
            selected={ formValue.start }
            onChange={ (event) => onDateChange(event , 'start' ) }
            className="form-control"
            dateFormat="Pp"
            />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker 
            selected={ formValue.end }
            onChange={ (event) => onDateChange(event , 'end' ) }
            className="form-control"
            dateFormat="Pp"
            minDate={ formValue.start }

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
            value={ formValue.title }
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
            value={ formValue.notes }
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
