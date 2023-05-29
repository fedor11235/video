<script lang="ts">
  import type { PageData } from './$types'
  import VideoView from '$lib/components/VideoView.svelte'

  export let data: PageData
</script>

<svelte:head>
	<title>Error</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="error">
  <div class="title">
    This video does not exist
  </div>
</section>

<style>
  .error {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 41px;
  }
</style>
