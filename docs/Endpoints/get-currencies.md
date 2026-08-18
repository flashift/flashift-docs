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
https://interfacev2.flashift.app/api/dev/v2/getCurrencies
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
    --request GET 'https://interfacev2.flashift.app/api/dev/v2/getCurrencies' \
    --header 'Authorization: {{apiKey}}' \
    --header 'Accept: application/json'
    ```

  </TabItem>
  <TabItem value="python" label="Python">
    
    ```py
    import requests

    # Define the API URL
    url = 'https://interfacev2.flashift.app/api/dev/v2/getCurrencies'

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
    const url = 'https://interfacev2.flashift.app/api/dev/v2/getCurrencies';

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
          "symbol": "rlusd",
          "network": "eth",
          "fullname": "Ripple USD",
          "image": "https://static.flashift.app/image/coin/L1utwQyBQ/rlusd.png",
          "memo": false,
          "explorer": "https://blockchair.com/ethereum/transaction/"
      },
      {
          "symbol": "rlusd",
          "network": "xrp",
          "fullname": "Ripple USD",
          "image": "https://static.flashift.app/image/coin/L1utwQyBQ/rlusd.png",
          "memo": true,
          "explorer": "https://blockchair.com/xrp-ledger/transaction/"
      },
      {
          "symbol": "paxg",
          "network": "eth",
          "fullname": "PAX Gold",
          "image": "https://static.flashift.app/image/coin/YRTkUcMi/paxg.svg",
          "memo": false,
          "explorer": "https://blockchair.com/ethereum/transaction/"
      },
      {
          "symbol": "wlfi",
          "network": "eth",
          "fullname": "World Liberty Financial",
          "image": "https://static.flashift.app/image/coin/gbTmiRLbC/wlfi.PNG",
          "memo": false,
          "explorer": "https://blockchair.com/ethereum/transaction/"
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
    | network    | string                | The network of the currency.
    | fullname   | string                | The full name of the currency.
    | image      | string                | The URL of the image for the currency.
    | memo       | boolean               | Indicates whether a memo is required for the currency.
    | explorer   | string                | The URL of the block explorer for the currency.
    

  </TabItem>
  <TabItem value="errors" label="Errors">

  ### Error codes

  | Code       | Description
  |------------|-------------
  | 429        | This means you’ve already reached the API limit. If you need an increased rate limit, please contact affiliate@flashift.app, or you can wait until the limit is reset.       
  | 500        | There is an error on the server side.

  </TabItem>
</Tabs>