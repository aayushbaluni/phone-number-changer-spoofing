
# Call Spoofing using Twilio

It is a service that uses twilio and buyed accounts to change number when you are calling someone which are not real and can be buyed at very cheap rate in Twilio.

## Tech Stack

**Server:** Node, Express, Twilio


## API Reference

#### Make call to a number
```http
  POST /make-call
```
| Form Data | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `toNumber`   | `String`    | phone number to call|

use this request from postman to do a call to the number without revealing your real number.



## Demo

Link will be dilivered soon.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ACCOUNT_ID`

`AUTH_TOKEN`

`FAKE_NUMBER`

`REDIRECT_URI`

`MY_NUMBER`


## Run Locally

Clone the project

```bash
  git clone https://github.com/aayushbaluni/phone-number-changer-spoofing.git
```

Go to the project directory

```bash
  cd phone-number-changer-spoofing
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-aayushbalunis-projects.vercel.app/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ayush-baluni-1469a4241/)

