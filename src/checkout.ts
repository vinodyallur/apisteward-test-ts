import { PayClient } from "demo-pay";

const p1 = new PayClient();

export async function checkout(p2: number) {
  const p3 = await p1.customers.create({ email: "a@b.com" });
  return p1.charges.create({
    amount,
    currency: "usd",
    source: "tok_visa",
    metadata: { customerId: p3.id },
  });
}
