<template>
  <section class="store-info">
    <div class="store-list">
      <table>
        <thead>
          <tr>
            <th>
              <div class="bg">维修时间</div>
            </th>
            <th>
              <div class="bg">维修次数</div>
            </th>
          </tr>
        </thead>
        <tbody class="store-list-wrap" :class="{ 'animate-up': animateUp }">
          <tr v-for="(maintan, i) in maintans" :key="i">
            <td>
              <div class="bg2">
                {{ maintan.name }}
              </div>
            </td>
            <td>
              <div class="bg2">{{ maintan.times }}</div>
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
      maintans: [
        { name: "烟管报警器", times: "34"},
        { name: "消防栓", times: "25"},
        { name: "东北大门左上角监控器", times: "14"},
        { name: "大厅播放器", times: "46"},
        { name: "水管", times: "39"},
        { name: "烟管报警器", times: "23"},
        { name: "消防栓", times: "16"},
        { name: "水管", times: "24"},
        { name: "东北大门左上角监控器", times: "29"},
      ],
    };
  },
  methods: {
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.maintans.push(this.maintans[0]);
        this.maintans.shift();
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
  background: #15363b;
  padding: 8px;
  margin-bottom: 3px;
}

.store-info table .bg2 {
  background: rgba(14, 42, 48, 0.7);
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
