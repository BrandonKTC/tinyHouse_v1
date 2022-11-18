interface Listings {
	_id: String;
	title: String;
	image: String;
	address: String;
	price: number;
	numOfGuests: number;
	numOfBeds: number;
	numOfBaths: number;
	rating: number;
}

export interface ListingsData {
	listings: Listings[];
}

export interface DeleteListingData {
	deleteListing: Listings;
}

export interface DeleteListingVariables {
	id: String;
}
