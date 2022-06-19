<style lang="scss" scoped>
.about-project {
  width: 100%;
  background-color: white;
  display: flex;
  .img {
    width: 40%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text {
    padding: 90px 40px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1{
    font-size: 40px;
    font-weight: 600;
    }
  }
}
@media only screen and (max-width: 975px){
  .about-project {
    flex-direction: column;
    .img {
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .text {
      width: 100%;
      padding: 15px 30px;
      gap: 10px;
      h1{
        font-size: 30px;
      }
    }
  }
}
</style>
<template>
  <div class="about-project">
    <div class="img">
      <img
        src="../../assets/aboutProject/aboutProjGraphic.png"
        alt="obrázek přecházejících dětí přes knihy, o projektu"
      />
    </div>
    <div class="text">
      <h1>O projektu</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        consequatur fugiat? Minus placeat deleniti laudantium alias dolorem
        facilis corrupti non. Quam perferendis praesentium sequi eveniet
        quisquam accusantium, molestiae laudantium minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt veritatis iusto incidunt, optio at tenetur minus quidem debitis fugiat quam ducimus error illo saepe, magnam, libero nihil aliquid nam.
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>