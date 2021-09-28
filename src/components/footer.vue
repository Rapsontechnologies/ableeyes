<template>
  <section class="p-0">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h3 class="h4 font-weight-bolder pb-4">
            Subscribe to our mailing list for weekly video and tour updates!
          </h3>
          <form action="" class="d-md-flex align-items-end" style="gap: 16px">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" />
            </div>
            <div class="form-group">
              <label for="emailAddress">Email Address</label>
              <input type="email" class="form-control" id="emailAddress" />
            </div>
            <div class="form-group">
            <button class="btn">Submit</button> 
            </div>
          </form>
          <div>
            <a href="http://www.myamigo.com/" target="_blank">
              <img class="img-fluid" src="https://www.ableeyes.org/wp/wp-content/uploads/2020/01/amigo_advertisement.jpg" alt="">
            </a>
          </div>
          <div class="blog-divider"></div>
          <h3 class="h3 text-center font-weight-bolder">Thank You To Our Partners</h3>
          <div class="row py-4">
            <div class="col-sm-6 text-center">
              <a href="https://360photoanddesign.com/" target="_blank">
                <img src="https://www.ableeyes.org/wp/wp-content/uploads/2017/11/360photo.png" alt="">
              </a>
            </div>
            <div class="col-sm-6 text-center">
              <a href="https://www.michigancreative.com/" target="_blank">
                <img src="https://www.ableeyes.org/wp/wp-content/uploads/2017/11/michigancreative.png" alt="">
              </a>
            </div>
          </div>
          <div class="blog-divider"></div>
          <div class="row py-4">
            <div class="col-sm-6 text-center">
                <img src="https://www.ableeyes.org/wp/wp-content/uploads/2019/11/able-eyes-logo2.png" style="width:222px" alt="">
            </div>
            <div class="col-sm-6 text-center">
                <img src="https://www.ableeyes.org/wp/wp-content/uploads/2018/03/whaletale2.png" style="width:222px" alt="">
            </div>
          </div>
          <div>
            <a class="d-block text-center font-weight-semibold doc-link" style="color: black" href="https://www.ableeyes.org/wp/wp-content/uploads/2020/02/Accessibility-Statement.pdf" target="_blank">Accessibility Statement</a>
            <a class="d-block text-center font-weight-semibold doc-link" style="color: black" href="https://www.ableeyes.org/wp/wp-content/uploads/2019/11/Amigo-Accessibility-Information-.docx" download>Additional Accessibility Information</a>
          </div>
          <div class="py-4">
            <ul class="d-md-flex justify-content-around p-0" style="gap:16px">
              <li><a class="footer-nav-link" href="">About</a></li>
              <li><a class="footer-nav-link" href="">360 virtual tours</a></li>
              <li><a class="footer-nav-link" href="">video modeling library</a></li>
              <li><a class="footer-nav-link" href="">virtual tour subscription</a></li>
              <li><a class="footer-nav-link" href="">request a virtual tour</a></li>
              <li><a class="footer-nav-link" href="">contact</a></li>
            </ul>
          </div>
          <div class="pb-4">
            <ul class="d-flex justify-content-around p-0 footer-nav-social">
              <li><a class="footer-nav-link-social" href=""><img src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png"/></a></li>
              <li><a class="footer-nav-link-social" href=""><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png"/></a></li>
              <li><a class="footer-nav-link-social" href=""><img src="https://img.icons8.com/glyph-neue/50/000000/instagram-new.png"/></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
      <!-- Footer Section start -->
    </div>
    <div class="copyright-section index-footer bg-light">
      <p>POWERED BY MICHIGAN CREATIVE © 2021</p>
    </div>
    <!-- Footer Section End -->
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>

.footer-nav-link{
  color: #5eb9db;
  text-transform: uppercase;
}

.footer-nav-link:hover{
  font-weight: bold;
  color: #5eb9db;
}

.footer-nav-social{
  max-width: 240px;
  width: 100%;
  margin:0 auto;
}

.footer-nav-link-social > img{
  width: 25px;
}
</style>
