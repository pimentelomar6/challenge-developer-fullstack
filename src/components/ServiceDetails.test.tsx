import { beforeEach, describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ServiceDetails } from "./ServiceDetails";

const mockHandleCategoryOpen = vi.fn();
const mockHandleConfirmationOpen = vi.fn();

describe("Service Details", () => {
  beforeEach(() => {
    render(
      <ServiceDetails
        id={3}
        handleCategoryOpen={mockHandleCategoryOpen}
        handleConfirmationOpen={mockHandleConfirmationOpen}
      />
    );
  });

  test("renders available services and times", () => {
    const dates = screen.getAllByRole("listitem");
    expect(dates).toHaveLength(1); // Adapta la suposición de cantidad

    const availableTimes = screen.getAllByRole("button");
    expect(availableTimes).toHaveLength(17); // Calcula la cantidad esperada
  });

  test('clicking "Siguiente" button triggers confirmation', () => {
    const firstTimeSlot = screen.getAllByText("09:00")[1];
    fireEvent.click(firstTimeSlot);

    const siguienteButton = screen.getAllByText("Siguiente")[0];
    fireEvent.click(siguienteButton);

    expect(mockHandleConfirmationOpen).toHaveBeenCalledTimes(1);
    expect(mockHandleCategoryOpen).toHaveBeenCalledWith("confirmation");
  });
});
