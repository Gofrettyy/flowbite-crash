'use client';

import Link from 'next/link';
import { Navbar } from "flowbite-react";

const Header = () => {
    return (
        <header>
            <Navbar rounded>
                <Navbar.Brand as={Link} href="https://youtube.com/@coderversity">
                    <span className='text-2xl font-bold'>Coderversity</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#">
                        Home
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header