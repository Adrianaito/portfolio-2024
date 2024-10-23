"use client";
import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

export default function CheckoutStripe() {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessages, setErrorMessages] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [donator, setDonator] = useState("");
  const [amount, setAmount] = useState<string>("500");
  const amountInt = parseInt(amount || "500");
  const [message, setMessage] = useState<string>("Buy me a coffee");

  useEffect(() => {
    if (amountInt <= 500) {
      setMessage(`Buy me a ¥${amountInt} coffee`);
    } else if (amountInt > 800 && amountInt <= 1000) {
      setMessage(`Buy me a fancy ¥${amountInt} coffee`);
    } else if (amountInt > 1000 && amountInt < 2000) {
      setMessage(`Buy me a ¥${amountInt} coffee with a cake!`);
    } else if (amountInt >= 2000 && amountInt < 5000) {
      setMessage(`Buy me a ¥${amountInt} craft beer!`);
    } else if (amountInt >= 5000 && amountInt < 100000) {
      setMessage(`Wow ¥${amountInt}!! Want to be my friend?`);
    } else if (amountInt >= 100000) {
      setMessage(`¥${amountInt}? Are you sure you don't want to hire me?`);
    }
  }, [amountInt]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const paymentElement = elements.getElement(PaymentElement);
    if (!paymentElement) {
      setErrorMessages("Payment element not found.");
      setLoading(false);
      return;
    }

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/`,
      },
    });

    if (submitError) {
      setErrorMessages(submitError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 sm:p-12 w-3/4 mx-auto rounded-md my-10 text-slate-800"
      >
        <div className="mb-3">
          <label htmlFor="email">Your e-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="p-2 w-full"
            type="email"
            name="email"
            placeholder="your_best_email@email.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="donator">Your name (optional)</label>
          <input
            value={donator}
            onChange={(e) => setDonator(e.target.value)}
            id="donator"
            className="p-2 w-full"
            type="text"
            name="donator"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount">Contribution Amount (JPY)</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value || "500")}
            id="amount"
            className="p-2 w-full"
            type="number"
            name="amount"
            placeholder="1000"
            min="500"
            step="100"
          />
        </div>
        {/* Render the PaymentElement */}
        <PaymentElement />
        <button
          type="submit"
          disabled={!stripe || loading}
          className="btn-primary w-full mt-4"
        >
          {loading ? "Loading..." : `${message}`}
        </button>
        {errorMessages && <div>{errorMessages}</div>}
      </form>
    </>
  );
}
