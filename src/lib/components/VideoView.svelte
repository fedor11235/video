<script lang="ts">
  export let videoName: string
  export let videoTitle: string

  const PATH_IMAGES = 'src/media/images/'

  let width
  let height

  setSizeVideo()

  window.addEventListener('resize',(e) => {
    setSizeVideo()
  })

  function setSizeVideo() {
    width = window.innerWidth * 0.6
    height = width * 0.56
  }
</script>

<video  width={width} height={height} controls autoplay>
  <source src="/api/video?name={videoName}" type="video/mp4">
  <track src="./captions_en.vtt" kind="captions" srclang="en" label="english_captions">
</video>

<div
  class="title"
  style="width: {width}px"
>{videoTitle}</div>
<style>
  video {
    background-color: black;
  }
  .title {
    padding: 8px 0;
    font-size: 24px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
