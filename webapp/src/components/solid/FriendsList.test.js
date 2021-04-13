import React from "react";
import { render } from "@testing-library/react";
import FriendsList from "./FriendsList";

  
  const { container } = render(<FriendsList />);
  
  describe("FriendsList", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });