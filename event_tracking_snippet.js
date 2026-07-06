// CraftRoots PostHog event tracking snippet
// Replace YOUR_POSTHOG_KEY and YOUR_POSTHOG_HOST with your PostHog project values.

posthog.init("YOUR_POSTHOG_KEY", {
  api_host: "YOUR_POSTHOG_HOST"
});

function trackExperienceView(experience) {
  posthog.capture("experience_card_viewed", {
    experience_id: experience.id,
    destination_city: experience.city,
    craft_interest: experience.craft,
    price_per_person: experience.price,
    skill_level: experience.skillLevel
  });
}

function trackBookingStarted(booking) {
  posthog.capture("booking_started", {
    destination_city: booking.city,
    craft_interest: booking.craft,
    group_size: booking.groupSize,
    price_per_person: booking.price
  });
}

function trackBookingCompleted(booking) {
  posthog.capture("booking_completed", {
    booking_id: booking.id,
    destination_city: booking.city,
    craft_interest: booking.craft,
    participants: booking.participants,
    gross_booking_value: booking.participants * booking.price
  });
}
