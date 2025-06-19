import { randomUUID } from "node:crypto";

export class CreditCard {
	constructor(cardnumber, cardholder, expirationdate, cvv, email) {
		this.id = id ?? randomUUID();
		this.cardnumber = cardnumber;
		this.cardholder = cardholder;
		this.expirationdate = expirationdate;
		this.cvv = cvv;
		this.email = email;
	}
}
