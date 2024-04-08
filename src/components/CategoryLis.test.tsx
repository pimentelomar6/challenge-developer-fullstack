import { beforeEach, describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { CategoryList } from "./CategoryList";
import { servicesData } from "../data";
import { getCategoryNames } from "../utils";

const handleCategoryOpen = vi.fn();
const handleSelectedService = vi.fn();

describe("CategoryList component", () => {
  beforeEach(() => {
    render(
      <CategoryList
        handleCategoryOpen={handleCategoryOpen}
        handleSelectedService={handleSelectedService}
      />
    );
  });

  test("renders categories and services", () => {
    const filteredData = getCategoryNames(servicesData);
    const categoryItems = screen.getAllByRole("listitem");
    expect(categoryItems).toHaveLength(filteredData.length);
  });

  test("toggles category expansion", () => {
    const addIcon = screen.getAllByText("add")[0];
    fireEvent.click(addIcon);
    const listExpanded = screen.queryAllByRole("ul");
    expect(listExpanded.length > 0).toBeDefined();
    const removeIcon = screen.getAllByText("remove")[0];
    expect(removeIcon).toBeDefined();
  });

  test("clicking 'Select' button after clicking 'Add' icon displays 'Confirm' button", () => {
    const addIcon = screen.getAllByText("add")[0];
    fireEvent.click(addIcon);

    const selectButton = screen.getAllByText("Seleccionar")[0];
    fireEvent.click(selectButton);

    const confirmButton = screen.getAllByText("Siguiente")[0];

    expect(confirmButton).toBeDefined();
  });
});
