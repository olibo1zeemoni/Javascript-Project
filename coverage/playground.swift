import Foundation


class Product {
  var price = 1500
}


struct SomeProduct {
  var price = 1500
}

let firstP = Product()

var secondP = SomeProduct()

firstP.price = 3000

print(firstP.price)
