<template>
  <div>
    <!--blog Section start-->
    <div class="page-margin">
      <!--breadcrumb start-->
      <div class="breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-text-center d-align-center">
              <h2 class="title">About</h2>
            </div>
          </div>
        </div>
      </div>
      <!--breadcrumb end -->

      <!-- blog Section starts -->
      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="blog-item row align-items-center">
                <div class="col-sm-4">
                  <div class="blog-box">
                    <div class="overflow-hidden text-center">
                      <a href="#">
                        <img :src='"https://www.ableeyes.org/wp/wp-content/uploads/2017/08/puzzle-1.png"' alt="blog" class="img-fluid">
                      </a>
                    </div>
                  </div>
                </div>
                <div class="blog-text col-sm-8">
                  <div class="blog-description">
                    <p>Able Eyes provides virtual walk-thru tours of the inside of public spaces such as: parks, museums, hotels, restaurants, retail businesses, and more for the purpose of accessibility (helping people) and marketing (helping businesses).</p>
                    <p>LVirtual tours allow customers of all abilities an opportunity to explore beforehand to decrease anxiety, but more importantly is a tool used by persons with disabilities to explore accessibility beforehand, making new experiences more comfortable and easily navigated.</p>
                    <p>***Able Eyes is not a rating tool or compliance assessment. This virtual tool is to help people make decisions and have wonderful experiences based on his/her own needs.</p>
                  </div>
                </div>
              </div>
              <div class="blog-divider"></div>
              <div class="blog-item">
                <div class="blog-text">
                    <h3 class="blog-head">Mission Statement</h3>
                  <div class="blog-description">
                    <p>The mission of Able Eyes is to provide visual, state of the art experiences/teaching tools for individuals with disabilities. Able Eyes provides a user friendly platform to teach skills and explore environments from several different perspectives. Our ultimate goal is to increase the accessibility of businesses and public venues by offering visual walk through tours, making them “Able Eyes Accessible.”</p>
                  </div>
                </div>
              </div>
                <div class="blog-divider"></div>
              <div class="reply-comment">
                <h6>Staff</h6>
                <div class="media">
                  <img class="align-self-top mr-3" style="width: 100px" :src='"https://www.ableeyes.org/wp/wp-content/uploads/2020/01/image001-2.jpg"' alt="blog">
                  <div class="media-body">
                    <router-link  :to="{name:'Blog_details'}">
                      <h5 class="mt-0 text-dark font-weight-bolder">Meegan Winters</h5>
                    </router-link>
                    <p>Meegan Winters is the CEO/Co-Founder of Able Eyes. Her experience as a special education teacher teaching students with Autism paired with her real life experiences having a best friend that was a wheelchair user (now an angel) sparked the idea behind what is now a nationwide business helping people of all abilities access the community with confidence and comfort.</p>
                    <p>Meegan has worked with individuals with special needs and Autism for nearly 20 years. 8 years spent with families as an in home consultant before pursuing a career as a teacher educating students with Autism. In addition, prior to Able Eyes, Meegan spent 3 years as an Assistant Principal in a center based special education school building.</p>
                  </div>
                </div>
                <div class="blog-divider"></div>

                <div class="media">
                  <img class="align-self-top mr-3" style="width: 100px" :src='"https://www.ableeyes.org/wp/wp-content/uploads/2019/02/evan.jpg"' alt="blog">
                  <div class="media-body">
                    <router-link  :to="{name:'Blog_details'}">
                      <h5 class="mt-0 text-dark font-weight-bolder">Evan Winters</h5>
                    </router-link>
                    <p>Evan is a local business owner with well established community relationships. His passion for this project is to be a part of a life changing tool/resource for individuals with anxiety and autism.</p>
                  </div>
                </div>
                <div class="blog-divider"></div>

                <div class="media">
                  <img class="align-self-top mr-3" style="width: 100px" :src='"https://www.ableeyes.org/wp/wp-content/uploads/2021/04/briant.jpg"' alt="blog">
                  <div class="media-body">
                    <router-link  :to="{name:'Blog_details'}">
                      <h5 class="mt-0 text-dark font-weight-bolder">Brian Town</h5>
                    </router-link>
                    <p>Brian is the CEO of Michigan Creative and a Certified Final Cut Pro Trainer. Brian started Michigan Creative in 2011 after a long career in education as a film and television production teacher. During his time as an educator Brian created a nationally recognized film and TV production program. He continues to be an educator, becoming a teacher each summer for the UA of plumbers, pipefitters, and welders, developing curriculum teaching them how to teach their apprentices.</p>
                    <p>Now Brian manages a staff of 12 and hundreds of clients from the Mid-Michigan area and surrounding states. Michigan Creative is a creative firm that provides web development, video, branding, and social media to help companies build their marketing machine.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--blog Section End-->
      <js/>
      <!--Footer Section End-->

    </div>
    <!--blog Section end -->
  </div>
</template>
<script>
export default {
  name: 'About'
}
</script>
