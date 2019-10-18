<template>
  <v-container fluid>

    <v-layout row justify-space-between> 
      <v-flex md3>
        <v-select
          v-model="status_project"
          :items="projectstatuses"
          item-text="status"
          item-value="item"
          :color="$root.themeColor"
          filled
          label="Статус"
          outlined
        ></v-select>
      </v-flex>

      <v-flex md3>
        <v-select
          v-model="owner_project"
          :items="users"
          item-text="last_name"
          item-value="item"
          :color="$root.themeColor"
          filled
          chips
          close
          label="Ответственный"
          outlined
        >
          <template slot="selection" slot-scope="data">
              <v-chip
                :selected="data.selected"
                :key="JSON.stringify(data.item)"
                close
                class="chip--select-multi"
                @input="chipClose"
              >
                {{ data.item.last_name }} {{ data.item.first_name }}
              </v-chip>
          </template>
          <template slot="item" slot-scope="data">
              <v-list-tile-content>
                <v-list-tile-title v-html="data.item.last_name + ' ' + data.item.first_name"></v-list-tile-title>
              </v-list-tile-content>
          </template>
        </v-select>

      </v-flex>

      <v-flex md5>
        <v-menu
                ref="menu_project_date"
                v-model="menu_project_date"
                :close-on-content-click="false"
                :return-value.sync="project_date"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
        >
                <template slot="activator">
                  <v-text-field
                    v-model="project_date"
                    label="Дата проекта"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                </template>

                <v-date-picker v-model="project_date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu_project_date = false">Отмена</v-btn>
                  <v-btn text color="primary" @click="$refs.menu_project_date.save(project_date)">OK</v-btn>
                </v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex>
        <v-card-actions>
                <v-btn
                    text
                    class="white--text"
                    :color="$root.themeColor"
                    @click="clear_basic()"
                >
                    Очистить
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    class="white--text"
                    :color="$root.themeColor"
                    depressed
                    @click="save_basic()"
                >
                    Сохранить
                </v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
        methods: {
            clear_basic() {
                const vm = this;
                vm.status_project= vm.status_project_items[3];
                vm.number= undefined;
                vm.project_date= new Date().toISOString().substr(0, 10);
                vm.owner_project= vm.owner_project_items[0];
            },
            save_basic() {
                alert('Данные сохранены...');
            },
            chipClose() {
              this.owner_project = null;
              console.log('chip close')
            }
        },

        computed: {
          ...mapGetters('dictionary', ['projectstatuses']),
          ...mapGetters('authuser', ['users'])
        },

        data: () => ({

            status_project_items: ['Новый','Подписание договора', 'Монтаж', 'Не определен'],
            status_project: null,
            number: undefined,
            project_date: new Date().toISOString().substr(0, 10),
            owner_project: null,
            owner_project_items: ['Не определен', 'Вася Пупкин', 'Пушкин А.С.'],
            menu_project_date: false,

            rules: {
                  email: v => (v || '').match(/@/) || 'Введите корректный email',
                  length: len => v => (v || '').length >= len || `Минимальное количество цифр ${len}`,
                  //egrpou: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                  digit: v => (v || '').match(/(?<=^| )\d+(\.\d+)?(?=$| )/) ||'Поле должно содержать только цифры',
                  required: v => !!v || 'Поле, обязательное для заполнения',
            },
        }),

        beforeMount() {
          if (this.projectstatuses.length < 1) { this.$store.dispatch('dictionary/getProjectStatuses',null,{root:true}) }
          if (this.users.length < 1) { this.$store.dispatch('authuser/getUsers',null,{root:true}) }
        }
}

</script>
