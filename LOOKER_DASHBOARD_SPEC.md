# Looker Studio Dashboard Spec — CraftRoots Product Insights

## Data sources
- `data/sample_events.csv`
- `data/sample_bookings.csv`
- `data/funnel_metrics.csv`
- Google Sheets export from Lab 3 lead tracker, if available

## Dashboard pages

### Page 1: Executive Product Overview
Cards:
- Monthly Active Bookings
- Gross Booking Value
- Average Session Rating
- Visitor to Completed Booking Conversion
- Payment Drop-off

Charts:
- Completed bookings by date
- Gross booking value by city
- Completed bookings by craft
- Source-wise conversion

### Page 2: Funnel Analysis
Use event order:
1. page_view
2. experience_card_viewed
3. booking_started
4. payment_success
5. booking_completed
6. review_submitted

### Page 3: Artisan & City Performance
Tables:
- City
- Craft
- Completed bookings
- Average rating
- Gross booking value
- Artisan payout estimate

### Page 4: Metric Misinterpretation Guardrails
Display notes from `evaluation/metric_misinterpretation_checklist.md`.

## Important
The dashboard should not treat traffic as success. The North Star is completed sessions.
