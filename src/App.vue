<script>
import topbar from './components/topbar.vue'; 

export default {
    name: 'App', 
    components: {
        topbar,
    }
}
</script>

<template>
  <div class="main-wrapper">
    <div class="sidebar">
      <div class="user-profile">
        <img src="" alt="">
        <h4>Saravan Kumar</h4>
      </div>
      <div class="main-menu">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div class="sidebar-footer">
        <p>Copyright © 2023 Robert Elisc. All rights reserved.</p>
      </div>
    </div>
    <div class="main-container">
      <router-view></router-view>

    </div>
  </div>
</template>

<style scoped>

</style>
