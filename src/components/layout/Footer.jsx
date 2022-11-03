import React from "react";
import './footer.scss'
import ContactsFooter from "./ContactsFooter.jsx";
import { Card, Grid } from "@mui/material";
import { navLinks } from '../../services/nav-routes-service';
import { NavLink } from "react-router-dom";


const Footer = () => {

  const contactLinkStyle = {
    textDecoration: 'none',
    color: '#e9fbf09e',
    fontSize: '20px',
    fontFamily: 'inherit',
    fontWeight: '600'
  }

  return (
    <footer className="footer" >
      <Grid container className="container">
        <Grid xs={12} sm={6} md={3} item >
          <Card sx={{ width: '100%', boxShadow: 'none', padding: '40px 0' }}>
            <Grid container direction={'column'} spacing={5}>
              {navLinks.map((elem, index) =>
                <Grid item key={index}>
                  <NavLink style={contactLinkStyle} to={elem.to} key={elem.to}>{elem.title}</NavLink>
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <ContactsFooter />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer;