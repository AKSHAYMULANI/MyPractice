import React from 'react'
import { Link, NavLink} from 'react-router-dom'


export function RestaurantCard({name, rating, type, number_of_votes, price_starts_from, id}){
  
    return (
        <>
        <tr data-testid="item">
        <td><NavLink data-testid="name" to={`/restaurants/${id}`} >{name}</NavLink>
            </td>
            <td data-testid="rating">{rating}
            </td>
            <td data-testid="type">{type}
            </td>
            <td data-testid="votes">{number_of_votes}
            </td>
            <td data-testid="price">{price_starts_from}
            </td>
        </tr>
        </>  
    )
}
