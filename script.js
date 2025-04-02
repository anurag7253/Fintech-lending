/* script.js */

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded');

    // Example: Adding a simple click event to the "Apply for a Loan" button
    const applyLoanButton = document.querySelector('.apply-loan');
    if (applyLoanButton) {
        applyLoanButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            alert('You clicked the Apply for a Loan button!');
            // You can replace the alert with your desired functionality
            // e.g., redirect to a loan application page, open a modal, etc.
        });
    }

    // Example: Adding a simple click event to the "Explore Products" button
    const exploreProductsButton = document.querySelector('.explore');
    if (exploreProductsButton) {
        exploreProductsButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            alert('You clicked the Explore Products button!');
            // You can replace the alert with your desired functionality
            // e.g., redirect to a products page, open a modal, etc.
        });
    }

    // Example: Simple form validation (if you have forms)
    // (Note: This is just a basic example and might need more robust validation)
    // const form = document.querySelector('form'); // If you have a form
    // if (form) {
    //     form.addEventListener('submit', function(event) {
    //         const nameInput = document.querySelector('#name'); // Example input field
    //         if (nameInput && nameInput.value.trim() === '') {
    //             event.preventDefault(); // Prevent form submission
    //             alert('Please enter your name.');
    //         }
    //         // Add more validation checks as needed
    //     });
    // }

    // Example: Adding dynamic content (if you have dynamic data)
    // const productList = document.querySelector('.product-grid');
    // if (productList) {
    //     const products = [
    //         { name: 'New Product 1', description: 'Description 1' },
    //         { name: 'New Product 2', description: 'Description 2' },
    //         // ... more products
    //     ];
    //     products.forEach(product => {
    //         const productCard = document.createElement('div');
    //         productCard.classList.add('product-card');
    //         productCard.innerHTML = `
    //             <h3>${product.name}</h3>
    //             <p>${product.description}</p>
    //             <a href="#" class="product-button">Learn More</a>
    //         `;
    //         productList.appendChild(productCard);
    //     });
    // }

    // Example: Adding a simple toggle functionality (if you have elements to toggle)
    // const toggleButton = document.querySelector('.toggle-button');
    // const toggleElement = document.querySelector('.toggle-element');
    // if (toggleButton && toggleElement) {
    //     toggleButton.addEventListener('click', function() {
    //         toggleElement.classList.toggle('active');
    //     });
    // }
});