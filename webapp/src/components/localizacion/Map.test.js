import React from "react";
import { render } from "@testing-library/react";
import Map from "./Map";
  
  const { container } = render(<Map />);
  
  describe("Map", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });