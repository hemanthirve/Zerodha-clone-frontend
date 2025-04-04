import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extent-expert';
import Hero from "../landing_page/home/Hero";

describe("Hero Component", ()=> {
    test("renders hero image", ()=> {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAtrribute("src", "media/images/homeHero.png");
    });
});