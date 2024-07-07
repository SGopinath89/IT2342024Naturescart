import React, { useContext, useReducer, useState } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    default:
      return state;
  }
};

export default function OnlinePaymentScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      const { data } = await axios.put(
        '/api/users/onlinepayment',
        {
          cardNumber,
          expiry,
          cvc,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Payment Successful');
      navigate('/placeorder'); // Navigate to place order screen
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL' });
      toast.error(getError(err));
    }
  };

  return (
    <div className="container small-container">
      <Helmet>
        <title>Online Payment</title>
      </Helmet>
      <h1 className="my-3">Online Payment</h1>
      <form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="cardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="expiry">
          <Form.Label>Expiry</Form.Label>
          <Form.Control
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cvc">
          <Form.Label>CVC</Form.Label>
          <Form.Control
            type="password"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            required
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit" disabled={loadingUpdate}>
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
