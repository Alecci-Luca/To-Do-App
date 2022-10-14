<template >

  
  <v-app >
    
    <v-spacer></v-spacer>
    <div id="divprinc">

      <v-row justify="center">

        <div id="divtxtbtn">
          <v-row>

            <v-text-field id="tf1" v-model="task" class="text" placeholder="Digita Task"
            :rules="[rules.counter]" counter></v-text-field>
            <v-btn id="bt1" @click="aggiungitask"> Aggiungi Task</v-btn>
          </v-row>
          </div>
      </v-row>
      <div>

      </div>


      <div>

        <v-simple-table id="table1">
          <template v-slot:default>
            <thead>
              <tr>
                <th style="border: 1px solid" scope="col" class="text-left">
                  Task
                </th>
                <th style="border: 1px solid" scope="col" class="text-left">
                  Name
                </th>
                <th style="border: 1px solid" scope="col">Modifiva</th>
                <th style="border: 1px solid" scope="col">Elimina</th>
                <th style="border: 1px solid" scope="col">conferma</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(task, index) in tasks " :key="index">

                <td style="border: 1px solid">{{ task.task }}</td>
                <td style="border: 1px solid">{{ task.name}}</td>
                <td style="border: 1px solid">

                  <v-btn @click="modificatask(index)">Modifica</v-btn>

                </td>
                <td style="border: 1px solid">

                  <v-btn @click="eliminatask(index)">

                    Elimina
                  </v-btn>

                </td>
                <td style="border: 1px solid">
                  <router-link :to="{name:'about' , params: { idTask, idNome}}">
                    <v-btn @click="confermatask(index)">conferma</v-btn>
                  </router-link>
                </td>
              </tr>
            </tbody>

          </template>
        </v-simple-table>


      </div>


    </div>
    </v-app>







</template>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
#divprinc{
  display: block;
  margin-top: 40px;
  background: linear-gradient(to top ,#047df6 0%, #ffffff 50%);
  height: 730px ;
}
#divtxtbtn{
  
  margin-top: 35px;
}

#table1 {
  border: 1px solid;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  margin-top: 7em;

}
</style>

<script>
import $ from 'jquery'


export default {
  name: 'HomeView',
 

  data() {


    return {
      pathname: 'http://localhost:8080/#/',
      pathname1: 'http://192.168.170.118:8080/#/',

      task: '',
      edittask: null,
      idTask: '',
      idnome: '',
      idNome: '',

      dialog: false,

      rules: {

        counter: value => value.length <= 20 || 'Max 20 characters',
      },

      tasks: [

      ]



    }


  },
  mounted() {

    $('#divcontenuto').css('display', 'none')
    
      
    $('#besci').click(function () {

$('#divcontenuto').css('display', 'block')

});



   
  },

  methods: {
  

    aggiungitask() {

      if( this.$route.params.idNom === undefined || this.$route.params.idNom  === ''){
        alert('devi accedere per inserire un task')
      }

      if (this.task.length === 0) return;

      if (this.edittask === null) {
        this.tasks.push({
          task: this.task,
          name: this.$route.params.idNom,
          
        })
        


      } else {
        this.tasks[this.edittask].task = this.task;
        this.edittask = null;
        
      }
      this.task = '';
    },



    eliminatask(index) {
      this.tasks.splice(index, 1);


    },

    modificatask(index) {
      this.task = this.tasks[index].task;
      this.edittask = index;

    },
    confermatask(index) {
      this.idNome = this.tasks[index].name
      this.idTask = this.tasks[index].task
      return this.idNome, this.idTask




    },
    
  },
  watch: {
    group() {
      this.drawer = false
    },
  },

}


</script>
