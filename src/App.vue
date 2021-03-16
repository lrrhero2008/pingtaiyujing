<template>
<div id="app">
  <div id="nav" class="nav">
    <div class="flex">
      <div class="breadcurmb">
        <router-link to="/">首页</router-link>
      </div>
      <div class="refresh" @click="refresh">
        <img src="./assets/refresh-icon.jpg" />
      </div>
    </div>
    <div class="title">{{currentRouteName}}</div>
  </div>
  <div class="wrap">
    <router-view :key="$route.fullPath" />
  </div>
</div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    refresh() {
      this.$router.push({
        path: this.$route.fullPath,
      });
    },
  },
};
</script>

<style scoped>
#app {
  font-family: SourceHanSansCN, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 2496px;
  height: 1248px;
}

.nav {
  height: 100px;
  background: #141930;
  text-align: center;
  position: relative;
  z-index: 1;
}

.wrap {
  /* background: url("assets/bg-imgage.jpg") repeat-x; */
  width: 2496px;
  height: 1146px;
  padding: 30px;
}

.nav .breadcurmb {
  margin-right: 10px;
}

.nav .breadcurmb a {
  color: #2186ac;
  text-decoration: none;
  border: 2px solid #2186ac;
  border-radius: 20px;
  padding: 6px 20px;
}

.nav .refresh {
  height: 20px;
  cursor: pointer;
}

.title {
  color: #a2e9fd;
  font-size: 48px;
  line-height: 100px;
  box-shadow: 0 0 20px 10px #11233c inset;
  font-weight: bold;
}

.flex {
  position: absolute;
  left: 40px;
}
</style>
<style>
* {
  box-sizing: border-box;
}

body,
p {
  margin: 0;
}

.flex {
  display: flex;
  align-items: center;
  height: 100%;
}

table {
  border-collapse: collapse;
}

/* table,td {
    border: 1px solid #333;
} */
ul {
  list-style: none;
  padding: 0;
}

.responsive-img {
  max-width: 100%;
}
.anchorBL{display: none;}
</style>
