import { json, type RequestHandler } from '@sveltejs/kit'
import type { ReadStream } from 'fs'
import fs from 'fs'

export const GET = (async ({ request }) => {
  const range = request.headers.get('range')
  const parsedUrl = new URL(request.url)
  const videoName = parsedUrl.searchParams.get("name")
  if (!range) return json({ message: 'Require range headers' }, { status: 400 })

  const videoPath  = 'src/media/videos/'
  const videoFullPath = videoPath + videoName + '.mp4'
  const videoSize = fs.statSync(videoFullPath).size
  

  const CHUNK_SIZE = 500 * 1024
  const start = Number(range?.replace(/\D/g, ''))
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  const contentLength = end - start + 1
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': String(contentLength),
    'Content-Type': 'video/mp4'
  }

  const options: ResponseInit = {
    status: 206,
    headers
  };

  const videoStream: ReadStream = fs.createReadStream(videoFullPath, { start, end })

  // if (!videoStream) return json({ message: 'Require range headers' }, { status: 400 })

  const responce = new Response((videoStream as any), options)

  return responce
  // return json({ message: 'LOLO' }, { status: 200 })
}) satisfies RequestHandler
