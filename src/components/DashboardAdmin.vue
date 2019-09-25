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
                    <p class="small-text">We will get back to you</p>
                </div>
                <div class="status">
                    <p>Academy's</p>
                    <span>4</span>
                    <div class="for-status3"></div>
                    <p class="small-text">We will get back to you</p>
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

.total-status {
    display: flex;
    margin-top: 60px;
}

.date p {
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
.status p {
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
/* .update {
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
}
.take-assessment {
    width: 482px;
    height: 453px;
    border: 1px solid #ECECF9;
    box-sizing: border-box;
    border-radius: 4px;
}
.take-assessment-body {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16.7273px;
    text-align: center;
    color: #4F4F4F;
} */
</style>