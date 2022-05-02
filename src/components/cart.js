import React, { useContext, useRef, useEffect } from "react"
import Img from "gatsby-image"
import { css } from "@emotion/react"

import { StoreContext } from "../context/store-context"
import Close from "../images/close.inline.svg"
import Delete from "../images/delete.inline.svg"

const Cart = () => {
  const cartRef = useRef(null)
  const { isOpen, closeCart, checkout, removeLineItems } =
    useContext(StoreContext)
  const formattedLineItems = checkout.lineItems
    .filter(lineItem => lineItem.customAttributes.length === 0)
    .map(lineItem => ({
      ...lineItem,
      addons: checkout.lineItems.filter(
        item =>
          item.customAttributes.length > 0 &&
          item.customAttributes[0].key === "Producto" &&
          item.customAttributes[0].value === lineItem.title
      ),
    }))

  const removeFromCart = async lineItem => {
    await removeLineItems([
      lineItem.id,
      ...lineItem.addons.map(addon => addon.id),
    ])
  }

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const handleClickOutside = event => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      closeCart()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [])

  return (
    <div
      ref={cartRef}
      css={css`
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        background: #fff;
        box-shadow: 0 7px 4px rgba(0, 0, 0, 0.25);
        z-index: 999;
        width: 625px;
        max-width: 100%;
        transform: translateX(100%);
        transition: all 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        &.opened {
          transform: translateX(0);
        }
        .cart-header {
          text-align: center;
          position: relative;
          padding: 95px 65px 50px 65px;
          h3 {
            margin: 0;
          }
          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 15px;
            width: calc(100% - 30px);
            height: 1px;
            background: #000;
          }
          button {
            position: absolute;
            right: 65px;
            top: 95px;
            padding: 0;
            margin: 0;
            background: transparent;
            border: none;
            @media (max-width: 767px) {
              right: 20px;
            }
          }
        }
        .line-items {
          flex: 1;
          overflow-y: scroll;
        }
        .cart-footer {
          margin-top: auto;
          padding: 0 15px;
          @media (max-width: 767px) {
            padding: 0 50px;
          }
        }
      `}
      className={`${isOpen ? "opened" : ""}`}
    >
      <div className="cart-header">
        <h3>CARRITO DE COMPRA</h3>
        <button onClick={closeCart}>
          <Close />
        </button>
      </div>
      <div className="line-items">
        {formattedLineItems.length === 0 && (
          <h4
            css={css`
              text-align: center;
              margin-top: 50px;
            `}
          >
            Agrega productos al carrito
          </h4>
        )}
        {formattedLineItems.map(lineItem => {
          return (
            <div
              key={lineItem.id}
              css={css`
                position: relative;
                &:after {
                  content: "";
                  width: calc(100% - 30px);
                  margin: auto;
                  position: absolute;
                  bottom: 0;
                  left: 15px;
                  height: 1px;
                  background: #000;
                }
              `}
            >
              <div
                css={css`
                  padding: 40px 0;
                  margin-left: 35px;
                  margin-right: 20px;
                  display: flex;
                  align-items: flex-start;
                  @media (max-width: 767px) {
                    flex-wrap: wrap;
                  }
                `}
              >
                <button
                  css={css`
                    background: transparent;
                    margin: 0;
                    padding: 0;
                    border: none;
                  `}
                  onClick={() => removeFromCart(lineItem)}
                >
                  <Delete />
                </button>
                <div
                  css={css`
                    width: 115px;
                    margin-left: 30px;
                    margin-right: 40px;
                    img {
                      width: 100%;
                      height: auto;
                    }
                  `}
                >
                  <img src={lineItem.variant.image.src} />
                </div>
                <div
                  css={css`
                    display: flex;
                    flex: 1;
                    @media (max-width: 767px) {
                      flex: 0 0 100%;
                      padding-left: 48px;
                      font-size: 80%;
                      margin-top: 25px;
                    }
                    h3 {
                      margin: 0;
                    }
                    .addon {
                      margin: 10px 0;
                      @media (min-width: 768px) {
                        margin: 20px 0;
                      }
                    }
                  `}
                >
                  <div
                    css={css`
                      flex: 0 0 50%;
                    `}
                  >
                    <h3>{lineItem.title}</h3>
                    {lineItem.addons.map(addon => (
                      <div key={addon.id} className="addon">
                        {addon.title}
                      </div>
                    ))}
                  </div>
                  <div
                    css={css`
                      flex: 0 0 50%;
                    `}
                  >
                    <h3>${lineItem.variant.price} MXN</h3>
                    {lineItem.addons.map(addon => (
                      <div key={addon.id} className="addon">
                        ${addon.variant.price} MXN
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="cart-footer">
        <div
          css={css`
            border-top: solid 1px #000;
            border-bottom: solid 1px #000;
            padding: 15px 0;
            display: flex;
            margin-bottom: 20px;
            span {
              font-weight: 600;
              flex: 0 0 50%;
              &:last-of-type {
                text-align: right;
              }
            }
          `}
        >
          <span>TOTAL</span>
          <span>${checkout.totalPrice} MXN</span>
        </div>
        <div
          css={css`
            text-align: center;
            margin-bottom: 25px;
            button {
              background: #000;
              color: #fff;
              border: none;
              padding: 15px 25px;
            }
          `}
        >
          <button onClick={handleCheckout}>FINALIZAR PEDIDO</button>
        </div>
        <p
          css={css`
            text-align: center;
            font-style: italic;
            font-size: 80%;
            margin: 0;
            margin-bottom: 25px;
          `}
        >
          Los precios incluyen I.V.A. Los códigos de descuento se ingresan en el
          proceso de pago.
        </p>
      </div>
    </div>
  )
}

export default Cart
