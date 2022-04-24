<style lang="scss" scoped>
.newEvent {
  padding: 10px;
  max-width: 400px;
  max-height: 150px;
  border: 1px solid var(--border-color);
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  .text{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  width: 50%;}
  .img {
  padding: 2px;
    width: 50%;
    overflow: hidden;
    img {
      width: fit-content;
      height: 100%;
    }
  }
}
</style>
<template>
  <div class="newEvent">
    <div class="text">
      <h3>Nadpis</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="img">
      <img
        src="https://nigeriaeconomiczones.com/wp-content/uploads/2022/02/messe-luzern-corporate-event.jpg"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "newEvent",
};
</script>