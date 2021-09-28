<template>
 <div id="main_div">

   <!-- Home Section start-->
   <section id="home" class="home">
     <div class="home-decor">
       <div class="home-circle1"><img :src='"../assets/images/main-banner3.png"' alt=""></div>
       <div class="home-circle2"><img :src='"../assets/images/main-banner12.png"' alt=""></div>
       <div class="home-circle3"><img :src='"../assets/images/main-banner1.png"' alt=""></div>
     </div>
     <div class="container">
       <div class="row align-items-center">
         <div class="col-md-5">
           <div class="home-contain">
             <div>
               <h1 style="text-transform: capitalize; font-weight: bolder" class="">Ableeyes</h1>
               <h2 style="text-transform: normal;">know before you go </h2>
             </div>
           </div>
         </div>
         <div class="col-sm-6 offset-md-1">
           <div class="home-right">
             <!-- Tile js start -->
             <!-- <Tile image="https://www.ableeyes.org/wp/wp-content/uploads/2017/08/boy-477010.jpg"/> -->
             <img src="https://www.ableeyes.org/wp/wp-content/uploads/2017/08/boy-477010.jpg" class="img-fluid" alt="">
             <!-- Tile js end -->
           </div>
         </div>
       </div>
     </div>
   </section>
   <!--Home Section End -->

   <!-- About Start  -->
   <About/>
   <!-- About End -->

   <!-- Feature Section start -->
   <Feature/>
   <!-- Feature Section End -->

   <!-- Contact Section start -->
   <Contact_us/>
   <!-- Contact Section End -->

   <js/>

 </div>
</template>
<script>
export default {
  name: 'Home',
  beforeCreate: function () {
    document.body.className = ''
  }
}
</script>
<!--remove comment below line to set color -->
<!--<style lang="css">-->
  <!--@import '../public/assets/css/color/color-2.css';-->
<!--</style>-->
