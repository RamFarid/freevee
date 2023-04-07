import ytdl from 'ytdl-core'

export default async function handler(req, res) {
  const { videoLink } = req.query
  let videoId
  if (!videoLink) {
    res.status(400).json({
      code: 400,
      message: 'Bad request: the video link is missing.',
    })
    return
  }
  try {
    const videoInfo = await ytdl.getInfo(videoLink)

    res.status(200).json({
      code: 200,
      data: {
        title: videoInfo.videoDetails.title,
        author: videoInfo.videoDetails.author,
        lengthSeconds: videoInfo.videoDetails.lengthSeconds,
        viewCount: videoInfo.videoDetails.viewCount,
        thumbnailUrl: videoInfo.videoDetails.thumbnails[0].url,
        description: videoInfo.videoDetails.description,
        formats: videoInfo.formats,
      },
    })
  } catch (error) {
    const videoId = error.message.match(/\(([^\)]+)\)/)
    if (!videoId && error.message !== 'Video unavailable') {
      res.status(500).json({
        code: 500,
        message: "couldn't get video information",
        error,
      })
    } else {
      const linkExp = /^[a-zA-Z0-9-_]{11}$/
      if (!linkExp.test(videoId)[1] || error.message === 'Video unavailable') {
        res.status(404).json({
          code: 404,
          message: 'The video you requested does not exist',
        })
        return
      }
    }
  }
}
