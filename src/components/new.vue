<template>
    <div>
        <h1>
           Compose Assessment
        </h1>

        <form enctype="multipart/form-data" id="dataform">
            <label>15/30</label>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <div class="files">
                        <input type="file" id="file" name="datafile" class="uploadfil" ref="img" v-on:change="handleFileUpload()">
                        <p><img src="../assets/plus.svg" class="icon">Choose File</p>
                    </div>
                    <!-- <div class="files">
                        <img :src="onequestion.img" class="uploaded"/>
                        <button @click="removeImage">Remove image</button>
                    </div> -->
                </div>
                    <div class="form-group col-md-6">
                        <h6>Timer</h6>
                        <input type="text" v-model="period" id="time" data-format="HH:mm" data-template="HH : mm" name="datetime">
                    </div>
                </div>

            <div class="form-group">
                <label>Questions</label>
                <textarea class="form-control rounded-1" rows="5" v-model="onequestion.quiz" id="questions" required></textarea>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Option A</label>
                    <input type="text" class="form-control" id="optionA" v-model="onequestion.options[0]">
                </div>
                <div class="form-group col-md-6">
                    <label>Option B</label>
                    <input type="text" class="form-control" id="optionB" v-model="onequestion.options[1]">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Option C</label>
                    <input type="text" class="form-control" id="optionC" v-model="onequestion.options[2]">
                </div>
                <div class="form-group col-md-6">
                    <label>Option D</label>
                    <input type="text" class="form-control"  id="optionD" v-model="onequestion.options[3]">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label>Answer</label>
                    <input type="text" class="form-control correct" id="answer" v-model="onequestion.correctAnswer" required>
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
                            <button type="submit" id="submit">Next</button>
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
import TimeMixin from "../mixins/timer"
window.onload=function(){
    var question_counter = 1;
    const fields_array = [];
    const imageFile = document.getElementById('file');
    const data = {};
    const formData = document.getElementById("dataform");
    console.log("The formdata", formData);

    if(question_counter <= 5) {
        console.log("calling logic")
        logic(question_counter);
    }
    else {
        // console.log("Test read for submission", fields_array);
        // this.$http.post('http://localhost:3000/api/questionset/add', fields_array,
        //     {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        // })
        //call api to post
    }

    function logic(counter){

            const arraya = [];
            const submitQuestion = document.getElementById('submit')
            submitQuestion.addEventListener('click', (e) => {
            if(question_counter > 2) {
                console.log("Reached Max")
                return sendPayload(fields_array, e);
            }

            
            const forms = document.forms[0];
            const question = forms['questions'].value;
            const optionA = forms['optionA'].value;
            const optionB = forms['optionB'].value;
            const optionC = forms['optionC'].value;
            const optionD = forms['optionD'].value;
            const answer = forms['answer'].value;
            const file = imageFile.files[0];
            const dataNew = {...data, question, optionA, optionB, optionC, optionD, answer, file}

            if(question == '' || optionA == '' || optionB == '' ||  optionC == '' || optionD == '') {
                window.alert("Fill the fields");
                return false;
            }
            // console.log("dataNew", dataNew);
            // const question = forms['questions'].value;
            //  console.log('question', file);
            fields_array.push(dataNew);
            formData.reset();
            console.log("Data resteeed")
            question_counter++;
            e.preventDefault();
            console.log(fields_array, question_counter)
            return fields_array;
        });
    }

    function sendPayload(payload, e) {
        console.log("Test read for submission", payload);
        //   var xhttp = new XMLHttpRequest();
        //   function readBody(xhr) {
        //     var data;
        //     if (!xhr.responseType || xhr.responseType === "text") {
        //         data = xhr.responseText;
        //     } else if (xhr.responseType === "document") {
        //         data = xhr.responseXML;
        //     } else {
        //         data = xhr.response;
        //     }
        //     return data;
        // }


        // // this.$http.post('http://localhost:3000/api/questionset/add', payload,
        // //     {
        // //         headers: {
        // //             'Content-Type': 'multipart/form-data'
        // //         }
        // // })
        // // .then(response => {
        // //     console.log(response);
        // // })

        // xhttp.onreadystatechange = function() {
        //     if (xhttp.readyState == 4) {
        //         console.log(readBody(xhttp));
        //     }
        // }
        // xhttp.open("POST", "http://localhost:3000/api/questionset/add", true);
        // xhttp.send();
        // return addPost(payload)

        // Default options are marked with *
        const url = "http://localhost:3000/api/questionset/add";
        const response =  fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'multipart/form-data'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(payload) // body data type must match "Content-Type" header
        });

        e.preventDefault();
    }
}


export default {
    mixins: [TimeMixin],
    data() {
      return {
         questions: [],
         question: {},
         apiResponse:{},
         file: '',
         onequestion: { 
            img: "",
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
    // onFileChange(e) {
    //   var files = e.target.files || e.dataTransfer.files;
    //   if (!files.length)
    //     return;
    //   this.createImage(files[0]);
    // },
    // createImage(file) {
    //   var image = new Image();
    //   var reader = new FileReader();
    //   var vm = this;

    //   reader.onload = (e) => {
    //     vm.image = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // },
    handleFileUpload(){
    this.file = this.$refs.img.files[0];
  },
    addPost () {
        let formData = new FormData();
        formData.append('img', this.file);
        console.log(this.onequestion)
            this.$http.post('http://localhost:3000/api/question/add',this.onequestion, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
        })
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
    },

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

.block {
    display: flex;
    flex-direction: column;
    margin: 20px;
}
.text {
    color: #1abc9c;
    font-size: 20px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 400;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}
.digit {
    color: #ecf0f1;
    font-size: 20px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
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
.uploaded {
    width: 100%;
    height: 100%;
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
.correct {
    border: 1.5px solid #2B3C4E;
    height: 41px;
    box-sizing: border-box;
    border-radius: 4px;
    width: 95%;
}
.h6{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #2B3C4E;
}
</style>