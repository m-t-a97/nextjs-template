import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ExampleButton from '@/components/ExampleButton';

describe("ExampleButton", () => {
  test("should test that the button's text says 'Click Me!'.", () => {
    render(<ExampleButton text="Click Me!" onClick={() => {}} />);

    const iconWrapper: HTMLElement = screen.getByRole("button");

    expect(iconWrapper.textContent).toEqual("Click Me!");
  });
});
