import ytdl from 'ytdl-core'
import mime from 'mime'
export default async function handler(req, res) {
  const { videoLink, itag } = req.query
  console.log(videoLink)
  console.log(itag)
  if (!videoLink || !itag) {
    res.setHeader('Content-Type', 'application/json')
    res.status(400).json({
      code: 400,
      message: 'Bad request: the video link is missing.',
    })
    return
  }
  try {
    const videoInfo = await ytdl.getInfo(videoLink)
    const format = videoInfo.formats.find((el) => el.itag == itag)
    const videoReadStream = ytdl(videoLink, { format: format })
    const MIME_TYPE = mime.getType(format.mimeType)
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${videoInfo.title}.${format.container}"`
    )
    res.setHeader('Content-Type', MIME_TYPE)
    videoReadStream.pipe(res)
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res
      .status(500)
      .json({ code: 500, message: "couldn't get video stream", error })
  }
}
