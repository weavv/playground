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
  (?) Right-Click for more options\n\
  (?) Ctrl+Alt+/ to run code\n\
--> \n\n\
  <body class="font-poppins antialised height-full bg-tint-onyx-4 flex flex-column flex-center">\n\
    <div class="margin-8 width-auto height-auto flex (sm)flex-row (md)flex-column (md)justify-center (sm)justify-between items-center bg-white curve-border-lg shadow-dreamy-lg overflow-hidden">\n\
      <img class="stack-1 (md)width-full (sm)width-64 height-88 object-cover object-center bg-tint-onyx-3" src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1000">\n\
      <div class="(md)padding-10 (sm)padding-6 (child-2)padding-t-2 (child-1)text-xl-4 (child-2)text-sm text-tint-onyx-1 font-bold">\n\
        <p class="depth-tight-2">\n\
          Lorem ipsum dolor sit amet\n\
        </p>\n\
        <p>\n\
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id magna in purus sodales efficitur. Maecenas consequat sem magna, mollis pulvinar ante tincidunt quis.\n\
        </p>\n\
      </div>\n\
    </div>\n\n\
    <div class="text-xs text-white text-offset-shadow offset-x-2 offset-y-2 offset-blur-4">\n\
        Image taken from \n\
        <a class="text-underline text-uppercase" href="https://www.pexels.com/photo/photography-of-roadway-during-dusk-1034662/">\n\
          pexels\n\
        </a>\n\
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
    localStorage.dataMenuBarTheme = "padding-1 absolute bottom-0 left-0 height-20 width-full bg-white";
  }

  if (localStorage.dataLogoThemeEnabled === "true") {
    // main logo theme is set
  } else {
    localStorage.dataLogoThemeEnabled = "true";
    localStorage.dataLogoTheme = "invert-0 opacity-75 height-8 width-auto fill-current text-gray-7 object-fit object-center overflow-hidden";
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
    localStorage.dataMainButtonTheme = "(group) flex justify-center items-center padding-x-2 padding-y-1 text-gray-7 (group-hover)text-gray-8 bg-transparent (active)bg-gray-3 curve-border transition duration-300 ease-in-out animation roll-in-left duration-800 cursor-pointer select-none";
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
