import React, { useState, useEffect } from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

function Pay() {
  const STRIPE_KEY =
    'pk_test_51LPnilHHab9eHCh35EPRzuze8DtBPdSOBK1wTI0wU60WmRTYsSKkKn6Tn7QcCf6vO4bpmf6DP1QAInbJIIsS8j7C00TxRuv3Wf';
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  // send token to backend
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(`http://localhost:8000/api/payment`, {
          amount: '10000',
          token: stripeToken.id,
        });
        console.log(res, data);
      } catch (error) {
        console.log(error);
      }
    };
    // call the function
    stripeToken && makeRequest;
  }, [stripeToken]);

  return (
    <div>
      <StripeCheckout
        name="E-Commerce"
        image="https://img.freepik.com/free-vector/supermarket-logo-concept_23-2148467758.jpg?w=740&t=st=1659300159~exp=1659300759~hmac=75c6925c2fe434a8d477161f0cac8b5b8eeae3680a66178d4cb78f5c15ad95b4"
        billingAddress
        shippingAddress
        description="your total is $100"
        amount={10000}
        token={onToken}
        stripeKey={STRIPE_KEY}
      >
        <button>Pay now</button>
      </StripeCheckout>
    </div>
  );
}

export default Pay;
