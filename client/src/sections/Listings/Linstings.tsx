import { useMutation, useQuery, gql } from "@apollo/client";
import {
	DeleteListingData,
	DeleteListingVariables,
	ListingsData,
} from "./types";

const LISTINGS = gql`
	query Listings {
		listings {
			id
			title
			image
			address
			price
			numOfGuests
			numOfBeds
			numOfBaths
			rating
		}
	}
`;

const DELETE_LISTINGS = gql`
	mutation DeleteListing($id: ID!) {
		deleteListing(id: $id) {
			id
		}
	}
`;

interface Props {
	title: string;
}

export const Listings = ({ title }: Props) => {
	const { data, loading, error, refetch } = useQuery<ListingsData>(LISTINGS);

	const [
		deleteListing,
		{ loading: deleteListingLoading, error: deleteListingError },
	] = useMutation<DeleteListingData, DeleteListingVariables>(DELETE_LISTINGS);

	const handleDeleteListing = async (id: String) => {
		await deleteListing({ variables: { id } });
		refetch();
	};

	const listings = data ? data.listings : null;

	const listingsList = listings
		? listings.map((listing, i) => {
				return (
					<ul key={i}>
						<li>
							{listing.title}
							<button onClick={() => handleDeleteListing(listing.id)}>
								Delete a Listings!
							</button>
						</li>
					</ul>
				);
		  })
		: null;

	if (loading) return <h2>Loading...</h2>;

	if (error)
		return <h2>Uh oh! Something went wrong - please try again later :( </h2>;

	const deleteListingLoadingMessage = deleteListingLoading ? (
		<h4>Deletion in progress...</h4>
	) : null;

	const deleteListeningErrorMessage = deleteListingError ? (
		<h4>Uh oh! Something went wrong - please try again later :( </h4>
	) : null;

	return (
		<div>
			<h2>{title}</h2>
			{listingsList}
			{deleteListingLoadingMessage}
			{deleteListeningErrorMessage}
		</div>
	);
};
