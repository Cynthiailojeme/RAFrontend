<template>
    <div>
        <div class="top">
            <div class="left">
                <h1>Take Assessment</h1>
                <p class="limited">Click the button below to start assessment, you have limited time for this test</p>
            </div>
            <!-- <div class="right">
                <h2>Timer</h2>
            </div> -->
        </div>

        <div class="hourglass">
            <center>
                <img src="../assets/hourglass.svg" alt="timer" class="time">
                <p v-if="days!==0">We have {{days}} days left until the next assessment
                <br>Watch this space</p>
                <p v-if="showing===true">Date of Assessment Passed</p>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Take Assessment
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-if="days===0">
                        <a class="dropdown-item" href="#" v-for="(questionset, index) in questionsets" :key="index">
                            <router-link :to="{name:'Questions', params:{id: questionset._id}}">
                                {{ questionset.nameOfSet }}
                            </router-link></a>
                    </div>
                </div>
            </center>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'TakeAssessment',
  props: ['id'],
  data() {
      return {
        questionsets: [],
        questionset: {},
        dateOfAssess: null,
        index: null,
        days: 0,
        showing: false
       }
     },
    components: {},
    mounted() {
        const url = "http://localhost:3000/api/questionset/all"
        this.$http.get(url)
        .then(response => {
        console.log(response.body)
        this.questionsets = response.body
        console.log(response.body[response.body.length -1])
        this.dateOfAsess = response.body[response.body.length -1].dateOfAsess
        var now = moment(new Date()); //todays date
        var end = moment(this.dateOfAsess); // another date
        var duration = moment.duration(end.diff(now));
        var show = now.isAfter(end);
    
        if(this.show){
            console.log("date passed")
            this.showing = true
        }
        else{
            console.log("date not passed")
             this.days = duration.days();
             console.log(this.days)
        console.log(this.dateOfAsess)
        }
        
    })
    },
computed: {},
methods: {}
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
.limited{
    width: 510px;
    font-family: Lato;
    font-style: italic;
    font-weight: bold;
    font-size: 15px;
    color: #2B3C4E;
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
.top > p {
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
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
.hourglass {
    width: 100%;
    margin-top: 100px;
}
.time {
    padding-bottom: 20px;
}
.hourglass > p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16.7273px;
    text-align: center;
    color: #4F4F4F;
}
button {
    width: 50%;
    max-width: 205px;
    height: 41px;
    background: #B1B1B1;
    border-radius: 4px;
    border: none;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.dropdown-menu {
    width: 205px;
}
a {
    color: #2B3C4E;
    text-decoration: none;
}
a:first-letter {
    text-transform:capitalize;
    color: #2B3C4E;
}
</style>