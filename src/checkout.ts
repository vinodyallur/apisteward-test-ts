import { PayClient } from "demo-pay";

const c1 = new PayClient();

export async function checkout(c2: number) {
  const c3 = await c1.customers.create({ email: "a@b.com" });
  return c1.charges.create({
    amount,
    currency: "usd",
    source: "tok_visa",
    metadata: { customerId: c3.id },
  });
}
