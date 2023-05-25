<script lang="ts">
  import { deserialize } from '$app/forms';
  import { invalidateAll } from '$app/navigation';

  let photoInput : HTMLInputElement
  let videoInput : HTMLInputElement

  let title      : string
  let description: string

  let photoValue : File | null
  let videoValue : File | null

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

  async function handlerSubmit() {
    const data = new FormData()

    if(!photoValue) {
      alert('вы не выбрали превью для вашего видео')
      return
    }

    if(!videoValue) {
      alert('вы не выбрали видео')
      return
    }

    if(!title) {
      alert('вы не выбрали название видео')
      return
    }

    if(!description) {
      alert('вы не выбрали описание к видео')
      return
    }

    data.append('title', title)
    data.append('description', description)
    data.append('image', photoValue)
    data.append('video', videoValue)

    const response = await fetch('/video', {
      method: 'POST',
      body: data
    })

    /** @type {import('@sveltejs/kit').ActionResult} */
    const result = deserialize(await response.text());

    if (result.type === 'success') {
      await invalidateAll();
      title       = ''
      description = ''
      photoValue  = null
      videoValue  = null
    }
  }

</script>

  <input type="file" bind:this={photoInput} on:change={handlerChangeInputPhoto} class="hide" accept="image/*">
  <input type="file" bind:this={videoInput} on:change={handlerChangeInputVideo} class="hide" accept="video/*">

  <div class="posts">
    <input
      name="title"
      placeholder="Title"
      type="text"
      bind:value={title}
    />
    <input
      name="description"
      placeholder="Description"
      type="text"
      bind:value={description}
    />
    <button class="button" on:click={handlerClickButtonImage}>Загрузить превьюшку</button>
    <button class="button" on:click={handlerClickButtonVideo}>Загрузить видео</button>
    <button class="button" on:click={handlerSubmit}>Create</button>
  </div>

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
