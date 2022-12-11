import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './contacts.scss';
import { useMediaQuery } from '@mui/material';

const Contacts = () => {
	const mainSettings = useSelector(state => state.mainSettings);

	const isLaptop = useMediaQuery('(max-width:1600px)')

	return (
		<div className='contactsWrapper'>
			<div className='contacts'>
				<ul className='ul'>
					{mainSettings.contactPhone && <li className='li'>
						<CallOutlinedIcon sx={{fontSize: isLaptop ? '16px' : '20px'}} />
						<a href={`tel:${mainSettings.contactPhone}`} className='contactLink'>{mainSettings.contactPhone}</a>
					</li>}
					{mainSettings.contactMail && <li className='li'>
						<EmailOutlinedIcon sx={{fontSize: isLaptop ? '16px' : '20px'}}  />
						<a href={`mailto:${mainSettings.contactMail}`} className='contactLink'>{mainSettings.contactMail}</a>
					</li>}
					{mainSettings.geoLocation?.url && <li className='li' >
						<LocationOnOutlinedIcon sx={{fontSize: isLaptop ? '16px' : '20px'}} />
						<a href={(mainSettings.geoLocation ?? {}).url} target='_blank_' className='contactLink'>{(mainSettings.geoLocation ?? {}).address}</a>
					</li>}
				</ul>
			</div>
		</div>)
}

export default Contacts