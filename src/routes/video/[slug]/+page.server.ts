import { error } from '@sveltejs/kit';
import type { Load } from "@sveltejs/kit"

/** @type {import('./$types').PageLoad} */
export const load: Load = ({ params }) => {
  console.log(params.slug)
  return {
    title: 'Hello world!',
    content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
  }
}
