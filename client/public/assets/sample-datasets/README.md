## Frontend PRD

#### Uptime Data schema

```json
  {
    "event": "disconnected", // string
    "duration": 28800, // time in seconds
    "timestamp": "2024-06-12T10:26:41.818Z" // Date and time in ISO format
  }
```
### Data 0 and 1 schema

```json
  {
    "hour": 12, // number
    "data": 10 // number
  }
```

### Device Data schema

```json
 {
    "deviceName": "Device 01", //string
    "location": {
      "building": "ABCD, XYZ, 1234", //string
      "city": "ABCD", //string
      "district": "ABCD", //string
      "state": "ABCD", //string
      "country": "ABCD", //string
      "pinCode": "123456" //string
    },
    "connectionStatus": {
      "connected": "2024-06-12T10:26:41.818Z", // Date and time in ISO format
      "disconnected": "2024-06-12T10:26:41.818Z" // Date and time in ISO format
    },
    "hw_data": {
      "battery": {
        "timestamp": "2024-06-12T10:26:41.818Z", // Date and time in ISO format
        "percentage": 50, // number 
        "temperature": 30 // number and temperature in celsius
      },
      "sim": {
        "signalStrength": 33, // number and in percentage
        "operator": "AirTel", // string
        "networkBand": "FDD LTE", // string
        "connectedAt": "2024-06-12T10:26:41.818Z" // Date and time in ISO format
      }
    }
  }
```