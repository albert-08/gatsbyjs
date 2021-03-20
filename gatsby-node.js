const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const productTemplate = path.resolve(`src/templates/Product.js`)
    const result = await graphql(`
        query GET_PRICE{
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
        }`
    )

    if(result.errors){
        throw result.errors
    }

    result.data.allStripePrice.edges.forEach(({ node }) => {
        createPage({
            path: `${node.id}`,
            component: productTemplate,
            context: node
        })
    })
}