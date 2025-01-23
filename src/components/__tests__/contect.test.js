import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
    render(<Contact/>)

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
     
});

test("Should load Buttom component", () => {
    render(<Contact/>)

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
     
});

// test("Should load span component", () => {
//     render(<Contact/>)

//     const span = screen.getByRole("span");
//     expect(span).toBeInTheDocument();
     
// });  // it will fialed..  

test("Should load Buttom component", () => {
    render(<Contact/>)

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
     
});


// to find multiple Role(tag)

test("Should load input box component", () => {
    render(<Contact/>)

    // Queary
    //const inputBoxes = screen.getAllByRole("textbox");
    const inputBoxes = screen.getByPlaceholderText("Name");
  
    console.log(inputBoxes);  // Return React element array
    
    //console.log(inputBoxes.length);
    
    //Asertion
    // expect(inputBoxes.length).not.toBe(2);
    
    expect(inputBoxes).toBeInTheDocument();
     
});
