<template lang="html">
  <div class="page-container">
    <img src="/imgs/ROHheader.png" alt="">
    <br><br><br>
    <h4 style="text-align: center; ">We are a non profit organization dedicated to helping
      Imporve and educate humanity through art.</h4>
    <br><br>
    <div class="wrapper">
      <div class="question-col">
          <h4>Founding Tenants</h4>
      </div>
      <div class="answer-col">
        <p>Humanity's history is replete with examples of both 'heroes' and 'nobodies,' who understood their duty to pass on a legacy of excellence.</p>
        <p>The sacrifice of our progenitors was life, limb, freedom and leisure lost so that we, their decedents, could have opportunity.</p>
        <p>Our inheritance of life binds us to this same duty, and we have the responsibility to pass on to our children the stories, the strength, and the roots of our humanity.</p>
      </div>
    </div>

    <div class="wrapper">
      <div class="question-col">
          <h4>Current Installations</h4>
      </div>
      <div class="answer-col">
        <img src="/imgs/rootsOfKnowledge.jpg" alt="">
        <br><br>
        <p>A large set of stained glass windows describing humanity’s long search for knowledge</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

      </div>
    </div>

    <div class="wrapper">
      <div class="question-col">
          <h4>Future Projects</h4>
      </div>
      <div class="answer-col">
        <img src="/imgs/rohbldg.jpg" alt="">
        <br><br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
    </div>



  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.wrapper{
  display: flex;
  justify-content: space-around;
  margin: 1.5em 4em;
  align-content: flex-end;
}


.question-col{
  width: 25vw;
  text-align: left;
  padding-right: 2em;
}

.answer-col{
  width: 100%;
  text-align: left;
 }

 .answer-col img{
   width: 50vw;
   height: auto;
 }

 .page-container{
   margin-top: 4em;
   margin-left: 8em;
   margin-right: 8em;
 }
</style>
