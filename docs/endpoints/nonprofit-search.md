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

All nonprofit search endpoints should be authenticated with your
[public key](./authentication#public-keys).

## Endpoint reference

### `GET /v0.2/nonprofit/:identifier`

Get data about a nonprofit from the Every.org API.

Authentication: [public key](./authentication#public-keys)

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

Authentication: [public key](./authentication#public-keys)

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

[Click here](../types#causes) to learn more about causes and view the latest
list of valid causes.

_Note this parameter used to be called `tags`, but it was renamed to `causes` to
be more consistent with existing terminology. To ensure backwards compatibility,
the `tags` parameter name will continue to work as expected, but we encourage
you to use / upgrade to `causes` if possible._

### `GET /v0.2/browse/:cause`

This endpoint returns nonprofits associated with a given cause. Use it to let
your users browse through nonprofits focused on a specific topic.

[Click here](../types#causes) to learn more about causes and view the latest
list of valid causes.

Authentication: [public key](./authentication#public-keys)

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

## Response types

Details endpoint returns a JSON response with the following format:

```jsx
{
  "data": {
    "nonprofit": {
      "id": "75924760-cd27-4ecc-a9d4-c0660c08961a",
      "name": "Homeward Pet Adoption Center",
      "primarySlug": "homewardpet",
      "ein": "911526803",
      "isDisbursable": true,
      "description": "Our Homeward Pet's mission is to transform the lives of cats and dogs in need through compassionate medical care, positive behavior training, and successful adoption while building a more humane community.",
      "descriptionLong": null,
      "locationAddress": "WOODINVILLE, WA",
      "nteeCode": "D20",
      "nteeCodeMeaning": {
        "majorCode": "D",
        "majorMeaning": "Animal Related",
        "decileCode": "D20",
        "decileMeaning": "Animal Protection and Welfare"
      },
      "logoCloudinaryId": "faja_profile/yx2bf7ajag59igzhv7uk",
      "coverImageCloudinaryId": "faja_cover/vkevswcstg86vnkf2ssk",
      "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/yx2bf7ajag59igzhv7uk",
      "coverImageUrl": "https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_3840,q_80/faja_cover/vkevswcstg86vnkf2ssk",
      "profileUrl": "https://www.every.org/homewardpet",
      "websiteUrl": "http://www.homewardpet.org"
    },
    "nonprofitTags": [
      {
        "id": "fae0216b-07ce-463d-bdf5-d84ceb51e6a3",
        "tagName": "animals",
        "causeCategory": "ANIMALS",
        "title": "Animals",
        "tagImageCloudinaryId": "animals_hjoysx",
        "tagUrl": "https://www.every.org/animals",
        "tagImageUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/animals_hjoysx"
      }
    ]
  }
}
```

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
      "websiteUrl": "http://www.homewardpet.org",
			"matchedTerms": ["pet"]
		}, ...
  ]
}
```

Browse returns a JSON response with the following format:

```jsx
{
  "nonprofits": [
    {
      "description": "Lil BUB is a one of a kind space cat. Since landing on Earth, she's raised over $1,000,000 for homeless pets nationwide.. Lil BUB’s Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the",
      "ein": "844229672",
      "name": "Lil BUB's Big Fund",
      "profileUrl": "https://www.every.org/lilbubsbigfund",
      "logoUrl": "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/profile_pics/dsor2nxk97p87umlwhvt",
      "coverImageUrl": "https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_3840,q_80/profile_pics/ipxxsfqxtt6skku7vh1z",
      "logoCloudinaryId": "profile_pics/dsor2nxk97p87umlwhvt",
      "slug": "lilbubsbigfund",
      "location": "BLOOMINGTON, IN",
      "websiteUrl": "https://www.goodjobbub.org",
      "tags": [
        "dogs",
        "cats",
        "animals"
      ]
    }...
  ],
  "pagination": {
    "page": 1,
    "pages": 1000,
    "page_size": 10,
    "total_results": 10000
  }
}
```

Please use the `name` and `logoUrl` to show people a realtime preview of
nonprofits they could choose. Please send as many people as possible to give
using the `profileUrl` :)

### Pagination

When using the `browse` route the response will include pagination details with
the following format:

```jsx
{
  "nonprofits": [...],
  "pagination": {
    "page":1,
    "pages":9,
    "page_size":10,
    "total_results":88
  }
}
```

## Rate limits

We strive to keep this API open and available for use without restrictions.
However in order to prevent abuse we apply the following limits to each endpoint
by default:

- Nonprofit details: 100 requests / minute / key
- Search: 500 requests / minute / key
- Browse: 500 requests / minute / key

If you need higher rate limits, please contact us at
[partners@every.org](mailto:partners@every.org).
