import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import EncenderAplicacion from "../components/localizacion/EncenderAplicacion";

it("enciende la aplicación", () => {

  act(() => {
    render(<EncenderAplicacion />);
  });
});

const { container } = render(<EncenderAplicacion />);

describe("EncenderAplicacion", () => {
  it("renders without crashing", () => {
    expect(container).toBeTruthy();
  });
});
