# Week 5 Day 2 — Three requests, side by side

Fill this in from Postman or Bruno. **Never paste your API key in this file.**
This repo is public: anyone on the internet can read it.
Write `{{gemini_key}}` (the variable's name) instead.

|                                                                                 | Weather request                          | AI request                                                                                         | Add a dish                          |
| ------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Method (GET / POST)                                                             | GET                                      | POST                                                                                               |                                     |
| Endpoint (the address, filled in for you)                                       | `https://api.open-meteo.com/v1/forecast` | `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent` | `https://dummyjson.com/recipes/add` |
| Where the details go (query params or body?)                                    | query params                             | body                                                                                               |                                     |
| Headers I needed                                                                | key                                      | value                                                                                              |                                     |
| Does it need a key?                                                             | yes                                      |                                                                                                    |                                     |
| Status I got                                                                    | 200 OK                                   |                                                                                                    |                                     |
| The part of the response I care about (the path, like `current.temperature_2m`) | text                                     |                                                                                                    |                                     |

## What was different?

Write 2–3 sentences in your own words.
The AI request and Add a dish are both POST. What job does each one do?

The key difference is that AI Request creates a response, while Add a Dish creates a database entry.

## Did my dish really save?

What status did `Get my dish` give you? What does that tell you?

## Extra (if you finish early)

- Send the same prompt twice. Is the answer the same? Why might that be?
- Try a different model name in the address. What changed in the response?
