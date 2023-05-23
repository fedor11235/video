<script lang="ts">
  import '@mux/mux-video'
	// import Video from '$lib/components/Video.svelte'
  import type { PageData, ActionData } from './$types'

  export let form: ActionData
  export let data: PageData
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>My Blog</h1>
  <main>
    <!-- <div>
      {#each data.feed as video (video.id)}
        <div>{video.title}</div>
        <div>{video.description}</div>
        <div>{video.file}</div>
        <div>{video.image}</div>
      {/each}
    </div> -->
    <form method="post" class="posts">
      <h1>Create Video</h1>
      {#if form?.missing}<p class="error">Missing field required!</p>{/if}
      <input
        name="title"
        placeholder="Title"
        type="text"
        value={form?.title ?? ""}
      />
      <input
        name="description"
        placeholder="Description"
        type="text"
        value={form?.description ?? ""}
      />
      <input
        name="file"
        placeholder="File"
        type="text"
        value={form?.file ?? ""}
      />
      <input
        name="image"
        placeholder="Image"
        type="text"
        value={form?.image ?? ""}
      />
      <button type="submit">Create</button>
    </form>
    <video  width="225" height="400" controls autoplay>
      <source src="/api/video?test=6" type="video/mp4">
      <track src="./captions_en.vtt" kind="captions" srclang="en" label="english_captions">
    </video>
  </main>
</section>

<style>
  video {
    margin-top: 8px;
  }
  .posts {
    display: flex;
    flex-direction: column;
  }
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
