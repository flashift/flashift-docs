---
sidebar_position: 5
---

# Get Transaction Info

```js
GET getTransactionInfo
```

You can retrieve a transaction information.


## HTTP Request

```text
https://interface.flashift.app/api/dev/v1/getTransactionInfo
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

    | Name          | Type                  | Required | Description
    |---------------|-----------------------|----------|------------
    | exchange_id   | string                | Yes      | The unique identifier for the exchange transaction

  </TabItem>
  <TabItem value="curl" label="cURL">
    
    ```bash
    curl --location 
    --request GET 'https://interface.flashift.app/api/dev/v1/getTransactionInfo?exchange_id=FixedFloat_floating_XXXX' \
    --header 'Authorization: {{apiKey}}' \
    --header 'Accept: application/json'
    ```

  </TabItem>
  <TabItem value="python" label="Python">
    
    ```py
    import requests

    # Define the API URL with query parameters
    url = 'https://interface.flashift.app/api/dev/v1/getTransactionInfo'

    # Define the query parameters
    params = {
        'exchange_id': 'FixedFloat_floating_XXXX'  # Replace with the actual exchange_id
    }

    # Define the headers, including the API key and Accept header
    headers = {
        'Authorization': '{{apiKey}}',  # Replace with your actual API key
        'Accept': 'application/json'  # Ensure the correct content type is set
    }

    # Send the GET request with parameters and headers
    response = requests.get(url, headers=headers, params=params)

    # Check if the request was successful
    if response.status_code == 200:
        # Print the JSON response
        print(response.json())
    else:
        print(f"Failed to retrieve transaction info. Status code: {response.status_code}")
    ```

  </TabItem>

  <TabItem value="javascript" label="JavaScript">
    
    ```js
    // Define the API URL with query parameters
    const url = 'https://interface.flashift.app/api/dev/v1/getTransactionInfo';

    // Define the query parameters
    const params = new URLSearchParams({
      exchange_id: 'FixedFloat_floating_XXXX'  // Replace with the actual exchange_id
    });

    // Define the headers, including the API key and Accept header
    const headers = new Headers({
      'Authorization': '{{apiKey}}',  // Replace with your actual API key
      'Accept': 'application/json'  // Ensure the correct content type is set
    });

    // Send the GET request with parameters and headers
    fetch(`${url}?${params.toString()}`, { headers })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Failed to retrieve transaction info. Status code: ${response.status}`);
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
        "currency_from": "btc",
        "currency_to": "eth",
        "amount_from": "0.1",
        "amount_to": "9833.9734",
        "address_from": "bc1qtc20qp3scn4fuscmhplkuxne2k25g5ycafshye",
        "extra_from": null,
        "address_to": "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
        "extra_to": null,
        "status": "waiting",
        "hash_from": null,
        "hash_to": null,
    }
    ```
  </TabItem>
  <TabItem value="success" label="Success">
    
    ### Exchange Status

    | Status      | Description                       |
    |-------------|-----------------------------------|
    | waiting     | The transaction is waiting to be processed. |
    | confirming  | The transaction is being confirmed. |
    | exchanging  | The transaction is in the process of exchanging currencies. |
    | sending     | The transaction is being sent.    |
    | finished    | The transaction has been completed successfully. |
    | failed      | The transaction has failed. Please contact `support@flashift.app`       |
    | refunded    | The transaction has been refunded. |


    ### Response Parameters

    
    | Name         | Type     | Description                                      |
    |--------------|----------|--------------------------------------------------|
    | currency_from| string   | The currency being exchanged from.               |
    | currency_to  | string   | The currency being exchanged to.                 |
    | amount_from  | string   | The amount of currency being exchanged from.     |
    | amount_to    | string   | The amount of currency being exchanged to.       |
    | address_from | string   | The address from which the currency is sent.     |
    | extra_from   | string   | Additional information for the sending address.  |
    | address_to   | string   | The address to which the currency is sent.       |
    | extra_to     | string   | Additional information for the receiving address.|
    | status       | string   | The current status of the transaction.           |
    | hash_from    | string   | The transaction hash for the sending currency.   |
    | hash_to      | string   | The transaction hash for the receiving currency. |

  </TabItem>
  <TabItem value="errors" label="Errors">

  ### Error codes

  | Status | Description
  |--------|-------------
  | Error  | The specified transaction could not be located.

  | Code       | Description
  |------------|-------------
  | 429        | This means you’ve already reached the API limit. If you need an increased rate limit, please contact affiliate@flashift.app, or you can wait until the limit is reset.       
  | 500        | There is an error on the server side.

  </TabItem>
</Tabs>