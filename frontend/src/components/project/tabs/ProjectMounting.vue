<template>
        <v-container fluid>
          <v-layout row justify-space-between> 
            <v-flex md7>
              <v-select
                v-model="contractors"
                :items="contractors_items"
                :color="$root.themeColor"
                filled
                label="Подрядчик на монтаж"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="mounting_type"
                :items="mounting_type_items"
                :color="$root.themeColor"
                filled
                label="Вид монтажных работ"
                outlined
              ></v-select>      
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between>
            <v-flex md3>
              <v-select
                v-model="tightness"
                :items="tightness_items"
                :color="$root.themeColor"
                filled
                label="Вид обследования"
                outlined
              ></v-select>      
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="peayment_type"
                :items="peayment_type_items"
                :color="$root.themeColor"
                filled
                label="Тип оплаты"
                outlined
              ></v-select>      
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="estimate"
                :rules="[rules.required, rules.digit]"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="Смета"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between>
            <v-flex md3>
              <v-text-field
                v-model="mounting_payment"
                :rules="[rules.required, rules.digit]"
                clearable
                clearable-icon
                filled
                :color="$root.themeColor"
                label="Сумма за монтаж"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="mounting_profit"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Прибыль от монтажа"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="mounting_zone"
                :rules="[rules.required]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Зона обслуживания"
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
                @click="clear_mounting()"
              >
                Очистить
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="white--text"
                :color="$root.themeColor"
                depressed
                @click="save_mounting()"
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
      clear_mounting() {
        const vm = this;
        vm.contractors= vm.contractors_items[0];
        vm.mounting_type= vm.mounting_type_items[0];
        vm.tightness= vm.tightness_items[0],
        vm.peayment_type= vm.peayment_type_items[0];
        vm.mounting_payment= 0;
        vm.mounting_profit= 0;
        vm.estimate= 0;
        vm.mounting_zone= undefined;      
    },

      save_mounting() {
        alert('Данные сохранены...');
      },

    },

    data: () => ({

            contractors: 'Не определен',
            contractors_items:['Не определен', 'ТОВ Укрпервачпостач'],
            mounting_type: 'Не определен',
            mounting_type_items: ['Не определен', 'Монтаж'],
            tightness: 'Не определен',
            tightness_items: ['Не определен', 'Без обследования'],
            peayment_type: 'Не определен',
            peayment_type_items: ['Не определен', 'Наличный расчет', 'Безнал расчет (с НДС)', 'Безнал расчет (без НДС)'],
            mounting_payment: 0,
            mounting_profit: 0,
            mounting_zone: undefined,
            estimate: 0,


            rules: {
              email: v => (v || '').match(/@/) || 'Введите корректный email',
              length: len => v => (v || '').length >= len || `Минимальное количество цифр ${len}`,
              //egrpou: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
              digit: v => (v || '').match(/(?<=^| )\d+(\.\d+)?(?=$| )/) ||'Поле должно содержать только цифры',
              phone: v => (v || '').match(/(\s*)?(\+)?([- _():=+]?\d[- ():=+]?){10,14}(\s*)?/) ||'Формат номера +38(0XX)XXX-XX-XX',
              required: v => !!v || 'Поле, обязательное для заполнения',
             },   

    }),      
}
</script>