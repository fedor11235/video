<script lang="ts">
  import '@mux/mux-video'
	import VideoView from '$lib/components/VideoView.svelte'
  import VideoCreate from '$lib/components/VideoCreate.svelte'
  import type { PageData, ActionData } from './$types'

  export let form: ActionData
  export let data: PageData
</script>

<svelte:head>
	<title>Videos</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>My Video</h1>
  {#each data.feed as video (video.id)}
    <VideoView videoName={String(video.id)} />
  {/each}
  <VideoCreate form = {form} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
