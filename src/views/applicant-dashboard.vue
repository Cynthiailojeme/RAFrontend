<template>
    <div>
        <div id="app">
            <ApplicantSidebar/>
        </div>

        <div class="dashboard"> 
            <div class="head">
                <p>Dashboard</p>
                <span>Your Application is currently being review, you wil be notified if successful</span>
            </div>
            
        <div class="date-status">
            <div class="date">
            <p>Date of Application</p>
            <span>{{applicant.time | fineDate}}</span>
                <div class="for-status"></div>
                <p class="small-text">{{isToday() + " " + "since applied"}}</p>
            <div class="date-status" >
                <div class="date">
                    <p>Date of Application</p>

                    <!-- <span Date.now()></span>  -->
                    <span>{{applicant.time | fineDate}}</span>
                    <div class="for-status"></div>
                    <p class="small-text"> <timeago :datetime="applicant.time"
                                                    :auto-update="60"
                                                    :converterOptions="{ includeSeconds: true }">since applied</timeago></p>
                </div>
            <div class="status">
                <p>Application Status</p>
                <span> Pending</span>
            <div class="for-status2"></div>
                <p class="small-text">We will get back to you</p>
            </div>
            </div>

            <div class="update-assessment d-flex">
                <div class="update">
                    <p>Update</p>
                </div>
                <div class="take-assessment ml-4">
                    <p>Take Assessment</p>
                <div class="take-assessment-body">
                    <p>We have 4 days left until the next assessment <br> Watch this space</p>
                <button><router-link :to="{name: 'Take-assessment'}" class="links">Take Assessment</router-link></button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment'
// window.onload = function() {
// document.getElementById("date").innerHTML = localStorage.getItem("time");
// }  

import ApplicantSidebar from '@/components/ApplicantSidebar.vue'
export default {
    name: 'home',
    components: {
    ApplicantSidebar 
    },
    data() {
        return{
        apiResponse:{},
        applicant:{
        time:""
    },
    error:{},
    }
},

mounted() {
    window.localStorage.getItem('firstname')
    window.localStorage.getItem('user')
    window.localStorage.getItem('time')
    window.localStorage.getItem('lastname')
    window.localStorage.getItem('token')
    this.applicant.fullname = this.applicant.firstname+" "+this.applicant.lastname
    this.applicant.time = window.localStorage.getItem('time')
},
filters: {
    fineDate: function(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s :s;}
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('.')
}
},
}
</script>

<style scoped>
.dashboard {
margin-left: 292px;
margin-top: 107px;
margin-bottom: 86px;
padding-left: 47px;
}
.head p {
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 43.5555px;
letter-spacing: -0.02em;
color: #2B3C4E;
}

.head span {
font-family: 'Lato', sans-serif;
font-style: italic;
font-weight: 500;
font-size: 16px;
color: #2B3C4E;
}

.date-status {
display: flex;
margin-top: 61px;
}

.date p {
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
color: #4F4F4F;
}

.date span {
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 48px;
color: #2B3C4E;
}

.small-text {
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 12px;
color: #4F4F4F;
}

.status {
margin-left: 87px;
}

.status p {
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
color: #4F4F4F;
}

.status span {
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 48px;
color: #2B3C4E;
}

.for-status {
width: 80%;
height: 4px;
background: #006DF0;
border-radius: 4px;
}

.for-status2 {
width: 80%;
height: 4px;
background: #F09000;
border-radius: 4px;
}

.update-assessment {
margin-top: 97px;
}

.update {
width: 482px;
height: 453px;
border: 1px solid #ECECF9;
box-sizing: border-box;
border-radius: 4px;
}

.update p {
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
letter-spacing: -0.02em;
color: #2B3C4E;
margin-left: 34px;
margin-top: 25px;
}

.take-assessment {
width: 482px;
height: 453px;
border: 1px solid #ECECF9;
box-sizing: border-box;
border-radius: 4px;
}

.take-assessment p {
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
letter-spacing: -0.02em;
color: #2B3C4E;
margin-left: 34px;
margin-top: 25px;
}

.take-assessment-body {
margin-top: 189px;
}

.take-assessment-body p {
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16.7273px;
text-align: center;
color: #4F4F4F;
}
.links {
font-family: 'Lato', sans-serif;
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
</style>