import React from "react";
import { createRender } from "@material-ui/core/test-utils";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Map from "./Map";
  
  const { container } = render(<Map />);
  
  describe("Map", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });

  configure({ adapter: new Adapter() });
  describe("Map component", () => {
      let render;
      beforeAll(() => {
          render = createRender();
      });
      it("should work Map", () => {
          render(<BrowserRouter><Map responses="" lat={0} lon={0} rango={0} /></BrowserRouter>);
      });

  });