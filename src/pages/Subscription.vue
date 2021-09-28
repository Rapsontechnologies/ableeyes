<template>
  <div>
    <!--blog Section start-->
    <div class="page-margin">
      <!--breadcrumb start-->
      <div class="breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-text-center d-align-center">
              <h2 class="title">Accessibility<span> Subscription</span></h2>
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
              <div class="blog-item row">
                <div class="col-sm-6">
                  <div class="blog-box">
                    <div class="overflow-hidden">
                      <a href="#">
                        <img :src='"https://www.ableeyes.org/wp/wp-content/uploads/2019/04/Able-Eyes-Subscription-1.png"' alt="blog" class="img-fluid">
                      </a>
                    </div>
                  </div>
                </div>
                <div class="blog-text col-sm-6">
                  
                  <h6 class="blog-head h3">Able Eyes Accessibility Subscription</h6>
                  <h3 class="blog-head">From: $0.00 / year, $99 / year, $199 / year, or $399 / lifetime</h3>
                  <div class="blog-divider"></div>

                  <div class="blog-description">
                    <h6 class="text-dark font-weight-bolder">What does it mean to become Able Eyes Accessible?</h6>
                    <p>Able Eyes Accessible means you are joining a national movement to create more inclusive communities across the U.S. through the use of virtual tours. These tours allow customers an opportunity to virtually “walk through”, become comfortable, and potentially assess accessibility before physically visiting.</p>
                  </div>
                  <div class="blog-divider"></div>

                  <div class="blog-description">
                    <h6 class="text-dark font-weight-bolder">How do Virtual Tours help people with disabilities in the community?</h6>
                    <p>Virtual Tours provide users the opportunity to explore a location while bringing public spaces to life on the screen, tablet, and social media.</p>
                    <p>his technology decreases anxiety by providing a predictable visual navigation of various community locations. 26% of the population now has a disability however, 80% of disabilities are INVISIBLE (and individuals are often uncomfortable disclosing this personal information). ADA assures that public locations are accessible for people with physical disabilities while Able Eyes has the ability to reach customers of all abilities.</p>
                  </div>
                  <div class="blog-divider"></div>

                  <div class="blog-description">
                    <h6 class="text-dark font-weight-bolder">How will Able Eyes help my business?</h6>
                    <div class="py-4 text-muted">
                      <ul class="list-style pl-0" style="list-style-type: circle;">
                        <li>Able Eyes will add your existing tour to our website for users to explore and navigate</li>
                        <li>Able Eyes promotes your location on our website, Facebook, Instagram, Twitter, and newsletter stating that you are Able Eyes Accessible.</li>
                        <li>Your Able Eyes decal proudly displays to your visitors that you are a committed Able Eyes Accessible location</li>
                        <li>Able Eyes will provide a personalized QR code to each location’s Virtual Tour. This is especially helpful when included in marketing materials.</li>
                        <li>Able Eyes will link directly to your business website along with a short business description (provided by the business)</li>
                        <li>More visitors of ALL abilities.</li>
                      </ul>
                    </div>
                  </div>
                  <div class="blog-divider"></div>

                  <div class="blog-description">
                    <h6 class="text-dark font-weight-bolder">Helping Hand  - <span class="text-muted">FREE</span></h6>
                    <p><span class="font-italic pr-1">Includes:</span> Virtual Tour added to Able Eyes database</p>
                  </div>
                  <div class="blog-divider"></div>
                  
                  <div class="blog-description">
                    <h6 class="text-dark font-weight-bolder">Supporter  - <span class="text-muted">$99/year</span></h6>
                    <p><span class="font-italic pr-1">Includes:</span> Virtual Tour added to Able Eyes database, Able Eyes Accessible Badge for website showing your support, Social Media recognition.</p>
                  </div>
                  <div class="blog-divider"></div>

                  <div class="blog-description">
                    <h6 class="text-dark font-weight-bolder">Advocate   - <span class="text-muted">$199/year</span></h6>
                    <p><span class="font-italic pr-1">Includes:</span>Virtual Tour added to Able Eyes database, Able Eyes Accessible Badge for website showing your support, Social Media recognition, Able Eyes Accessible Decal showing your support to customers on-location, QR Code to virtual tour for print media, Social Media paid promotion targeting geographic location and demographic aligned with your customers.</p>
                  </div>
                  <div class="blog-divider"></div>

                  <div class="blog-description">
                    <div class="d-flex align-items-center">
                      <p style="width:100%;">Subscription Type:</p>
                      <select class="form-control" name="subscription">
                        <option value="">Choose an option</option>
                        <option value="">Helping Hand: Free</option>
                        <option value="">Supporter: $99</option>
                        <option value="">Advocate: $199</option>
                        <option value="">Loyal Advocate: $399</option>
                      </select>
                    </div>
                  </div>
                  <div class="blog-divider"></div>

                  <div class="blog-description">
                    <p>One-Time payment of $399 for the lifetime of one virtual tour. If your tour is updated, subscription renewal required</p>
                    <h6 class="text-dark font-weight-bolder text-right">$0.00 / year and a $399.00 sign-up fee</h6>
                  </div>
                  <div class="blog-divider"></div>

                  <div class="blog-description">
                    <button class="btn">Sign Up Now</button>
                    <h6 class="text-muted">SKU: AES-004 Category: <a href="#">Subscription</a></h6>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="row border">
                <div @click="subscribeTab(0)" class="col-sm-6 text-center p-2 border-right" :class="tabNo === 0 ? 'btn' : '' " style="cursor: pointer">Description</div>
                <div @click="subscribeTab(1)" class="col-sm-6 text-center p-2" :class="tabNo === 1 ? 'btn' : '' " style="cursor: pointer">Additional Information</div>
              </div>
            </div>
            <div class="col-sm-12 border">
              <div :class="tabNo === 0 ? 'd-block' : 'd-none' " class="p-4">
                <div class="text-dark">
                  <h2>Description</h2>  
                  <p>**New tours not provided by Able Eyes require an updated contract or Able Eyes provided tours do not require monthly subscription</p>

                  <p>***By completing this form, I give Able Eyes permission to do the following:</p>

                  <ul class="list-style pl-4 text-muted" style="list-style-type: circle;">
                    <li>Use on business website</li>
                    <li>Added to Able Eyes database</li>
                    <li>Social Media promotions</li>
                    <li>Virtual marketing in a "virtual" world.</li>
                    <li>QR code provided</li>
                    <li>Able Eyes decal</li>
                    <li>Add to Google Listing</li>
                  </ul>
                </div>             
              </div>
              <div :class="tabNo === 1 ? 'd-block' : 'd-none' " class="p-4">
                <div class="text-dark">
                  <h2>Additional Information</h2>  
                  <div class="blog-divider"></div>

                  <div class="blog-description">
                    <div class="d-flex align-items-center">
                      <p style="white-space: nowrap" class="font-weight-bolder pr-4">Subscription Type:</p>
                      <p  style="width:100%;">Helping Hand: Free, Supporter: $99, Advocate: $199, Loyal Advocate: $399</p>
                    </div>
                  </div>
                </div>    
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--blog Section End-->

      <js/>

    </div>
    <!--blog Section end -->
  </div>
</template>
<script>
export default {
  name: 'Subscription',
  data() {
    return {
      tabNo: 0
    }
  },
  methods: {
    subscribeTab(no) {
      this.tabNo = no
    }
  }
}
</script>
