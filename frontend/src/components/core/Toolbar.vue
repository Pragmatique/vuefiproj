<template>
  <v-toolbar
    dark
    app
    :color="colorForTheme">
    <v-toolbar-title>
      <v-toolbar-side-icon @click="toggleNavigationBar"></v-toolbar-side-icon>
      {{ $root.firstNameCompany }}
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-dialog
      v-model="dialogSettings"
      width="700">
      <v-card >
        <v-card-title class="headling"
          primary-title>
          Настройки
        </v-card-title>

        <v-card-text>
          Хотите выбрать цвет панели?
          <swatches v-model="colorForTheme"
            inline colors="material-dark" :exceptions="['#FFFFFF']" shapes="circles" show-border>
          </swatches>
        </v-card-text>
        <v-card-text>
          Настройки Пользователя
          <v-form>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12 xs6 md11>
                  <v-text-field
                    v-model="userEmail"
                    label="Email"
                    hint="Email пользователя нельзя менять"/>
                </v-flex>

                <v-flex xs12 xs6 md1 />

                <v-flex xs12 sm6 md11>
                  <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                    :type="showPassword ? 'text' : 'password'"
                    label="Новый пароль"
                    hint="Укажите более сложный пароль.."
                    :error="error"
                    @click:append="showPassword = !showPassword" />
                </v-flex>

                <v-flex xs12 sm6 md1 />

                <v-flex xs12 sm6 md11>
                  <v-text-field
                    v-model="passwordConfirm"
                    :append-icon="showPasswordConfirm ? 'visibility_off' : 'visibility'"
                    :type="showPasswordConfirm ? 'text' : 'password'"
                    label="Повторите новый пароль"
                    hint="и подтвердите его.."
                    :error="error"
                    @click:append="showPasswordConfirm = !showPasswordConfirm" />
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="setUpSettings">
            Изменить пароль
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="showResult"
      :color= "snackbarColor"
      :timeout="2000"
      top>
      {{ result }}
    </v-snackbar>
    
    <v-menu offset-y offset-x :nudge-bottom="10" :color="colorForTheme" transition="scale-transition">

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
        <v-avatar v-if="userData.profile.photo">
          <img
            :src="userData.profile.photo"
            :alt="userData.first_name"
          >
        </v-avatar>
        <v-avatar v-else>
          <v-icon large>account_circle</v-icon>
        </v-avatar>
      </v-btn>
      <v-list >
        <v-list-tile
          v-for="(item,index) in items"
          color = "black"
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
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      colorForTheme: this.$store.state.authuser.themeColor,
      //userData: this.$store.state.authuser.userFull,
      snackbarColor: 'error',
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
          icon: 'fingerprint',
          //href: '#',
          title: 'Войти',
          click: (e) => {
            const vm = this;
            vm.$router.push({ name: 'Login' });
          }
        },
        {
          icon: 'account_circle',
          //href: '#',
          title: 'Профиль',
          click: (e) => {
          }
        },
        {
          icon: 'settings',
          //href: '#',
          title: 'Настройки',
          click: () => {
            const vm = this;

            vm.dialogSettings = true;
          }
        },
        {
          icon: 'exit_to_app',
          //href: '#',
          title: 'Выход',
          click: () => {
            const vm = this;
            vm.$store.dispatch('authuser/logout',null,{root:true});
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

  computed: {
      ...mapGetters('authuser', ['userFull']),
      ...mapState('authuser', ['user','passwordChangeSuccess']),
      userData() {return this.$store.state.authuser.userFull}
      /*,
      ...mapGetters('authuser', ['userFull'])*/
      /*colorForTheme: {
        get: ()=> {debugger; return this.$store.dispatch('authuser/themeColor',null, {root:true})},
        set: async (newValue)=> {await this.$store.dispatch('authuser/setThemeColor', newValue , {root:true})}
      }*/
  },
  watch: {
    colorForTheme: function (val, oldVal) {
      this.$store.dispatch('authuser/setThemeColor', val , {root:true})
    }
  },

  methods: {
    toggleNavigationBar() {
      const vm = this;
      vm.$emit('toggleNavigationBar');
    },

    async setUpSettings() {
      const vm = this;

      if (vm.userEmail === null || vm.password === null || vm.passwordConfirm === null) {

        vm.result = "Email и Пароль не могут быть пустыми";
        vm.showResult = true;
        return;
      }

      if (vm.password !== vm.passwordConfirm) {

        vm.error = true;
        vm.result = "Пароли должны совпадать...";
        vm.showResult = true;
        return;
      }

      vm.$root.userEmail = vm.userEmail;
      vm.$root.userPassword = vm.password;
      await this.$store.dispatch('authuser/changePassword', {
        userId: this.user.pk,
        changeData: {password: vm.password}
      }, {root:true});

      if (this.passwordChangeSuccess) {
        vm.result = "Пароль был успешно изменен";
        vm.showResult = true;
        vm.dialogSettings = false;
      } else {
        vm.error = true;
        vm.result = "Не удалось изменить пароль";
        vm.showResult = true;
      }
    }
  },
  beforeMount () {
    //this.themeColor = this.$store.state.authuser.themeColor
    this.$store.dispatch('authuser/getCurrentUser',null,{root:true})
    console.log(this.$store.state.authuser.userFull)
    //this.userData = this.$store.state.authuser.userFull
    //console.log(this.$store.state.authuser.userFull)
    //await setTimeout(console.log(this.$store.state.authuser.userFull), 1000)
    //setTimeout(console.log(this.userFull), 2000)
  },
  mounted() {
    console.log(this.userFull)
  }
};
</script>
