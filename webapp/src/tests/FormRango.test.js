import React from "react";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import FormRango from "../components/localizacion/FormRango";

  
  const { container } = render(<FormRango />);
  configure({ adapter: new Adapter() });

  describe("FormRango", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });

  test("should render form rango", () => {
 
    const args = {
      amigos: [],
      userWebID: "webIdExample",
      lat: 43,
      lon: 5
    };
  
    const wrapper = shallow(
      <FormRango amigos={args.amigos} userWebID={args.userWebID} lat={args.lat} lon={args.lon}/>
    );
    const mockEvent = { target: { value: "This is just for test" } };
    wrapper.find("FormControl").simulate("change", mockEvent);

    const { getByText } = render(<FormRango/>);
    expect(getByText("Area de visualización:")).toBeInTheDocument();
  });

  test("input text and trigger changeRango", async () => {

    const { getAllByRole } = render(<FormRango />);

    const rangoTextField = getAllByRole("spinbutton", { placeholder: "Introduzca rango " }).find(element => element.className.includes("form-control"));

    expect(rangoTextField).toBeInTheDocument();

    fireEvent.change(rangoTextField, {target: { value: "ejemploRango" }});

});