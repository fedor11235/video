import { error } from '@sveltejs/kit';
import type { Load } from "@sveltejs/kit"

/** @type {import('./$types').PageLoad} */
export const load: Load = ({ params }) => {
  if (params.slug === '1') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }
  throw error(404, 'Not found');
}
