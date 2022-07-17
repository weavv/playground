<template>
  <div v-bind:class="bgCoverTheme">

    <!-- Logo -->
    <div class="stack-1 absolute top-12 left-12 flex justify-start items-start height-screen width-full"
    >
      <!-- <img
        v-bind:class="bgLogoTheme"
        src="assets/image/logo_full.svg"
        alt="Weavv"
      >
    </div> -->

    <!-- back to Editor from Previewer -->
    <!-- <div
      v-bind:class="[
        isActive
          ? 'hidden'
          : 'stack-5 absolute bottom-5 left-6 (group) flex justify-center items-center padding-x-3 padding-y-2 text-tint-onyx-5 bg-tint-onyx-5 (hover)bg-tint-teal-1 (active)bg-tint-teal-1 border-4 border-transparent (hover)border-tone-teal-1 shadow-dreamy-lg curve-border-lg transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none'
      ]"
      @click="toggleModes"
      title="Editor (Ctrl+Alt+M)"
    >
      <img
        class="invert-1 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 width-6 height-6 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-110"
        src="assets/image/editor.svg"
      >
      <div
        class="margin-l-2 text-sm font-semibold text-tint-onyx-5 (group-hover)text-tint-onyx-1 opacity-50 (group-hover)opacity-100"
      >
        Editor
      </div> -->
    </div>

    <!-- Editor -->
    <div
      v-model="activeName"
      v-bind:class="[
        isActive
          ? 'stack-2 relative height-screen width-full animation fade-in duration-300'
          : 'flex-initial invisible animation fade-out duration-300'
      ]"
    >

      <!-- menu -->
      <div
        v-bind:class="[
          isActive
            ? 'breakpoint-480 menuBarTheme'
            : 'hidden'
        ]"
      >
        <div class="padding-2 flex justify-between items-center">
          <div class="flex justify-center items-center select-none">
            <!-- logo -->
            <div class="padding-x-2 animation roll-in-left duration-800">
              <svg v-bind:class="logoTheme" width="200.17mm" height="184.41mm" version="1.1" viewBox="0 0 200.17 184.41" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(379.78 -21.748)">
                <path transform="matrix(.69746 -.71663 .69746 .71663 0 0)" d="m-307.54-174.07h69.877c18.439 0 33.283 14.844 33.283 33.283v73.813c0 18.439-14.844 33.283-33.283 33.283h-69.877c-18.439 0-33.283-14.844-33.283-33.283v-73.813c0-18.439 14.844-33.283 33.283-33.283z" fill="#0cf" stroke-width=".50337"/>
                <path d="m-318.07 110.62h45.2c5.7032 0 10.295 4.5914 10.295 10.295 0 5.7032-4.5914 10.295-10.295 10.295h-45.2c-5.7032 0-10.295-4.5914-10.295-10.295 0-5.7032 4.5914-10.295 10.295-10.295z" fill="#fff" stroke-width=".83952" style="font-variation-settings:'wght' 300"/>
                <path transform="matrix(.69746 -.71663 .69746 .71663 0 0)" d="m-322.37-202.78h69.877c18.439 0 33.283 14.844 33.283 33.283v73.813c0 18.439-14.844 33.283-33.283 33.283h-69.877c-18.439 0-33.283-14.844-33.283-33.283v-73.813c0-18.439 14.844-33.283 33.283-33.283z" fill="none" stroke="#4d4d4d" stroke-width="7.8962"/>
                <path d="m-350.58 102.42h48.71c4.7308 0 8.5394 3.8086 8.5394 8.5394 0 4.7309-3.8086 8.5394-8.5394 8.5394h-48.71c-4.7308 0-8.5394-3.8086-8.5394-8.5394 0-4.7308 3.8086-8.5394 8.5394-8.5394z" fill="none" stroke="#4d4d4d" stroke-width="7.8947" style="font-variation-settings:'wght' 300"/>
                </g>
              </svg>
            </div>
            <!-- docs -->
            <!-- <div class="animation roll-in-left duration-800">
              <a
                v-bind:class="docButtonTheme"
                href="https://weavvcss.netlify.app/getting-started/"
                target="_blank"
                rel="noopener"
                title="Read the Documentation"
              >
                Docs
              </a>
            </div> -->
          </div>

          <!-- Main Buttons -->
          <div class="padding-x-2 flex flex-gap-2 justify-end items-center">
            <div
              v-for='item in mainButtons'
              :key='item.title'
            >

              <div
                v-bind:class="mainButtonTheme"
                :title='item.tooltip'
                @click='item.action'
              >
                <img
                  v-bind:class="mainButtonIconTheme"
                  :src='item.icon'
                  :alt='item.title'
                >
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- status -->
      <div
        v-bind:class="preloaderTheme"
        v-if="workingStatus"
      />

      <div
        v-bind:class="preloaderTheme"
        v-if="resetStatus"
      />

      <div
        name="html"
        :lazy="true"
        :key="componentKey">

        <MyEditor
          :language="'html'"
          :codes="loadHtmlCodes"
          :theme="editorTheme"
          @onCodeChange="htmlOnCodeChange"
        />

      </div>

    </div>

    <!-- Resizable Window Bar -->
    <div
      v-bind:class="[
        isActive
          ? 'stack-2 width-auto height-screen'
          : 'stack-2 width-auto height-full'
      ]"
      title="Resize Window"
      id="windowResize"
    >
      <div
        v-bind:class="[
          isActive
            ? 'height-full'
            : '(group) height-full flex flex-column justify-start items-center'
        ]"
      >
        <div
          v-bind:class="[
            isActive
              ? 'width-1 height-full bg-tint-onyx-1 (hover)bg-tint-teal-1 (active)bg-tint-teal-1 (focus)bg-tint-teal-1 cursor-col-resize select-none transition duration-200 ease-in-out'
              : 'stack-3 -margin-r-8 transform (hover)-translate-x-8 flex justify-center items-center width-10 height-screen bg-bg-tint-teal-1 (group-hover)bg-bg-tint-teal-1 (hover)shadow-dreamy-sm cursor-col-resize transition duration-200 ease-in-out shadow-dreamy-lg curve-l-lg select-none',
          ]"
        />

      </div>
    </div>

    <!-- Preview -->
    <div
      v-bind:class="[
        isActive
          ? 'stack-2 flex-1 height-screen animation fade-in duration-300'
          : 'stack-2 flex-1 height-screen animation fade-in duration-200'
      ]"
    >
      <div
        v-bind:class="[
          isActive
            ? 'stack-2 height-screen breakpoint-640 bg-white shadow-lg'
            : 'stack-2 flex-1 height-screen breakpoint-320 bg-white shadow-lg'
        ]"
        id="result"
      />
    </div>

  </div>
