<template>
    <div>
        <div class="top">
            <div class="left">
                <h1>Take Assessment</h1>
                <p class="instruct" v-for="(question, index) in questions" :key="question._id" v-show="index === questionIndex">Click the finish button below to submit assessment, you can go back at any time to edit your <br>answers.</p>
                <p class="instruct" v-show="questionIndex === questions.length">Thank you!</p>
            </div>
            <div class="right">
                <h2>Timer</h2>
            </div>
        </div>

        <div class="mid" v-for="(question, index) in questions" :key="question._id" v-show="index === questionIndex">
            <center>
                <span class="numbering">Question {{ questionIndex+1 }}</span>
                <br>
                <p class="title">{{ question.quiz }}</p>
            </center>
            <br>

                <div class="quizzes">
                    <ul>
                        <li><label for="muhRadio1"><input type="radio" name="muhRadio" value=""/><span>A. {{ question.options[0] }}</span></label></li>
                        <br>
                        <li><label for="muhRadio2"><input type="radio" name="muhRadio" value=""/><span>B. {{ question.options[1] }}</span></label></li>
                        <br>
                        <li><label for="muhRadio3"><input type="radio" name="muhRadio" value=""/><span>C. {{ question.options[2] }}</span></label></li>
                        <br>
                        <li><label for="muhRadio4"><input type="radio" name="muhRadio" value=""/><span>D. {{ question.options[3] }}</span></label></li>
                    </ul>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <div class="buttonholder">
                            <button type="submit" v-if="questionIndex > 0" v-on:click="prev">Previous</button>
                        </div>
                    </div>

                    <div class="form-group col-md-6">
                        <div class="buttonholder">
                            <button type="submit" v-on:click="next">Next</button>
                        </div>
                    </div>
            </div>
        </div>

        <div class="gif" v-show="questionIndex === questions.length">
            <center>
                <img src="../assets/confetti.svg" class="confetti">
                <p>We have received your assessment test, we will get back to you soon.<br>Best of luck</p>
                <button><router-link :to="{name: 'Applicant-dashboard'}" class="links">Home</router-link></button>
            </center>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Quiz',
  data() {
      return {
        questions: [],
        questionIndex: 0,
       }
     },
    mounted() {
    const url = "http://localhost:3000/api/question/"
    this.$http.get(url + "all")
    .then(response =>  {
    console.log(response.body)
    this.questions= response.body.questions
    this.questions = this.questions.sort(function (a, b) {
      if (a.timestamp < b.timestamp) {
        return -1;
      }
      if (a.timestamp > b.timestamp) {
        return +1;
      }
      return 0;
    })
  })
},
computed: {},
methods: {
    // Go to next question
    next: function() {
      this.questionIndex++;
    },
    // Go to previous question
    prev: function() {
      this.questionIndex--;
    },
}
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
</style>