import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {

  const response = await prisma.video.findMany()

  return { feed: response };
}) satisfies PageServerLoad

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    let title = data.get("title")
    let description = data.get("description")
    let file = data.get("file")
    let image = data.get("image")

    if (!title || !description || !file || !image) {
      return fail(400, { title, description, file, image, missing: true });
    }

    if (typeof title != "string" || typeof description != "string" || typeof file != "string"  || typeof image != "string") {
      return fail(400, { incorrect: true })
    }

    await prisma.video.create({
      data: {
        title,
        description,
        file,
        image
      },
    });

    throw redirect(303, `/`)
  }
} satisfies Actions