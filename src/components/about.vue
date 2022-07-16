<template>
  <div class="relative padding-10 height-screen flex justify-center items-center">

    <div class="stack-5 max-width-xl-3 padding-24 flex flex-column justify-center items-center">

      <img
        class="opacity-75 height-16 width-auto object-fit object-center overflow-hidden animation roll-in-left duration-800"
        src="assets/image/logo_full.svg"
        alt="Weavv CSS"
      >

      <div class="margin-y-4 text-gray-6 text-md font-mono animation roll-in-left duration-800">
        v0.1.5
      </div>

      <div class="padding-b-6 width-full text-gray-6 text-center animation roll-in-left duration-800">
        <div class="padding-b-2 text-lg text-gray-7 font-bold">
          Shortcut Keys
        </div>
        <div class="padding-b-2 flex justify-between items-center">
          <div class="text-xs font-semibold">
            <span class="padding-1 border border-gray-5 curve-border">Ctrl</span> +
            <span class="padding-1 border border-gray-5 curve-border">Alt</span> +
            <span class="padding-1 border border-gray-5 curve-border">M</span>
          </div>
          <div class="margin-x-4 text-sm">
            Switch between Editor or Preview mode
          </div>
        </div>
        <div class="padding-b-2 flex justify-between items-center">
          <div class="text-xs font-semibold">
            <span class="padding-1 border border-gray-5 curve-border">Ctrl</span> +
            <span class="padding-1 border border-gray-5 curve-border">Alt</span> +
            <span class="padding-1 border border-gray-5 curve-border">/</span>
          </div>
          <div class="margin-x-4 text-sm">
            Execute your codes
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-xs font-semibold">
            <span class="padding-1 border border-gray-5 curve-border">Ctrl</span> +
            <span class="padding-1 border border-gray-5 curve-border">Alt</span> +
            <span class="padding-1 border border-gray-5 curve-border">D</span>
          </div>
          <div class="margin-x-4 text-sm">
            Reset stored data in the app
          </div>
        </div>
      </div>

      <div class="padding-b-4 text-gray-7 text-center animation roll-in-left duration-800">

        <div class="padding-b-2 text-lg font-bold ">
          Official Documentation
        </div>

        <div class="flex flex-row flex-wrap justify-center items-center">
          <div
            v-for='item in official'
            :key='item.title'
          >
            <a
              class="text-gray-6 text-sm (hover)text-orange-6 (focus)text-orange-6 (hover)underline (focus)underline"
              :href='item.url'
              target="_self"
              rel="noopener"
              :title='item.title'
            >
              {{ item.title }}
            </a>
            <span class="margin-x-2 text-gray-5">|</span>
          </div>
        </div>

      </div>

      <div class="padding-b-4 text-gray-7 text-center animation roll-in-left duration-800">

        <div class="padding-b-2 text-lg font-bold ">
          Features
        </div>

        <div class="flex flex-row flex-wrap justify-center items-center">
          <div
            v-for='item in features'
            :key='item.title'
          >
            <a
              class="text-gray-6 text-sm (hover)text-orange-6 (focus)text-orange-6 (hover)underline (focus)underline"
              :href='item.url'
              target="_self"
              rel="noopener"
              :title='item.title'
            >
              {{ item.title }}
            </a>
            <span class="margin-x-2 text-gray-5">|</span>
          </div>
        </div>

      </div>

      <div class="padding-b-4 text-gray-7 text-center animation roll-in-left duration-800">

        <div class="padding-b-2 text-lg font-bold ">
          What's Next?
        </div>

        <div class="flex flex-row flex-wrap justify-center items-center">
          <div
            v-for='item in whatsnext'
            :key='item.title'
          >
            <a
              class="text-gray-6 text-sm (hover)text-orange-6 (focus)text-orange-6 (hover)underline (focus)underline"
              :href='item.url'
              target="_self"
              rel="noopener"
              :title='item.title'
            >
              {{ item.title }}
            </a>
            <span class="margin-x-2 text-gray-5">|</span>
          </div>
        </div>

      </div>

      <div class="text-gray-5 text-sm font-mono text-center">
        Enjoy then!
      </div>

      <div class="absolute right-4 flex flex-gap-3 flex-col justify-center items-center animation fade-in duration-2000">
        <a
          v-for='item in networks'
          :key='item.title'
          :href='item.url'
          target="_blank"
          rel="noopener"
          :title='item.title'
        >
          <img
            class="opacity-25 (hover)opacity-100 height-6 width-auto object-fit object-center overflow-hidden transition duration-200 ease-in-out"
            :src='item.icon'
          >
        </a>
      </div>

    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      official: [
        { title: 'Getting Started', url: 'https://weavvcss.netlify.app/getting-started/' },
        { title: 'Installation', url: 'https://weavvcss.netlify.app/installation/' },
        { title: 'Utility Map', url: 'https://weavvcss.netlify.app/utility-map/' },
      ],
      features: [
        { title: 'Breakpoints', url: 'https://weavvcss.netlify.app/responsive/' },
        { title: 'Dark/Light Mode', url: 'https://weavvcss.netlify.app/getting-started-themes/' },
        { title: 'Variants', url: 'https://weavvcss.netlify.app/pseudo-class-variants/' },
        { title: 'Palettes', url: 'https://weavvcss.netlify.app/getting-started-palette/' },
        { title: 'Gradient', url: 'https://weavvcss.netlify.app/getting-started-gradient/' },
        { title: 'Custom Gradient', url: 'https://weavvcss.netlify.app/background-gradient/' },
        { title: 'Animations', url: 'https://weavvcss.netlify.app/getting-started-animations/' },
        { title: 'Filters', url: 'https://weavvcss.netlify.app/getting-started-filters/' },
        { title: 'Fluids', url: 'https://weavvcss.netlify.app/getting-started-fluids/' },
        { title: 'Orientation', url: 'https://weavvcss.netlify.app/getting-started-orientation' },
      ],
      whatsnext: [
        { title: 'Utility', url: 'https://weavvcss.netlify.app/utility/' },
        { title: 'Responsive', url: 'https://weavvcss.netlify.app/responsive/' },
        { title: 'Pseudo-Class Variants', url: 'https://weavvcss.netlify.app/pseudo-class-variants/' },
        { title: 'Extract Utility Classes', url: 'https://weavvcss.netlify.app/extract-utility-classes/' },
        { title: 'Import Framework', url: 'https://weavvcss.netlify.app/import-framework/' },
        { title: 'Create Empty Project', url: 'https://weavvcss.netlify.app/create-empty-project/' },
        { title: 'Refactoring UI', url: 'https://weavvcss.netlify.app/refactoring-ui/' },
        { title: 'File Size Control', url: 'https://weavvcss.netlify.app/file-size-control/' },
        { title: 'Customize Utilities', url: 'https://weavvcss.netlify.app/customize-utilities/' },
        { title: 'Plugin API', url: 'https://weavvcss.netlify.app/plugin-api/' },
        { title: 'Debug', url: 'https://weavvcss.netlify.app/debug/' },
      ],
      networks: [
        { title: 'Discord', url: 'https://discord.gg/A62YjNR', icon: 'assets/image/discord.svg' },
        { title: 'Github', url: 'https://github.com/Weavvlabs', icon: 'assets/image/github.svg' }
      ]
    }
  }
}
</script>

