<template>
	<section class="flex event-page">
    <div class="event-amount">
      <div class="yellow-bg">11</div>
      <p>预警</p>
    </div>  
    <div class="event-main">
      <p class="event-title">预警告警记录</p>
      <div class="event-list">
        <table>
          <thead>
              <tr>
                  <th colspan="2"><div class="bg">状态</div></th>
                  <th><div class="bg">内容</div></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><div class="bg2"><div class="yellow-bg event-icon"></div></div></td>
                  <td><div class="bg2">预警</div></td>
                  <td><div class="bg2">绍兴市越城区鲁迅中路187号东门一级警告</div></td>
              </tr>
              <tr>
                  <td><div class="bg2"><div class="red-bg event-icon"></div></div></td>
                  <td><div class="bg2">告警</div></td>
                  <td><div class="bg2">绍兴市越城区鲁迅中路187号东门一级警告</div></td>
              </tr>
              <tr>
                  <td><div class="bg2"><div class="yellow-bg event-icon"></div></div></td>
                  <td><div class="bg2">预警</div></td>
                  <td><div class="bg2">绍兴市越城区鲁迅中路187号东门一级警告</div></td>
              </tr>
              <tr>
                  <td><div class="bg2"><div class="yellow-bg event-icon"></div></div></td>
                  <td><div class="bg2">预警</div></td>
                  <td><div class="bg2">绍兴市越城区鲁迅中路187号东门一级警告</div></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
	</section>
</template>
<script>

export default {
	
}
</script>
<style scoped>
  .event-page{color:#fff}
  .flex.event-page{align-items: center;}
  .event-amount{margin:0 70px;}
  .event-amount p{text-align: center;}
  .yellow-bg{background: linear-gradient(180deg, rgba(241,143,55,1) 0%, rgba(249,238,109,1) 100%);}
  .red-bg{background: linear-gradient(180deg, rgba(188,43,32,1) 0%, rgba(219,112,60,1) 100%);}
	.event-amount .yellow-bg{margin-bottom: 10px;width: 66px;height: 66px;font-size:30px;color:#fff;line-height:66px;text-align: center;border-radius:10px}
  .event-main{width:562px;font-size: 14px;}
  .event-main table .bg{background:rgba(35,64,74,0.5);padding:10px;margin-bottom: 3px;}
  .event-main table .bg2{background:rgba(17,42,49,0.5);padding:10px;margin-bottom: 3px;}
  .event-main table thead th:first-child{text-align: right;}
  .event-main table thead th:last-child{text-align: left;}
  
  .event-main table td:first-child .bg2, .event-main table th:first-child .bg {border-radius:10px 0  0 10px}
  .event-main table td:last-child .bg2, .event-main table th:last-child .bg {border-radius:0 10px 10px 0;padding: 10px 10px 10px 50px;width: 420px;}
  
  .event-main table td, .event-main table thead th{padding:0;} 
  .event-main .event-icon{border-radius:10px;width:20px;height:20px}

  .event-title{font-size: 18px;color: #fff;margin-bottom: 16px;}
</style>