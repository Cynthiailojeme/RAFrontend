<template>
    <div class="sidebar">
        <div class="admin-details">
            <div class="profile">
                <img src="../assets/adminImage.svg" class="logo">
            </div>
            <h1 class="admin-name">Josh Doe</h1>
            <p class="admin-email">j.doe@enyata.com</p>
        </div>

        <div class="controllers">
            <p><img src="../assets/dashboard.svg" class="icon"> Dashboard</p>
        </div>
    </div>
</template>

<style scoped>
.sidebar{
    width: 292px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    background: #ffffff;
    height: 100vh;
    left: 0px;
    top: 0px;
}
.admin-details {
    width: 100%;
    height: 255px;
    left: 0px;
    top: 0px;
    background: #5ABEFD;
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
.admin-name {
    font-family: Lato;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    margin-top: 20px;
}
.admin-email {
    font-family: Lato;
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
}
.controllers {
    padding-top: 50px;
    padding-left: 45px;
    text-align: left;
}
.icon{
    margin-right: 10px;
}
.controllers > p {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
}
</style>