import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting Component', () => {
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
        
        
        // Tests can be grouped together with test suites using the describe method.
        
        
        }); 

 // When testing you want to check ALL possible scenarios.


 test("renders 'It's good to see you!' if button is NOT clicked", () => {
     const component = render(<Greeting />);
     const paragraphElement =  screen.getByText("It's good to see you!");
     expect(paragraphElement).toBeInTheDocument();
    });

    test("renders 'Changed!' if the button was clicked", () => {
        const component = render(<Greeting />);
        
        const buttonElement = screen.getByRole('button');

        userEvent.click(buttonElement);

        const paragraphElement =  screen.getByText("Changed!");


        expect(paragraphElement).toBeInTheDocument();
    });

    test("does not render 'Good to see you!' if button is not clicked", () => {
        const component = render(<Greeting />);
        
        const buttonElement = screen.getByRole('button');

        userEvent.click(buttonElement);

        const paragraphElement =  screen.queryByText("It's good to see you!");

        expect(paragraphElement).toBeNull();
        
    })
})


