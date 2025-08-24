<template>
  <div id="main">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@use "./assets/breakpoints" as breakpoints;
@import "reset-css";

:root {
  --g-spacing-48: 48px;
  --g-spacing-96: 96px;
  --g-color-main-font: rgba(11, 23, 57, 1);
}

body {
  font-family: "PT Root UI", Arial, sans-serif;
  color: var(--g-color-main-font);
}

#main {
  margin: 0 auto;
}

@include breakpoints.min-width-1441 {
  #main {
    max-width: 1440px;
  }
}

@include breakpoints.min-width-961 {
  #main {
    max-width: 1280px;
  }
}
</style>
