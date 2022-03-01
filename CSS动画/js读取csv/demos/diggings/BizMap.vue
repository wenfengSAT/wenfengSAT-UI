<template>
  <a-layout class="whole-screen fly-bg">
    <a-layout-header class="demos-dig-head">
      <a-button type="link" class="head-back" @click="$router.go(-1)">
        <svg-icon icon-class="back" class="fs-4"></svg-icon> 返回
      </a-button>
      <span class="head-title">矿山监管</span>
    </a-layout-header>
    <a-layout-content>
      <ol-map-controller ref="map" height="calc(100vh - 50px)">
      </ol-map-controller>
    </a-layout-content>
    <div class="spot-list">
      <div v-for="(item, index) in spots" :key="index" @click="clickRow(item, index)">
        <div class="media task-list-item">
          <img src="./images/example.png" class="align-self-center mr-3" style="width: 72px;" alt="开通更多">
          <div class="media-body align-self-center">
            <h5 class="mt-0 text-truncate mb-1" style="max-width: 250px;">
              {{ item.cname }}
            </h5>
            <p class="text-black-label mb-1">
              {{item.provinceName}}
              {{item.cityName}}
              {{item.countyName}}
              {{item.townsName}}
            </p>
            <p class="d-flex align-items-center">
              <img :src="icons[item.status]" alt="" srcset="">
              <span class="ml-1">{{ status[item.status] }}</span>
            </p>
          </div>
        </div>
        <a-divider class="my-1"/>
      </div>
    </div>
    <a-row class="sa-spot">
      <a-col :span="6" class="h-100 d-flex align-items-center justify-content-center">
        <img src="/marks/mark3.png" alt="" srcset="">
        <span class="ml-1">正常：4</span>
      </a-col>
      <a-col :span="6" class="h-100 d-flex align-items-center justify-content-center">
        <img src="/marks/mark6.png" alt="" srcset="">
        <span class="ml-1">预警：3</span>
      </a-col>
      <a-col :span="6" class="h-100 d-flex align-items-center justify-content-center">
        <img src="/marks/mark10.png" alt="" srcset="">
        <span class="ml-1">超采：2</span>
      </a-col>
      <a-col :span="6" class="h-100 d-flex align-items-center justify-content-center">
        <img src="/marks/mark1.png" alt="" srcset="">
        <span class="ml-1">无证：1</span>
      </a-col>
    </a-row>
  </a-layout>
</template>
<script>
import api from '@/api';
import demo from './demo';
import OlMapController from '@/components/OlMapController';

export default {
  title: '矿山地图',
  mixins: [demo],
  components: {
    OlMapController,
  },
  county: {
    type: [String, Number],
    default: '',
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(()=> {
      this.$refs.map.initTileMap();
      this.$refs.map.createLayer('border');
      this.$refs.map.createLayer('points');
      this.drawBorder();
    });
  },
  methods: {
    // 画出县级边界
    drawBorder() {
      const { county } = this.$route.query;
      this.$get(`${api.regionBorder}?codev6=${county}`).then((res)=> {
        const { poi, wktgeom } = res.data.data;
        const len = poi.length;
        const [x, y] = poi.substring(6, len - 1).split(' ');
        // 定位中心点
        this.$refs.map.mapCenterAt([+x, +y], 11);
        // 绘制区域
        this.$refs.map.addWktGeometryToMap(wktgeom, {
          lineColor: 'rgba(18,246,252, 1)',
          fillColor: 'rgba(164,233,255, 0.2)',
        }, 'border');
        this.setPagePoints(this.spots);
      });
    },
    // 标记当前数据点
    setPagePoints(arr = []) {
      const { $refs: { map }, icons } = this;
      const points = arr.map((item)=> {
        const { gpsX, gpsY } = item;
        return {
          lngLat: [gpsX, gpsY],
          style: { src: icons[item.status] },
        };
      });
      if (map) {
        map.customizeClusterFeatures(points, { layerName: 'points' });
      }
    },
    clickRow(row) {
      this.$router.push({ name: 'dig', query: { status: row.status } });
    },
  },
};
</script>
<style lang="scss" scoped>
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
  .spot-list {
    position: absolute;
    top: 70px;
    left: 30px;
    height: calc(100vh - 100px);
    width: 380px;
    padding: 16px;
    background: #fff;
    border-radius: 4px;
    overflow: auto;
  }
  .sa-spot {
    position: absolute;
    top: 70px;
    right: 30px;
    height: 50px;
    width: 450px;
    background: #fff;
    border-radius: 4px;
    padding: 10px 0;
    &>div + div {
      border-left: 1px solid #d4d4d4;
    }
  }
  .task-list-item {
    cursor: pointer;
    padding: 10px;
    margin-top: 10px;
    &:hover {
      background: #E6F7FF;
    }
  }
</style>
