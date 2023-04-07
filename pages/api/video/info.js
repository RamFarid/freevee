import ytdl from 'ytdl-core'

export default async function handler(req, res) {
  const { videoLink } = req.query
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
        thumbnailUrl: videoInfo.videoDetails.thumbnail.thumbnails[0].url,
        description: videoInfo.videoDetails.description,
        formats: videoInfo.formats,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      code: 500,
      message: "couldn't get video information",
      error,
    })
  }
}
