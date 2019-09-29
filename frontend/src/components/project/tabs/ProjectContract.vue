<template>
        <v-container fluid>

          <v-layout row justify-space-between> 

            <v-flex md2>
              <v-text-field
                v-model="contract_number"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Номер договора"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>


            <v-flex md3>
              <v-menu
                ref="menu_contract_date"
                v-model="menu_contract_date"
                :close-on-content-click="false"
                :return-value.sync="contract_date"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template slot="activator">
                  <v-text-field
                    v-model="contract_date"
                    label="Дата договора"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                </template>

                <v-date-picker v-model="contract_date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu_contract_date = false">Отмена</v-btn>
                  <v-btn text color="primary" @click="$refs.menu_contract_date.save(contract_date)">OK</v-btn>
                </v-date-picker>
              </v-menu>

            </v-flex>

            <v-flex md3>
              <v-menu
                ref="menu_contract_start_date"
                v-model="menu_contract_start_date"
                :close-on-content-click="false"
                :return-value.sync="contract_start_date"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template slot="activator">
                  <v-text-field
                    v-model="contract_start_date"
                    label="Дата договора"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                </template>

                <v-date-picker v-model="contract_start_date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu_contract_start_date = false">Отмена</v-btn>
                  <v-btn text color="primary" @click="$refs.menu_contract_start_date.save(contract_start_date)">OK</v-btn>
                </v-date-picker>
              </v-menu>

            </v-flex>
          </v-layout> 

          <v-layout row justify-space-between> 

            <v-flex md3>
              <v-menu
                ref="menu_contract_stop_date"
                v-model="menu_contract_stop_date"
                :close-on-content-click="false"
                :return-value.sync="contract_stop_date"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template slot="activator">
                  <v-text-field
                    v-model="contract_stop_date"
                    label="Дата окончания договора"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                </template>

                <v-date-picker v-model="contract_stop_date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu_contract_stop_date = false">Отмена</v-btn>
                  <v-btn text color="primary" @click="$refs.menu_contract_stop_date.save(contract_stop_date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="contract_codeword"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Кодовое слово подтверждения отмены"
                style="min-height: 96px"
              ></v-text-field>    
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="contract_confidant_1"
                :items="contract_confidant_1_items"
                :color="$root.themeColor"
                filled
                label="Доверенное лицо №1"
                outlined
              ></v-select>              
            </v-flex>

          </v-layout> 

          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-select
                v-model="contract_confidant_2"
                :items="contract_confidant_1_items"
                :color="$root.themeColor"
                filled
                label="Доверенное лицо №2"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="contract_confidant_3"
                :items="contract_confidant_1_items"
                :color="$root.themeColor"
                filled
                label="Доверенное лицо №3"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="contract_confidant_4"
                :items="contract_confidant_1_items"
                :color="$root.themeColor"
                filled
                label="Доверенное лицо №4"
                outlined
              ></v-select>              
            </v-flex>

          </v-layout> 

          <v-layout row justify-space-between> 
            Здесь будут иконки сканов договора и проекта монтажа
          </v-layout> 

          <v-layout row>
            <v-flex>

              <v-card-actions>
                <v-btn
                  text
                  class="white--text"
                  :color="$root.themeColor"
                  @click="clear_contract()"
                >
                  Очистить
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  class="white--text"
                  :color="$root.themeColor"
                  depressed
                  @click="save_contract()"
                >
                  Сохранить
                </v-btn>
              </v-card-actions>  

            </v-flex>
          </v-layout>
        </v-container>    
</template>

<script>
export default {
    methods: {
      clear_contract() {
        const vm = this;
        vm.contract_number= undefined;
        vm.contract_date= new Date().toISOString().substr(0, 10);
        vm.contract_start_date= new Date().toISOString().substr(0, 10);
        vm.contract_stop_date= new Date().toISOString().substr(0, 10);
        vm.contract_codeword= undefined;
        vm.contract_confidant_1= vm.contract_confidant_1_items[0];
        vm.contract_confidant_2= vm.contract_confidant_1_items[0];
        vm.contract_confidant_3= vm.contract_confidant_1_items[0];
        vm.contract_confidant_4= vm.contract_confidant_1_items[0];

      },
      save_contract() {
        alert('Данные сохранены...');
      },

    },

    data: () => ({
      

      contract_number: undefined,
      contract_date: new Date().toISOString().substr(0, 10),
      menu_contract_date: false,
      contract_start_date: new Date().toISOString().substr(0, 10),
      menu_contract_start_date: false,
      contract_stop_date: new Date().toISOString().substr(0, 10),
      menu_contract_stop_date: false,
      contract_codeword: undefined,
      contract_confidant_1: undefined,
      contract_confidant_1_items: ['Не определен', 'Вася Пупкин', 'Пушкин А.С.'],   
      contract_confidant_2: undefined,
      contract_confidant_3: undefined,
      contract_confidant_4: undefined,

      rules: {
              email: v => (v || '').match(/@/) || 'Введите корректный email',
              length: len => v => (v || '').length >= len || `Минимальное количество цифр ${len}`,
              //egrpou: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
              digit: v => (v || '').match(/(?<=^| )\d+(\.\d+)?(?=$| )/) ||'Поле должно содержать только цифры',
              required: v => !!v || 'Поле, обязательное для заполнения',
             },   

      
    }),    
}
</script>