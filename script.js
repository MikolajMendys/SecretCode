powtarzaj=true;
var sec = 0;
var uruchomienie = false;
var wpisywana = 1;
var wpisuje = 0;
var w_rzedzie = 1;
var znak = 1;
var b ;
var rzad = 0;
var sprawdzana = 1;
var y;
var zaliczone = 0;
var migniecia = 1;
var powtarzanie = true;
var klikniecia = 1;

window.onload = wpisywanie;

function wpisywanie()
{
	if(wpisywana<=4)
	{
	document.getElementById("hasla"+wpisywana).innerHTML = "<br>Choose <br> the color";
	document.getElementById("instrukcje").innerHTML = "Set the secretcode<br>for your opponent";
	}
	else
	{
		document.getElementById("instrukcje").innerHTML = "Try guessing the secretcode in 6 tries! After clicking on a color its border will change color to : <br> Red - The color you clicked doesnt appear in the secretcode<br> Green - You choose the right color!";
		rzad++;
		
		document.getElementById("hasla1").style.height = "0px"
		
		document.getElementById("hasla2").style.height = "0px"
		
		document.getElementById("hasla3").style.height = "0px"
		
		document.getElementById("hasla4").style.height = "0px"
	}
}

function wpisywanie_hasla(a)
{
	if(rzad>=1)
	{
		b=a;
		wpisywanie_rzad(b);
	}
	else
	{
		if(a==1)
		{
			if(wpisywana<=4)
			{
				document.getElementById("hasla"+wpisywana).style.fontSize = 0;
				document.getElementById("hasla"+wpisywana).innerHTML = a;
				document.getElementById("hasla"+wpisywana).style.background = "purple";
				wpisywana++;
				wpisywanie();
			}
		}
		
		if(a==2)
		{
			if(wpisywana<=4)
			{
				document.getElementById("hasla"+wpisywana).style.fontSize = 0;
				document.getElementById("hasla"+wpisywana).innerHTML = a;
				document.getElementById("hasla"+wpisywana).style.background = "pink";
				wpisywana++;
				wpisywanie();
			}
		}
		
		if(a==3)
		{
			if(wpisywana<=4)
			{
				document.getElementById("hasla"+wpisywana).style.fontSize = 0;
				document.getElementById("hasla"+wpisywana).innerHTML = a;
				document.getElementById("hasla"+wpisywana).style.background = "blue";
				wpisywana++;
				wpisywanie();
			}
		}
		
		if(a==4)
		{
			if(wpisywana<=4)
			{
				document.getElementById("hasla"+wpisywana).style.fontSize = 0;
				document.getElementById("hasla"+wpisywana).innerHTML = a;
				document.getElementById("hasla"+wpisywana).style.background = "red";
				wpisywana++;
				wpisywanie();
			}
		}
		
		if(a==5)
		{
			if(wpisywana<=4)
			{
				document.getElementById("hasla"+wpisywana).style.fontSize = 0;
				document.getElementById("hasla"+wpisywana).innerHTML = a;
				document.getElementById("hasla"+wpisywana).style.background = "orange";
				wpisywana++;
				wpisywanie();
			}
		}
		
		if(a==6)
		{
			if(wpisywana<=4)
			{
				document.getElementById("hasla"+wpisywana).style.fontSize = 0;
				document.getElementById("hasla"+wpisywana).innerHTML = a;
				document.getElementById("hasla"+wpisywana).style.background = "yellow";
				wpisywana++;
				wpisywanie();
			}
		}
		
		if(a==7)
		{
			if(wpisywana<=4)
			{
				document.getElementById("hasla"+wpisywana).style.fontSize = 0;
				document.getElementById("hasla"+wpisywana).innerHTML = a;
				document.getElementById("hasla"+wpisywana).style.background = "green";
				wpisywana++;
				wpisywanie();
			}
		}
		
		if(a==8)
		{
			if(wpisywana<=4)
			{
				document.getElementById("hasla"+wpisywana).style.fontSize = 0;
				document.getElementById("hasla"+wpisywana).innerHTML = a;
				document.getElementById("hasla"+wpisywana).style.background = "lightgreen";
				wpisywana++;
				wpisywanie();
			}
		}
		
		if(a==9)
		{
			if(wpisywana<=4)
			{
				document.getElementById("hasla"+wpisywana).style.fontSize = 0;
				document.getElementById("hasla"+wpisywana).innerHTML = a;
				document.getElementById("hasla"+wpisywana).style.background = "white";
				wpisywana++;
				wpisywanie();
			}
		}
	}
}

