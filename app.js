function addToCart(data) {
  const elementPriceString = data.childNodes[9].innerText.split(" ")[0];
  const elementPrice = parseFloat(elementPriceString);
  const previousTotal = getTextElementValueById("total-price");
  const newTotalValue = previousTotal + elementPrice;
  const newTotal = newTotalValue.toFixed(2);
  //   checking for the purchase button
  if (newTotal > 0) {
    const purcharseButton = document.getElementById("purchase-button");
    purcharseButton.removeAttribute("disabled");
  }
  //   setting the total price
  document.getElementById("total-price").innerText = newTotal;
  document.getElementById("final-total").innerText = newTotal;
  //   updating the cart
  const cartDiv = document.getElementById("cart-items");
  const p = document.createElement("p");
  const count = cartDiv.childElementCount + 1;
  const itemTitle = data.childNodes[7].innerText;
  console.log(itemTitle);
  p.innerHTML = `${count}  ${itemTitle} `;
  p.classList.add("text-2xl", "font-medium");
  cartDiv.appendChild(p);
  //   checking total
  if (newTotal >= 200) {
    const applyButton = document.getElementById("apply-button");
    applyButton.removeAttribute("disabled");
  }
}
function getTextElementValueById(id) {
  const element = document.getElementById(id);
  const elementInnerText = element.innerText;
  const numericValue = parseFloat(elementInnerText);
  return numericValue;
}

function resetPage() {
  // reseting the values
  document.getElementById("total-price").innerText = "00";
  document.getElementById("final-total").innerText = "00";
  document.getElementById("discount").innerText = "00";
  const cartDiv = document.getElementById("cart-items");
  cartDiv.style.display = "none";
  //   reseting the page
  location.reload();
}
function discountAdded() {
  const total = getTextElementValueById("total-price");
  const couponCodeElement = document.getElementById("apply-coupon");
  const couponCode = couponCodeElement.value;
  const discountElement = document.getElementById("discount");
  const finalTotalElement = document.getElementById("final-total");
  if (couponCode === "SELL200") {
    const discountValue = (total * 20) / 100;
    const discount = discountValue.toFixed(2);
    const finalTotalValue = total - discount;
    finalTotal = finalTotalValue.toFixed(2);
    discountElement.innerText = discount;
    finalTotalElement.innerText = finalTotal;
  } else {
    alert("invalid coupon");
    return;
  }
}
