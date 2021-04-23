import ReactDOM from "react-dom";
import "../index.css";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
    it("should render without crashing", () => {
        const div = document.createElement("div");
        div.id = "root";
        document.body.appendChild(div);
        require("../index.js");
        expect(ReactDOM.render).toHaveReturned();
    });
});