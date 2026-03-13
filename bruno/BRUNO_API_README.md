# Prime Video API Test Suite - Bruno

Comprehensive API endpoint testing suite for Prime Video using Bruno - a lightweight REST API client and testing tool.

## 📋 Overview

This collection contains **10 API endpoint tests** covering various HTTP methods, response validations, and performance checks for the Prime Video platform.

## 🗂️ Project Structure

```
bruno/
├── bruno.json                          # Collection metadata and documentation
├── environments/
│   └── production.bru                  # Environment variables (base URLs, timeouts)
├── endpoints/
│   ├── 01-GET-HomePage.bru            # Test: Home page loads correctly
│   ├── 02-GET-CollectionData.bru      # Test: Collection data API endpoint
│   ├── 03-POST-SearchContent.bru      # Test: Search content endpoint
│   ├── 04-GET-CheckHeaders.bru        # Test: HTTP security headers
│   ├── 05-HEAD-CheckAvailability.bru  # Test: Resource availability
│   ├── 06-GET-CacheBehavior.bru       # Test: Cache control behavior
│   ├── 07-GET-InvalidPath.bru         # Test: Error handling (404)
│   ├── 08-OPTIONS-AllowedMethods.bru  # Test: Allowed HTTP methods
│   ├── 09-GET-ContentEncoding.bru     # Test: Content encoding/compression
│   ├── 10-GET-Consistency.bru         # Test: Response consistency
│   └── BRUNO_API_README.md            # This file
└── scripts/                            # (Optional) Pre/post scripts
```

## 📝 Test Cases

### Test-001: GET - Home Page
**Description:** Verify main collection page loads correctly  
**Method:** GET  
**Endpoint:** `{{base_url}}/-/es/collection/IncludedwithPrime`  
**Assertions:**
- Status code: 200
- Content-Type contains 'html'
- Response time < 5 seconds
- Body contains 'Prime'

### Test-002: GET - Collection Data
**Description:** Verify collection data API endpoint responds correctly  
**Method:** GET  
**Endpoint:** `{{content_api}}/catalog/GetPlaybackResources`  
**Assertions:**
- Status in [200, 401, 403]
- Content-Type is JSON
- Response time < 30 seconds

### Test-003: POST - Search Content
**Description:** Test search content endpoint with sample data  
**Method:** POST  
**Endpoint:** `{{content_api}}/search/SearchAndBrowse`  
**Body:**
```json
{
  "searchString": "movie",
  "pageNumber": 1,
  "pageSize": 50,
  "sortBy": "relevance",
  "languages": ["es"]
}
```
**Assertions:**
- Status in [200, 400, 401]
- Content-Type is JSON
- Response time < 10 seconds

### Test-004: GET - Check Headers
**Description:** Validate HTTP security headers  
**Method:** GET  
**Assertions:**
- Status code: 200
- Has Cache-Control or ETag header
- May have security headers

### Test-005: HEAD - Check Availability
**Description:** Verify resource availability with HEAD request  
**Method:** HEAD  
**Assertions:**
- Status in [200, 301, 302]
- Has response headers
- Response time < 3 seconds

### Test-006: GET - Cache Behavior
**Description:** Test cache control behavior  
**Method:** GET  
**Headers:** `Cache-Control: max-age=0`  
**Assertions:**
- Status code: 200
- Has Content-Length or Transfer-Encoding
- Response body not empty
- Body contains 'Prime'

### Test-007: GET - Invalid Path
**Description:** Test error handling for invalid endpoints  
**Method:** GET  
**Endpoint:** `{{base_url}}/invalid-endpoint-12345`  
**Expected Status:** 404 or redirect [301, 302]  
**Assertions:**
- Status in [404, 301, 302]
- Response time < 5 seconds
- Has Content-Type header

### Test-008: OPTIONS - Allowed Methods
**Description:** Check allowed HTTP methods  
**Method:** OPTIONS  
**Assertions:**
- Status in [200, 204, 405]
- Response time < 3 seconds

### Test-009: GET - Content Encoding
**Description:** Test content encoding and compression  
**Method:** GET  
**Headers:** `Accept-Encoding: gzip, deflate, br`  
**Assertions:**
- Status code: 200
- Has Content-Encoding or Transfer-Encoding
- Body is properly encoded
- Content-Type is text/html

### Test-010: GET - Response Consistency
**Description:** Verify consistent responses across requests  
**Method:** GET  
**Assertions:**
- Status code: 200
- Content-Type contains 'text/html'
- Body length > 100 characters
- Body contains 'Prime'
- Response time < 30 seconds
- Has Date or Server header

## 🚀 Getting Started

### Prerequisites

