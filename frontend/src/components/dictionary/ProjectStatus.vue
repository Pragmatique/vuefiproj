<template>
  <div>
    <v-container fluid>
      <v-card>
        <v-container fluid>
          <v-layout row align-center>
            <v-flex shrink xs4 offset-xs4>
              <v-btn color="blue" @click="addItem">Добавить статус</v-btn>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template slot="activator">
                  <v-btn color="primary" dark >Open Dialog</v-btn>
                </template>
                <client-list></client-list>

              </v-dialog>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
    <v-divider></v-divider>
    <v-divider></v-divider>
    <v-card v-for="(projectstatus, index) in projectstatuses" :key="index" class="mb-3">
      <v-container fluid>
        <v-layout row justify-space-between>
          <v-flex shrink xs10>
            <v-card-title class="title">
              {{ projectstatus.status }}
            </v-card-title>
          </v-flex>
          <v-flex shrink xs2>
            <v-btn color="red" @click="removeItem(item.id)">Удалить</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ClientList from '@/components/ClientList.vue';
export default {
    data() {
      return {
        items: [
          { id: 'foo', title: 'Foo', content: 'Lorem ipsum' },
          { id: 'bar', title: 'Bar', content: 'Dolor sed amit' },
          { id: 'baz', title: 'Baz', content: 'Des talamat' }
        ],
        dialog: false,
        on: true
      }

    },
    computed: {
      ...mapGetters('dictionary', ['projectstatuses'])
    },
    methods: {
      removeItem (id) {
        this.items = this.items.filter(item => item.id !== id)
      },
      addItem () {
        console.log('Add item')
      }
    },
    beforeMount () {
      this.$store.dispatch('dictionary/getProjectStatuses',null,{root:true})
    }


}
</script>
