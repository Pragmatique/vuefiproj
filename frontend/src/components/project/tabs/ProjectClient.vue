<template>
        <v-container fluid>
          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-select
                v-model="client_type"
                :items="clienttypes"
                :color="$root.themeColor"
                filled
                item-text="type"
                item-value="item"
                label="Тип клиента"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md8>
              <v-autocomplete
                v-model="model"
                :items="items"
                :loading="isLoading"
                :search-input.sync="search"
                color="white"
                hide-no-data
                hide-selected
                item-text="name"
                item-value="item"
                label="Клиент"
                placeholder="Выберите клиента"
                prepend-icon="mdi-database-search"
                style="min-height: 96px"
                return-object
              ></v-autocomplete>
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between>
            <v-flex md3>
              <v-text-field
                v-model="model.egrpou"
                :rules="[rules.required, rules.digit, rules.length(10)]"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="ЕГРПОУ / Иден. код"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md8>
              <v-text-field
                v-model="contact"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="Контактное лицо"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between>
            <v-flex md2>
              <v-text-field
                v-model="model.phone"
                :rules="[rules.required, rules.phone]"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="Телефон"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md2>
              <v-text-field
                v-model="model.email"
                :rules="[rules.email]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Email"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md6>
              <v-text-field
                v-model="model.address"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Город"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between>
            <v-flex md3>
              <v-text-field
                v-model="model.phone"
                :rules="[rules.required]"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="Улица"
                style="min-height: 96px"
              ></v-text-field>
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="model.email"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Номер дома"
                style="min-height: 96px"
              ></v-text-field>
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="model.address"

                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Номер квартиры"
                style="min-height: 96px"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between>
            <v-flex md3>
              <v-text-field
                v-model="model.phone"
                :rules="[rules.required]"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="Канал захода"
                style="min-height: 96px"
              ></v-text-field>
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="model.email"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Реферальная программа"
                style="min-height: 96px"
              ></v-text-field>
            </v-flex>

          </v-layout>

          <v-layout row justify-space-between>
            <v-flex md3>
              <v-checkbox
                v-model="animal"
                label="Сетевой клиент 5+"
              ></v-checkbox>
            </v-flex>

            <v-flex md3>
              <v-checkbox
                v-model="animal"
                label="Сетевой клиент 20+"
              ></v-checkbox>
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="model.address"

                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Баланс 1С"
                style="min-height: 96px"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
          <v-flex>

            <v-card-actions>
              <v-btn
                text
                class="white--text"
                :color="$root.themeColor"
                @click="clear_client()"
              >
                Очистить
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="white--text"
                :color="$root.themeColor"
                depressed
                @click="save_client()"
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

    /*components: {
        ClientList
    },*/

    methods: {
      clear_client() {
        const vm = this;
        vm.client_type= null;
        vm.client_name= null;
        vm.egrpou= null;
        vm.contact= null;
        vm.phone= null;
        vm.email= null;
        vm.address= null;
      },
      save_client() {
        alert('Данные сохранены...');
      },

      onRet(e){
        this.client_name = e.name;
        this.dialog_client_list= e.dialog_client_list;
        console.log(this.client_name);
        console.log(this.dialog_client_list);
      },

    },

    computed: {
      ...mapGetters('dictionary', ['clienttypes']),
      ...mapGetters('authuser', ['users']),
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
        return this.clients.map((item) => {
          const short_name = item.name.length > this.descriptionLimit
            ? item.name.slice(0, this.descriptionLimit) + '...'
            : item.name

          return Object.assign({}, item, { short_name })
        })
      },
      client_object: {
        get: () => {
          if (this.model == null) {
            return {
              name: '',
              egrpou: '',
              address: '',
              phone: '',
              email: ''
            }
          };
          return this.model;
        },
        set: (newVal) => {
          this.model = newVal;
          debugger;
        }
      }
    },

    data() {
      return {
        client_type: null,
        client_type_items: ['Не определен', 'Юридическое лицо', 'Физическое лицо', 'Частный предприниматель'],
        client_name: null,
        egrpou: null,
        contact: null,
        phone: null,
        email: null,
        address:null,
        tabs:null,
        modal:false,
        dialog_client_list:false,
        descriptionLimit: 60,
        entries: [],
        isLoading: false,
        model:  {
          name: '',
          egrpou: '',
          address: '',
          phone: '',
          email: ''
        },
        search: null,

        rules: {
          email: v => (v || '').match(/@/) || 'Введите корректный email',
          length: len => v => (v || '').length >= len || `Минимальное количество цифр ${len}`,
          //egrpou: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          digit: v => (v || '').match(/(?<=^| )\d+(\.\d+)?(?=$| )/) ||'Поле должно содержать только цифры',
          phone: v => (v || '').match(/(\s*)?(\+)?([- _():=+]?\d[- ():=+]?){10,14}(\s*)?/) ||'Формат номера +38(0XX)XXX-XX-XX',
          required: v => !!v || 'Поле, обязательное для заполнения',
        },

        clients: [
          {
            name: 'ФОП Пупкин',
            egrpou: '1236547890',
            address: 'м.Киев',
            phone: '+38(050)777-77-77',
            email: '1@2.3',
          },
          {
            name: 'ФОП Гопкин',
            egrpou: '2342525252',
            address: 'м.Бровари',
            phone: '+38(050)777-74-56',
            email: '2@3.4',
          },
        ]

      }
    },

    beforeMount() {
      if (this.clienttypes.length < 1) { this.$store.dispatch('dictionary/getClientTypes',null,{root:true}) }
      if (this.users.length < 1) { this.$store.dispatch('authuser/getUsers',null,{root:true}) }
    }
}

</script>
