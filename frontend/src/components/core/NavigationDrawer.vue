<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>

    <v-toolbar flat dark :color="themeColor" class="toolbar">
      <router-link :to="{ name: 'Dashboard' }">
      </router-link>
      <router-link :to="{ name: 'Dashboard' }" class="text">
         Меню
      </router-link>
    </v-toolbar>
    <v-list>
      <v-list-tile @click="changeRoute('Dashboard', 1)">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >Dashboard</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Calendar', 2)">
        <v-list-tile-action>
          <v-icon>calendar_today</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]">Календарь</v-list-tile-title>
      </v-list-tile>
      <v-list-group
        prepend-icon="pageview">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Задачи</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('TimeLine', 3)">
          <v-list-tile-action>
            <v-icon>bar_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">На сегодня</v-list-tile-title>
        </v-list-tile>
      </v-list-group>
      
      <v-list-group
        prepend-icon="select_all">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Проекты</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('EditProject', 5)">
          <v-list-tile-action>
            <v-icon>inbox</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">Новый</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('ProjectTable', 10)">
          <v-list-tile-action>
            <v-icon>inbox</v-icon>
          </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 10}, 'item-title' ]">Список проектов</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-list-group
        prepend-icon="select_all">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Справочники</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Snackbar', 6)">
          <v-list-tile-action>
            <v-icon>event_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]">Типы задач</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('ProjectStatus', 7)">
          <v-list-tile-action>
            <v-icon>event_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 7}, 'item-title' ]">Состояния проекта</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('ClientTable', 8)">
          <v-list-tile-action>
            <v-icon>event_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 8}, 'item-title' ]">Клиенты</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-list-tile @click="changeRoute('Mailbox', 9)">
        <v-list-tile-action>
          <v-icon>inbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 9}, 'item-title' ]">Настройки</v-list-tile-title>
      </v-list-tile>


    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1,
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ]
    }
  },

  computed: {
      /*...mapState('authuser', ['colorForTheme']),*/
      ...mapGetters('authuser', ['themeColor'])
      /*colorForTheme: {
        get: ()=> {debugger; return this.$store.dispatch('authuser/themeColor',null, {root:true})},
        set: async (newValue)=> {await this.$store.dispatch('authuser/setThemeColor', newValue , {root:true})}
      }*/
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;
      vm.selectedIndex = selectedIndex;
      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>
