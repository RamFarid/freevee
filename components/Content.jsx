import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
  Alert,
  AlertTitle,
  Select,
  MenuItem,
  CircularProgress,
  Backdrop,
  SwipeableDrawer,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import React, { useState } from 'react'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp'
import MediaPlay from './MediaPlay'
import { useEffect } from 'react'
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
  const [videoURL, setVideoURL] = useState('')
  const [videoInfo, setVideoInfo] = useState({
    title: 'شارموفرز - الحلم / Sharmoofers - El Helm',
    author: {
      id: 'UCNMUETJLeayRYJ4JAQKet6w',
      name: 'Sharmoofers',
      user: '@Sharmoofers',
      channel_url: 'https://www.youtube.com/channel/UCNMUETJLeayRYJ4JAQKet6w',
      external_channel_url:
        'https://www.youtube.com/channel/UCNMUETJLeayRYJ4JAQKet6w',
      user_url: 'http://www.youtube.com/@Sharmoofers',
      thumbnails: [
        {
          url: 'https://yt3.ggpht.com/flvqN6qfjGcnVjBnWPHrG4VENN0HLZy1XV-5C4RUNIrBloqQtqVuxTe6YkylOrksJ5LUndhV=s48-c-k-c0x00ffffff-no-nd-rj',
          width: 48,
          height: 48,
        },
        {
          url: 'https://yt3.ggpht.com/flvqN6qfjGcnVjBnWPHrG4VENN0HLZy1XV-5C4RUNIrBloqQtqVuxTe6YkylOrksJ5LUndhV=s88-c-k-c0x00ffffff-no-nd-rj',
          width: 88,
          height: 88,
        },
        {
          url: 'https://yt3.ggpht.com/flvqN6qfjGcnVjBnWPHrG4VENN0HLZy1XV-5C4RUNIrBloqQtqVuxTe6YkylOrksJ5LUndhV=s176-c-k-c0x00ffffff-no-nd-rj',
          width: 176,
          height: 176,
        },
      ],
      verified: false,
      subscriber_count: 944000,
    },
    lengthSeconds: '257',
    viewCount: '2250166',
    thumbnailUrl:
      'https://i.ytimg.com/vi/1eE2awsg4v8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC8_NMtd6mmgAZzxeJjkTZcSQihhg',
    formats: [
      {
        mimeType: 'video/webm; codecs="vp9"',
        qualityLabel: '720p',
        bitrate: 574128,
        audioBitrate: null,
        itag: 247,
        width: 1280,
        height: 720,
        initRange: {
          start: '0',
          end: '219',
        },
        indexRange: {
          start: '220',
          end: '1077',
        },
        lastModified: '1539978763951254',
        contentLength: '13091635',
        quality: 'hd720',
        fps: 25,
        projectionType: 'RECTANGULAR',
        averageBitrate: 408539,
        colorInfo: {
          primaries: 'COLOR_PRIMARIES_BT709',
          transferCharacteristics: 'COLOR_TRANSFER_CHARACTERISTICS_BT709',
          matrixCoefficients: 'COLOR_MATRIX_COEFFICIENTS_BT709',
        },
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=247&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fwebm&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=13091635&dur=256.360&lmt=1539978763951254&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKCqUtbyY_nZJ2_mUXxpztFXoHe9fHpho4v470srpFZGAiEA6UCgGEMSty5aO9dD4Uwfi7O0p5s9xjgFy1xMCnLPFgc%3D&sig=AOq0QJ8wRQIhAIxLfn1U7yOpIY6U95eE0C0unae85xJ5CNVYhIFewULGAiBHpMaqbxcaX65EjPTN4u0uZk_7-cU_pV0MdU8cUOl6Dw%3D%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'webm',
        codecs: 'vp9',
        videoCodec: 'vp9',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'video/mp4; codecs="avc1.4d401f"',
        qualityLabel: '720p',
        bitrate: 264817,
        audioBitrate: null,
        itag: 136,
        width: 1280,
        height: 720,
        initRange: {
          start: '0',
          end: '713',
        },
        indexRange: {
          start: '714',
          end: '1357',
        },
        lastModified: '1539978625499112',
        contentLength: '4014697',
        quality: 'hd720',
        fps: 25,
        projectionType: 'RECTANGULAR',
        averageBitrate: 125283,
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=136&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=4014697&dur=256.360&lmt=1539978625499112&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgS0DBIccxALuwdLABlq4zD17kXnWA4NVpnKB4rhmv0rECIQDcNE-oBtS2yk6qVOHT4aLOvm-29BVlb-nsnYN0lEzBrg%3D%3D&sig=AOq0QJ8wRgIhAPxyAdlTwGOuFglgGmLzAKJVa1_1LJmqR7V3kN0G3_9dAiEA-hZlSZZM0f2CO_IrwtPYC_AjmkxpHtT4jxJA8A-dYhQ%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'mp4',
        codecs: 'avc1.4d401f',
        videoCodec: 'avc1.4d401f',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        itag: 398,
        mimeType: 'video/mp4; codecs="av01.0.05M.08"',
        bitrate: 255634,
        width: 1280,
        height: 720,
        initRange: {
          start: '0',
          end: '699',
        },
        indexRange: {
          start: '700',
          end: '1343',
        },
        lastModified: '1631123060783906',
        contentLength: '5714293',
        quality: 'hd720',
        fps: 25,
        qualityLabel: '720p',
        projectionType: 'RECTANGULAR',
        averageBitrate: 178320,
        colorInfo: {
          primaries: 'COLOR_PRIMARIES_BT709',
          transferCharacteristics: 'COLOR_TRANSFER_CHARACTERISTICS_BT709',
          matrixCoefficients: 'COLOR_MATRIX_COEFFICIENTS_BT709',
        },
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=398&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=5714293&dur=256.360&lmt=1631123060783906&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5436434&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgRQWA_dfcHN1FYK7It-xdoiBBzRQ_BOd4hplpash5P3kCICSq6xpBU7c-xf5IhRpfOL4LsFF1qIzlja8tIJ-I85UG&sig=AOq0QJ8wRgIhALMymlqFG5HBdAE0AMyvoOkWWTqKQKyD_x_F7WO5VOU9AiEArWtYGtB3LKsE8V_hCdUn5WTVKWuVPxUGY-sMCngVdTY%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'mp4',
        codecs: 'av01.0.05M.08',
        videoCodec: 'av01.0.05M.08',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'video/webm; codecs="vp9"',
        qualityLabel: '480p',
        bitrate: 236868,
        audioBitrate: null,
        itag: 244,
        width: 854,
        height: 480,
        initRange: {
          start: '0',
          end: '219',
        },
        indexRange: {
          start: '220',
          end: '1077',
        },
        lastModified: '1539978763928836',
        contentLength: '4172159',
        quality: 'large',
        fps: 25,
        projectionType: 'RECTANGULAR',
        averageBitrate: 130196,
        colorInfo: {
          primaries: 'COLOR_PRIMARIES_BT709',
          transferCharacteristics: 'COLOR_TRANSFER_CHARACTERISTICS_BT709',
          matrixCoefficients: 'COLOR_MATRIX_COEFFICIENTS_BT709',
        },
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=244&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fwebm&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=4172159&dur=256.360&lmt=1539978763928836&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAIIEXtfHQMFBASz7i3Kjt6DLLwEJWl1jvUibzlOow-rTAiEA12PqU7Ixqg7tPFQl4ldRKyXQOJUTvftbg6tjrrc8H7Q%3D&sig=AOq0QJ8wRgIhANXRJYHv69VadTYfnjGACrjOo7UlaCkq5-xAVCiorSD0AiEA5plyxMYsw91m8TFLkZMsGGMew-ttQdmSFsX5fi3ZFQk%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'webm',
        codecs: 'vp9',
        videoCodec: 'vp9',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        itag: 397,
        mimeType: 'video/mp4; codecs="av01.0.04M.08"',
        bitrate: 138545,
        width: 854,
        height: 480,
        initRange: {
          start: '0',
          end: '699',
        },
        indexRange: {
          start: '700',
          end: '1343',
        },
        lastModified: '1631123039507494',
        contentLength: '3383504',
        quality: 'large',
        fps: 25,
        qualityLabel: '480p',
        projectionType: 'RECTANGULAR',
        averageBitrate: 105586,
        colorInfo: {
          primaries: 'COLOR_PRIMARIES_BT709',
          transferCharacteristics: 'COLOR_TRANSFER_CHARACTERISTICS_BT709',
          matrixCoefficients: 'COLOR_MATRIX_COEFFICIENTS_BT709',
        },
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=397&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=3383504&dur=256.360&lmt=1631123039507494&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5436434&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgepV1YTPNA3fiTtpWxcDEX7RmjgX0Na-UrLTQHS7Bb4ICIQCzl_7inkbOWIGr50dfZODvol42SZlzrPkxONTixqNPQw%3D%3D&sig=AOq0QJ8wRQIgStB1dUHWJ0UvflXOxJ_EYxad0CuroZuI4OIvXMtB7sgCIQDyprvBh1VOdMQPKx-ucVV8WTxqZn_L88Na8mB6usomTQ%3D%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'mp4',
        codecs: 'av01.0.04M.08',
        videoCodec: 'av01.0.04M.08',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'video/mp4; codecs="avc1.4d401e"',
        qualityLabel: '480p',
        bitrate: 131257,
        audioBitrate: null,
        itag: 135,
        width: 854,
        height: 480,
        initRange: {
          start: '0',
          end: '714',
        },
        indexRange: {
          start: '715',
          end: '1358',
        },
        lastModified: '1539978625384636',
        contentLength: '2301704',
        quality: 'large',
        fps: 25,
        projectionType: 'RECTANGULAR',
        averageBitrate: 71827,
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=135&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=2301704&dur=256.360&lmt=1539978625384636&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKbpgE3L_EhDZ8EAX3-OpqpvGhmRv68OhCbEi_WgI5B4AiEAtchhLUaMh3_zv_gYMVKndkx0uvzniIGDWQhg96nm11Y%3D&sig=AOq0QJ8wRgIhAO-VOVKRg5sLvWL0x0rzKS2iYY4HfqA0XumM9TV5ySZyAiEAzkl9c11dB-Mg-QkseN3lOMfq3bldNmzsTwhmlEguFoA%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'mp4',
        codecs: 'avc1.4d401e',
        videoCodec: 'avc1.4d401e',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'video/webm; codecs="vp9"',
        qualityLabel: '360p',
        bitrate: 162854,
        audioBitrate: null,
        itag: 243,
        width: 640,
        height: 360,
        initRange: {
          start: '0',
          end: '219',
        },
        indexRange: {
          start: '220',
          end: '1077',
        },
        lastModified: '1539978763970737',
        contentLength: '3851667',
        quality: 'medium',
        fps: 25,
        projectionType: 'RECTANGULAR',
        averageBitrate: 120195,
        colorInfo: {
          primaries: 'COLOR_PRIMARIES_BT709',
          transferCharacteristics: 'COLOR_TRANSFER_CHARACTERISTICS_BT709',
          matrixCoefficients: 'COLOR_MATRIX_COEFFICIENTS_BT709',
        },
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=243&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fwebm&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=3851667&dur=256.360&lmt=1539978763970737&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgaw_M9LkE03c5C7iaOc7giDH3l8iOPYoDtAdePyLEZSECIQC8u_iAf5BoAQ6sBvUh7kzMQ_pTnpHF-P_EQb-HoCdZIw%3D%3D&sig=AOq0QJ8wRQIhALa4ct-Le1vygHwkXoY-LbIr75LDZd9l3MJQx70JQuN4AiADfE6g_xPhy65HMLmVgNAc_aNf0KN_LMltEUcZAK4ckg%3D%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'webm',
        codecs: 'vp9',
        videoCodec: 'vp9',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        itag: 396,
        mimeType: 'video/mp4; codecs="av01.0.01M.08"',
        bitrate: 98123,
        width: 640,
        height: 360,
        initRange: {
          start: '0',
          end: '699',
        },
        indexRange: {
          start: '700',
          end: '1343',
        },
        lastModified: '1631123030842293',
        contentLength: '2391994',
        quality: 'medium',
        fps: 25,
        qualityLabel: '360p',
        projectionType: 'RECTANGULAR',
        averageBitrate: 74644,
        colorInfo: {
          primaries: 'COLOR_PRIMARIES_BT709',
          transferCharacteristics: 'COLOR_TRANSFER_CHARACTERISTICS_BT709',
          matrixCoefficients: 'COLOR_MATRIX_COEFFICIENTS_BT709',
        },
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=396&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=2391994&dur=256.360&lmt=1631123030842293&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5436434&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgZ8peJVgCr_HYvA6a_RGPqF8TuKnxAk0chPbKsyJomcUCIAIWL_UBzotZNXppLLoIpFVaslHN3Osx3HxcTDI-mun4&sig=AOq0QJ8wRQIgCDN518WpDNyAQBkNjY0ah2izhdbFcGnhDwvycUnaL0kCIQDMvJtEVNqxp2VB2tVre7c0GOLRxeF_TXj2RuKZtRphRg%3D%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'mp4',
        codecs: 'av01.0.01M.08',
        videoCodec: 'av01.0.01M.08',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'video/mp4; codecs="avc1.4d401e"',
        qualityLabel: '360p',
        bitrate: 71484,
        audioBitrate: null,
        itag: 134,
        width: 640,
        height: 360,
        initRange: {
          start: '0',
          end: '714',
        },
        indexRange: {
          start: '715',
          end: '1358',
        },
        lastModified: '1539978625287981',
        contentLength: '1329199',
        quality: 'medium',
        fps: 25,
        projectionType: 'RECTANGULAR',
        averageBitrate: 41479,
        highReplication: true,
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=134&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=1329199&dur=256.360&lmt=1539978625287981&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAL2K1MwkIVeQD3jmCbrMLHt7Y5c069tGuEMyuwD7XMt4AiEAur3X3It7zBqenZR7Z9-5Ms462w5SKUdYtN0SsnHMYnI%3D&sig=AOq0QJ8wRAIgBmatNp3hlSLc3ZGhCLwdBzi7umIJ-p_hgmTXrcsLglECIAgTWNeg5vIN02Jbke1KVLakH9JBmt7EVmjTPeuoOwcS',
        hasVideo: true,
        hasAudio: false,
        container: 'mp4',
        codecs: 'avc1.4d401e',
        videoCodec: 'avc1.4d401e',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'video/webm; codecs="vp9"',
        qualityLabel: '240p',
        bitrate: 87551,
        audioBitrate: null,
        itag: 242,
        width: 426,
        height: 240,
        initRange: {
          start: '0',
          end: '218',
        },
        indexRange: {
          start: '219',
          end: '1075',
        },
        lastModified: '1539978763967159',
        contentLength: '2214411',
        quality: 'small',
        fps: 25,
        projectionType: 'RECTANGULAR',
        averageBitrate: 69103,
        colorInfo: {
          primaries: 'COLOR_PRIMARIES_BT709',
          transferCharacteristics: 'COLOR_TRANSFER_CHARACTERISTICS_BT709',
          matrixCoefficients: 'COLOR_MATRIX_COEFFICIENTS_BT709',
        },
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=242&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fwebm&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=2214411&dur=256.360&lmt=1539978763967159&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgPExqJ64dKSaKhO3Yws7N-dbaTkJlDjAn_o11wVDYWR4CIQDfEkfDfo1SX4QrU19ATj45WJbp3pKcAzBLQb4VAf1_KA%3D%3D&sig=AOq0QJ8wRgIhAJgcr2CH9_sWQCfwpOVorMuxITkw7O5r3tsPfm2QK64QAiEA8lK239tI9wJd4M3CdVT7L0kUHj9bVA1XzWmSpoLUhQw%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'webm',
        codecs: 'vp9',
        videoCodec: 'vp9',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        itag: 395,
        mimeType: 'video/mp4; codecs="av01.0.00M.08"',
        bitrate: 56489,
        width: 426,
        height: 240,
        initRange: {
          start: '0',
          end: '699',
        },
        indexRange: {
          start: '700',
          end: '1343',
        },
        lastModified: '1631123028480018',
        contentLength: '1422504',
        quality: 'small',
        fps: 25,
        qualityLabel: '240p',
        projectionType: 'RECTANGULAR',
        averageBitrate: 44390,
        colorInfo: {
          primaries: 'COLOR_PRIMARIES_BT709',
          transferCharacteristics: 'COLOR_TRANSFER_CHARACTERISTICS_BT709',
          matrixCoefficients: 'COLOR_MATRIX_COEFFICIENTS_BT709',
        },
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=395&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=1422504&dur=256.360&lmt=1631123028480018&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5436434&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAK9jk1miCLlEMcSd5lJ22D_T5r-putmSZFotegERuuOVAiEAmy_kdlDQIwKHerrnHnlVR-yxh3i4NJPwmhTPXytGNdU%3D&sig=AOq0QJ8wRAIgWOmwWpCPsFUTABav9fed0Lw8ocLha1CCiDQAHTbR3L0CIHlXnI7lYnrpneSe0KaZlgfZoWqLptf93Tx7Rq5jdyyX',
        hasVideo: true,
        hasAudio: false,
        container: 'mp4',
        codecs: 'av01.0.00M.08',
        videoCodec: 'av01.0.00M.08',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'video/mp4; codecs="avc1.4d4015"',
        qualityLabel: '240p',
        bitrate: 31406,
        audioBitrate: null,
        itag: 133,
        width: 426,
        height: 240,
        initRange: {
          start: '0',
          end: '713',
        },
        indexRange: {
          start: '714',
          end: '1357',
        },
        lastModified: '1539978625280686',
        contentLength: '636941',
        quality: 'small',
        fps: 25,
        projectionType: 'RECTANGULAR',
        averageBitrate: 19876,
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=133&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=636941&dur=256.360&lmt=1539978625280686&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAK9Iz9afTE2TgGm2qWJPb82Hy_gYt3hN5Q6SrlJEq16WAiBQ3JahBNl8vg9FTm2syzNUem-Jf_LdIUcn8svLthUGjw%3D%3D&sig=AOq0QJ8wRQIgbJ12wYahmsHxswZ74eslzNNDJAj7Ah5HNpu18fW7oFYCIQDpJs8zNmD059FoJEXaNy8lb6WJMT6GAhJ5MQIaV4MNxg%3D%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'mp4',
        codecs: 'avc1.4d4015',
        videoCodec: 'avc1.4d4015',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'video/webm; codecs="vp9"',
        qualityLabel: '144p',
        bitrate: 56753,
        audioBitrate: null,
        itag: 278,
        width: 256,
        height: 144,
        initRange: {
          start: '0',
          end: '217',
        },
        indexRange: {
          start: '218',
          end: '1073',
        },
        lastModified: '1539978763923844',
        contentLength: '990101',
        quality: 'tiny',
        fps: 25,
        projectionType: 'RECTANGULAR',
        averageBitrate: 30897,
        colorInfo: {
          primaries: 'COLOR_PRIMARIES_BT709',
          transferCharacteristics: 'COLOR_TRANSFER_CHARACTERISTICS_BT709',
          matrixCoefficients: 'COLOR_MATRIX_COEFFICIENTS_BT709',
        },
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=278&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fwebm&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=990101&dur=256.360&lmt=1539978763923844&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgKRnSyRPKNE6hgRnHH0v_9qpXrMPf9JYlom7LvEZXv1ECIQDsZKoQxbQwbcSZ0MCFUnvRw7Kj2ruNNoU8kOZZ9TXsew%3D%3D&sig=AOq0QJ8wRgIhAM6LWDofbuk0NKIJqcaMIaZWYfjHd3DYnuMP-yL_1VhRAiEAmvZOj6DHac3ANNnp6jbrDPpiwx_PpXv1_FJkMAzPSTs%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'webm',
        codecs: 'vp9',
        videoCodec: 'vp9',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        itag: 394,
        mimeType: 'video/mp4; codecs="av01.0.00M.08"',
        bitrate: 49825,
        width: 256,
        height: 144,
        initRange: {
          start: '0',
          end: '699',
        },
        indexRange: {
          start: '700',
          end: '1343',
        },
        lastModified: '1631123031122609',
        contentLength: '1148891',
        quality: 'tiny',
        fps: 25,
        qualityLabel: '144p',
        projectionType: 'RECTANGULAR',
        averageBitrate: 35852,
        colorInfo: {
          primaries: 'COLOR_PRIMARIES_BT709',
          transferCharacteristics: 'COLOR_TRANSFER_CHARACTERISTICS_BT709',
          matrixCoefficients: 'COLOR_MATRIX_COEFFICIENTS_BT709',
        },
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=394&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=1148891&dur=256.360&lmt=1631123031122609&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5436434&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgKjDwtn1CWYdINRsX92pbgsjawkv1B4mSrNN6go1mZ-MCIQCvq6sIfX20l_wVQVt9a8MdVfUgZckT7t3TaUVt4GWtkw%3D%3D&sig=AOq0QJ8wRAIgHdYJX3mlBHqk4pKjXqhf4MhToLvuHd32t96RNDfCqPsCIBqgRNtzAJCJ5yenTcEbWE5bj3aG4pzfpEVlfRsec9w9',
        hasVideo: true,
        hasAudio: false,
        container: 'mp4',
        codecs: 'av01.0.00M.08',
        videoCodec: 'av01.0.00M.08',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'video/mp4; codecs="avc1.4d400c"',
        qualityLabel: '144p',
        bitrate: 18595,
        audioBitrate: null,
        itag: 160,
        width: 256,
        height: 144,
        initRange: {
          start: '0',
          end: '712',
        },
        indexRange: {
          start: '713',
          end: '1356',
        },
        lastModified: '1539978625244684',
        contentLength: '418884',
        quality: 'tiny',
        fps: 25,
        projectionType: 'RECTANGULAR',
        averageBitrate: 13071,
        approxDurationMs: '256360',
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=160&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=418884&dur=256.360&lmt=1539978625244684&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgSUrBmN-lQHOt9tD2b_X-0dLQIFdNLKxyzJrDmn9-ex4CIQCvP1GxtNZWMNWso2UD0wGPCc5z6v1q73-tlmwY92hzxQ%3D%3D&sig=AOq0QJ8wRgIhAIbsLNnysi5DVdOCUUaOuROWopGs556aDaIZ-pgx_NWVAiEAnOeCnQxIoR1EKH8Ecf1TLDK0_qDNjlLtnjHWbM3b-xU%3D',
        hasVideo: true,
        hasAudio: false,
        container: 'mp4',
        codecs: 'avc1.4d400c',
        videoCodec: 'avc1.4d400c',
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'audio/webm; codecs="opus"',
        qualityLabel: null,
        bitrate: 170326,
        audioBitrate: 160,
        itag: 251,
        initRange: {
          start: '0',
          end: '265',
        },
        indexRange: {
          start: '266',
          end: '704',
        },
        lastModified: '1539979425451439',
        contentLength: '4769062',
        quality: 'tiny',
        projectionType: 'RECTANGULAR',
        averageBitrate: 148811,
        audioQuality: 'AUDIO_QUALITY_MEDIUM',
        approxDurationMs: '256381',
        audioSampleRate: '48000',
        audioChannels: 2,
        loudnessDb: 2.4258966,
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=251&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=audio%2Fwebm&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=4769062&dur=256.381&lmt=1539979425451439&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5411222&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAM595x7NLcHxJ1z1RNqt6kbVGz4y3wr-6KXVs96LA5ddAiAENZLbBXTzmJ4s2yRF7L1SWyNak0sJ1CjrdZrBnDb3aA%3D%3D&sig=AOq0QJ8wRgIhAM845J0wXUw7nmAmM14LhdeoPIP3aCYcvUComitmbgdMAiEAxunGV6FTul7NgnjqZfltAC5XkmEcjFYN2_P2ZLB8RIk%3D',
        hasVideo: false,
        hasAudio: true,
        container: 'webm',
        codecs: 'opus',
        videoCodec: null,
        audioCodec: 'opus',
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'audio/mp4; codecs="mp4a.40.2"',
        qualityLabel: null,
        bitrate: 128155,
        audioBitrate: 128,
        itag: 140,
        initRange: {
          start: '0',
          end: '591',
        },
        indexRange: {
          start: '592',
          end: '935',
        },
        lastModified: '1539978592528392',
        contentLength: '4073198',
        quality: 'tiny',
        projectionType: 'RECTANGULAR',
        averageBitrate: 127080,
        highReplication: true,
        audioQuality: 'AUDIO_QUALITY_MEDIUM',
        approxDurationMs: '256417',
        audioSampleRate: '44100',
        audioChannels: 2,
        loudnessDb: 2.4258966,
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=140&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=audio%2Fmp4&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=4073198&dur=256.417&lmt=1539978592528392&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5432432&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAJs5evwb6w29dEhzaVFH23g0RWxSVzu6_jJBB6u5AlIXAiA7vQuugqq8ijhm2W7S-IOFVN_i-jwa7w_TE1cKN9xzDA%3D%3D&sig=AOq0QJ8wRgIhAPeC_if3RqqktzWv2LNeVll37G7EKa9xb1yjVO4cMJw3AiEA1g6jU2WhgrNIryKxdRFgq4bnRbn-hiYaTCZapfmOLv0%3D',
        hasVideo: false,
        hasAudio: true,
        container: 'mp4',
        codecs: 'mp4a.40.2',
        videoCodec: null,
        audioCodec: 'mp4a.40.2',
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'audio/webm; codecs="opus"',
        qualityLabel: null,
        bitrate: 86347,
        audioBitrate: 64,
        itag: 250,
        initRange: {
          start: '0',
          end: '265',
        },
        indexRange: {
          start: '266',
          end: '704',
        },
        lastModified: '1539979424655510',
        contentLength: '2410990',
        quality: 'tiny',
        projectionType: 'RECTANGULAR',
        averageBitrate: 75231,
        audioQuality: 'AUDIO_QUALITY_LOW',
        approxDurationMs: '256381',
        audioSampleRate: '48000',
        audioChannels: 2,
        loudnessDb: 2.4258966,
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=250&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=audio%2Fwebm&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=2410990&dur=256.381&lmt=1539979424655510&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5411222&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgFvGco_gid2gDvrkQgwHrjeB4ljrytL__YIJ8k5XXp28CIQD3TYMF6IrTF9jyJHhGj1rKcewnn4CVcMyY6WV_SsoUkg%3D%3D&sig=AOq0QJ8wRAIgQ2gZbkegnr_G4XDU9Zo42NwdBirUh6zzz0d_-kalQakCIC7PN9Tl8JAcO2m-ys89rN8UBG5c8aZxhhpfquGJDz-5',
        hasVideo: false,
        hasAudio: true,
        container: 'webm',
        codecs: 'opus',
        videoCodec: null,
        audioCodec: 'opus',
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'audio/webm; codecs="opus"',
        qualityLabel: null,
        bitrate: 63979,
        audioBitrate: 48,
        itag: 249,
        initRange: {
          start: '0',
          end: '265',
        },
        indexRange: {
          start: '266',
          end: '703',
        },
        lastModified: '1539979424630038',
        contentLength: '1801636',
        quality: 'tiny',
        projectionType: 'RECTANGULAR',
        averageBitrate: 56217,
        audioQuality: 'AUDIO_QUALITY_LOW',
        approxDurationMs: '256381',
        audioSampleRate: '48000',
        audioChannels: 2,
        loudnessDb: 2.4258966,
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=249&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=audio%2Fwebm&ns=31JdReqID3cYdzSsp1zkYzIM&gir=yes&clen=1801636&dur=256.381&lmt=1539979424630038&mt=1680567429&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5411222&n=PXm5GOB1yrbYkg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAOCAlp_VHUJ8DOSLZJ_w-zrsBI45eFrQhpz6-_CCmMtqAiEA_d8d5D3j7LbsJ1ZjoSQfdIkH9L2etAW2eloMTcwTw7k%3D&sig=AOq0QJ8wRAIgZcKVXEVcwCVGfFEkVWeqfaggjvHBuc9wQPG7oDVGYcoCIFGGItGQ0DD3TP8QxEu6mPd7YfiSDKvT1Bh-JO1PQ8G8',
        hasVideo: false,
        hasAudio: true,
        container: 'webm',
        codecs: 'opus',
        videoCodec: null,
        audioCodec: 'opus',
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
      {
        mimeType: 'video/mp4; codecs="avc1.42001E, mp4a.40.2"',
        qualityLabel: '360p',
        bitrate: 167516,
        audioBitrate: 96,
        itag: 18,
        width: 640,
        height: 360,
        lastModified: '1664093162527115',
        quality: 'medium',
        fps: 25,
        projectionType: 'RECTANGULAR',
        audioQuality: 'AUDIO_QUALITY_LOW',
        approxDurationMs: '256417',
        audioSampleRate: '44100',
        audioChannels: 2,
        url: 'https://rr2---sn-uxaxjvhxbt2u-j5pel.googlevideo.com/videoplayback?expire=1680589464&ei=OG4rZMXNEcWuxN8PosuqgAk&ip=156.215.163.177&id=o-AN7Ml72S5QgQoJDFQI5ZRweCOG11gv_GkrbE0jkdnGIk&itag=18&source=youtube&requiressl=yes&mh=dd&mm=31%2C29&mn=sn-uxaxjvhxbt2u-j5pel%2Csn-hpa7znzy&ms=au%2Crdu&mv=m&mvi=2&pl=19&initcwndbps=353750&vprv=1&mime=video%2Fmp4&ns=mMMT63hBgQ4RnK4jGkroCY8M&cnr=14&ratebypass=yes&dur=256.417&lmt=1664093162527115&mt=1680567429&fvip=3&fexp=24007246&c=WEB&txp=5438434&n=MDjbIZVX3yJvCg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALLiFv7bYAK0hnD2yztGt-cEcfJRFhYElbfIAZKEWBCOAiEAquK6umfYB1Xvc9yGjdGeQ2yLQ3q8aXJaEme4kI8RtSk%3D&sig=AOq0QJ8wRAIgSgXcpiulbncfgaKEZRdLHL5ASiuYkLEUlpijH9fnEEMCIGIZkbr4qnWd352dOp9_RIBzM-Kow2H0T8vdL6ghiUC9',
        hasVideo: true,
        hasAudio: true,
        container: 'mp4',
        codecs: 'avc1.42001E, mp4a.40.2',
        videoCodec: 'avc1.42001E',
        audioCodec: 'mp4a.40.2',
        isLive: false,
        isHLS: false,
        isDashMPD: false,
      },
    ],
  })

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

    try {
      setVideoURL('')
      setHelperText('')
      setErrors({
        isError: false,
        title: '',
        message: '',
      })
      setisVideoDownloading(true)
      const response = await fetch(
        `/api/video?videoLink=${videoLink}&itag=${itag}`
      )
      console.log(response.status)
      console.log(response)
      if (response.status !== 200) {
        console.log('Enter')
        const errorResponse = await response.json()
        if (errorResponse.code === 400)
          setErrors({
            isError: true,
            title: 'Missing something',
            message: `${errorResponse.message}, try put it in the above input without click the button to extract info`,
          })
        if (errorResponse.code === 500)
          setErrors({
            isError: true,
            title: 'Server error',
            message: `${errorResponse.message}, try agin and if theis error still happen contact me from social links in the top of the page`,
          })
        setisVideoDownloading(false)
        return
      }
      const blob = await response.blob()
      const videoURL = URL.createObjectURL(blob)
      setErrors({
        isError: false,
        title: '',
        message: '',
      })
      setisVideoDownloading(false)
      setVideoURL(videoURL)
    } catch (error) {
      console.log(error)
      setisVideoDownloading(false)
      setErrors({
        isError: true,
        title: 'Get video error',
        message: `Error happend while get the video ${error}`,
      })
    }
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
      setVideoURL('')
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
        setErrors({
          isError: false,
          title: '',
          message: '',
        })
        setVideoInfo(videoDetails.data)
      }
      setisVideoDownloading(false)
      console.log(videoDetails)
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
          padding: 5,
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
        {Object.keys(videoInfo).length > 0 ? (
          <VideoInfoCard
            {...videoInfo}
            itag={itag}
            handleItag={handleItagInput}
            videoURL={videoURL}
            isVideoDownloading={isVideoDownloading}
            handleVideoStream={handleVideoStream}
          />
        ) : null}
      </Stack>
    </Stack>
  )
}

export default Content
