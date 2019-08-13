<template>
  <v-card
    class="mx-auto timeline"
    max-width="700">
    
    <v-card
      dark
      flat>

      <v-btn
        absolute
        bottom
        color="indigo"
        right
        fab
        @click="onAddPerson">
        <v-icon>add</v-icon>
      </v-btn>

      <v-card-title class="pa-1 indigo lighten-1">
        <h3 class="title font-weight-light text-xs-center grow">Задачи на сегодня</h3>
      </v-card-title>
      <v-img
        src="images/forest.jpg"
        gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)">
        
        <v-container fill-height>
          <v-layout align-center>
            <strong class="display-3 font-weight-regular mr-4">12</strong>
            <v-layout column justify-end>
              <div class="headline font-weight-light">Понедельник</div>
              <div class="text-uppercase font-weight-light">Август 2019</div>
            </v-layout>
          </v-layout>
        </v-container>
      </v-img>
    </v-card>

    <v-card-text class="py-0">
      <v-timeline
        align-top
        dense>
        <v-timeline-item v-for="n in items"
          color="indigo"
          small>

          <v-card>
            <v-card-title class="indigo lighten-1">
              <h3 class="white--text font-weight-light">{{ n.time }}</h3>
            </v-card-title>
            <v-container>
              <v-layout>
                <v-flex xs12 md10>
                  {{ n.text }}
                </v-flex>
                <v-flex
                  md2
                  hidden-sm-and-down
                  text-right
                >
                {{ n.status }}
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          caption:'ФОП Пупкин',
          text:'Встреча по поводу проекта 1108-2019-1. Тема: Разработка шаблона к заявке на монтаж объекта по адресу..',
          time:'09:10 - 11:00',
          status:'Выполнено'
      },
        {
          caption:'',
          text:'Кофе-брейк',
          time:'11:00 - 11:15',
          status:'Выполнено'
      },
        {
          caption:'договор  1108-2019-1',
          text:'Разработка плана монажа, составление сметы ',
          time:'11:15 - 17:00',
          status:'В работе'
      },
        {
          caption:'',
          text:'Устал, хочу домой',
          time:'17:00 - 18:00',
          status:'Назначено'
      }
    ]
    }
  },

  methods: {
    onAddPerson() {

    }
  }
}
</script>

<style>
  .timeline {
    border-radius: 3px;
    background-clip: border-box;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
</style>
