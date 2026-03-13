# Test Cases - Detailed Documentation

## Prime Video Test Suite - 10 Test Cases

### Overview
This document provides detailed specifications for all 10 test cases in the Prime Video automated test suite.

---

## TC-001: Verify page loads successfully with correct title
**Category:** Smoke Test / Foundation  
**Priority:** Critical  
**Description:** Verify that the Prime Video collection page loads successfully and the page title is correct.

**Test Steps:**
1. Navigate to https://www.primevideo.com/-/es/collection/IncludedwithPrime
2. Wait for page to fully load
3. Retrieve page title
4. Verify title contains "Prime"

**Expected Results:**
- Page loads without errors
- HTTP status code is 200
- Page title contains "Prime"
- Page title is not empty

**Assertions:**
- `page.title()` should contain "Prime"
- Title length > 0

---

## TC-002: Verify collection header is visible
**Category:** UI/Layout  
**Priority:** High  
**Description:** Verify that the collection header is visible and properly displayed on the page.

**Test Steps:**
1. Navigate to the collection page
2. Wait for page to load
3. Check if header element is visible
4. Retrieve header text content

**Expected Results:**
- Header element is visible in the viewport
- Header text is not empty
- Header contains collection name or title

**Assertions:**
- Header element should be visible
- Header text content > 0 characters
- Header is in viewport

---

## TC-003: Verify movie cards are displayed
**Category:** Content Rendering  
**Priority:** Critical  
**Description:** Verify that movie cards are rendered and displayed on the collection page.

**Test Steps:**
1. Navigate to collection page
2. Wait for network to stabilize
3. Count all movie card elements
4. Verify at least one card exists

**Expected Results:**
- At least 1 movie card is displayed
- Movie cards have proper structure
- Cards are visible in viewport

**Assertions:**
- Card count >= 1
- Card elements are visible
- Cards are rendered before page finishes loading

---

## TC-004: Verify clicking on a movie card navigates to details page
**Category:** Navigation / User Interaction  
**Priority:** High  
**Description:** Verify that clicking on a movie card navigates to the corresponding movie details page.

**Test Steps:**
1. Navigate to collection page
2. Get current page URL
3. Click on first movie card
4. Wait for page to load
5. Get new page URL
6. Verify URL changed

**Expected Results:**
- Page URL changes after clicking
- Navigation is successful
- New page loads without errors
- New URL contains movie-specific information

**Assertions:**
- `newURL !== previousURL`
- Page loads successfully (network idle)
- New URL is different from base collection URL

---

## TC-005: Verify page layout and main content container is visible
**Category:** Layout / Structure  
**Priority:** High  
**Description:** Verify that the main content container and layout elements are properly structured and visible.

**Test Steps:**
1. Navigate to collection page
2. Wait for page to load
3. Check if main content element exists
4. Verify main content is visible
5. Check layout structure

**Expected Results:**
- Main content container is visible
- Layout is properly rendered
- Content area is accessible
- No layout errors or missing elements

**Assertions:**
- Main content element should be visible
- Element is in viewport
- Element has proper dimensions

---

## TC-006: Verify scrolling loads more content
**Category:** Dynamic Loading / Infinite Scroll  
**Priority:** Medium  
**Description:** Verify that scrolling down the page loads additional content dynamically.

**Test Steps:**
1. Navigate to collection page
2. Record initial movie card count
3. Scroll to bottom of page
4. Wait for potential new content to load
5. Record final movie card count
6. Compare counts

**Expected Results:**
- User can scroll page without errors
- Page responds to scroll events
- More content loads (or page reaches end gracefully)
- No errors in console

**Assertions:**
- Final card count >= initial card count
- Scroll executes without errors
- Page is still responsive after scroll

---

## TC-007: Verify responsive page elements
**Category:** Responsive Design / Layout  
**Priority:** Medium  
**Description:** Verify that page elements are responsive and properly displayed at desktop viewport size.

**Test Steps:**
1. Navigate to collection page at desktop viewport
2. Wait for page to load
3. Check if first movie card is in viewport
4. Verify element visibility
5. Check element positioning

**Expected Results:**
- Movie cards are visible at desktop viewport
- Elements are not cut off or hidden
- Layout is responsive
- All interactive elements are accessible

**Assertions:**
- First card is in viewport
- Card element is visible
- Card has expected dimensions

---

## TC-008: Verify images load in movie cards
**Category:** Asset Loading  
**Priority:** High  
**Description:** Verify that images in movie cards load successfully and are displayed.

**Test Steps:**
1. Navigate to collection page
2. Wait for images to load
3. Count all image elements in cards
4. Verify images are visible
5. Check image sources are valid

**Expected Results:**
- Image elements exist in the DOM
- Images are visible and loaded
- Multiple images are present (minimum 1)
- No broken image links

**Assertions:**
- Image count >= 1
- Images are visible
- Image sources are not empty or invalid

---

## TC-009: Verify no critical console errors
**Category:** Error Handling / QA  
**Priority:** High  
**Description:** Verify that there are no critical errors in the browser console during page load.

**Test Steps:**
1. Navigate to collection page
2. Monitor console for errors
3. Wait for page to fully load
4. Analyze console messages
5. Filter out non-critical errors

**Expected Results:**
- No critical errors in console
- Errors are minimized (< 5 critical errors)
- Non-critical errors are expected (favicon, sourcemaps)
- Security warnings are acceptable

**Assertions:**
- Critical error count < 5
- No network critical failures
- No JavaScript execution errors

---

## TC-010: Verify page response time is acceptable
**Category:** Performance  
**Priority:** Medium  
**Description:** Verify that the page loads within acceptable time limits for good user experience.

**Test Steps:**
1. Record start time
2. Navigate to collection page
3. Wait for networkidle
4. Record end time
5. Calculate load time
6. Verify time < 30 seconds

**Expected Results:**
- Page loads within 30 seconds
- Navigation completes successfully
- No timeout errors
- Page is responsive

**Assertions:**
- Load time < 30,000 milliseconds
- Navigation completes without timeout
- Page is fully functional after load

---

## Test Execution Strategy

### Sequential Execution
Tests are designed to run sequentially or in parallel:
```bash
npm test                    # All tests in parallel
npx playwright test -j 1   # Sequential execution
```

### Test Dependencies
- Tests are **independent** - no test depends on another
- Each test performs full page load
- Tests don't share state or data

### Flakiness Prevention
- Built-in retries for network instability
- Dynamic wait statements instead of hard waits
- Error handling for expected variations
- Screenshot/video capture for debugging

---

## Success Criteria

**All tests pass when:**
✓ All assertions complete without error  
✓ Page loads successfully  
✓ Network requests complete  
✓ No timeout errors occur  
✓ Console errors are minimal  

**Tests may fail if:**
✗ Prime Video website is down or unreachable  
✗ Network connectivity is poor  
✗ JavaScript execution errors occur  
✗ UI structure has significantly changed  
✗ Selectors no longer match elements  

---

## Maintenance Notes

**Selector Updates:**
If tests fail due to selector changes, update selectors in:
- `tests/pages/primevideo.page.ts` - Page Object Model

**Timeout Adjustments:**
If tests timeout frequently:
- Increase timeout in `playwright.config.ts`
- Check network connectivity
- Verify website availability

**Expected Failures:**
- TC-004 may fail if movie details page has changed
- TC-009 may vary based on third-party content
- TC-010 may fail on slow connections

---

Last Updated: 2026-03-13  
Framework: Playwright  
Target: Prime Video Collection Page
