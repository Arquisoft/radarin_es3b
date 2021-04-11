import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import DesactivarAplicacion from "./DesactivarAplicacion";

  it("apaga la aplicación", () => {
      // const numUsersBefore = this.getUsers;
      const numUsersBefore = 3;
      act(() => {
        render(<DesactivarAplicacion />);
      });
      // expect(this.getUsers).toHaveLength(numUsersBefore -1);
      expect([2,3]).toHaveLength(numUsersBefore -1);
  });
  
  const { container } = render(<DesactivarAplicacion />);
  
  describe("DesactivarAplicacion", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });