<template>
  <section class="store-info">
    <div class="store-list">
      <table>
        <thead>
          <tr>
            <th>
              <div class="bg">姓名</div>
            </th>
            <th>
              <div class="bg">维修时间</div>
            </th>
            <th>
              <div class="bg">年龄</div>
            </th>
          </tr>
        </thead>
        <tbody class="store-list-wrap" :class="{ 'animate-up': animateUp }">
          <tr v-for="(person, i) in persons" :key="i">
            <td>
              <div class="bg2">
                {{ person.name }}
              </div>
            </td>
            <td>
              <div class="bg2">{{ person.time }}</div>
            </td>
            <td>
              <div class="bg2">
                {{ person.age }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import { getStores } from "@/api/api.js";

export default {
  data() {
    return {
      animateUp: false,
      timer: null,
      persons: [
        { name: "王星行", time: "2021-02-25  12:00:46~13:00;45", age: "48" },
        { name: "吉祥混沌", time: "2021-02-25  12:00~13:00", age: "23" },
        { name: "水星记", time: "2021-02-25  12:00~13:00", age: "52" },
        { name: "王星行", time: "2021-02-25  12:00~13:00", age: "36" },
        { name: "王星行", time: "2021-02-25  12:00~13:00", age: "29" },
        { name: "王星行", time: "2021-02-25  12:00~13:00", age: "33" },
        { name: "王星行", time: "2021-02-25  12:00~13:00", age: "26" },
        { name: "水星记", time: "2021-02-25  12:00~13:00", age: "42" },
        { name: "水星记", time: "2021-02-25  12:00~13:00", age: "29" },
        { name: "吉祥混沌", time: "2021-02-25  12:00~13:00", age: "32" },
      ],
    };
  },
  methods: {
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.persons.push(this.persons[0]);
        this.persons.shift();
        this.animateUp = false;
      }, 500);
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
  mounted() {
    getStores().then((res) => {
      console.log(res.data);
    });
    this.timer = setInterval(this.scrollAnimate, 3000);
  },
};
</script>
<style scoped>
.flex {
  justify-content: space-around;
}
.images {
  padding: 0 30px;
}
.images img {
  border-radius: 5px;
}
.images li {
  width: 23%;
}
p {
  font-size: 18px;
  color: #fff;
}
.store-info table {width:100%;color:#fff;margin-top:18px;}
.store-info table .bg {
  background: #14282e;
  padding: 8px;
  margin-bottom: 3px;
}

.store-info table .bg2 {
  background: rgba(12, 28, 34, 0.7);
  padding: 8px;
  margin-bottom: 3px;
}


.store-info table td:first-child .bg2,
.store-info table th:first-child .bg {
  border-radius: 10px 0 0 10px;
}

.store-info table td:last-child .bg2,
.store-info table th:last-child .bg {
  border-radius: 0 10px 10px 0;height: 39px;
}

.store-info table td,
.store-info table thead th {
  padding: 0;text-align:center
}

.store-info .event-icon {
  border-radius: 10px;
  width: 20px;
  height: 20px;
}

.store-title {
  font-size: 18px;
  color: #fff;
  margin-bottom: 16px;
}

.store-list {
  height: 270px;
  overflow: hidden;
}
.store-list thead {
  position: relative;
  z-index: 1;
}
.store-list-wrap {
  overflow: hidden;
  position: relative;
  z-index: 0;
}
.store-list .animate-up {
  transition: all 0.5s ease-in-out;
  transform: translateY(-40px);
}
</style>
