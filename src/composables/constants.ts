export default function useConstants() {
  const systemPaymentMethods = [
    { id: 1, name: 'MTN Mobile Money' },
    { id: 2, name: 'Airtel Mobile Money' },
    { id: 3, name: 'EFT' },
    { id: 4, name: 'Cash' },
    { id: 5, name: 'Other' },
  ];

  return {
    systemPaymentMethods,
  }
} 