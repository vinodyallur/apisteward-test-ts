import { PayClient } from "demo-pay";

const client = new PayClient();

export async function checkout(amount: number) {
  const customer = await client.customers.create({ email: "a@b.com" });
  return client.charges.create({
    amount,
    currency: "usd",
    metadata: { customerId: customer.id },
  });
}