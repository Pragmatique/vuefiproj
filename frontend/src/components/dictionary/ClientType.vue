<template>
  <div>
    <v-snackbar
      v-model="showResult"
      :color= "snackbarColor"
      :timeout="2000"
      top>
      {{ result }}
    </v-snackbar>
    <v-container fluid>
      <v-card>
        <v-container fluid>
          <v-layout row align-center>
            <v-flex shrink xs4 offset-xs4>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template slot="activator">
                  <v-btn color="blue" >Добавить тип объекта</v-btn>
                </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Тип объекта</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12 sm12 md12>
                            <v-text-field label="Введите новый тип объекта" required v-model='new_client_type'></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" flat @click.native="dialog = false">Закрыть</v-btn>
                      <v-btn color="blue darken-1" flat @click.native="dialog = false" @click="addItem(new_client_type)">Создать</v-btn>
                    </v-card-actions>
                  </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-card v-for="(clienttype, index) in clienttypes" :key="index" class="mb-3">
      <v-container fluid>
        <v-layout row justify-space-between>
          <v-flex shrink xs10>
            <v-card-title class="title">
              {{ clienttype.type }}
            </v-card-title>
          </v-flex>
          <v-flex shrink xs2>
              <v-dialog v-model="dialogConfirm" persistent max-width="500px">
                <template slot="activator">
                  <v-btn color="red" >Удалить</v-btn>
                </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Вы уверены, что хотите удалить тип объекта?</span>
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red darken-1" flat @click.native="dialogConfirm = false">Нет</v-btn>
                      <v-btn color="blue darken-1" flat @click.native="dialogConfirm = false" @click="removeItem(clienttype.id)">Да</v-btn>
                    </v-card-actions>
                  </v-card>
              </v-dialog>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
      return {
        snackbarColor: 'error',
        dialog: false,
        dialogConfirm: false,
        on: true,
        new_client_type: '',
        error: false,
        showResult: false,
        result: '',
      }
    },
    computed: {
      ...mapGetters('dictionary', ['clienttypes'])
    },
    methods: {
      async removeItem (id) {

        await this.$store.dispatch('dictionary/deleteClientType',
          id,
          {root:true}
        );
      },
      async addItem (new_client_type) {

        if (this.new_client_type === '') {
          this.error = true;
          this.result = "Тип объекта не может быть пустым";
          this.showResult = true;
          return;
        } else {
          await this.$store.dispatch('dictionary/createClientType',
            {type: this.new_client_type},
            {root:true}
          );
          this.new_client_type='';
        }
      }
    },
    beforeMount () {
      this.$store.dispatch('dictionary/getClientTypes',null,{root:true})
    }


}
</script>
