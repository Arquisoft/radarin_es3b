import React from "react";
import { render } from "@testing-library/react";
import AdminForm from "../components/AdminForm";

  
  const { container } = render(<AdminForm />);
  
  describe("AdminForm", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });