const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("value = ",(num) =>{
	numtoalpha(num);
	rl.close();
})


function numtoalpha(num){
	var numten = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
	var numtwo =['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

	if(num<20){
		for(var i=1;i<20;i++){
			if(num == i){
				console.log(numten[i]);
			}
		}
	}
	if(num>19 && num<100){
		var numberArray = (""+num).split("");
		//console.log(numberArray);
		for(var x= 1;x<=10;x++){
			if(numberArray[0] == x){
				var first = numtwo[x];
				if(numberArray[1] == 0){
					console.log(first);
				}
				for(var y=1;y<=10;y++){
					if(numberArray[1] == y){
						var second = numten[y];
						console.log(first +" "+second);
					}
				}
			}
		}	
	}

	if(num>99 && num<1000){
		var numberArray = (""+num).split("");
		console.log(numberArray);
		for(var a = 1;a<=10;a++){
			if(numberArray[0] == a){
				var first = numten[a];
				if(numberArray[1] == 0 && numberArray[2] == 0){
					console.log(first +" hundred");
				}
				if(numberArray[1] == 0){
					for(var c=1; c<=10;c++){
						if(numberArray[2] == c){
							var second = numten[c];
							console.log(first+" hundred and "+second);
						}
					}
				}
				for(var x= 1;x<=10;x++){
					if(numberArray[1] == x){
						var second = numtwo[x];
						for(var y=1;y<=10;y++){
							if(numberArray[2] == y){
								var third = numten[y];
								console.log(first +" hundred "+second+" "+third);
							}
						}
					}
				}	
			}
		}
	}
};

