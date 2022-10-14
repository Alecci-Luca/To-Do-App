<template>
  <div >
    <v-app >
      <div>
        <label id="label1">Task Da Confermare: {{this.$route.params.idTask}}</label> 
        <v-btn v-if="!alert" @click="aggiungiTask ">Aggiungi Task Confermato</v-btn>
      </div>




      <v-card elevation="0"
        id="card1">
        <v-card-title>
          Task Completati
          <v-spacer></v-spacer>

          <v-select v-model="select" id="select1" :items="element" label="Cerca task per Nome" solo></v-select>
        </v-card-title>
        <v-data-table :headers="headers" :items="items" :search="select">
        </v-data-table>
      </v-card>









    </v-app>
  </div>

</template>

<style>

#label1{
  margin-left: 20%;
  margin-right: 25px;
}
#card1{
  margin-top: 50px;
  height: auto;
}
#table1 {
  border: 1px solid;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40%;
  width: 1000px;
  margin-top: 7em;

}

#tf1 {
  margin-top: -5px;
  margin-right: 15px;

}

#select1 {
  position: relative;
  max-height: 16px;
  padding: 12px 14px;
  
  margin-left: -50px;
  border-radius: 10px;


}

#row1 {
  margin-top: 50px;
}
</style>

<script>

export default {
  name: 'AboutView',




  data() {
    return {
      search: '',

      select: '',

      alert: false,
      sear: null,
      confe: '',
      idtask: '',
      idnome: '',
      idNom: 'Luca',

      element: [
        '',
        'Luca',
        'Giovanni',
      ],

      headers: [
        {
          text: 'Task',
          align: 'start',
          sortable: false,
          value: 'task',
        },
        {
          text: 'Nome',
          value: 'nome',
          aling: 'start',
          sortable: false,
        },
      ],

      items: [
        {
          task: 'ciao',
          nome: 'Luca',
        },
      ],
      filter: {},
      index: 0,
      editedIndex: -1,
      editedItem: {
        task: '',
        nome: '',
      },



    }
  },
  mounted(){

  },




  methods: {


    aggiungiTask() {
      console.log(this.$route.params.idTask)
      console.log(this.idtask)
      if (this.$route.params.idTask === ':idTask' || this.$route.params.idTask === '' || this.$route.params.idTask === undefined) {
        alert("Il task è uguale a :id o nullo. Tornare alla pagina Home e selezionare un Task con Conferma");
      } else {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push({
            task: this.$route.params.idTask,
            nome: this.$route.params.idNome,
          })
        }
        this.$route.params.idTask = ''
       

      }

    }

  },
 
  




}




</script>