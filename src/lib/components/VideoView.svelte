<script lang="ts">
  export let videoName: string
  export let videoTitle: string
  export let videoDescription: string
  export let videoDate: string
  export let videoComments: Array<Object>

  const PATH_IMAGES = 'src/media/images/'

  console.log(videoComments)

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

<div
  class="info"
  style="width: {width}px"
>
  <div class="info-part-one">
    <img class="avatar" src="http://localhost:5173/1.jpeg" />
    <div class="channel">
      <div class="nick">апвоут</div>
      <div>2,31 млн подписчиков</div>
    </div>
    <button class="subscribe">subscribe</button>
  </div>

  <div class="info-part-two">
    <button class="like">like</button>
    <button class="dislike">dislike</button>
    <button class="donat">donat</button>
    <button class="share">share</button>
  </div>
</div>

<div
  style="width: {width}px"
  class="description"
>
  <div class="statistics">427 221 просмотр  {videoDate}</div>
  {videoDescription}
</div>

<div
  style="width: {width}px"
  class="new-comment"
>
  <img class="avatar" src="http://localhost:5173/1.jpeg" />
  <input class="comment" placeholder="new comments">
  <button class="smile">smile</button>
  <button class="cancel">cancel</button>
  <button class="leave">leave</button>
</div>

<!-- avatar: '',
like: 7,
dislike: 1,
nick: 'Катя',
text: 'Получилось очень даже не плохо' -->

<div
  style="width: {width}px"
  class="comments"
>
  {#each videoComments as comment (comment.id)}
    <div class="comment">
      <div class="autor">
        <img class="avatar" src="http://localhost:5173/1.jpeg">
        <div class="nick">{comment.nick}</div>
        <div>{comment.date}</div>
      </div>
      <div class="margin text">{comment.text}</div>
      <button class="margin">like: {comment.like}</button>
      <button>dislike: {comment.dislike}</button>
    </div>
  {/each}
</div>

<style lang="scss">
  button {
    cursor: pointer;
  }
  .info {
    display: flex;
    justify-content: space-between;
    &-part-one {
      display: flex;
      gap: 8px;
      .avatar {
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
      .nick {
        font-weight: 700;
      }
      .subscribe {

      }
    }
    &-part-two {
      display: flex;
      gap: 8px;
    }
  }
  .description {
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 12px;
    margin: 12px 0;
    overflow-wrap: anywhere;
    max-height: 164px;
    .statistics {
      color: black;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 12px;
    }
  }
  .new-comment {
    display: flex;
    gap: 8px;
    .avatar {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    input {
      width: 100%;
    }
  }
  .comments {
    .comment {
      margin: 24px 0;
      .autor {
        display: flex;
        align-items: center;
        gap: 12px;
        .nick {
        font-weight: 600;
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .margin {
        margin-left: 52px;
      }
      .text {
        margin-bottom: 12px;
      }
    }
  }
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
