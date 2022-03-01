<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll color="white" class="my_app" flat>
      <v-avatar
        class="hidden-lg-and-up"
        :color="
          $vuetify.breakpoint.smAndDown ? 'white darken-1' : 'transparent'
        "
        size="38"
      >
        <v-icon size="38" @click="openGithub">mdi-github</v-icon>
      </v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab
          ><a href="#my" style="text-decoration: none; color: grey"
            >我</a
          ></v-tab
        >
        <v-tab
          ><a href="#introduction" style="text-decoration: none; color: grey"
            >简介</a
          ></v-tab
        >
        <v-tab
          ><a href="#product" style="text-decoration: none; color: grey"
            >作品</a
          ></v-tab
        >
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="white darken-1 shrink"
        size="38"
        style="margin-top: 20px"
      >
        <v-icon size="38" @click="openGithub">mdi-github</v-icon>
      </v-avatar>
    </v-app-bar>

    <v-main class="white lighten-3">
      <v-container>
        <div>
          <p id="my" class="my_text my_i">
            我
            <img
              width="38"
              height="38"
              style="padding-top: 8px"
              src="https://api.iconify.design/twemoji:heart-suit.svg?color=currentColor"
              alt=""
            />
          </p>
        </div>

        <v-row>
          <v-col cols="12" class="rounded">
            <v-card class="">
              <div class="i_card my_card">
                <v-row>
                  <v-col cols="12" style="padding: 0">
                    <div class="info2">
                      <p class="my_text2">
                        <span>初次见面，</span><br />
                        <span>我的名字叫范文芊</span><br />
                        <span
                          style="
                            font-size: 16px;
                            margin-top: -15px;
                            margin-left: 5px;
                          "
                          >是一个热爱计算机的编程界小学生</span
                        >
                      </p>
                      <p style=""></p>
                      <div style="margin-top: 80px">
                        <v-btn color="black">
                          <span style="color: white">
                            <a
                              href="#product"
                              style="text-decoration: none; color: white"
                              >查看所有作品</a
                            >
                          </span>
                        </v-btn>
                      </div>
                      <br />
                      <br />
                      <br />
                      <v-icon
                        id="introduction"
                        v-for="(icon, index) in icons"
                        :key="index"
                        style="margin-left: 10px; color: white"
                        @click="openGithub"
                      >
                        &nbsp; &nbsp; {{ icon }}
                      </v-icon>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <div id="introduction">
          <p class="my_text" style="margin-top: 60px">
            简介
            <img
              width="38"
              height="38"
              style="padding-top: 8px"
              src="https://api.iconify.design/twemoji:woman-in-steamy-room.svg?color=currentColor"
              alt=""
            />
          </p>
          <v-row>
            <v-col cols="12"
              ><span style="font-size: 22px; font-weight: 800"
                ><span style="color: rgb(224, 77, 101)">Hello，</span>
                很高兴能与您在这相遇</span
              ></v-col
            >

            <v-col cols="12">
              <v-card class="pa-5">
                <span style="margin-left: 14px; font-size: 18px"
                  >基本信息 &nbsp;<img
                    src="https://api.iconify.design/twemoji:ribbon.svg?color=currentColor"
                    alt=""
                /></span>
                <br />
                <v-chip class="ma-2" outlined> 姓名：范文芊 </v-chip>
                <v-chip class="ma-2" color="rgb(224, 77, 101)" outlined>
                  毕业院校：九江学院
                </v-chip>
                <v-chip class="ma-2" color="black" outlined>
                  专业：计算机科学与技术
                </v-chip>
                <v-chip class="ma-2" color="success" outlined>
                  学历：本科
                </v-chip>

                <v-chip class="ma-2" color="primary" outlined>
                  邮箱：1228462329@qq.com
                </v-chip>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card class="pa-5">
                <span style="margin-left: 14px; font-size: 18px"
                  >能胜任的&nbsp;
                  <img
                    src="https://api.iconify.design/noto:volcano.svg?color=currentColor"
                    alt=""
                /></span>
                <br />
                <v-btn
                  v-if="!chip1 && !chip2 && !chip3 && !chip4"
                  close
                  color="primary"
                  dark
                  @click="
                    (chip1 = true),
                      (chip2 = true),
                      (chip3 = true),
                      (chip4 = true)
                  "
                >
                  重置
                </v-btn>

                <v-chip
                  v-if="chip1"
                  class="ma-2"
                  close
                  label
                  outlined
                  text-color="black"
                  @click:close="chip1 = false"
                >
                  Spring Boot
                </v-chip>

                <v-chip
                  v-if="chip2"
                  class="ma-2"
                  close
                  color="red"
                  label
                  outlined
                  @click:close="chip2 = false"
                >
                  C 语言及数据结构
                </v-chip>

                <v-chip
                  v-if="chip3"
                  class="ma-2"
                  close
                  color="green"
                  label
                  outlined
                  @click:close="chip3 = false"
                >
                  Vuetify设计框架
                </v-chip>

                <v-chip
                  v-if="chip4"
                  class="ma-2"
                  close
                  color="orange"
                  label
                  outlined
                  @click:close="chip4 = false"
                >
                  微信小程序
                </v-chip>
              </v-card>
            </v-col>
            <v-col cols="12" style="margin-top: -10px">
              <v-card class="pa-5">
                <span style="margin-left: 14px; font-size: 18px"
                  >性格、爱好&nbsp;
                  <img
                    src="https://api.iconify.design/emojione:heavy-heart-exclamation.svg?color=currentColor"
                    alt=""
                /></span>
                <br />
                <v-chip class="ma-2" label color="success" text-color="white">
                  热爱运动
                </v-chip>
                <v-chip class="ma-2" label color="black" text-color="white">
                  积极乐观
                </v-chip>
                <v-chip class="ma-2" label color="orange" text-color="white">
                  语言沟通能力强
                </v-chip>
                <v-chip class="ma-2" label color="primary" text-color="white">
                  学习能力强
                </v-chip>

                <v-chip class="ma-2" label color="teal" text-color="white"> 对新事物的接受能力强 </v-chip>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <p class="my_text" style="margin-top: 60px" id="product">
          作品
          <img
            width="38"
            height="38"
            style="padding-top: 8px"
            src="https://api.iconify.design/vscode-icons:file-type-xml.svg?color=currentColor"
            alt=""
          />
        </p>

        <v-row
          class="fill-height"
          align="center"
          justify="center"
          style="margin-bottom: 60px"
        >
          <template v-for="(item, i) in items">
            <v-col :key="i" cols="12" md="4">
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-img :src="item.img" height="225px">
                    <v-card-title class="text-h6 white--text">
                      <v-row
                        class="fill-height flex-column"
                        justify="space-between"
                      >
                        <p class="mt-4 subheading text-left">
                          {{ item.title }}
                        </p>

                        <div>
                          <p
                            class="
                              ma-0
                              text-body-1
                              font-weight-bold font-italic
                              text-left
                            "
                          >
                            {{ item.text }}
                          </p>
                          <p
                            class="
                              text-caption
                              font-weight-medium font-italic
                              text-left
                            "
                          >
                            {{ item.subtext }}
                          </p>
                        </div>
                        <div class="align-self-center">
                          
                            <v-btn color="primary"  v-if="i == 0" @click="openDialogs">了解更多</v-btn>
                            <v-btn color="primary" v-if="i == 1" @click="openDialogs1">了解更多</v-btn>
                            <v-btn color="primary" v-if="i == 2" @click="openDialogs2">了解更多</v-btn>
                        </div>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Home",

  components: {
    Footer,
  },

  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      links: ["我", "介绍", "作品"],
      icons: ["mdi-wechat", "mdi-github", "mdi-sina-weibo"],
      items: [
        {
          title: "java开发个人博客",
          text: `记录、分享`,
          subtext: "基于 Spring Boot 的 web 项目",
          img: "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         
        },
        {
          title: "Ionic 简单ToDO List",
          text: "移动端开发 Ionic 开发待办事项",
          subtext: "ionic 是一个强大的 HTML5 应用程序开发框架",
          img: "https://cdn.jsdelivr.net/gh/qiananran/myImage/onlinestudy/pexels-photo-1586663.jpeg",
          
        },
        {
          title: "视频网站首页",
          text: "用于展示产品详情",
          subtext: "vue 项目.",
          img: "https://cdn.jsdelivr.net/gh/qiananran/myImage/onlinestudy/pexels-photo-957144.jpeg",
          
        },
      ],
      index: "0",
      index1: "1",
      index2: "2",
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
  methods: {
    openGithub() {
      window.location.href = "https://github.com/qiananran";
    },
    openDialogs() {
      this.$router.push({
        path: `/dialogs/${this.index}`, // 直接把数据拼接在path后面
      });
    },
    openDialogs1() {
      this.$router.push({
        path: `/dialogs/${this.index1}`, // 直接把数据拼接在path后面
      });
    },
    openDialogs2() {
      this.$router.push({
        path: `/dialogs/${this.index2}`, // 直接把数据拼接在path后面
      });
    },
  },
};
</script>

<style scoped>
.project_card {
  transition: opacity 0.4s ease-in-out;
}

.project_card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.my_text {
  font-family: "Courier New", Courier, monospace;
  font-weight: 800;
  font-size: 36px;
}
.my_text2 {
  font-family: "Courier New", Courier, monospace;
  font-weight: 800;
  font-size: 36px;
  color: white;
}
.info2 {
  margin: 60px;
}

@media (max-width: 600px) {
  .i_card {
    margin: 2px;
  }
}

.my_card {
  background-image: url("https://cdn.jsdelivr.net/gh/qiananran/myImage/onlinestudy/微信图片_20220228125532.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.my_i {
  margin-top: -80px;
}

@media screen and (max-width: 600px) {
  .my_card {
    background-image: url("https://cdn.jsdelivr.net/gh/qiananran/myImage/onlinestudy/微信图片_20220228125532.jpg");
  }

  .info2 {
    margin: 25px;
  }

  .my_app {
    display: none;
  }
  .my_i {
    margin-top: -210px;
  }
}
</style>
