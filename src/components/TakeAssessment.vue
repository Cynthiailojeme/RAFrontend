<template>
    <div>
        <div class="top">
            <div class="left">
                <h1>Take Assessment</h1>
                <p>Click the button below to start assessment, you have limited time for this test</p>
            </div>
            <!-- <div class="right">
                <h2>Timer</h2>
            </div> -->
        </div>

        <div class="hourglass">
            <center>
                <img src="../assets/hourglass.svg" alt="timer" class="time">
                <p>We have 4 days left until the next assessment
                <br>Watch this space</p>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Take Assessment
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#" v-for="questionset in questionsets" :key="questionset._id">
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
export default {
  name: 'TakeAssessment',
  props: ['id'],
  data() {
      return {
        questionsets: [],
        questionset: {},
       }
     },
    components: {},
    mounted() {
        const url = "http://localhost:3000/api/questionset/all"
        this.$http.get(url)
        .then(response => {
        console.log(response.body)
        this.questionsets= response.body
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