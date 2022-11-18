import { server } from "../../lib/api"
import { DeleteListingData, DeleteListingVariables, ListingsData } from "./types"

const LISTINGS = `
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
`

const DELETE_LISTINGS = `
    mutation DeleteListing($id: ID!) {
        deleteListing(id: $id) {
            id
        }
    }   
`

interface Props {
    title: String
}

export const Listings = ({ title }: Props) => {
    
    const fetchListings = async () => {
        const { data } = await server.fetch<ListingsData>({ query: LISTINGS })
        console.log(data);
    }

    const deleteListings = async () => {
        const { data } = await server.fetch<DeleteListingData, DeleteListingVariables>({
            query: DELETE_LISTINGS,
            variables: {
            id: "63779287ed4c945b157a74c0"
            }
        })
        console.log(data)
    }

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={fetchListings}>Query Listings!</button>
            <button onClick={deleteListings}>Delete a Listings!</button>
        </div>
        
    )
}
