// Render HTML code for an order summary
function order_summary(order_object) {
  var x, y;

	if (order_object.price_level == "free") {
	 	x= 0;
	} else if (order_object.price_level == "discount") {
		x =  order_object.price - (order_object.discount_percentage * order_object.price);
	} else if (order_object.price_level == "sale") {
		x =  order_object.price - order_object.markdown;
	} else {
		x = order_object.price;
	}

	var subtotal_str;
	if (order_object.price_level == "free") {
		subtotal_str = "Subtotal: This order is free";
	} else {
		subtotal_str = "Subtotal: " + "$" + x;
	}
	if (order.taxes_applicable == true) {
		y = order_object.tax;
	} else {
		y = 0;
	}

	var tax_str;
	tax_str = "Tax: $" + y;

	var total_str = "Order total: " + "$" + x + y;

  html = "<p>" + "Product:  " + order_object.product_name  + "</p>" + "<p>" + subtotal_str + "</p>" + "<p>" + tax_str + "</p>" + "<p>" + total_str + "</p>";
  document.write("<h1> Order summary </h1>" + html);
}

//var order_object = {product_name: "Sony", price_level:"discount", price:500, markdown:2,discount_percentage:0.2, tax:3, taxes_applicable: true};