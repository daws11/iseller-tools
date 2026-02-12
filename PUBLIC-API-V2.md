## Page 1

&lt;img&gt;Document icon&lt;/img&gt;

# Public API v2

## Table of Content

*   Table of Content
*   Change Logs
*   Authentication
    *   Using iSeller OAuth Javascript SDK
    *   Using Postman Tools
        *   Authentication (Authorization Code)
        *   Authentication (Client Credentials)
*   GetOrders
    *   Parameters
    *   Sample Usage
    *   Response
        *   Order
        *   StoreOrderRefund
        *   StoreOrderFulfilled
        *   Billing/Shipping
        *   DeviceLocation
        *   OrderDetail
        *   Promotion
        *   Discount
        *   Transaction
        *   InventoryHistory
        *   StoreInventoryModel
        *   StoreInventoryPathModel
        *   RefundDetails
        *   CostOfGoodsSold
        *   MDR
        *   ShippingDetail
        *   ProfitDetails
*   GetOrderSummary
    *   Parameters
    *   Sample Usage
    *   Response
        *   OrderSummary
        *   StoreUnitHpp
        *   StoreInventoryModel
        *   StoreInventoryPathModel
*   GetTransactions
    *   Parameters
    *   Sample Usage
    *   Response
        *   Transaction
*   GetTransactionSummary
    *   Parameters
    *   Sample Usage
    *   Response
        *   TransactionSummary
        *   CustomTransaction
*   GetProducts

Public API v2 &lt;page_number&gt;1&lt;/page_number&gt;

---


## Page 2

Parameters
Sample Usage
Response
StoreProduct
ProductInventory
BuyingPriceModel
ProductIngredients
ProductVariants
ProductCombos
Attribute
Outlet Price
ModifierGroups
Modifiers
GetStoreInfo
Sample Usage
Response
StoreInfo
Outlet
PaymentType
GetRegisterShifts
Parameters
Sample Usage
Response
RegisterShifts

# Change Logs

**1 July 2025**
* Add parameter `fulfillment_status` on GetOrders and GetOrderSummary request body

**25 June 2025**
* Add parameter `image` on GetStoreInfo response body
* Add parameter `images` on GetProducts response body

**10 June 2025**
* Add parameter `commission_fee` at `ProfitDetails` Properties on GetOrders response body

**3 June 2025**
* Add parameter `product_header_id` on GetProducts request body
* Add parameter `type` on GetProducts request body
* Add parameter `product_type` on GetProducts request body
* Add parameter `tags` on GetProducts request body
* Add parameter `description` on GetProducts response body

**28 Mei 2025**
* Add parameter `ModifierGroups` and `Modifiers` on GetProducts request body for `includes` parameter

**19 February 2024**
* Add parameter `need_scale` on GetProducts API response body

**19 December 2024**
* Add parameter `tracking_number` at `ShippingDetail` on GetOrders response body

**5 November 2024**

Public API v2
&lt;page_number&gt;2&lt;/page_number&gt;

---


## Page 3

*   Add `ProfitDetails` on **GetOrders** request body for `includes` parameter

27 August 2024
*   Add parameter `quantity` on GetOrders response body for refunded_orders

28 June 2024
*   Add parameter `Tags` on GetProducts request body for `includes` parameter
*   Add parameter `tags` on GetProducts response body

28 May 2024
*   Add parameter `is_active` on GetProducts API response body

19 March 2024
*   Add parameter `includes` on GetProducts API request body
*   Add parameter `outlet_price` on GetProducts API response body

15 March 2024
*   Add parameter `order_type` on GetOrders API response body

16 February 2024
*   Change type parameter `page` and `page_size` become required on GetProducts request body

25 January 2024
*   Add parameter `page` and `page_size` on GetProducts request body

12 January 2024
*   Add parameter `product_type` at `order_details` on GetOrders response body

29 December 2023
*   Add `serial_numbers` parameter on GetOrders (refunded_orders.units_returned) response body

20 November 2023
*   Add Object (Device Location) on **GetOrders** response body

17 November 2023
*   Add `product_header_id` on GetProducts response body

24 October 2023
*   Add `payment_status` on **GetOrders** request body

24 July 2023
*   Add `serial_number` parameter on GetOrders.Orders.OrderDetails response body
*   Add `attributes` parameter on GetProducts response body

21 December 2022
*   Add `weight_quantity` on **GetOrders**

6 September 2022
*   Add `customer_phone_number` on GetOrders response

14 April 2022
*   Add `UnfulfilledItems` on **GetOrders** request body for `includes` parameter

9 February 2022
*   Add `channel_detail` parameter on **GetOrders** response body

Public API v2
&lt;page_number&gt;3&lt;/page_number&gt;

---


## Page 4

21 December 2021

*   Add `has_next_item` on **GetOrders** response body

23 April 2020

*   Add `product_type` and vendor on **GetProducts** response body

22 September 2020

*   Add List of `ProductCombos` on **GetProducts**

30 July 2020

*   Add parameter `modified_after` on **GetProducts**

22 July 2020

*   Add List of `ProductVariants` on **GetProducts**

19 May 2020

*   Add List of Object (ShippingDetail) on **GetOrders**

30 April 2020

*   Add List of Object (MDR) on **Transactions.**
*   Add parameter `buying_price` (average buying price) on **GetProducts**

27 April 2020

*   Add `order_id` in parameter request on **GetOrders API**

3 April 2020

*   Add List of Object (RefundDetails) in `StoreOrderRefund` on **GetOrders API**
*   Add List of Object (CostOfGoodsSold) in `OrderDetails` on **GetOrders API**

26 March 2020

*   Add parameter `product_modifier_sku` in `OrderDetails` and parameter `product_sku` in List of Object (InventoryHistory) on **GetOrders API**

26 February 2020

*   Add List of Product `Ingredients` on **GetProduct API**

# Authentication

To gain access to iSeller Public API you need to obtain `access_token` and `resource_url`.
The following steps shows you how to obtain the `access_token` and `resource_url`.

1.  Direct the user to

    https://isellershop.com/oauth/authorize?response_type=code&client_id={APP_CLIENT_ID}&redirect_uri={APP_REDIRECT_URI}&state={STATE}.

This will direct user to a grant page where user will need to grant access request to your app. After the grant process is done, iSeller will redirects the request to specified `APP_REDIRECT_URI` for next process that will be handled in your app.

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Optional</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>response_type</td>
<td>String</td>
<td>N</td>
<td>Value must set to code</td>
</tr>
</tbody>
</table>

Public API v2
&lt;page_number&gt;4&lt;/page_number&gt;

---


