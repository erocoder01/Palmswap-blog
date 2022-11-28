<template class="bg-[#0F1014]">
  <!-- hier kann i hintergrund von ganze seite ändern -->
  <div class="application bg-[#0F1014] min-h-screen text-white">
    <router-view />
  </div>
</template>

<script></script>

<style>
body,
html {
  background-color: #0f1014;
}
.application {
  background-color: "#0f1014";
  font-family: "Helvetica Neue", sans-serif !important;
  /* font-family: "Helvetica 25 UltraLight", sans-serif !important;
  font-family: "Helvetica 35 Thin", sans-serif !important;
  font-family: "Helvetica 45 Light", sans-serif !important;
  font-family: "Helvetica 55 Roman", sans-serif !important;
  font-family: "Helvetica 65 Medium", sans-serif !important; */
}
</style>
