const orderListProcessing = (ordersList, orderId, state) => {
  if (state === 'Delivered')
    return ordersList.filter((order) => order.id !== orderId);

  return ordersList.map((order) => {
    if (order.id === orderId) return { ...order, state: 'Processing' };
    return order;
  });
};

const ordersList = [
  { id: '123', state: 'APPROVED' },
  { id: '234', state: 'APPROVED' },
  { id: '345', state: 'CANCELLED' },
  { id: '456', state: 'SHIPPED' },
  { id: '567', state: 'NEW' },
];

console.log(orderListProcessing(ordersList, '123', 'Processing'));
console.log(orderListProcessing(ordersList, '123', 'Delivered'));

console.log(ordersList);
