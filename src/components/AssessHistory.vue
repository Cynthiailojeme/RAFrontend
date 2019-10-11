<template>
<div>
    <h1 class="assessment-history">Assessment History</h1>
    <div class="table-box">
        <table class="table table-borderless">
            <thead class="table-head">
                <tr class="head-row">
                <th scope="col">Batch</th>
                <th scope="col">Date Composed</th>
                <th scope="col">No of Questions</th>
                <th scope="col">Date of Assessment</th>
                <th scope="col">Duration</th>
                <!-- <th scope="col">Status</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="questionset in questionsets" :key="questionset._id">
                    <th scope="row">{{ questionset.nameOfSet }}</th>
                    <td>{{ questionset.createdAt | fineDate }}</td>
                    <td>{{ questionset.quiz.length }}</td>
                    <td>{{ questionset.dateOfAsess }}</td>
                    <td>{{ questionset.duration }} mins </td>
                    <!-- <td>Taken &nbsp; &nbsp; &nbsp;<i class="fa fa-trash" aria-hidden="true" @click="del(set)"></i></td> -->
                </tr>
            </tbody>
        </table>
    </div>
</div> 
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  name: 'AssessHistory',
  props: ['input'],
  data() {
      return {
        questionsets: [],
        questionset: {},
        // questionsetIndex: 0,
       }
     },
    components: { Countdown },
    mounted() {
        const url = "http://localhost:3000/api/questionset/all"
        this.$http.get(url)
        .then(response => {
        console.log(response.body)
        this.questionsets= response.body
    })
    },
    filters: {
        fineDate: function(inputFormat) {
            function pad(s) { return (s < 10) ? '0' + s :s;}
            var d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-')
        }
    },
computed: {},
methods: {
    del: function(set) {
            if (confirm("Are you sure that you want to delete this set?")) {
                this.$http.delete('http://localhost:3000/api/questionset/'+ questionset._id)
                console.log(questionset._id)
                .then(response=>{
                 console.log(response)
                     alert("Questionset sucessfully deleted")
                     this.questionsets= response.body
            });
         }
    }
},
}
</script>


<style scoped>

.table-box {
    width: 100%;
    height: 100%;
    left: 334px;
    top: 184px;
    background: #FFFFFF;
    box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
    border-radius: 8px;
    padding-top: 20px;
}
.table-head{
    width: 100%;
    height: 41.78px;
    background: #2B3C4E;
    color: white;
}
th:first-letter {
    text-transform:capitalize;
}
td:first-letter {
    text-transform:capitalize;
}
.head-row{
    font-family: Lato;
    font-size: 12.7167px;
    line-height: 15px;
    color: #FFFFFF;
}
.buttonholder {
    text-align: center;
    background: #2B3C4E;
    border-radius: 4px;
    width: 379px;
}
.head-row2{
    width: 946.48px;
    height: 59.95px;
    left: 365px;
    top: 295.95px;
    background: #FFFFFF;
    box-shadow: 7.26666px 16.35px 18.1667px rgba(79, 79, 79, 0.3);
    border-radius: 7.26666px;
}
h1{
font-family: Lato;
font-style: normal;
font-weight: 300;
line-height: 52px;
letter-spacing: -0.02em;
color: #2B3C4E;
}
form{
    padding-top: 30px;
}
.files {
    border: 1.55172px dashed #2B3C4E;
    box-sizing: border-box;
    border-radius: 6.2069px;
    height: 108px;
    width: 90% !important;
}
.form-group > .files > p {
    font-family: Avenir;
    font-size: 16px;
    text-align: center;
    padding: 50px 0;
    color: #2B3C4E;
  }
.uploadfil {
    opacity: 0;
    position: absolute;
    cursor: pointer;
}
.icon{
    margin-right: 15px;
}
.form-group > label {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #2B3C4E;
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
textarea {
    border: 1.5px solid #2B3C4E;
    box-sizing: border-box;
    border-radius: 4px;
    width: 95%;
}
input {
    border: 1.5px solid #2B3C4E;
    height: 41px;
    box-sizing: border-box;
    border-radius: 4px;
    width: 90%;
}
.next-button{
    text-align: center;
}
</style>