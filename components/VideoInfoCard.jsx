import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  FormLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp'
import React from 'react'

function VideoInfoCard({
  title,
  thumbnailUrl,
  description,
  isVideoDownloading,
  itag,
  handleItag,
  formats,
  handleVideoStream,
  videoURL,
}) {
  const formatObj = formats.find((el) => el.itag === itag)
  return (
    <Card sx={{ maxWidth: 345 }}>
      {(formatObj?.container === 'webm' || formatObj?.container === 'mp3') &&
      videoURL.length !== 0 ? (
        <audio controls>
          <source src={videoURL} />
        </audio>
      ) : formatObj?.container === 'mp4' && videoURL.length !== 0 ? (
        <video controls width={'100%'}>
          <source src={videoURL} />
        </video>
      ) : (
        <CardMedia sx={{ height: 140 }} image={thumbnailUrl} title={title} />
      )}
      <CardContent>
        <Typography gutterBottom variant='body1' component='h3'>
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <FormControl
          sx={{
            display: 'flex',
            gap: 1,
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <FormLabel id='video-formats-label'>Formats</FormLabel>
          <TextField
            labelId='video-formats-label'
            id='video-formats'
            value={itag}
            label='Select format'
            onChange={handleItag}
            select
            fullWidth
            disabled={isVideoDownloading}
          >
            {formats.map((video) => {
              if (video.ext === 'mhtml') return
              return (
                <MenuItem key={video.format_id} value={video.format_id}>
                  <Stack
                    width={'100%'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    {video.ext}
                    {` : ${video.format_note}`}
                    {video.acodec === 'none' && video.vcodec !== 'none' ? (
                      <VolumeOffIcon size='small' />
                    ) : video.acodec !== 'none' && video.vcodec === 'none' ? (
                      <VolumeUpSharpIcon size='small' />
                    ) : null}
                  </Stack>
                </MenuItem>
              )
            })}
          </TextField>
        </FormControl>
        <Stack
          direction={'row'}
          justifyContent={'flex-end'}
          width={'100%'}
          padding={'8px 3px 0'}
        >
          <Button
            variant='text'
            disabled={isVideoDownloading}
            onClick={handleVideoStream}
          >
            Get video
          </Button>
        </Stack>
      </CardActions>
    </Card>
  )
}

export default VideoInfoCard
