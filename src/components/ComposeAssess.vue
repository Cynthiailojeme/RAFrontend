<template>
    <div>
        <h1>
           Compose Assessment
        </h1>

        <form enctype="multipart/form-data">
            <label>15/30</label>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <div class="files">
                        <input type="file" class="uploadfil" name="img">
                        <p><img src="../assets/plus.svg" class="icon">Choose File</p>
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label>Option B</label>
                    <input type="text" class="form-control">
                </div>
            </div>

            <div class="form-group">
                <label>Questions</label>
                <textarea class="form-control rounded-1" rows="5" v-model="onequestion.quiz"></textarea>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Option A</label>
                    <input type="text" class="form-control" v-model="onequestion.options[0]">
                </div>
                <div class="form-group col-md-6">
                    <label>Option B</label>
                    <input type="text" class="form-control" v-model="onequestion.options[1]">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Option C</label>
                    <input type="text" class="form-control" v-model="onequestion.options[2]">
                </div>
                <div class="form-group col-md-6">
                    <label>Option D</label>
                    <input type="text" class="form-control" v-model="onequestion.options[3]">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label>Answer</label>
                    <input type="text" class="form-control" v-model="onequestion.correctAnswer">
                </div>
            </div>

            <div class="form-row">
                    <div class="form-group col-md-6">
                        <div class="buttonholder">
                            <button type="submit">Previous</button>
                        </div>
                    </div>

                    <div class="form-group col-md-6">
                        <div class="buttonholder">
                            <button type="submit" @click.prevent="addPost">Next</button>
                        </div>
                    </div>
            </div>

            <div class="form-row">
                    <div class="form-group col-md-12">
                        <div class="buttonholder2">
                            <button type="submit" class="button2">Finish</button>
                        </div>
                    </div>
            </div>
        </form>

    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
      return {
         questions: [],
         question: {},
         apiResponse:{},
         onequestion: { 
            quiz:"",
            options: ["", "", "", ""],
            correctAnswer: ""
        },
        error:{},
       }
     },
components: {},
mounted() {},
methods: {
    addPost () {
        console.log(this.onequestion)
       	 this.$http.post('http://localhost:3000/api/question/add',this.onequestion)
      	.then(response =>{
	      console.log(response)
          this.onequestion= response.data
          this.questions.push(response.data);
            this.questions.sort(function (a, b) {
                if (a.timestamp < b.timestamp) {
                return 1;
                }
                if (a.timestamp > b.timestamp) {
                return -1;
                }
                return 0;
            });
            this.onequestion = {
                quiz:"",
                options: [],
            };
        });
    }
}
}
</script>


<style scoped>
h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
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
.buttonholder {
    text-align: center;
    padding: 50px;
}
.buttonholder2 {
    text-align: center;
    padding: 20px;
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
</style>