---
sidebar_position: 2
---

# Getting Started

Welcome to the Flashift API documentation. This guide will help you get started with integrating our API into your application.

## Base URL

- **Production**: `https://interface.flashift.app/api/dev/v1`

## Authentication

Flashift API supports the following authentication methods:

- **API Key**: Obtain your API key from the [Flashift Dashboard](https://dashboard.flashift.app).
- **OAuth**: Use OAuth 2.0 for secure access.
- **JWT**: JSON Web Tokens are supported for authentication.

## Request/Response Format

The API supports the following formats:

- **JSON**: All requests and responses are in JSON format.
- **XML**: XML format is available upon request.

## Rate Limits

To ensure fair usage, the following rate limits are enforced:

- **Max 100 requests per minute**: Please ensure your application adheres to this limit to avoid throttling.

## Error Handling

Common error codes and their meanings:

- **400 Bad Request**: The request could not be understood or was missing required parameters.
- **401 Unauthorized**: Authentication failed or user does not have permissions for the requested operation.
- **403 Forbidden**: Authentication succeeded but authenticated user does not have access to the resource.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: An error occurred on the server.

For more detailed information, please refer to the [API documentation](https://docs.flashift.app).
