<script lang="ts">
  import '@mux/mux-video'
  import VideoPreview from '$lib/components/VideoPreview.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<svelte:head>
	<title>Video</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="videos">
    {#each data.feed as video (video.id)}
      <VideoPreview video={video} />
    {/each}
  </div>
</section>

<style>
  .videos {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-around;
  }
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
