import type { SelectionId } from "./product";

export type OrderStatus = "pending_payment" | "paid" | "preparing" | "shipped" | "cancelled";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export type OrderRecord = {
  orderNumber: string;
  customer: { name: string; phone: string; email: string };
  deliveryAddress: string;
  items: Array<{ selectionId: SelectionId; quantity: number; unitPrice: number }>;
  subtotal: number;
  total: number;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  createdAt: string;
};

// PayTR callback doğrulamasından sonra kalıcı veritabanı ve e-posta sağlayıcısı
// bu sunucu taraflı sözleşme üzerinden bağlanacaktır. Client tarafında secret tutulmaz.
export interface OrderRepository { create(order: OrderRecord): Promise<void> }
export interface OrderNotifier { notifyStore(order: OrderRecord): Promise<void>; confirmCustomer(order: OrderRecord): Promise<void> }
