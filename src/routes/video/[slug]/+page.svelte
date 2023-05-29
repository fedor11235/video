<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="videos">
    {data.title}
    {data.content}
  </div>
</section>

<style>
</style>
