<script lang="ts">
  // import type { ActionData } from './$types'
  import { getFilteredPhoto, checkSizeCompatibleOne } from '$lib/helpers/fileCheck'
  
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

  function handlerClickInputPhoto() {
    console.log('!!!!!')
    const photo = photoInput!.files![0]
    photoValue = photo
  }

  function handlerClickInputVideo() {
    const video = videoInput!.files![0]
    videoValue = video
  }

</script>
  <form method="post" class="posts">
    <h1>Create Video</h1>
    {#if form?.missing}<p class="error">Missing field required!</p>{/if}
    <input
      required
      name="title"
      placeholder="Title"
      type="text"
      value={form?.title ?? ""}
    />
    <input
      required
      name="description"
      placeholder="Description"
      type="text"
      value={form?.description ?? ""}
    />
    <!-- <input
      required
      name="file"
      placeholder="File"
      type="text"
      value={form?.file ?? ""}
    />
    <input
      required
      name="image"
      placeholder="Image"
      type="text"
      value={form?.image ?? ""}
    /> -->
    <input type="file" bind:this={photoInput}  value={form?.file ?? photoValue} on:click={handlerClickInputPhoto} class="hide" accept="image/*">
    <input type="file" bind:this={videoInput}  value={form?.file ?? videoValue} on:click={handlerClickInputVideo} class="hide" accept="video/*">

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
