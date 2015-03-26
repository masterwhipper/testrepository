/*in all formulas I give you y is output to column

monthly amount = b, COLA = r, survivor benefit = a, x = years

range x = [1,retirement age]
a applied when client dies and default is 1 and when set to no
r and b always static

FORMULA
==========
y=[12b((1+r)^x)]a
[1/3/2015 3:40:46 PM] Masto: ^that's all for an income source thing*/

function incomesource(b,r,x,a){
    var c = r+1;
	var d = pow(c,x);
	
	return 12 * b * d * a;
}

/*y= output as always, a = deposit, r = asset growth, b = bonus, p = payout %, defferal years = d,  e= benefit base (income asset payout value), x is years, cola = c
[1/3/2015 3:56:17 PM] Masto: hrmmms
[1/3/2015 4:06:32 PM | Edited 4:06:52 PM] Masto: y=(e*p)((1+r)^(x-d))   if x=<0 then y=0
[1/3/2015 4:06:59 PM] Masto: that was gross
[1/3/2015 4:07:07 PM] Masto: now e
[1/3/2015 4:07:53 PM] Masto: e is gross
[1/3/2015 4:07:58 PM] Masto: and I will have to think about e
[1/3/2015 4:11:34 PM] Masto: the calculation of e will be an entirely different function so I would*/

function payout(y,c,d,i) {
	var o = i - d;
	var g = 1 + c / 100;
	if (o > 0) {
		return y * pow(g,i);
	}
	else {
		return 0;
	}
}

function assetCalc(a,b,d,r,interestType,iscola,y) {
	e = a * (1 + b);
	if (interestType == "compound") {
		var t = (1 + r / 100);
		y = e * pow(t,d);
	}
	else {
		y = (e * d * (r/100)) + a; 
	}
}

//function pretaxCalc(