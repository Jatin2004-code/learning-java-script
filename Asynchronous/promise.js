let pizzaOrder = new Promise((resolve, reject) => {
  let isDelivered = true;

  if (isDelivered) {
    resolve("🍕 Pizza delivered successfully!");
  } else {
    reject("❌ Delivery failed!");
  }
});

pizzaOrder
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
