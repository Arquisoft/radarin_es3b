// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

jest.mock("./components/localizacion/Map", () => () => <></>);
jest.mock("./components/admin/MapAdmin", () => () => <></>);


const mockGeolocation = {
  getCurrentPosition: jest.fn()
    .mockImplementationOnce((success) => Promise.resolve(success({
      coords: {
        latitude: 51.1,
        longitude: 45.3
      }
    }))),
    watchPosition: jest.fn(),
    clearWatch: jest.fn()
};
global.navigator.geolocation = mockGeolocation;

window.URL.createObjectURL = function () { };