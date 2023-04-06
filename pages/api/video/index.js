import ytdl from 'youtube-dl-exec'
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
    const videoInfo = await ytdl(videoLink, {
      dumpSingleJson: true,
      noWarnings: true,
      preferFreeFormats: true,
    })
    console.log('first')
    const format = videoInfo.formats.find((el) => el.format_id == itag)
    console.log('Second')
    const videoReadStream = ytdl(videoLink, [
      'youtube-dl',
      '-f',
      itag,
      '-o',
      '-',
      videoLink,
    ])
    console.log('Third')
    const MIME_TYPE = mime.getType(format.ext)
    console.log('Fourth')
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${videoInfo.title}.${format.ext}"`
    )
    console.log('fifth')
    res.setHeader('Content-Type', MIME_TYPE)
    console.log('Sixth')
    videoReadStream.pipe(res)
    console.log('Seventh')
  } catch (error) {
    res.setHeader('Content-Type', 'application/json')
    res
      .status(500)
      .json({ code: 500, message: "Couldn't get video stream", error })
  }
}
