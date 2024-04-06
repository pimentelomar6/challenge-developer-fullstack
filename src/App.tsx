import { useState } from "react";
import { CategoryList } from "./components/CategoryList";
import { ServiceDetails } from "./components/ServiceDetails";
import { Confirmation } from "./components/Confirmation";
import { NavBar } from "./components/NavBar";
import { Booking, Information, Service, ServiceId } from "./types";
import { JSX } from "react/jsx-runtime";

const App = (): JSX.Element => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [serviceId, setServiceId] = useState<ServiceId | null>(null);
  const [confirmData, setConfirmData] = useState<Information | null>(null);

  const [viewMode, setViewMode] = useState("categoryList");

  const toggleView = (newViewMode: string) => {
    setViewMode(newViewMode);
  };

  const handleConfirmationOpen = (booking: Booking) => {
    const inf = {
      booking,
      selectedService,
    };
    setConfirmData(inf);
  };

  const handleSelectedService = (service: Service) => {
    setSelectedService(service);
    setServiceId(service.id);
  };

  return (
    <div className="container d-flex flex-column justify-content-between app">
      {viewMode === "categoryList" && (
        <CategoryList
          handleCategoryOpen={() => toggleView("serviceDetails")}
          handleSelectedService={handleSelectedService}
        />
      )}

      {viewMode === "serviceDetails" && (
        <ServiceDetails
          handleCategoryOpen={toggleView}
          handleConfirmationOpen={handleConfirmationOpen}
          id={serviceId}
        />
      )}

      {viewMode === "confirmation" && (
        <Confirmation handleConfirmationClose={toggleView} data={confirmData} />
      )}

      <NavBar />
    </div>
  );
};

export default App;
