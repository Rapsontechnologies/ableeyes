import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/Home'
import Subscription from './../pages/Subscription'
import PageAbout from './../pages/About'
import Navbar from './../components/navbar'
import About from './../components/about'
import Feature from './../components/feature'
import ContactUs from './../components/contact_us'
import Tile from './../components/tile'
import Footer from './../components/footer'
import Js from './../components/js'

Vue.use(Router)
Vue.component('Tile', Tile)
Vue.component('About', About)
Vue.component('Feature', Feature)
Vue.component('Contact_us', ContactUs)
Vue.component('Footer', Footer)
Vue.component('js', Js)


export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        navbar: Navbar,
        footer: Footer,
      }
    },
    {
      path: '/product/able-eyes-accessibility-subscription/',
      name: 'Subscription',
      components: {
        default: Subscription,
        navbar: Navbar,
        footer: Footer,
      }
    },
    {
      path: '/about',
      name: 'About',
      components: {
        default: PageAbout,
        navbar: Navbar,
        footer: Footer,
      }
    }]
})
