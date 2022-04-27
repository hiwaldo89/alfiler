import React, { createContext, useState } from "react"
import Client from "shopify-buy"
import fetch from "isomorphic-fetch"

const client = Client.buildClient(
  {
    domain: process.env.GATSBY_SHOPIFY_STORE_URL,
    storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
  },
  fetch
)

const defaultValues = {
  cart: [],
  isOpen: false,
  openCart: () => {},
  closeCart: () => {},
  loading: false,
  onOpen: () => {},
  onClose: () => {},
  addVariantToCart: () => {},
  removeLineItems: () => {},
  updateLineItem: () => {},
  client,
  checkout: {
    lineItems: [],
  },
}

export const StoreContext = createContext(defaultValues)

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout)
  const [loading, setLoading] = useState(false)
  const [didJustAddToCart, setDidJustAddToCart] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const setCheckoutItem = checkout => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id)
    }

    setCheckout(checkout)
  }

  const openCart = () => {
    setIsOpen(true)
  }

  const closeCart = () => {
    setIsOpen(false)
  }

  React.useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser
        ? localStorage.getItem(localStorageKey)
        : null

      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await client.checkout.fetch(
            existingCheckoutID
          )
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout)
            return
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null)
        }
      }

      const newCheckout = await client.checkout.create()
      setCheckoutItem(newCheckout)
    }

    initializeCheckout()
  }, [])

  const addVariantToCart = lineItemsToUpdate => {
    setLoading(true)

    const checkoutID = checkout.id

    // const lineItemsToUpdate = [
    //   {
    //     variantId,
    //     quantity: parseInt(quantity, 10),
    //     customAttributes,
    //   },
    // ]

    return client.checkout
      .addLineItems(checkoutID, lineItemsToUpdate)
      .then(res => {
        setCheckout(res)
        setLoading(false)
        setDidJustAddToCart(true)
        setTimeout(() => setDidJustAddToCart(false), 3000)
        return res
      })
  }

  const removeLineItems = lineItemIds => {
    setLoading(true)

    const checkoutID = checkout.id

    return client.checkout
      .removeLineItems(checkoutID, lineItemIds)
      .then(res => {
        setCheckout(res)
        setLoading(false)
      })
  }

  const updateLineItem = (lineItemID, quantity, customAttributes) => {
    setLoading(true)

    const checkoutID = checkout.id

    const lineItemsToUpdate = [
      { id: lineItemID, quantity: parseInt(quantity, 10), customAttributes },
    ]

    return client.checkout
      .updateLineItems(checkoutID, lineItemsToUpdate)
      .then(res => {
        setCheckout(res)
        setLoading(false)
      })
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addVariantToCart,
        removeLineItems,
        updateLineItem,
        checkout,
        loading,
        didJustAddToCart,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
