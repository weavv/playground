import { createGlobalState, useDark } from '@vueuse/core'

const weavvCssVersion = '1.0.3'

export const generateHTML = (
  payload: Record<string, any>,
  isDark?: boolean,
) => {
  return `<html class="${isDark ? '' : ''}">
    <head>
      <link href="https://unpkg.com/weavvcss@${weavvCssVersion}/dist/weavv-${weavvCssVersion}.min.css" rel="stylesheet" rel="preload" as="style" media="all" defer>
      <style>
        .[screen="size"]{ visibility: hidden; position: relative; }
        @media only screen and (min-width: 320px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "xs (320px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 640px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "sm (640px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 768px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "md (768px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 1024px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "lg (1024px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 1280px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "1k (1280px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 1920px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "2k (1920px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 2560px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "3k (2560px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 3840px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "4k (3840px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 5120px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "5k (5120px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 5760px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "6k (5760px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 7000px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "7k (7000px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
        @media only screen and (min-width: 7680px) {
          [screen="size"]:after { visibility: visible; position: absolute; top: 0; left: 0; content: "8k (7680px)"; font-size: 10px; font-weight: bold;background-color: #efefef; padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 3px; border-radius: 2px; margin: 2px; font-family: sans-serif;
        }
      </style>
    </head>
    <body>
      ${payload.html}
    </body>
  </html>`
}

export const useDarkGlobal = createGlobalState(() => useDark())

export const initialEditorValue = {
  html: `<body screen="size" class="relative padding-6 height-screen bg-gradient-preset-17 flex justify-center items-start overflow-hidden">\n\n  <div class="hidden stack-1 absolute -top-10 -bottom-10 -left-10 -right-10 filter blur-10">\n    <img class="height-screen width-full object-fit object-center" src="https://i.pinimg.com/236x/41/fe/83/41fe838cc6782162633f1ea271678b57.jpg" alt="">\n  </div>\n  <div class="stack-2 padding-8 flex (xs)flex-wrap (sm)flex-no-wrap (md)flex-no-wrap flex-center">\n    <div class="(group) relative margin-l-4 margin-r-8 flex-shrink-0 filter saturate-6 brightness-3">\n      <div class="stack-3 absolute top-0 left-0 width-full">\n        <img class="-margin-t-6 -margin-l-6 (group-hover)-margin-t-10 (group-hover-margin-l-4 height-16 width-16 object-cover object-enter shadow curve-border-full transition duration-500 ease" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZpTPYPUv5GldBF-k0KvNcw4bthklHE6AsnVQrQDP&s" alt="">\n      </div>\n      <div class="stack-2 relative curve-border-lg transform (group-hover)scale-125 transition duration-500 linear">\n        <div class="stack-2 invisible (group-hover)visible absolute width-56 height-104 bg-gradient start-transparent stop-shade-amber-1 start-30 stop-80 angle-90 curve-border-lg">\n        </div>\n        <img class="stack-1 width-56 height-104 object-cover object-center shadow (group-hover)shadow-dreamy curve-border-lg cursor-pointer overflow-hidden transition duration-200 linear" src="https://i.pinimg.com/236x/eb/cc/02/ebcc026a8053566c5edeb9077dea967d.jpg" alt="">\n      </div>\n      <div class="stack-3 absolute -top-8 -right-2 flex-column flex-gap-2 flex-wrap justify-start items-start invisible (group-hover)visible (expand)height-8 (expand)width-8 (expand)shadow (expand)curve-border-full transition duration-1000 ease-in-out">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?1" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?2" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?3" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?4" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?5" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?6" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?7" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?8" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?9" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?10" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?11" loading="lazy" alt="">\n        <img class="object-cover object-center" src="https://i.pravatar.cc/50?12" loading="lazy" alt="">\n      </div>\n    </div>\n    <div class="(xs)margin-t-24 (sm)margin-t-0 margin-t-2 height-112 flex flex-wrap justify-start items-center (expand)-margin-t-4 (expand)margin-b-8 (expand)margin-r-4 (expand)width-16 (expand)height-56 (expand)bg-tint-onyx-1 (expand)shadow (expand)curve-border-lg (expand)overflow-hidden filter saturate-6 brightness-3">\n      <div class="(hover)stack-5 relative width-16 height-56 transform -skew-y-24 (hover)scale-125 transition duration-200 linear cursor-pointer">\n        <div class="absolute top-0 left-0 transform skew-y-24">\n          <img class="-margin-t-4 height-72 width-16 object-cover object-center " src="https://i.pinimg.com/236x/35/bc/b5/35bcb53e6bbce29984271bad1023eb64.jpg" alt="">\n        </div>\n      </div>\n      <div class="(hover)stack-5 relative width-16 height-56 transform -skew-y-24 (hover)scale-125 transition duration-200 linear">\n        <div class="absolute top-0 left-0 transform skew-y-24">\n          <img class="-margin-t-4 height-72 width-16 object-cover object-center" src="https://i.pinimg.com/236x/64/3e/9c/643e9c6a638e54d824a06832eba0e7b5.jpg" alt="">\n        </div>\n      </div>\n      <div class="(hover)stack-5 relative width-16 height-56 transform -skew-y-24 (hover)scale-125 transition duration-200 linear">\n        <div class="absolute top-0 left-0 transform skew-y-24">\n          <img class="-margin-t-4 height-72 width-16 object-cover object-center" src="https://i.pinimg.com/236x/4b/c2/8b/4bc28bc403985808434d3ea721300e63.jpg" alt="">\n        </div>\n      </div>\n      <div class="(hover)stack-5 relative width-16 height-56 transform -skew-y-24 (hover)scale-125 transition duration-200 linear">\n        <div class="absolute top-0 left-0 transform skew-y-24">\n          <img class="-margin-t-4 height-72 width-16 object-cover object-center" src="https://i.pinimg.com/236x/26/a4/e2/26a4e23144424671bac155c73ffb5b6c.jpg" alt="">\n        </div>\n      </div>\n      <div class="(hover)stack-5 relative width-16 height-56 transform -skew-y-24 (hover)scale-125 transition duration-200 linear">\n        <div class="absolute top-0 left-0 transform skew-y-24">\n          <img class="-margin-t-4 height-72 width-16 object-cover object-center" src="https://i.pinimg.com/236x/b3/20/9f/b3209f316bd68740f735841f0937275d.jpg" alt="">\n        </div>\n      </div>\n      <div class="(hover)stack-5 relative width-16 height-56 transform -skew-y-24 (hover)scale-125 transition duration-200 linear">\n        <div class="absolute top-0 left-0 transform skew-y-24">\n          <img class="-margin-t-4 height-72 width-16 object-cover object-center" src="https://i.pinimg.com/236x/a8/d6/32/a8d63206abe15138281146b376813dcd.jpg" alt="">\n        </div>\n      </div>\n    </div>\n  </div>\n\n
</body>`,
}
