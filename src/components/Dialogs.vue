<template >
  <div v-if="this.$route.params.id == 0">
    <v-container class="typora-export os-windows">
      <div class="typora-export-content">
        <div id="write" class="first-line-indent">
          <p align="center">
            <strong
              >myBlog
              一个简洁美观、功能齐全的Java博客。使用springboot开发，前端使用thymeleaf。配有完备的前台和后台管理功能。</strong
            >
          </p>
          <p align="center">
            <strong>开源地址：</strong>
            <a target="_blank" href="https://gitee.com/anranzhen/myblog"
              >Gitee</a
            >
            |
            <a target="_blank" href="https://github.com/qiananran/myblog"
              >Github</a
            >
          </p>
          <p align="center"><strong>QQ：</strong>1228462329</p>
          <p>&nbsp;</p>
          <hr />
          <h1 id="重要声明"><span>重要声明</span></h1>
          <p>
            <strong><span>看文档！看文档！看文档！</span></strong
            ><span>，初次使用， 请先</span
            ><strong><span>看文档！</span></strong>
          </p>
          <ol>
            <li>
              <strong><span>提问题</span></strong
              ><span>前请优先阅读【</span
              ><a href="https://github.com/seajs/seajs/issues/545"
                ><span>如何向开源社区提问题</span></a
              ><span>】&amp;【</span
              ><a href="http://www.dianbo.org/9238/stone/tiwendezhihui.htm"
                ><span>提问的智慧</span></a
              ><span>】</span>
            </li>
            <li>
              <span>本项目唯一官网：</span
              ><a href="https://github.com/qiananran/myblog"
                ><span>https://github.com/qiananran/myblog</span></a
              ><span> </span>
            </li>
            <li>
              <span>本项目开源地址：</span
              ><a href="https://gitee.com/anranzhen/myblog"
                ><span>Gitee</span></a
              ><span> | </span
              ><a href="https://github.com/qiananran/myblog"
                ><span>Github</span></a
              >
            </li>
            <li><span>或者联系作者。</span></li>
          </ol>
          <p>&nbsp;</p>
          <hr />
          <p>&nbsp;</p>
          <h1 id="功能简介"><span>功能简介</span></h1>
          <ul>
            <li>
              <strong><span>博文浏览</span></strong
              ><span
                >：发现和找到自己需要的一些博客文章，提升自己的知识点。</span
              >
            </li>
            <li>
              <strong><span>文章留言</span></strong
              ><span
                >：在文章中发现有不会的或者作者没有描述清楚的内容，可以使用文章下的留言。</span
              >
            </li>
            <li>
              <strong><span>博文分类：</span></strong
              ><span>方便用户根据自己需要的方面进行分类浏览</span>
            </li>
            <li>
              <strong><span>博文标签：</span></strong
              ><span>为博客打上一个标签，能够将文章做一下管理</span>
            </li>
            <li>
              <strong><span>好友添加：</span></strong
              ><span>增加自我的交友面。通过朋友等学习更多的知识于技能。</span>
            </li>
            <li>
              <strong><span>整体留言：</span></strong
              ><span
                >通过他人的使用为开发者提供更为合理的用户体验设计。为系统的更好运行发挥作用。</span
              >
            </li>
            <li>
              <strong><span>注册登录：</span></strong
              ><span>网站的基本要求。没有登录，权限会受到限制。</span>
            </li>
          </ul>
          <p>&nbsp;</p>
          <hr />
          <h1 id="模块划分"><span>模块划分</span></h1>
          <div style="text-align: center">
            <img
              class="my_image"
              src="https://cdn.jsdelivr.net/gh/qiananran/myImage/onlinestudy/图片1.png"
              referrerpolicy="no-referrer"
              alt="image"
            />
          </div>
          <hr />
          <h1 id="技术栈"><span>技术栈</span></h1>
          <ul>
            <li><span>java , jdk1.8</span></li>
            <li><span>MySQL 8.0</span></li>
            <li><span>spring boot</span></li>
            <li><span>thymeleaf</span></li>
            <li><span>projectLombok</span></li>
            <li><span>css</span></li>
            <li><span>js</span></li>
            <li><span>html</span></li>
          </ul>
          <hr />
          <h1 id="预览"><span>预览</span></h1>
          <iframe
            class="my_video"
            src="//player.bilibili.com/player.html?aid=681914820&bvid=BV1wU4y1f78V&cid=530018093&page=1"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
          >
          </iframe>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div style="text-align: center">
            <v-btn
              min-width="200"
              min-height="60"
              color="primary"
              @click="backHome"
              ><span style="font-size: 20px">返回主页</span></v-btn
            >
          </div>
        </div>
      </div>
    </v-container>
  </div>
  <div v-else-if="this.$route.params.id == 1">
    <v-container class="typora-export os-windows">
      <div class="typora-export-content">
        <div id="write" class="first-line-indent">
          <p align="center">
            <strong
              >ToDo List
              一个简洁美观、功能基本的待办事项。使用Ionic开发。</strong
            >
          </p>
          <p align="center">
            <strong>开源地址：</strong>
            <a target="_blank" href="https://gitee.com/anranzhen/todo_simple"
              >Gitee</a
            >
          </p>
          <p align="center"><strong>QQ：</strong>1228462329</p>
          <p>&nbsp;</p>
          <hr />
          <h1 id="重要声明"><span>重要声明</span></h1>
          <p>
            <strong><span>看文档！看文档！看文档！</span></strong
            ><span>，初次使用， 请先</span
            ><strong><span>看文档！</span></strong>
          </p>
          <ol start="">
            <li>
              <strong><span>提问题</span></strong
              ><span>前请优先阅读【</span
              ><a href="https://github.com/seajs/seajs/issues/545"
                ><span>如何向开源社区提问题</span></a
              ><span>】&amp;【</span
              ><a href="http://www.dianbo.org/9238/stone/tiwendezhihui.htm"
                ><span>提问的智慧</span></a
              ><span>】</span>
            </li>
            <li>
              <span>本项目唯一官网：</span
              ><a
                href="https://gitee.com/anranzhen/todo_simple"
                target="_blank"
                class="url"
                >https://gitee.com/anranzhen/todo_simple</a
              >
            </li>
            <li>
              <span>本项目开源地址：</span
              ><a href="https://gitee.com/anranzhen/todo_simple"
                ><span>Gitee</span></a
              ><span> </span>
            </li>
            <li><span>或者联系作者。</span></li>
          </ol>
          <p>&nbsp;</p>
          <hr />
          <p>&nbsp;</p>
          <h1 id="功能简介"><span>功能简介</span></h1>
          <ul>
            <li>
              <strong><span>添加待办</span></strong
              ><span
                >：创建待办事项，并推送到云端。</span
              >
            </li>
            <li>
              <strong><span>删除待办</span></strong
              ><span
                >：将我们创建的待办事项进行删除。</span
              >
            </li>
            <li>
              <strong><span>全扫手势：</span></strong
              ><span>可以更方便的操作界面。</span>
            </li>
            <li>
              <strong><span>使用Bmob持久化：</span></strong
              ><span>将待办事项的数据持久化到云端数据库中。</span>
            </li>
            <li>
              <strong><span>下拉刷新：</span></strong
              ><span>实现下拉刷新。</span>
            </li>
          </ul>
          <hr />
          <h1 id="模块划分"><span>模块划分</span></h1>
          <p>
            <img
              class="my_image"
              src="https://cdn.jsdelivr.net/gh/qiananran/myImage/onlinestudy/20220301203535.png"
              referrerpolicy="no-referrer"
              alt="image"
            />
          </p>
          <hr />
          <h1 id="技术栈"><span>技术栈</span></h1>
          <ul>
            <li><span>Ionic</span></li>
            <li><span>Bmob</span></li>
            <li><span>Angular</span></li>
            <li><span>Typescript</span></li>
          </ul>
          <hr />
          <h1 id="预览"><span>预览</span></h1>
          <p><span>数据库表</span></p>
          <p>
            <img
              class="my_image"
              src="https://cdn.jsdelivr.net/gh/qiananran/myImage/onlinestudy/hellow .png"
              referrerpolicy="no-referrer"
            />
          </p>
          <p><span>样式：</span></p>
          <p>
            <img
              class="my_image"
              src="https://cdn.jsdelivr.net/gh/qiananran/myImage/onlinestudy/T1NTC06DK7TUZD.png"
              referrerpolicy="no-referrer"
            />
          </p>
          <div style="text-align: center">
          <v-btn
            min-width="200"
            min-height="60"
            color="primary"
            @click="backHome"
            ><span style="font-size: 20px">返回主页</span></v-btn
          >
        </div>
        </div>
        
      </div>
    </v-container>
  </div>
  <div v-else-if="this.$route.params.id == 2">
    <v-container class='typora-export os-windows'>
      <div class="typora-export-content">
        <div id="write" class="first-line-indent">
          <p align="center">
            <strong size="6">在线教育网站详情页展示效果。</strong>
          </p>
          <p align="center">
            <strong>开源地址：</strong>
            <a
              target="_blank"
              href="https://github.com/qiananran/online_final_study"
              >GitHub</a
            >
          </p>
          <p align="center"><strong>QQ：</strong>1228462329</p>
          <p>&nbsp;</p>
          <hr />
          <h1><span>重要声明</span></h1>
          <p>
            <strong><span>看文档！看文档！看文档！</span></strong
            ><span>，初次使用， 请先</span
            ><strong><span>看文档！</span></strong>
          </p>
          <ol start="">
            <li>
              <strong><span>提问题</span></strong
              ><span>前请优先阅读【</span
              ><a href="https://github.com/seajs/seajs/issues/545"
                ><span>如何向开源社区提问题</span></a
              ><span>】&amp;【</span
              ><a href="http://www.dianbo.org/9238/stone/tiwendezhihui.htm"
                ><span>提问的智慧</span></a
              ><span>】</span>
            </li>
            <li>
              <span>本项目唯一官网：</span
              ><a
                href="https://github.com/qiananran/online_final_study"
                target="_blank"
                class="url"
                >https://github.com/qiananran/online_final_study</a
              >
            </li>
            <li>
              <span>本项目开源地址：</span
              ><a href="https://github.com/qiananran/online_final_study"
                ><span>Github</span></a
              ><span> </span>
            </li>
            <li><span>或者联系作者。</span></li>
          </ol>
          <p>&nbsp;</p>
          <hr />
          <p>&nbsp;</p>
          <h1 id="功能简介"><span>功能简介</span></h1>
          <ul>
            <li>
              <strong><span>简单的页面展示</span></strong
              ><span>：简单的页面展示</span>
            </li>
          </ul>
          <hr />
          <h1 id="技术栈"><span>技术栈</span></h1>
          <ul>
            <li><span>Vue</span></li>
            <li><span>Figma</span></li>
          </ul>
          <hr />
          <h1 id="预览"><span>预览</span></h1>
          <p><span>设计稿：</span></p>
          <iframe
          class="my_video"
            style="border: 1px solid rgba(0, 0, 0, 0.1)"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIuaIuCt8zCjF8PWsFhS0nO%2FFlowbase-%257C-Course-Landing-(Community)%3Fnode-id%3D0%253A1"
            allowfullscreen=""
          ></iframe>
          <p>&nbsp;</p>
          <p><span>效果：</span></p>
          <iframe
          class="my_video"
            src="https://player.bilibili.com/player.html?aid=296892268&amp;bvid=BV1FF411b7tf&amp;cid=700129259&amp;page=1"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
          >
          </iframe>
          <p>&nbsp;</p>
          <div style="text-align: center">
          <v-btn
            min-width="200"
            min-height="60"
            color="primary"
            @click="backHome"
            ><span style="font-size: 20px">返回主页</span></v-btn
          >
        </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Dialogs",
  data() {
    return {};
  },
  created() {
    this.msg1 = this.$route.params.id; // 1
  },
  methods: {
    backHome() {
      this.$router.replace({ name: "Home" });
    },
  },
};
</script>
<style scoped>
@import "../assets/style/drake-juejin.css";

.my_video {
  width: 100%;
  height: 600px;
}
.my_image {
  width: 700px;
  height: 600px;
}

@media screen and (max-width: 600px) {
  .my_video {
    height: 200px;
  }

  .my_image {
    width: 300px;
    height: 400px;
  }
}
</style>