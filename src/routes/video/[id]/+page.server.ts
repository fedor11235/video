import { error } from '@sveltejs/kit'
import prisma from '$lib/prisma'
import type { Load } from "@sveltejs/kit"

export const ssr = false;

const fackeComments = [
  {},
  {},
  {},
  {},
  {},
  {}
]

/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ params }) => {

  const id = Number(params.id)

  if(isNaN(id)) {
    throw error(404, 'Not found')
  }

  const video = await prisma.video.findFirst({ where: {
    id: id
  }})

  if(video === null) {
    throw error(404, 'Not found')
  }

  return {
    id: params.id,
    title: video.title,
    comments: fackeComments
  }
}
