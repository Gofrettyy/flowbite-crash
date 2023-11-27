'use client';

import { Footer } from "flowbite-react";

const AppFooter = () => {
  return (
    <Footer container className="footer">
      <Footer.Copyright href="#" by="Coderversity™" year={new Date().getFullYear()} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default AppFooter