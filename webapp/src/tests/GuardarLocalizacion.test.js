import React from "react";
import { render } from "@testing-library/react";
import GuardarLocalizacion from "../components/localizacion/GuardarLocalizacion";
  
  const { container } = render(<GuardarLocalizacion />);
  
  describe("GuardarLocalizacion", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });