import { useState } from "react";
import { Header } from "./Header";
import { Information } from "../types";

interface Props {
  data: Information  ;
  handleConfirmationClose: (newViewMode: string) => void;
}

export const Confirmation: React.FC<Props> = ({
  data,
  handleConfirmationClose,
}) => {
  
  const { selectedService , booking } = data;
  
  const [confirmationState, setConfirmationState] = useState({
    confirmed: false,
    bookingData: {
      service: selectedService?.name,
      date: booking?.date,
      hour: booking?.hour,
    },
  });


  const handleClick = () => {
    setConfirmationState({ ...confirmationState, confirmed: true });
  };

  const formatDate = (date: string ) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("es-ES");
  };

  return (
    <>
      {!confirmationState.confirmed && (
        <>
          <Header title="Confirmar turno" progress={85} />

          <div className="contain-flex">
            <div className="category-container">
              <span className="paragrah">
                <span>Servicio: </span>
                {confirmationState.bookingData.service}
              </span>

              <span className="paragrah">
                {" "}
                <span>Fecha: </span>
                {formatDate(confirmationState.bookingData.date)}{" "}
                <span>{confirmationState.bookingData.hour}</span>
              </span>
            </div>

            <div className="footer-container two">
              <button
                className="button button-select"
                onClick={() => handleConfirmationClose("serviceDetails")}
              >
                Anterior
              </button>
              <button
                className="button button-select"
                onClick={() => handleClick()}
              >
                Confirmar
              </button>
            </div>
          </div>
        </>
      )}

      {confirmationState.confirmed && (
        <>
          <Header title="Reserva realizada" progress={100} />

          <div className="contain-flex">
            <div className="category-container">
              <span className="paragrah">Reserva realizada con éxito</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};
