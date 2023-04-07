import {
  Box,
  IconButton,
  Stack,
  TextField,
  Typography,
  Alert,
  AlertTitle,
  CircularProgress,
  SwipeableDrawer,
  Backdrop,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import React, { useState } from 'react'
import ErrorBoundary from './ErrorBoundry.jsx'
import VideoInfoCard from './VideoInfoCard'

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
  text2: {
    paddingBottom: 2,
  },
  errorContainer: {
    marginY: 2,
  },
}

function Content() {
  const [videoLink, setVideoLink] = useState('')
  const [errors, setErrors] = useState({
    isError: false,
    message: '',
    title: '',
  })
  const [itag, setItag] = useState('')
  const [helperText, setHelperText] = useState('')
  const [isVideoDownloading, setisVideoDownloading] = useState(false)
  const [videoInfo, setVideoInfo] = useState({})

  const reqExp = /^https:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)/

  const handleVideoStream = async () => {
    if (itag.length === 0) {
      setErrors({
        isError: true,
        title: 'Missing format',
        message: 'Choose format to download the video',
      })
      return
    }
    let chosenFormat = videoInfo.formats.find((video) => video.itag === itag)
    window.open(chosenFormat.url, '_blank')
  }

  const handleItagInput = (e) => {
    if (e.target.value) {
      setItag(e.target.value)
      setErrors({
        message: '',
        isError: false,
        title: '',
      })
    }
  }

  const handleVideoLink = (e) => {
    const userInput = e.target.value.trim()
    if (reqExp.test(userInput)) {
      setHelperText('')
      setVideoLink(userInput)
      return
    }
    setHelperText('Make sure you put correct link')
  }
  const getVideoInfo = async () => {
    if (!reqExp.test(videoLink)) {
      setHelperText(
        'Make sure you put correct link and choose the type of media'
      )
      return
    }
    try {
      setItag('')
      setHelperText('')
      setErrors({
        isError: false,
        title: '',
        message: '',
      })
      setisVideoDownloading(true)
      setVideoInfo({})
      const response = await fetch(`/api/video/info?videoLink=${videoLink}`)
      const videoDetails = await response.json()
      if (videoDetails.code === 400) {
        setErrors({
          isError: true,
          title: 'Missing something',
          message: videoDetails.message,
        })
      }
      if (videoDetails.code === 500) {
        setErrors({
          isError: true,
          title: 'Server error',
          message: videoDetails.message,
        })
      }
      if (videoDetails.code === 200) {
        let videoAndAudio = []
        let audio = []
        let video = []
        setErrors({
          isError: false,
          title: '',
          message: '',
        })
        video = videoDetails.data.formats.filter(
          (video) => !video.hasAudio && video.hasVideo
        )
        audio = videoDetails.data.formats.filter(
          (video) => video.hasAudio && !video.hasVideo
        )
        videoAndAudio = videoDetails.data.formats.filter(
          (video) => video.hasAudio && video.hasVideo
        )
        let newVideoDetailes = structuredClone(videoDetails.data)
        newVideoDetailes.formats = videoAndAudio.concat(audio).concat(video)
        console.log(newVideoDetailes)
        setVideoInfo(newVideoDetailes)
        navigator.vibrate(300)
      }

      setisVideoDownloading(false)
      setHelperText('')
    } catch (error) {
      setisVideoDownloading(false)
      setHelperText('')
      setErrors({
        title: 'Fetch error',
        message: error.message,
        isError: true,
      })
      console.log(error)
    }
  }
  return (
    <Stack
      height={'100%'}
      paddingX={3}
      sx={styles.container}
      spacing={2}
      paddingBottom={2}
    >
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
                  onClick={getVideoInfo}
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
          {errors.isError && (
            <Alert severity='error' sx={styles.errorContainer}>
              <AlertTitle>
                {errors.title || 'Error occured while get data'}
              </AlertTitle>
              {errors.message}
            </Alert>
          )}
        </Box>
      </Stack>
      <Stack
        flex={'1'}
        justifyContent={'center'}
        sx={{
          alignItems: 'center',
          padding: {
            xs: 0,
            md: 5,
          },
          position: 'relative',
        }}
      >
        {isVideoDownloading && (
          <Backdrop
            open={true}
            sx={{
              position: 'absolute',
              zIndex: (theme) => theme.zIndex.drawer,
            }}
          >
            <CircularProgress sx={{ color: '#fff' }} />
          </Backdrop>
        )}
        <ErrorBoundary
          fallback={
            <Alert severity='error'>
              <AlertTitle>Error happened</AlertTitle>
              Try reload the app and try again if still contact us
            </Alert>
          }
        >
          {Object.keys(videoInfo).length > 0 ? (
            <VideoInfoCard
              {...videoInfo}
              itag={itag}
              handleItag={handleItagInput}
              isVideoDownloading={isVideoDownloading}
              handleVideoStream={handleVideoStream}
            />
          ) : null}
        </ErrorBoundary>
      </Stack>
    </Stack>
  )
}

export default Content
