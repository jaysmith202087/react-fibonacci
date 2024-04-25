/**
 * @vitest-environment jsdom
 */
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FibButton } from "./FibButton";

afterEach(() => cleanup());

it("should start at 0", async () => {
  render(<FibButton />);

  await screen.findByTestId("fib-current");

  expect(screen.getByTestId("fib-current").textContent).toBe("0");
});

it("should end up on the 4th fib number when user click 4 times", async () => {
  const user = userEvent

  render(<FibButton />);

  const button = screen.getByRole("button");

  await user.click(button);
  await user.click(button);
  await user.click(button);
  await user.click(button);

  await screen.findByTestId("fib-current");

  expect(screen.getByTestId("fib-current").textContent).toBe("5");
});

it("should be correct for every fib number through fib 20", async () => {
  const user = userEvent;
  render(<FibButton/>);

  const fibSequence = [1, 2, 3, 5, 8, 13, 21];

  for(let i = 0; i > fibSequence.length; i++) {
    const button = screen.getByTestId('fib-button');
    await user.click(button);
    await screen.findByTestId("fib-current");
    await waitFor(() => {
      expect(screen.getByTestId("fib-current").textContent).toBe(`${fibSequence[i]}`);
    });
  }
});
