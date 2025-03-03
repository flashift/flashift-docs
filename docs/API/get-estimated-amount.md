---
sidebar_position: 2
---

# Get Estimated Amount

```js
GET getEstimatedAmount
```

You can retrieve a list of supported providers.


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
    | X-API-Key  | string                | Yes      | Your API Key

    
    ### Request Parameters

    | Name           | Type                  | Required | Description
    |----------------|-----------------------|----------|------------
    | currency_from  | string                | Yes      | First Coin
    | currency_to    | string                | Yes      | Second Coin
    | amount         | string                | Yes      | The amount

  </TabItem>
  <TabItem value="curl" label="cURL">
    
    ```bash
    curl --location 
    --request GET 'https://interface.flashift.app/api/dev/v1/getEstimatedAmount?currency_from=btc&currency_to=xmr&amount=0.1' \
    --header 'X-Api-Key: {{apiKey}}'
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

    # Define the headers, including the API key
    headers = {
        'X-API-Key': '{{apiKey}}'
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

    // Define the headers, including the API key
    const headers = new Headers({
      'X-API-Key': '{{apiKey}}'
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
        "best_amount": "9707.965197",
        "min_amount": "0.0000387",
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
                "partner_name": "Exolix",
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
    | best_amount| string                | Provider's name
    | min_amount | string               | Indicates whether the provider is currently available.
    | message | string               | Indicates whether the provider is currently available.
    | data | array of ```exchange```               | Indicates whether the provider is currently available.

    ```exchange``` schema:
    
    | Name         | Type                  | Description
    |--------------|-----------------------|------------
    | provider_name| string                | Provider's name
    | exchange_type| string               | Indicates whether the provider is currently available.
    | amount       | string               | Indicates whether the provider is currently available.
    | min_amount   | string               | Indicates whether the provider is currently available.
    | max_amount   | string               | Indicates whether the provider is currently available.
    | tags         | array of string      | Indicates whether the provider is currently available.
    

  </TabItem>
  <TabItem value="errors" label="Errors">

  ### Messages

  | Message       | Description
  |------------|-------------
  | OK        | This means you’ve already reached the API limit. If you need an increased rate limit, please contact pro@flashift.app, or you can wait until the limit is reset.       
  | This pair is not available        | There is an error on the server side.


  ### Error codes

  | Code       | Description
  |------------|-------------
  | 429        | This means you’ve already reached the API limit. If you need an increased rate limit, please contact pro@flashift.app, or you can wait until the limit is reset.       
  | 500        | There is an error on the server side.

  </TabItem>
</Tabs>