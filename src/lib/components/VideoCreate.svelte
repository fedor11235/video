<script lang="ts">
  // import type { ActionData } from './$types'
  import { enhance, applyAction, deserialize } from '$app/forms';
  import { getFilteredPhoto, checkSizeCompatibleOne } from '$lib/helpers/fileCheck'

  import { invalidateAll, goto } from '$app/navigation';
  
  export let form: any

  let photoInput: HTMLInputElement
  let videoInput: HTMLInputElement

  let photoValue: File
  let videoValue: File

  function handlerClickButtonImage() {
    photoInput.click()
  }

  function handlerClickButtonVideo() {
    videoInput.click()
  }

  function handlerChangeInputPhoto() {
    photoValue = photoInput!.files![0]
  }

  function handlerChangeInputVideo() {
    videoValue = videoInput!.files![0]
  }

  async function handleSubmit() {
    const self: HTMLFormElement = this
    const data = new FormData(self)

    console.log(photoValue)
    console.log(videoValue)

    console.log('photoValue', photoValue)

    data.append('image', photoValue)
    data.append('video', videoValue)

    const response = await fetch(self.action, {
      method: 'POST',
      body: data
    });
    /** @type {import('@sveltejs/kit').ActionResult} */
    const result = deserialize(await response.text());

    if (result.type === 'success') {
      await invalidateAll();
    }
    applyAction(result);
  }

</script>

  <input type="file" bind:this={photoInput}  value={form?.image ?? ''} on:change={handlerChangeInputPhoto} class="hide" accept="image/*">
  <input type="file" bind:this={videoInput}  value={form?.file  ?? ''} on:change={handlerChangeInputVideo} class="hide" accept="video/*">

  <form method="post" class="posts"  on:submit|preventDefault={handleSubmit}  use:enhance>
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
    <button class="button" on:click|preventDefault={handlerClickButtonImage}>Загрузить превьюшку</button>
    <button class="button" on:click|preventDefault={handlerClickButtonVideo}>Загрузить видео</button>
    <button class="button" type="submit">Create</button>
  </form>

<style>
  .hide {
    display: none;
  }
  .posts {
    display: flex;
    flex-direction: column;
  }
  .button {
    box-sizing: border-box;
    width: 100%;
    height: 23px;
    text-align: center;
    border: 1px solid black;
    background-color: #f0f0f0;
    color: black;
    cursor: pointer;
    user-select: none;
  }
</style>
