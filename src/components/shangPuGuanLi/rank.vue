<template>
  <section class="rank-wrap">
    <div class="flex-center">
      <p>商铺热榜</p>
      <div class="rank flex">
        <div class="list">
          <span class="icon-jiangbei"><strong class="orderNumber">1</strong></span
          >北京分店
        </div>
        <div class="list">
          <span class="icon-jiangbei"><strong class="orderNumber">2</strong></span
          >杭州分店
        </div>
        <div class="list">
          <span class="icon-jiangbei"><strong class="orderNumber">3</strong></span
          >南京分店
        </div>
      </div>
    </div>
    <div class="product-tab">
      <p>产品热销</p>
      <div class="tab-wrap">
        <div class="tab-box">
          <div
            class="flex"
            :class="[index == i ? 'isActive' : '']"
            v-for="(item, i) in result"
            :key="i"
            @click="selectTab(i)"
          >
            <p class="item-name">{{ item.shopName }}</p>
            <p>{{ item.saleNumber }}</p>
            <span class="icon-shangsheng rotate"></span>
          </div>
          <div class="tab-content">
            <div class="flex">
              <p class="content-name">商铺销售额</p>
              <p>{{ result[index].turnover }}</p>
              <span class="icon-shangsheng"></span>
            </div>
            <div class="flex">
              <p class="content-name">消费人数</p>
              <p>{{ result[index].consumersNumber }}</p>
              <span class="icon-shangsheng"></span>
            </div>
            <div class="flex">
              <p class="content-name">男性消费者</p>
              <p>{{ result[index].manConsumersNumber }}</p>
              <span class="icon-shangsheng"></span>
            </div>
            <div class="flex">
              <p class="content-name">女性消费者</p>
              <p>{{ result[index].womanConsumersNumber }}</p>
              <span class="icon-shangsheng"></span>
            </div>
            <div class="flex">
              <p class="content-name">消费满意度</p>
              <p>325</p>
              <span class="icon-shangsheng"></span>
            </div>
            <div class="flex">
              <p class="content-name">差评人数</p>
              <p>1</p>
              <span class="icon-shangsheng"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { getRank } from "@/api/api.js";

export default {
  data() {
    return {
      index: 0,
      result: [
        {
          shopName: "13700000066",
          saleNumber: "25",
          turnover: 1323.71,
          consumersNumber: 24,
          manConsumersNumber: 2,
          womanConsumersNumber: 18,
          unknownConsumersNumber: 11,
        },
        {
          shopName: "13700000055",
          saleNumber: "3",
          turnover: 0.04,
          consumersNumber: 3,
          manConsumersNumber: 2,
          womanConsumersNumber: 18,
          unknownConsumersNumber: 11,
        },
        {
          shopName: "奥巴马皮革个体店2",
          saleNumber: "2",
          turnover: 120.46,
          consumersNumber: 2,
          manConsumersNumber: 2,
          womanConsumersNumber: 18,
          unknownConsumersNumber: 11,
        },
        {
          shopName: "新华为分店2-137033",
          saleNumber: "1",
          turnover: 0.01,
          consumersNumber: 1,
          manConsumersNumber: 2,
          womanConsumersNumber: 18,
          unknownConsumersNumber: 11,
        },
        {
          shopName: "新华为分店2-137033的",
          saleNumber: "1",
          turnover: 0.01,
          consumersNumber: 1,
          manConsumersNumber: 2,
          womanConsumersNumber: 18,
          unknownConsumersNumber: 11,
        },
      ],
    };
  },
  mounted() {
    // getRank().then((res) => {
    //   this.result = res.data.result
    // })
  },
  methods: {
    selectTab(i) {
      this.index = i;
    },
  },
};
</script>

<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  margin: 35px 0;
}

.flex-center p {
  margin-right: 25px;
  color: #fff;
}

.list {
  color: #affcff;
  width: 150px;
  font-weight: bold;
}

.list:last-child {
  margin-right: 0;
}

.list .icon-jiangbei {
  position: relative;
  font-size: 32px;
  vertical-align: middle;
  margin-right: 8px;
}

.list .icon-jiangbei .orderNumber {
  position: absolute;
  left: 12px;
  top: 3px;
  color: #000;
  font-size: 14px;
}

.product-tab p {
  color: #fff;
}

.tab-wrap {
  position: relative;
}

.tab-box .flex {
  width: 304px;
  background: rgba(10, 55, 60, 0.3);
  padding: 10px;
  border-radius: 6px;
  justify-content: space-around;
  margin-bottom: 3px;
  border-right: 3px solid transparent;
  cursor: pointer;
}

.tab-box .icon-shangsheng {
  color: #d90d20;
}
.tab-box .icon-shangsheng.rotate {
  color: #21b432;
  transform: rotate(180deg);
}
.item-name {
  width: 180px;
}
.tab-content {
  position: absolute;
  left: 307px;
  top: 0;
  border-radius: 6px;
}
.tab-box .tab-content .flex {
  width: 250px;
  margin-bottom: 0;
  border-radius: 0;
  position: relative;
  background: rgba(67, 121, 129, 0.5);
  cursor: default;
}
.tab-box .flex.isActive {
  background: rgba(67, 121, 129, 0.5);
  border-radius: 0;
  position: relative;
}
.tab-box .flex.isActive::after {
  content: "";
  background: rgba(67, 121, 129, 0.5);
  width: 3px;
  height: 100%;
  position: absolute;
  right: -6px;
}
.content-name {
  width: 100px;
}
</style>
