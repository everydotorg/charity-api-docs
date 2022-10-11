---
sidebar_position: 2
---

# Nonprofit Search

The [Every.org](http://every.org) Nonprofit Search API enables you to leverage
our nonprofit databases and search infrastructure in your project.

## Endpoints

**Current version:** v0.2

We currently have three endpoints:

- Get details about a nonprofit: `GET /v0.2/nonprofit/:identifier`
  - identifier can be a slug, EIN, or nonprofit ID
- Search nonprofits: `GET /v0.2/search/:searchTerm`
- Browse nonprofits: `GET /v0.2/browse/:cause`

## Authentication

To use the API endpoints you need to get a public API key to send along with
requests, you can create an API key at [every.org/developer](https://www.every.org/developer).

This can be used client side or server side, the api key can be made public— it
is not a secret, though we reserve the right to block api keys at any time if
there is inappropriate usage.

## Endpoint reference

### `GET /v0.2/nonprofit/:identifier`

Get data about a nonprofit from the Every.org API.

#### Usage

##### JavaScript fetch

```jsx
fetch("https://partners.every.org/v0.2/nonprofit/maps?apiKey=myPublicApiKey");
```

##### curl

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

#### Usage

##### JavaScript fetch

```jsx
fetch("https://partners.every.org/v0.2/search/pets?apiKey=myPublicApiKey");
```

##### curl

```jsx
curl "https://partners.every.org/v0.2/search/pets?apiKey=myPublicApiKey"
```

#### Params

##### Number of results

Use the `take` parameter to specify the number of results to return. Maximum
value is 50.

##### Filter by cause

You can filter the nonprofits returned by the search endpoint by using the
`causes` parameter.

You can query for multiple causes by joining them with a `,`, i.e. with
`causes=humans,environment`, which will perform an OR filter and return
nonprofits that match either the `humans` or `environment` causes.

[Click here](./types#causes) to learn more about causes and view the latest list
of valid causes.

_Note this parameter used to be called `tags`, but it was renamed to `causes` to
be more consistent with existing terminology. To ensure backwards compatibility,
the `tags` parameter name will continue to work as expected, but we encourage
you to use / upgrade to `causes` if possible._

### `GET /v0.2/browse/:cause`

This endpoint returns nonprofits associated with a given cause. Use it to let
your users browse through nonprofits focused on a specific topic.

[Click here](./types#causes) to learn more about causes and view the latest list
of valid causes.

#### Usage

##### JavaScript fetch

```jsx
fetch("https://partners.every.org/v0.2/browse/animals?apiKey=myPublicApiKey");
```

##### curl

```jsx
curl "https://partners.every.org/v0.2/search/animals?apiKey=myPublicApiKey"
```

#### Params

##### Results per page

Use the `take` parameter to specify the number of results to return per page.
Maximum value is 100.

##### Page number

Use the `page` parameter to specify which page of results you want returned.

# Response types

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

## Rate limits

We strive to keep this API open and available for use without restrictions.
However in order to prevent abuse we apply the following limits to each endpoint
by default:

- Nonprofit details: 100 requests / minute / key
- Search: 500 requests / minute / key
- Browse: 500 requests / minute / key

If you need higher rate limits, please contact us at
[partners@every.org](mailto:partners@every.org).
