import { error } from '@sveltejs/kit'
import prisma from '$lib/prisma'
import type { Load } from "@sveltejs/kit"

export const ssr = false;

const fackeComments = [
  {
    id: 1,
    avatar: '',
    like: 7,
    dislike: 1,
    nick: 'Катя',
    date: '1 год назад',
    text: 'Получилось очень даже не плохо'
  },
  {
    id: 2,
    avatar: '',
    like: 7,
    dislike: 1,
    nick: 'Катя',
    date: '1 год назад',
    text: 'Получилось очень даже не плохо'
  },
  {
    id: 3,
    avatar: '',
    like: 7,
    dislike: 1,
    nick: 'Катя',
    date: '1 год назад',
    text: 'Получилось очень даже не плохо'
  },
  {
    id: 4,
    avatar: '',
    like: 7,
    dislike: 1,
    nick: 'Катя',
    date: '1 год назад',
    text: 'Получилось очень даже не плохо'
  },
  {
    id: 5,
    avatar: '',
    like: 7,
    dislike: 1,
    nick: 'Катя',
    date: '1 год назад',
    text: 'Получилось очень даже не плохо'
  },
  {
    id: 6,
    avatar: '',
    like: 7,
    dislike: 1,
    nick: 'Катя',
    date: '1 год назад',
    text: 'Получилось очень даже не плохо'
  }
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
    description: video.description,
    date: video.createdAt,
    comments: fackeComments
  }
}
