import { createRender } from "@material-ui/core/test-utils";
import { BrowserRouter, Redirect } from "react-router-dom";
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Admin view", () => {
  let render;

  beforeAll(() => {
    render = createRender();
  });

  it("should work Admin", () => {
    const wrapperAdmin = render(<BrowserRouter><Redirect
        from="/"
        to="/vistas/Admin" /> </BrowserRouter>);
  });
});

describe("Ayuda view", () => {
    let render;
  
    beforeAll(() => {
      render = createRender();
    });
  
    it("should work Ayuda", () => {
      const wrapperAyuda = render(<BrowserRouter><Redirect
          from="/"
          to="/vistas/Ayuda" /> </BrowserRouter>);
    });
  });

  describe("Amigos view", () => {
    let render;
  
    beforeAll(() => {
      render = createRender();
    });
  
    it("should work Amigos", () => {
      const wrapperAmigos = render(<BrowserRouter><Redirect
          from="/"
          to="/vistas/Amigos" /> </BrowserRouter>);
    });
  });