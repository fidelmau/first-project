# Prime Video Test Suite - Setup & Execution Guide

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Tests
```bash
npm test
```

### 3. View Results
```bash
npm run report
```

---

## Detailed Setup Instructions

### Prerequisites
Ensure you have installed:
- **Node.js v16+** - Download from https://nodejs.org/
- **npm v8+** - Usually comes with Node.js

### Verify Installation
```bash
node --version    # Should be v16 or higher
npm --version     # Should be v8 or higher
```

### Installation Steps

1. **Navigate to project directory**
   ```bash
   cd first-project
   ```

2. **Install project dependencies**
   ```bash
   npm install
   ```
   This installs Playwright and all required browsers.

3. **Verify installation**
   ```bash
   npx playwright --version
   ```

---

## Running Tests

### Basic Test Execution

**Run all tests (headless mode)**
```bash
npm test
```

**Run tests with visible browser**
```bash
npm run test:headed
```

**Run with debug mode (step through)**
```bash
npm run test:debug
```

**Run with interactive UI**
```bash
npm run test:ui
```

### Run Specific Tests

**Run single test file**
```bash
npx playwright test tests/primevideo.spec.ts
```

**Run single test by ID**
```bash
npx playwright test -g "TC-001"
```

**Run tests matching pattern**
```bash
npx playwright test -g "page loads"
```

### Advanced Options

**Run with specific browser**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run with verbose output**
```bash
npx playwright test --verbose
```

**Run with retries disabled**
```bash
npx playwright test --retries=0
```

**Run with specific timeout**
```bash
npx playwright test --timeout=60000
```

---

## Viewing Test Results

### HTML Report
```bash
npm run report
```
Opens a beautiful interactive HTML report showing:
- Test results with pass/fail status
- Screenshots of failed tests
- Video recordings (on failure)
- Execution time and details

### Console Output
Tests output results directly to console with:
- ✓ for passed tests
- ✗ for failed tests
- Test execution time
- Error messages (if any)

---

## Test Artifacts

After running tests, the following files are generated:

```
└── test-results/
    ├── screenshots/          # Screenshot on failure
    ├── videos/              # Video recordings on failure
    ├── traces/              # Playwright traces
    └── test-results.json    # JSON test results

└── playwright-report/       # HTML report (view with: npm run report)
```

---

## Project Structure

```
first-project/
├── tests/
│   ├── pages/
│   │   └── primevideo.page.ts    # Page Object Model
│   └── primevideo.spec.ts        # 10 Test Cases
├── playwright.config.ts          # Playwright Configuration
├── tsconfig.json                 # TypeScript Configuration
├── package.json                  # Project Dependencies
├── bruno-collection.json         # Bruno Format Export
├── SETUP_GUIDE.md               # This file
└── README.md                    # Project Documentation
```

---

## Configuration Details

### Playwright Configuration (playwright.config.ts)

**Base URL**
```typescript
baseURL: 'https://www.primevideo.com/-/es/collection/IncludedwithPrime'
```

**Browsers Tested**
- Chromium (Chrome, Edge)
- Firefox
- WebKit (Safari)

**Screenshots & Videos**
- Screenshots: Captured on test failure
- Videos: Retained on test failure
- Traces: Recorded for debugging

**Timeouts**
- Default: 30 seconds per test
- Navigation: 30 seconds
- Action: 10 seconds

---

## Test Cases Summary

| # | Name | Purpose |
|---|------|---------|
| TC-001 | Page Load & Title | Verify page loads with correct title |
| TC-002 | Header Visibility | Check collection header exists |
| TC-003 | Movie Cards | Verify movie cards render |
| TC-004 | Navigation | Test clicking movie navigates correctly |
| TC-005 | Layout | Ensure main content visible |
| TC-006 | Infinite Scroll | Verify scrolling loads more content |
| TC-007 | Responsiveness | Check responsive design |
| TC-008 | Image Loading | Verify images load properly |
| TC-009 | Console Errors | Check for critical errors |
| TC-010 | Performance | Verify page loads quickly |

---

## Troubleshooting

### Issue: "Browser not found"
**Solution:**
```bash
npx playwright install
```

### Issue: "Tests timeout"
**Solution:** Increase timeout in playwright.config.ts or check internet connection

### Issue: "Module not found"
**Solution:**
```bash
npm install
rm -rf node_modules
npm install
```

### Issue: "Website not accessible"
**Solution:** Verify:
- Internet connection is active
- Prime Video website is accessible in your region
- No firewall blocking access

### Issue: "Tests fail inconsistently"
**Solution:**
- Increase waits in playwright.config.ts
- Check network stability
- Review screenshots in test-results folder

---

## CI/CD Integration

### GitHub Actions Example
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm test
```

### Environment Variables
Create a `.env.local` file if needed:
```
TIMEOUT=30000
HEADLESS=false
```

---

## Performance Tips

### Optimize Test Speed
- Use parallel execution (default: 4 workers)
- Disable retries for local testing: `--retries=0`
- Run specific test: `-g "TC-001"`

### Reduce Resource Usage
- Single worker mode: `--workers=1`
- Headless mode (default): Lower CPU/memory usage

---

## Debugging Tests

### Debug Single Test
```bash
npm run test:debug
```

### Debug with Inspector
```bash
npx playwright test --debug
```

### View Execution Trace
```bash
npx playwright show-trace test-results/path-to-trace.zip
```

---

## Additional Resources

- **Playwright Documentation**: https://playwright.dev/
- **API Reference**: https://playwright.dev/docs/api/class-test
- **GitHub Issues**: https://github.com/microsoft/playwright/issues
- **Best Practices**: https://playwright.dev/docs/best-practices

---

## Support & Maintenance

For issues or questions:
1. Check test results and screenshots
2. Review console output for errors
3. Consult Playwright documentation
4. Check internet connectivity

Last Updated: 2026-03-13
