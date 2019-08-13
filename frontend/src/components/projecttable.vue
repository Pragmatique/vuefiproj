<template>
  <v-card >
    <v-card-title>
      Проекты
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Поиск"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table color="indigo"
      :headers="headers"
      :items="projects"
      :search="search"
      :pagination.sync="pagination"
    >
				<template slot="items" slot-scope="props">
					<td>{{ props.item.numbersD }}</td>
					<td class="text-xs-left">{{ props.item.customer }}</td>
					<td class="text-xs-left">{{ props.item.egrpou }}</td>
					<td class="text-xs-left">{{ props.item.status }}</td>
                </template>
    </v-data-table>
  </v-card>

</template>


<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Номер',
            align: 'left',
            value: 'numbersD',
          },
          { text: 'Заказчик', value: 'customer', sortable: false },
          { text: 'ЕГРПОУ', value: 'egrpou'},
          { text: 'Статус', value: 'status', sortable: false  }
        ],
        projects: [
          {
            numbersD: '11-08-19-45',
            egrpou: '1234567890',
            customer: 'ФОП Пупкин',
            status: 'Разработка'
          },
          {
            numbersD: '11-08-19-46',
            egrpou: '0987456321',
            customer: 'ФОП Жлобкин',
            status: 'Монтаж'
          },
          {
            numbersD: '11-08-19-47',
            egrpou: '0987116321',
            customer: 'ФОП Щедрищев',
            status: 'Договор'
          },
          {
            numbersD: '11-08-19-48',
            egrpou: '0982226321',
            customer: 'ФОП Худой',
            status: 'Оплата'
          },
        ],
      }
    },
  }
</script>