<script lang="ts">
  // import type { ActionData } from './$types'
  export let form: any
  // buttonUploadPhoto = document.getElementById('upload-photo')
  // buttonUploadPhoto.addEventListener('click', handlerClickUploadPhoto)
</script>
  <!-- <input type="file" id="photoInput" accept="image/*">
  <input type="file" id="avatarInput" accept="image/*"> -->

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
    <!-- <button class="button"id="upload-avatar">Загрузить превьюшку</button>
    <button class="button"id="upload-photo">Загрузить видео</button> -->
    <input
      name="image"
      placeholder="Image"
      type="text"
      value={form?.image ?? ""}
    />
    <button type="submit">Create</button>
  </form>

<style>
  .posts {
    display: flex;
    flex-direction: column;
  }
</style>
