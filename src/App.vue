<template >
  <div >
  <v-app >
      <div>
    
        <div>
          <v-app-bar  id="appbar" color="#1E88E5" short elevation="5">
            <v-app-bar-nav-icon dark @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
            <v-toolbar-title id="toolbartitle">TO DO APP </v-toolbar-title>

            <v-spacer></v-spacer>

            
            <span id="span" >{{idNom}}</span>

            <!--Gestione accedi-->
            <v-dialog id="dialog" v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">

                <v-btn id="accedibottone" text v-if="idNom == ''"  v-bind="attrs" v-on="on">
                  <router-link class="router-link" to="/">
                    <span  id="spanAccedi">Accedi</span> 
                  </router-link>
                </v-btn>

                <v-btn id="besci" color="white" v-else dark @click="svuotaNome">
                  <router-link class="router-link"   to="/">
                   <span>Esci</span> 
                  </router-link>
                </v-btn>

              </template>
              <!--card login-->
              <v-card>
                <v-card-title>
                  <span class="text-h5">Inserisci Nome</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field id="tf1" v-model="idnome" label="Nome*" required></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>

                <v-card-actions>

                  <v-spacer></v-spacer>

                  <v-btn color="blue darken-1" text @click=" dialog = false">
                    Chiudi
                  </v-btn>

                  <router-link class="router-link"  :to="{name:'home' , params:{idNom}}">
                  <v-btn   color="blue darken-1" text id="bsalvanome" @click="salvaNome()">
                      Login
                    </v-btn>
                  </router-link>

                </v-card-actions>

              </v-card>

            </v-dialog>

          </v-app-bar>

        </div>

      
    </div>
    <div id="divcontenuto">

      
      <div id="spantext">
        <span >Benvenuto a To-Do App</span>
      </div>
      
      <div id="spantext">
        <span >Accedi per inserire task</span>
      </div>
    </div>


    <!--gestione tendina laterale-->
    
    <v-navigation-drawer id="navdrew"  v-model="drawer" absolute color="#E1F5FE" temporary
    app >
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <router-link :to="{name: 'home', params: {idNom}}">
            <v-list-item id="Bhome">
              <v-list-item-title>
                Home
              </v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/about">
            <v-list-item id="Bcompletati">
              <v-list-item-title>
                Task Completati
              </v-list-item-title>
            </v-list-item>
          </router-link>



        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    

  </v-app>


    <keep-alive>


      <router-view />
    </keep-alive>


  
</div>

</template>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
.router-link{
  text-decoration: none;
}
#divcontenuto{
  display:block;
  height: 800px;
  background: linear-gradient(to top ,#047df6 0%, #ffffff 50%);
}
#spantext {
  margin-top: 30px;
  font-size: 200%;
  margin-right: 1em;
  text-align: center;
  font-weight: bolder;
}
#appbar{
  display: block;
  animation:5;
  background: linear-gradient(to bottom ,#047df6 30%, #ffffff 98%);
}
#toolbartitle{
  color: #ffffff;
  font-weight: bolder;
}
#span{
  font-size:20px ;
  margin-right: 1em;
  color: #ffffff;
  font-weight: bolder;
}
#accedibottone{
  background: linear-gradient(to top ,#badcfd 0%, #ffffff 50%);
  
}


</style>



<script>

import $ from 'jquery'



export default {
  name: 'App',




  data: () => {

    return {
      pathname: 'http://localhost:8080/#/',
      pathname1: 'http://192.168.170.118:8080/#/',
      

      idnome: '',
      idNom: '',
      dialog: false,

      drawer: false,
      group: null,
      bars: [


        { class: 'primary', blue: true },
      ],



    }
  },
  mounted() {
    //Gestione pulsanti indietro e aggiorna browers
    window.addEventListener('popstate', (event) => {
      console.log(`location: ${document.location}, state: ${JSON.stringify(event.state)}`);
      if (location.href === this.pathname) {
        console.log('1')
        $('#divcontenuto').css('display', 'block');
      } else {
        console.log('2')
        $('#divcontenuto').css('display', 'none');
      }
    })


    //Gestione schermata principale
    if (location.href === this.pathname || location.href === this.pathname1) {
      console.log('3')
      $('#divcontenuto').css('display', 'block')
    } else {
      console.log('4')
      $('#divcontenuto').css('display', 'none')
    }


    $('#bsalvanome').click(function () {

$('#divcontenuto').css('display', 'none')

});


    $('#Bhome').click(function () {

      $('#divcontenuto').css('display', 'none')

    });

    $('#Bcompletati').click(function () {

      $('#divcontenuto').css('display', 'none')

    });

   


  },

  methods: {

    salvaNome() {
      if (this.idnome !== '') {
        this.idNom = this.idnome
        console.log(this.idNom)
        return           this.dialog = false,
          this.idnome = ''
      }
    },

    svuotaNome() {

       this.idNom = ''


    },

  },
  computed:{
    
  },

  watch: {
    group() {
      this.drawer = false
    },
  },

}

</script>

