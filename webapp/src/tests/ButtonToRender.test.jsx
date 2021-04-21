import React from "react";
import { render } from "@testing-library/react";
import ButtonToRender from "../components/ButtonToRender";

  
  const { container } = render(<ButtonToRender />);
  
  describe("ButtonToRender", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });