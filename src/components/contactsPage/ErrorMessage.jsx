import React from 'react'
import { errorMessages } from '../../../services/messages-service'

const ErrorMessage = ({ type, minLength, maxLength, min, max}) => {
  return (
    <span style={{
        fontSize: '12px',
        color: '#ff0000b0',
        marginLeft: '20px'
    }}>
        { (minLength || maxLength || min || max)
            ? errorMessages[type](minLength || maxLength || min || max)
            : errorMessages[type]
        }
    </span>
  )
}

export default ErrorMessage