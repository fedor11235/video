<script lang="ts">
  export let videoName: string
</script>

<!-- <div>{video.title}</div>
<div>{video.description}</div>
<div>{video.file}</div>
<div>{video.image}</div> -->

<video  width="225" height="400" controls autoplay>
  <source src="/api/video?name={videoName}" type="video/mp4">
  <track src="./captions_en.vtt" kind="captions" srclang="en" label="english_captions">
</video>

<style>
  video {
    margin-top: 8px;
  }
</style>
