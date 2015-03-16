in all formulas I give you y is output to column

monthly amount = b, COLA = r, survivor benefit = a, x = years

range x = [1,retirement age]
a applied when client dies and default is 1 and when set to no
r and b always static

FORMULA
==========
y=[12b((1+r)^x)]a
[1/3/2015 3:40:46 PM] Masto: ^that's all for an income source thing

function incomesource(b,r,x,a){
    var c = r+1;
	var d = pow(c,x);
	
	return 12 * b * d * a;
}