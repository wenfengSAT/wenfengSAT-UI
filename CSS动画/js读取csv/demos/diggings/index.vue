<template>
  <a-layout class="whole-screen fly-bg">
    <a-layout-header class="demos-dig-head">
      <a-button type="link" class="head-back" @click="$router.go(-1)">
        <svg-icon icon-class="back" class="fs-4"></svg-icon> 返回
      </a-button>
      <span class="head-title">矿山监管</span>
      <div class="float-right">
        <span class="mr-5">
          矿山状态：
          <span class="demos-dig-status-tag"
            :style="{background: color}">
            {{title}}
          </span>
          （2019年1月9日数据）
        </span>
      </div>
    </a-layout-header>
    <a-layout class="mt-2">
      <a-layout-sider width="400" class="bg-white">
        <SiderLeft />
      </a-layout-sider>
      <a-layout-content class="mx-2 bg-white p-2">
        <ContentTable />
        <ContentTabs class="mt-2"/>
      </a-layout-content>
      <a-layout-sider width="400" class="bg-white">
        <SiderRight />
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>
<script>
import SiderLeft from './SiderLeft';
import SiderRight from './SiderRight';
import ContentTable from './ContentTable';
import ContentTabs from './ContentTabs';

const status = [
      {},
      { title: '正常', color: '#1ac776' },
      { title: '预警', color: '#3492FE' },
      { title: '超采', color: '#FF8242' },
      { title: '无证', color: '#965455' },
    ];
export default {
  title: '矿山监管',
  components: {
    SiderLeft,
    SiderRight,
    ContentTable,
    ContentTabs,
  },
  data() {
    return {};
  },
  computed: {
    title() {
      return status[this.$route.query.status].title;
    },
    color() {
      return status[this.$route.query.status].color;
    },
  },
};
</script>
<style lang="scss">
  .demos-dig-head {
    height: 50px;
    line-height: 50px;
    background: #fff;
    color:#414141;
    box-shadow:0 2px 8px 0 rgba(230,230,230,0.35);
    .head-back {
      line-height: 50px;
      height: 50px;
      color: #8691A9;
      font-size: 14px;
      border-right: 1px solid #E4E5E9;
      &:hover {
        color: #0e88eb;
      }
    }
    .head-title {
      margin-left: 40px;
      font-size: 16px;
      font-weight: 500;
    }
    .demos-dig-status-tag {
      color: #FFF;
      padding: 2px 8px;
      background: #FF6600;
    }
  }
</style>
