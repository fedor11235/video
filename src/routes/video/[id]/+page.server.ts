import { error } from '@sveltejs/kit'
import prisma from '$lib/prisma'
import type { Load } from "@sveltejs/kit"
import { fackeComments } from "$src/fakes/data"

export const ssr = false;

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
    description: video.description,
    date: video.createdAt,
    comments: fackeComments
  }
}
