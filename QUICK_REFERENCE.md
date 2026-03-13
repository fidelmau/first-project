# Quick Reference - Prime Video Test Suite

## 📋 Project Summary
- **Framework:** Playwright
- **Language:** TypeScript
- **Target:** https://www.primevideo.com/-/es/collection/IncludedwithPrime
- **Test Cases:** 10
- **Browsers:** Chrome, Firefox, Safari
- **Export Format:** Bruno JSON Collection

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run tests with browser visible
npm run test:headed

# View test report
npm run report

# Run single test
npx playwright test -g "TC-001"

# Debug mode
npm run test:debug

# Interactive UI mode
npm run test:ui
```

## 📁 Project Structure
```
first-project/
├── tests/
│   ├── pages/
│   │   └── primevideo.page.ts          # Page Object Model
│   └── primevideo.spec.ts              # 10 Test Cases
├── playwright.config.ts                # Configuration
├── tsconfig.json                       # TypeScript Config
├── package.json                        # Dependencies
├── bruno-collection.json               # Bruno Format Export
├── README.md                           # Full Documentation
├── SETUP_GUIDE.md                      # Setup Instructions
├── TEST_CASES.md                       # Detailed Test Specs
└── QUICK_REFERENCE.md                  # This File
```

## ✅ Test Cases (10 Total)

| ID | Test Case | Type |
|----|-----------|------|
| TC-001 | Page Load & Title | Smoke |
| TC-002 | Header Visibility | UI |
| TC-003 | Movie Cards Display | Content |
| TC-004 | Movie Navigation | Navigation |
| TC-005 | Layout & Content | Structure |
| TC-006 | Infinite Scroll | Interaction |
| TC-007 | Responsive Design | Responsive |
| TC-008 | Image Loading | Assets |
| TC-009 | Console Errors | QA |
| TC-010 | Page Performance | Performance |

## 📊 Test Report Output

After running `npm run report`, you get:
- ✅ Pass/Fail status for each test
- 📸 Screenshots of failures
- 🎥 Video recordings of failures
- ⏱️ Execution time per test
- 📈 Overall test statistics

## 🔧 Configuration Highlights

**Browser Support:**
- Chromium (Chrome, Edge)
- Firefox
- WebKit (Safari)

**Timeouts:**
- Test timeout: 30 seconds
- Navigation: 30 seconds
- Action: 10 seconds

**Output Artifacts:**
- Screenshots: On failure
- Videos: On failure
- Traces: On first retry

## 🛠️ Troubleshooting

| Problem | Solution |
|---------|----------|
| Browser not found | `npx playwright install` |
| Tests timeout | Check internet, increase timeout in config |
| Module error | `npm install` and `rm -rf node_modules` |
| Website unreachable | Check VPN/firewall, verify URL |

## 📚 Documentation Files

- **README.md** - Complete project documentation
- **SETUP_GUIDE.md** - Installation and execution guide
- **TEST_CASES.md** - Detailed test specifications
- **bruno-collection.json** - Test collection in Bruno format

## 🌐 Bruno Format Integration

The `bruno-collection.json` file contains all test cases in Bruno-compatible format with:
- Test IDs and names
- Endpoints and methods
- Assertions and validations
- Environment variables
- Execution instructions

## 📝 Usage Examples

**Run all tests:**
```bash
npm test
```

**Run with visible browser:**
```bash
npm run test:headed
```

**Run specific test:**
```bash
npx playwright test -g "TC-003"
```

**Debug specific test:**
```bash
npx playwright test -g "TC-001" --debug
```

**Parallel execution (default):**
```bash
npm test -- --workers=4
```

**Sequential execution:**
```bash
npm test -- --workers=1
```

## 🎯 Next Steps

1. ✅ **Install:** `npm install`
2. ✅ **Run:** `npm test`
3. ✅ **Review:** `npm run report`
4. ✅ **Customize:** Edit tests in `tests/primevideo.spec.ts`

## 📞 Support Resources

- **Playwright Docs:** https://playwright.dev/
- **API Reference:** https://playwright.dev/docs/api/class-test
- **Best Practices:** https://playwright.dev/docs/best-practices

## 📅 Maintenance

**Regular Updates:**
- Update Playwright: `npm install --save-exact @playwright/test@latest`
- Update Node.js: Check nodejs.org for latest LTS
- Review test results: Check for flaky tests quarterly

**Selector Maintenance:**
- Update selectors in `primevideo.page.ts` if website layout changes
- Use data-testid attributes when available
- Use resilient selectors (avoid index-based)

---

**Last Updated:** 2026-03-13  
**Framework Version:** Playwright 1.40.0  
**Node.js Required:** v16+
