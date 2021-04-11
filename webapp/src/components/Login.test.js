import React from "react";
import { render } from '@testing-library/react';
import Login from "./Login";

  
  const { container } = render(<Login />);
  
  describe('Login', () => {
    it('renders without crashing', () => {
      expect(container).toBeTruthy();
    });
  });