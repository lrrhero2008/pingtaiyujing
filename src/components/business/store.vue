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
            <th>
              <div class="bg">销量</div>
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
                <span>{{ store.sales }}</span>
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
        { name: "丁大姓年糕店", address: "鲁迅中路178号", sales: "48" },
        { name: "吉祥混沌", address: "鲁迅中路178号", sales: "23" },
        { name: "水星记", address: "鲁迅中路178号", sales: "52" },
        { name: "老绍兴臭豆腐", address: "鲁迅中路178号", sales: "66" },
        { name: "丁大姓年糕店", address: "鲁迅中路178号", sales: "29" },
        { name: "孔乙己土特产", address: "鲁迅中路178号", sales: "33" },
        { name: "丁大姓年糕店", address: "鲁迅中路178号", sales: "46" },
        { name: "吉祥混沌", address: "鲁迅中路178号", sales: "62" },
        { name: "水星记", address: "鲁迅中路178号", sales: "89" },
        { name: "老绍兴臭豆腐", address: "鲁迅中路178号", sales: "102" },
      ],
    };
  },
  methods: {
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.addresses.push(this.addresses[0]);
        this.addresses.shift();
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
    this.timer = setInterval(this.scrollAnimate, 2000);
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

.store-info table .bg {
  background: #18333c;
  padding: 10px;
  margin-bottom: 3px;
}

.store-infotable .bg2 {
  background: rgba(17, 42, 49, 0.5);
  padding: 10px;
  margin-bottom: 3px;
}

.store-info table thead th:first-child {
  text-align: right;
}

.store-info table thead th:last-child {
  text-align: left;
}

.store-info table td:first-child .bg2,
.store-info table th:first-child .bg {
  border-radius: 10px 0 0 10px;
}

.store-info table td:last-child .bg2,
.store-info table th:last-child .bg {
  border-radius: 0 10px 10px 0;
  padding: 10px 10px 10px 50px;
  width: 420px;
}

.store-info table td,
.store-info table thead th {
  padding: 0;
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
  height: 215px;
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
  transform: translateY(-43px);
}
</style>
