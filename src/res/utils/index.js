import { STRIPE_TEST_PUBLIC_KEY, STRIPE_PUBLIC_KEY } from "../constants";

export const getStripeKey = () => {
    return getStripeTestMode() ? STRIPE_TEST_PUBLIC_KEY : STRIPE_PUBLIC_KEY;
};

export const getStripeTestMode = () => {
    return Boolean(window.localStorage.stripeTestMode);
};

export const setStripeTestMode = value => {
    if (value) {
        window.localStorage.stripeTestMode = '1';
    }
    else {
        window.localStorage.removeItem('stripeTestMode');
    }
}