import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../Mooks/MookData.json"
import "@testing-library/jest-dom"


it('Should render Restaurent Cart component with props', () => {
    
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();

});
