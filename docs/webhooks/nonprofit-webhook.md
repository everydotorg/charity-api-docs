# Nonprofit Donation Webhook

:::tip Learn more

Don't know what a webhook is? Learn more from this [What are webhooks?](https://zapier.com/blog/what-are-webhooks/) blog post.

:::

**The nonprofit donation [webhook](https://www.getvero.com/resources/webhooks) allows a nonprofit to be notified every time a donation is made.**

We will make a POST request to the specified webhook with information about the donation every time a donation is created\*. One common use case for setting such a webhook is to create a custom integration between Every.org and a donor CRM.

- Note: Some types of donations like bank or PayPal take a while to go through, so even if a webhook gets called, the donation may eventually fail.

## Setting up your webhook

You can set your webhook URL by editing your organization's profile at `every.org/<organization-slug>/admin/edit`.

![Screen Shot 2021-08-27 at 2.55.39 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4f25f134-fd2a-401f-95d0-e3282fa9dd02/Screen_Shot_2021-08-27_at_2.55.39_PM.png)

## Data format

The webhook request will be a JSON-formatted string with the following properties:

- `chargeId: <string>`
  - Unique ID to the donation. Matches the “Charge ID” of donations in the nonprofit Admin Dashboard.
- `partnerDonationId: <string | undefined>`
  - The partner donation ID as specified using our [Donate link](https://www.notion.so/Donate-link-df7cf5ba509c40c4928c99f7a4896dde) or [Donate Button](https://www.notion.so/Donate-Button-05acd160c86148efb9836bb5d908705f). `undefined` if not specified.
- `firstName: <string | undefined>`
  - `undefined` if the donor chose not to share this info with the nonprofit.
- `lastName: <string | undefined | null>`
  - `undefined` if the donor chose not to share this info with the nonprofit.
  - `null` if the donor has no associated last name.
- `email: <string | null>`
  - `undefined` if the donor chose not to share this info with the nonprofit.
  - `null` if the donor has no associated email.
- `toNonprofit: <object>`
  - An object with the following properties:
    - `slug: <string>`
      - The slug that identifies the nonprofit. [Every.org](http://every.org) uses the slug to construct the nonprofit's URL as follows: `every.org/<slug>`
    - `ein: <string | undefined>`
      - The nonprofit's EIN. `undefined` if the receiving organization does not have an EIN, as in the case where they are fiscally sponsored.
    - `name: <string>`
      - The nonprofit's displayable name.
- `amount: <string>`
  - Numerical amount in the unit defined by the ISO `currency` code, represented as a string.
- `currency: <string>`
  - Currency code as defined in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
- `frequency: <"Monthly"|"One-time">`
- `donationDate: <string Date>`
  - Date that the donation was initiated

Example request body:

```jsx
{
  "chargeId": "somerandomuuid",
  "partnerDonationId": "somerandomuuid",
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@emailprovider.org",
  "toNonprofit": {
    "slug": "givedirectly",
    "ein": "271661997",
    "name": "Give Directly"
  },
  "amount": "1000.00",
  "currency": "USD",
  "frequency": "Monthly",
	"donationDate": "2022-02-03T05:00:16.175Z"
}
```

If you have any questions about the usage of this webhook, please contact [team@every.org](mailto:team@every.org).
