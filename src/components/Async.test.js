import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async component", () => {

    test("renders posts if request succeeds", async () => {
        window.fetch = jest.fn(); // We set the fetch method to a new function defined by the developer
        window.fetch.mockResolvedValueOnce({ // This method allows us to set a value the mock function should resolve to when it's been called.
            json: async () => [{id: 'p1', title: 'post title 1'}]
        }); 
        render(<Async />);
        //const listItemsElements = screen.getAllByRole('listitem');  Returns error because fetching posts is asynchronous. The program is going to look for the list items before the posts are fetched.
        const listItemsElements = await screen.findAllByRole('listitem'); //Returns a promise so it will not throw an error because it's going to wait until the posts are fetched.
        expect(listItemsElements).not.toHaveLength(0);
    /*

    This works but it is not ideal. There's a risk of two things happening:
        1. If there are many tests that make http requests is going to cause a lot of network traffic.
        2. If there is a component that sends a post request it might send data to a database unexpectedly.
        
    Solutions: Not send a request at all or send a request to a fake server(testing server).
        
    YOU DON'T TO TEST CODE THAT YOU HAVE NOT WRITTEN. In this case you don't want to test to test if fetch api successfully sent the data.
    You wan't to test if the component responds correctly for different outcomes(when the data is fetched or when an error occurs).
    We will use a mock function. It does want we want but does not send a real request.
    
    
        ADDITIONAL RESOURCES: 
        JEST AND REACT TESTING LIBRARY DOCUMENTATION 
        
        REACT HOOKS TESTING  LIBRARY(SPECIALLY CUSTOM HOOKS)
    
    */ 
        
    
    });

});