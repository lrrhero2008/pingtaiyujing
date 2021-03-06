<template>
  <section class="store-info">
    <div class="store-list">
      <table>
        <thead>
          <tr>
            <th>
              <div class="bg">店铺名称</div>
            </th>
            <th>
              <div class="bg">活动名称</div>
            </th>
            <th>
              <div class="bg">活动时间</div>
            </th>
          </tr>
        </thead>
        <tbody class="store-list-wrap" :class="{ 'animate-up': animateUp }">
          <tr v-for="(store, i) in stores" :key="i">
            <td>
              <div class="bg2">
                {{ store.name }}
              </div>
            </td>
            <td>
              <div class="bg2">{{ store.address }}</div>
            </td>
            <td>
              <div class="bg2">
                {{ store.sales }}
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
      stores: [
        { name: "王星行", address: "全场9.5折", sales: "11.9 ～ 11.11" },
        { name: "王星行", address: "全场9.5折", sales: "11.9 ～ 11.11" },
        { name: "王星行", address: "全场9.5折", sales: "11.9 ～ 11.11" },
        { name: "王星行", address: "全场9.5折", sales: "11.9 ～ 11.11" },
        { name: "王星行", address: "全场9.5折", sales: "11.9 ～ 11.11" },
        { name: "王星行", address: "全场9.5折", sales: "11.9 ～ 11.11" },
        { name: "王星行", address: "全场9.5折", sales: "11.9 ～ 11.11" },
        { name: "王星行", address: "全场9.5折", sales: "11.9 ～ 11.11" },
        { name: "王星行", address: "全场9.5折", sales: "11.9 ～ 11.11" },
        { name: "王星行", address: "全场9.5折", sales: "11.9 ～ 11.11" },
      ],
    };
  },
  methods: {
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.stores.push(this.stores[0]);
        this.stores.shift();
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
  background: #14272e;
  padding: 8px;
  margin-bottom: 3px;
}

.store-info table .bg2 {
  background: rgba(11, 28, 35, 0.7);
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
