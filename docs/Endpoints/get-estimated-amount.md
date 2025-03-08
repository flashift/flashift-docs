---
sidebar_position: 2
---

# Get Estimated Amount

```js
GET getEstimatedAmount
```

This endpoint allows you to estimate the amount received when exchanging between two currencies.


## HTTP Request

```text
https://interface.flashift.app/api/dev/v1/getEstimatedAmount
```

## Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="request" label="Request" default>
    
    ### Header Parameters

    | Name       | Type                  | Required | Description
    |------------|-----------------------|----------|------------
    | Authorization  | string                | Yes      | Your API Key
    | Accept         | string                | Yes      | Set this to `application/json`

    
    ### Request Parameters

    | Name           | Type                  | Required | Description
    |----------------|-----------------------|----------|------------
    | currency_from  | string                | Yes      | The currency you are exchanging from (e.g., BTC)
    | currency_to    | string                | Yes      | The currency you are exchanging to (e.g., XMR)
    | amount         | string                | Yes      | The amount of the currency you are exchanging from

  </TabItem>
  <TabItem value="curl" label="cURL">
    
    ```bash
    curl --location 
    --request GET 'https://interface.flashift.app/api/dev/v1/getEstimatedAmount?currency_from=btc&currency_to=xmr&amount=0.1' \
    --header 'Authorization: {{apiKey}}' \
    --header 'Accept: application/json'
    ```

  </TabItem>
  <TabItem value="python" label="Python">
    
    ```py
    import requests

    # Define the API URL with query parameters
    url = 'https://interface.flashift.app/api/dev/v1/getEstimatedAmount'

    # Define the query parameters
    params = {
        'currency_from': 'btc',
        'currency_to': 'xmr',
        'amount': 0.1
    }

    # Define the headers, including the API key and Accept header
    headers = {
        'Authorization': '{{apiKey}}',
        'Accept': 'application/json'  # Ensure the correct content type is set
    }

    # Send the GET request with parameters and headers
    response = requests.get(url, headers=headers, params=params)

    # Check if the request was successful
    if response.status_code == 200:
        # Print the JSON response
        print(response.json())
    else:
        print(f"Failed to retrieve data. Status code: {response.status_code}")
    ```

  </TabItem>

  <TabItem value="javascript" label="JavaScript">
    
    ```js
    // Define the API URL with query parameters
    const url = 'https://interface.flashift.app/api/dev/v1/getEstimatedAmount';

    // Define the query parameters
    const params = new URLSearchParams({
      currency_from: 'btc',
      currency_to: 'xmr',
      amount: 0.1
    });

    // Define the headers, including the API key and Accept header
    const headers = new Headers({
      'Authorization': '{{apiKey}}',
      'Accept': 'application/json'  // Ensure the correct content type is set
    });

    // Send the GET request with parameters and headers
    fetch(`${url}?${params.toString()}`, { headers })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Failed to retrieve data. Status code: ${response.status}`);
        }
      })
      .then(data => {
        // Print the JSON response
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    ```

  </TabItem>
</Tabs>

## Response

<Tabs>
  <TabItem value="example" label="Example" default>
    
    ### Sample Response

    ```json title="application/json"
    {
        "message": "OK",
        "data": [
            {
                "provider_name": "EasyBit",
                "exchange_type": "floating",
                "amount": "9707.965197",
                "min_amount": "0.0004",
                "max_amount": "61.45",
                "tags": [
                    "Recommended",
                    "AI Best Rate",
                    "Best Rate"
                ]
            },
            {
                "provider_name": "Exolix",
                "exchange_type": "floating",
                "amount": "9671.93507",
                "min_amount": "0.00050126",
                "max_amount": null,
                "tags": [
                    "Best In KYC"
                ]
            }
        ]
    }
    ```
  </TabItem>
  <TabItem value="success" label="Success">
    
    ### Response Parameters

    | Name       | Type                  | Description
    |------------|-----------------------|------------
    | message    | string                | A message indicating the status of the request.
    | data       | array of ```exchange``` | An array containing exchange information.

    ```exchange``` schema:
    
    | Name         | Type                  | Description
    |--------------|-----------------------|------------
    | provider_name| string                | The name of the exchange provider.
    | exchange_type| string                | The type of exchange rate (e.g., ``floating``, ``fixed``).
    | amount       | string                | The estimated amount received in the target currency.
    | min_amount   | string                | The minimum amount allowed for the exchange.
    | max_amount   | string                | The maximum amount allowed for the exchange.
    | tags         | array of string       | Tags associated with the exchange, such as "Recommended" or "Best Rate".
    

  </TabItem>
  <TabItem value="errors" label="Errors">

  ### Messages

  | Message       | Description
  |------------|-------------
  | OK        | The request was successful, and the response contains the expected data.
  | Pair is not valid        | The provided currency pair is not supported or invalid.
  | Minimum amount problem   | The specified amount is below the minimum allowed limit.


  ### Error codes

  | Code       | Description
  |------------|-------------
  | 429        | This means you’ve already reached the API limit. If you need an increased rate limit, please contact affiliate@flashift.app, or you can wait until the limit is reset.       
  | 500        | There is an error on the server side.

  </TabItem>
</Tabs>