import React from "react";
import { render } from "@testing-library/react";
import IntervalRerender from "../components/IntervalRerender";

  
  const { container } = render(<IntervalRerender />);
  
  describe("IntervalRerender", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });