import React from "react";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ButtonToRender from "../components/ButtonToRender";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

const { container } = render(<ButtonToRender />);
configure({ adapter: new Adapter() });

describe("ButtonToRender", () => {
    it("renders without crashing", () => {
        expect(container).toBeTruthy();
    });
});



test("ButtonToRender works", async () => {

    

    const { getByText, getAllByRole } = render(<ButtonToRender />);


    const processOn = getAllByRole("button", { color: "primary" }).find(element => element.className.includes("MuiButton"));
    expect(processOn).toBeInTheDocument();

    const processOff = getAllByRole("button", { color: "secondary" }).find(element => element.className.includes("MuiButton"));
    expect(processOff).toBeInTheDocument();
    
    fireEvent.click(processOn);
    fireEvent.click(processOff);

    expect(container).toBeTruthy();

    const wrapper = shallow(
      <ButtonToRender/>
    );

    wrapper.setState({showComponent: true});
    
});