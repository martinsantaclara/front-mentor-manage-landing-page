import React from 'react';
import Link from 'next/link';
import { Links, NavLink } from './headerStyles';

function NavLinks({ mobile, direction }) {
    return (
        <Links direction={direction}>
            <Link href="/pricing">
                <NavLink mobile={mobile}>Pricing</NavLink>
            </Link>
            <Link href="/product">
                <NavLink mobile={mobile}>Product</NavLink>
            </Link>
            <Link href="/about">
                <NavLink mobile={mobile}>About Us</NavLink>
            </Link>
            <Link href="/careers">
                <NavLink mobile={mobile}>Careers</NavLink>
            </Link>
            <Link href="/community">
                <NavLink mobile={mobile}>Community</NavLink>
            </Link>
        </Links>
    );
}

export default NavLinks;