## Page 5

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>client_id</code></td>
      <td>String</td>
      <td>N</td>
      <td>A unique string issued by iSeller to you when your app was registered. This value represents your app identifier. (e.g 81c80552094c44a1ab9afaba06dee032)</td>
    </tr>
    <tr>
      <td><code>redirect_id</code></td>
      <td>String</td>
      <td>N</td>
      <td>Redirect url that has been specified on your app. iSeller will redirect the request to this url after grant process is done. The redirect url must be an absolute uri (e.g https://your.website/oauth/callback)</td>
    </tr>
    <tr>
      <td><code>state</code></td>
      <td>String</td>
      <td>Y</td>
      <td>An opaque value used by the client to maintain state between the request and callback. iSeller will includes this value when redirecting the user-agent back to the client. The parameter used for preventing cross-site request forgery.</td>
    </tr>
  </tbody>
</table>

2. Once re-directed to your specified <code>APP_REDIRECT_URI</code> you'll get something as follows

https://your.website/oauth/callback?
code=45b376b1079b4a598e3bb3ba2e8fad533d06a6caaf964bb89edbed3439bb4917&state={STATE}

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Code</td>
      <td>String</td>
      <td>The issued authorization code. This value will be used to obtain access_token and resource_url in the next step (eg: 45b376b1079b4a598e3bb3ba2e8fad533d06a6caaf964bb89edbed3439bb4917)</td>
    </tr>
    <tr>
      <td>State</td>
      <td>String</td>
      <td>The exact value that has been passed on previous step. Only exist when state was specified on previous step.</td>
    </tr>
  </tbody>
</table>

3. Requests an access token by making a post request to https://isellershop.com/oauth/token with the following parameters.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>grant_type</code></td>
      <td>String</td>
      <td>N</td>
      <td>Value must set to <strong>authorization_code</strong></td>
    </tr>
    <tr>
      <td><code>code</code></td>
      <td>String</td>
      <td>N</td>
      <td>A unique string issued by iSeller to you when your app was registered. This value represents your app identifier. (e.g 81c80552094c44a1ab9afaba06dee032)</td>
    </tr>
    <tr>
      <td><code>redirect_uri</code></td>
      <td>String</td>
      <td>N</td>
      <td>Redirect url that has been specified on your app. iSeller will redirect the request to this url after grant process is done. The redirect url must be an absolute uri (e.g https://your.website/oauth/callback)</td>
    </tr>
    <tr>
      <td><code>client_id</code></td>
      <td>String</td>
      <td>N</td>
      <td>An opaque value used by the client to maintain state between the request and callback. iSeller will includes this value when redirecting the user-agent back to the client. The parameter used for preventing cross-site request forgery.</td>
    </tr>
    <tr>
      <td><code>client_secret</code></td>
      <td>String</td>
      <td>N</td>
      <td>A unique string issue by iSeller to you when your app was registered. (e.g secret-CuVuh+4ZBjkVgrqLZVEpAi3c3bpYMEwUL)</td>
    </tr>
  </tbody>
</table>

This request will return you the access_token and resource_url along with other oauth info as follows.

```json
{
  "access_token": "7YXNsIg5bMjWwLu1C5oLF7WRu4nTm762mRTVDENMnM4w9H8adYq9vHRVKtWC7..",
  "token_type": "bearer",
  "expires_in": 1209599,
  "refresh_token": "qRifojWTvY6E4m-NphFwCjt4_2ejD_ArcXV5_DUF..",
  "resource_url": "https://{storename}.isellershop.com"
}
```

4. You can than use access the iSellerApi from the <code>resource_url</code>, e.g https://storename.isellershop.com/api/v1/version by adding the

Public API v2
&lt;page_number&gt;5&lt;/page_number&gt;

---


## Page 6

access_token to authorization header as follows.

<table>
  <tr>
    <td><b>Header Key</b></td>
    <td><b>Value</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>Bearer<br>7YXNslg5bMjWwLu1C5oLF7WRu4nTm762mRTVDENMnM4w9H8adYq9vHRVKtWC7...</td>
    <td>Value must be set to Bearer { access_token }.</td>
  </tr>
</table>

5. If access token has expired, you could get new access token by making a post request to https://isellershop.com/oauth/token with the following parameters.

<table>
  <tr>
    <td><b>Parameter</b></td>
    <td><b>Type</b></td>
    <td><b>Optional</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>grant_type</td>
    <td>String</td>
    <td>N</td>
    <td>Value must be set to refresh_token</td>
  </tr>
  <tr>
    <td>refresh_token</td>
    <td>String</td>
    <td>N</td>
    <td>The refresh_token received along with the access_token (e.g qRifojWTvY6E4m-NphFwCjt4_2ejD_ArcXV5_DUF...)</td>
  </tr>
  <tr>
    <td>client_id</td>
    <td>String</td>
    <td>N</td>
    <td>A unique string issue by iSeller to you when your app was registered. (e.g 81c80552094c44a1ab9afaba06dee032)</td>
  </tr>
  <tr>
    <td>client_secret</td>
    <td>String</td>
    <td>N</td>
    <td>A unique string issue by iSeller to you when your app was registered. (e.g secret-CuVuh+4ZBjkVgrqLZVEpAi3c3bpYMEwUL)</td>
  </tr>
</table>

This request will return result will be the same as request access token result in step 3.

Related resources: https://tools.ietf.org/html/rfc6749

# Using iSeller OAuth Javascript SDK

Seller OAuth Javascript SDK is iseller UI/UX standard of how iseller integration should be perform. You could get iseller oauth sdk from: https://isellershop.com/assets/js/iseller.oauth.js.

How to use

1. Include iSeller OAuth SDK in your integration webpage.
2. Call Javascript function iSellerOAuth.Open in which will open iSeller's OAuth Grant Access Dialog.

```javascript
var clientId = "81c80552094c44a1ab9afaba06dee032";
var clientRedirectUrl = "https://your.website/oauth/callback";
var state = "additional_info";
var callback = function(data)
{
 alert (data);
}
iSellerOAuth.Open(clientId, clientRedirectUrl, state, callback); //state and callback is optional
//iSellerOAuth.Open(clientId, clientRedirectUrl);
```

Show iSeller's OAuth Grant Dialog that will guide user to grant your application access to his/her store.

<table>
  <tr>
    <td><b>Parameter</b></td>
    <td><b>Type</b></td>
    <td><b>Optional</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>clientid</td>
    <td>String</td>
    <td>N</td>
    <td>A unique string issue by iSeller to you when your app was registered. (e.g 81c80552094c44a1ab9afaba06dee032)</td>
  </tr>
  <tr>
    <td>ClientRedirectUrl</td>
    <td>String</td>
    <td>N</td>
    <td>Redirect url that has been specified on your app.</td>
  </tr>
  <tr>
    <td>state</td>
    <td>String</td>
    <td>N</td>
    <td>An opaque value used by the client to maintain state between the request and callback.</td>
  </tr>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;6&lt;/page_number&gt;

---


## Page 7

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>callback</td>
      <td>String</td>
      <td>N</td>
      <td>Function that will be called when iSeller oauth grant dialog was closed. The first parameter of this function is data passed when close oauth dialog.</td>
    </tr>
  </tbody>
</table>

3. After user grant access to your app, iSeller will redirects the request to specified clientRedirectUrl for next process that will be handled in your app. Please follow the authentication step #2 and so on from the Authentication section above.

4. After the authentication process is done and you got the acces token. You can close the dialog from your clientRedirectUrl using the following code.

```javascript
window.parent.iSellerOAuth.Close();
```

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td>Any</td>
      <td>Y</td>
      <td>Data that will be passed to callback function that is specify on iSellerOAuth.Open.</td>
    </tr>
  </tbody>
</table>

# Using Postman Tools

For testing purposes, alternatively you can use Postman tools

*   https://www.getpostman.com/

Using postman you can perform the authentication process as follows

## Authentication (Authorization Code)

1.  Change the Authorization Type to OAuth 2.0

&lt;img&gt;Postman Screenshot showing the Authorization tab with "OAuth 2.0" selected under "Type". The interface shows "Params", "Headers (7)", "Body", "Pre-request Script", "Tests", "Settings", "Cookies", and "Response" tabs. The "Type" dropdown is open, displaying options like "Inherit auth from parent", "No Auth", "API Key", "Bearer Token", "JWT Bearer", "Basic Auth", "Digest Auth", "OAuth 1.0", "OAuth 2.0", "Hawk Authentication", "AWS Signature", "NTLM Authentication [Beta]", and "Akamai EdgeGrid". The main area displays "This request does not use any authorization. Learn more about authorization" and "Enter the URL and click Send to get a response", with an illustration of an astronaut launching a rocket.&lt;/img&gt;

2.  Create new access token by clicking Get New Access Token

<footer>Public API v2</footer>&lt;page_number&gt;7&lt;/page_number&gt;

---


## Page 8

Overview Authorization Pre-request Script Tests Variables Runs

This authorization method will be used for every request in this collection. You can override this by specifying one in the request.

Type OAuth 2.0
The authorization data will be automatically generated when you send the request. Learn more about authorization
Add auth data to Request Headers

3. Specify request token info

<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Callback URL</td>
<td>Redirect url that has been specified on your app. iSeller will redirect the request to this url after grant process is done. The redirect url must be an absolute uri (e.g https://your.website/oauth/callback)</td>
</tr>
<tr>
<td>Auth URL</td>
<td>https://isellershop.com/oauth/authorize</td>
</tr>
<tr>
<td>Access Token URL</td>
<td>https://isellershop.com/oauth/token</td>
</tr>
<tr>
<td>Client ID</td>
<td>A unique string issue by iSeller to you when your app was registered. (e.g 81c80552094c44a1ab9afaba06dee032)</td>
</tr>
<tr>
<td>Client Secret</td>
<td>A unique string issue by iSeller to you when your app was registered. (e.g secret-CuVuh+4ZBjkVgrqLZVEpAi3c3bpYMEwUL)</td>
</tr>
</tbody>
</table>

Params Authorization Headers (7) Body Pre-request Script Tests Settings Cookies

Configure New Token

Token Name ____________

Grant Type Authorization Code

Callback URL ⓘ ____________

Auth URL ⓘ https://isellershop.com/oauth/authorize

Access Token URL ⓘ https://isellershop.com/oauth/token

Client ID ⓘ 81c80552094c44a1ab9afaba06dee032 ⚠️

Client Secret ⓘ secret-81c80552094c44a1ab9afaba06d ⚠️

Scope ⓘ e.g. read:org

State ⓘ ____________

Client Authentication ⓘ Send client credentials in body

> Advanced

Clear cookies ⓘ

Get New Access Token

4. Login to the iSeller store using store credential

Public API v2 &lt;page_number&gt;8&lt;/page_number&gt;

---


## Page 9

&lt;img&gt;Screenshot of Postman showing the "Welcome to iSeller - Please login" window with fields for Email and Password, and a "Login" button.&lt;/img&gt;

5. Grant access to the app

&lt;img&gt;Screenshot of Postman showing the "Authorize App" window with a large arrow pointing right, a "Grant" button, and a "BeOne (v10) by BeOne" section.&lt;/img&gt;

6. Set Add token to Header then "Use Token"

Public API v2
&lt;page_number&gt;9&lt;/page_number&gt;

---


## Page 10

<header>Authentication (Client Credentials)</header>

Access token is needed to make request to the API. The authentication process using Postman as follows:

1. Change the Authorization Type to OAuth 2.0

&lt;img&gt;Screenshot of Postman window showing the "Manage Access Tokens" dialog with a list of tokens on the left and detailed information about a selected token on the right. The selected token has fields like Token Name, Access Token, Token Type (bearer), and expires_in (1209599). Below this, the main Postman request window is visible, displaying a GET request with URL, Headers tab active, and various configuration options including "Current Token", "Token", "Header Prefix", "Auto-refresh token", "Share token", and "Configure New Token" sections.&lt;/img&gt;

<footer>Public API v2</footer>

&lt;page_number&gt;10&lt;/page_number&gt;

---


## Page 11

&lt;img&gt;A screenshot of Postman's Authorization tab. The "Type" dropdown is open, showing options like No Auth, API Key, Bearer Token, JWT Bearer, Basic Auth, Digest Auth, OAuth 1.0, OAuth 2.0, Hawk Authentication, AWS Signature, NTLM Authentication [Beta], and Akamai EdgeGrid. To the right, there's a section with a placeholder astronaut holding a rocket, and text that says "Enter the URL and click Send to get a response". At the top, there are tabs for Params, Authorization (highlighted), Headers (7), Body, Pre-request Script, Tests, Settings, and Cookies.&lt;/img&gt;

2. Set Add token to Header

&lt;img&gt;A screenshot of Postman's Authorization tab under a collection view. The "Type" dropdown is set to OAuth 2.0. Below it, there's a note stating that this authorization method will be used for every request in this collection, but can be overridden per request. There's also a section labeled "Add auth data to" with a dropdown currently set to Request Headers.&lt;/img&gt;

3. Create new access token by clicking Get New Access Token

4. Specify request token info, then click request token

<table>
<thead>
<tr>
<th>Grant Type</th>
<th>Client Credentials</th>
</tr>
</thead>
<tbody>
<tr>
<td>Access Token URL</td>
<td>https://isellershop.com/oauth/token</td>
</tr>
<tr>
<td>Client ID</td>
<td>A unique string issue to you when your app was registered.</td>
</tr>
<tr>
<td>Client Secret</td>
<td>A unique string issue to you when your app was registered.</td>
</tr>
</tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;11&lt;/page_number&gt;

---


## Page 12

5. Use token

&lt;img&gt;Postman Screenshot showing "MANAGE ACCESS TOKENS" dialog with "Use Token" button highlighted.&lt;/img&gt;

Public API v2 &lt;page_number&gt;12&lt;/page_number&gt;

---


## Page 13

&lt;img&gt;Screenshot of Postman interface showing the Authorization tab with fields for Type (OAuth 2.0), Add authorization data to (Request Header), Header Prefix, Auto-refresh token toggle, Share token toggle, Configure New Token button, and a Token Name input field. The Token section displays a list of tokens.&lt;/img&gt;


# GetOrders

https://storename.isellershop.com/api/v2/GetOrders

Use this call to get orders data for particular set of filter. By default it will only retrieve the general info of the orders. If necessary you can also include details information such as :

*   OrderDetails
*   Transactions
*   PromotionDetails
*   DiscountDetails
*   TrackInventory
*   MDR
*   ShippingDetail
*   UnfulfilledItems
*   ProfitDetails

## Parameters

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Optional</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>time_zone</td>
<td>Integer</td>
<td>N</td>
<td>Time zone for the given date and also data date conversion. Note that iSeller data stored in UTC +0 time zone.</td>
</tr>
<tr>
<td>created_after</td>
<td>DateTime</td>
<td>N</td>
<td>Limits the returned orders to those created after or on the specified date, given ISO 8601 date format. (e.g. 2017-11-20T10:00:00) without the time zone info</td>
</tr>
</tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;13&lt;/page_number&gt;

---


## Page 14

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>created_before</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned orders to those created before or on the specified date, given ISO 8601 date format without the time zone info.</td>
    </tr>
    <tr>
      <td>modified_after</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned orders to those modified after or on the specified date, given ISO 8601 date format without the time zone info.</td>
    </tr>
    <tr>
      <td>modified_before</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned orders to those modified before or on the specified date, given ISO 8601 date format without the time zone info.</td>
    </tr>
    <tr>
      <td>sort</td>
      <td>String</td>
      <td>Y</td>
      <td>Allows to choose the sorting column. Possible values are CreatedDate and ModifiedDate .</td>
    </tr>
    <tr>
      <td>sort_direction</td>
      <td>String</td>
      <td>Y</td>
      <td>Specify the sorting type. Possible values are ASC and DESC.</td>
    </tr>
    <tr>
      <td>page</td>
      <td>Integer</td>
      <td>Y</td>
      <td>Index of the page that going to be loaded.</td>
    </tr>
    <tr>
      <td>page_size</td>
      <td>Integer</td>
      <td>Y</td>
      <td>Size of the page that going to be loaded.</td>
    </tr>
    <tr>
      <td>includes</td>
      <td>String</td>
      <td>Y</td>
      <td>OrderDetails | Transactions | DiscountDetails | PromotionDetails | TrackInventory | MDR | ShippingDetail | UnfulfilledItems | ProfitDetails</td>
    </tr>
    <tr>
      <td>customer_id</td>
      <td>Guid</td>
      <td>Y</td>
      <td>Limit the returned orders to those belong to specified CustomerId .</td>
    </tr>
    <tr>
      <td>outlet_id</td>
      <td>Guid</td>
      <td>Y</td>
      <td>Limit the returned orders to those belong to specified OutletId .</td>
    </tr>
    <tr>
      <td>order_id</td>
      <td>Guid</td>
      <td>Y</td>
      <td>Limit the returned order to those belong to specified OrderId .</td>
    </tr>
    <tr>
      <td>payment_status</td>
      <td>String</td>
      <td>Y</td>
      <td>Limit the returned order to those belong to specified PaymentStatus .<br><br>Value:<br>- paid<br>- partially_paid<br>- refunded<br>- partially_refunded<br>- pending</td>
    </tr>
    <tr>
      <td>fulfillment_status</td>
      <td>String</td>
      <td>Y</td>
      <td>Limit the returned order to those belong to specified FulfillmentStatus .<br><br>Value:<br>- fulfilled<br>- partial<br>- none</td>
    </tr>
  </tbody>
</table>

## Sample Usage

&lt;img&gt;A screenshot of a Postman request window. The top bar shows "HTTP" and "PubliAPI / GetOrders". Below that, a dropdown menu shows "POST" selected, with the URL "https://storename.isellershop.com/api/v2/GetOrders" entered. To the right of the URL, there's a "Save" button and a "Send" button. Below the URL, tabs are visible: "Params", "Authorization", "Headers (10)", "Body (x-www-form-urlencoded)", "Pre-request Script", "Tests", and "Settings". The "Body (x-www-form-urlencoded)" tab is highlighted. Under this tab, two rows are shown:
- A checkbox next to "created_after" is checked.
- A checkbox next to "time_zone" is checked.
- An empty row below them has "Key" and "Value" columns, but no data is entered.&lt;/img&gt;

## Response

Public API v2 &lt;page_number&gt;14&lt;/page_number&gt;

---


## Page 15

Body | Cookies | Headers (7) | Test Results
--- | --- | --- | ---
Pretty | Raw | Preview | Visualize | JSON | ⭐ |

Status: 200 OK Time: 2.06 s Size: 336.83 KB &lt;img&gt;Save as Example icon&lt;/img&gt; Save as Example &lt;img&gt;Three dots icon&lt;/img&gt;

```json
[
  {
    "count": 200,
    "orders": [
      {
        "external_customer_id": null,
        "order_id": "7c8ff6f8-306c-4475-aac1-57f7f2bcd080",
        "order_reference": "#3123-1001",
        "channel": "pos",
        "channel_detail": null,
        "marketplace_account": null,
        "order_date": "2023-01-02 02:53:37",
        "closed_date": "2023-01-02 02:54:20",
        "status": "completed",
        "payment_status": "paid",
        "fulfillment_status": "fulfilled",
        "notes": "",
        "processing_method": "checkout",
        "cancel_date": null,
        "cancel_reason": "",
        "outlet_id": "02d73109-e313-4190-a744-853a6d99941e",
        "outlet_name": "Main Outlet",
        "outlet_code": "HO",
        "register_id": "50dcc339-b9cd-4b97-9fdf-a013c7a649d1",
        "register_name": "Register #3123 - samsung SM-G930F",
        "customer_id": null,
        "customer_first_name": null,
        "customer_last_name": null
      }
    ]
  }
]
```

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>count</td>
<td>Integer</td>
<td>Total orders retrieved by the process</td>
</tr>
<tr>
<td>orders</td>
<td>List of Object<br/>(Order)</td>
<td>List of order requested.</td>
</tr>
<tr>
<td>refunded_orders</td>
<td>List of Object<br/>(StoreOrderRefund)</td>
<td>List of refunded orders. Available if TrackInventory is included in request parameter.</td>
</tr>
<tr>
<td>fulfillments</td>
<td>List of Object<br/>(StoreOrderFulfilled)</td>
<td>List of fulfilled orders. Available if TrackInventory is included in request parameter</td>
</tr>
<tr>
<td>has_next_item</td>
<td>Boolean</td>
<td>Notes:<br/>- If<br/><strong>true</strong>, any data in next page<br/>- If<br/><strong>false</strong>, all data has been retrieved</td>
</tr>
<tr>
<td>erroe_message</td>
<td>String</td>
<td>System error message when error occured during process.</td>
</tr>
<tr>
<td>status</td>
<td>Boolean</td>
<td>Status of the request, false means there's an error during the execution process.</td>
</tr>
<tr>
<td>time</td>
<td>String</td>
<td>The response time</td>
</tr>
</tbody>
</table>

## Order

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>external_customer_id</td>
<td>String</td>
<td>The external customer id associated to this order.</td>
</tr>
<tr>
<td>order_id</td>
<td>Guid</td>
<td>Uniqueidentifier of the order assigned by the system.</td>
</tr>
<tr>
<td>order_reference</td>
<td>String</td>
<td>The human-readable order number or reference.</td>
</tr>
<tr>
<td>channel</td>
<td>String</td>
<td>Order channel that indicates from which channel this order is created.<br/><br/><strong>pos</strong> → If the order created from Point of Sales<br/><br/><strong>web</strong> → If the order created from Online Store<br/><br/><strong>marketplace</strong> → If the order created from Marketplace<br/><br/><strong>food_delivery</strong> → If the order created from Food Delivery</td>
</tr>
</tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;15&lt;/page_number&gt;

---


## Page 16

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>channel_detail</td>
      <td>String</td>
      <td>Detail channel for Marketplace and Food Delivery channel.<br><br>Value is:<ul><li><b>tokopedia</b></li><li><b>shopee</b></li><li><b>lazada</b></li><li><b>bilibili</b></li><li><b>tiktok</b></li><li><b>grabfood</b></li><li><b>gofood</b></li></ul></td>
    </tr>
    <tr>
      <td>order_date</td>
      <td>Date Time</td>
      <td>Date and time when the order was placed.</td>
    </tr>
    <tr>
      <td>closed_date</td>
      <td>Date Time</td>
      <td>Date and time when the order was closed.</td>
    </tr>
    <tr>
      <td>status</td>
      <td>String</td>
      <td>Status of the order.<br><br><b>draft</b> → The order is still on going<br><br><b>reserved</b> → The order is a reservation order<br><br><b>completed</b> → The order already completed<br><br><b>void</b> → The order is voided<br><br>Payment status of the order.<br><br><b>paid</b> → Order already fully paid<br><br><b>partially_paid</b> → Order is partially paid<br><br><b>refunded</b> → Order is fully refunded<br><br><b>partially_refunded</b> → Order is partially refunded<br><br><b>voided</b> → Order is voided<br><br><b>pending</b> → Order has not been paid<br><br>Order fulfillment status.<br><br><b>fulfilled</b> → All items in the order already fulfilled<br><br><b>partial</b> → Some of the items in the order already fulfilled<br><br><b>none</b> → None of the items in the order already fulfilled</td>
    </tr>
    <tr>
      <td>payment_status</td>
      <td>String</td>
      <td>Payment status of the order.<br><br><b>paid</b> → Order already fully paid<br><br><b>partially_paid</b> → Order is partially paid<br><br><b>refunded</b> → Order is fully refunded<br><br><b>partially_refunded</b> → Order is partially refunded<br><br><b>voided</b> → Order is voided<br><br><b>pending</b> → Order has not been paid<br><br>Order fulfillment status.<br><br><b>fulfilled</b> → All items in the order already fulfilled<br><br><b>partial</b> → Some of the items in the order already fulfilled<br><br><b>none</b> → None of the items in the order already fulfilled</td>
    </tr>
    <tr>
      <td>fulfillment_status</td>
      <td>String</td>
      <td>Order fulfillment status.<br><br><b>fulfilled</b> → All items in the order already fulfilled<br><br><b>partial</b> → Some of the items in the order already fulfilled<br><br><b>none</b> → None of the items in the order already fulfilled</td>
    </tr>
    <tr>
      <td>notes</td>
      <td>String</td>
      <td>Additional notes attach to the order.</td>
    </tr>
    <tr>
      <td>processing_method</td>
      <td>String</td>
      <td>Order processing method.</td>
    </tr>
    <tr>
      <td>cancel_date</td>
      <td>Date Time</td>
      <td>Date and time when the order is cancelled. Null if the order is never cancelled.</td>
    </tr>
    <tr>
      <td>cancel_reason</td>
      <td>String</td>
      <td>Reason of cancellation.</td>
    </tr>
    <tr>
      <td>outlet_id</td>
      <td>Guid</td>
      <td>Uniqueidentifier of the outlet associated to this order</td>
    </tr>
    <tr>
      <td>outlet_name</td>
      <td>String</td>
      <td>The outlet name associated to this order.</td>
    </tr>
    <tr>
      <td>register_id</td>
      <td>Guid</td>
      <td>Uniqueidentifier of the register associated to this order.</td>
    </tr>
    <tr>
      <td>register_name</td>
      <td>String</td>
      <td>The register name associated to this order.</td>
    </tr>
    <tr>
      <td>customer_id</td>
      <td>Guid</td>
      <td>Uniqueidentifier of the customer associated to this order.</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;16&lt;/page_number&gt;

---


## Page 17

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>customer_first_name</td>
      <td>String</td>
      <td>Customer's first name associated to this order. Null if no customer associated to this order.</td>
    </tr>
    <tr>
      <td>customer_last_name</td>
      <td>String</td>
      <td>Customer's last name associated to this order. Null if no customer associated to this order.</td>
    </tr>
    <tr>
      <td>customer_phone_number</td>
      <td>String</td>
      <td>Customer's phone number associated to this order. Null if no customer associated to this order.</td>
    </tr>
    <tr>
      <td>customer_email</td>
      <td>String</td>
      <td>Customer's email associated to this order. Null if no customer associated to this order.</td>
    </tr>
    <tr>
      <td>server_id</td>
      <td>Guid</td>
      <td>Uniqueidentifier of the server associated to this order.</td>
    </tr>
    <tr>
      <td>server_first_name</td>
      <td>String</td>
      <td>Server's first name associated to this order. Null if no server associated to this order.</td>
    </tr>
    <tr>
      <td>server_last_name</td>
      <td>String</td>
      <td>Server's last name associated to this order. Null if no server associated to this order.</td>
    </tr>
    <tr>
      <td>cashier_id</td>
      <td>Guid</td>
      <td>Uniqueidentifier of the cashier associated to this order.</td>
    </tr>
    <tr>
      <td>cashier_first_name</td>
      <td>String</td>
      <td>Cashier's first name associated to this order. Null if no cashier associated to this order.</td>
    </tr>
    <tr>
      <td>cashier_last_name</td>
      <td>String</td>
      <td>Cashier's last name associated to this order. Null if no cashier associated to this order.</td>
    </tr>
    <tr>
      <td>currency</td>
      <td>String</td>
      <td>Currency used in this order.</td>
    </tr>
    <tr>
      <td>total_order_amount</td>
      <td>Double</td>
      <td>Total order amount (base price / gross amount).</td>
    </tr>
    <tr>
      <td>discount_percentage</td>
      <td>Double</td>
      <td>Discount percentage value, available if the order has apply percentage base discount</td>
    </tr>
    <tr>
      <td>total_discount_amount</td>
      <td>Double?</td>
      <td>Total discount amount associated to this order.</td>
    </tr>
    <tr>
      <td>total_promotion_amount</td>
      <td>Double?</td>
      <td>Total promotion amount associated to this order.</td>
    </tr>
    <tr>
      <td>subtotal</td>
      <td>Double?</td>
      <td>Sub total amount of the order.</td>
    </tr>
    <tr>
      <td>total_tax_amount</td>
      <td>Decimal</td>
      <td>Total tax amount associated to this order.</td>
    </tr>
    <tr>
      <td>total_additional_final_amount</td>
      <td>Decimal</td>
      <td>Total additional charges amount placed at before final total.</td>
    </tr>
    <tr>
      <td>total_additional_subtotal_amount</td>
      <td>Decimal</td>
      <td>Total additional charges amount placed at before sub total.</td>
    </tr>
    <tr>
      <td>total_additional_order_amount</td>
      <td>Decimal</td>
      <td>Total additional charges amount placed at after total order amount (base price / gross amount)</td>
    </tr>
    <tr>
      <td>rounding_amount</td>
      <td>Decimal</td>
      <td>Total rounding amount.</td>
    </tr>
    <tr>
      <td>total_amount</td>
      <td>Decimal</td>
      <td>The total amount charged to the customer.</td>
    </tr>
    <tr>
      <td>buying_price</td>
      <td>Decimal</td>
      <td>The total buying price of this order</td>
    </tr>
    <tr>
      <td>total_shipping_amount</td>
      <td>Decimal</td>
      <td>The total shipping amount associated to this order.</td>
    </tr>
    <tr>
      <td>total_weight</td>
      <td>Integer</td>
      <td>Total weight of the items that will be shipped.</td>
    </tr>
    <tr>
      <td>tax_inclusive</td>
      <td>Boolean</td>
      <td>Determine whether the order is tax inclusive</td>
    </tr>
    <tr>
      <td>on_account</td>
      <td>Boolean</td>
      <td>Determine whether the order have on account payment</td>
    </tr>
    <tr>
      <td>remaining_on_accoun</td>
      <td>Decimal</td>
      <td>The remaining on account for the order</td>
    </tr>
    <tr>
      <td>billing</td>
      <td>Object (Billing)</td>
      <td>Billing address.</td>
    </tr>
    <tr>
      <td>shipping</td>
      <td>Object (Shipping)</td>
      <td>Shipping address.</td>
    </tr>
    <tr>
      <td>device_location</td>
      <td>Object (Device Location)</td>
      <td>Device location.<br>Need activate "<b>Enable Track Register Location</b>" on General Settings.</td>
    </tr>
    <tr>
      <td>order_type</td>
      <td>String</td>
      <td>The method by which a customer intends to receive their order.<br><br>Value:<br>- dine_in<br>- take_away<br>- delivery</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;17&lt;/page_number&gt;

---


## Page 18

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>order_details</td>
      <td>List of Object (OrderDetail)</td>
      <td>- List of order details associated to this order. Available if OrderDetails is included in request parameter.<br>- List of OrderDetail will appear when list is filled with items from the order.</td>
    </tr>
    <tr>
      <td>promotions</td>
      <td>List of Object (Promotion)</td>
      <td>List of promotions associated to this order. Available if PromotionDetails is included in request parameter.</td>
    </tr>
    <tr>
      <td>discounts</td>
      <td>List of Object (Discount)</td>
      <td>List of discounts associated to this order. Available if DiscountDetails is included in request parameter.</td>
    </tr>
    <tr>
      <td>transactions</td>
      <td>List of Object (Transaction)</td>
      <td>List of transactions associated to this order. Available if Transactions is included in request parameter.g</td>
    </tr>
  </tbody>
</table>

## StoreOrderRefund

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>order_id</td>
      <td>Guid</td>
      <td>Order ID for this refunded order</td>
    </tr>
    <tr>
      <td>order_reference</td>
      <td>String</td>
      <td>Order reference for this refunded order</td>
    </tr>
    <tr>
      <td>channel</td>
      <td>String</td>
      <td>Channel for this refunded order</td>
    </tr>
    <tr>
      <td>order_date</td>
      <td>DateTime</td>
      <td>Order date for this refunded order</td>
    </tr>
    <tr>
      <td>refund_date</td>
      <td>DateTime</td>
      <td>Refund date for this refunded order</td>
    </tr>
    <tr>
      <td>refund_amount</td>
      <td>Decimal</td>
      <td>Refund amount for this refunded order</td>
    </tr>
    <tr>
      <td>units_returned</td>
      <td>List of Object (StoreInventoryModel)</td>
      <td>Units returned for this refunded order</td>
    </tr>
    <tr>
      <td>refund_details</td>
      <td>List of Object (RefundDetails)</td>
      <td>Refund details for this refunded order</td>
    </tr>
  </tbody>
</table>

## StoreOrderFulfilled

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>order_id</td>
      <td>Guid</td>
      <td>Order id for this fulfillment</td>
    </tr>
    <tr>
      <td>order_reference</td>
      <td>String</td>
      <td>Order reference for this fulfillment</td>
    </tr>
    <tr>
      <td>channel</td>
      <td>String</td>
      <td>Channel for this fulfillment</td>
    </tr>
    <tr>
      <td>order_date</td>
      <td>DateTime</td>
      <td>Order date for this fulfillment</td>
    </tr>
    <tr>
      <td>fulfill_date</td>
      <td>DateTime</td>
      <td>Fulfill date for this fulfillment</td>
    </tr>
    <tr>
      <td>units_fulfilled</td>
      <td>List of Object (StoreInventoryModel)</td>
      <td>Units fulfilled for this fulfillment</td>
    </tr>
  </tbody>
</table>

## Billing/Shipping

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>address_id</td>
      <td>Guid</td>
      <td>Uniqueidentifier of the address.</td>
    </tr>
    <tr>
      <td>contact_title</td>
      <td>String</td>
      <td>Contact title.</td>
    </tr>
    <tr>
      <td>first_name</td>
      <td>String</td>
      <td>First name.</td>
    </tr>
    <tr>
      <td>last_name</td>
      <td>String</td>
      <td>Last name.</td>
    </tr>
    <tr>
      <td>company</td>
      <td>String</td>
      <td>Company name.</td>
    </tr>
    <tr>
      <td>phone</td>
      <td>String</td>
      <td>Phone number.</td>
    </tr>
    <tr>
      <td>address1</td>
      <td>String</td>
      <td>Address detail.</td>
    </tr>
    <tr>
      <td>address2</td>
      <td>String</td>
      <td>Address detail.</td>
    </tr>
    <tr>
      <td>country_code</td>
      <td>String</td>
      <td>Country code.</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;18&lt;/page_number&gt;

---


## Page 19

| Name | Type | Description |
|---|---|---|
| country | String | Country. |
| state | String | State. |
| city | String | City. |
| zip | String | Zip. |
| longitude | Double | Longitude coordinate. |
| latitude | Double | Latitude coordinate. |
| shipping_detail | List of Object (ShippingDetail) | Detail shipping of the order |

## DeviceLocation

| Name | Type | Description |
|---|---|---|
| latitude | String | Latitude from device location. |
| longitude | String | Longitude from device location. |

## OrderDetail

| Name | Type | Description |
|---|---|---|
| order_detail_id | Guid | Uniqueldentifier of the order detail assigned by the system. |
| product_id | Guid | Uniqueldentifier of the product associated to this order detail. |
| product_name | String | Product name that associated to this order detail. |
| product_generic_name | String | Product generic name that associated to this order detail. |
| product_type | String | Product type of the product that associated from web admin to this order detail. |
| product_variant_id | Guid | Uniqueldentifier of the product variant schema associated to this order detail. |
| product_variant_name | String | Product variant name that associated to this order detail. |
| product_modifier_id | Guid | Uniqueldentifier of the product modifier schema associated to this order detail. If this specified it means that the order detail represents a product modifier. |
| product_modifier_name | String | Product modifier name that associated to this order detail. |
| order_type | String | The method by which a customer intends to receive their order. Value: - dine_in - take_away - delivery - pick_up - etc |
| notes | String | Additional notes attach to the order detail. |
| vendor | String | Vendor of the product that associated to this order detail. |
| sku | String | SKU of the product that associated to this order detail. |
| fulfilment_status | String | Order fulfillment status. fulfilled → The item is fulfilled none → The item hasn’t been fulfilled cancel → The item is canceled |
| quantity | Integer | Total quantity of the product. |
| base_price | Decimal | Base price of the product |
| discount_amount | Decimal | Discount amount applied to this order detail. |

<footer>Public API v2</footer>
&lt;page_number&gt;19&lt;/page_number&gt;

---


## Page 20

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>discount_percentage</td>
      <td>Double</td>
      <td>Discount percentage value, available if the order detail has apply percentage base discount.</td>
    </tr>
    <tr>
      <td>taxable</td>
      <td>Bool</td>
      <td>A value that indicates whether the product associated to this order detail is taxable.</td>
    </tr>
    <tr>
      <td>tax_percentage</td>
      <td>Double</td>
      <td>The tax percentage value.</td>
    </tr>
    <tr>
      <td>tax_amount</td>
      <td>Decimal</td>
      <td>The total tax amount applied to the product associated to this order detail.</td>
    </tr>
    <tr>
      <td>require_shipping</td>
      <td>Bool</td>
      <td>A value that indicates whether the product associated to this order does require shipping.</td>
    </tr>
    <tr>
      <td>weight</td>
      <td>Double</td>
      <td>Total weight of the product associated to this order detail.<br>- Total weight quantity of the product associated to this order detail.<br>- This value will only be useful if you install<br><b>add on Scale</b> and activate the <b>Capture<br>weight data as attribute instead of quantity</b><br>setting.<br>- Example: "weight_quantity": 0.258</td>
    </tr>
    <tr>
      <td>weight_quantity</td>
      <td>Double</td>
      <td>List of promotions associated to this order detail. Available if <b>PromotionDetails</b> is included in request parameter.</td>
    </tr>
    <tr>
      <td>promotions</td>
      <td>List of Object (Promotion)</td>
      <td>List of discounts associated to this order. Available if <b>DiscountDetails</b> is included in request parameter.</td>
    </tr>
    <tr>
      <td>discounts</td>
      <td>List of Object (Discount)</td>
      <td>A value that indicates whether the product associated to this order detail has track inventory enabled when the order is made. Available if <b>TrackInventory</b> is included in request parameter.</td>
    </tr>
    <tr>
      <td>track_inventory</td>
      <td>Bool</td>
      <td>Type of the product associated in this order detail.<br><br>-<br><b>standard</b> → Standard product.<br>-<br><b>variant</b> → Product variant.<br>-<br><b>composite</b> → Composite product.<br>-<br><b>comboset</b> → Comboset product.</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of product associated to modifier.<br><br>-<br><b>standard</b> → Standard product.<br>-<br><b>variant</b> → Product variant.<br>-<br><b>composite</b> → Composite product.<br>-<br><b>comboset</b> → Comboset product.</td>
    </tr>
    <tr>
      <td>modifier_product_type</td>
      <td>String</td>
      <td>Uniqueldentifier of the product associated to modifier.</td>
    </tr>
    <tr>
      <td>modifier_product_id</td>
      <td>Guid</td>
      <td>SKU of the product associated to modifier.</td>
    </tr>
    <tr>
      <td>modifier_product_sku</td>
      <td>Integer</td>
      <td>Total number of product deducted for this modifier.</td>
    </tr>
    <tr>
      <td>modifier_product_composites</td>
      <td>List of Object (InventoryHistory)</td>
      <td>Detail inventory history per product if the product associated to modifier is a composite product.</td>
    </tr>
    <tr>
      <td>product_composites</td>
      <td>List of Object (InventoryHistory)</td>
      <td>Detail inventory history per product if the product associated to this order detail is a composite product.</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;20&lt;/page_number&gt;

---


## Page 21

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>product_combos</td>
      <td>List of Object (InventoryHistory)</td>
      <td>Detail inventory history per product if the product associated to this order detail is a combo set product.</td>
    </tr>
    <tr>
      <td>units_used</td>
      <td>List of Object (StoreInventoryModel)</td>
      <td>List of units used to this order detail. Available if <strong>TrackInventory</strong> is included in request parameter.</td>
    </tr>
    <tr>
      <td>serial_numbers</td>
      <td>List of Serial Number</td>
      <td>List of serial number used in this order detail. Available if <strong>SerialNumbers's</strong> add on is enabled.</td>
    </tr>
    <tr>
      <td>cogs</td>
      <td>List of Object (CostOfGoodsSold)</td>
      <td>List of cost of goods sold to this order detail.</td>
    </tr>
    <tr>
      <td>server_name</td>
      <td>String</td>
      <td>Server name that associated to this order detail.</td>
    </tr>
  </tbody>
</table>

## Promotion

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>promotion_id</td>
      <td>Guid</td>
      <td>Uniqueldentifier of the promotion.</td>
    </tr>
    <tr>
      <td>promotion_name</td>
      <td>String</td>
      <td>Name of the promotion.</td>
    </tr>
    <tr>
      <td>promotion_amount</td>
      <td>Decimal</td>
      <td>Value of the promotion.</td>
    </tr>
  </tbody>
</table>

## Discount

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>discount_name</td>
      <td>String</td>
      <td>Name of the discount</td>
    </tr>
    <tr>
      <td>discount_amount</td>
      <td>Decimal</td>
      <td>Value of the discount</td>
    </tr>
  </tbody>
</table>

## Transaction

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>transaction_id</td>
      <td>Guid</td>
      <td>Uniqueldentifier of the transaction assigned by the system.</td>
    </tr>
    <tr>
      <td>transaction_date</td>
      <td>DateTime</td>
      <td>Date and time when the order was created.</td>
    </tr>
    <tr>
      <td>channel</td>
      <td>String</td>
      <td>Order channel that indicates from which channel this transaction is originated from (e.g pos if created from Point of Sales and web if created from Online Store).</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Transaction type.<br><br><strong>sale</strong> → Purchase transaction<br><br><strong>refund</strong> → Refund transaction<br><br><strong>void</strong> → Void transaction<br><br>Transaction status.<br><br><strong>-</strong><br><strong>success</strong> → Success<br><br><strong>-</strong><br><strong>error</strong> → Error<br><br><strong>-</strong><br><strong>pending</strong> → Pending<br><br><strong>-</strong><br><strong>failure</strong> → Failure</td>
    </tr>
    <tr>
      <td>status</td>
      <td>String</td>
      <td>Transaction status.<br><br><strong>-</strong><br><strong>success</strong> → Success<br><br><strong>-</strong><br><strong>error</strong> → Error<br><br><strong>-</strong><br><strong>pending</strong> → Pending<br><br><strong>-</strong><br><strong>failure</strong> → Failure</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;21&lt;/page_number&gt;

---


## Page 22

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>gateway</td>
      <td>String</td>
      <td>- cash<br>- external_debit<br>- external_credit<br>- gift_card<br>- points<br>- account_balance<br>- store_credit<br>- iseller_pay<br>- custom</td>
    </tr>
    <tr>
      <td>payment_type_id</td>
      <td>Guid</td>
      <td>Uniqueldentifier of the payment associated to this transaction.</td>
    </tr>
    <tr>
      <td>payment_type_name</td>
      <td>String</td>
      <td>Name of the payment type.</td>
    </tr>
    <tr>
      <td>currency</td>
      <td>String</td>
      <td>Currency of the transaction.</td>
    </tr>
    <tr>
      <td>amount</td>
      <td>Decimal</td>
      <td>Total amount of the transaction.</td>
    </tr>
    <tr>
      <td>mdr</td>
      <td>List of Object (MDR)</td>
      <td>List payment method fee and total amount after fee on this transaction.</td>
    </tr>
    <tr>
      <td>bin_card</td>
      <td>String</td>
      <td>First 6 digit credit card.</td>
    </tr>
  </tbody>
</table>

## InventoryHistory

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>product_id</td>
      <td>Guid</td>
      <td>Uniqueldentifier of the product.</td>
    </tr>
    <tr>
      <td>product_sku</td>
      <td>String</td>
      <td>SKU of the product.</td>
    </tr>
    <tr>
      <td>product_name</td>
      <td>String</td>
      <td>Name of the product.</td>
    </tr>
    <tr>
      <td>variant_name</td>
      <td>String</td>
      <td>Variant name of the product if the product is a product variant.</td>
    </tr>
    <tr>
      <td>quantity</td>
      <td>Decimal</td>
      <td>Number of product deducted.</td>
    </tr>
  </tbody>
</table>

## StoreInventoryModel

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>product_name</td>
      <td>String</td>
      <td>Product name for this inventory.</td>
    </tr>
    <tr>
      <td>product_id</td>
      <td>String</td>
      <td>Product id for this inventory.</td>
    </tr>
    <tr>
      <td>sku</td>
      <td>String</td>
      <td>Product sku for this inventory.</td>
    </tr>
    <tr>
      <td>stock</td>
      <td>Double</td>
      <td>Stock for this inventory.</td>
    </tr>
    <tr>
      <td>serial_numbers</td>
      <td>List of Serial Number</td>
      <td>List of refunded serial number in this order detail. Available if SerialNumbers's add on is enabled.</td>
    </tr>
  </tbody>
</table>

## StoreInventoryPathModel

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sku</td>
      <td>String</td>
      <td>Product sku for this inventory path.</td>
    </tr>
    <tr>
      <td>product_id</td>
      <td>Guid</td>
      <td>Product id for this inventory path.</td>
    </tr>
    <tr>
      <td>product_name</td>
      <td>String</td>
      <td>Product name for this inventory path.</td>
    </tr>
  </tbody>
</table>

## RefundDetails

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>product_id</td>
      <td>Guid</td>
      <td>Product id for this refund details.</td>
    </tr>
    <tr>
      <td>sku</td>
      <td>String</td>
      <td>Product sku for this refund details.</td>
    </tr>
    <tr>
      <td>cogs</td>
      <td>List of Object (CostOfGoodsSold)</td>
      <td>Cost of goods sold for this refund details.</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;22&lt;/page_number&gt;

---


## Page 23

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>quantity</td>
    <td>Double</td>
    <td>Quantity refund.</td>
  </tr>
</table>

## CostOfGoodsSold

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>product_id</td>
    <td>Guid</td>
    <td>Product ID for this cogs.</td>
  </tr>
  <tr>
    <td>sku</td>
    <td>String</td>
    <td>Product sku for this cogs.</td>
  </tr>
  <tr>
    <td>quantity</td>
    <td>Double</td>
    <td>Quantity sold.</td>
  </tr>
  <tr>
    <td>sku</td>
    <td>Decimal</td>
    <td>The buying of the item sold.</td>
  </tr>
</table>

## MDR

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>payment_method_fee</td>
    <td>Decimal</td>
    <td>The payment method for the transaction</td>
  </tr>
  <tr>
    <td>total_amount_fee</td>
    <td>Decimal</td>
    <td>The total amount after fee for the transaction.</td>
  </tr>
</table>

## ShippingDetail

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>shipping_name</td>
    <td>String</td>
    <td>The name of the shipment is used for the order.</td>
  </tr>
  <tr>
    <td>service_code</td>
    <td>String</td>
    <td>- The service code of the integration shipment is used for the order<br>- If value is null, so order that they used manual shipping</td>
  </tr>
  <tr>
    <td>tracking_number</td>
    <td>String</td>
    <td>Detail of tracking number</td>
  </tr>
</table>

## ProfitDetails

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>total_order_amount</td>
    <td>Double</td>
    <td>The total amount of the order</td>
  </tr>
  <tr>
    <td>shipping_by_seller</td>
    <td>Double</td>
    <td>Shipping cost covered by the seller for the order</td>
  </tr>
  <tr>
    <td>admin_fee</td>
    <td>Double</td>
    <td>Platform administrative fees deducted from the order total</td>
  </tr>
  <tr>
    <td>commission_fee</td>
    <td>Double</td>
    <td>The amount of affiliate commission fee for the order</td>
  </tr>
  <tr>
    <td>discount_by_seller</td>
    <td>Double</td>
    <td>The total discount amount provided by the seller.</td>
  </tr>
  <tr>
    <td>promotion_by_seller</td>
    <td>Double</td>
    <td>The total promotion amount provided by the seller.</td>
  </tr>
  <tr>
    <td>total_amount_profit</td>
    <td>Double</td>
    <td>The final profit after deducting all fees, discounts, and promotions</td>
  </tr>
  <tr>
    <td>additional_shipping_income</td>
    <td>Double</td>
    <td>The extra income earned from any additional shipping fees charged to the customer beyond the standard shipping cost</td>
  </tr>
</table>

# GetOrderSummary

https://storename.isellershop.com/api/v2/GetOrderSummary

Use this call to get orders summary data for particular set of filter grouped per day.

## Parameters

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Optional</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>time_zone</td>
    <td>Integer</td>
    <td>N</td>
    <td>Time zone for the given date and also data date conversion. Note that iSeller data stored in UTC +0 time zone.</td>
  </tr>
  <tr>
    <td>created_after</td>
    <td>DateTime</td>
    <td>Y</td>
    <td>Limits the returned orders to those created after or on the specified date, given ISO 8601 date format. (e.g.<br>2017-11-20T10:00:00) without the time zone info</td>
  </tr>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;23&lt;/page_number&gt;

---


## Page 24

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>created_before</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned orders to those created before or on the specified date, given ISO 8601 date format without the time zone info.</td>
    </tr>
    <tr>
      <td>modified_after</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned orders to those modified after or on the specified date, given ISO 8601 date format without the time zone info.</td>
    </tr>
    <tr>
      <td>modified_before</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned orders to those modified before or on the specified date, given ISO 8601 date format without the time zone info.</td>
    </tr>
    <tr>
      <td>sort</td>
      <td>String</td>
      <td>Y</td>
      <td>Allows to choose the sorting column. Possible values are <b>CreatedDate</b> and <b>ModifiedDate</b>.</td>
    </tr>
    <tr>
      <td>sort_direction</td>
      <td>String</td>
      <td>Y</td>
      <td>Specify the sorting type. Possible values are <b>ASC</b> and <b>DESC</b>.</td>
    </tr>
    <tr>
      <td>page</td>
      <td>Integer</td>
      <td>Y</td>
      <td>Index of the page that going to be loaded.</td>
    </tr>
    <tr>
      <td>page_size</td>
      <td>Integer</td>
      <td>Y</td>
      <td>Size of the page that going to be loaded.</td>
    </tr>
    <tr>
      <td>customer_id</td>
      <td>Guid</td>
      <td>Y</td>
      <td>Limit the returned orders to those belong to specified CustomerId</td>
    </tr>
    <tr>
      <td>outlet_id</td>
      <td>Guid</td>
      <td>Y</td>
      <td>Limit the returned orders to those belong to specified OutletId.</td>
    </tr>
    <tr>
      <td>includes</td>
      <td>String</td>
      <td>Y</td>
      <td><b>TrackInventory</b></td>
    </tr>
    <tr>
      <td>fulfillment_status</td>
      <td>String</td>
      <td>Y</td>
      <td>Limit the returned order to those belong to specified <b>FulfillmentStatus</b> .<br><br>Value:<br>- fulfilled<br>- partial<br>- none</td>
    </tr>
  </tbody>
</table>

## Sample Usage

**POST** https://storename.isellershop.com/api/v2/GetOrderSummary

**Params**
*   **Authorization**: (Not visible)
*   **Headers**: (Not visible)
*   **Body**: (Highlighted)
*   **Pre-request Script**
*   **Tests**
*   **Settings**

**Body**
*   **form-data**
*   **x-www-form-urlencoded**
*   **raw**
*   **binary**
*   **GraphQL**

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
      <th>Description</th>
      <th>...</th>
      <th>Bulk Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>time_zone</td>
      <td>7</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>created_after</td>
      <td>2023-01-01T00:00:00</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Response

Public API v2
&lt;page_number&gt;24&lt;/page_number&gt;

---


## Page 25

Body Cookies Headers (7) Test Results
Status: 200 OK Time: 324 ms Size: 16.39 KB Save as example ...

Pretty Raw Preview Visualize JSON ▾

```json
{
    "count": 34,
    "order_summaries": [
        {
            "order_date": "2023-01-02 07:00:00",
            "currency": "IDR",
            "total_order_amount": 715000.0,
            "total_discount_amount": 0.0,
            "total_promotion_amount": 0.0,
            "total_additional_order_amount": 0.0,
            "total_additional_subtotal_amount": 0.0,
            "subtotal": 715000.0,
            "total_tax_amount": 0.0,
            "total_additional_final_amount": 0.0000,
            "rounding_amount": 0.0000,
            "total_amount": 715000.0000,
            "total_shipping_amount": 0.0,
            "total_weight": 0,
            "units_used": null,
            "units_returned": null,
            "units_fulfilled": null,
            "units_hpp": null
        },
        {
            "order_date": "2023-01-03 07:00:00",
            "currency": "IDR",
            "total_order_amount": 4020000.0,
```

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>count</td>
<td>Integer</td>
<td>Total records retrieved by the process.</td>
</tr>
<tr>
<td>order_summary</td>
<td>List of Object<br/>(OrderSummary)</td>
<td>List of order summary requested.</td>
</tr>
<tr>
<td>error_message</td>
<td>String</td>
<td>System error message when error occurred during process</td>
</tr>
<tr>
<td>status</td>
<td>Bool</td>
<td>Status of the request, false means there's an error during the execution process.</td>
</tr>
</tbody>
</table>

## OrderSummary

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>order_date</td>
<td>DateTime</td>
<td>Date and Time of the order summary.</td>
</tr>
<tr>
<td>total_order_amount</td>
<td>Decimal</td>
<td>Sum of total order amount (base price / gross amount).</td>
</tr>
<tr>
<td>total_discount_amount</td>
<td>Decimal</td>
<td>Sum of total discount amount.</td>
</tr>
<tr>
<td>total_promotion_amount</td>
<td>Double?</td>
<td>Sum of total promotion.</td>
</tr>
<tr>
<td>subtotal</td>
<td>Decimal</td>
<td>Sum of sub total.</td>
</tr>
<tr>
<td>total_tax_amount</td>
<td>Decimal</td>
<td>Sum of tax amount.</td>
</tr>
<tr>
<td>total_additional_final_amount</td>
<td>Decimal</td>
<td>Sum of additional charges amount placed at before final total.</td>
</tr>
<tr>
<td>total_additional_subtotal_amount</td>
<td>Double</td>
<td>Sum of additional charges amount placed at before sub total.</td>
</tr>
<tr>
<td>total_additional_order_amount</td>
<td>Double</td>
<td>Sum of additional charges amount placed at after total order amount (base price / gross amount).</td>
</tr>
<tr>
<td>rounding_amount</td>
<td>Decimal</td>
<td>Sum of rounding amount.</td>
</tr>
<tr>
<td>total_amount</td>
<td>Decimal</td>
<td>Sum of total amount charged to the customer.</td>
</tr>
<tr>
<td>total_shipping_amount</td>
<td>Decimal</td>
<td>Sum of total shipping amount.</td>
</tr>
<tr>
<td>total_weight</td>
<td>Integer</td>
<td>Sum of total shipping weight.</td>
</tr>
<tr>
<td>units_used</td>
<td>List of object<br/>(StoreInventoryModel)</td>
<td>List of units used. Available if <strong>TrackInventory</strong> is included in request parameter.</td>
</tr>
<tr>
<td>units_returned</td>
<td>List of object<br/>(StoreInventoryModel)</td>
<td>List of units returned. Available if <strong>TrackInventory</strong> is included in request parameter.</td>
</tr>
</tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;25&lt;/page_number&gt;

---


## Page 26

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>units_fulfilled</td>
    <td>List of object (StoreInventoryModel)</td>
    <td>List of units fulfilled. Available if <b>TrackInventory</b> is included in request parameter.</td>
  </tr>
  <tr>
    <td>units_hpp</td>
    <td>List of object (StoreUnitHpp)</td>
    <td>List of units hpp. Available if <b>TrackInventory</b> is included in request parameter.<br><br>Note:<br>Only show for products that have buying_price value.</td>
  </tr>
</table>

## StoreUnitHpp

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>product_id</td>
    <td>Guid</td>
    <td>The product id of unit hpp</td>
  </tr>
  <tr>
    <td>product_name</td>
    <td>String</td>
    <td>The product name of unit hpp</td>
  </tr>
  <tr>
    <td>sku</td>
    <td>String</td>
    <td>The sku of unit hpp</td>
  </tr>
  <tr>
    <td>quantity</td>
    <td>Double</td>
    <td>The quantity of unit hpp</td>
  </tr>
  <tr>
    <td>selling_price</td>
    <td>Decimal</td>
    <td>The selling price of unit hpp</td>
  </tr>
  <tr>
    <td>buying_price</td>
    <td>Decimal</td>
    <td>The buying price of unit hpp</td>
  </tr>
</table>

## StoreInventoryModel

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>product_name</td>
    <td>String</td>
    <td>Product name for this inventory</td>
  </tr>
  <tr>
    <td>sku</td>
    <td>String</td>
    <td>Product sku for this inventory</td>
  </tr>
  <tr>
    <td>stock</td>
    <td>Double</td>
    <td>Stock for this inventory</td>
  </tr>
</table>

## StoreInventoryPathModel

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>sku</td>
    <td>String</td>
    <td>Product sku for this inventory path</td>
  </tr>
  <tr>
    <td>product_id</td>
    <td>Guid</td>
    <td>Product id for this inventory path</td>
  </tr>
  <tr>
    <td>product_name</td>
    <td>String</td>
    <td>Product name for this inventory path</td>
  </tr>
</table>

# GetTransactions

https://storename.isellershop.com/api/v2/GetTransactions

Use this call to get transactions data for particular set of filter.

## Parameters

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Optional</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>time_zone</td>
    <td>Integer</td>
    <td>N</td>
    <td>Time zone for the given date and also data date conversion. Note that iSeller data stored in UTC +0 time zone.</td>
  </tr>
  <tr>
    <td>created_after</td>
    <td>DateTime</td>
    <td>Y</td>
    <td>Limits the returned orders to those created after or on the specified date, given ISO 8601 date format. (e.g. 2017-11-20T10:00:00) without the time zone info</td>
  </tr>
  <tr>
    <td>created_before</td>
    <td>DateTime</td>
    <td>Y</td>
    <td>Limits the returned orders to those created before or on the specified date, given ISO 8601 date format without the time zone info.</td>
  </tr>
  <tr>
    <td>modified_after</td>
    <td>DateTime</td>
    <td>Y</td>
    <td>Limits the returned orders to those modified after or on the specified date, given ISO 8601 date format without the time zone info.</td>
  </tr>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;26&lt;/page_number&gt;

---


## Page 27

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>modified_before</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned orders to those modified before or on the specified date, given ISO 8601 date format without the time zone info.</td>
    </tr>
    <tr>
      <td>sort</td>
      <td>String</td>
      <td>Y</td>
      <td>Allows to choose the sorting column. Possible values are <b>CreatedDate</b> and <b>ModifiedDate</b>.</td>
    </tr>
    <tr>
      <td>sort_direction</td>
      <td>String</td>
      <td>Y</td>
      <td>Specify the sorting type. Possible values are <b>ASC</b> and <b>DESC</b>.</td>
    </tr>
    <tr>
      <td>page</td>
      <td>Integer</td>
      <td>Y</td>
      <td>Index of the page that going to be loaded.</td>
    </tr>
    <tr>
      <td>page_size</td>
      <td>Integer</td>
      <td>Y</td>
      <td>Size of the page that going to be loaded</td>
    </tr>
    <tr>
      <td>outlet_id</td>
      <td>Guid</td>
      <td>Y</td>
      <td>Limit the returned orders to those belong to specified OutletId.</td>
    </tr>
  </tbody>
</table>

# Sample Usage

POST https://storename.isellershop.com/api/v2/GetTransactions

**Params**
*   **Authorization**: (not visible)
*   **Headers**: (10) (not visible)
*   **Body**: x-www-form-urlencoded
*   **Tests**
*   **Settings**

**Body**
<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>time_zone</td>
      <td>7</td>
      <td></td>
    </tr>
    <tr>
      <td>created_after</td>
      <td>2023-01-01T00:00:00</td>
      <td></td>
    </tr>
  </tbody>
</table>

# Response

**Body**
<table>
  <thead>
    <tr>
      <th>Pretty</th>
      <th>Raw</th>
      <th>Preview</th>
      <th>Visualize</th>
      <th>JSON</th>
      <th>Save as example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
```json
{
  "count": 815,
  "transactions": [
    {
      "order_reference": "#3123-1001",
      "transaction_date": "2023-01-02 09:54:20",
      "order_id": "7c8ff6f8-306c-4475-aac1-57f7f2bcd080",
      "transaction_id": "3b5574a1-b5ad-4026-99e4-d70f2021d0f3",
      "channel": "pos",
      "type": "sale",
      "status": "success",
      "gateway": "cash",
      "payment_type_id": null,
      "payment_type_name": "Cash",
      "currency": "IDR",
      "amount": 55000.0000,
      "mdr": null,
      "bin_card": null,
      "additional_info": null
    },
    {
      "order_reference": "#3123-1002",
      "transaction_date": "2023-01-02 10:06:36",
      "order_id": "4de2994d-d4e7-4be6-85b9-577e5981f60a",
      "transaction_id": "3b5db809-54fe-4cf9-9f1d-5a694088a5ce",
      "channel": "pos",
      "type": "sale",
      "status": "success",
      "gateway": "cash",
      "payment_type_id": null,
      "payment_type_name": "Cash",
      "currency": "IDR",
      "amount": 55000.0000,
      "mdr": null,
      "bin_card": null,
      "additional_info": null
    }
  ]
}
```

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>count</td>
      <td>Integer</td>
      <td>Total transactions retrieved by the process.</td>
    </tr>
    <tr>
      <td>transactions</td>
      <td>List of Object (Transaction)</td>
      <td>List of transactions requested.</td>
    </tr>
    <tr>
      <td>error_message</td>
      <td>String</td>
      <td>System error message when error occurred during process.</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;27&lt;/page_number&gt;

---


## Page 28

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>status</td>
      <td>Bool</td>
      <td>Status of the request, false means there's an error during the execution process.</td>
    </tr>
  </tbody>
</table>

## Transaction

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>order_reference</td>
      <td>String</td>
      <td>The human-readable order number or reference.</td>
    </tr>
    <tr>
      <td>transaction_id</td>
      <td>Guid</td>
      <td>Uniqueldentifier of the transaction assigned by the system.</td>
    </tr>
    <tr>
      <td>transaction_date</td>
      <td>DateTime</td>
      <td>Date and time when the transaction was created.</td>
    </tr>
    <tr>
      <td>channel</td>
      <td>String</td>
      <td>Order channel that indicates from which channel this transaction is originated from (e.g pos if created from Point of Sales and web if created from Online Store).</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Transaction type.<br><br>-<br>sale → Purchase transaction<br><br>-<br>refund → Refund transaction<br><br>-<br>void → Void transaction</td>
    </tr>
    <tr>
      <td>status</td>
      <td>String</td>
      <td>Transaction status.<br><br>-<br>success → Success<br><br>-<br>error → Error<br><br>-<br>pending → Pending<br><br>-<br>failure → Failure</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>String</td>
      <td>- cash<br>- external_debit<br>- external_credit<br>- gift_card<br>- points<br>- account_balance<br>- store_credit<br>- iseller_pay<br>- custom</td>
    </tr>
    <tr>
      <td>payment_type_id</td>
      <td>Guid</td>
      <td>Uniqueldentifier of the payment associated to this transaction.</td>
    </tr>
    <tr>
      <td>payment_type_name</td>
      <td>String</td>
      <td>Name of the payment type.</td>
    </tr>
    <tr>
      <td>currency</td>
      <td>String</td>
      <td>Currency of the transaction.</td>
    </tr>
    <tr>
      <td>amount</td>
      <td>Decimaal</td>
      <td>Total amount of the transaction.</td>
    </tr>
  </tbody>
</table>

## GetTransactionSummary

https://storename.isellershop.com/api/v2/GetTransactionSummary

Use this call to get transaction summary data for particular set of filter grouped per day

## Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>time_zone</td>
      <td>Integer</td>
      <td>N</td>
      <td>Time zone for the given date and also data date conversion. Note that iSeller data stored in UTC +0 time zone.</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;28&lt;/page_number&gt;

---


## Page 29

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Optional</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>created_after</td>
<td>DateTime</td>
<td>Y</td>
<td>Limits the returned orders to those created after or on the specified date, given ISO 8601 date format. (e.g. 2017-11-20T10:00:00) without the time zone info</td>
</tr>
<tr>
<td>created_before</td>
<td>DateTime</td>
<td>Y</td>
<td>Limits the returned orders to those created before or on the specified date, given ISO 8601 date format without the time zone info.</td>
</tr>
<tr>
<td>modified_after</td>
<td>DateTime</td>
<td>Y</td>
<td>Limits the returned orders to those modified after or on the specified date, given ISO 8601 date format without the time zone info.</td>
</tr>
<tr>
<td>modified_before</td>
<td>DateTime</td>
<td>Y</td>
<td>Limits the returned orders to those modified before or on the specified date, given ISO 8601 date format without the time zone info.</td>
</tr>
<tr>
<td>sort</td>
<td>String</td>
<td>Y</td>
<td>Allows to choose the sorting column. Possible values are <strong><em>CreatedDate</em></strong> and <strong><em>ModifiedDate</em></strong>.</td>
</tr>
<tr>
<td>sort_direction</td>
<td>String</td>
<td>Y</td>
<td>Specify the sorting type. Possible values are <strong><em>ASC</em></strong> and <strong><em>DESC</em></strong>.</td>
</tr>
<tr>
<td>page</td>
<td>Integer</td>
<td>Y</td>
<td>Index of the page that going to be loaded.</td>
</tr>
<tr>
<td>page_size</td>
<td>Integer</td>
<td>Y</td>
<td>Size of the page that going to be loaded</td>
</tr>
<tr>
<td>outlet_id</td>
<td>Guid</td>
<td>Y</td>
<td>Limit the returned orders to those belong to specified OutletId.</td>
</tr>
</tbody>
</table>

# Sample Usage

&lt;img&gt;POST https://storename.isellershop.com/api/v2/GetTransactionSummary
**Params**
None
Authorization: [✓] x-www-form-urlencoded
Headers: Authorization
Body: None
[✓] Created At

**Cookies**

**Tests**
Pre-request Script
Setup Tests
Test Examples
Escaping JSON
Basic Usage with Variables
Upload Multipart Content

**JSONPath**

Debug your JSON. Enter expressions to get related data.
document
http.status_code
Requests
Requests Response&lt;/img&gt;

# Response

```json
{
    "count": 98,
    "transaction_summaries": [
        {
            "order_date": "2023-01-02 07:00:00",
            "cash": 715000.0000,
            "external_debit": 0.0,
            "external_credit": 0.0,
            "gift_card": 0.0,
            "iseller_pay": 0.0,
            "points": 0.0,
            "store_credit": 0.0,
            "account_balance": 0.0,
            "customs": []
        },
        {
            "order_date": "2023-02-13 07:00:00",

---


## Page 30

json
{
  "cash": 251030.0000,
  "external_debit": 0.0,
  "external_credit": 0.0,
  "gift_card": 0.0,
  "iseller_pay": 53.0000,
  "points": 372000.0000,
  "store_credit": 0.0,
  "account_balance": 0.0,
  "customs": [
    {
      "name": "OttoPay",
      "amount": 1196800.0000
    }
  ]
},
"error_message": null,
"status": true,
"time": "00:00:00.3437601"
}
```

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Integer</td>
    <td>Total records retrieved by the process.</td>
  </tr>
  <tr>
    <td>transaction_summary</td>
    <td>List of Object (TransactionSummary)</td>
    <td>List of transaction summary requested</td>
  </tr>
  <tr>
    <td>error_message</td>
    <td>String</td>
    <td>System error message when error occurred during process.</td>
  </tr>
  <tr>
    <td>status</td>
    <td>Bool</td>
    <td>Status of the request, false means there's an error during the execution process.</td>
  </tr>
</table>

## TransactionSummary

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>order_date</td>
    <td>DateTime</td>
    <td>Date and time of the transaction summary</td>
  </tr>
  <tr>
    <td>cash</td>
    <td>Decimal</td>
    <td>Total transaction done by cash.</td>
  </tr>
  <tr>
    <td>debit</td>
    <td>Decimal</td>
    <td>Total transaction done by external debit.</td>
  </tr>
  <tr>
    <td>credit</td>
    <td>Decimal</td>
    <td>Total transaction done by external credit.</td>
  </tr>
  <tr>
    <td>gift_card</td>
    <td>Decimal</td>
    <td>Total transaction done by gift card.</td>
  </tr>
  <tr>
    <td>iseller_pay</td>
    <td>Decimal</td>
    <td>Total transaction done by iSeller pay.</td>
  </tr>
  <tr>
    <td>loyalty_point</td>
    <td>Decimal</td>
    <td>Total transaction done using loyalty points.</td>
  </tr>
  <tr>
    <td>store_credit</td>
    <td></td>
    <td>Total transaction done using store credit.</td>
  </tr>
  <tr>
    <td>customs</td>
    <td>List of object (CustomTransaction)</td>
    <td>List of transaction using custom payment.</td>
  </tr>
</table>

## CustomTransaction

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Name of custom payment</td>
  </tr>
  <tr>
    <td>amount</td>
    <td>Decimal</td>
    <td>Total transaction</td>
  </tr>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;30&lt;/page_number&gt;

---


## Page 31

| Name | Type | Description |
| --- | --- | --- |
|  |  | done with the custom payment. |

# GetProducts

https://storename.isellershop.com/api/v2/GetProducts

Use this to get the products list

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| track_inventory | Bool | N | Is the product track inventory |
| modified_after | String | N | Limits the returned products to those modified after or on the specified date, given ISO 8601 date format. (e.g 2020-11-20T10:00:00) without the time zone info |
| page | Int | N | The page to which quantity of data will be retrieved |
| page_size | Int | N | The quantity of data to be retrieved |
| product_header_id | GUID | Y | Unique identifier of the product and retrieve specific product(s) Limit the returned product to those belong to specified type . |
| type | String | Y | Value: - standard - variant - composite - comboset - composite_variant Limit the returned product to those belong to specific value product_type . |
| product_type | String | Y | Note: Can be filled with multiple values Limit the returned product to those belong to contains value tags . |
| tags | String | Y | Note: Only can be filled for one value tags |
| includes | String | Y | OutletPrice, Tags, ModifierGroups, Modifiers |

## Sample Usage

Public API v2
&lt;page_number&gt;31&lt;/page_number&gt;

---


## Page 32

POST https://storename.isellershop.com/api/v2/GetProducts
Send Save

Params Authorization Headers (11) Body Pre-request Script Tests Settings Cookies Code
none form-data x-www-form-urlencoded raw binary GraphQL

<table>
  <thead>
    <tr>
      <th>KEY</th>
      <th>VALUE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>☑ track_inventory</td>
      <td>true</td>
    </tr>
    <tr>
      <td>☑ modified_after</td>
      <td>2023-01-01T00:00:00</td>
    </tr>
    <tr>
      <td>☑ page</td>
      <td>1</td>
    </tr>
    <tr>
      <td>☑ page_size</td>
      <td>500</td>
    </tr>
    <tr>
      <td>☑ includes</td>
      <td>OutletPrice</td>
    </tr>
    <tr>
      <td>Key</td>
      <td>Value</td>
    </tr>
  </tbody>
</table>

Response

{
  "products": [
    {
      "product_type": null,
      "vendor": null,
      "attribute": null,
      "tags": [
        "Sepatu",
        "Air Jordan 1"
      ],
      "product_id": "6c2a4afd-a4f1-4cdf-afdb-00d36a4cec0e",
      "name": "Air Jordan 1 Mid University Gold",
      "description": "Air Jordan Shoes for Men",
      "type": "standard",
      "barcode": "",
      "sku": "AIR004",
      "price": 100000,
      "outlet_prices": [
        {
          "outlet_id": "b7ab7408-54ba-4b56-b413-01ff3e8c4642",
          "outlet_name": "LHT - LINGKAR LUAR LAHAT",
          "price": 35000
        },
        {
          "outlet_id": "67a612d4-579b-414e-a995-05cc430f8715",
          "outlet_name": "MLG - JATIM PARK",
          "price": 35000
        }
      ],
      "taxable": true,
      "track_inventory": true,
      "allow_negative_stock": false,
      "sold_count": 82,
      "unit_of_measurement": "pcs",
      "buying_prices": [
        {

---


## Page 33

json
{
  "outlet_id": "02d73109-e313-4190-a744-853a6d99941e",
  "buying_price": 10000
},
{
  "outlet_id": "1e88855d-0fdf-cee6-3578-560f46b9e7d9",
  "buying_price": 10000
}
],
"buying_price": 10000,
"inventories": [
  {
    "outlet_id": "1e88855d-0fdf-cee6-3578-560f46b9e7d9",
    "outlet_code": "GI",
    "outlet_name": "Grand Indonesia",
    "unit_in_stock": 998
  },
  {
    "outlet_id": "02d73109-e313-4190-a744-853a6d99941e",
    "outlet_code": "HO",
    "outlet_name": "Main Outlet",
    "unit_in_stock": 1981
  }
],
"ingredients": null,
"variant_options": [],
"bundles": null,
"modifier_groups": [
  {
    "modifier_group_id": "73e59b49-ccf3-cd83-b4d2-89ac64c4ad0a",
    "title": "Modifier 1",
    "modifiers": [
      {
        "modifier_id": "2fd62cc5-ac6f-6b38-249c-c79b27028650",
        "modifier_group_id": "73e59b49-ccf3-cd83-b4d2-89ac64c4ad0a",
        "title": "ABC",
        "price": 0,
        "quantity": 0
      },
      {
        "modifier_id": "9bb44170-0024-b6df-94e7-6f1601d3c7b0",
        "modifier_group_id": "73e59b49-ccf3-cd83-b4d2-89ac64c4ad0a",
        "title": "DEF",
        "price": 0,
        "quantity": 10
      }
    ]
  },
  {
    "modifier_group_id": "cdf7f915-1459-489c-a38f-ad307a76d923",
    "title": "Modifier 2",
    "modifiers": [
      {
        "modifier_id": "b0ad675c-744a-4205-bd55-df0886244c2f",
```

Public API v2 &lt;page_number&gt;33&lt;/page_number&gt;

---


## Page 34

json
{
  "modifier_group_id": "73e59b49-ccf3-cd83-b4d2-89ac64c4ad0a",
  "title": "GHI",
  "price": 0,
  "quantity": 68
},
{
  "modifier_id": "e8ee041e-7cf9-44e7-8607-557aebcbdfeb",
  "modifier_group_id": "73e59b49-ccf3-cd83-b4d2-89ac64c4ad0a",
  "title": "JKL",
  "price": 0,
  "quantity": 0
}
],
"is_active": true
},
"images": [
  "https://cdn.isellercommerce.com/208ff209dc634c84a015c11911e4a03b/b88134f851084dc5b82db16bd3928566.jpg"
],
"need_scale": false,
"is_active": true,
"modified_date": "2023-09-08 07:59:38"
},
"error_message": null,
"status": true,
"time": "00:00:00.3594070"
}
```

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>products</td>
<td>List of StoreProduct</td>
<td>List of Products</td>
</tr>
<tr>
<td>error_message</td>
<td>String</td>
<td>System error message when error occurred during process.</td>
</tr>
<tr>
<td>status</td>
<td>Bool</td>
<td>Status of the request, false means there's an error during the execution process.</td>
</tr>
<tr>
<td>time</td>
<td>String</td>
<td>The processing time</td>
</tr>
</tbody>
</table>

## StoreProduct

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>product_id</td>
<td>Guid</td>
<td>Product id of the product</td>
</tr>
<tr>
<td>product_header_id</td>
<td>Guid</td>
<td>Product header id of the product</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>Name of the product</td>
</tr>
<tr>
<td>description</td>
<td>String</td>
<td>Description of the product</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>Type of the product</td>
</tr>
<tr>
<td>product_type</td>
<td>String</td>
<td>The product type</td>
</tr>
<tr>
<td>vendor</td>
<td>String</td>
<td>Vendor of the product</td>
</tr>
<tr>
<td>attribute</td>
<td>List of Attribute</td>
<td>Attributes list of the product</td>
</tr>
<tr>
<td>tags</td>
<td>String</td>
<td>Tags of the product</td>
</tr>
<tr>
<td>barcode</td>
<td>String</td>
<td>Barcode of the product</td>
</tr>
<tr>
<td>sku</td>
<td>String</td>
<td>SKU of the product</td>
</tr>
<tr>
<td>price</td>
<td>Decimal</td>
<td>Price of the product</td>
</tr>
</tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;34&lt;/page_number&gt;

---


## Page 35

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>taxable</td>
    <td>Bool</td>
    <td>Is the product taxable</td>
  </tr>
  <tr>
    <td>track_inventory</td>
    <td>Bool</td>
    <td>Is the product track inventory</td>
  </tr>
  <tr>
    <td>allow_negative_stock</td>
    <td>Bool</td>
    <td>Is the product allow negative stock</td>
  </tr>
  <tr>
    <td>sold_count</td>
    <td>Double</td>
    <td>Sold count of the product</td>
  </tr>
  <tr>
    <td>unit_of_measurement</td>
    <td>String</td>
    <td>Unit of measurement of the products</td>
  </tr>
  <tr>
    <td>buying_prices</td>
    <td>List of BuyingPriceModel</td>
    <td>Buying prices of the product</td>
  </tr>
  <tr>
    <td>buying_price</td>
    <td>Decimal</td>
    <td>Average buying price of the product</td>
  </tr>
  <tr>
    <td>inventories</td>
    <td>List of ProductInventory</td>
    <td>Inventories of the product</td>
  </tr>
  <tr>
    <td>ingredients</td>
    <td>List of ProductIngredients</td>
    <td>Ingredients of the product</td>
  </tr>
  <tr>
    <td>variant_options</td>
    <td>List of ProductVariants</td>
    <td>Variants of the product</td>
  </tr>
  <tr>
    <td>bundles</td>
    <td>List of ProductCombos</td>
    <td>Combo set of the product</td>
  </tr>
  <tr>
    <td>modifier_groups</td>
    <td>List of ModifierGroups</td>
    <td>Modifier groups of the product</td>
  </tr>
  <tr>
    <td>images</td>
    <td>String</td>
    <td>Images of the product</td>
  </tr>
  <tr>
    <td>need_scale</td>
    <td>Boolean</td>
    <td>This parameter is useful if Scale add on is active</td>
  </tr>
  <tr>
    <td>is_active</td>
    <td>Boolean</td>
    <td>Product status</td>
  </tr>
  <tr>
    <td>modified_date</td>
    <td>DateTime</td>
    <td>Limits the returned products to those modified after or on the specified date, given ISO 8601 date format without the time zone info.</td>
  </tr>
</table>

## ProductInventory

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>outlet_id</td>
    <td>Guid</td>
    <td>Outlet id of the inventory</td>
  </tr>
  <tr>
    <td>outlet_name</td>
    <td>String</td>
    <td>Outlet name of the inventory</td>
  </tr>
  <tr>
    <td>unit_in_stock</td>
    <td>Double</td>
    <td>Unit in stock of the inventory</td>
  </tr>
</table>

## BuyingPriceModel

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>outlet_id</td>
    <td>Guid</td>
    <td>Outlet id of the buying price</td>
  </tr>
  <tr>
    <td>buying_price</td>
    <td>Decimal</td>
    <td>Price of the buying price</td>
  </tr>
</table>

## ProductIngredients

<table>
  <tr>
    <td>Name</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>product_id</td>
    <td>String</td>
    <td>Product id of the product ingredients</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Product name of the product ingredients</td>
  </tr>
  <tr>
    <td>sku</td>
    <td>String</td>
    <td>SKU of the product ingredients</td>
  </tr>
  <tr>
    <td>quantity</td>
    <td>Double</td>
    <td>Quantity of the product ingredients</td>
  </tr>
</table>

## ProductVariants

Public API v2
&lt;page_number&gt;35&lt;/page_number&gt;

---


## Page 36

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>option</td>
      <td>String</td>
      <td>Option of the product variants</td>
    </tr>
    <tr>
      <td>value</td>
      <td>String</td>
      <td>Value of the product variants</td>
    </tr>
  </tbody>
</table>

## ProductCombos

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>product_id</td>
      <td>Guid</td>
      <td>Uniqueidentifier of the product combos</td>
    </tr>
    <tr>
      <td>sku</td>
      <td>String</td>
      <td>SKU of the product combos</td>
    </tr>
    <tr>
      <td>category</td>
      <td>String</td>
      <td>Category of the product combos</td>
    </tr>
    <tr>
      <td>product_name</td>
      <td>String</td>
      <td>Name of the product combos</td>
    </tr>
    <tr>
      <td>variant_name</td>
      <td>String</td>
      <td>Variant name of the product combos if the product is a product variant.</td>
    </tr>
    <tr>
      <td>quantity</td>
      <td>Decimal</td>
      <td>Number of product deducted</td>
    </tr>
  </tbody>
</table>

## Attribute

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>attribute_name</td>
      <td>String</td>
      <td>Name of the attribute</td>
    </tr>
    <tr>
      <td>attribute_value</td>
      <td>String</td>
      <td>Attribute value of the product</td>
    </tr>
  </tbody>
</table>

## Outlet Price

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>outlet_id</td>
      <td>String</td>
      <td></td>
    </tr>
    <tr>
      <td>outlet_name</td>
      <td>String</td>
      <td></td>
    </tr>
    <tr>
      <td>price</td>
      <td>Decimal</td>
      <td></td>
    </tr>
  </tbody>
</table>

## ModifierGroups

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>modifier_group_id</td>
      <td>GUID</td>
      <td>Unique identifier for the modifier group</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Name or label of the modifier group</td>
    </tr>
    <tr>
      <td>modifiers</td>
      <td>List of Object (Modifiers)</td>
      <td>List of modifier options included in the group</td>
    </tr>
    <tr>
      <td>is_active</td>
      <td>Boolean</td>
      <td>Shows if the modifier group is active or not</td>
    </tr>
  </tbody>
</table>

## Modifiers

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>modifier_id</td>
      <td>GUID</td>
      <td>Unique identifier for the modifier option</td>
    </tr>
    <tr>
      <td>modifier_group_id</td>
      <td>GUID</td>
      <td>Identifier linking the option to its modifier group</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Name or label of the individual modifier option</td>
    </tr>
    <tr>
      <td>price</td>
      <td>Decimal</td>
      <td>Price adjustment when this option is selected</td>
    </tr>
    <tr>
      <td>quantity</td>
      <td>Int</td>
      <td>Available stock for this modifier option (if inventory is tracked)</td>
    </tr>
  </tbody>
</table>

# GetStoreInfo

https://storename.isellershop.com/api/v2/GetStoreInfo

Public API v2
&lt;page_number&gt;36&lt;/page_number&gt;

---


## Page 37

Use this call to get store info such as.

*   Store general info
*   Active outlets
*   Active payment types.

## Sample Usage

GET https://storename.isellershop.com/api/v1/GetStoreInfo

<table>
  <thead>
    <tr>
      <th>Params</th>
      <th>Authorization</th>
      <th>Headers (8)</th>
      <th>Body</th>
      <th>Pre-request Script</th>
      <th>Tests</th>
      <th>Settings</th>
      <th colspan="3">Cookies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td>Hide auto-generated headers</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td colspan="3"></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Key</td>
      <td>Value</td>
      <td>Description</td>
      <td>...</td>
      <td>Bulk Edit</td>
      <td>Presets</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>☑ Authorization</td>
      <td>Bearer V5xov5DVelaNSmQEQM0bNH4d4QwsD6Ftaux6...</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>☑ Cache-Control</td>
      <td>no-cache</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>☑ Postman-Token</td>
      <td>&lt;calculated when request is sent&gt;</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>☑ Host</td>
      <td>&lt;calculated when request is sent&gt;</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>☑ User-Agent</td>
      <td>PostmanRuntime/7.33.0</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>☑ Accept</td>
      <td>*/*</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>☑ Accept-Encoding</td>
      <td>gzip, deflate, br</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>☑ Connection</td>
      <td>keep-alive</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Key</td>
      <td>Value</td>
      <td>Description</td>
      <td>...</td>
      <td>Bulk Edit</td>
      <td>Presets</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Response

<table>
  <thead>
    <tr>
      <th>Body</th>
      <th>Cookies</th>
      <th>Headers (7)</th>
      <th>Test Results</th>
      <th>Status: 200 OK</th>
      <th>Time: 168 ms</th>
      <th>Size: 2.27 KB</th>
      <th>Save as example</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pretty</td>
      <td>Raw</td>
      <td>Preview</td>
      <td>Visualize</td>
      <td>JSON</td>
      <td>&lt;img&gt;JSON icon&lt;/img&gt;</td>
      <td>&lt;img&gt;Document icon&lt;/img&gt;</td>
      <td>&lt;img&gt;Save icon&lt;/img&gt;</td>
      <td>&lt;img&gt;More options icon&lt;/img&gt;</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td>10</td>
      <td>11</td>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
      <td>16</td>
      <td>17</td>
      <td>18</td>
      <td>19</td>
      <td>20</td>
      <td>21</td>
      <td>22</td>
    </tr>
    <tr>
      <td>"store_info": {</td>
      <td>"active_outlets": [</td>
      <td>{"outlet_id": "1e88855d-0fdf-cee6-3578-560f46b9e7d9",</td>
      <td>"outlet_code": "GI",</td>
      <td>"outlet_name": "Grand Indonesia",</td>
      <td>"phone": null,</td>
      <td>"address": "Jl. M.H. Thamrin No.1, Kb. Melati, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310",</td>
      <td>"contact_name": "Oki",</td>
      <td>"email": "joki@mail.com"</td>
      <td>}</td>
      <td>,</td>
      <td>{"outlet_id": "02d73109-e313-4190-a744-853a6d99941e",</td>
      <td>"outlet_code": "HO",</td>
      <td>"outlet_name": "Main Outlet",</td>
      <td>"phone": "089623274006",</td>
      <td>"address": "Kirana Two Office Tower, Jalan Boulevard Timur, RT.5/RW.2, East Kelapa Gading, North Jakarta City, Jakarta, Indonesia",</td>
      <td>"contact_name": "Alvin Pratama",</td>
      <td>"email": "alvin.pratama@iseller.id"</td>
      <td>}</td>
      <td>,</td>
      <td>]</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>store_info/</td>
      <td>Object</td>
      <td>Store Info</td>
    </tr>
    <tr>
      <td>error_message</td>
      <td>String</td>
      <td>System error message when error occurred during process.</td>
    </tr>
    <tr>
      <td>status</td>
      <td>Bool</td>
      <td>Status of the request, false means there's an error during the execution process.</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;37&lt;/page_number&gt;

---


## Page 38

# StoreInfo

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>active_outlets</td>
      <td>List of Object (Outlet)</td>
      <td>List of active outlets</td>
    </tr>
    <tr>
      <td>active_payments</td>
      <td>List of Object (PaymentType)</td>
      <td>List of active payments</td>
    </tr>
    <tr>
      <td>store_name</td>
      <td>String</td>
      <td>Name of store</td>
    </tr>
    <tr>
      <td>phone</td>
      <td>String</td>
      <td>Phone Number</td>
    </tr>
    <tr>
      <td>address</td>
      <td>String</td>
      <td>Address detail</td>
    </tr>
    <tr>
      <td>email</td>
      <td>String</td>
      <td>Email associated to this store.</td>
    </tr>
  </tbody>
</table>

# Outlet

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>outlet_id</td>
      <td>Guid</td>
      <td>Uniqueldentifier of the outlet.</td>
    </tr>
    <tr>
      <td>outlet_name</td>
      <td>String</td>
      <td>Name of the outlet</td>
    </tr>
    <tr>
      <td>phone</td>
      <td>String</td>
      <td>Phone number</td>
    </tr>
    <tr>
      <td>address</td>
      <td>String</td>
      <td>Address detail</td>
    </tr>
    <tr>
      <td>contact_name</td>
      <td>String</td>
      <td>Name of contact person associated to this outlet</td>
    </tr>
    <tr>
      <td>email</td>
      <td>String</td>
      <td>Email associated to this outlet</td>
    </tr>
    <tr>
      <td>image</td>
      <td>String</td>
      <td>Image of the outlet</td>
    </tr>
  </tbody>
</table>

# PaymentType

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>Name of payment type</td>
    </tr>
    <tr>
      <td>is_active</td>
      <td>Bool</td>
      <td>Status of the payment type</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>String</td>
      <td>Gateway used for the payment type</td>
    </tr>
  </tbody>
</table>

# GetRegisterShifts

https://storename.isellershop.com/api/v2/GetRegisterShifts

Use this call to get register shifts data for particular set of filter.

## Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>time_zone</td>
      <td>Integer</td>
      <td>N</td>
      <td>Time zone for the given date and also data date conversion. Note that iSeller data stored in UTC +0 time zone.</td>
    </tr>
    <tr>
      <td>created_after</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned register shifts to those created after or on the specified date, given ISO 8601 date format. (e.g. 2017-11-20T10:00:00) without the time zone info</td>
    </tr>
    <tr>
      <td>created_before</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned register shifts to those created before or on the specified date, given ISO 8601 date format without the time zone info.</td>
    </tr>
    <tr>
      <td>modified_date</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned register shifts to those modified after or on the specified date, given ISO 8601 date format without the time zone info.</td>
    </tr>
    <tr>
      <td>modified_before</td>
      <td>DateTime</td>
      <td>Y</td>
      <td>Limits the returned register shifts to those modified before or on the specified date, given ISO 8601 date format without the time zone info.</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;38&lt;/page_number&gt;

---


## Page 39

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Optional</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sort</td>
      <td>String</td>
      <td>Y</td>
      <td>Allows to choose the sorting column. Possible values are <b>CreatedDate</b> and <b>ModifiedDate</b>.</td>
    </tr>
    <tr>
      <td>sort_direction</td>
      <td>String</td>
      <td>Y</td>
      <td>Specify the sorting type. Possible values are <b>ASC</b> and <b>DESC</b>.</td>
    </tr>
    <tr>
      <td>page</td>
      <td>Integer</td>
      <td>Y</td>
      <td>Index of the page that going to be loaded.</td>
    </tr>
    <tr>
      <td>page_size</td>
      <td>Integer</td>
      <td>Y</td>
      <td>Size of the page that going to be loaded.</td>
    </tr>
    <tr>
      <td>includes</td>
      <td>String</td>
      <td>Y</td>
      <td>-</td>
    </tr>
    <tr>
      <td>register_id</td>
      <td>Guid</td>
      <td>Y</td>
      <td>Limit the returned register shifts to those belong to specified RegisterId.</td>
    </tr>
    <tr>
      <td>outlet_id</td>
      <td>Guid</td>
      <td>Y</td>
      <td>Limit the returned register shifts to those belong to specified OutletId.</td>
    </tr>
  </tbody>
</table>

# Sample Usage

POST https://storename.isellershop.com/api/v2/getregistershifts

**Params**
*   Authorization
*   Headers (10)
*   Body
*   Pre-request Script
*   Tests
*   Settings

**Body**
*   **x-www-form-urlencoded**
    *   **created_after**: 2023-10-08T00:00:00
    *   **time_zone**: 7

**Response**

```json
{
  "count": 2,
  "register_shifts": [
    {
      "register_name": "Register #3357 - samsung SM-T505",
      "register_id": "d9d95342-3073-44e5-be6f-4ba0c13161b8",
      "register_shift_id": "eb1fab62-e680-48a8-92b9-014ce5215fd1",
      "open_date": "2023-10-09 19:19:30",
      "closed_date": null
    },
    {
      "register_name": "Register #3358 - samsung SM-T225",
      "register_id": "ab9e2e8e-b6f1-4021-b0ea-ed00d6f505b6",
      "register_shift_id": "4b60841d-6f03-41c2-a7e1-4bb55517ffde",
      "open_date": "2023-10-09 19:42:54",
      "closed_date": null
    }
  ],
  "error_message": null,
  "status": true,
  "time": "00:00:00.0156300"
}
```

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>count</td>
      <td>Integer</td>
      <td>Total register shifts retrieved by the process.</td>
    </tr>
    <tr>
      <td>register_shifts</td>
      <td>List of Object (RegisterShifts)</td>
      <td>List of register shifts requested.</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;39&lt;/page_number&gt;

---


## Page 40

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>error_message</td>
      <td>String</td>
      <td>System error message when error occured during process.</td>
    </tr>
    <tr>
      <td>status</td>
      <td>Bool</td>
      <td>Status of the request, false means there's an error during the execution process</td>
    </tr>
    <tr>
      <td>time</td>
      <td>Timespan</td>
      <td>The processing time</td>
    </tr>
  </tbody>
</table>

## RegisterShifts

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>register_name</td>
      <td>String</td>
      <td>Name of the register</td>
    </tr>
    <tr>
      <td>register_id</td>
      <td>Guid</td>
      <td>Uniqueldentifier of the register</td>
    </tr>
    <tr>
      <td>register_shift_id</td>
      <td>Guid</td>
      <td>Uniqueldentifier of the register shift</td>
    </tr>
    <tr>
      <td>open_date</td>
      <td>DateTime</td>
      <td>Register shift open date</td>
    </tr>
    <tr>
      <td>closed_date</td>
      <td>DateTime</td>
      <td>Register shift closed date</td>
    </tr>
  </tbody>
</table>

<footer>Public API v2</footer>
&lt;page_number&gt;40&lt;/page_number&gt;