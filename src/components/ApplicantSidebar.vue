<template>
    <div class="sidebar">
        <div class="applicant-details">
            <div class="profile">
                <img src="../assets/adminImage.svg" class="logo">
            </div>
            <h1 class="applicant-name">Josh Doe</h1>
            <p class="applicant-email">doe@enyata.com</p>
        </div>

        <div class="controllers">
            <div class="active">
                <p><img src="../assets/dashboard.svg" class="icon">Dashboard</p>
            </div>
            <div>
                <p><img src="../assets/assess.svg" class="icon">Assessment</p>
            </div>
            <br>
            <br>
            <div>
                <p><img src="../assets/logout.svg" class="icon">Log Out</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar{
    width: 292px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    background: #ffffff;
    min-height: 100%;
    left: 0px;
    top: 0px;
    position: fixed;
}
.applicant-details {
    width: 100%;
    height: 255px;
    left: 0px;
    top: 0px;
    background: #2B3C4E;
    display: inline-block;
    text-align: center;
    padding-top: 50px;
}
.profile {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin: auto;
}
.applicant-name {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #fff;
    margin-top: 20px;
}
.applicant-email {
    font-family: 'Lato', sans-serif;
    font-weight: normal;
    font-style: italic;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #fff;
}
.controllers {
    padding-top: 50px;
}
.controllers > div{
    height: 50px;
    width: 100%;
}
.icon{
    margin-right: 25px;

}
.controllers > div > p {
    display: flex;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
    padding: 18px 35px 12px 35px;
    text-align: left;
}
.controllers > div.active > p {
    font-weight: bold;
    color: #2B3C4E;
    border-left: 4px solid #31D283;
}
/* On screens that are less than 700px wide, make the sidebar into a topbar
@media screen and (max-width: 800px) {
  .sidebar {
    width: 100%;
    height: auto;
  }
  .sidebar.visible {
        left:0px;
    }
    .sidebar span:nth-child(2) {
        display:inline-block;
    }
    .sidebar p {
        color: #777777;
        font-size:14px;
        min-width: 20px;
        text-align: center;
    }
     
} */
</style>
