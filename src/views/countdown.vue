<template>
    <div class="col-sm">
  <div class="card text-center">

    <div class="card-block">
      <h4 class="card-title">{{time.time}}</h4>
    </div>
    <div class="card-footer">
      {{time.text}}
    </div>
  </div>
</div>
</template>
<script>
export default {
    props: ["time"],
}
</script>

<style scoped>
body {
  /*   background-color: lightblue; */
  height: 100%;
}

.card-title {
  padding: 1em;
}

#app-timer {
  /* padding-top: 50px;
  padding-bottom: 50px; */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.my-progress-container {
  height: 100%;
  background-color: blue;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
#my-progress-bar {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
}

.card {
  /* -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 2em; */
  
font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 58px;
/* identical to box height */

text-align: center;

color: #2B3C4E;
}
</style>

var inputs = document.getElementsByClassName("numbering");
        var ind = '';
        var arrr = this.indexArray;
        var ansArr = this.answers;

        for (var i = 0; i < inputs.length; i++) {
            ind = inputs[i].id;
        }
        function check(num) {
            return num == ind
        }
        console.log(arrr.length); 

        if(arrr.length == 0) {
            this.answers.push(userAns);
        }
        else {
                arrr.map(a => {
                if(ind == a) {
                    // window.alert("Question already answered");
                    var cond = arrr.findIndex(check)
                    for(var i = 0; i <= ansArr.length; i++) {
                        if(i == cond) {
                            return this.answers[i] = userAns;
                        }
                    }
                }
            })
        console.log("before", this.answers)
           if(this.answers.includes(userAns)) {
               console.log("number not in array")
           }
           else {
               this.answers.push(userAns)
           }
        }
        this.indexArray.push(ind)