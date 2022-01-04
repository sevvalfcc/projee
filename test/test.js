
function check(){
	var question0 = document.quiz.question0.value;
	
	var correct = 1;

	if (question0 == "1") {
		correct++;
    }
    if(question0 == "2"){
        correct++;
    }
    if(question0 == "3"){
        correct++;
    }
    if(question0 == "4"){
        correct++;
    }
    if(question0 == "5"){
        correct++;
    }
    if(question0 == "6"){
        correct++;
    }
    if(question0 == "7"){
        correct++;
    }
                                
    if(question0 == "8"){
        correct++;
    }
    if(question0 == "9"){
        correct++;
    }
        
                        
	


	
	var pictures = ["https://media.istockphoto.com/photos/happy-new-year-2022-text-holiday-graphic-with-gold-fireworks-in-sky-picture-id1333992332?b=1&k=20&m=1333992332&s=170667a&w=0&h=Do_l9Ygrl4DOe50kpjOzpW54nei9r4n8XXsamMrg31Y=", "img/resim2.jpg", "https://images.unsplash.com/photo-1534841645203-8843b9ac9737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"];
	var messages = ["HARİKA BİR SENE GEÇİRECEKSİN !!!", "ÜMİTSİZLİĞE KAPILMA BELKİ BU SEFER GÜZEL GEÇER ", "2021 SANA TEKMEYİ VURMUŞ!"];
	var score;

	if (correct == 1) {
		score = 1;
	}
	if (correct == 2) {
		score = 2;
	}
    if (correct == 3) {
		score = 3;
	}
    if (correct == 4) {
		score = 4;
	}
    if (correct == 5) {
		score = 5;
	}
    if (correct == 6) {
		score = 6;
	}
    if (correct == 7) {
		score = 7;
	}
    if (correct == 8) {
		score = 8;
	}
    if (correct == 9) {
		score = 9;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "  mvcvbnmöç ";
	document.getElementById("picture").src = pictures[score];
	}
	