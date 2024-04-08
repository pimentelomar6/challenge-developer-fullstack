import { beforeEach, describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Confirmation } from "./Confirmation";

const mockData = {
  selectedService: {
    id: 1,
    name: "Corte de pelo",
    category: "Hair",
    description: "Hair Cut and Styling",
  },
  booking: { date: "2024-04-10", hour: "10:00" },
};

const mockHandleConfirmationClose = vi.fn();

describe("Confirmation component", () => {
  beforeEach(() => {
    render(
      <Confirmation
        data={mockData}
        handleConfirmationClose={mockHandleConfirmationClose}
      />
    );
  });

  test("renders confirmation details and allows confirmation", () => {
    const serviceText = screen.getByText("Corte de pelo");
    expect(serviceText).toBeDefined();

    const dateText = screen.getByText("10:00");
    expect(dateText).toBeDefined();

    const confirmButton = screen.getByText("Confirmar");
    fireEvent.click(confirmButton);

    expect(screen.getByText("Reserva realizada con éxito")).toBeDefined();
  });

  test('calls handleConfirmationClose on "Anterior" button click', () => {
    const anteriorButton = screen.getByText("Anterior");
    fireEvent.click(anteriorButton);

    expect(mockHandleConfirmationClose).toHaveBeenCalledTimes(1);
    expect(mockHandleConfirmationClose).toHaveBeenCalledWith("serviceDetails");
  });
});
