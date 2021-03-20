import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Products } from '../components'

export const query = graphql` 
  query GET_DESCRIPTION{
    allSite{
      edges{
        node{
          siteMetadata{
            description
          }
        }
      }
    }   
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            metadata {
              wear
              img
            }
          }
        }
      }
    }     
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <Products products={data.allStripePrice.edges}/>
  </>
)

export default IndexPage
