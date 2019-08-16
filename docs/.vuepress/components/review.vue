<template>
  <div>
    <br />
    <br />
    <div v-for="(page,index) in this.pages">
      <template
        v-if="list.indexOf(page.frontmatter.ct) >= 0 || list.indexOf(page.frontmatter.ut) >= 0"
      >
        <span
          v-if="checkBoxList.indexOf(page.path) >= 0"
          class="over"
          @dblclick="changeToWait(page.path)"
        >已完成</span>
        <span v-else class="wait" @dblclick="changeToOver(page.path)">未完成</span>
        <a class="cqf_a" @click="toPage(page)">{{page.title}}</a>
      </template>
    </div>
  </div>
</template>

<script>
const CACHE_KEY = "cqf_cache";

module.exports = {
  props: ["pages"],
  created() {
    // 需要复习的日期
    this.list = [
      moment(new Date())
        .subtract(1, "days")
        .format("YYYY/MM/DD"),
      moment(new Date())
        .subtract(2, "days")
        .format("YYYY/MM/DD"),
      moment(new Date())
        .subtract(4, "days")
        .format("YYYY/MM/DD"),
      moment(new Date())
        .subtract(7, "days")
        .format("YYYY/MM/DD"),
      moment(new Date())
        .subtract(15, "days")
        .format("YYYY/MM/DD"),
      moment(new Date())
        .subtract(30, "days")
        .format("YYYY/MM/DD"),
      moment(new Date())
        .subtract(60, "days")
        .format("YYYY/MM/DD")
    ];

    //找到今天复习的缓存数据
    let today = moment(new Date()).format("YYYY/MM/DD");
    let cache = localStorage.getItem(CACHE_KEY) || "{}";
    let cacheObj = JSON.parse(cache);
    if (!cacheObj.hasOwnProperty(today)) {
      let valueObj = {};
      valueObj[today] = [];
      localStorage.setItem(CACHE_KEY, JSON.stringify(valueObj));
      cacheObj[today] = [];
    }
    this.checkBoxList = cacheObj[today];
  },
  data: function() {
    return {
      checkBoxList: [],
      list: [] // 需要复习的日期
    };
  },
  methods: {
    getIndex(list, path) {
      for (let i = 0; i < this.checkBoxList.length; i++) {
        let p = this.checkBoxList[i];
        if (p === path) {
          return i;
        }
      }
      return -1;
    },
    addPath(path) {
      let index = this.getIndex(this.checkBoxList, path);
      if (index === -1) {
        this.checkBoxList.push(path);
        let today = moment(new Date()).format("YYYY/MM/DD");
        let valueObj = {};
        valueObj[today] = this.checkBoxList;
        localStorage.setItem(CACHE_KEY, JSON.stringify(valueObj));
      }
    },
    deletePath(path) {
      let index = this.getIndex(this.checkBoxList, path);
      if (index >= 0) {
        this.checkBoxList.splice(index, 1);
        let today = moment(new Date()).format("YYYY/MM/DD");
        let valueObj = {};
        valueObj[today] = this.checkBoxList;
        localStorage.setItem(CACHE_KEY, JSON.stringify(valueObj));
      }
    },
    changeToOver(path) {
      this.addPath(path);
    },
    changeToWait(path) {
      this.deletePath(path);
    },
    toPage({ path, regularPath }) {
      setTimeout(() => {
        this.addPath(path);
      }, 500);
      this.$router.push(regularPath);
    }
  }
};
</script>

<style>
.cqf_a {
  cursor: pointer;
}

.over {
  cursor: pointer;
  user-select: none;
  background-color: #fff5f5 !important;
  color: #ff502c !important;
  padding: 0.065em 0.4em !important;
  margin-right: 5px;
}
.wait {
  cursor: pointer;
  user-select: none;
  margin-right: 5px;
  background-color: #f1eded !important;
  color: #a09c9b !important;
  padding: 0.065em 0.4em !important;
}
</style>


