import React, { Component} from 'react';
import * as rs from "react-bootstrap";

export const Navbar = ()=> {
    return(
        <rs.Navbar bg="primary" variant="dark">
        <rs.Navbar.Brand href="/">Dizilm</rs.Navbar.Brand>
        <rs.Nav className="mr-auto">
          <rs.Nav.Link href="/">Ana Sayfa</rs.Nav.Link>
          <rs.Nav.Link href="/movielist">Filmler</rs.Nav.Link>
          <rs.Nav.Link href="/serieslist">Diziler</rs.Nav.Link>
        </rs.Nav>
        <rs.Form inline>
          {/* <rs.FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
        </rs.Form>
      </rs.Navbar>
        )

}
export default Navbar;