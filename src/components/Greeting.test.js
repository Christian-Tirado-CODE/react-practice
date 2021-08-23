import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('Renders hello world as a test', () => {
/* 
    When writing tests keep in mind the three A's:
    Arrange - Set up the test data, test conditions and test environment.
    Act - Run logic that should be tested(e.g. execute functions).
    Assert - Compare execution results with expected results.
*/

// Arrange
    const component = render(<Greeting />);

//You can use different types of functions in the screen like find, query and get. The differences between those are when they throw errors or if they return promises.get methods  throw errors, query methods don't and find methods return promises.

const helloWorldElement = screen.getByText('Hello World', {exact: false});

expect(helloWorldElement).toBeInTheDocument(); // toBe() is what is known as a matcher. You can use not.toBe().
});