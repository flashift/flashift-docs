---
sidebar_position: 4
---


# Create Transaction

```js
POST createTransaction
```

You can create a new transaction.


## HTTP Request

```text
https://interfacev2.flashift.app/api/dev/v2/createTransaction
```

## Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="request" label="Request" default>
    
    ### Header Parameters

    | Name           | Type                  | Required | Description
    |----------------|-----------------------|----------|------------
    | Authorization  | string                | Yes      | Your API Key
    | Accept         | string                | Yes      | Set this to `application/json`

    ### Body Parameters
    | Name          | Type                  | Required | Description
    |---------------|-----------------------|----------|------------
    | provider_name | string                | Yes      | The name of the exchange provider.
    | symbol_from | string                | Yes      | The symbol you are exchanging from (e.g., BTC).
    | network_from | string                | Yes      | The network you are exchanging from (e.g., BTC).
    | symbol_to   | string                | Yes      | The symbol you are exchanging to (e.g., USDT).
    | network_to   | string                | Yes      | The symbol you are exchanging to (e.g., ETH).
    | to_address    | string                | Yes      | The recipient's address for the target currency.
    | to_extra_id   | string                | Optional | An additional identifier required by some currencies (e.g., destination tag for XRP).
    | amount        | string                | Yes      | The amount of the currency you are exchanging from.
    | fixed         | boolean               | Yes      | Indicates whether the exchange rate is fixed or floating.


  </TabItem>

  <TabItem value="payload" label="Payload">
    
    ```json title="application/json"
    {
        "provider_name": "Exolix",
        "symbol_from": "btc",
        "network_from": "btc",
        "symbol_to": "usdt",
        "network_to": "eth",
        "to_address": "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
        "to_extra_id": "",
        "amount": "0.1",
        "fixed": false
    }
    ```

    <details>
        <summary>Example with Extra ID</summary>

        ```json title="application/json"
        {
            "provider_name": "Exolix",
            "symbol_from": "btc",
            "network_from": "btc",
            "symbol_to": "xrp",
            "network_to": "xrp",
            "to_address": "rGrvdFfjLxMb7L6s8toi5tEeEtHgP9QDMy",
            "to_extra_id": "3002133",
            "amount": "0.1",
            "fixed": false
        }
        ```
    </details>

  </TabItem>

  <TabItem value="curl" label="cURL">
    
    ```bash
    curl --location --request POST 'https://interfacev2.flashift.app/api/dev/v2/createTransaction' \
    --header 'Authorization: {{apiKey}}' \
    --header 'Accept: application/json' \
    --data-raw '{
            "provider_name": "Exolix",
            "symbol_from": "btc",
            "network_from": "btc",
            "symbol_to": "xrp",
            "network_to": "xrp",
            "to_address": "rGrvdFfjLxMb7L6s8toi5tEeEtHgP9QDMy",
            "to_extra_id": "3002133",
            "amount": "0.1",
            "fixed": false
        }'
    ```

  </TabItem>
  <TabItem value="python" label="Python">
    
    ```py
    import requests
    import json

    # Define the API URL
    url = 'https://interfacev2.flashift.app/api/dev/v2/createTransaction'

    # Define the headers, including the API key
    headers = {
        'Authorization': '{{apiKey}}',
        'Content-Type': 'application/json',  # Ensure the correct content type is set
        'Accept': 'application/json'  # Add Accept header to specify the response format
    }

    # Define the JSON payload
    data = {
        "provider_name": "Exolix",
        "symbol_from": "btc",
        "network_from": "btc",
        "symbol_to": "xrp",
        "network_to": "xrp",
        "to_address": "rGrvdFfjLxMb7L6s8toi5tEeEtHgP9QDMy",
        "to_extra_id": "3002133",
        "amount": "0.1",
        "fixed": False
    }

    # Send the POST request with headers and JSON data
    response = requests.post(url, headers=headers, json=data)

    # Check if the request was successful
    if response.status_code == 200:
        # Print the JSON response
        print(response.json())
    else:
        print(f"Failed to create transaction. Status code: {response.status_code}")
    ```

  </TabItem>
  
  <TabItem value="javascript" label="JavaScript">
    
    ```js
    // Define the API URL
    const url = 'https://interfacev2.flashift.app/api/dev/v2/createTransaction';

    // Define the headers, including the API key
    const headers = new Headers({
      'Authorization': '{{apiKey}}',
      'Content-Type': 'application/json',  // Ensure the correct content type is set
      'Accept': 'application/json'  // Add Accept header to specify the response format
    });

    // Define the JSON payload
    const data = {
      provider_name: "Exolix",
      "symbol_from": "btc",
      "network_from": "btc",
      "symbol_to": "xrp",
      "network_to": "xrp",
      to_address: "rGrvdFfjLxMb7L6s8toi5tEeEtHgP9QDMy",
      to_extra_id: "3002133",
      amount: "0.1",
      fixed: false
    };

    // Send the POST request with headers and JSON data
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to create transaction. Status code: ${response.status}`);
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
        "status": "OK",
        "exchange_id": "Exolix_floating_XXXXXXX"
    }
    ```
  </TabItem>
  <TabItem value="success" label="Success">
    
    ### Response Parameters
    
    | Name         | Type                  | Description
    |--------------|-----------------------|------------
    | status       | string                | The status of the transaction (e.g., "OK" if successful)
    | exchange_id  | string                | The unique identifier for the created exchange transaction
    

  </TabItem>
  <TabItem value="errors" label="Errors">

  ### Error codes

  | Code       | Description
  |------------|-------------
  | 429        | This means you've already reached the API limit. If you need an increased rate limit, please contact affiliate@flashift.app, or you can wait until the limit is reset.       
  | 500        | There is an error on the server side.

  </TabItem>
</Tabs>