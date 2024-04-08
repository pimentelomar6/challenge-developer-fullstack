import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders the CategoryList by default", () => {
    expect(screen.getByText("Categorias")).toBeDefined();
  });

  test("the 'Select' button is not displayed upon application load", () => {
    const selectButton = screen.queryByText("Seleccionar");
    expect(selectButton).toBeNull();
  });

  test("the 'Confirm' button is not displayed upon application load", () => {
    const confirmButton = screen.queryByText("Confirmar");
    expect(confirmButton).toBeNull();
  });
});
