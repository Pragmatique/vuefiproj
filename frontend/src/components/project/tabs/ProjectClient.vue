<template>
        <v-container fluid>
          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-select
                v-model="client_type"
                :items="client_type_items"
                :color="$root.themeColor"
                filled
                label="Тип клиента"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md8>
              <v-dialog
                v-model="modal"
                :return-value.sync="client_name"
                :close-on-content-click="true"
                transition="scale-transition"
                persistent
                full-width
                width="500px"   
              >
                <template slot="activator">
                  <v-text-field
                    v-model="client_name"
                    label="Клиент"
                    prepend-icon="mdi-account-multiple-plus"
                    readonly
                    @ret='onRet'
                  ></v-text-field>
                </template>

                <template>
                  <client-list @ret="onRet"></client-list>
                </template>
              </v-dialog>
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between>
            <v-flex md3>
              <v-text-field
                v-model="egrpou"
                :rules="[rules.required, rules.digit, rules.length(8)]"
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
                v-model="phone"
                :rules="[rules.required, rules.phone, rules.length(10)]"
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
                v-model="email"
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
                v-model="address"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Фактический адрес"
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

import ClientList from '@/components/ClientList.vue'


export default {

    /*components: {
        ClientList
    },*/

    methods: {
      clear_client() {
        const vm = this;
        vm.client_type= vm.client_type_items[0];
        vm.client_name= undefined;
        vm.egrpou= undefined;
        vm.contact= undefined;
        vm.phone= undefined;
        vm.email= undefined;
        vm.address= undefined;
      },
      save_client() {
        alert('Данные сохранены...');
      },

      onRet(data){
        client_name = data.name;
        dialog_client_list= data.dialog_client_list;
      },

    },

    data() {
      return {
        client_type: 'Не определен',
        client_type_items: ['Не определен', 'Юридическое лицо', 'Физическое лицо', 'Частный предприниматель'],
        client_name: undefined,
        egrpou: undefined,
        contact: undefined,
        phone: undefined,
        email: undefined,
        address:undefined,
        tabs:null,
        modal:false,
        dialog_client_list:false,

        rules: {
                email: v => (v || '').match(/@/) || 'Введите корректный email',
                length: len => v => (v || '').length >= len || `Минимальное количество цифр ${len}`,
                //egrpou: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                digit: v => (v || '').match(/(?<=^| )\d+(\.\d+)?(?=$| )/) ||'Поле должно содержать только цифры',
                phone: v => (v || '').match(/(\s*)?(\+)?([- _():=+]?\d[- ():=+]?){10,14}(\s*)?/) ||'Формат номера +38(0XX)XXX-XX-XX',

                required: v => !!v || 'Поле, обязательное для заполнения',
        },
      }
    },
}

</script>
