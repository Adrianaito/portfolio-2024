"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Modal } from "./Modal";
import CheckoutStripe from "./CheckoutStripe";
import CoffeeImage from "./Coffee";
import { useState, useEffect } from "react";

const StripeModal: React.FC = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
  );

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>("500"); // You can adjust this amount as needed.

  // Fetch client secret on component mount or when amount changes
  useEffect(() => {
    const fetchClientSecret = async () => {
      if (parseInt(amount) >= 500) {
        const response = await fetch("/api/create-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }), // Sending the amount in the request body
        });

        const data = await response.json();
        setClientSecret(data.client_secret);
      }
    };

    fetchClientSecret();
  }, [amount]);

  // Only render the Elements provider when clientSecret is available
  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <Modal.Root trigger={<CoffeeImage />}>
      <Modal.Content className="text-center px-2 py-4 sm:p-8 bg-cream rounded-md">
        {/* Elements provider with the fetched clientSecret */}
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutStripe />
        </Elements>
      </Modal.Content>
    </Modal.Root>
  );
};

export default StripeModal;
