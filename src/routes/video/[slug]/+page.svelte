<script lang="ts">
  import type { PageData } from './$types'
  // import VideoView from '$lib/components/VideoView.svelte'

  export let data: PageData
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <!-- <VideoView /> -->
  <div class="videos">
    {data.title}
    {data.content}
  </div>
</section>

<style>
</style>
