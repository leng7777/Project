import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [showQR, setShowQR] = useState(false);
  const [paid, setPaid] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = () => setShowQR(true);

  const closeQR = () => setShowQR(false);

  const handleQRScan = () => {
    setShowQR(false);
    setPaid(true);
    clearCart(); // optionally clear cart after payment
  };

  return (
    <div className="p-6 relative">
      <h2 className="text-2xl font-bold mb-4">🛒 Shopping Cart</h2>

      {paid ? (
        <div className="flex flex-col items-center justify-center p-6">
          <img
            src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"
            alt="Payment Success"
            className="w-64 h-64 mb-4"
          />
          <h2 className="text-3xl font-bold text-green-600">Payment Successful!</h2>
          <p className="mt-2 text-gray-700">Thank you for your purchase.</p>
        </div>
      ) : cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white rounded-xl p-3 mb-3 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>Qty: {item.qty}</p>
                    <p>${item.price * item.qty}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mt-4 font-bold text-xl">Total: ${total}</div>

          <button
            onClick={handlePayment}
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition-colors mt-4"
          >
            Pay Now
          </button>
        </>
      )}

      {/* QR Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-xl relative">
            <button
              onClick={closeQR}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Scan QR to Pay</h3>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/payment"
              alt="QR Code"
              className="w-48 h-48 mb-4 cursor-pointer hover:scale-105 transition-transform"
              onClick={handleQRScan} // click simulates scan
            />
            <p className="text-gray-600 text-center">
              Click the QR code to simulate a successful payment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
