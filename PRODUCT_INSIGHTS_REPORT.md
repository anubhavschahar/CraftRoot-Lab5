# CraftRoots Lab 5: Product Insights

## Lab Component
Product Insights

## Toolkit
PostHog + Looker + Dify

## Strategic Focus
Analytics

## Known Risk
Metric misinterpretation.

## Product Context
CraftRoots is a marketplace where travelers book verified hands-on craft workshops and artisans become hosts. The product has a traveler discovery flow, booking flow, post-session review flow, and artisan-side performance needs.

## Why Product Insights Matter for CraftRoots
CraftRoots has to understand not just how many people visit the website, but how many travelers complete meaningful craft sessions. For this reason, the dashboard focuses on the complete journey:

1. Awareness — traveler visits CraftRoots
2. Consideration — traveler views an experience
3. Decision — traveler starts booking
4. Payment — traveler completes payment
5. Workshop — session is completed
6. Post-session — traveler reviews or shares

## North Star Metric
Monthly Active Bookings (MAB): number of completed sessions per month.

This is better than traffic or payment success because CraftRoots only creates real value when the traveler actually completes the workshop and the artisan earns from the session.

## PostHog Role
PostHog captures product events such as:
- page_view
- experience_card_viewed
- booking_started
- payment_success
- booking_completed
- review_submitted

These events help build funnels and understand drop-off.

## Looker Role
Looker or Looker Studio converts the event and booking data into a dashboard:
- Completed bookings
- Gross booking value
- Conversion rate
- Payment drop-off
- Top city
- Top craft
- Average rating

## Dify Role
Dify acts as an AI insights layer. It summarizes analytics data into product recommendations, but it must follow guardrails and avoid inventing numbers.

## Risk Controls
The main risk is metric misinterpretation. To reduce this:
- Use completed bookings as the North Star, not page views
- Compare by city, craft, and source before making decisions
- Check payment success against no-shows and cancellations
- Validate Dify recommendations manually

## Demo Flow
1. Open the GitHub Pages dashboard.
2. Show KPI cards and funnel.
3. Open the Excel dashboard workbook.
4. Show PostHog event plan.
5. Explain how Looker would visualize the same data.
6. Use Dify prompts to generate a weekly product insight summary.
7. Show metric misinterpretation checklist.

## Sample Insights from the Demo Data
- Monthly Active Bookings: 658
- Gross Booking Value: ₹7,524,300
- Average Rating: 4.38★
- Top City: Jaipur
- Top Craft: Blue Pottery

## Conclusion
Lab 5 shows how CraftRoots can turn product usage data into decisions. The goal is not only to show metrics, but to make sure those metrics are interpreted correctly before changing the product, pricing, marketing, or operations.
