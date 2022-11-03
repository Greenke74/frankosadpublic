import { Button, Card, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { REGULAR_EXPRESSIONS } from '../../services/regex-service'
import './contactsForm.scss'
import ErrorMessage from './ErrorMessage.jsx'

const СontactForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  const inputStyle = {
    input: {
      color: 'var(--white)',
      fontSize: '20px',
      fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
    },
    '& .MuiInputBase-input': {
      paddingLeft: '20px'
    },
    '& .MuiInputBase-root': {
      borderRadius: 'var(--block-border-radius)',
      bgcolor: '#1f332678'
    }
  }

  const labelStyle = {
    color: '#808581',
    fontFamily: 'inherit',
    fontSize: '20px',
    paddingLeft: '10px'
  }

  return (
    <Card className='card' sx={{ boxShadow: 'none' }}>
      <Typography className='form-title'
        variant="h4"
        align='center'
        marginBottom="30px"
      >
        Напишіть нам
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <TextField
              type="text"
              label="ПІБ"
              fullWidth
              autoComplete='none'
              variant='filled'
              sx={inputStyle}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ style: labelStyle }}
              {...register("fullName", { required: true, maxLength: 100 })}
            />
            {errors.fullName && <ErrorMessage type={errors.fullName.type} maxLength={errors.fullName.type === 'maxLength' ? 100 : undefined} />}
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="Номер телефону"
              fullWidth
              autoComplete='none'
              variant='filled'
              sx={inputStyle}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ style: labelStyle }}
              {...register("contactPhone", { required: true, pattern: REGULAR_EXPRESSIONS.PHONE })}
            />
            {errors.contactPhone && <ErrorMessage type={errors.contactPhone ? 'phonePattern' : 'undefined'} />}
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="Тема"
              fullWidth
              autoComplete='none'
              variant='filled'
              sx={inputStyle}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ style: labelStyle }}
            />
          </Grid>
          <Grid xs={12} sm={12} item>
            <TextField
              label="Повідомлення"
              fullWidth
              multiline
              rows={2}
              autoComplete='none'
              variant='filled'
              sx={{
                textarea: {
                  color: 'var(--white)',
                  fontSize: '20px',
                  fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
                },
                '& .MuiInputBase-input': {
                  paddingLeft: '7px'
                },
                '& .MuiInputBase-root': {
                  borderRadius: 'var(--block-border-radius)',
                  bgcolor: '#1f332678'
                }
              }}
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{ style: labelStyle }}
              {...register("message", { required: true, maxLength: 1000 })}
            />
            {errors.message && <ErrorMessage type={errors.message.type} maxLength={errors.message.type === 'maxLength' ? 1000 : undefined} />}
          </Grid>
          <Grid justifyContent={'right'} container item>
            <Button className='btn' variant="contained" type="submit">Відправити</Button>
          </Grid>
        </Grid>
      </form >
    </Card>
  )
}

export default СontactForm