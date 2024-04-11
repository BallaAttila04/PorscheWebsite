function calculatePrice() {
    const generation = document.getElementById('generation').value;
    const color = document.getElementById('color').value;
    const extras = {
      electronics: document.getElementById('electronics').checked,
      exhaust: document.getElementById('exhaust').checked,
      bodyKit: document.getElementById('bodyKit').checked,
      leatherSeats: document.getElementById('leatherSeats').checked,
    };
    const location = document.getElementById('location').value;
  
    // Define base prices for generations
    const basePrices = {
      first: 100000,
      second: 120000,
    };
  
    // Define color prices
    const colorPrices = {
      red: 0,
      blue: 1500,
      black: 2000,
      silver: 2500,
      white: 3000,
      yellow: 3500,
    };
  
    // Calculate base price
    let totalPrice = basePrices[generation];
  
    // Add color price
    totalPrice += colorPrices[color];
  
    // Add extras
    Object.values(extras).forEach((extra) => {
      if (extra) {
        totalPrice += 5000; // Adjust the price based on your preferences
      }
    });
  
    // Adjust price based on location
    const locationPrices = {
      Frankfurt: 0,
      Budapest: 5000,
      Barcelona: 10000,
    };
    totalPrice += locationPrices[location];
  
    // Apply different discounts based on different price ranges
    let discount = 0;
  
    if (totalPrice > 150000) {
      // Higher discount for total price above $150,000
      discount = 15;
    } else if (totalPrice > 120000) {
      // Moderate discount for total price between $120,000 and $150,000
      discount = 10;
    } else if (totalPrice > 100000) {
      // Lower discount for total price between $100,000 and $120,000
      discount = 5;
    }
  
    const discountAmount = (discount / 100) * totalPrice;
    totalPrice -= discountAmount;
  
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Estimated Price: $${totalPrice.toFixed(2)}${discount ? ` (Discount Applied: ${discount}%)` : ''}`;
  }
  