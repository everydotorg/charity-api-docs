---
sidebar_position: 8
---

# Fundraisers

Our fundraiser API endpoints enable you to query information about existing
nonprofit fundraisers and create new ones.

**Current version:** v0.2

### `GET /v0.2/nonprofit/:nonprofitIdentifier/fundraiser/:fundraiserIdentifier`

Enables retrieving details about an existing nonprofit fundraiser.

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
- raisedOffline: An integer for how much has been raised offline for this
  fundraiser or `null`,
- `currency`: Currently only supports "USD",

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
