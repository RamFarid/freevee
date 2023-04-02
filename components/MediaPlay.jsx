import React from 'react'

function Video({ type, src, mimeType }) {
  if (type === 'audioonly') {
    return (
      <audio controls>
        <source src={src} type={mimeType} />
      </audio>
    )
  }
  return (
    <video controls height={'80%'} width={'90%'}>
      <source src={src} type={mimeType} />
    </video>
  )
}

export default Video
