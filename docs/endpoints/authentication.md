---
sidebar_position: 2
---

# Authentication

Every.org uses API keys to authenticate requests to our API endpoints. Most
endpoints require a key. For a few read-only endpoints, the key is optional.

API keys can be generated from the
[developer dashboard](https://www.every.org/developer).

## Which endpoints require a key

| Endpoint                                                                                                                         | API key                                 |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [Get details about a nonprofit](./nonprofits.md#get-v02nonprofitidentifier)                                                      | Optional                                |
| [Get details about a fundraiser](./fundraisers.md#get-v02nonprofitnonprofitidentifierfundraiserfundraiseridentifier)             | Optional                                |
| [Get how much a fundraiser has raised](./fundraisers.md#get-v02nonprofitnonprofitidentifierfundraiserfundraiseridentifierraised) | Optional                                |
| [Search nonprofits](./nonprofits.md#get-v02searchsearchterm)                                                                     | Required ([public key](#public-keys))   |
| [Browse nonprofits](./nonprofits.md#get-v02browsecause)                                                                          | Required ([public key](#public-keys))   |
| [Create a fundraiser](./fundraisers.md#post-v02fundraiser)                                                                       | Required ([private key](#private-keys)) |

Requests without a key to an endpoint where the key is optional are rate limited
per IP address. Adding your key helps us identify your requests and apply your
account's rate limits.

When an endpoint requires a key, requests without a valid key return these
errors:

| Request                            | Response                              |
| ---------------------------------- | ------------------------------------- |
| No key, or an empty `apiKey` value | `400` with the body `API key missing` |
| Unknown or disabled public key     | `403` with the body `Forbidden`       |

## Public keys

Public keys are used to query publicly accessible data via endpoints like
[nonprofit search](./nonprofits.md).

Public keys are suitable for use in both server-side and public-facing client
side applications. While they don't need to be kept secret, we reserve the right
to block api keys at any time if there is inappropriate usage.

### Making requests

Endpoints that only require public key authentication will only accept `GET`
request. Your public key should be specified via the `apiKey` url parameter like
so, replacing the placeholder "myPublicApiKey" value with your real one:

#### Usage

##### Javascript fetch

```jsx
fetch("https://partners.every.org/v0.2/search/pets?apiKey=myPublicApiKey");
```

##### curl

```jsx
curl "https://partners.every.org/v0.2/search/pets?apiKey=myPublicApiKey"
```

## Private keys

Private keys are used to query data and make requests that are privileged to
your account. This includes actions like
[creating nonprofit fundraisers](./fundraisers.md#post-v02fundraiser).

Your private key **will only be shown once** on generation, so you must store it
securely right away. Private keys must be stored privately and only used in
non-public environments like an API server. They must be kept out of
publicly-accessible areas like client-side applications or version control.

### Making requests

Requests to endpoints that require private key authentication should be
authenticated using HTTP Basic Auth. The Username can be any public key
associated with your account, and the password should be a private key
associated with your account.

#### Usage

#### Javascript fetch

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
    ...fundraiserInfo,
  },
});
```

##### curl

```jsx
curl -X "https://partners.every.org/v0.2/fundraiser" -H "Content-Type: application/json" -d '{...fundraiserInfo}' -u "publicKey:privateKey"
```
