import React from 'react';
import { useSelector } from 'react-redux';

// const Cart = () => {
//   return (
//     <div class="flex flex-col justify-center items-center min-h-screen">
//       <div class="bg-gray-100 rounded-lg shadow-lg p-6">
//         <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>
//         <div class="flex justify-between mb-4">
//           <div class="flex items-center">
//             <img
//               src="https://via.placeholder.com/80"
//               alt="Product Image"
//               class="mr-4"
//             />
//             <div>
//               <h2 class="font-bold">Product Name</h2>
//               <p class="text-gray-700">Product Description</p>
//             </div>
//           </div>
//           <div class="flex items-center">
//             <button class="text-red-500 hover:text-red-700">
//               <i class="fas fa-trash"></i>
//             </button>
//             <div class="mx-4">
//               <input type="number" value="1" class="w-16 text-center" />
//             </div>
//             <span class="font-bold">$19.99</span>
//           </div>
//         </div>
//         <hr class="my-4" />
//         <div class="flex justify-between items-center">
//           <span class="font-bold">Subtotal:</span>
//           <span class="font-bold">$19.99</span>
//         </div>
//         <div class="flex justify-between items-center mt-4">
//           <span>Taxes:</span>
//           <span>$1.00</span>
//         </div>
//         <hr class="my-4" />
//         <div class="flex justify-between items-center">
//           <span class="font-bold">Total:</span>
//           <span class="font-bold">$20.99</span>
//         </div>
//         <div class="flex justify-center mt-6">
//           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {items.length > 0 ? (
        <div>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4 p-4 border-b"
              >
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
                <p className="text-lg font-semibold">
                  ${item.price * item.quantity}
                </p>
              </li>
            ))}
          </ul>
          <div className="text-right mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
