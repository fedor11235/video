<script lang="ts">
	// import Video from '$lib/components/Video.svelte'
  import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>My Blog</h1>
  <main>
    <div>
      <!-- 2. -->
      {#each data.feed as video (video.id)}
        <!-- <Video {video} /> -->
        {video}
      {/each}
    </div>
  </main>
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
