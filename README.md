```markdown
# NYC Cafes API

Welcome to the NYC Cafes API! This API provides information about cafes in New York City, allowing you to explore various parameters such as wifi availability, power outlets, and vibes.

## Base URL

The base URL for the API is: `https://nyccafesapi.onrender.com/`

## Endpoints

### Get all cafes

**Endpoint:**
```
GET /cafes
```

**Description:**
Retrieve information about all cafes in New York City.

**Example Request:**
```bash
curl https://nyccafesapi.onrender.com/cafes
```

### Search for cafes

**Endpoint:**
```
GET /cafes/search
```

**Parameters:**
- `wifi` (optional): Filter cafes by wifi availability. Values: `true` or `false`.
- `powerOutlets` (optional): Filter cafes by power outlets availability. Values: `true` or `false`.
- `vibes` (optional): Filter cafes by vibes. Provide a string value for the desired vibes.

**Example Request:**
```bash
curl 'https://nyccafesapi.onrender.com/cafes/search?wifi=true&powerOutlets=true&vibes=Cozy'
```

**Note:** Adjust query parameters based on your preferences.

## Response Format

The API returns data in JSON format. Here's an example response:

```json
[
  {
    "id": 1,
    "name": "Cafe A",
    "location": "New York, NY",
    "wifi": true,
    "powerOutlets": true,
    "vibes": "Cozy"
  },
  {
    "id": 2,
    "name": "Cafe B",
    "location": "New York, NY",
    "wifi": true,
    "powerOutlets": false,
    "vibes": "Hipster"
  }
]
```

## Getting Started

To get started, you can use tools like `curl` or Postman to make HTTP requests to the provided endpoints. Adjust query parameters as needed to filter cafes based on your preferences.




