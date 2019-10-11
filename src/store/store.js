import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        options: { correctAnsers: 0, incorrectAnswers: 0},
        questions: [],
        duration: 0
    },
    getters: {
        getQuestions(state) {
            return state.questions
        },
        getDuration(state){
            return state.duration
        }
    },
    mutations: {
        translateData: function (state, questions) {
                state.questions = questions;
        
        },  
        translateDuration: function (state, duration) {
            state.duration = duration;
    
    },       
},
    actions: {
        getQuestions(context, payload) { 
            return new Promise(function (resolve, reject) {
               Vue.http.get("http://localhost:3000/api/questionset/single/" + payload)
                  .then(function (data) {
                     console.log(data.body.quiz);
                     context.commit('translateData', data.body.quiz)
                     context.commit('translateDuration', data.body.duration)
                     resolve(true) }) 
                  .catch(function (data) { 
                     console.log('Error:', data) 
                     reject(false) 
                  }) 
             })
        }
    }
})
// htmlDecode = function (input) {
//     var e = document.createElement('div');
//     e.innerHTML = input;
//     return e.childNodes[0].nodeValue;
// },      
// shuffle = function (a) {
//     for (let i = a.length; i; i--) {
//         let j = Math.floor(Math.random() * i);
//         [a[i - 1], a[j]] = [a[j], a[i - 1]];
//     }
//     return a;
// }