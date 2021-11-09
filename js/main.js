Vue.config.devtools = true;

/* Funzione-evento che parte alla lettura del contenuto del DOM della pagina */
/* Viene utilizzata per racchiudere tutte le variabili non rendendole globali */
window.addEventListener("DOMContentLoaded", function () {
    /* const vueApp =  */new Vue({
        el: "#root",
        data: {
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            emailsList: [],
        },
        methods: {
            onApiCall() {
                for (let i = 0; i < 10; i++) {
                    axios.get(this.url).then((ajaxRensponse) => {
                        const rispostaServer = ajaxRensponse.data;
                        const newEmail = rispostaServer.response;
    
                        this.emailsList.push(newEmail);                  
                    });
                }
                console.log(this.emailsList);
    
                console.log(this.emailsList[3]);
            },
            
        },
        mounted() {
            
        }
    });
});