</template>


<script>
  import MyEditor from "../components/editor";
  import { windowResizer } from "../modules/windowResizer";

  export default {
    components: {
      MyEditor,
    },
    data() {
      return {
        htmlCodes: '<!-- \n\
    Welcome to WEAVV CSS Playground!\n\
    (?) F1 for Command Palette\n\
    (?) RightClick for more options\n\
    (?) Shift+Alt+LeftClick for multi-selection\n\
    (?) Ctrl+Alt+/ to run code\n\
  --> \n\n\
  <body class="font-poppins antialised height-full bg-tint-onyx-4 flex flex-column flex-center">\n\
    <div class="(group) relative flex flex-column flex-center">\n\
      <div class="text-lg text-white text-offset-shadow offset-x-2 offset-y-2 offset-blur-4 transform (group-hover)translate-y-16 transition duration-300 linear">\n\
        Welcome to WEAVV CSS Demo\n\
      </div>\n\
      <div class="absolute top-20 transform (group-hover)-translate-y-32 transition duration-100 linear flex justify-center items-center">\n\
        <img class="width-32 height-32 object-cover object-center curve-border-full filter brightness-4 saturate-2" src="https://i.pravatar.cc/400?15">\n\
        <div class="padding-x-4 text-xl-2 text-shade-onyx-1 font-bold">\n\
          John Doe\n\
        </div>\n\
      </div>\n\
      <div class="stack-1 relative margin-8 (md)max-width-screen-sm flex (sm)flex-row (md)flex-column (md)justify-center (sm)justify-between items-center bg-white curve-border-lg (hover)shadow-dreamy-lg transition duration-300 linear overflow-hidden cursor-pointer">\n\
        <img class="transform (group-hover)scale-105 duration-300 (md)width-full (sm)width-64 (md)height-64 (sm)height-88 object-cover object-center bg-tint-onyx-3 bg-tint-onyx-5 filter brightness-4 saturate-2" src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=640">\n\
        <div class="(md)padding-10 (sm)padding-6 (child-1)padding-t-2 (child-2)padding-t-2 (child-3)padding-t-4 (child-1)text-xl-5 (child-2)text-xl-5 (child-3)text-sm text-tint-onyx-1 font-bold ">\n\
          <p class="(group-hover)hidden depth-tight-2 transition duration-300 linear">\n\
            Absolute <br> Silent\n\
          </p>\n\
          <p class="hidden (group-hover)block text-tint-teal-1 depth-tight-2 transition duration-300 linear">\n\
            Absolute <br> <span class="(group-hover)text-underline">Noisy</span>\n\
          </p>\n\
          <p>\n\
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id magna in purus <span class="text-underline line-thickness-3 line-offset-1">sodales efficitur</span>. Maecenas consequat sem magna, mollis pulvinar ante tincidunt quis.\n\
          </p>\n\
        </div>\n\
        <div class="absolute top-2 right-0">\n\
          <div class="text-lg text-right -margin-r-6 transform (group-hover)-translate-x-8 transition duration-100 linear">\n\
            <a class="(hover)opacity-50" href="#">\n\
              <img class="width-6 height-6 (hover)width-10 (hover)height-10 transition duration-300 linear" src="https://cdn-icons.flaticon.com/png/512/2030/premium/2030957.png?token=exp=1658062517~hmac=6497a9d16133e65dc2fee456e4f21f93">\n\
            </a>\n\
          </div>\n\
        </div>\n\
        <div class="absolute bottom-0 left-2 right-2 flex flex-center">\n\
          <div class="-margin-b-16 height-12 transform (group-hover)-translate-y-16 (expand)width-10 (expand)height-10 (expand)curve-border-full flex justify-around items-center width-full (group-hover)bg-shade-onyx-1 curve-border-full transition duration-300 ease-in-out shadow-dreamy filter brightness-2 saturate-2">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?1">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?2">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?3">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?4">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?5">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?6">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?7">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?8">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?9">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?10">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?11">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?12">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?13">\n\
            <img class="(hover)width-16 (hover)height-16 transform (hover)-translate-y-4 object-cover object-center border-4 border-transparent (hover)border-tint-teal-1 transition duration-300 linear (hover)shadow-md" src="https://i.pravatar.cc/50?14">\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="absolute bottom-18 transform (group-hover)translate-y-56 transition duration-1000 ease-in-out">\n\
        <div class="padding-y-2 font-lato text-xs text-shade-onyx-1">\n\
          Arkworks &copy; John Doe\n\
        </div>\n\
        <div class="flex flex-gap-2 cursor-pointer">\n\
          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)-translate-y-2 transition duration-300 linear (hover)opacity-75 filter brightness-2 saturate-2" src="https://images.pexels.com/photos/814830/pexels-photo-814830.jpeg?auto=compress&cs=tinysrgb&w=300">\n\
          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)-translate-y-2 transition duration-300 linear (hover)opacity-75" src="https://images.pexels.com/photos/1742927/pexels-photo-1742927.jpeg?auto=compress&cs=tinysrgb&w=300">\n\
          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)-translate-y-2 transition duration-300 linear (hover)opacity-75" src="https://images.pexels.com/photos/708764/pexels-photo-708764.jpeg?auto=compress&cs=tinysrgb&w=300">\n\
          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)-translate-y-2 transition duration-300 linear (hover)opacity-75" src="https://images.pexels.com/photos/2537609/pexels-photo-2537609.jpeg?auto=compress&cs=tinysrgb&w=300">\n\
        </div>\n\
      </div>\n\
      <div class="flex flex-center flex-gap-2 select-none transform (group-hover)-translate-y-24 transition duration-100 linear">\n\
        <div class="relative width-12 height-12 text-xs bg-white curve-border-lg shadow-lg">\n\
          <div class="absolute top-4 left-1 transform -rotate-45 text-tint-onyx-2 shadow-dreamy-lg">\n\
            Credits\n\
          </div>\n\
        </div>\n\
        <div class="text-xs text-white text-offset-shadow offset-x-2 offset-y-2 offset-blur-4">\n\
          <div>\n\
            Image taken from\n\
            <a class="text-underline text-uppercase" href="https://www.pexels.com/photo/photography-of-roadway-during-dusk-1034662/" target="_blank">\n\
              pexels\n\
            </a>\n\
          </div>\n\
          <div>\n\
            Code editor ~\n\
            <a class="text-underline text-uppercase" href="https://microsoft.github.io/monaco-editor/" target="_blank">\n\
              Monaco Editor\n\
            </a>\n\
          </div>\n\
          <div>\n\
            Framework written with\n\
            <a class="text-underline text-uppercase" href="https://sass-lang.com/" target="_blank">\n\
              Sass-Lang\n\
            </a>\n\
          </div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
  </body>',
        jsCodes: "",
        cssCodes: "",
        mainButtons: [
          {
            title: 'Reset',
            icon: 'assets/image/reset.svg',
            tooltip: 'Reset auto-saved data',
            action: this.resetData
          },
          // {
          //   title: 'Dark/Light Mode',
          //   icon: 'assets/image/dark-light-mode.svg',
          //   tooltip: 'Dark/Light Mode',
          //   action: this.changeEditorTheme
          // },
          // {
          //   title: 'Preview',
          //   icon: 'assets/image/preview.svg',
          //   tooltip: 'Full Screen Preview (Ctrl+Alt+M)',
          //   action: this.toggleModes
          // },
          {
            title: 'Run',
            icon: 'assets/image/run.svg',
            tooltip: 'Run (Ctrl+Alt+/ or F2)',
            action: this.renderCode
          }
        ],
        activeName: "html",
        htmlEditor: null,
        cssEditor: null,
        jsEditor: null,
        componentKey: 0,
        isActive: true,
        workingStatus: false,
        resetStatus: false,
        loadHtmlCodes: localStorage.dataHTML,
        loadCssCodes: localStorage.dataCSS,
        loadJsCodes: localStorage.dataJS,
        editorTheme: localStorage.dataTheme,
        bgCoverTheme: localStorage.dataBgTheme,
        menubarTheme: localStorage.dataMenuBarTheme,
        docButtonTheme: localStorage.dataDocButtonTheme,
        themeButton: localStorage.dataButtonTheme,
        mainButtonIconTheme: localStorage.dataMainButtonIconTheme,
        mainButtonTheme: localStorage.dataMainButtonTheme,
        logoTheme: localStorage.dataLogoTheme,
        bgLogoTheme: localStorage.dataBgLogoTheme,
        preloaderTheme: localStorage.dataPreloaderTheme,
      };
    },
    mounted() {
      this.shortcutKeysEvents();
      this.renderCode();

      windowResizer();
    },
    beforeDestroy() {
      document.removeEventListener("keydown", this.shortcutKeys);
    },
    methods: {
      runCode() {
        this.workingStatus = true;

        let t = '<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><style>' + this.loadCssCodes + '</style><link once href="https://unpkg.com/weavv-css@1.1.8/dist/weavv-1.1.8.min.css" rel="stylesheet" rel="preload" as="style" media="all" defer></head><body>' + this.loadHtmlCodes + '</body><script>' + this.loadJsCodes + "<\\/script></html>";

        let result = document.getElementById("result");
        result.innerHTML = "";

        let iframe = document.createElement("iframe");
        iframe.name = "result";
        iframe.id = "resultIframe";
        iframe.sandbox = "allow-forms allow-popups allow-scripts allow-same-origin allow-modals";
        iframe.frameBorder = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        result.append(iframe);

        let r = document.getElementById("resultIframe");
        r.contentDocument.write(t), r.contentDocument.close();
      },
      htmlOnCodeChange(value) {
        this.loadHtmlCodes = value;
        localStorage.dataHTML = value;
      },
      cssOnCodeChange(value) {
        this.loadCssCodes = value;
        localStorage.dataCSS = value;
      },
      javascriptOnCodeChange(value) {
        this.loadJsCodes = value;
        localStorage.dataJS = value;
      },
      toggleModes: function () {
        this.isActive = !this.isActive;
        this.forceRerender();
      },
      shortcutKeysEvents: function () {
        this.shortcutKeys = function (e) {
          // `ctrl+alt+/` or `f2` to run code
          if ((e.key === "/" && (e.altKey || e.metaKey)) || e.key === "F2") {
            e.preventDefault();
            this.renderCode();
          }
          // `ctrl+alt+m` to switch between editor or previewer
          if (e.key === "m" && (e.altKey || e.metaKey)) {
            e.preventDefault();
            this.toggleModes();
          }
          // `ctrl+alt+p` to load template data
          if (e.key === "p" && (e.altKey || e.metaKey)) {
            e.preventDefault();
            localStorage.dataHTML = this.htmlCodes;
            localStorage.dataCSS = this.cssCodes;
            localStorage.dataJS = this.jsCodes;
            this.forceRerender();
          }
          // `ctrl+alt+d` to reset stored data
          if (e.key === "d" && (e.altKey || e.metaKey)) {
            e.preventDefault();
            this.resetStatus = true;
            setTimeout(() => {
              localStorage.clear();
              window.location.reload();
              this.resetStatus = false;
            }, 1000);
          }
        };
        document.addEventListener("keydown", this.shortcutKeys.bind(this));
      },
      resetData: function() {
        this.resetStatus = true;
        setTimeout(() => {
          localStorage.clear();
          window.location.reload();
          this.resetStatus = false;
        }, 1000);
      },
      forceRerender() {
        this.componentKey += 1
      },
      renderCode: function() {
        this.runCode();
        setTimeout(() => { this.workingStatus = false; }, 1500);
      },
      changeEditorTheme: function() {
        if (localStorage.dataTheme === "vs") { // light
          localStorage.dataTheme = "vs-dark";
          localStorage.dataBgLogoTheme = "";
          // localStorage.dataBgLogoTheme = "invert-1 height-auto width-32 object-cover object-center overflow-hidden opacity-75 select-none";
          localStorage.dataLogoTheme = "invert-1 opacity-75 height-8 width-auto object-fit object-center overflow-hidden";
          localStorage.dataDocButtonTheme = "";
          // localStorage.dataDocButtonTheme = "flex justify-center items-center padding-x-2 height-6 text-sm text-tint-onyx-1 (hover)text-shade-onyx-1 bg-transparent (active)bg-tint-onyx-1 border border-tint-onyx-4 (hover)border-tint-onyx-1 (focus)border-tint-onyx-1 curve-border transition duration-300 ease-in-out";
          localStorage.dataMenuBarTheme = "padding-1 absolute bottom-0 left-0 height-20 width-full bg-charcoal-1 shadow-md";
          localStorage.dataButtonTheme = "invert-1 opacity-50 transform (hover)scale-125 width-5 height-5 transition duration-300 ease-in-out transform (group-hover)scale-125";
          localStorage.dataMainButtonTheme = "(group) flex justify-center items-center padding-x-2 padding-y-1 bg-transparent curve-border transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
          localStorage.dataMainButtonIconTheme = "invert-1 opacity-50 (group-hover)opacity-75 (group-hover)invert-1 width-6 height-6 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-125";
          localStorage.dataBgTheme = "relative flex flex-row";
          localStorage.dataPreloaderTheme = "stack-5 absolute top-16 right-6 width-5 height-5 preloader dark animation fade-in duration-300";
          // TODO: if `light`, then reload is `dark`
          window.location.reload();
        } else if (localStorage.dataTheme === "vs-dark") { // dark
          localStorage.dataTheme = "vs";
          localStorage.dataBgLogoTheme = "invert-0 height-auto width-32 object-cover object-center overflow-hidden opacity-75 select-none";
          localStorage.dataLogoTheme = "invert-0 opacity-75 height-8 width-auto fill-current object-fit object-center overflow-hidden";
          localStorage.dataMenuBarTheme = "padding-1 absolute bottom-0 left-0 height-20 width-full bg-white shadow-md";
          localStorage.dataDocButtonTheme = "flex justify-center items-center padding-x-2 height-6 text-sm curve-border transition duration-300 ease-in-out";
          localStorage.dataButtonTheme = "opacity-50 text-gray-2 transform (hover)scale-125 width-5 height-5 transition duration-300 ease-in-out transform (group-hover)scale-125";
          localStorage.dataMainButtonTheme = "(group) flex justify-center items-center padding-x-2 padding-y-1 bg-transparent curve-border transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
          localStorage.dataMainButtonIconTheme = "invert-0 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 width-6 height-6 object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-125";
          localStorage.dataBgTheme = "relative flex flex-row";
          localStorage.dataPreloaderTheme = "stack-5 absolute top-16 right-6 width-5 height-5 preloader dark animation fade-in duration-300";
          // TODO: if `dark`, then reload is `light`
          window.location.reload();
        }
      }
    }
  };
</script>


<style scoped>
  .breakpoint-320 {
    min-width: 320px;
  }
  .breakpoint-480 {
    min-width: 480px;
  }
  .breakpoint-640 {
    min-width: 640px;
  }
  .preloader {
    --preloader-theme: transparent;
    margin: 0 auto;
    border: 3px solid var(--preloader-theme);
    border-radius: 50%;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: cssload-spin 575ms infinite linear;
    -o-animation: cssload-spin 575ms infinite linear;
    -ms-animation: cssload-spin 575ms infinite linear;
    -webkit-animation: cssload-spin 575ms infinite linear;
    -moz-animation: cssload-spin 575ms infinite linear;
  }
  .preloader.light {
    --preloader-theme: rgb(0, 0, 0);
  }
  .preloader.dark {
    --preloader-theme: rgb(255, 81, 0);
  }
  @keyframes cssload-spin {
    100% {
      transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-o-keyframes cssload-spin {
    100% {
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-ms-keyframes cssload-spin {
    100% {
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes cssload-spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
