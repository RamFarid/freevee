import {
  AppBar,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const styles = {
  haeder: {
    backgroundColor: 'transparent',
    position: 'static',
  },
  logo: {
    flex: 1,
    textTransform: 'uppercase',
    color: (theme) => theme.palette.primary.main,
  },
}
function Header() {
  return (
    <AppBar sx={styles.haeder} elevation={0}>
      <Toolbar>
        <Typography variant='h4' component={'h1'} sx={styles.logo}>
          Freevee
        </Typography>
        <Stack direction={'row'}>
          <IconButton
            target='_blank'
            size='small'
            color='primary'
            href='https://www.facebook.com/rraaamm_s'
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            target='_blank'
            size='small'
            href='https://api.whatsapp.com/send?phone=201553706448&text=Welcome%20from%20FREEVEE'
          >
            <WhatsAppIcon sx={{ color: '#25D366' }} />
          </IconButton>
          <IconButton
            size='small'
            href='https://github.com/RamFarid'
            target='_blank'
          >
            <GitHubIcon sx={{ color: '#000' }} />
          </IconButton>
        </Stack>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default Header
