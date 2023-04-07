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
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={thumbnailUrl} title={title} />
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
              return (
                <MenuItem key={video.itag} value={video.itag}>
                  <Stack
                    width={'100%'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    {video.container}
                    {` : ${video.qualityLabel || video.quality}`}
                    {!video.hasAudio && video.hasVideo ? (
                      <VolumeOffIcon size='small' />
                    ) : video.hasAudio && !video.hasVideo ? (
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
