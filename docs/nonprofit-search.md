---
sidebar_position: 2
---

# Nonprofit Search

The [Every.org](http://every.org) Nonprofit Search API enables you to leverage
our nonprofit databases and search infrastructure in your project.

# Usage

**Current version:** v0.2

We currently have two endpoints:

- Search nonprofits: `GET /v0.2/search/:searchTerm`
- Get details about a nonprofit: `GET /v0.2/nonprofit/:identifier`
  - identifier can be a slug, EIN, or nonprofit ID

## Authentication

To use API endpoints, you need to get a public API key to send along with
requests - please request one by email
[partners@every.org](mailto:partners@every.org) and explaining your use case and
expected traffic.

This can be used client side or server side, the api key can be made public— it
is not a secret, though we reserve the right to block api keys at any time if
there is inappropriate usage.

## Endpoint reference

### `GET /v0.2/nonprofit/:identifier`

Get data about a nonprofit from the Every.org API.

#### JavaScript fetch

```jsx
fetch("https://partners.every.org/v0.2/nonprofit/maps?apiKey=myPublicApiKey");
```

#### curl

```jsx
curl "https://partners.every.org/v0.2/nonprofit/maps?apiKey=myPublicApiKey"
```

### `GET /v0.2/search/:searchTerm`

This is designed for very low latency and high throughput, so we recommend using
it client side and calling on every single key stroke so that as people type
these see nonprofit names appear in realtime. For an example of this suggested
UX in action, check out [https://www.every.org/new](https://www.every.org/new)
or [https://givingmultiplier.org/](https://givingmultiplier.org/).

Once you have an API key, then include it as a query parameter called `apiKey`
like so, replacing the key with your real one:

#### JavaScript fetch

```jsx
fetch("https://partners.every.org/v0.2/search/pets?apiKey=myPublicApiKey");
```

#### curl

```jsx
curl "https://partners.every.org/v0.2/search/pets?apiKey=myPublicApiKey"
```

#### Filtering by tag

You can filter the nonprofits returned by the search endpoint by using the
`tags` parameter.

You can query for multiple tags by joining them with a `,`, i.e. with
`tags=humans,environment`, which will perform an OR filter and return nonprofits
that match either the `humans` or `environment` tags.

Below is the list of valid tags: (last updated 2022-03-23)

```
aapi-led
adoption
afghanistan
animals
athletics
autism
black-led
buddhism
cancer
cats
christianity
climate
conservation
coronavirus
culture
dance
disabilities
disease
dogs
education
environment
filmandtv
food-security
freepress
gender-equality
health
hinduism
housing
humans
hurricane-laura
immigrants
indigenous-led
indigenous-peoples
islam
judaism
justice
latine-led
legal
lgbt
libraries
mental-health
middle-east
museums
music
oceans
poverty
racial-justice
refugees
religion
reproductive-justice
research
science
seniors
space
theater
transgender
ukraine
veterans
visualart
votingrights
water
wildfires
wildlife
women-led
womens-health
youth
```

## Response types

Search returns a JSON response with the following format:

```jsx
{
	"nonprofits": [
		{
			"name": "Homeward Pet Adoption Center",
			"profileUrl": "https://www.every.org/homewardpet",
			"description": "Our Homeward Pet's mission is to transform the lives of cats and dogs in need through compassionate medical care, positive behavior training, and successful adoption while building a more humane community.",
			"ein": "911526803",
			"logoCloudinaryId": "faja_profile/yx2bf7ajag59igzhv7uk",
			"logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/yx2bf7ajag59igzhv7uk",
			"matchedTerms": ["pet"]
		}, ...
  ]
}
```

Please use the `name` and `logoUrl` to show people a realtime preview of
nonprofits they could choose. Please send as many people as possible to give
using the `profileUrl` :)
