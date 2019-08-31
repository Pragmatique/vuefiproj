<template>
  <v-card>
    <v-toolbar
      :color="themeColor"
      dark
      flat
      prominent
    >
      <v-toolbar-title>
        Новый проект
      </v-toolbar-title>

        <v-tabs
          slot="extension"
          :color="themeColor"
          white
          grow
        >
          <v-tab
            v-for="(tab,index) in tabcontent"
            :key="index"
            :to="{name: tab.route}"

          >
            {{tab.name}}
          </v-tab>

        </v-tabs>
    </v-toolbar>
    <router-view></router-view>

  </v-card>

</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        tabcontent: [
          {
            name: 'Основные',
            path: 'basic',
            route: 'ProjectBasic'
          },
          {
            name: 'Данные клиента',
            path: 'client',
            route: 'ProjectClient'
          },
          {
            name: 'Объект',
            path: 'object',
            route: 'ProjectObject'
          },
          {
            name: 'Договор',
            path: 'contract',
            route: 'ProjectContract'
          },
          {
            name: 'Абонплата',
            path: 'payment',
            route: 'ProjectPayment'
          },
          {
            name: 'Монтаж',
            path: 'mounting',
            route: 'ProjectMounting'
          },
          {
            name: 'Формуляр',
            path: 'formular',
            route: 'ProjectFormular'
          }

        ]
      }
    },

    methods: {},

    computed: {
        ...mapGetters('authuser', ['themeColor'])
    }
  }
</script>
