<template>
  <v-container fluid>

    <v-layout row justify-space-between> 
        <v-flex md3>
              <v-text-field
                v-model="pult_number"
                clearable
                clearable-icon
                filled
                :rules="[rules.required, rules.digit]"
                :color="$root.themeColor"
                label="Пультовий номер"
                style="min-height: 96px"
              ></v-text-field>            
        </v-flex>    

        <v-flex md3>
            <v-select
                v-model="installer_fio"
                :items="installer_fio_items"
                :color="$root.themeColor"
                filled
                label="Монтажник"
                outlined
            ></v-select>              
        </v-flex>

        <v-flex md3>
            <v-text-field
                v-model="model_ppk"
                clearable
                clearable-icon
                filled
                :rules="[rules.required, rules.digit]"
                :color="$root.themeColor"
                label="Модель ППК"
                style="min-height: 96px"
            ></v-text-field> 
        </v-flex>           
    </v-layout>

    <v-layout row justify-space-between> 
        <v-flex md3>
            <v-text-field
                v-model="number_ppk"
                clearable
                clearable-icon
                filled
                :rules="[rules.required, rules.digit]"
                :color="$root.themeColor"
                label="Номер ППК"
                style="min-height: 96px"
            ></v-text-field>  
        </v-flex>
        <v-flex md3>
            <v-text-field
                v-model="floor"
                clearable
                clearable-icon
                filled
                :rules="[rules.required, rules.digit]"
                :color="$root.themeColor"
                label="Этаж"
                style="min-height: 96px"
            ></v-text-field>                
        </v-flex>
        <v-flex md3>
            <v-text-field
                v-model="floors"
                clearable
                clearable-icon
                filled
                :rules="[rules.required, rules.digit]"
                :color="$root.themeColor"
                label="Этажность"
                style="min-height: 96px"
            ></v-text-field>                
        </v-flex>
    </v-layout>

    <v-layout row justify-space-between> 
        <v-flex md3>
            <v-checkbox 
                v-model="animal" 
                label="Наличие животных"
            ></v-checkbox>
        </v-flex>
        <v-flex md3> 
            <v-text-field
                v-model="porch"
                clearable
                clearable-icon
                filled
                :rules="[rules.required, rules.digit]"
                :color="$root.themeColor"
                label="Подъезд"
                style="min-height: 96px"
            ></v-text-field>   
        </v-flex>
        <v-flex md3>
            <v-checkbox 
                v-model="concierge" 
                label="Консьерж"
            ></v-checkbox>
        </v-flex>
    </v-layout>

    <v-layout row justify-space-between> 
        <v-flex md3>
            <v-checkbox 
                v-model="lock" 
                label="Кодовые двери"
            ></v-checkbox>
        </v-flex>
        <v-flex md3>
            <v-checkbox 
                v-model="intercom" 
                label="Домофон"
            ></v-checkbox>
        </v-flex>
        <v-flex md3>
            <v-checkbox 
                v-model="gratings" 
                label="Решетки"
            ></v-checkbox>
        </v-flex>
         
    </v-layout>    

          <v-layout row>
          <v-flex>

            <v-card-actions>
                <v-btn
                    text
                    class="white--text"
                    :color="$root.themeColor"
                    @click="clear_formular()"
                >
                    Очистить
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    class="white--text"
                    :color="$root.themeColor"
                    depressed
                    @click="save_formular()"
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
            clear_formular() {
                const vm = this;
                vm.pult_number= undefined;
                vm.installer_fio= vm.installer_fio_items[0];
                vm.model_ppk= undefined;
                vm.number_ppk= undefined;
                vm.floor= undefined;
                vm.floors= undefined;
                vm.animal= undefined;
                vm.porch= undefined;
                vm.concierge= undefined;
                vm.lock= undefined;
                vm.intercom= undefined;
                vm.gratings= undefined;
            },
            save_formular() {
                alert('Данные сохранены...');
            },
        },

    data: () => ({
        pult_number: undefined,
        installer_fio: 'Не определен',
        installer_fio_items: ['Не определен','Пупкин И.И.', 'Пушкин А.С.'],
        model_ppk: undefined,
        floor: undefined,
        floors: undefined,
        animal:undefined,
        porch: undefined,
        concierge: undefined,
        lock: undefined,
        intercom: undefined,
        gratings: undefined,

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