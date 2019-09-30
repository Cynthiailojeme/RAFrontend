<template>
    <div>
        <div class="form-container-head">
            <img src="../assets/enyata-logo.png" alt="enyata" class="enyata-logo">
            <h3>enyata</h3>
            <p>Applicant Sign Up </p>
        </div>
        <div class="form-wrapper">
          <form @submit.prevent="add" action="/" enctype="multipart/form-data"  method="POST">
            <div class="files">
                <input type="file" class="uploadfil" name="myFile">
                <p><img src="../assets/plus.svg" class="icon">Upload CV</p>
            </div>
            
            <div class="row">
                <div class="col">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="newUser.firstname">
                </div>
                <div class="col">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="newUser.lastname">
                </div>
            </div>

            <div class="row rows">
                <div class="col">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="newUser.email">
                </div>
                <div class="col">
                    <label>Date of Birth</label>
                    <input type="date" class="form-control" v-model="newUser.dob">
                </div>
            </div>

            <div class="row rows">
                <div class="col">
                    <label>Address</label>
                    <input type="text" class="form-control" v-model="newUser.address">
                </div>
                <div class="col">
                    <label>University</label>
                    <input type="text" class="form-control" v-model="newUser.university">
                </div>
            </div>

            <div class="row rows">
                <div class="col">
                    <label>Course of Study</label>
                    <input type="text" class="form-control" v-model="newUser.course">
                </div>
                <div class="col">
                    <label>CGPA</label>
                    <input type="text" class="form-control" v-model="newUser.cgpa">
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
          </form>  
        </div>
    </div>
</template>

<script>
export default {
    name:'home',
		data() {
		return{
        successMessage: "",
        text: "success",
		apiResponse:{},
		newUser: {
		firstname:"",
		lastname:"",
        email:"",
        dob:"",
        address:"",
        university:"",
        course:"",
        cgpa:"",
		},
	error:{}

	}
},

components:{},
	mounted() {},
		methods:{
			add:function(){
			console.log(this.newUser)
			this.$http.post('http://localhost:3000/api/form/add',this.newUser)
			.then(response=>{
			console.log(response)
			this.newUser= response.body
            alert("Application Submitted");
            this.newUser = {};
			})
        }, 
	}
};
</script>

<style scoped>
.enyata-logo {
    width: 49px;
    height: 52px;
}

.form-container-head {
    text-align:  center;
    margin-top: 116px;

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

.form-wrapper {
    width: 80%;
    max-width: 963px;
    height: 643px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 171px;
    display: block;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}

form {
    width: 90%;
    max-width: 830px;
    height: 469px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding-top: 51px;
}

.files {
    width: 20% !important;
    max-width: 211px;
    height: 49.97px;
    border: 1.5px solid #2B3C4E;
    box-sizing: border-box;
    border-radius: 2.87205px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -10px;
    display: block;
}
.files > p {
    font-family: Avenir;
    font-size: 16px;
    text-align: center;
    padding: 10px 0;
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

.rows {
    margin-top: 45px;
}

label {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #2B3C4E;
}

input {
    border: 1.5px solid #2B3C4E;
    box-sizing: border-box;
    border-radius: 4px;
}

.btn {
    width:70%;
    max-width: 379px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    display: block;
    background: #2B3C4E;
    border-radius: 4px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
}
</style>