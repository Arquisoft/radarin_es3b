import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16";
import Lista from "./Lista";

configure({ adapter: new Adapter() });

test("check the content of Lista component", async () => {
    const { getByText } = render(<BrowserRouter><Lista /></BrowserRouter>);
    expect(getByText("Iniciar Sesión")).toBeInTheDocument();
});