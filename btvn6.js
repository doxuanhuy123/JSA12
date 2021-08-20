BÀI 1

function student(name, age, address) {
    this.name = name,age,address
    this.run = function () {
        console.log(this.name + ' is running...')
    }
}

__________________________________________________
BÀI 2
var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
    ];
    console.log(smartPhones.map(smartPhone => smartPhone.price));
    __________________________________________________________________
BÀI 3
function foo = (x,y,z) => {
	console.log( x, y, z );
}


function foo = () => {
	alert(‘Hello’)
}


function foo = (a,b) => {
	let m = a+b*100 
	return m
}