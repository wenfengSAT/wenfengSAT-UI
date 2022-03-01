<template>
  <a-tabs default-active-key="1">
    <a-tab-pane key="1" tab="开采范围" class="demo-tab">
      <div class="d-flex h-100">
        <div class="demo-tabs-show-big">
          <img :src="require(tabsOne[activeOneIndex].img + '')" alt="">
          <div class="show-big-legend">
            <span>规定开采范围</span>
            <div class="blue"></div>
            <span class="mt-2">实际开采范围</span>
            <div class="red"></div>
          </div>
        </div>
        <div class="demo-tabs-items">
          <div v-for="(item, index) in tabsOne" :key="item.img"
            @click="seletedOne(index)" :class="{'active': activeOneIndex === index}">
            <img :src="require(item.img + '')" alt="" srcset="">
            <div class="demo-tabs-items-date">{{item.date}}</div>
          </div>
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="三维模型" class="demo-tab">
      <div class="d-flex h-100">
        <div class="demo-tabs-show-big">
          <img :src="require(tabsTwo[activeTwoIndex].img + '')" alt="">
        </div>
        <div class="demo-tabs-items">
          <div v-for="(item, index) in tabsTwo" :key="item.img"
            @click="seletedTwo(index)" :class="{'active': activeTwoIndex === index}">
            <img :src="require(item.img + '')" alt="" srcset="">
            <div class="demo-tabs-items-date">{{item.date}}</div>
          </div>
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="3" tab="航拍视频" class="demo-tab">
      <div class="d-flex h-100">
        <div class="demo-tabs-show-big">
          <img :src="require(tabsThree[activeThreeIndex].img + '')" alt="">
          <button class="demo-tabs-show-big-play">&#9660;</button>
        </div>
        <div class="demo-tabs-items">
          <div v-for="(item, index) in tabsThree" :key="item.img"
            @click="seletedThree(index)" :class="{'active': activeThreeIndex === index}">
            <img :src="require(item.img + '')" alt="" srcset="">
            <div class="demo-tabs-items-date">{{item.date}}</div>
          </div>
        </div>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  title: '内容图片视频展示',
  data() {
    return {
      activeOneIndex: 0,
      tabsOne: [
        { img: './images/tabs/1/u001.jpg', date: '2019年1月9日' },
        { img: './images/tabs/1/u002.jpg', date: '2018年12月8日' },
        { img: './images/tabs/1/u003.jpg', date: '2018年11月10日' },
        { img: './images/tabs/1/u004.jpg', date: '2018年10月9日' },
        { img: './images/tabs/1/u005.jpg', date: '2018年9月11日' },
        { img: './images/tabs/1/u006.jpg', date: '2018年8月12日' },
      ],
      activeTwoIndex: 0,
      tabsTwo: [
        { img: './images/tabs/2/u001.jpg', date: '2019年1月9日' },
        { img: './images/tabs/2/u002.jpg', date: '2018年12月8日' },
        { img: './images/tabs/2/u003.jpg', date: '2018年11月10日' },
        { img: './images/tabs/2/u004.jpg', date: '2018年10月9日' },
        { img: './images/tabs/2/u005.jpg', date: '2018年9月11日' },
        { img: './images/tabs/2/u006.jpg', date: '2018年8月12日' },
      ],
      activeThreeIndex: 0,
      tabsThree: [
        { img: './images/tabs/3/u001.jpg', date: '2019年1月9日' },
        { img: './images/tabs/3/u002.jpg', date: '2018年12月8日' },
        { img: './images/tabs/3/u003.jpg', date: '2018年11月10日' },
        { img: './images/tabs/3/u004.jpg', date: '2018年10月9日' },
        { img: './images/tabs/3/u005.jpg', date: '2018年9月11日' },
        { img: './images/tabs/3/u006.jpg', date: '2018年8月12日' },
      ],
    };
  },
  methods: {
    seletedOne(index) {
      this.activeOneIndex = index;
    },
    seletedTwo(index) {
      this.activeTwoIndex = index;
    },
    seletedThree(index) {
      this.activeThreeIndex = index;
    },
  },
};
</script>
<style lang="scss">
  .demo-tab {
    height: calc(100vh - 350px);
    padding: 20px 0;
  }
  .demo-tabs-items {
    display: flex;
    flex-direction: column;
    width: 120px;
    justify-content: space-between;
    > div {
      position: relative;
      flex: 1;
      border: 2px solid transparent;
      >img {
        width: 100%;
        height: 100%;
      }
      &+div {
        margin-top: 8px;
      }
      &.active {
        border-color:#FF6600;
      }
    }
    &-date {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      color: #fff;
      background-color: rgba(0,0,0,.5);
    }
  }
  .demo-tabs-show-big {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    margin-right: 16px;
    background: #ccc;
    img {
      width: 100%;
      margin: auto;
    }
    .show-big-legend {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      top: 20px;
      left: 20px;
      padding: 16px 8px;
      border-radius: 5px;
      background: #fff;
      border: 1px solid #eaeaea;
      > .blue {
        height: 2px;
        width: 80%;
        margin-top: 8px;
        background: #0000FF;
      }
      > .red {
        height: 2px;
        width: 80%;
        margin-top: 8px;
        background: #FF0000;
      }
    }
    &-play {
      position: absolute;
      top: 45%;
      left: 50%;
      width: 60px;
      height: 60px;
      color: #fff;
      font-size: 25px;
      transform: rotate(-90deg);
      outline: none;
      border: none;
      border-radius: 50%;
      background: rgba(0,0,0,.5);
    }
  }
</style>
