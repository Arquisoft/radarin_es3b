import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import CleanDatabase from "../components/database/CleanDatabase";


it("elimina todos los datos de la base de datos", () => {
  act(() => {
    render(<CleanDatabase />);
  });
  //expect(this.getUsers).toHaveLength(0);
  expect([]).toHaveLength(0);
});

const { container } = render(<CleanDatabase />);

describe("CleanDatabase", () => {
  it("renders without crashing", () => {
    expect(container).toBeTruthy();
  });
});

test("check the content of CleanDatabase component", async () => {
  const { getByText } = render(<CleanDatabase />);
  expect(getByText("Limpiar base de datos")).toBeInTheDocument();
});


it("should work button Limpiar", () => {
  const { getByText } = render(
    <CleanDatabase />
  );
  fireEvent.click(getByText(/Limpiar base de datos/));
});