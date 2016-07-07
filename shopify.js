// Render HTML code for an order summary
function order_summary(order_object) {
  var x=0, y=0, subtotal_str = "Subtotal: This order is free";

	if (order_object.price_level != "free") {
		x = order_object.price;
		if (order_object.price_level == "discount") {
			x *= (1-order_object.discount_percentage);
		} else if (order_object.price_level == "sale") {
			x -= order_object.markdown;
		}
		subtotal_str = "Subtotal: $" + x;
	}

	if (order_object.taxes_applicable == true) {
		y = order_object.tax;
	}

  document.write("<h1> Order summary </h1><p>Product:  " + order_object.product_name  + "</p><p>" + subtotal_str + "</p><p>Tax: $" + y + "</p><p>Order total: $" + (x + y) + "</p>");
}

//var order_object = {product_name: "Sony", price_level:"discount", price:500, markdown:2,discount_percentage:0.2, tax:3, taxes_applicable: true};