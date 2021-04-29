import React from "react";
import { render } from "@testing-library/react";
import FriendsList from "../components/solid/FriendsList";
import { fireEvent } from "@testing-library/react";

  
  const { container } = render(<FriendsList />);
  
  describe("FriendsList", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });


  test("user can type webID url and click Add or Delete friend", async () => {

    const { getAllByRole, getByPlaceholderText } = render(<FriendsList />);

    const friendURL = getByPlaceholderText("WebID/URL");
    expect(friendURL).toBeInTheDocument();

    
    fireEvent.change(friendURL, {target: { value: "ejemploURL" }});

    const addFriend = getAllByRole("button", { color: "primary" }).find(element => element.className.includes("MuiButton"));
    expect(addFriend).toBeInTheDocument();

    const deleteFriend = getAllByRole("button", { color: "secondary" }).find(element => element.className.includes("MuiButton"));
    expect(deleteFriend).toBeInTheDocument();
    
    fireEvent.click(addFriend);
    fireEvent.click(deleteFriend);

    expect(deleteFriend).toBeInTheDocument();
});