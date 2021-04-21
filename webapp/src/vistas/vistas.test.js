import { createRender } from "@material-ui/core/test-utils";
import { render } from "@testing-library/react";
import { BrowserRouter, Redirect } from "react-router-dom";
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16";
import Ayuda from "./Ayuda";
import Admin from "./Admin";
import Amigos from "./Amigos";
import Mapa from "./Mapa";

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

test("check the content of Ayuda view", async () => {
    const { getByText } = render(<BrowserRouter><Ayuda /></BrowserRouter>);
    expect(getByText("Documentación")).toBeInTheDocument();
    expect(getByText("Link al repositorio del proyecto")).toBeInTheDocument();
});

test("check the content of Admin view", async () => {
  const { getByText } = render(<BrowserRouter><Admin /></BrowserRouter>);
  expect(getByText("Administrador")).toBeInTheDocument();
  expect(getByText("Usuario:")).toBeInTheDocument();
  expect(getByText("Contraseña:")).toBeInTheDocument();
});

test("check the content of Amigos view", async () => {
  const { getByText } = render(<BrowserRouter><Amigos /></BrowserRouter>);
  expect(getByText("¡Te has desconectado con éxito!")).toBeInTheDocument();
});

test("check the content of Mapa view", async () => {
  const { getByText } = render(<BrowserRouter><Mapa /></BrowserRouter>);
  //expect(getByText("Encender Aplicación")).toBeInTheDocument();
  //expect(getByText("Apagar Aplicación")).toBeInTheDocument();
  expect(getByText("¡Te has desconectado con éxito!")).toBeInTheDocument();
});

