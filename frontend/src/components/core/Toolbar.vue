<template>
  <v-toolbar
    dark
    app
    :color="$root.themeColor">
    <v-toolbar-title>
      <v-toolbar-side-icon @click="toggleNavigationBar"></v-toolbar-side-icon>
      {{ $root.firstNameCompany }}
    </v-toolbar-title>

    <v-spacer></v-spacer>
    
    <v-menu offset-y offset-x :nudge-bottom="10" transition="scale-transition">

      <v-btn icon flat slot="activator" @click="notifications.map(x => x.isActive = false)">
        <v-badge color="blue" overlap>
          <span slot="badge" v-if="notifications.filter(x => x.isActive).length > 0">
             {{ notifications.filter(x => x.isActive).length }}
          </span>
          <v-icon medium>notifications</v-icon>
        </v-badge>
      </v-btn>

      <v-card class="elevation-0">
        <v-toolbar card dense color="transparent">
          <v-toolbar-title><h5>У Вас {{ notifications.length }} новых сообщений</h5></v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-0">
          <v-list two-line class="pa-0">
          <template v-for="(item, index) in notifications">
            <v-divider :key="index" />
            <v-list-tile avatar :key="item.title" @click.parent="item.onClick">
            <v-list-tile-avatar :color="item.color">
              <v-icon dark>{{item.icon}}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-sub-title v-html="item.title"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action class="caption">
              {{item.actionAt}}
            </v-list-tile-action>
            </v-list-tile>
          </template>
          </v-list>
          <v-divider></v-divider>
          <v-btn block flat v-if="false">See all notifications</v-btn>
          <v-divider></v-divider>
        </v-card-text>
      </v-card>
    </v-menu>

    <v-menu offset-y offset-x :nudge-bottom="10" transition="scale-transition">
      <v-btn icon large flat slot="activator" :ripple="false">
        <v-icon large>account_circle</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item,index) in items"
          :key="index"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          @click="item.click">

          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>

export default {
  data() {
    return {
      rating: null,
      dialog: false,
      dialogSettings: false,
      switchEmailNotification: true,
      showPassword: null,
      showPasswordConfirm: null,
      userEmail: null,
      password: null,
      passwordConfirm: null,
      error: false,
      showResult: false,
      result: '',
      items: [
        {
          icon: 'account_circle',
          href: '#',
          title: 'Профиль',
          click: (e) => {
          }
        },
        {
          icon: 'settings',
          href: '#',
          title: 'Настройки',
          click: () => {
            const vm = this;

            vm.dialogSettings = true;
          }
        },
        {
          icon: 'exit_to_app',
          href: '#',
          title: 'Выход',
          click: () => {
            const vm = this;

            vm.$router.push({ name: 'Login' });
          }
        }
      ],
      notifications:
      [
        {
          title: 'Новое письмо от Гамарника А.',
          color: 'light-blue',
          icon: 'email',
          actionAt: '12 min ago',
          isActive: true,
          onClick: () => {
            const vm = this;
            vm.$router.push({ name: 'Mailbox' });
          }
        },
        {
          title: 'Назначена встреча',
          color: 'red',
          icon: 'calendar_today',
          actionAt: '46 min ago',
          isActive: true,
          onClick: () => {
            const vm = this;
            vm.$router.push({ name: 'Calendar' });
          }
        },
        {
          title: 'Новое письмо от Сильчева И.',
          color: 'light-blue',
          icon: 'email',
          isActive: true,
          timeLabel: '2 hour ago',
          onClick: () => {
            const vm = this;
            vm.$router.push({ name: 'Mailbox' });
          }
        }
      ]
    }
  },

  methods: {
    toggleNavigationBar() {
      const vm = this;
      vm.$emit('toggleNavigationBar');
    },

    setUpSettings() {
      const vm = this;

      if (vm.userEmail === null || vm.password === null || vm.passwordConfirm === null) {

        vm.result = "Email and Password can't be null.";
        vm.showResult = true;

        return;
      }

      if (vm.password !== vm.passwordConfirm) {

        vm.error = true;
        vm.result = "Passwords does not match the confirm password.";
        vm.showResult = true;

        return;
      }

      vm.$root.userEmail = vm.userEmail;
      vm.$root.userPassword = vm.password;

      vm.result = "Email and password changed succesfully.";
      vm.showResult = true;

      vm.dialogSettings = false;
    }
  }
};
</script>
