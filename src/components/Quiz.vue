<template>
  <div>
    <div class="top">
      <div class="left">
        <h1>Take Assessment</h1>
        <span class="instruct" v-if="showquestions===true" v-show="disallowassessment===false">
          Click the submit button to submit assessment, you can go back at any time to edit your
          <br />answers.
        </span>
        <span
          class="instruct"
          v-if="showquestions===false"
          v-show="disallowassessment===false"
        >Thank you!</span>
        <span class="warning" v-if="disallowassessment===true">
          Sorry, this assessment can only be taken once
          <br />All the best
        </span>
      </div>

      <div class="right" v-if="showquestions===false" v-show="disallowassessment===false">
        Timer:
        <h2 class="count">{{countdown}}</h2>
      </div>
    </div>

    <div v-if="takenassessment==false">
      <div v-if="showquestions===true">
        <div
          class="mid"
          v-for="(quiz, index) in questionset.quiz"
          :key="index"
          v-show="index === quizIndex"
        >
          <center>
            <span class="numbering" :id="quizIndex">Question {{ quizIndex+1 }}</span>
            <br />
            <br />
            <p class="title" :id="quiz._id" ref="id">{{ quiz.question }}</p>
          </center>
          <br />

          <div class="quizzes">
            <ul>
              <li v-for="(option, index) in quiz.options" :key="index">
                <label for="muhRadio1">
                  <input type="radio" name="muhRadio" v-bind:value="option" :id="index" />
                  <span class="option">{{ option }}</span>
                </label>
              </li>
              <br />
            </ul>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <div class="buttonholder">
                <button type="submit" v-if="quizIndex > 0" v-on:click="prev">Previous</button>
              </div>
            </div>

            <div class="form-group col-md-6">
              <div class="buttonholder" v-if="quizIndex != (questionset.quiz.length-1)">
                <button type="submit" v-on:click="next">Next</button>
              </div>

              <div class="buttonholder" v-if="quizIndex === (questionset.quiz.length-1)">
                <button type="submit" @click.prevent="getScore">Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div class="gif" v-if="submitted===true">
          <center>
            <img src="../assets/confetti.svg" class="confetti" />
            <p>
              We have received your assessment test, we will get back to you soon.
              <br />Best of luck
            </p>
            <button>
              <router-link :to="{name: 'applicant-dashboard'}" class="links">Home</router-link>
            </button>
          </center>
          <div class="form-group col-md-6">
            <div class="buttonholder" v-if="quizIndex != (questionset.quiz.length-1)">
              <button type="submit" v-on:click="next">Next</button>
            </div>

            <div class="buttonholder" v-if="quizIndex === (questionset.quiz.length-1)">
              <button type="submit" @click.prevent="getScore">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="gif" v-if="submitted===true">
      <center>
        <img src="../assets/confetti.svg" class="confetti" />
        <p>
          We have received your assessment test, we will get back to you soon.
          <br />Best of luck
        </p>
        <button>
          <router-link :to="{name: 'applicant-dashboard'}" class="links">Home</router-link>
        </button>
      </center>
    </div>
  </div>
</template>

