import { ListOfServices } from "./types"

export const getDate = (date : string) => {
    const dateFormater =  new Date(date)   
    return dateFormater.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
      }) 
}

export const getCategoryNames = (services : ListOfServices) => {
  const uniqueCategoryNames = new Set(
    services.map((service) => service.category)
  );
  return [...uniqueCategoryNames].map((name) => ({ name }));
}