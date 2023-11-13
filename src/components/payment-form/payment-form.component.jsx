import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { FormContainer, PaymentFormContainer } from "./payment-form.style";

const PaymentForm = () => {
  const elements = useElements();
  const stripe = useStripe();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 2000 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response.paymentIntent;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Isro",
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button
          attributes={{ type: "submit" }}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