<script>
import Countdown from "vuejs-countdown";
export default {
  name: "Questions",
  props: ["id"],
  data() {
    return {
      questionset: {},
      quiz: {},
      question: "",
      quizIndex: 0,
      setId: "",
      answers: [],
      token: "",
      submitted: false,
      showquestions: true,
      takenassessment: false,
      duration: 0,
      countdown: 0,
      timerInterval: 0,
      mins: 0,
      secs: 0,
      disallowassessment: false,
      indexArray: []
    };
  },
  mounted() {
    let id = this.$route.params.id;
    //this.takenassessment = takenassessment
    this.checkAssessment();
    console.log("on load localStorage" + this.takenassessment);
    let headers = {
      "x-access-token": localStorage.getItem("token")
    };
    this.$http
      .get("http://localhost:3000/api/questionset/single/" + id, { headers })
      .then(response => {
        console.log("Single question");
        console.log(response.body);
        this.questionset = response.body;
        this.duration = response.body.duration;
        this.mins = this.duration;
        this.secs = this.mins * 60;
        this.timerInterval = setInterval(this.doCountDown, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {},
  components: { Countdown },
  methods: {
    checkAssessment() {
      let headers = {
        "x-access-token": localStorage.getItem("token")
      };
      this.$http
        .get("http://localhost:3000/api/applicantAns/takenassessment", {
          headers
        })
        .then(response => {
          console.log("Accessment Status");
          this.takenassessment = response.body.status;
          this.disallowassessment = true;
        })
        .catch(err => {
          this.takenassessment = this.takenassessment;
          console.log(err);
        });
    },
    // Go to next question
    next: function() {
      var userAns = {
        ans: $("input:checked").val(),
        question_id: this.$refs.id[this.quizIndex].id
      };
      var inputs = document.getElementsByClassName("numbering");
      var ind = "";
      var arrr = this.indexArray;
      var ansArr = this.answers;
      for (var i = 0; i < inputs.length; i++) {
        ind = inputs[i].id;
      }
      function check(num) {
        return num == ind;
      }
      if (arrr.length == 0) {
        this.answers.push(userAns);
      } else {
        arrr.map(a => {
          if (ind == a) {
            // window.alert("Question already answered");
            var cond = arrr.findIndex(check);
            for (var i = 0; i <= ansArr.length; i++) {
              if (i == cond) {
                return (this.answers[i] = userAns);
              }
            }
          }
        });
        if (this.answers.includes(userAns)) {
        } else {
          this.answers.push(userAns);
        }
      }
      this.indexArray.push(ind);
      // callBaackend(arr)
      // add quiz.question._id
      console.log(this.answers);
      this.quizIndex++;
    },
    // Go to previous question
    prev: function() {
      this.quizIndex--;
    },
    getScore() {
      console.log(this.answers, this.questionset._id);
      console.log(localStorage.getItem("token"));
      let total = {
        token: localStorage.getItem("token"),
        answers: this.answers,
        setId: this.questionset._id,
        takenassessment: true
      };
      this.$http
        .post("http://localhost:3000/api/applicantans/send", total)
        .then(response => {
          this.submitted = true;
          this.showquestions = false;
          // this.takenassessment("takenassessment", true)
          // this.takenassessment = localStorage.getItem("takenassessment")
          // console.log("on submit" + this.takenassessment)
          console.log(response);
          total = response.data;
        });
    },
    doCountDown() {
      var outMins, outSecs;
      --this.secs;
      this.duration = this.secs / 60;
      if (this.secs <= 0) {
        var outMins = (outSecs = 0);
        clearInterval(this.timerInterval);
        outMins = parseInt(this.secs / 60, 10);
        outSecs = parseInt(this.secs % 60, 10);
        outMins = outMins < 10 ? "0" + outMins : outMins;
        outSecs = outSecs < 10 ? "0" + outSecs : outSecs;
        this.countdown = outMins + ":" + outSecs;
        this.getScore();
        return;
      }
      outMins = parseInt(this.secs / 60, 10);
      outSecs = parseInt(this.secs % 60, 10);
      outMins = outMins < 10 ? "0" + outMins : outMins;
      outSecs = outSecs < 10 ? "0" + outSecs : outSecs;
      this.countdown = outMins + ":" + outSecs;
    }
  }
};
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
  padding-right: 100px;
}
h1 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.instruct {
  font-family: Lato;
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
  color: #2b3c4e;
}
.warning {
  font-family: Lato;
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
  color: red;
}
h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  margin-right: 100px;
  line-height: 52px;
  color: #4f4f4f;
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
  color: #2b3c4e;
}
.title {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
}
.quizzes {
  text-align: left;
  max-width: 500px;
  padding-left: 150px;
  padding-right: 150px;
  margin-left: auto;
  margin-right: auto;
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
  color: #2b3c4e;
}
.option:hover {
  height: 50px;
  background: #31d283;
  background-size: 50px;
  transition-delay: 250ms;
}
ul {
  list-style: none;
}
input[type="radio"] {
  width: 8px;
  height: 8px;
  border: 1px solid #2b3c4e;
  -webkit-appearance: none;
  margin-right: 20px;
}
input[type="radio"]:checked {
  background-color: #2b3c4e;
  background-size: 8px 8px;
}
input[type="radio"]:focus {
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
  background: #2b3c4e;
  border-radius: 4px;
  border: none;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.button2 {
  background: #cecece;
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
  background: #31d283;
  border-radius: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
}
.links {
  color: #ffffff;
}
.gif p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16.7273px;
  line-height: 20px;
  text-align: center;
  color: #4f4f4f;
}
.timer {
  width: 37px;
  height: 17px;
  padding-bottom: 50px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #4f4f4f;
}
.count {
  position: absolute;
  width: 56px;
  height: 58px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  text-align: center;
  color: #2b3c4e;
}
</style>