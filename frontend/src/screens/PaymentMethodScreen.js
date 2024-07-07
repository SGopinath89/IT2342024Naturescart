import React, { useContext, useEffect, useState } from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';

export default function PaymentMethodScreen() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { shippingAddress },
    } = state;

    const [paymentMethodName, setPaymentMethod] = useState(
        state.cart.paymentMethod || 'OnlinePayment'
    );

    useEffect(() => {
        if (!shippingAddress.address) {
            navigate('/delivery');
        }
    }, [shippingAddress, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();

        // Save the selected payment method to state and local storage
        ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
        localStorage.setItem('paymentMethod', paymentMethodName);

        // Navigate based on the selected payment method
        if (paymentMethodName === 'OnlinePayment') {
            navigate('/onlinepayment');
        } else if (paymentMethodName === 'CashOnDelivery') {
            // Display a message (you can use toast notifications or a modal)
            alert('Payment Confirmed. Order will be placed.');

            // Navigate to the place order screen
            navigate('/placeorder');
        }
    };

    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className='container small-container'>
                <Helmet>
                    <title> Payment Method </title>
                </Helmet>
                <h1 className='my-3'> Payment Method </h1>
                <Form onSubmit={submitHandler}>
                    <div className='mb-3'>
                        <Form.Check
                            type='radio'
                            id='OnlinePayment'
                            label='Online Payment'
                            value='OnlinePayment'
                            checked={paymentMethodName === 'OnlinePayment'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <Form.Check
                            type='radio'
                            id='CashOnDelivery'
                            label='Cash On Delivery'
                            value='CashOnDelivery'
                            checked={paymentMethodName === 'CashOnDelivery'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <Button type='submit'>Continue</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};