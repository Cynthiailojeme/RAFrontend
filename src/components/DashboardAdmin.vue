<template>
    <div>
        <h1>
            Dashboard
        </h1>
            <div class="total-status">
                <div class="date">
                    <p>Current Applications</p>
                    <span>233</span>
                    <div class="for-status"></div>
                    <p class="small-text">4 days since applied</p>
            </div>
            <div class="status">
                    <p>Total Application</p>
                    <span>4233</span>
                    <div class="for-status2"></div>
                    <p class="small-text">All entries so far</p>
            </div>
            <div class="status">
                    <p>Academy's</p>
                    <span>4</span>
                    <div class="for-status3"></div>
                    <p class="small-text">So far</p>
            </div>
            </div>
              <div class="update-assessment d-flex">
                <div class="update">
                   <h4> History </h4>
                    <p>Last Update 18:24, 22/02/19</p>
                <div class="table-box">
            <table class="table table-borderless ">
            <tbody>
                <tr>
                <th scope="row">Academy Batch 1</th>
                    <td>15 students</td>
                    <td>started 11/09/15</td>
                </tr>
                <tr>
                <th scope="row">Academy Batch 1</th>
                    <td>15 students</td>
                    <td>started 11/09/15</td>
                </tr>
               <tr>
                 <th scope="row">Academy Batch 1</th>
                    <td>15 students</td>
                    <td>started 11/09/15</td>
                </tr>     
            </tbody>
        </table>
        </div>
            </div>
                <div class="take-assessment ml-4">
                    <h4 class="create-assessment">Create Assessment</h4>
                        <div class="take-assessment-body">
                                <p>Create test question for an incoming academy students</p>
                                <router-link :to="{name: 'Admin-compose'}" class="links">
                                <button>Create Assessment</button>
                                </router-link>
                        </div>
                </div>
            </div>
    </div>
</template>

<style scoped>
h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
}
.head{
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

.total-status {
    display: flex;
    margin-top: 60px;
}

.date{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
}

.date span {
   font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 65px;
    text-align: center;
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
    margin-left: 80px;
}
.status{
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    color: #4F4F4F;
}

.status span {
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    text-align: center;
    color: #2B3C4E;
}
.for-status {
   width: 148px;
    height: 4px;
    background: #006DF0;
    border-radius: 4px;
}
.for-status2 {
    height: 4px;
    width: 148px;
    height: 4px;
    background: #00F026;
    border-radius: 4px;
}
.for-status3 {
    width: 148px;
    height: 4px;
    background: #F09000;
    border-radius: 4px;
}
.create-assessment{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    padding-left: 31px;
    padding-top: 26px;
}
h4{
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.02em;
color: #2B3C4E;
}
p{
font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
color: #4F4F4F;
}
.update-assessment {
    margin-top: 77px;
}
.update {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    margin-top: 53px;
    width: 482px;
    height: 453px;
    
}

.take-assessment {
    width: 482px;
    height: 453px;
    border: 1px solid #ECECF9;
    box-sizing: border-box;
    border-radius: 4px;
}

.take-assessment{
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

.take-assessment-body {
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
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border: none;
}
.links{
    color: #FFFFFF;
}
.create-assessment{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    padding-left: 31px;
    /* padding-top: 26px; */
}
tbody tr {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #4F4F4F;
    width: 100%;
    height: 66px;
}
tbody > tr:hover{
    width: 100%;
    height: 66px;
    background: #FFFFFF;
    box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
    border-left: 7px solid #5ABEFD;
    border-radius: 8px;
}
</style>