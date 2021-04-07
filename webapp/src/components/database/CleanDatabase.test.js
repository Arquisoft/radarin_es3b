import React from "react";
import { render} from "react-testing-library";
import { act } from "react-dom/test-utils";
import CleanDatabase from "./CleanDatabase";

  it("elimina todos los datos de la base de datos", () =>{
      act(() => {
        render(<CleanDatabase />);
      });
      expect(this.getUsers).toHaveLength(0);
  });

  const { container } = render(<CleanDatabase />);
  
  describe('CleanDatabase', () => {
    it('renders without crashing', () => {
      expect(container).toBeTruthy();
    });
  });