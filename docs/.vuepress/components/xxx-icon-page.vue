<template>
  <div>
    <xxx-icon-card inconTitle="方向指示类图标" :iconList="arrowIconList" ></xxx-icon-card>
    <xxx-icon-card inconTitle="提示建议类图标" :iconList="suggestionIconList" ></xxx-icon-card>
    <xxx-icon-card inconTitle="交互按钮类图标" :iconList="interactiveIconList" ></xxx-icon-card>
    <xxx-icon-card inconTitle="编辑类图标" :iconList="editIconList" ></xxx-icon-card>
    <xxx-icon-card inconTitle="影音类图标" :iconList="videoList" ></xxx-icon-card>
    <xxx-icon-card inconTitle="商标类图标" :iconList="businessList" ></xxx-icon-card>
    <xxx-icon-card inconTitle="通用性图标" :iconList="generalIconList"></xxx-icon-card>
  </div>
</template>

<script>

import Vue from "vue";
import iconCard from "./xxx-icon-card.vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      businessList: [
        "qq",
        "wechat",
        "facebook",
        "github",
        "google",
        "alipay",
        "tiktok",
        "weibo",
        "Gitlab",
      ],
      videoList: [
        "mute-fill",
        "sound-fill",
        "record",
        "play-circle-fill",
        "pause-circle-fill",
        "play-circle",
        "pause-circle",
        "skip-next",
        "skipprevious",
        "musicfill"
      ],

      editIconList: [
        "h1",
        "h2",
        "undo",
        "redo",
        "scissor",
        "fuzhi",
        "zoomin",
        "zoomout",
        "align-left",
        "link",
        "edit",
        "attachment",
        "quote",
        "delete"
      ],


      interactiveIconList: [
        "thumb-down-line",
        "thumb-up-line",
        "thumb-down-fill",  
        "thumb-up-fill",
        "search",
        "download",
        "share-alt",
        "settings",
        "icon_home",
        "heart-fill",
        "star",
        "heart",
        "scan",
        "save",
        "customer-service",
        "atm",
        "history"
      ],

      suggestionIconList: [
        "info-circle-filled",
        "check-circle-filled",
        "minus-circle-filled",
        "question-circle-fill",
        "plus-circle-fill",
        "exclamation",
        "star-fill",

      ],

      arrowIconList: [
        "arrow-left",
        "arrow-right",
        "arrow-up",
        "arrow-down"
      ],


      generalIconList: [
        // "info",
        // "custom-search",
        // "share",
        // "yin",
        // "edit",
        // "goods",
        // "phone",
        // "sunny",
        // "user",
        // "warning",
        // "error_3",
        // "star",
        // "ArrowLeft",
        // "ArrowRight",
        // "circle-remove",

        // new add
        "skin",
        "face_frown",
        "face_smile",
        "sun-fill",
        "password",
        "pen",
        "moon-fill",
        "english",
        "chinese",
        "woman",
        "man",
        "book",
        "loading",
        "camera",
        "bulb",
        "file-image",
        "location",
        "user"
      ],
    };
  },
  components: {
    "xxx-icon-card": iconCard
  },
};
</script>


