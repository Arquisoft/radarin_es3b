import { createRender } from "@material-ui/core/test-utils";
import { BrowserRouter } from "react-router-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MyDrawer from "./MyDrawer";

configure({ adapter: new Adapter() });
describe("MyDrawer", () => {
    let render;
    beforeAll(() => {
        render = createRender();
    });
    it("should work MyDrawer", () => {
        render(<BrowserRouter><MyDrawer /></BrowserRouter>);
    });

});