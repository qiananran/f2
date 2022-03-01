<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
 ::-webkit-scrollbar {
    width: 2px;
    height: 0;
 }



::-webkit-scrollbar-track {
  --webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgb(93, 136, 185);
  --webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}
::-webkit-scrollbar-thumb:hover {
  border-radius: 10px;
  background-color: #a3a3a3;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
   
}
</style>