- **Bruno** - Download from [bruno.app](https://www.usebruno.com/)
- **Windows/Mac/Linux** - Bruno runs on all platforms

### Installation

1. **Download Bruno**
   - Visit https://www.usebruno.com/downloads
   - Install for your operating system

2. **Import Collection**
   - Open Bruno
   - Click "Open Collection"
   - Navigate to `bruno/` directory in this project
   - Select the collection folder

3. **Select Environment**
   - In Bruno, select "production" environment
   - This loads the base URLs and variables

## 🔧 Running Tests

### Run All Tests
1. Select the collection folder in Bruno
2. Click "Run All Tests" (or press Ctrl+Alt+T)
3. View results in the test panel

### Run Single Test
1. Open individual `.bru` file
2. Click "Send" (Ctrl+Enter) to run the request
3. View assertions and response

### Run Test Group
1. Select multiple `.bru` files (Ctrl+Click)
2. Right-click → "Run Tests"
3. View aggregated results

## 📊 Test Results

After running tests, Bruno displays:

- ✅ **Pass/Fail Status** - Green for pass, red for fail
- ⏱️ **Response Times** - In milliseconds
- 📋 **Status Codes** - HTTP response codes
- 📎 **Headers** - Response headers
- 📄 **Body Preview** - Response body content
- 🔍 **Assertion Details** - Which assertions passed/failed

## 🔐 Environment Variables

The `production.bru` environment file contains:

```
base_url: https://www.primevideo.com
api_base: https://api.primevideo.com
content_api: https://atcglobal-eu-west-1.primevideo.com
timeout: 30000
language: es
```

Use variables in requests with `{{variable_name}}` syntax.

## 🛠️ Customization

### Adding New Tests

1. Create new file in `endpoints/` folder
2. Name format: `NN-METHOD-Description.bru`
3. Copy structure from existing test
4. Update endpoint and assertions
5. Save and reload in Bruno

### Modifying Environment

1. Edit `environments/production.bru`
2. Add/update variables as needed
3. All tests will use new values
4. Reload collection in Bruno

### Custom Headers

Add headers in any `.bru` file:

```
headers {
  Authorization: Bearer token_value
  Custom-Header: value
}
```

## 🧪 Test Best Practices

✅ **Do:**
- Test real endpoints
- Include meaningful assertions
- Use environment variables
- Test error cases (404, etc.)
- Include performance assertions

❌ **Don't:**
- Hardcode sensitive data (use env vars)
- Test without assertions
- Ignore error responses
- Assume endpoint structure
- Skip documentation

## 📈 Performance Expectations

| Test | Expected Time | Assertion |
|------|----------------|-----------|
| HEAD requests | < 3 seconds | Quick availability check |
| GET requests | < 5 seconds | Content page load |
| POST requests | < 10 seconds | Search/data operations |
| All requests | < 30 seconds | Max timeout |

## 🐛 Troubleshooting

### Test Gets Timeout
- Check internet connectivity
- Increase timeout in environment
- Verify endpoint URL is correct
- Check if API is accessible from your location

### Authorization Errors (401/403)
- Tests use placeholder tokens
- Some endpoints require authentication
- Status code validation accepts 401/403
- Add valid tokens in headers if needed

### Invalid Endpoint Gets 404
- This is expected behavior
- Test-007 specifically tests error handling
- 404 responses are valid assertions

### Response Format Issues
- Verify Content-Type header
- Check response body format
- Ensure API returns expected structure
- Review assertion conditions

## 📚 Bruno Documentation

- **Official Docs:** https://docs.usebruno.com/
- **GitHub:** https://github.com/usebruno/bruno
- **Community:** https://github.com/usebruno/bruno/discussions

## 🔄 Integration with CI/CD

Bruno can be integrated into CI/CD pipelines:

```bash
# Run tests via CLI (when available)
bruno run ./bruno --env production
```

Check Bruno CI/CD documentation for latest integration methods.

## 📋 API Endpoints Tested

| Endpoint | Method | Status |
|----------|--------|--------|
| Home Page | GET | ✅ Implemented |
| Collection Data | GET | ✅ Implemented |
| Search | POST | ✅ Implemented |
| Headers Check | GET | ✅ Implemented |
| Availability | HEAD | ✅ Implemented |
| Cache | GET | ✅ Implemented |
| Invalid Path | GET | ✅ Implemented (error test) |
| Methods | OPTIONS | ✅ Implemented |
| Encoding | GET | ✅ Implemented |
| Consistency | GET | ✅ Implemented |

## 📞 Support

For issues or questions:

1. Check Bruno documentation
2. Review test assertions
3. Check endpoint responses
4. Verify environment setup
5. Review network connectivity

## 📄 License & Attribution

Test suite created for Prime Video API testing  
Framework: Bruno REST Client  
Date: 2026-03-13

---

**Ready to test?** Open Bruno, import this collection, and run the tests! 🚀
