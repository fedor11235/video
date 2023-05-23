import { json, type RequestHandler } from '@sveltejs/kit'
import fs from 'fs'

export const GET = (async ({ request }) => {
  const range = request.headers.get('range')
  // console.log(request.params.get('test'))
  if (!range) return json({ message: 'Require range headers' }, { status: 400 })

  const videoPath  = 'media/videos/'
  const videoSize = fs.statSync(videoPath + '1.mp4').size
  

  const CHUNK_SIZE = 500 * 1024
  const start = Number(range?.replace(/\D/g, ''))
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  const contentLength = end - start + 1
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4'
  }

  const options: ResponseInit = {
    status: 206,
    headers
  };

  const videoStream = fs.createReadStream(videoPath, { start, end })

  const responce = new Response(videoStream, options)

  return responce
}) satisfies RequestHandler