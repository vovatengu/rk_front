<template>
    <v-container >

      <v-app-bar color="primary" class="flex-grow-0" app dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Rk7</v-app-bar-title>
      </v-app-bar>
      
      <v-navigation-drawer app v-model="drawer" bottom>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Меню</v-list-item-title>
            <!-- <v-list-item-subtitle> Using Navigation drawers</v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
       
        <v-list dense nav>
          
            <v-list-item v-for="item in items" :key="item.title" :to = "item.url" exact = "item.exact" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list>
      
    </v-navigation-drawer>
</v-container>
  </template>
  
  <script>
  export default {
    name: 'SideBar',
    data: () => ({
      drawer: false,
      items: [
        { title: 'Заказы',url:'/orders', icon: 'mdi-account-box',exact:true },
        { title: 'Настройки',url:'/settings', icon: 'mdi-cog' },
      ],
    }),
  };
  </script>