---
sidebar_position: 5
id: fees
name: Fees
slug: /trading/fees
---

# Fees

This chapter covers the fees associated with trading on the platform.

## Token Creation Fees

There's no perceivable fee to create a token. The only cost is the cost of the gas used to deploy the token, for which the user should have a balance of MON in their wallet on the Monad network.

## Buying and Selling Fees

Every time a user buys or sells a token, they pay a fee of 1% of the transaction amount, which is being collected in the following way:

- on BUY orders, a 1% MON value is added to the transaction amount, on top of the desired MON amount
- on SELL orders, a 1% MON value is subtracted from the MON amount the user should receive

## Deployment Fees

Whenever a token bonding curve is filled, a 4 MON fee is being collected before deploying to Uniswap. This amount is being split between the protocol, the creator and the community vault.

- 20% is being collected by the protocol
- 40% is being collected by the creator
- 40% is being collected by the referer of the creator
