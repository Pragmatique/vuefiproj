<template>
        <v-container fluid>

          <v-layout row justify-space-between> 

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Абонплата, всего"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-select
                v-model="abonent_type_payment"
                :items="abonent_type_payment_items"
                :color="$root.themeColor"
                filled
                label="Тип оплаты"
                outlined
              ></v-select>              
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_liability"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Материальная ответственность"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_base"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Базовая оплата за охрану"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_checkout"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Кол.допвыездов ГБР"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_checkout_payment"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимоть допвыездов ГБР"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

          <v-layout row justify-space-between> 
            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_ing"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Кол.выездов инженера (ТО)"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_ing_pay"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимость выезда инженера (ТО)"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_sms"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Кол. услуг СМС-инфо"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

         <v-layout row justify-space-between> 
            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_sms_pay"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимость СМС-инфо"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_zks"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимость запасного канала"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_house"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Услуга 'Остаюсь дома'"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

        <v-layout row justify-space-between> 
            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_insurance"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимость доп.страховки"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_sensor"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Кол.дополн. датчиков"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_sensor_pay"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимость доп.датчиков"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

        <v-layout row justify-space-between> 
            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_mode"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимость услуги - режим работы"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_report"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимость отчета за месяц"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_button"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Кол. тревожных кнопок"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>
          </v-layout>

        <v-layout row justify-space-between> 
            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_button_pay"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимость тревожной кнопки"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
              <v-text-field
                v-model="abonent_payment_compulsion"
                :rules="[rules.digit]"
                filled
                clearable
                clearable-icon
                :color="$root.themeColor"
                label="Стоимость улуги 'Под принуждением'"
                style="min-height: 96px"
              ></v-text-field>            
            </v-flex>

            <v-flex md3>
  
            </v-flex>
          </v-layout>

          <v-layout row>
          <v-flex>

            <v-card-actions>
              <v-btn
                text
                class="white--text"
                :color="$root.themeColor"
                @click="clear_abonement_payment()"
              >
                Очистить
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="white--text"
                :color="$root.themeColor"
                depressed
                @click="save_abonement_payment()"
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

      clear_abonement_payment() {
        const vm = this;
        vm.abonent_payment= 0;
        vm.abonent_type_payment= vm.abonent_type_payment_items[0];
        vm.abonent_payment_liability=  0;
        vm.abonent_payment_base= 0;
        vm.abonent_payment_checkout= 0;
        vm.abonent_payment_checkout_payment= 0;
        vm.abonent_payment_ing= 0;
        vm.abonent_payment_ing_pay= 0;
        vm.abonent_payment_sms=  0;
        vm.abonent_payment_sms_pay=  0;
        vm.abonent_payment_zks=  0;
        vm.abonent_payment_house=  0;
        vm.abonent_payment_insurance=  0;
        vm.abonent_payment_sensor=  0;
        vm.abonent_payment_sensor_pay=  0;
        vm.abonent_payment_mode=  0;
        vm.abonent_payment_report=  0;
        vm.abonent_payment_button=  0;
        vm.abonent_payment_button_pay=  0;
        vm.abonent_payment_compulsion=  0;
      },
      save_abonement_payment() {
        alert('Данные сохранены...');
      },

     },




    data: () => ({
      

      abonent_payment: 0,
      abonent_type_payment: 'Не определен',
      abonent_type_payment_items: ['Не определен', 'Наличный расчет', 'Безнал расчет (с НДС)', 'Безнал расчет (без НДС)'],
      abonent_payment_liability: 0,
      abonent_payment_base: 0,
      abonent_payment_checkout: 0,
      abonent_payment_checkout_payment: 0,
      abonent_payment_ing: 0,
      abonent_payment_ing_pay: 0,
      abonent_payment_sms: 0,
      abonent_payment_sms_pay: 0,
      abonent_payment_zks: 0,
      abonent_payment_house: 0,
      abonent_payment_insurance: 0,
      abonent_payment_sensor: 0,
      abonent_payment_sensor_pay: 0,
      abonent_payment_mode: 0,
      abonent_payment_report: 0,
      abonent_payment_button: 0,
      abonent_payment_button_pay: 0,
      abonent_payment_compulsion: 0,

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