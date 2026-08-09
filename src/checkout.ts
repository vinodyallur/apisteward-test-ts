import { PayClient } from "demo-pay";

const client = new PayClient();

export async function checkout(amount: number) {
  /** @deprecated customers.create is deprecated and will be removed in a future release. */
  const customer = await client.customers.create({ email: "a@b.com" });
  return client.charges.create({
    amount,
    currency: "usd",
    payment_method: "tok_visa",
    metadata: { customerId: customer.id },
  });
}