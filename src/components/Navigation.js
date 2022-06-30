import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    background: #000;
    color: white;
    position: fixed;
    left: 0;
    height: 100%;
    padding: 2rem 3rem;
`;

const Navigation = ({ item }) => {
    const { items: children } = item;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    }
    return (
        <Nav>
            <span>Logo here</span>
            <dl>
                <dt>Category 1</dt>
                    <dd>Product 1</dd>
                    <dd>Product 2</dd>
                    <dd>Product 3</dd>
                <dt>Category 2</dt>
                    <dd>Product 1</dd>
                    <dd>Product 2</dd>
            </dl>
        </Nav>
    )
};

export default Navigation;