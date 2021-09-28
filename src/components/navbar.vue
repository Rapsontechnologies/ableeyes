<template>
  <b-navbar type="light" class="navbar-light theme-nav fixed-top" toggleable="lg" fixed="top"  v-b-scrollspy:nav-scroller>
    <div class="container">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="navbar-brand" :to="{name:'Home'}"><img :src='"https://www.ableeyes.org/wp/wp-content/uploads/2019/11/able-eyes-logo.png"' style="width: 140px" alt="logo"></b-navbar-brand>
    <b-collapse class="default-nav"  is-nav id="nav_collapse">
      <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
          <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
          <b-nav-item :to="{ name: 'About'}">About</b-nav-item>
          <b-nav-item :to="{ name: 'Subscription' }">Subscribe</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
  export default {
   name:'Navbar'
  }
</script>
