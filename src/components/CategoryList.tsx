import { useState } from "react";
import { Header } from "./Header";
import { Service } from "../types";
import { servicesData } from "../data";
import { getCategoryNames } from "../utils";

interface Props {
  handleCategoryOpen: () => void;
  handleSelectedService: (service: Service) => void;
}

export const CategoryList: React.FC<Props> = ({
  handleCategoryOpen,
  handleSelectedService,
}) => {
  const uniqueCategories = getCategoryNames(servicesData);

  const [services] = useState(servicesData);
  const [categories] = useState(uniqueCategories);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isServiceSelectedCat, setIsServiceSelectedCat] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleCategoryClick = (name: string) => {
    setExpandedCategory(expandedCategory === name ? null : name);
  };

  const handleCategorySelect = (service: Service) => {
    handleSelectedService(service);
    setSelectedService(service);
    setIsServiceSelectedCat(!isServiceSelectedCat);
  };

  return (
    <>
      <Header title="Seleccionar servicio" progress={20} />
      <div className="contain-flex">
        <div className="category-container">
          <span>Categorias</span>
          <ul className="category-list">
            {categories.map((category) => (
              <li className="category-item" key={category.name}>
                <div className="category-item-header">
                  {category.name}

                  {expandedCategory == category.name ? (
                    <span
                      onClick={() => handleCategoryClick(category.name)}
                      className="material-symbols-outlined"
                    >
                      remove
                    </span>
                  ) : (
                    <span
                      onClick={() => handleCategoryClick(category.name)}
                      className="material-symbols-outlined"
                    >
                      add
                    </span>
                  )}
                </div>
                {expandedCategory === category.name && (
                  <ul className="service-list">
                    {services
                      .filter((service) => service.category === category.name)
                      .map((service) => (
                        <li className="service-card" key={service.id}>
                          <div>
                            <span className="paragrah">{service.name}</span>
                            <span className="paragrah">
                              {service.description}
                            </span>
                          </div>
                          <div className="service-container-btn">
                            <button
                              className={`${
                                selectedService === service &&
                                isServiceSelectedCat
                                  ? "button button-select"
                                  : "button"
                              }`}
                              onClick={() => handleCategorySelect(service)}
                            >{`${
                              selectedService == service && isServiceSelectedCat
                                ? "Seleccionado"
                                : "Seleccionar"
                            }`}</button>
                          </div>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {isServiceSelectedCat && (
          <div className="footer-container one">
            <button
              className="button button-select"
              onClick={handleCategoryOpen}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </>
  );
};
