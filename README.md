# Prime Video Test Suite - Automated Testing with Playwright

This project contains an automated test suite for the Prime Video "Included with Prime" collection page using Playwright.

## Project Structure

```
├── tests/
│   ├── pages/
│   │   └── primevideo.page.ts      # Page Object Model for Prime Video
│   └── primevideo.spec.ts          # Test specifications (10 test cases)
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Project dependencies
├── README.md                       # This file
└── .gitignore                      # Git ignore rules
```

## Test Cases Overview

| TC # | Test Name | Description |
|------|-----------|-------------|
| TC-001 | Verify page loads successfully | Check that the page loads with correct title |
| TC-002 | Verify collection header | Confirm collection header is visible |
| TC-003 | Verify movie cards displayed | Check that movie cards are rendered |
| TC-004 | Verify movie navigation | Test clicking on movie card navigates to details |
| TC-005 | Verify page layout | Ensure main content container is visible |
| TC-006 | Verify scrolling behavior | Test that scrolling loads more content |
| TC-007 | Verify responsive elements | Check responsive design elements |
| TC-008 | Verify image loading | Confirm images load in movie cards |
| TC-009 | Verify console errors | Check for critical console errors |
| TC-010 | Verify page performance | Test page load time is acceptable |

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

## Installation

1. Navigate to the project directory:
```bash
cd first-project
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests with UI mode
```bash
npm run test:ui
```

### View test report
```bash
npm run report
```

### Run specific test file
```bash
npx playwright test tests/primevideo.spec.ts
```

### Run specific test by name
```bash
npx playwright test -g "TC-001"
```

## Configuration

The configuration is defined in `playwright.config.ts` and includes:

- **Base URL**: https://www.primevideo.com/-/es/collection/IncludedwithPrime
- **Browsers**: Chromium, Firefox, Safari
- **Screenshot**: Captured on test failure
- **Video**: Retained on test failure
- **Trace**: Recorded on first retry
- **Reporter**: HTML report generation

## What Gets Tested

The test suite validates:
- Page loads and renders correctly
- UI elements are visible and interactive
- Movie cards display content
- Navigation flows work properly
- Page performance meets standards
- No critical console errors
- Image assets load successfully
- Responsive design elements function

## Output Files

After running tests, the following output files are generated:

- `test-results/` - Test results
- `playwright-report/` - HTML test report
- Screenshots and videos of failed tests

## Troubleshooting

### Tests timing out
- Increase timeout in playwright.config.ts
- Check internet connectivity
- Verify the target website is accessible

### Browser not found
- Run `npx playwright install` to install required browsers

### Tests fail on CI/CD
- Check the `retries` setting in playwright.config.ts
- Review screenshots and videos in test-results folder

## Technology Stack

- **Playwright**: ^1.40.0 - Web automation framework
- **Node.js**: JavaScript runtime
- **TypeScript**: Type-safe JavaScript

## Best Practices Used

- Page Object Model pattern for maintainability
- Async/await for cleaner code
- Comprehensive test coverage
- Error handling and retry logic
- Multiple browser testing
- Screenshot/video capture on failure

## Notes

- Tests are designed to be stable and resilient
- Selectors are generic to handle UI changes
- Tests use implicit waits for better reliability
- All tests are independent and can run in parallel
