import { differenceInSeconds } from "date-fns";

import Modal from "react-modal";
import DatePicker, { registerLocale ,  } from "react-datepicker";
import es from 'date-fns/locale/es';

import Swal from "sweetalert2";

import 'sweetalert2/dist/sweetalert2.min.css'
import "react-datepicker/dist/react-datepicker.css";
import { useModal } from "../../hooks/useModal";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";


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

    const { isDateModalOpen , closeDateModal } = useUiStore();
    const { activeEvent , startSavingEvent } = useCalendarStore();

    const { 
            formSubmitted  , onCloseModal, formValues ,
            onDateChange , onInputChange , setFormSubmitted ,
            setFormValues , titleClass
    } = useModal(); 


  const onSubmit = async(event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const diff = differenceInSeconds( formValues.end, formValues.start);

    if (diff <= 0 || isNaN(diff)) {
      Swal.fire("Fechas incorrectas", "Revisar las fechas ingresadas", "error");
      return;
    }

    if ( formValues.title.length <= 0) {
      return;
    }

    await startSavingEvent( formValues );
    closeDateModal();
    setFormSubmitted(false);
  };

  return (
    <Modal
      isOpen={ isDateModalOpen }
      onRequestClose={ closeDateModal }
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={ onSubmit }>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={ formValues.start }
            onChange={(event) => onDateChange(event, "start")}
            className="form-control"
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            selected={ formValues.end }
            onChange={(event) => onDateChange(event, "end")}
            className="form-control"
            dateFormat="Pp"
            minDate={ formValues.start }
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
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
            onChange={onInputChange}
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
