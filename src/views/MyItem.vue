<template>
<div>
  <v-container fluid>
    <div class="tables-basic">
      <v-chip
          class="ma-2"
          color="pink"
          label
          text-color="white"
      >
        <v-icon left>
          mdi-label
        </v-icon>
        分类
      </v-chip>

      <v-chip
          class="ma-2"
          color="primary"
          label
      >
        <v-icon left>
          mdi-label
        </v-icon>
        标签
      </v-chip>

      <v-chip
          class="ma-2"
          color="cyan"
          label
          text-color="white"
      >
        <v-icon left>
          mdi-label
        </v-icon>
        位置
      </v-chip>

      <v-row class="ma-4">
        <v-col cols="12">
          <v-card class="employee-list mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>Employee List</p>
              <v-spacer></v-spacer>
              <v-text-field
                  v-model="employeeTable.search"
                  append-icon="mdi-magnify"
                  label="Search"
                  clearable
                  single-line
                  hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
                v-model="employeeTable.selected"
                :headers="employeeTable.headers"
                :items="employeeTable.employee"
                :search="employeeTable.search"
                item-key="name"
                show-select>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols=12>
          <v-card class="mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Material-UI Table</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on">
                    <v-icon color="textColor">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                      v-for="(item, i) in menu"
                      :key="i"
                      @click="() => {}">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left pa-6">NAME</th>
                  <th class="text-left">EMAIL</th>
                  <th class="text-left">PRODUCT</th>
                  <th class="text-left">PRICE</th>
                  <th class="text-left">DATE</th>
                  <th class="text-left">CITY</th>
                  <th class="text-left">STATUS</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in materialUITable" :key="item.name">
                  <td class="pa-6">{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.product }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.city }}</td>
                  <td v-if="item.status === 'Sent'">
                    <v-chip
                        link
                        color="success"
                        class="ma-2 ml-0"
                    >
                      Sent
                    </v-chip>
                  </td>
                  <td v-else-if="item.status === 'Pending'">
                    <v-chip
                        link
                        color="warning"
                        class="ma-2 ml-0"
                    >
                      Pending
                    </v-chip>
                  </td>
                  <td v-else-if="item.status === 'Declined'">
                    <v-chip
                        link
                        color="secondary"
                        class="ma-2 ml-0"
                    >
                      Declined
                    </v-chip>
                  </td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</div>
</template>

<script>
export default {
  data: () => ({
    employeeTable: {
      selected: [],
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Company', value: 'company' },
        { text: 'City', value: 'city' },
        { text: 'State', value: 'state' },
      ],
      employee: [
        {
          name: 'Joe James',
          company: 'Example Inc.',
          city: 'Yonkers',
          state: 'NY',
          select: false
        },
        {
          name: 'John Walsh',
          company: 'Example Inc.',
          city: 'Hartford',
          state: 'CT',
          select: false
        },
        {
          name: 'Bob Herm',
          company: 'Example Inc.',
          city: 'Tampa',
          state: 'FL',
          select: false

        },
        {
          name: 'James Houston',
          company: 'Example Inc.',
          city: 'Dallas',
          state: 'TX',
          select: false

        },
        {
          name: 'Prabhakar Linwood',
          company: 'Example Inc.',
          city: 'Hartford',
          state: 'CT',
          select: false
        },
        {
          name: 'Jelly bean',
          company: 'Example Inc.',
          city: 'Yonkers',
          state: 'NY',
          select: false
        },
        {
          name: 'Kaui Ignace',
          company: 'Example Inc.',
          city: 'Hartford',
          state: 'CT',
          select: false
        },
        {
          name: 'Esperanza Susanne',
          company: 'Example Inc.',
          city: 'Tampa',
          state: 'FL',
          select: false
        },
        {
          name: 'Christian Birgitte',
          company: 'Example Inc.',
          city: 'Hartford',
          state: 'CT',
          select: false
        },
        {
          name: 'Meral Elias',
          company: 'Example Inc.',
          city: 'Yonkers',
          state: 'NY',
          select: false
        },
        {
          name: 'Deep Pau',
          company: 'Example Inc.',
          city: 'Dallas',
          state: 'TX',
          select: false
        },
        {
          name: 'Sebastiana Hani',
          company: 'Example Inc.',
          city: 'Yonkers',
          state: 'NY',
          select: false
        },
        {
          name: 'Marciano Oihana',
          company: 'Example Inc.',
          city: 'Yonkers',
          state: 'TX',
          select: false
        },
        {
          name: 'Brigid Ankur',
          company: 'Example Inc.',
          city: 'Dallas',
          state: 'NY',
          select: false
        },
        {
          name: 'Anna Siranush',
          company: 'Example Inc.',
          city: 'Hartford',
          state: 'CT',
          select: false
        },
        {
          name: 'Avram Sylva',
          company: 'Example Inc.',
          city: 'Tampa',
          state: 'FL',
          select: false
        },
        {
          name: 'Serafima Babatunde',
          company: 'Example Inc.',
          city: 'Tampa',
          state: 'FL',
          select: false
        },
        {
          name: 'Gaston Festus',
          company: 'Example Inc.',
          city: 'Yonkers',
          state: 'NY',
          select: false
        },
      ],
    },
    materialUITable: [
      {
        id: 0,
        name: 'Mark Otto',
        email: 'ottoto@wxample.com',
        product: 'ON the Road',
        price: '$25 224.2',
        date: '11 May 2017',
        city: 'Otsego',
        status: 'Sent',
      },
      {
        id: 1,
        name: 'Jacob Thornton',
        email: 'thornton@wxample.com',
        product: 'HP Core i7',
        price: '$1 254.2',
        date: '4 Jun 2017',
        city: 'Fivepointville',
        status: 'Sent',
      },
      {
        id: 2,
        name: 'Larry the Bird',
        email: 'bird@wxample.com',
        product: 'Air Pro',
        price: '$1 570.0',
        date: '27 Aug 2017',
        city: 'Leadville North',
        status: 'Pending',
      },
      {
        id: 3,
        name: 'Joseph May',
        email: 'josephmay@wxample.com',
        product: 'Version Control',
        price: '$5 224.5',
        date: '19 Feb 2018',
        city: 'Seaforth',
        status: 'Declined',
      },
      {
        id: 4,
        name: 'Peter Horadnia',
        email: 'horadnia@wxample.com',
        product: 'Let\'s Dance',
        price: '$43 594.7',
        date: '1 Mar 2018',
        city: 'Hanoverton',
        status: 'Sent',
      },
    ],
    menu: [
      'Edit',
      'Copy',
      'Delete',
      'Print'
    ]
}),

}

</script>

<style scoped>

</style>
