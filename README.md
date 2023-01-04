> This project is a single-page React app created using Tailwind CSS and Recharts to graph financial market data fetched via [Finnhub's Stock API](https://finnhub.io/docs/api).

## Deployed Site:

### https://danneekim.github.io/react-stock-dashboard/

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [References](#references)

## Installation

### Clone

- Clone this repo to your local machine using `git clone https://github.com/danneekim/react-stock-dashboard.git`

### Local Development Setup

> Update and install required packages
```shell
$ npm install
```

> After installation, in the project directory: 

```shell
$ npm start
```

- Runs the app in development mode at [http://localhost:3000](http://localhost:3000) in the browser.
- The page will reload when changes are made.

## Features

- User is able to search tickers of common stocks.
- User is able to view a graph of a stock's market data.
- User is able select date range of graph's data (1 Day, 1 Week, 1 Month, 1 Year).
- User is able to view a tooltip upon hovering over graph.
- User is able to toggle between light/dark mode.

##### WIP/R&D Features

- Able to view/search crypto graph data.
- Display UI loader while fetching data from API.
- Render default stock currency -- if not USD.
  - Calculate USD conversion of stock value.
- Create a favorites list to save/pin stocks/crypto
  - Create user profile/login/registration
  - Save user preferences via browser's localStorage.
- TBD...

## References

### Finnhub API
- https://finnhub.io/docs/api
- https://finnhub.io/docs/api/symbol-search
- https://finnhub.io/docs/api/company-profile2
- https://finnhub.io/docs/api/quote
- https://finnhub.io/docs/api/stock-candles

## TailWind CSS
- https://tailwindui.com/documentation
- https://tailwindcss.com/docs/installation
- https://tailwindcss.com/docs/dark-mode

### Recharts API
- https://recharts.org/en-US/api
- https://recharts.org/en-US/api/AreaChart
- https://recharts.org/en-US/api/Tooltip

### react-gh-pages
- https://github.com/gitname/react-gh-pages
