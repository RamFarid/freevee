import Head from 'next/head'
import { Paper, Stack } from '@mui/material'
import Header from '../components/Header'
import Content from '../components/Content'

export default function Home() {
  return (
    <>
      <Head>
        <title>Freevee</title>
        <meta
          name='description'
          content='Download youtube videos free with freevee'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={'100vh'}
      >
        <Paper
          sx={{
            width: '90%',
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
          }}
          component={'main'}
        >
          <Header />
          <Content />
        </Paper>
      </Stack>
    </>
  )
}
