import React from "react";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AdminOperations from "../components/admin/AdminOperations";


const { container } = render(<AdminOperations />);

describe("AdminOperations", () => {
    it("renders without crashing", () => {
        expect(container).toBeTruthy();
    });
});



test("user can type click Admin buttons", async () => {

    const { getByText } = render(<AdminOperations />);

    /*To test after loggedIn as admin
    const deleteButton = getByText(" Delete");
    expect(deleteButton).toBeInTheDocument();

    const blockButton = getByText(" Block");
    expect(blockButton).toBeInTheDocument();
    
    fireEvent.click(deleteButton);
    fireEvent.click(blockButton);
*/
    const loadingText = getByText("Cargando...");
    expect(loadingText).toBeInTheDocument();
});