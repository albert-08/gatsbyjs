import React from 'react'
import { SEO } from '../components'
import {Button, Purchase} from '../styles/components'
import { Link } from 'gatsby'

export default () => {
    return(
        <div>
            <SEO title='Compra Exitosa' />
            <Purchase>
                <h2>Successfull</h2>
                <p>Enjoy it!</p>
                <p>Come back soon!</p>
                <span role='img' aria-label='emoji'>:)</span>
                <Link to='/'>
                    <Button>Go back to home</Button>
                </Link>
            </Purchase>
        </div>
    )
}