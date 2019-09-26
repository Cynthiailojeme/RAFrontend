<template>
   <div>
        <div class="form-container">
                <div class="form-container-head">
                    <img src="../assets/enyata-logo.png" alt="enyata" class="enyata-logo">
                    <h3>enyata</h3>
                    <p>Applicant Sign Up </p>
                </div>
                <form>
                    <div class="row">
                        <div class="col">
                            <label>First Name</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="col">
                            <label>Last Name</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label>Email Address</label>
                            <input type="email" class="form-control">
                        </div>
                        <div class="col">
                            <label>Phone Number</label>
                            <input type="tel" class="form-control">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label>Password</label>
                            <div class="password">
                                <input type="password" class="form-control"><img src="../assets/visible.png" alt="">
                            </div>
                        </div>
                        <div class="col">
                            <label>Confirm Password</label>
                            <div class="password">
                                <input type="password" class="form-control"><img src="../assets/visible.png" alt="">
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Sign Up</button>
                    <P>Already have an account? Sign In</P>
                </form>
        </div>
    </div>  
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .form-container {
    width: 60%;
    max-width: 820px;
    height: 572px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:  173px;
    margin-bottom: 279px;
}

.enyata-logo {
    width: 49px;
    height: 52px;
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

form {
    margin-top: 59px;
}

.col {
    margin-top: 34px;
}

label {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
}

input {
    width: 379px;
    height: 41px;
    border: 1.5px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 4px;
}

.btn {
    background: #2B3C4E;
    border-radius: 4px;
    width: 70%;
    max-width: 520px;
    height: 50px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-right: auto;
    margin-left: auto;
    margin-top: 44px;
    display: block;
}

form p {
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
    text-align: center;
    margin-top: 10px;
}

.password {
    position: relative;
    display: block;
    float: right;
    width: 100%;
}

.password img {
    margin-top: -20px;
    margin-right: 20px;
    float: right;
}
</style>