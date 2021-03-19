<template>
  <section class="store-info">
    <div class="store-list">
      <table>
        <thead>
          <tr>
            <th>
              <div class="bg">商铺名称</div>
            </th>
            <th>
              <div class="bg">地址</div>
            </th>
            <!-- <th>
              <div class="bg">销量</div>
            </th> -->
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
            <!-- <td>
              <div class="bg2">
                {{ store.sales }}
              </div>
            </td> -->
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
        { name: "咸享酒店", address: "鲁迅中路179号", sales: "48" },
        { name: "寻宝记", address: "鲁迅中路5号", sales: "23" },
        { name: "绍兴宴", address: "鲁迅中路海澜之家西南20米", sales: "52" },
        { name: "几荷.乌篷船宴", address: "鲁迅中路21号", sales: "66" },
        { name: "星巴克", address: "鲁迅中路209号", sales: "29" },
        { name: "越乡农家", address: "鲁迅中路44号", sales: "33" },
        { name: "女儿红", address: "中兴南路146号", sales: "46" },
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
  background: #154144;
  padding: 8px;
  margin-bottom: 3px;
}

.store-info table .bg2 {
  background: rgba(13, 50, 55, 0.7);
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
