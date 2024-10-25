import { gql } from "@apollo/client";

export const checkouts = gql`
  query CheckoutList(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $sortBy: CheckoutSortingInput
  ) {
    checkouts(before: $before, after: $after, first: $first, last: $last, sortBy: $sortBy) {
      edges {
        cursor
        node {
          id
          created
          updatedAt
          email
          voucherCode
          channel {
            id
            name
          }
          lines {
            variant {
              product {
                name
              }
              name
            }
          }
          totalPrice {
            gross {
              amount
            }
          }
          shippingPrice {
            gross {
              amount
            }
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

export const channels = gql`
  query ChannelList {
    channels {
      id
      name
    }
  }
`;
