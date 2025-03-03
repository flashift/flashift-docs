---
sidebar_position: 3
---


# Create Transaction

```js
POST createTransaction
```

You can create a new transaction.


## HTTP Request

```text
https://interface.flashift.app/api/dev/v1/createTransaction
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

    ### Body Parameters

    | Name          | Type                  | Required | Description
    |---------------|-----------------------|----------|------------
    | provider_name | string                | Yes      | Your API Key
    | currency_from | string                | Yes      | Your API Key
    | currency_to   | string                | Yes      | Your API Key
    | to_address    | string                | Yes      | Your API Key
    | to_extra_id   | string                | Optional | Your API Key
    | amount        | string                | Yes      | Your API Key
    | fixed         | boolean               | Yes      | Your API Key


  </TabItem>

  <TabItem value="payload" label="Payload">
    
    ```json title="application/json"
    {
        "provider_name": "Exolix",
        "currency_from": "btc",
        "currency_to": "usdterc20",
        "to_address": "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
        "amount": "0.1",
        "fixed": false
    }
    ```

    <details>
        <summary>Example with Extra ID</summary>

        ```json title="application/json"
        {
            "provider_name": "Exolix",
            "currency_from": "btc",
            "currency_to": "xrp",
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
    curl --location --request POST 'https://interface.flashift.app/api/dev/v1/createTransaction' \
    --header 'X-API-Key: {{apiKey}}' \
    --data-raw '{
            "provider_name": "Exolix",
            "currency_from": "btc",
            "currency_to": "xrp",
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
    url = 'https://interface.flashift.app/api/dev/v1/createTransaction'

    # Define the headers, including the API key
    headers = {
        'X-API-Key': '{{apiKey}}',
        'Content-Type': 'application/json'  # Ensure the correct content type is set
    }

    # Define the JSON payload
    data = {
        "provider_name": "Exolix",
        "currency_from": "btc",
        "currency_to": "xrp",
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
    const url = 'https://interface.flashift.app/api/dev/v1/createTransaction';

    // Define the headers, including the API key
    const headers = new Headers({
      'X-API-Key': '{{apiKey}}',
      'Content-Type': 'application/json'  // Ensure the correct content type is set
    });

    // Define the JSON payload
    const data = {
      provider_name: "Exolix",
      currency_from: "btc",
      currency_to: "xrp",
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
    | status       | string                | Provider's name
    | exchange_id  | string                | Indicates whether the provider is currently available.
    

  </TabItem>
  <TabItem value="errors" label="Errors">

  ### Error codes

  | Code       | Description
  |------------|-------------
  | 429        | This means you've already reached the API limit. If you need an increased rate limit, please contact pro@flashift.app, or you can wait until the limit is reset.       
  | 500        | There is an error on the server side.

  </TabItem>
</Tabs>