function wpisywanie_rzad()
{
	if(b==1)
	{
		document.getElementById("haslo"+znak).style.background = "purple";
		znak++;
		w_rzedzie++;
		sprawdz(1);
	}
	if(b==2)
	{
		document.getElementById("haslo"+znak).style.background = "pink";
		znak++;
		w_rzedzie++;
		sprawdz(2);
	}
	if(b==3)
	{
		document.getElementById("haslo"+znak).style.background = "blue";
		znak++;
		w_rzedzie++;
		sprawdz(3);
	}
	if(b==4)
	{
		document.getElementById("haslo"+znak).style.background = "red";
		znak++;
		w_rzedzie++;
		sprawdz(4);
	}
	if(b==5)
	{
		document.getElementById("haslo"+znak).style.background = "orange";
		znak++;
		w_rzedzie++;
		sprawdz(5);
	}
	if(b==6)
	{
		document.getElementById("haslo"+znak).style.background = "yellow";
		znak++;
		w_rzedzie++;
		sprawdz(6);
	}
	if(b==7)
	{
		document.getElementById("haslo"+znak).style.background = "green";
		znak++;
		w_rzedzie++;
		sprawdz(7);
	}
	if(b==8)
	{
		document.getElementById("haslo"+znak).style.background = "#336600";
		znak++;
		w_rzedzie++;
		sprawdz(8);
	}
	if(b==9)
	{
		document.getElementById("haslo"+znak).style.background = "white";
		znak++;
		w_rzedzie++;
		sprawdz(9);
	}
}

function sprawdz(z)
{
	if(klikniecia==24)
	{
		przegrana();
	}
	else
	{
		klikniecia++;
		powtarzanie=true;
		if(z==document.getElementById("hasla"+sprawdzana).innerHTML)
		{
			document.getElementById("haslo"+(znak-1)).style.borderColor = "#66FF00";
			zaliczone++;
		}
		else
		{
			for(y=1;y<=4;y++)
			{
				if(powtarzanie==true)
				{
					if(z==document.getElementById("hasla"+y).innerHTML)
					{
						document.getElementById("haslo"+(znak-1)).style.borderColor = "#FF9900";
						powtarzanie=false;
					}
				}
			}
			if(powtarzanie==true)
			{
				document.getElementById("haslo"+(znak-1)).style.borderColor = "#FF3300";
			}
		}
		sprawdzana++;
		
		if(sprawdzana==5)
		{
			sprawdzana=1;
			if(zaliczone==4)
			{
				wygrana();
				document.getElementById("hasla1").style.height = "50px"
				document.getElementById("hasla2").style.height = "50px"
				document.getElementById("hasla3").style.height = "50px"
				document.getElementById("hasla4").style.height = "50px"
				
			}
			else
			{
				zaliczone=0;
			}
		}
	}
}

function wygrana()
{
	if(migniecia<10)
	{
		document.getElementById("instrukcje").innerHTML = "Congratulations!<br> You did it!";
		document.getElementById("instrukcje").style.fontSize = "30";
		document.getElementById("instrukcje").style.background = "#66FF00";
		document.getElementById("instrukcje").style.color = "grey";
		migniecia++;
		setTimeout(wygrana1, 500);
	}
}

function wygrana1()
{
	if(migniecia<10)
	{
		document.getElementById("instrukcje").innerHTML = "Congratulations!<br> You did it!";
		document.getElementById("instrukcje").style.fontSize = "30";
		document.getElementById("instrukcje").style.background = "grey";
		document.getElementById("instrukcje").style.color = "#66FF00";
		migniecia++;
		setTimeout(wygrana, 500);
	}
}

function przegrana()
{
	if(migniecia<10)
	{
		document.getElementById("instrukcje").innerHTML = "You didn't make it :(";
		document.getElementById("instrukcje").style.fontSize = "30";
		document.getElementById("instrukcje").style.background = "#FF3300";
		document.getElementById("instrukcje").style.color = "grey";
		migniecia++;
		setTimeout(przegrana1, 500);
	}
}

function przegrana1()
{
	if(migniecia<10)
	{
		document.getElementById("instrukcje").innerHTML = "You didn't make it :(";
		document.getElementById("instrukcje").style.fontSize = "30";
		document.getElementById("instrukcje").style.background = "grey";
		document.getElementById("instrukcje").style.color = "#FF3300";
		migniecia++;
		setTimeout(przegrana, 500);
	}
}