<script lang="ts">
  export let video: any
  const PATH_IMAGES = 'src/media/images/'
  const URL_VIEW    = 'video/'
</script>
<a href={URL_VIEW + video.id} class="previw">
  <img class="video" src={PATH_IMAGES + video.image} alt="previw" width="360" height="200"/>
  <div class="info">
    <img class="avatar" src={PATH_IMAGES + video.image} alt="avatar" width="36" height="36">
    <div class="details">
      <h3 class="title">{video.title}</h3>
      <div class="nick">Fefe</div>
      <div class="statistics">1,7 млн просмотров 5 дней назад</div>
    </div>
  </div>
</a>

<style>
  .previw {
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
  }
  .video {
    border-radius: 12px;
    transition: border-radius .3s;
  }
  .video:hover {
    border-radius: 0;
  }
  .info {
    display: flex;
  }
  .avatar {
    border-radius: 50%;
    margin-right: 12px;
  }
  .details {
    width: 296px;
    height: 100px;
  }
  .title {
    max-height: 44px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    margin: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
    color: black;
  }
  .nick {
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: #606060;
    margin-bottom: 8px;
  }
  .statistics {
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: rgb(96, 96, 96);
  }
</style>
