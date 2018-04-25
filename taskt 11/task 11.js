


var index = 0;
function Product(name, type, price, date){
	this.id = ++index;
	this.name = name;
	this.type = type;
	this.price = price;
	this.date=new Date(date); 
}

function WareGoods(name, type, price, date, validDate){
	
	Product.apply(this, arguments);
	this.validDate = new Date(validDate);
	
	Object.defineProperty(this, "storagePeriod",{
		get: function(){
			var hours = Math.round((this.date - this.validDate) / 1000 / 60 / 60/ 24) + " hours";

			return hours; 
		},
		//writable: true,
        enumerable: false
	})
}

function Shop(name, adress, products, benefit, overPrice){
	this.name = name;
	this.adress = adress;
	this.products =  products;
	this.benefit = benefit;
	this.overPrice = overPrice;
	
	Object.defineProperty(this, "totalPrice",{
		get: function(){
			var sum = 0;
			for (var i = 0; i < this.products.length; i++) {
				sum +=this.products[i].price;
			}
			return sum; 
		}
	})
}

Shop.prototype.addProduct = function (t, n){
   for (var i = 0; i < n; i++) {
   	   this.products.push(t);
   }
}

Shop.prototype.printInfo = function (){
	var strInfo = 0;
		strInfo = " shopName:" + this.name + ", benefit = " + this.benefit + ", overPrice = " + this.overPrice + "; ";
		return strInfo;
}

Shop.prototype.sellProduct = function (id) {
	var strInfo ="";
	for (var i = 0; i < shop.products.length; i++) {
		if(id == this.products[i].id) {
			strInfo = this.products[i].name + " is sold"
			
		}
	}
	return strInfo;
}

Shop.prototype.deleteProduct = function (id) {
	var strInfo ="";
	for (var i = 0; i < shop.products.length; i++) {
		if(id == this.products[i].id) {
			strInfo = this.products[i].name + " is spoiled"
			//console.log(strInfo);
		}
	}
	return strInfo;
}

function printShopNames(market){
	var strShops = "Shops names:";
	for (var i = 0; i < market.shops.length; i++) {

		strShops += " " + market.shops[i].name + ";";

	}
	return strShops;
}

function printStatistics(market){
	var strShops = "Shops Statistics: ";
	for (var i = 0; i < market.shops.length; i++) {

		strShops +=  market.shops[i].printInfo();


	}
	return strShops;
}

WareGoods.prototype = Object.create(Product.prototype);

var apple1 = new WareGoods("Apple", "food", 23, "2010-11-17T03:24:00","1920-12-17T03:24:00");
var apple2 = new WareGoods("Apple", "food", 21, "2010-11-17T03:24:00","1920-12-17T03:24:00");
var apple3 = new WareGoods("potato", "food", 3, "2018-11-17T03:24:00","2018-12-17T03:24:00");
var arrFood = [apple1, apple2, apple3];

var shop = new Shop("Almi", "Minsk", arrFood, 23, 45);
var shop1 = new Shop("Rublevski", "Minsk", arrFood, 43, 12);
var shop2 = new Shop("Evroopt", "Vitedsk", arrFood, 43, 12);

var market = {
      shops: [shop, shop1, shop2]
}
var appleFruit = "apple";


var div = document.getElementById(idDiv);

document.write("Testing of printShopNames method: <br \/> " + printShopNames(market) + "<br \/>");
document.write("<br \/> Testing of printStatistics method <br \/> " + printStatistics(market) + "<br \/>");
document.write("<br \/> Testing of totalPrice <br \/> " + shop.totalPrice + "<br \/>");
document.write("<br \/> Testing of printInfo method <br \/> " + shop.printInfo() + "<br \/>");
document.write("<br \/> Testing of storagePeriod <br \/> " + apple1.storagePeriod + "<br \/>");
document.write("<br \/> Testing of sellProduct method <br \/> " + shop.sellProduct("1") + "<br \/>");
document.write("<br \/> Testing of deleteProduct method <br \/> " + shop.deleteProduct("2") + "<br \/>");

shop.sellProduct("1");
shop.deleteProduct("2");

console.log(printShopNames(market));
console.log(printStatistics(market));
console.log(market);
console.log(shop.totalPrice);
console.log(shop);
console.log(shop.printInfo());

console.log(apple1);
console.log(apple1.storagePeriod);
