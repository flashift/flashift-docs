---
sidebar_position: 1
---

# Get Providers

```js
GET getProviders
```

You can retrieve a list of supported providers.


## HTTP Request

```text
https://interface.flashift.app/api/dev/v1/getProviders
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

  </TabItem>
  <TabItem value="curl" label="cURL">
    
    ```bash
    curl --location 
    --request GET 'https://interface.flashift.app/api/dev/v1/getProviders' \
    --header 'X-Api-Key: {{apiKey}}'
    ```

  </TabItem>
  <TabItem value="python" label="Python">
    
    ```py
    import requests

    # Define the API URL
    url = 'https://interface.flashift.app/api/dev/v1/getProviders'

    # Define the headers, including the API key
    headers = {
        'X-API-Key': '{{apiKey}}'
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
    const url = 'https://interface.flashift.app/api/dev/v1/getProviders';

    // Define the headers, including the API key
    const headers = new Headers({
      'X-API-Key': '{{apiKey}}'
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
        "name": "FixedFloat",
        "enable": true
      },
      {
        "name": "Changelly",
        "enable": false
      },
      {
        "name": "ChangeNOW",
        "enable": true
      }
    ]
    ```
  </TabItem>
  <TabItem value="success" label="Success">
    
    ### Response Parameters

    array of ```provider```
    
    | Name       | Type                  | Description
    |------------|-----------------------|------------
    | name       | string                | Provider's name
    | enable     | boolean               | Indicates whether the provider is currently available.
    

  </TabItem>
  <TabItem value="errors" label="Errors">

  ### Error codes

  | Code       | Description
  |------------|-------------
  | 429        | This means you’ve already reached the API limit. If you need an increased rate limit, please contact pro@flashift.app, or you can wait until the limit is reset.       
  | 500        | There is an error on the server side.

  </TabItem>
</Tabs>