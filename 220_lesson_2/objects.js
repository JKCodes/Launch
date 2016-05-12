var invoices = {
  unpaid: []
};

invoices.add = function(name, amount) {
  this.unpaid.push({
    name: name,
    amount: amount
  });
};

invoices.totalDue = function() {
  var sum = 0;
  for(var i = 0; i < this.unpaid.length; i++) {
    sum += this.unpaid[i].amount;
  }
  return sum;
};

invoices.paid = [];

invoices.payInvoice = function(name) {
  var unpaid = [];

  for (var i = 0; i < this.unpaid.length; i++) {
    if (name === this.unpaid[i].name) {
      this.paid.push(this.unpaid[i]);
    }
    else {
      unpaid.push(this.unpaid[i]);
    }
  }

  this.unpaid = unpaid;
};

invoices.totalPaid = function() {
  var total = 0;

  for (var i = 0; i < this.paid.length; i++) {
    total += this.paid[i].amount;
  }

  return total;
};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices.totalDue());

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalPaid());
console.log(invoices.totalDue());

