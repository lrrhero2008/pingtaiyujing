<template>
  <section class="store-info">
    <div class="store-list">
      <table>
        <thead>
          <tr>
            <th>
              <div class="bg">景点名称</div>
            </th>
            <th>
              <div class="bg">景点地址</div>
            </th>
            <th>
              <div class="bg">游客人数</div>
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
              <div class="bg2">{{ person.address }}</div>
            </td>
            <td>
              <div class="bg2">
                {{ person.num }}
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
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆02", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆03", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆04", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆05", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },
        { name: "越过文化博物馆", address: "绍兴市越城区鲁迅中路187号", num: "48" },

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
  border-radius: 0 10px 10px 0;height: 36px;
}

.store-info table td,
.store-info table thead th {
  padding: 0;text-align:center
}


.store-list {
  height: 270px;
  overflow: hidden;
  font-size: 14px;
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
