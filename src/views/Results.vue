<template>
    <div>
        <div>
            <AdminSidebar/>
        </div>

        <div class="main">
            <div class="otherSide">
                <div class="top">
                <!-- <p>Entries -Batch2 <i class="fa fa-caret-down arrow"></i></p> -->
                <div class="dropdown">
                    <p>Results- {{ questionset.nameOfSet }}<i class="fa fa-caret-down arrow"></i></p>
                    <!-- <button class="dropbtn">Dropdown</button> -->
                    <div class="dropdown-content" v-for="questionset in questionsets" :key="questionset._id">
                        <a style="font-size: 12px;" href="#" params:{id: questionset._id}>{{ questionset.nameOfSet }}</a>
                    </div>
                </div>

                <p class="applied">Comprises of all that applied for {{ questionset.nameOfSet }}</p>

                </div>

                <div class="down">
                    <table class="table">
                        <thead class=" head">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">DOB.Age<i class="fa fa-sort pl-2"></i></th>
                                <th scope="col">Address</th>
                                <th scope="col">University</th>
                                <th scope="col">CGPA <i class="fa fa-sort pl-2"></i></th>
                                <th scope="col">Test scores <i class="fa fa-sort pl-2"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="line" v-for="form in forms" :key="form._id" >
                                <th class="data" scope="row">{{form.firstname}} {{form.lastname}}</th>
                                <td class="data">{{form.email}}</td>
                                <td class="data">{{form.dob}}</td>
                                <td class="data">{{form.address}}</td>
                                <td class="data">{{form.university}}</td>
                                <td class="data">{{form.cgpa}}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
import AdminSidebar from '@/components/AdminSidebar.vue'
export default {
    name: 'forms',
    props: ['id'],
    components: {
    AdminSidebar,
    },
    data() {
    return {
    forms: [],
    questionset: {},
    questionsets: [],
    }
    },
    mounted() {
        let url = "http://localhost:3000/api/form/"
        this.$http.get(url)
        .then(response => {
        console.log(response.body)
        this.forms= response.body
    });
//     let id = this.$route.params.id
//         this.$http.get("http://localhost:3000/api/questionset/single/" + id)
//         .then(response => {
//         console.log(response.body)
//         this.questionset = response.body
//   })
//    let url = "http://localhost:3000/api/questionset/all"
//         this.$http.get(url)
//         .then(response => {
//         console.log(response.body)
//         this.questionsets= response.body
//     })
    }
}
</script>

<style scoped>
.main {
    margin-left: 300px;
    padding: 0px 70px 50px 50px;
}
.head {
	color:  #ffffff;
	font-family: Lato;
	font-size: 14px;
	line-height: 17px;
	/* identical to box height */

	/*text-align: center;*/
	background-color: #2B3C4E;
}
.otherSide {
/*border: 1px solid red;*/
    height: 100%;
}

.inside {
height: 200vh;
width :292px;
/*border: 1px solid black;*/
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
background-color: #ffffff;
}

.john {
width: 292px;
height: 255px;
background: #5ABEFD;
}

.image1 {
padding-top: 75px;
padding-left: 97px;
padding-right: 115px;
padding-bottom: 3px;
}

.name {
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 24px;
letter-spacing: -0.02em;
color: #2B3C4E;
padding-left:97px;
padding-top: 4px;

}

.mail {
font-family: Lato;
font-style: italic;
font-weight: normal;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.02em;
color: #2B3C4E;
text-align: center;
}

.tool{
/*border: 1px solid red;*/
height: 80vh;
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

color: #2B3C4E;

}

.image2{
padding-top: 83px;
padding-left: 43px;
}

.image3{
padding-top:28px;
padding-left: 43px;
}

.image4 {
padding-top: 69px;
padding-left: 43px;
}

.image33{
margin-top:20px; 
padding-top:10px;
/*padding-bottom: 20px;*/
padding-left: 38px;
border-left: 4px solid #31D283;	


}

.top{
font-family: Lato;
font-style: normal;
font-weight: 300;
font-size: 40px;
line-height: 52px;

letter-spacing: -0.02em;

color: #2B3C4E;
opacity: 0.9;
padding-top:101px;
/*padding-left: 42px;*/

}

.arrow{
padding-left: 16px;
}

.dropdown {
position: relative;
display: inline-block;
}
/*drop down content hidden by default*/
.dropdown-content {
display: none;
position: absolute;
background-color: #ffff;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
flex:right;
}
.dropdown-content a {
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
}

a:hover{
color: #000;
}
.dropdown-content a:hover {background-color: #ffff; opacity: 0.9;}

.dropdown:hover .dropdown-content {display: block;}

.applied{
font-family: Lato;
font-style: italic;
font-weight: normal;
font-size: 13px;
line-height: 16px;

/*text-align: center;*/

color: #4F4F4F;

}

.down{
padding-top: 38px;
}

.data{
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

/*text-align: center;*/

color: #4F4F4F;

}

.line:hover{
background: #FFFFFF;
box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
border-radius: 8px;
border-left: 6px solid #31D283;;
}


</style>
