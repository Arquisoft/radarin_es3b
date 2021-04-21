import React from "react";
import { render } from "@testing-library/react";
import FormRango from "../components/localizacion/FormRango";

  
  const { container } = render(<FormRango />);
  
  describe("FormRango", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });

  