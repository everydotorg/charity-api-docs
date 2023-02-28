---
sidebar_position: 7
---

# Disbursements

If you are interested in using Every.org to disburse donations that you process
via your own interface (instead of going redirecting through an Every.org
[donation link](./donate-link.md)), please reach out to us at
[partners@every.org](mailto:partners@every.org).

## Batch file format

Disbursements batch files should be submitted as JSON files with the following
format:

`<year>_<month>_<date>-<partner_name>-disbursements.json`

```json
[
  {
    // A unique identifier for the donation. Doesn't necessarily need to be a
    // UUID, but it should be something that you can use to uniquely identify
    // the donation within your system.
    "donationId": "82957c6a-3d29-4690-a99f-732731bb3d08",
    // An ISO-formatted date string
    "donationDate": "2022-12-01T01:21:47.415Z",
    // A unique identifier for the donor. Again, doesn't necessarily need to be a
    // UUID, but it should be something that you can use to uniquely identify
    // the donor within your system.
    "donorId": "772e3d02-0ad7-4144-8f5b-45bb90f8c077",
    // Donor's first name
    "firstName": "MacKenzie",
    // Donor's last name
    "lastName": "Scott",
    // Donor's email
    "email": "mscott@gmail.com",
    // Nonprofit's EIN
    "ein": "271661997",
    // Donation amount in cents
    "totalAmount": 1000,
    // Donation amount after fees in cents
    "finalAmount": 950,
    // ID that allows us to connect this donation back to a Stripe charge
    "stripeTransactionId": "ch_tABvI4HmnAhYIs8rMUle9mTn",
    // USD is the only supported currency right now
    "currency": "USD",
    // Donor-provided designation. Max length is 128 characters. You can omit
    // this if none was provided.
    "designation": "Jim's fundraiser",
    // Whether to share donor info through to the recipient nonprofit. Valid
    // values are "NONE" or "NAME_AND_EMAIL"
    "shareDonorInfo": "NAME_AND_EMAIL"
  }, ...
];
```
