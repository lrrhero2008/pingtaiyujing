<template>
  <section class="store-info">
    <div class="store-list">
      <table>
        <tbody class="store-list-wrap" :class="{ 'animate-up': animateUp }">
          <tr v-for="(activity, i) in activities" :key="i">
            <td>
              <div class="bg2">
                <span class="icon-biaoqian"></span>  
              </div>
            </td>
            <td>
              <div class="bg2">{{ activity.name }}</div>
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
      activities: [],
    };
  },
  methods: {
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.activities.push(this.activities[0]);
        this.activities.shift();
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
.icon-biaoqian{font-size:24px;color:#be3625}
.store-info table {width:100%;color:#fff;margin-top:18px;}
.store-info table .bg {
  background: #14272e;
  padding: 8px;
  margin-bottom: 3px;
}

.store-info table .bg2 {
  background: rgba(11, 28, 35, 0.7);
  padding: 8px;
  margin-bottom: 3px;height:39px
}


.store-info table td:first-child .bg2,
.store-info table th:first-child .bg {
  border-radius: 10px 0 0 10px;
}

.store-info table td:last-child .bg2,
.store-info table th:last-child .bg {
  border-radius: 0 10px 10px 0;height: 39px;
}
.store-info table tr:nth-child(4) td .bg2{
  background:#1c3238;
  font-size:20px;line-height:24px
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
