import youtubedl from 'youtube-dl-exec'

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
    console.log(videoLink)
    const videoInfo = await youtubedl(videoLink, {
      dumpSingleJson: true,
      noWarnings: true,
      preferFreeFormats: true,
    })
    res.status(200).json({
      code: 200,
      data: {
        title: videoInfo.title,
        author: videoInfo.uploader,
        lengthSeconds: videoInfo.duration,
        viewCount: videoInfo.view_count,
        thumbnailUrl: videoInfo.thumbnail,
        description: videoInfo.description,
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
