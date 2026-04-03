export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const ITEM = {
  item_id: 'hestia_tablet',
  item_name: 'Hestia — Tablette Intelligente',
  price: 173.99,
  quantity: 1,
};

function send(action: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.gtag || !GA_ID) return;
  window.gtag('event', action, params);
}

export function trackAddToCart() {
  send('add_to_cart', {
    currency: 'EUR',
    value: 173.99,
    items: [ITEM],
  });
}

export function trackBeginCheckout() {
  send('begin_checkout', {
    currency: 'EUR',
    value: 173.99,
    items: [ITEM],
  });
}

export function trackPurchase() {
  send('purchase', {
    transaction_id: `H-${Date.now()}`,
    currency: 'EUR',
    value: 173.99,
    items: [ITEM],
  });
}

export function trackContactClick() {
  send('contact_click');
}
