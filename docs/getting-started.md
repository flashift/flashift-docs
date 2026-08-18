---
sidebar_position: 2
---

# Getting Started

Welcome to the Flashift API documentation. This guide will help you get started with integrating our API into your application.

## Base URL

- **Production**: `https://interfacev2.flashift.app/api/dev/v2`

## Authentication

Flashift API supports the following authentication method:

- **Bearer Authentication**: To obtain your API key, please sign up on [Flashift](https://flashift.app/auth/register/). Then, navigate to Settings and click the Get API Key button.
## Request/Response Format

The API supports the following formats:

- **JSON**: All requests and responses are in JSON format. Please set the `Accept` header to `application/json` in all your requests.

## Rate Limits

To ensure fair usage, the following rate limits are enforced:

- **Maximum of 10 requests per minute**: Ensure your application complies with this limit to prevent throttling. If you require a higher limit, please contact us at [affiliate@flashift.app](mailto:affiliate@flashift.app).

## Error Handling

Common error codes and their meanings:

- **400 Bad Request**: The request could not be understood or was missing required parameters.
- **401 Unauthorized**: Authentication failed or user does not have permissions for the requested operation.
- **403 Forbidden**: Authentication succeeded but authenticated user does not have access to the resource.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: An error occurred on the server.
