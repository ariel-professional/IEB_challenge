# IEB_challenge
# IEB+ Coding Challenge

## About the Challenge

You are building a simplified "Smart Order Router" for a broker.

At a given moment, the broker has a snapshot of multiple trading venues (exchanges / liquidity providers). Each venue can immediately provide up to a certain number of shares for a symbol.

When a client places a market buy order for a specific quantity, the broker wants to optionally split the order across **two different venues** such that the **sum of available shares** from those venues matches the client's requested quantity **exactly**.

This challenge is intentionally simplified:
- We only care about **share quantities** (not price, fees, or partial fills).
- We only use **two** venues.
- You only need to return **one** valid pair if multiple exist.

---

## Problem

Given:
- `venues`: a list of positive integers, where each element represents **shares available** at one venue
- `target`: a positive integer representing the **requested shares** the client wants to buy

Return:
- An array of **exactly two indices** `[i, j]` such that:
    - `i !== j`
    - `venues[i] + venues[j] === target`
- If no solution exists, return an empty array `[]`.

**Important:** The returned values must be **indices** into the input array — **not** the share quantities.

---

## Function Signature

```ts
route(venues: number[], target: number): number[]
```

---

## Constraints and Requirements

### Inputs

- venues contains integer values > 0
- target is an integer value > 0
- venues length may be large (tens of thousands to millions)

### Correctness Rules

- You cannot use the same venue twice (no [k, k])
- If the input contains duplicates, using two different indices is allowed

### Examples

Input:
- venues: [120, 80, 40, 60]
- target: 100

Output:

- [2, 3] because 40 + 60 = 100


This is primarily an algorithmic problem, so large inputs are part of the evaluation.

Good Luck!
