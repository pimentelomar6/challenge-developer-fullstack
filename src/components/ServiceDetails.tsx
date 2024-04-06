import { useState } from "react";
import { Header } from "./Header";
import { Booking, ServiceId, Slot } from "../types";
import { serviceDetails } from "../data";
import { getDate } from "../utils";
import { v4 } from "uuid";

interface Props {
  id: ServiceId;
  handleCategoryOpen: (newViewMode: string) => void;
  handleConfirmationOpen: (booking: Booking) => void;
}

export const ServiceDetails: React.FC<Props> = ({
  id,
  handleCategoryOpen,
  handleConfirmationOpen,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [reserva, setReserva] = useState<Booking | null>(null);
  const [timeSelected, setTimeSelected] = useState<string | null>(null);

  const handleClick = (data: Booking) => {
    handleConfirmationOpen(data);
    handleCategoryOpen("confirmation");
  };

  const handleTimeSelect = (service: Slot, aviliable: string) => {
    const booking = {
      date: service.date,
      hour: aviliable,
    };
    setReserva(booking);
    setTimeSelected(aviliable);
    setIsSelected(!isSelected);
  };

  const filteredServices = serviceDetails?.filter(
    (service) => service.serviceId === id
  );

  return (
    <>
      <Header title="Seleccionar horario" progress={60} />
      <div className="contain-flex">
        <div className="category-container">
          {filteredServices?.length > 0 ? (
            <span>Próximos turnos disponibles</span>
          ) : (
            <span>No hay turnos disponibles</span>
          )}

          <ul className="category-list">
            {filteredServices?.map((service) => (
              <li key={service.serviceId}>
                <p>{getDate(service.date)}</p>
                <div className="time-container">
                  {service.availableTimeslots.map((aviliable) => (
                    <button
                      key={v4()}
                      className={`${
                        timeSelected === aviliable && isSelected
                          ? "button hour select"
                          : "button hour"
                      }`}
                      onClick={() => handleTimeSelect(service, aviliable)}
                    >
                      {aviliable}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-container two">
          <button
            className="button button-select"
            onClick={() => handleCategoryOpen("categoryList")}
          >
            Anterior
          </button>
          {isSelected && (
            <button
              className="button button-select"
              onClick={() => handleClick(reserva)}
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
    </>
  );
};
