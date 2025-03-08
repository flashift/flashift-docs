---
sidebar_position: 1
---

# Get Currencies

```js
GET getCurrencies
```

You can retrieve a list of cryptocurrencies.


## HTTP Request

```text
https://interface.flashift.app/api/dev/v1/getCurrencies
```

## Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="request" label="Request" default>
    
    ### Header Parameters

    | Name           | Type   | Required | Description                     |
    |----------------|--------|----------|---------------------------------|
    | Authorization  | string | Yes      | Your API Key                    |
    | Accept         | string | Yes      | Set this to `application/json`  |

  </TabItem>
  <TabItem value="curl" label="cURL">
    
    ```bash
    curl --location 
    --request GET 'https://interface.flashift.app/api/dev/v1/getCurrencies' \
    --header 'Authorization: {{apiKey}}' \
    --header 'Accept: application/json'
    ```

  </TabItem>
  <TabItem value="python" label="Python">
    
    ```py
    import requests

    # Define the API URL
    url = 'https://interface.flashift.app/api/dev/v1/getCurrencies'

    # Define the headers, including the API key
    headers = {
        'Authorization': '{{apiKey}}',
        'Accept': 'application/json'  # Ensure the correct content type is set
    }

    # Send the GET request
    response = requests.get(url, headers=headers)

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
    // Define the API URL
    const url = 'https://interface.flashift.app/api/dev/v1/getCurrencies';

    // Define the headers, including the API key and Accept header
    const headers = new Headers({
      'Authorization': '{{apiKey}}',
      'Accept': 'application/json'  // Ensure the correct content type is set
    });

    // Send the GET request
    fetch(url, { headers })
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
    [
        {
            "symbol": "btc",
            "fullname": "Bitcoin",
            "name": "btc",
            "network": "",
            "explorer": "https://blockchair.com/search?q=",
            "memo": false
        },
        {
            "symbol": "bnbbsc",
            "fullname": "Binance Smart Chain",
            "name": "bnb",
            "network": "BEP20",
            "explorer": "https://bscscan.com/tx/",
            "memo": false
        },
        {
            "symbol": "usdterc20",
            "fullname": "Tether",
            "name": "usdt",
            "network": "ERC20",
            "explorer": "https://blockchair.com/search?q=",
            "memo": false
        },
        {
            "symbol": "usdttrc20",
            "fullname": "Tether",
            "name": "usdt",
            "network": "TRC20",
            "explorer": "https://tokenview.com/en/search/",
            "memo": false
        }
    ]
    ```
  </TabItem>
  <TabItem value="success" label="Success">
    
    ### Response Parameters

    array of ```currency```
    
    | Name       | Type                  | Description
    |------------|-----------------------|------------
    | symbol     | string                | The symbol of the currency.
    | fullname   | string                | The full name of the currency.
    | name       | string                | The name of the currency.
    | network    | string                | The network of the currency.
    | explorer   | string                | The URL of the block explorer for the currency.
    | memo       | boolean               | Indicates whether a memo is required for the currency.
    

  </TabItem>
  <TabItem value="errors" label="Errors">

  ### Error codes

  | Code       | Description
  |------------|-------------
  | 429        | This means you’ve already reached the API limit. If you need an increased rate limit, please contact affiliate@flashift.app, or you can wait until the limit is reset.       
  | 500        | There is an error on the server side.

  </TabItem>
</Tabs>