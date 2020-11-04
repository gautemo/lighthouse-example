<template>
  <header>
    <h1>Lighthouse example</h1>
    <nav>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
