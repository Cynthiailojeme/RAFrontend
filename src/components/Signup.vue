<template>
   <div>
        <div class="form-container">
                <div class="form-container-head">
                    <img src="../assets/enyata-logo.png" alt="enyata" class="enyata-logo">
                    <h3>enyata</h3>
                    <p>Applicant Sign Up </p>
                </div>
                <form @submit.prevent = "signup">
                    <div class="row">
                        <div class="col">
                        
                            <label>First Name</label>
                            <input v-model = "applicant.first_name" type="text" class="form-control" required>
                        </div>
                        <div class="col">
                            <label>Last Name</label>
                            <input v-model = "applicant.last_name" type="text" class="form-control" required>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label>Email Address</label>
                            <input v-model="applicant.email" type="email" class="form-control" required>
                        </div>
                        <div class="col">
                            <label>Phone Number</label>
                            <input v-model="applicant.phone_number" type="tel" class="form-control" required>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label>Password</label>
                            <div class="password">
                                <input id="passwordField"  v-model="applicant.password" type="password" class="form-control" required ><img src="../assets/visible.png" alt="" id="passwordView">
                            </div>
                        </div>
                        <div class="col">
                            <label>Confirm Password</label>
                            <div class="password">
                                <input id="confirmField" v-model="applicant.confirm_password" type="password" class="form-control" required><img src="../assets/visible.png" alt=""  id="confirmView">
                            </div>
                        </div>
                    </div>
                    <div class=" error form-group">
                         <p class="text-danger" v-for="(err,index) in error" :key="index">{{err}}</p>

                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit">Sign Up</button>
                    </div>
                    <P>Already have an account?<router-link class=" sign ml-1" :to="{name:'applicant-login'}">Sign In</router-link></P>
                </form>
        </div>
    </div>  
</template>

<script>
export default{
    name:'signup',
    data() {
      return{
        apiResponse:{},
        applicant:{
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            password: "",
            confirm_password: ""    
        },
        error:[]

      }
    },

    components:{},
    mounted() {
        $("#passwordView").click(function(){
            let input = $("input#passwordField").attr("type");
            if(input == "password"){
                $("input#passwordField").attr("type", "text");
            }else{
                $("input#passwordField").attr("type", "password");
            }
        });

         $("#confirmView").click(function(){
            let input = $("input#confirmField").attr("type");
            if(input == "password"){
                $("input#confirmField").attr("type", "text");
            }else{
                $("input#confirmField").attr("type", "password");
            }
        });
    

    },

    methods:{
        signup:function() {
            this.$http.post('http://localhost:3000/applicant/signup',{
            first_name :this.applicant.first_name,
            last_name:this.applicant.last_name,
            email: this.applicant.email,
            phone_number: this.applicant.phone_number,
            password: this.applicant.password,
            confirm_password: this.applicant.confirm_password
            })
        .then(response =>{
            console.log(response)
            this.$router.push("/applicant-login")
        })
        .catch(err =>{
            if(err.status = 400){
                this.error.push(err.body.message)
            }
            else{this.error.push('Oops! Unexpected Error Occurred')}
            console.log(err)
        })
        }
    }
};
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

.error {
    margin-top: 20px;
}

.sign {
    color: #4F4F4F;
    text-decoration: underline;
    font-family: Lato;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
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