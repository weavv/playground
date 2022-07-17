<template>
  <div
    class="font-default antialiased"
    id="app"
  >
      <router-view />
  </div>
</template>


<script>
  /*
  * Base Templates
  */
  let html = '<!-- \n\
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
            Image taken from \n\
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
            Framework written with \n\
            <a class="text-underline text-uppercase" href="https://sass-lang.com/" target="_blank">\n\
              Sass-Lang \n\
            </a>\n\
          </div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
  </body>';

  let css = "";
  let js = "";

  /*
  * Create Base Templates
  */
  if(localStorage.dataSaveEnabled === "true") {
    // saved data exists, use existing one
  } else {
    localStorage.dataSaveEnabled = "true";
    localStorage.dataHTML = html;
    localStorage.dataCSS = css;
    localStorage.dataJS = js;
  }

  if (localStorage.dataThemeEnabled === "true") {
    // editor theme is set
  } else {
    localStorage.dataThemeEnabled = "true";
    localStorage.dataTheme = "vs";
  }

  if (localStorage.dataBgThemeEnabled === "true") {
    // previewer theme is set
  } else {
    localStorage.dataBgThemeEnabled = "true";
    localStorage.dataBgTheme = "relative flex flex-row";
  }

  if (localStorage.dataButtonThemeEnabled === "true") {
    // buttons theme is set
  } else {
    localStorage.dataButtonThemeEnabled = "true";
    localStorage.dataButtonTheme = "opacity-50 transform (hover)scale-125 width-5 height-5 transition duration-300 ease-in-out transform (group-hover)scale-125";
  }

  if (localStorage.dataMenuBarThemeEnabled === "true") {
    // main menu bar theme is set
  } else {
    localStorage.dataMenuBarThemeEnabled = "true";
    localStorage.dataMenuBarTheme = "padding-1 absolute bottom-0 left-0 height-20 width-full bg-white shadow-md";
  }

  if (localStorage.dataLogoThemeEnabled === "true") {
    // main logo theme is set
  } else {
    localStorage.dataLogoThemeEnabled = "true";
    localStorage.dataLogoTheme = "invert-0 opacity-75 height-8 width-auto fill-current object-fit object-center overflow-hidden";
  }

  if (localStorage.dataBgLogoThemeEnabled === "true") {
    // bg logo theme is set
  } else {
    localStorage.dataBgLogoThemeEnabled = "true";
    localStorage.dataBgLogoTheme = "";
    // localStorage.dataBgLogoTheme = "invert-0 height-auto width-32 object-cover object-center overflow-hidden opacity-75 select-none";
  }

  if (localStorage.dataMainButtonThemeEnabled === "true") {
    // main buttons is set
  } else {
    localStorage.dataMainButtonThemeEnabled = "true";
    localStorage.dataMainButtonTheme = "(group) flex justify-center items-center padding-x-2 padding-y-1 bg-transparent curve-border transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
  }

  if (localStorage.dataMainButtonIconThemeEnabled === "true") {
    // main button icon theme is set
  } else {
    localStorage.dataMainButtonIconThemeEnabled = "true";
    localStorage.dataMainButtonIconTheme = "invert-0 opacity-50 (group-hover)opacity-75 (group-hover)invert-0 width-6 height-6 border border-transparent object-fit object-center transition duration-300 ease-in-out transform (group-hover)scale-125";
  }

  if (localStorage.dataPreloaderThemeEnabled === "true") {
    // preloader theme is set
  } else {
    localStorage.dataPreloaderThemeEnabled = "true";
    localStorage.dataPreloaderTheme = "stack-5 absolute top-16 right-6 width-5 height-5 preloader dark animation fade-in duration-300";
  }

  if (localStorage.dataDocButtonThemeEnabled === "true") {
    // doc button theme is set
  } else {
    localStorage.dataDocButtonThemeEnabled = "true";
    localStorage.dataDocButtonTheme = "";
    // localStorage.dataDocButtonTheme = "flex justify-center items-center padding-x-2 height-6 text-sm text-tint-onyx-4 (hover)text-shade-onyx-1 bg-transparent (active)bg-tint-onyx-1 border border-tint-onyx-2 (hover)border-tint-onyx-1 (focus)border-tint-onyx-1 curve-border transition duration-300 ease-in-out";

  }
</script>


<style>
  html {
    height: 100vh;
    overflow: hidden;
  }
  body {
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }
</style>
