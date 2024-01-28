const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class "price"
  const prices = document.querySelectorAll('.price');

  // Initialize total price
  let totalPrice = 0;

  // Loop through each price element and add to total
  prices.forEach(price => {
    totalPrice += parseFloat(price.textContent);
  });

  // Display total price
  alert(`Total Price: Rs ${totalPrice.toFixed(2)}`);
};

getSumBtn.addEventListener("click", getSum);
