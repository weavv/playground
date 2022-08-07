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
              <svg v-bind:class="logoTheme" xmlns="http://www.w3.org/2000/svg" width="677.31" height="623.713" viewBox="0 0 179.205 165.024" xmlns:v="https://vecta.io/nano"><path d="M39.333 66.122L82.95 21.307c11.509-11.826 30.041-11.826 41.55 0l46.073 47.34c11.509 11.826 11.509 30.866 0 42.692l-43.617 44.816c-11.509 11.826-30.041 11.826-41.55 0l-46.073-47.34c-11.509-11.826-11.509-30.866 0-42.692z" fill="#0cf"/><path d="M55.29 79.516h40.452c5.104 0 9.213 4.109 9.213 9.213s-4.109 9.213-9.213 9.213H55.29c-5.104 0-9.213-4.109-9.213-9.213s4.109-9.213 9.213-9.213z" fill="#fff"/><g fill="none" stroke="#4d4d4d" stroke-width="7.065"><path d="M76.547 3.532c-7.51 0-15.02 2.957-20.775 8.869L12.155 57.217C.646 69.042.646 88.083 12.155 99.909l46.073 47.339c11.509 11.826 30.041 11.826 41.55 0l18.313-18.817-.004-9.007.187-23.93c.974-4.109 5.186-6.533 9.043-5.206.393.135 8.314 4.637 17.854 10.14 9.691-11.884 9.103-29.508-1.777-40.688l-46.073-47.34c-5.755-5.913-13.265-8.869-20.775-8.869z"/><path d="M26.202 72.182h43.594c4.234 0 7.642 3.409 7.642 7.642s-3.409 7.642-7.642 7.642H26.202c-4.234 0-7.642-3.409-7.642-7.642s3.409-7.642 7.642-7.642z"/></g><path d="M131.164 151.129c-1.429-.326-2.968-1.519-3.66-2.838-.689-1.312-.65-.102-.65-20.374l.149-19.024c.774-3.267 4.123-5.194 7.19-4.139.33.113 7.261 4.054 15.404 8.758 15.866 9.165 15.677 9.046 16.44 10.317.684 1.139.885 1.859.894 3.199.006.995-.034 1.321-.232 1.895-.469 1.356-1.288 2.445-2.426 3.222-.316.216-7.043 4.478-14.948 9.472l-15.052 9.327a6.28 6.28 0 0 1-3.108.184z" fill="#4d4d4d"/></svg>
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
      <div class="text-lg text-white text-offset-shadow-- offset-x-2 offset-y-2 offset-blur-4 transform (group-hover)translate-y-16 transition duration-300 linear">\n\
        Welcome to WEAVV CSS Demo\n\
      </div>\n\
      <div class="absolute top-20 transform (group-hover)-translate-y-32 transition duration-100 linear flex justify-center items-center">\n\
        <img class="width-32 height-32 object-cover object-center curve-border-full filter brightness-4 saturate-2" src="https://i.pravatar.cc/250?15">\n\
        <a class="padding-x-4 text-xl-2 text-white font-bold (hover)text-underline" href="#">\n\
          John Doe\n\
        </a>\n\
      </div>\n\
      <div class="stack-1 relative margin-8 (md)max-width-screen-sm flex (sm)flex-row (md)flex-column (md)justify-center (sm)justify-between items-center bg-white curve-border-lg (hover)shadow-dreamy-lg transition duration-300 linear overflow-hidden cursor-pointer">\n\
        <img class="transform (group-hover)scale-105 duration-300 (md)width-full (sm)width-64 (md)height-40 (sm)height-88 object-cover object-center bg-tint-onyx-3 bg-tint-onyx-5 filter brightness-4 saturate-2" srcset="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=300 300w, https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=640 600w" sizes="70vmin">\n\
        <div class="(md)padding-10 (sm)padding-6 (child-2)padding-t-4 (child-2)text-sm text-tint-onyx-1 font-bold flex flex-gap-8 (md)flex-row (sm)flex-column justify-center items-start transform (group-hover)-translate-y-6 transition duration-300 linear">\n\
          <div class="(child-1)padding-t-2 (child-2)padding-t-2 (child-1)text-xl-5 (child-2)text-xl-5">\n\
            <p class="(group-hover)hidden depth-tight-2 transition duration-300 linear (md)text-right">\n\
              Absolute <br> Silent\n\
            </p>\n\
            <p class="hidden (group-hover)block text-tint-teal-1 depth-tight-2 transition duration-300 linear (md)text-right">\n\
              Absolute <br> <span class="(group-hover)text-underline">Noisy</span>\n\
            </p>\n\
          </div>\n\
          <p class="block">\n\
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id magna in purus <span class="text-underline line-thickness-3 line-offset-1">sodales efficitur</span>. Maecenas consequat sem magna, mollis pulvinar ante tincidunt quis.\n\
          </p>\n\
        </div>\n\
        <div class="absolute top-2 -right-4">\n\
          <div class="text-lg text-right transform (group-hover)-translate-x-6 transition duration-100 linear">\n\
            <a href="#">\n\
              <div class="width-4 height-4 (hover)width-6 (hover)height-6 bg-tint-onyx-1 (hover)bg-tint-teal-1 curve-border-full transition duration-200 linear"></div>\n\
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
        <div class="transform-perspective-500 flex flex-gap-2 cursor-pointer">\n\
          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)rotate-y-39 transition duration-200 linear (hover)opacity-75 filter brightness-2 saturate-2" src="https://images.pexels.com/photos/814830/pexels-photo-814830.jpeg?auto=compress&cs=tinysrgb&w=300">\n\
          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)-translate-y-2 transition duration-200 linear (hover)opacity-75" src="https://images.pexels.com/photos/1742927/pexels-photo-1742927.jpeg?auto=compress&cs=tinysrgb&w=300">\n\
          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)-translate-y-2 transition duration-200 linear (hover)opacity-75" src="https://images.pexels.com/photos/708764/pexels-photo-708764.jpeg?auto=compress&cs=tinysrgb&w=300">\n\
          <img class="width-32 height-20 object-cover object-center curve-border shadow-md transform (hover)-rotate-y-39 transition duration-200 linear (hover)opacity-75" src="https://images.pexels.com/photos/2537609/pexels-photo-2537609.jpeg?auto=compress&cs=tinysrgb&w=300">\n\
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
              pexels \n\
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
              Sass-Lang \n\
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
        let t = '<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><style>' + this.loadCssCodes + '</style><link once href="https://unpkg.com/weavv-css@1.0.0/dist/weavv-1.0.0.min.css" rel="stylesheet" rel="preload" as="style" media="all" defer></head><body>' + this.loadHtmlCodes + '</body><script>' + this.loadJsCodes + "<\\/script></html>";
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
        if (localStorage.dataTheme === "vs") { // two
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
        } else if (localStorage.dataTheme === "vs-dark") { // one
          localStorage.dataTheme = "vs";
          localStorage.dataBgLogoTheme = "invert-0 height-auto width-32 object-cover object-center overflow-hidden opacity-75 select-none";
          localStorage.dataLogoTheme = "invert-0 height-8 width-auto fill-current object-fit object-center overflow-hidden";
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
