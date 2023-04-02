import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Radio,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import React, { useState } from 'react'
import MediaPlay from './MediaPlay'
import { useEffect } from 'react'

const styles = {
  inputField: {
    maxWidth: '300px',
    '&:hover': {
      borderColor: 'grey',
    },
  },
  container: {
    flex: 1,
    flexDirection: {
      xs: 'coloumn',
      md: 'row',
    },
  },
  textContainer: {
    paddingTop: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: {
      xs: 'center',
      md: 'flex-start',
    },
  },

  input: {
    paddingRight: '0',
  },
  form: {
    paddingTop: 3,
    display: 'block',
  },
  text2: {
    paddingBottom: 2,
  },
}

function Content() {
  const [videoLink, setVideoLink] = useState('')
  const [videoType, setvideoType] = useState('')
  const [mimeType, setMimeType] = useState('')
  const [helperText, setHelperText] = useState('')
  const [isVideoDownloading, setisVideoDownloading] = useState(false)
  const [videoLinkToPlay, setvideoLinkToPlay] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const reqExp = /^https:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)/
  useEffect(() => {
    console.log('#'.repeat(10))
    console.log('videoLink: ' + videoLink)
    console.log('videoType: ' + videoType)
    console.log('helperText: ' + helperText)
    console.log('isVideoDownloading: ' + isVideoDownloading)
    console.log('videoLinkToPlay: ' + videoLinkToPlay)
    console.log('videoTitle: ' + videoTitle)
  }, [
    helperText,
    isVideoDownloading,

    videoLink,
    videoLinkToPlay,
    videoTitle,
    videoType,
  ])
  const handleVideoLink = (e) => {
    const userInput = e.target.value.trim()
    if (reqExp.test(userInput)) {
      setHelperText('')
      setVideoLink(userInput)
      return
    }
    setHelperText('Make sure you put correct link')
  }
  const handleVidoeType = (e, value) => {
    if (reqExp.test(videoLink) || videoLink.length === 0) setHelperText('')
    setvideoType(value)
  }
  const getTheVideo = async () => {
    if (!reqExp.test(videoLink) || videoType.length === 0) {
      setHelperText(
        'Make sure you put correct link and choose the type of media'
      )
      return
    }
    try {
      setvideoLinkToPlay('')
      setisVideoDownloading(true)
      const response = await fetch(
        `/api/video?videoLink=${videoLink}&filter=${videoType}`
      )
      const blob = await response.blob()
      const videoBlobUrl = URL.createObjectURL(blob)
      const contentType = response.headers.get('Content-Type')
      setMimeType(contentType)
      setvideoLinkToPlay(videoBlobUrl)
      setisVideoDownloading(false)
      setHelperText('')
    } catch (error) {
      setisVideoDownloading(false)
      setHelperText('')
      setvideoType('')
      console.log(error)
    }
  }
  return (
    <Stack height={'100%'} paddingX={3} sx={styles.container}>
      <Stack
        direction={'column'}
        flex={'1'}
        justifyContent={'center'}
        sx={styles.textContainer}
      >
        <Box maxWidth={'340px'}>
          <Typography variant='subtitle2'>Free 100%</Typography>
          <Typography variant='h5' component={'h2'} sx={styles.text2}>
            Download youtube videos free with Freevee
          </Typography>
          <TextField
            autoComplete={'off'}
            disabled={isVideoDownloading}
            helperText={helperText.length ? helperText : false}
            error={helperText.length ? true : false}
            onChange={handleVideoLink}
            sx={styles.inputField}
            size='small'
            InputProps={{
              sx: styles.input,
              endAdornment: (
                <IconButton
                  onClick={getTheVideo}
                  size='small'
                  color='primary'
                  disabled={
                    helperText.length ||
                    videoLink.length === 0 ||
                    isVideoDownloading
                      ? true
                      : false
                  }
                >
                  <ArrowForwardIcon />
                </IconButton>
              ),
            }}
            label='Video Link'
          />
          <FormControl sx={styles.form} disabled={isVideoDownloading}>
            <FormLabel id='video-type'>Choose the type</FormLabel>
            <RadioGroup
              name='video-type-choices'
              aria-labelledby='video-type'
              value={videoType}
              onChange={handleVidoeType}
            >
              <FormControlLabel
                control={<Radio />}
                label='Video only'
                value={'videoonly'}
              />
              <FormControlLabel
                control={<Radio />}
                label='Audio only'
                value={'audioonly'}
              />
              <FormControlLabel
                control={<Radio />}
                label='Video and Audio'
                value={'videoandaudio'}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
      <Stack
        flex={'1'}
        justifyContent={'center'}
        sx={{
          alignItems: {
            xs: 'center',
            md: 'flex-start',
          },
        }}
      >
        {videoLinkToPlay.length !== 0 ? (
          <>
            <Typography variant='body1' component={'h1'}>
              {videoTitle}
            </Typography>
            <MediaPlay
              type={videoType}
              src={videoLinkToPlay}
              mimeType={mimeType}
            />
          </>
        ) : null}
      </Stack>
    </Stack>
  )
}

export default Content
