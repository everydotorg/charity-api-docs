---
sidebar_position: 4
---

# Donate Link

The Donate link provides an interface for facilitating donations to nonprofits via [Every.org](http://Every.org). Compared to the Every.org [Donate Button](https://www.notion.so/Donate-Button-05acd160c86148efb9836bb5d908705f), the donate link provides more configurability over the donation flow on Every.org as well as more control over the experience in your own website or app.

The basic format of a Donate link is as follows:

`https://www.every.org/<nonprofit-identifier>/donate`

The `nonprofit-identifier` token can be replaced by either the nonprofit’s primary slug (which you might have if you’re using [Nonprofit Search API](https://www.notion.so/Nonprofit-Search-API-731e285581dc47efbe306c59c139d528)) or with the nonprofit’s EIN.

### Parameters

The link can also be customized with the following URL parameters which control various aspects of the donation experience.

`amount` - specify donation amount.

`frequency` - specify donation frequency. Allowed values are `ONCE` or `MONTHLY`

`firstName` - specify user first name.

`lastName` - specify user last name.

`no_exit` - If specified (with any value), then the background of the donation modal will be hidden.

`success_url` - specify a url to which to redirect the user after they have successfully completed their donation.

### Testing

Replace `[www.every.org](http://www.every.org)` with `[staging.every.org](http://staging.every.org)` to create links that work against our staging environment. In the staging environment you can use the following test credit card credentials to verify functionality without spending real money:

Credit card #: 4242 4242 4242 4242

Expiration date: 04/24

CVC code: 242

Zip code: 42424

## Examples

[https://www.every.org/givedirectly/donate](https://www.every.org/givedirectly/donate) - A simple donate link for GiveDirectly.

[https://www.every.org/27-1661997/donate](https://www.every.org/27-1661997/donate) - A donate link for GiveDirectly that uses their EIN as the identifier.

[https://www.every.org/givedirectly/donate?amount=10&frequency=MONTHLY](https://www.every.org/givedirectly/donate?amount=10&frequency=MONTHLY) - A donate link for GiveDirectly that specifies a monthly donation of $10.

[https://www.every.org/givedirectly/donate?no_exit=true&success_url=https%3A%2F%2Fgivingmultiplier.org](https://www.every.org/givedirectly/donate?no_exit=true&success_url=https%3A%2F%2Fgivingmultiplier.org) - A donate link that hides the donation modal background and redirects the donor to givingmultiplier.org when they complete their donation.
