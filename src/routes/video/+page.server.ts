import prisma from '$lib/prisma'
import { fail, redirect } from '@sveltejs/kit'
import type { PageServerLoad, Actions } from './$types'
import * as fs from 'fs'
import path from 'path'

const imagesPathDir = 'media/images/'
const videoPathDir  = 'media/videos/'

export const load = (async () => {

  const response = await prisma.video.findMany()

  return { 
    feed: response
  };
}) satisfies PageServerLoad

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    let title      : FormDataEntryValue  | null = data.get("title")
    let description: FormDataEntryValue  | null = data.get("description")
    let video      : FormDataEntryValue  | null = data.get("video")
    let image      : FormDataEntryValue  | null = data.get("image")

    if (!title || !description || !video || !image) return

    const imageFormat = (image as File).type.split('/')[1]
    const videoFormat = (video as File).type.split('/')[1]

    const latestVideos = await prisma.video.findFirst({  orderBy: [
      {
        id: 'desc',
      },
    ]})

    let fileName = 1

    if(latestVideos) {
      fileName = ++latestVideos.id
    }

    console.log(fileName)

    const imagesPathFile = path.join(imagesPathDir, fileName + '.' + imageFormat)
    const videoPathFile  = path.join(videoPathDir,  fileName + '.' + videoFormat)

    console.log(imagesPathFile, videoPathFile)
  
    ;(image as File).arrayBuffer().then((result: ArrayBuffer) => {
      const formArray = new Int8Array(result)
      fs.writeFile(imagesPathFile, formArray, 'binary', (err) => {
        if (err) return console.error(err)
      })
    })

    ;(video as File).arrayBuffer().then((result: ArrayBuffer) => {
      const formArray = new Int8Array(result)
      fs.writeFile(videoPathFile, formArray, 'binary', (err) => {
        if (err) return console.error(err)
      })
    })

    if (typeof title != 'string' || typeof description != 'string') return

    await prisma.video.create({
      data: {
        title,
        description,
        video: videoPathFile,
        image: imagesPathFile,
      },
    });
    // throw redirect(303, `/video`)
  }
} satisfies Actions
