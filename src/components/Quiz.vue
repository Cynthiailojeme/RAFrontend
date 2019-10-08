<template>
<div>
    <div>

        <div class="top">
            <div class="left">
                <h1>Take Assessment</h1>
                <span class="instruct" v-show="quizIndex != questionset.quiz.length">Click the finish button below to submit assessment, you can go back at any time to edit your <br>answers.</span>
                <span class="instruct" v-show="quizIndex === questionset.quiz.length">Thank you!</span>
            </div>
            <div class="right timer" style="padding-right: 100px">Timer: 
                <h2 class="count"> {{countdown}} </h2>
            </div> 
        </div>

        <div class="mid" v-for="(quiz, index) in questionset.quiz" :key="index" v-show="index === quizIndex">
            <center>
                <span class="numbering" :id="quizIndex">Question {{ quizIndex+1 }}</span>
                <br>
                <br>
                <p class="title" :id="quiz._id" ref="id">{{ quiz.question }}</p>
            </center>
            <br>

                <div class="quizzes">
                    <ul>
                        <li v-for="(option, index) in quiz.options" :key="index">
                            <label for="muhRadio1">
                                <input type="radio" name="muhRadio" v-bind:value="option" :id="index"/>
                                <span>{{ option }}</span>
                            </label>
                        </li>
                        <br>
                    </ul>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <div class="buttonholder">
                            <button type="submit" v-if="quizIndex > 0" v-on:click="prev">Previous</button>
                        </div>
                    </div>

                    <div class="form-group col-md-6">
                        <div class="buttonholder">
                            <button type="submit" v-on:click="next">Next</button>
                        </div>
                    </div>
            </div>
        </div>

        <div v-show="quizIndex === questionset.quiz.length">
            <center>
                <button type="submit" @click="getScore; alert">Finish</button>
            </center>
        </div> 
    </div>
</div>
</template>

<script>
export default {
    name:'Questions',
    props: ['id'],
    data() {
      return {
        questionset: {},
        quiz: {},
        question: "",
        quizIndex: 0,
        name: "",
        answers: [],
        indexArray: [],
        duration: 0,
        countdown: 0,   
        timerInterval:0, 
        mins: 0,
        secs: 0
       }
     },
    mounted() {
        let id = this.$route.params.id
        this.$http.get("http://localhost:3000/api/questionset/single/" + id)
        .then(response => {
        console.log(response.body)
        this.questionset = response.body
        this.duration = response.body.duration
        this.mins = this.duration
        this.secs = this.mins * 60
        this.timerInterval = setInterval(this.doCountDown,1000)
       
  })
},
    computed: {
    
},

    methods: {
    // Go to next question
    next: function() {
        var userAns = {
            ans: $('input:checked').val(),
            question_id: this.$refs.id[this.quizIndex].id
        }
        var inputs = document.getElementsByClassName("numbering");
        var ind = '';
        var arrr = this.indexArray;
        var ansArr = this.answers;

        for (var i = 0; i < inputs.length; i++) {
            ind = inputs[i].id;
        }
        function check(num) {
            return num == ind
        }
        if(arrr.length == 0) {
            this.answers.push(userAns);
        }
        else {
                arrr.map(a => {
                if(ind == a) {
                    // window.alert("Question already answered");
                    var cond = arrr.findIndex(check)
                    for(var i = 0; i <= ansArr.length; i++) {
                        if(i == cond) {
                            return this.answers[i] = userAns;
                        }
                    }
                }
            })
           if(this.answers.includes(userAns)) {
           }
           else {
               this.answers.push(userAns)
           }
        }
        this.indexArray.push(ind)

//        callBaackend(arr)
//          add quiz.question._id

        console.log(this.answers)
       
      this.quizIndex++;
    },
    // Go to previous question
    prev: function() {
      this.quizIndex--;
    },
    launch(){

    },

    getScore() {
        console.log(this.answers, this.questionset.nameOfSet)
        const total = {
           answers: this.answers,
            name: this.questionset.nameOfSet
        }
        this.$http.post('http://localhost:3000/api/applicantans/send', total)
      	.then(response =>{
	      console.log(response)
          total = response.data  
    })
}, 

    alert() {
         this.$swal('End of Assessment', 'Your assessment has been submitted successfully', 'OK');
    },
    doCountDown() {
        var outMins, outSecs
        --this.secs;
        this.duration = this.secs/60;
        if (this.secs <= 0) {
            var outMins = outSecs = 0;
            clearInterval(this.timerInterval); 
            outMins = parseInt(this.secs/60, 10);
            outSecs = parseInt(this.secs % 60, 10);

            outMins = outMins < 10 ? "0" + outMins : outMins;
            outSecs = outSecs < 10 ? "0" + outSecs : outSecs;

        this.countdown = outMins+ ":" + outSecs;
            this.getScore()
            return;
        }
        outMins = parseInt(this.secs/60, 10);
        outSecs = parseInt(this.secs % 60, 10);

        outMins = outMins < 10 ? "0" + outMins : outMins;
        outSecs = outSecs < 10 ? "0" + outSecs : outSecs;

        this.countdown = outMins+ ":" + outSecs;
    },   
},
}
</script>


<style scoped>
.top {
    display: flex;
    justify-content: space-between;
}
.left {
    float: right;
}
.right {
    float: right;
}
h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
}
.instruct {
    font-family: Lato;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    color: #2B3C4E;
}
h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: left;
    margin-right: 100px;
    line-height: 52px;
    color: #4F4F4F;
}
.mid {
    width: 100%;
    margin-top: 80px;
}
.numbering {
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    color: #2B3C4E;
}
.title {
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #2B3C4E;
}
.quizzes {
    text-align: left;
    width: 100%;
    padding-left: 350px;
    padding-right: 150px
}
#id {
    font-size: 30px;
}
label {
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
}
label span:hover {
    height: 50px;
    background: #31D283;
    background-size: 50px;
    transition-delay: 250ms;
}
ul {
    list-style: none;
}
input[type=radio] {
    width: 8px;
    height: 8px;
    border: 1px solid #2B3C4E;
    -webkit-appearance: none;
    margin-right: 20px;
}

input[type=radio]:checked {
  background-color: #2B3C4E;
  background-size: 8px 8px;
}

input[type=radio]:focus {
  outline-color: transparent;
}
.buttonholder {
    text-align: center;
    padding: 50px;
}
.buttonholder2 {
    text-align: center;
    padding: 20px;
}
button {
    margin-left: auto;
    margin-right: auto;
    width: 125px;
    height: 41px;
    background: #2B3C4E;
    border-radius: 4px;
    border: none;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}
.button2 {
    background: #CECECE;
    border-radius: 4px;
    width: 205px;
    height: 41px;
}
.gif {
    width: 100%;
    margin-top: 80px;
}
.confetti {
    padding-bottom: 20px;
    width: 148px;
    height: 148px;
}
.gif button {
    margin-top: 30px;
    width: 205px;
    height: 41px;
    background: #31D283;
    border-radius: 4px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
}
.links {
    color: #FFFFFF;
}
.gif p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16.7273px;
    line-height: 20px;
    text-align: center;
    color: #4F4F4F;
}
.timer{
    width: 37px;
    height: 17px;
    padding-bottom: 50px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #4F4F4F;
}
.count{
    position: absolute;
    width: 56px;
    height: 58px;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    text-align: center;
    color: #2B3C4E;
}
</style>