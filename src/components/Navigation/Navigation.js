import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavigationWrapper = styled.nav`
    position: absolute;
    top: 20px;
    left: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: "Montserrat";

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Logo = styled.span`
    font-weight: bold;
    font-size: 20px;
`;

const NavigationList = styled.ul`
    list-style: none;
    display: flex;
`;

const NavigationListItem = styled.li`
    font-weight: 600;
    font-size: 15px;
    margin-left: 32px;
`;

const Navigation = () => {
    return (
        <NavigationWrapper>
            <Logo><Link to="/">HATTA</Link></Logo>
            <NavigationList>
                <NavigationListItem>
                    <Link to="/articles">Articles</Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to="/about">About</Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to="/gallery">Gallery</Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to="/contact">Contact</Link>
                </NavigationListItem>
            </NavigationList>
        </NavigationWrapper>
    )
}

export default Navigation;