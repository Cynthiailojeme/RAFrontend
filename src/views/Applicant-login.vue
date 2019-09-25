<template>
    <div>
        <div class="form-container">
            <div class="form-container-head">
                <img src="../assets/enyata-logo.png" alt="enyata" class="enyata-logo">
                <h3>enyata</h3>
                <p>Applicant Log In </p>
            </div>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <div>
                    <input type="password" class="form-control" id="exampleInputPassword1"><img src="../assets/visible.png" alt="" class="visible">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign In</button>
        </form>
        <span class="no-account">Don’t have an account yet? Sign Up</span><span class="forgot">Forgot Password?</span>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.form-container {
    width: 50%;
    max-width: 380px;
    height: 462px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:  173px;
    margin-bottom: 389px;
}

.enyata-logo {
    width: 49px;
    height: 52px;
}

form {
    margin-top: 74px;
}

.form-container-head {
    text-align:  center;

}

.form-container-head h3 {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
}

.form-container-head p {
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    color: #2B3C4E;
}

label {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
}

input {
    border: 1.5px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 4px;
}

.visible {
    margin-top: -20px;
    margin-right: 20px;
    float: right;
}

.btn {
    background: #2B3C4E;
    border-radius: 4px;
    width: 100%;
    max-width: 379px;
    height: 50px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    margin-top: 39px;
}

.no-account {
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
    margin-top: 12px;
}
.forgot {
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
    float: right;
}
</style>
