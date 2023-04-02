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
          <IconButton size='small'>
            <FacebookIcon />
          </IconButton>
          <IconButton size='small'>
            <TwitterIcon />
          </IconButton>
          <IconButton size='small'>
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default Header
