# CraftRoots PostHog Setup Guide

## Goal
Track the CraftRoots traveler journey from landing page visit to completed workshop.

## Core funnel
1. `page_view`
2. `experience_card_viewed`
3. `booking_started`
4. `payment_success`
5. `booking_completed`
6. `review_submitted`

## Steps
1. Create a PostHog project.
2. Add the PostHog browser snippet to the CraftRoots website.
3. Copy the tracking functions from `event_tracking_snippet.js`.
4. Trigger events on important actions:
   - experience card opened
   - booking form opened
   - payment success
   - completed session
   - review submission
5. Build a funnel in PostHog using the above event order.
6. Export event data to CSV or connect it to Looker Studio.

## Decision rule
Use `booking_completed` as the reliable success event. Payment success alone can include cancellations or no-shows.
