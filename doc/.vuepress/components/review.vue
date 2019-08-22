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

const formatDate = function(date, format) {
  if (arguments.length < 2 && !date.getTime) {
    format = date;
    date = new Date();
  }
  typeof format != "string" && (format = "YYYY年MM月DD日 hh时mm分ss秒");
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "日",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六"
  ];
  return format.replace(/YYYY|YY|MM|DD|hh|mm|ss|星期|周|www|week/g, function(
    a
  ) {
    switch (a) {
      case "YYYY":
        return date.getFullYear();
      case "YY":
        return (date.getFullYear() + "").slice(2);
      case "MM":
        return date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      case "DD":
        return date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      case "hh":
        return date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      case "mm":
        return date.getMinutes() < 10
          ? "0" + date.getMinutes()
          : date.getMinutes();
      case "ss":
        return date.getSeconds() < 10
          ? "0" + date.getSeconds()
          : date.getSeconds();
      case "星期":
        return "星期" + week[date.getDay() + 7];
      case "周":
        return "周" + week[date.getDay() + 7];
      case "week":
        return week[date.getDay()];
      case "www":
        return week[date.getDay()].slice(0, 3);
    }
  });
};

export default {
  props: ["pages"],
  mounted(){
    // 需要复习的日期
    this.list = [
      // formatDate(new Date(Date.now() - 86400000 * 1),"YYYY/MM/DD"),
      // formatDate(new Date(Date.now() - 86400000 * 2),"YYYY/MM/DD"),
      // formatDate(new Date(Date.now() - 86400000 * 4),"YYYY/MM/DD"),
      // formatDate(new Date(Date.now() - 86400000 * 7),"YYYY/MM/DD"),
      // formatDate(new Date(Date.now() - 86400000 * 15),"YYYY/MM/DD"),
      // formatDate(new Date(Date.now() - 86400000 * 30),"YYYY/MM/DD"),
      // formatDate(new Date(Date.now() - 86400000 * 60),"YYYY/MM/DD"),
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
    // let today = formatDate(new Date(),"YYYY/MM/DD");
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
  created() {
    
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
        //  let today = formatDate(new Date(),"YYYY/MM/DD");
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
        //  let today = formatDate(new Date(),"YYYY/MM/DD");
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


