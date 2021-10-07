function jimOrders(orders) {
  return orders
    .map((order, index) => [index + 1, ...order])
    .sort((a, b) => a[1] + a[2] - (b[1] + b[2]))
    .map((order) => order[0]);
}

console.log(
  jimOrders([
    [8, 3],
    [5, 6],
    [6, 2],
    [2, 3],
    [4, 3],
  ])
);

// orders[i] = [orderNumber, prepTime]
