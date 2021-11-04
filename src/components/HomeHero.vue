<template>
  <div class="hero" >
    <div class="hero-header">
      <h3 class="hero-title"> Invest in Certified Assets, Fund Projects.</h3>
      <h6 class="hero-message">We at Roots of Humanity strive to bring history to life using
         stained glass art. You can help support us by claiming certified digital assets of
          our installations to help fund future projects.</h6>
          <router-link :to="'/organization'">
            <button
              type="button"
              name="button"
              class="btn btn-outline-success btn-green"
              href="/join.html">
              Learn More</button>

          </router-link>
    </div>
  </div>
</template>
<!-- <img src="/imgs/rootsOfKnowledge.jpg" class="hero-image"/> -->

<script>

export default {
  name: 'HomeHero',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* The hero image */
.hero{
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 100%;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(rgba(27,27,27,.6) 30%,
              rgba(27,27,27,1)), url('https://ik.imagekit.io/ostlerfilmandphoto/rootsOfKnowledge_VflxFZxyaoa.jpg?updatedAt=1635886294892');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
/* Place text in the middle of the image */
.hero-header {
  text-align: center;
  margin-top: -40px;
  width: 60vw;
  color: white;
}

.hero-title{
  color: #7CC26B;
  font-weight: bold;
  width: 100%;
}

.hero-message{
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1px;
}

.btn-green{
  background-color: #7CC26B;
  color: white;
  box-shadow: none;
  border: none;
  margin-top: 2em;
}

.btn-green:hover{
  box-shadow: inset .5px .5px 7px 1px rgba(0, 0, 0, 0.2);
}
</style>
