<template>
  <div>
    <div class="dev-hint" v-show="ifPanel">
      <h3>Debug仪表盘</h3>
      <button @click="skipPractice">跳过练习</button>
      <button @click="skipFormalGame">跳过正式游戏</button>
      <p>当前速度值：{{$store.state.speedStart}}</p>
<!--      <p>当前速度值run：{{$store.state.speedRun}}</p>-->
      <p>当前所属条件：{{$store.state.speedCondition}}</p>
    </div>
  </div>
</template>

<script src="./index.js">
</script>

<style lang="less">
@import './index.less';
</style>
