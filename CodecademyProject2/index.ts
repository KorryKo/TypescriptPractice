import products from './products';

const productName: string = 'fanny pack';
let shipping : number;
let taxPercent: number;
let total:number;
const shippingAddress: string = '575 Broadway, New York City, New York';

let product = products.find(product => product.name === productName);
console.log(product);

if (product!.preOrder === 'true') {
  console.log('We will send you a message when your product is on its way.');
};
if (Number(product!.price) > 25) {
  shipping = 0;
  console.log('We provide free shipping for this product.');
} else if(Number(product!.price) < 25){
  shipping = 5;
};
if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.5;
};
let taxTotal = Number(product!.price) * taxPercent;
total = taxTotal + Number(product!.price) + shipping!;
console.log(`You ordered ${product!.name} with delivery to ${shippingAddress}. Product price is $${product!.price}, tax is $${taxTotal}, shiiping is $${shipping!}. Total: $${total}`)
