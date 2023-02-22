---
sidebar_position: 2
---

# Authentication

Every.org uses API keys to authenticate requests to our API endpoints.

API keys can be generated from the
[developer dashboard](https://www.every.org/developer).

## Public keys

Public keys are required to query publicly accessible data via endpoints like
[nonprofit search](./nonprofit-search.md).

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
