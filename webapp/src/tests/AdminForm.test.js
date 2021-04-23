import React from "react";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AdminForm from "../components/AdminForm";

  
  const { container } = render(<AdminForm />);
  
  describe("AdminForm", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });



test("user can type text and click Entrar", async () => {

    const { getAllByRole, getByPlaceholderText } = render(<AdminForm />);

    const usuarioTextField = getByPlaceholderText("Introduzca el usuario administrador");
    const contraseñaTextField = getByPlaceholderText("Introduzca su contraseña");
    expect(usuarioTextField).toBeInTheDocument();
    expect(contraseñaTextField).toBeInTheDocument();

    
    fireEvent.change(usuarioTextField, {target: { value: "ejemploUsuario" }});
    fireEvent.change(contraseñaTextField, {target: { value: "ejemploContraseña" }});

    const signInButton = getAllByRole("button", { id: "boton" }).find(element => element.className.includes("MuiButton"));

    expect(signInButton).toBeInTheDocument();
});