document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;

    // Reference the cart button
    const cartButton = document.querySelector('.cart');

    // Reference product buttons
    const productButtons = document.querySelectorAll('.product button');

    // Add click event for "Add to Cart" buttons
    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartButton.textContent = `Cart (${cartCount})`;
            alert('Product added to cart!');
        });
    });
});
