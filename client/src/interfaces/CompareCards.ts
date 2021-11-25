export interface CompareCards {
    id: string;
    name: string;
	img: string;
	url: string;
	creditcard_information : {
    annual_fee: string; 
	maximum_credit: string; 
	interest: string; 
	effective_interest: string; 
	interest_free: string; 
	bonus: string; 
	insurances: string; 
	concierge_Service: string; 
	card_type: string; 
	age_limit: string; 
	income_requirement: string; 
	Currency_surcharge_abroad: string; 
	withdrawal_fee: string; 
	withdrawal_minimum: string; 
	minimum_payment_amount: string; 
	payment_remarks: boolean | string; 
	avia_fee: string; 
	late_fee: string; 
	interest_on_arrears: string; 
	overdraft_fee: string; 
    }
}