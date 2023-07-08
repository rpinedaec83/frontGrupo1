import Culqi from 'culqi';

export default {
	data() {
		return {
			culqi: null,
			publicKey: 'pk_test_7d9f7e4d7f2f0d0d',
			amount: 1000, // Monto en centavos
			currency: 'PEN', // Moneda
			description: 'Descripción del pago',
			email: 'correo@ejemplo.com',
			sourceId: null,
			error: null,
			success: false
		};
	},
	methods: {
		initializeCulqi() {
			this.culqi = Culqi;
			this.culqi.publicKey = this.publicKey;
		},
		createToken() {
			this.culqi.createToken({
				card_number: this.cardNumber,
				cvv: this.cvv,
				expiration_month: this.expirationMonth,
				expiration_year: this.expirationYear,
				email: this.email
			}, (errorCode, result) => {
				if (errorCode) {
					this.error = result.user_message;
				} else {
					this.sourceId = result.id;
					this.chargeCard();
				}
			});
		},
		chargeCard() {
			this.culqi.charge.create({
				amount: this.amount,
				currency_code: this.currency,
				description: this.description,
				email: this.email,
				source_id: this.sourceId
			}, (errorCode, result) => {
				if (errorCode) {
					this.error = result.user_message;
				} else {
					this.success = true;
				}
			});
		}
	},
	mounted() {
		this.initializeCulqi();
	}
};
