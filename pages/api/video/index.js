import ytdl from 'ytdl-core'
import mime from 'mime'
export default async function handler(req, res) {
  const { videoLink, filter } = req.query
  console.log(filter)
  console.log(videoLink)
  if (!videoLink) {
    return res.status(400).json({
      code: 400,
      message: 'Bad request: the video link is missing.',
    })
  }
  try {
    let media
    const videoInfo = await ytdl.getInfo(videoLink)
    if (filter === 'videoonly') {
      media = ytdl(videoLink, { quality: 'highestvideo', filter: 'videoonly' })
    } else if (filter === 'audioonly') {
      media = ytdl(videoLink, { quality: 'highestaudio', filter: 'audioonly' })
    } else {
      media = ytdl(videoLink, { quality: 'highest', filter: 'videoandaudio' })
    }
    const format = ytdl.chooseFormat(videoInfo.formats, {
      filter: filter,
      quality:
        filter === 'videoonly'
          ? 'highestvideo'
          : filter === 'audioonly'
          ? 'highestaudio'
          : 'highest',
    })
    const mimeType = mime.getType(format.container)
    res.setHeader('Content-Type', mimeType)
    media.pipe(res)
  } catch (error) {
    return res
      .status(500)
      .json({ code: 500, message: "couldn't get video information", error })
  }
}
