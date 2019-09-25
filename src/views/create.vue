<template>
	<div class="create">
		<div class="wrap">
			<div class="row" style="max-width:1350px;">
				<div class="col-md-3">
					<div class="sidebar">
						<div class="inside">
						<div class="john">
							<img class="image1" src="../assets/john.png">
							<h1 class="name">JOSH DOE</h1>
							<p class="mail">J.doe@enyata.com</p>
							
						</div>

							<div class="tool">
								<div class="image2">
									<img src="../assets/dashboard.png">
									<small class="describe pl-3">Dashboard</small>
									
								</div>

								<div class="image33">
									<img src="../assets/create.png">
									<small style="font-weight: bold;" class="describe pl-3">Create Application</small>
									
								</div>

								<div class="image3">
									<img src="../assets/entries.png">
									<small class="describe pl-3">Application Entries</small>
									
								</div>

								<div class="image3">
									<img src="../assets/compose.png">
									<small class="describe pl-3">Compose Assessment</small>
									
								</div>
								

								<div class="image4">
									<img src="../assets/logout.png">
									<small class="describe pl-3">Log Out</small>
									
								</div>
								
								
							
						</div>

						</div>

						
						
					</div>
					
				</div>

				<div class="col-md-9">
					<div class="otherSide">
						<div class="first">
							<p>Create Application</p>
							
						</div>
						<div class="apply">
							<form>
							  <div class="form-row">
							    <div class=" input_icons form-group col-md-6">
							    	<i class="icon"><img src="../assets/plus.png"></i> 
							      <input type="text" class=" first_box form-control" id="dotted" placeholder="Choose File">
							    </div>
							    <div class="form-group col-md-6 pl-5">
							      <label class="batch" >Link</label>
							      <input class=" second_box form-control">
							    </div>
							  </div>
							  <div class="form-row pt-4">
							  	<div class="form-group col-md-6">
							  	<label class="batch">Application closure date</label>
							    <input type="text" class=" second_box form-control"  placeholder="dd/mm/yyyy">
							  		
							  	</div>
							  	<div class="form-group col-md-6 pl-5">
							  	<label class="batch">Batch ID</label>
							    <input type="text" class=" second_box form-control">
							  		
							  	</div>
							   
							  </div>
							  <div class="form-row pt-4">
							  	<div class="form-group col-md-12">
							  		<label class="batch">Instructions</label>
							  		<textarea class="text"></textarea>
							  		
							  	</div>
							  	
							  </div>
							  <div class="btn1">
							  <button style="background-color: #2B3C4E; color:" type="submit" class="btn">Submit</button>
							</div>
							</form>
							
						</div>
						
					</div>
					
				</div>
				
			</div>
			

			<!-- closing tag for class wrap -->
		</div>




		<!-- closing tag for div create -->
	</div> 
	
</template>


<style>
	.wrap {
		/*border: 1px solid red;*/
		height: 180vh;
	}

	.sidebar{
		/*border: 1px solid green;*/
		height: 180vh;

	}

	.otherSide {
		/*border: 1px solid blue;*/
		height: 180vh;
	}

	.inside {
		height: 180vh;
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
/* identical to box height */

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
		/* identical to box height */

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
		/* identical to box height */

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

	.first{
		padding-top: 137px;
		padding-left:40px; 
		opacity: 0.9;
		font-family: Lato;
		font-style: normal;
		font-weight: 100;
		font-size: 43.5555px;
		line-height: 52px;
		/* identical to box height */

		letter-spacing: -0.02em;

		color: #2B3C4E;
	}

	.apply{
		/*border:1px solid green;*/
		width: 95%;
		margin-left: 40px;
		padding-top: 62px;
	}

	.first_box{
		height: 108px;
		text-align: center;
	}	

	#dotted{
		border:0;
		    border: 1.5px dashed #2B3C4E;
		    border-radius: 6.2069px;
	}

	.input_icons i { 
            position: absolute;
            padding-top: 44px;
            padding-left:154px; 
        } 

        .icon { 
            padding: 10px; 
            /*color: green; */
            min-width: 50px; 
            text-align: center; 
        }

        .second_box{
        	border: 1.5px solid #2B3C4E;
        } 

        .text{
        	height: 120px;
        	width: 100%;
        	border:1.5px solid #2B3C4E; 
        }

        .batch{
        	font-family: Lato;
        	font-style: normal;
        	font-weight: 550;
        	font-size: 17px;
        	line-height: 17px;
        	/* identical to box height */


        	color: #2B3C4E;

        }

        .btn{
        	width: 50%;
        	height: 50px;
        	margin: auto;
        	display: block;
        	background-color: #2B3C4E;
        	font-family: Lato;
        	font-style: normal;
        	font-weight: bold;
        	font-size: 16px;
        	line-height: 19px;
        	/* identical to box height */


        	color: #FFFFFF;


        }

        .btn1{
        	padding-top: 44px;
        }

        .btn:hover{
        	color: #FFFFFF;

        }
</style>
