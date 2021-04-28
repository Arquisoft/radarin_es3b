import React from "react";
import { render } from "@testing-library/react";
import GenerateResponses from "../components/localizacion/GenerateResponses";
import GenerateResponsesAdmin from "../components/admin/GenerateResponsesAdmin";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
  
  const { container } = render(<GenerateResponses />);
  configure({ adapter: new Adapter() });

  describe("GenerateResponses", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });

  test("should work generateResponses", () => {
 
    const args = {
      amigos: ["unAmigo"],
    };
  
    const wrapper = shallow(
      <GenerateResponses amigos={args.amigos}/>
    );

    const wrapper2 = shallow(
      <GenerateResponsesAdmin amigos={args.amigos}/>
    );
  });