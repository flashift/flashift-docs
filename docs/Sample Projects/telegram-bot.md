---
sidebar_position: 1
---

# Simple Telegram Bot for Exchange using Flashift API

## Introduction
This guide explains how to create a **Telegram bot** using Python that allows users to **exchange cryptocurrencies** using the **Flashift API**. The bot will:

- Retrieve supported exchange providers
- Get estimated exchange amounts
- Initiate transactions
- Provide transaction status updates

## Prerequisites
- Python 3.x installed
- A Telegram bot token (generated via BotFather)
- Flashift API Key
- Required Python libraries:
  ```sh
  pip install python-telegram-bot requests
  ```

## Step 1: Create a Telegram Bot
1. Open Telegram and search for `BotFather`.
2. Type `/newbot` and follow the instructions.
3. Copy the bot **token** provided.
4. Save it as an environment variable or in your script.

## Step 2: Setting Up Flashift API
### Obtain API Key
- Sign up on [Flashift](https://flashift.app/) and get an **API Key**.
- Store the API Key securely.

## Step 3: Writing the Telegram Bot Code

### **1. Initialize the Bot**
```python
from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext
import requests
import os

# Load API keys
TELEGRAM_BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN"
FLASHIFT_API_KEY = "YOUR_FLASHIFT_API_KEY"

updater = Updater(TELEGRAM_BOT_TOKEN, use_context=True)
dispatcher = updater.dispatcher
```

### **2. Get Supported Providers**
```python
def get_providers():
    url = "https://interface.flashift.app/api/dev/v1/getProviders"
    headers = {"X-API-Key": FLASHIFT_API_KEY}
    response = requests.get(url, headers=headers)
    return response.json() if response.status_code == 200 else {}
```

### **3. Get Estimated Exchange Amount**
```python
def get_estimated_amount(currency_from, currency_to, amount):
    url = "https://interface.flashift.app/api/dev/v1/getEstimatedAmount"
    params = {"currency_from": currency_from, "currency_to": currency_to, "amount": amount}
    headers = {"X-API-Key": FLASHIFT_API_KEY}
    response = requests.get(url, headers=headers, params=params)
    return response.json() if response.status_code == 200 else {}
```

### **4. Create an Exchange Transaction**
```python
def create_transaction(provider, currency_from, currency_to, to_address, amount):
    url = "https://interface.flashift.app/api/dev/v1/createTransaction"
    headers = {"X-API-Key": FLASHIFT_API_KEY, "Content-Type": "application/json"}
    data = {
        "provider_name": provider,
        "currency_from": currency_from,
        "currency_to": currency_to,
        "to_address": to_address,
        "amount": str(amount),
        "fixed": False
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json() if response.status_code == 200 else {}
```

### **5. Handle Commands in Telegram Bot**
#### `/start` Command
```python
def start(update: Update, context: CallbackContext):
    update.message.reply_text("Welcome to Crypto Exchange Bot! Use /exchange to swap crypto.")

dispatcher.add_handler(CommandHandler("start", start))
```

#### `/providers` Command
```python
def providers(update: Update, context: CallbackContext):
    data = get_providers()
    message = "Available Providers:\n" + "\n".join([p['name'] for p in data])
    update.message.reply_text(message)

dispatcher.add_handler(CommandHandler("providers", providers))
```

#### `/estimate` Command
```python
def estimate(update: Update, context: CallbackContext):
    if len(context.args) < 3:
        update.message.reply_text("Usage: /estimate BTC ETH 0.1")
        return
    
    currency_from, currency_to, amount = context.args
    data = get_estimated_amount(currency_from, currency_to, amount)
    message = f"Estimated {amount} {currency_from} -> {data.get('best_amount', 'N/A')} {currency_to}"
    update.message.reply_text(message)

dispatcher.add_handler(CommandHandler("estimate", estimate))
```

#### `/exchange` Command
```python
def exchange(update: Update, context: CallbackContext):
    if len(context.args) < 4:
        update.message.reply_text("Usage: /exchange provider BTC ETH wallet_address 0.1")
        return
    
    provider, currency_from, currency_to, to_address, amount = context.args
    data = create_transaction(provider, currency_from, currency_to, to_address, amount)
    message = f"Transaction Created! ID: {data.get('exchange_id', 'N/A')}"
    update.message.reply_text(message)

dispatcher.add_handler(CommandHandler("exchange", exchange))
```

### **6. Start the Bot**
```python
updater.start_polling()
updater.idle()
```

## Conclusion
You now have a **Telegram bot** that can retrieve providers, estimate exchange rates, and execute cryptocurrency swaps using the **Flashift API**. You can extend this bot by adding:

- **Error Handling** for better user experience
- **Transaction Tracking** using `/getTransactionInfo`
- **Webhook Support** for real-time updates

