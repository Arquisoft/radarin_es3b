import { render } from "@testing-library/react";
import Banned from "../components/admin/Banned";


test("banned.js component", async () => {
    const { getByText } = render(<Banned/>);
    expect(getByText("¡Te has desconectado con éxito!")).toBeInTheDocument();
    expect(getByText("Página de Inicio")).toBeInTheDocument();
  });