<template >
  <!-- About Start -->
    <section id="about" class="about" >
      <div class="about-decor">
        <div class="about-circle1"><img :src='"../assets/images/team1.png"' alt="team1"></div>
        <div class="about-circle2"><img :src='"../assets/images/main-banner1.png"' alt="banner1"></div>
      </div>
      <div class="container">
        <div class="row ">
          <div class="col-md-5">
            <div class="about-contain">
              <div>
                <h2 class="title"><span>Mission Statement</span></h2>
                <p class="caption-about">The mission of Able Eyes is to provide visual, state of the art experiences/teaching tools to children and adults with disabilities. Able Eyes provides a user friendly platform to teach skills, and explore environments from several different perspectives. Our ultimate goal is to make businesses and public venues more accessible for people of all abilities by offering virtual walk-through tours, making them “Able Eyes Accessible.”</p>
                <div class="top-margin">
                  <button type="button" class="btn btn-custom theme-color theme-color">Request A Tour</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7 d-medium-none">
            <div class="about-right">
              <div class="about-phone">
                <img  :src='"https://www.ableeyes.org/wp/wp-content/uploads/2017/08/puzzle-1.png"' class="img-fluid" alt="aboutus">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About End -->

</template>
<script>
export default {
  name: 'about'
}
</script>
