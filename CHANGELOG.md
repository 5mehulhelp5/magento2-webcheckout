# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres
to [Semantic Versioning](http://semver.org/).

## 1.2.0
### Added
- Support for bundle products

## 1.1.1
### Fixed
- Shipping assignments on get orders REST endpoint

## 1.1.0
### Added
- Cart Rule Condition for WebCheckout only Discounts

## 0.3.2
### Fixed
- compatibility with Magento below 2.4.7

## 0.3.1
### Added
- extension_attribute values and user agent to Shopgate order REST endpoint

## 0.3.0
### Added
- support for additional options on sku api call
- REST endpoint to fetch statistics about Shopgate orders

## 0.2.2
### Fixed
- Tracking of orders placed using the App

## 0.2.1
### Fixed
- Error when calling id endpoint for products with multiple parent products

## 0.2.0

### Added
- SKU to ID endpoint
- Anonymous token endpoint for a guest user that has no cart
### Changed
- Default login redirect route to point to /checkout instead of cart page
### Fixed
- Support for Safari inApp browser on IOS devices

## 0.1.0

### Added
- API controllers (login, ID to SKU, logger)
- Page controllers
- CSS configurations
- Tests
