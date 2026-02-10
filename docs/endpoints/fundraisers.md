---
sidebar_position: 8
---

# Fundraisers

Our fundraiser API endpoints enable you to query information about existing
nonprofit fundraisers and create new ones.

**Current version:** v0.2

### `GET /v0.2/nonprofit/:nonprofitIdentifier/fundraiser/:fundraiserIdentifier`

Enables retrieving details about an existing nonprofit fundraiser.

For multi-nonprofit fundraisers, the `:nonprofitIdentifier` is `special-fundraiser`.

Authentication: [public key](./authentication#public-keys)

#### Usage

##### JavaScript fetch

```jsx
fetch(
  "https://partners.every.org/v0.2/nonprofit/wphfund/fundraiser/wphf-giving-tuesday?apiKey=myPublicApiKey"
);
```

##### curl

```jsx
curl "https://partners.every.org/v0.2/nonprofit/wphfund/fundraiser/wphf-giving-tuesday?apiKey=myPublicApiKey"
```

### `GET /v0.2/nonprofit/:nonprofitIdentifier/fundraiser/:fundraiserIdentifier/raised`

Returns details about how much an existing nonprofit fundraiser has raised.

For multi-nonprofit fundraisers, the `:nonprofitIdentifier` is `special-fundraiser`.

Authentication: [public key](./authentication#public-keys)

#### Response format

The response will be a JSON-formatted object with the following properties:

- `currency`: "USD"
- `raised`: Amount raised in cents
- `supporters`: The number of people who have made a donation to this fundraiser
- `goalAmount`: The current goal for the fundraiser in cents
- `goalType`: "CUSTOM" - the fundraiser creator manually set the goal, or
  "AUTOMATIC" - An Every.org-determined goal based on the current amount raised

#### Usage

##### JavaScript fetch

```jsx
fetch(
  "https://partners.every.org/v0.2/nonprofit/wphfund/fundraiser/wphf-giving-tuesday/raised?apiKey=myPublicApiKey"
);
```

##### curl

```jsx
curl "https://partners.every.org/v0.2/nonprofit/wphfund/fundraiser/wphf-giving-tuesday/raised?apiKey=myPublicApiKey"
```

### `POST /v0.2/fundraiser`

Enables creating new fundraisers. The fundraiser creator will be the username
associated with the keys used to authenticate the request.

Authentication: [private key](./authentication#private-keys)

#### Request body

The `POST` request body should be a JSON-formatted object with the following
properties:

- `nonprofitId`: The UUID of the nonprofit being supported by the fundraiser.
- `title`: Fundraiser title
- `description`: Description of the fundraiser or `null` ,
- `startDate`: An ISO-encoded datetime string for when the fundraiser starts or
  `null`,
- `endDate`: An ISO-encoded datetime string for when the fundraiser ends or
  `null`,
- `goal`: An integer for the goal of the fundraiser in cents or `null`,
- `raisedOffline`: An integer for how much has been raised offline for this
  fundraiser or `null`,
- `currency`: Currently only supports "USD",
- `imageBase64`: An image to use as the cover image for the fundraiser. It must be base64 encoded. Optional.

#### Usage

##### JavaScript

```jsx
fetch(`https://partners.every.org/v0.2/fundraiser`, {
  method: HttpMethod.POST,
  headers: {
    "Content-Type": "application/json",
    /* eslint-enable @typescript-eslint/naming-convention */
    Authorization: `Basic ${Buffer.from(`${publicKey}:${privateKey}`).toString(
      "base64"
    )}`,
  },
  body: {
    nonprofitId: "c1c38cb5-16d6-4aca-a949-83c8e7cc1b88",
    title: "Direct Cash Transfers Rule!",
    description: "I'm raising $1,000 this March to support GiveDirectly's use of direct cash transfers to help people in need.",
    startDate: new Date("2023-03-01").toISOString(),
    endDate: new Date("2023-04-01").toISOString(),
    goal: 100000,
    raisedOffline: null,
    currency: "USD",
  },
```

Example base64 encoded image format with every.org's logo:

```
data:image/png;base64,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
```
