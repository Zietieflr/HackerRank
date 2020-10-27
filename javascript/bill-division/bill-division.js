function bonAppetit(bill, unshared, splitBill) {
  const totalBill = bill.reduce((sum, item) => sum += item, 0);
  const response = splitBill === totalBill/2
    ? (bill[unshared]/2).toString() 
    : "Bon Appetit";
  process.stdout.write(response);
  return response;
}

module.exports = {
  bonAppetit,
}