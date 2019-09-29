<template>
    <v-card 
        full-width
    >
      <v-card-title>
        Клиенты
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Поиск"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="clients"
        class="elevation-1"
        show-select
        :search="search"
      >

      </v-data-table>

      <template>
        <v-btn text color="primary" @click="close()">Отмена</v-btn>
        <v-btn text color="primary" @click="ret(item.name)">OK</v-btn>
      </template>
    </v-card>

</template>

<script>

export default {
    data() {
      return {
        search: '',
        dialog_client_list: false,
        headers: [
            {
                text: 'Наименование',
                align: 'left',
                sortable: true,
                value: 'name',
            },
            { text: 'ЕГРПОУ', value: 'egrpou', sortable: true},
            { text: 'Адрес', value: 'address', sortable: false},
            { text: 'Телефон', value: 'phone', sortable: false },
            { text: 'Email', value: 'email', sortable: false },
//        { text: 'Действия', value: 'action', sortable: false },
        ],
        clients: [
          {
            name: 'ФОП Пупкин',
            egrpou: '1236547890',
            address: 'м.Киев',
            phone: '+380507777777',
            email: '1@2.3',
          },
        ],

        item: {
            name: '',
            egrpou: '',
            address: '',
            phone: '',
            email: '',
        },

        editedIndex: -1,
        editedItem: {
            name: '',
            egrpou: '',
            address: '',
            phone: '',
            email: '',
        },
        defaultItem: {
            name: '',
            egrpou: '',
            address: '',
            phone: '',
            email: '',
        }
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    beforeMount () {
      this.initialize()
      debugger
    },

    methods: {
        initialize () {
            this.clients = [
                {
                    name: 'ФОП Пупкин',
                    egrpou: '1236547890',
                    address: 'м.Киев',
                    phone: '+380507777777',
                    email: '1@2.3',
                },
            ]
        },

//      editItem (item) {
//        this.editedIndex = this.clients.indexOf(item)
 //       this.editedItem = Object.assign({}, item)
//        this.dialog = true
//      },

//      deleteItem (item) {
//        const index = this.clients.indexOf(item)
//        confirm('Подтвердите удаление записи?') && this.clients.splice(index, 1)
//     },

//      addItem(){
 //         this.dialog=true
//      },

        close () {
            
//        setTimeout(() => {
//          this.editedItem = Object.assign({}, this.defaultItem)
 //         this.editedIndex = -1
//        }, 300)
        },

        ret (name) {
            this.$emit('ret', {name: name, dialog_client_list: false} );
            console.log('ret');
            console.log(this.name);
            console.log(this.dialog_client_list);
 //       if (this.editedIndex > -1) {
 //         Object.assign(this.clients[this.editedIndex], this.editedItem)
//        } else {
 //         this.clients.push(this.editedItem)
 //       }
//        this.close()
 //     },
        },
    },
}
</script>
