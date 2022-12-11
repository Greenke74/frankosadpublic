import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const ContactsFooter = () => {

  const mainSettings = useSelector(state => state.mainSettings);

  const contactLinkStyle = {
    textDecoration: 'none',
    color: '#e9fbf09e',
    fontSize: '20px',
    fontFamily: 'inherit'
  }

  return (
    <Card sx={{ width: '100%', boxShadow: 'none', padding: '40px 0' }}>
      <Grid container spacing={5}>
        <Grid sm={12} item>
          {mainSettings.geoLocation &&
            <a
              href={(mainSettings.geoLocation ?? {}).url}
              target='_blank_'
              style={contactLinkStyle}
            >{(mainSettings.geoLocation ?? {}).address}</a>}
        </Grid>
        <Grid xs={12} item>
          {mainSettings.contactMail &&
            <a
              href={`mailto:${mainSettings.contactMail}`}
              style={contactLinkStyle}
            >{mainSettings.contactMail}</a>}
        </Grid>
        <Grid xs={12} item>
          {mainSettings.contactPhone &&
            <a
              href={`tel:${mainSettings.contactPhone}`}
              style={contactLinkStyle}
            >{mainSettings.contactPhone}</a>}
        </Grid>
        <Grid xs={12} item>
          <a href={mainSettings?.mediaLinks?.instagramUrl ?? ''}
            target='_blank_'
            style={{
              ...contactLinkStyle,
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
            <InstagramIcon style={{ color: '#e9fbf09e' }} /> {(mainSettings?.mediaLinks?.instagramUrl.split('/').pop() ?? '')}
          </a>
        </Grid>
        <Grid xs={12} item>
          <a href={mainSettings?.mediaLinks?.facebookUrl ?? ''}
            target='_blank_'
            style={{
              ...contactLinkStyle,
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
            <FacebookIcon style={{ color: '#e9fbf09e' }} /> {(mainSettings?.mediaLinks?.facebookUrl.split('/').pop() ?? '')}
          </a>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ContactsFooter