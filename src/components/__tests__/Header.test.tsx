/*
 * src/components/buttons/SampleButton/SampleButton.test.tsx
 * Description: unit test file for <Header>
 * Copyright (c) 2021 LemonBrew
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../Header/Header";

// jest.mock('./components/Header', () => () => <div data-testId="Header" /> )

describe("<Header>", () => {
  it("it should render component to the DOM", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("Header")).toBeInTheDocument();
  });
  // // })
  //   it('it covers the default props', () => {
  //     const { container } = render(<Header  />)
  //     expect(container).not.toBeEmptyDOMElement()
  //   })
  // //   it('handles the click event', () => {
  // //     const { getByText } = render(<SampleButton {...props} />)
  // //     fireEvent.click(getByText(props.text))
  // //     expect(props.clickHandler).toHaveBeenCalled()
  // })

  // describe('calculate', function () {
  //   it('add', function () {
  //     let result = 5 + 2
  //     expect(result).toBe(7)
  //   })
});
