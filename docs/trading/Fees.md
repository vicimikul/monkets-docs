---
sidebar_position: 2
id: fees
name: Fees
slug: /docs/trading/fees
---

# Fees

This chapter covers the fees associated with trading on the platform.

## Token Creation Fees

There's no perceivable fee to create a token. The only cost is the cost of the gas used to deploy the token, for which the user should have a balance of ETH in their wallet on the Unichain network.

## Buying and Selling Fees

Every time a user buys or sells a token, they pay a fee of 1% of the transaction amount, which is being collected in the following way:

- on BUY orders, a 1% ETH value is added to the transaction amount, on top of the desired ETH amount
- on SELL orders, a 1% ETH value is subtracted from the ETH amount the user should receive

## Deployment Fees

Whenever a token bonding curve is filled, a 0.33 ETH fee is being collected before deploying to Uniswap. This amount is being split between the protocol, the creator and the community vault.

- 20% is being collected by the protocol
- 40% is being collected by the creator
- 40% is being collected by the referer of the creator
