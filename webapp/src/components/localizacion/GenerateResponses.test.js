import React from "react";
import { render } from '@testing-library/react';
import GenerateResponses from "./GenerateResponses";

  
  const { container } = render(<GenerateResponses />);
  
  describe('GenerateResponses', () => {
    it('renders without crashing', () => {
      expect(container).toBeTruthy();
    });
  });