<script lang="ts">
  import '@mux/mux-video'
	import VideoView from '$lib/components/VideoView.svelte'
  import VideoCreate from '$lib/components/VideoCreate.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div>
    {#each data.feed as video (video.id)}
      <VideoView videoName={String(video.id)} />
    {/each}
  </div>
  <VideoCreate />
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
