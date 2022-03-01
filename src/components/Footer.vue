<template>
  <v-footer>
    <div class="decorate">
      <div class="wavefooter-wrapper"></div>
      <div class="all_div">
        <v-card-text class="text-center">
          <v-btn class="mx-4 white--text" icon>
            <a
              href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes"
              target="_blank"
              style="text-decoration: none; color: white"
            >
              <v-icon size="24px"> mdi-qqchat </v-icon>
            </a>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <a
              href="http://wpa.qq.com/msgrd?v=3&uin=3465615034&site=qq&menu=yes"
              style="text-decoration: none; color: white"
            >
              <v-icon size="24px"> mdi-wechat </v-icon>
            </a>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <a
              href="https://www.weibo.com/u/1715351501"
              style="text-decoration: none; color: white"
            >
              <v-icon size="24px"> mdi-sina-weibo </v-icon>
            </a>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <a
              href="https://github.com/qiananran"
              style="text-decoration: none; color: white"
            >
              <v-icon size="24px"> mdi-github </v-icon>
            </a>
          </v-btn>
        </v-card-text>
        <v-card-text
          class="text-center"
          style="color: white; letter-spacing: 2px"
        >
          感谢您的访问，如果您感兴趣，请使用以上联系方式联系我！<br />
        </v-card-text>

        <v-card-text
          class="text-center"
          style="color: white; letter-spacing: 2px"
        >
          ©{{ new Date().getFullYear() }} fwenqian All Rights Reserved 九江学院
        </v-card-text>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.color {
  color: #bababa;
  clear: none;
  text-decoration: none;
  color: #bababa;
  margin-top: 10px;
}

footer {
  padding: 0;
  background-color: white;
}
.col {
  padding: 0;
}
.decorate {
  width: 100%;
}
.decorate::selection {
  background-color: #f85250;
}
.wavefooter-wrapper {
  height: 120px;
  background: url(https://cdn.apifox.cn/www/assets/image/index/hero-hub-tail.png)
    no-repeat;
  background-size: cover;
}
.footer-line {
  margin: 0 auto;
  max-width: 1224px;
  height: 1px;
  background: hsla(0, 0%, 100%, 0.32);
  margin-top: 20px;
}

.all_div {
  width: 100%;
  height: 220px;
  background-color: #181819;
  margin-top: -20px;
}
</style>