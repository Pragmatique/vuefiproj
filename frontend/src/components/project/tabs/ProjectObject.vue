<template>
        <v-container fluid>
          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-select
                v-model="object_category"
                :items="object_category_items"
                :color="$root.themeColor"
                filled
                label="Категория объекта"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="object_type"
                :items="object_type_items"
                :color="$root.themeColor"
                filled
                label="Тип объекта"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="service_type"
                :items="service_type_items"
                :color="$root.themeColor"
                filled
                label="Тип услуги"
                outlined
              ></v-select>              
            </v-flex>
          </v-layout> 
          <v-layout row justify-space-between> 

            <v-flex md6>
              <v-text-field
                v-model="address_object"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Адрес объекта"
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
                  @click="clear_object()"
                >
                  Очистить
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  class="white--text"
                  :color="$root.themeColor"
                  depressed
                  @click="save_object()"
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

      clear_object() {
        const vm = this;
        vm.object_category= vm.object_category_items[0];
        vm.object_type =  vm.object_type_items[0];
        vm.service_type=  vm.service_type_items[0];
        vm.address_object= undefined;
      },
      save_object() {
        alert('Данные сохранены...');
      },

    },

    data: () => ({
      
      object_category: 'Не определена',
      object_category_items: ['Не определена', 'Частная собственность','Государственная собственность', 'Комунальная собственность'],
      object_type:  'Не определен',
      object_type_items: ['Не определен', 'Квартира','Офис', 'Часный дом', 'Склад', 'Ресторан', 'Коммерческое помещение'],
      service_type: 'Не определен',
      service_type_items: ['Не определен', 'Охранная сигнализация','Пожарная сигнализация', 'Кнопка тревожного сигнала'],
      address_object: undefined,

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