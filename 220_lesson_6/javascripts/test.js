var products = [{
  name: "Banana",
  quantity: 14,
  price: 0.79
}, {
  name: "Apple",
  quantity: 3,
  price: 0.55
}];

// Compile both templates for use later
var products_list = Handlebars.compile($("#products_list").html());
var product_template = Handlebars.compile($("#product_template").html());

// Also register the product template as a partial
Handlebars.registerPartial("product_template", $("#product_template").html());

var products_html = [];

products.forEach(function(item) {
  products_html.push(product_template(item));
});

$list.html(products_html.join(""));



// Write the current list to the page
$list.html(products_list({ items: products }));

// Create a new product
var new_product = {
  name: "Soup",
  quantity: 1,
  price: 1.29
};

// Render the new product with the product template
$list.append(product_template(new_product));