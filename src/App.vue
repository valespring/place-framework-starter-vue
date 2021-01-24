<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>|<router-link to="/about"
        >About</router-link
      >

      <h1 class="heading-ruby">Testing font</h1>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "./scss/global.scss";
</style>
