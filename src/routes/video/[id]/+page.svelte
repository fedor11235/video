<script lang="ts">
  import type { PageData } from './$types'
  import VideoView from '$lib/components/VideoView.svelte'

  export let data: PageData
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <VideoView videoName={data.id} />
</section>

<style>
</style>
