# Example LookML-style view for CraftRoots events
view: craftroots_events {
  dimension: event_date { type: date sql: ${TABLE}.event_date ;; }
  dimension: event_name { type: string sql: ${TABLE}.event_name ;; }
  dimension: source { type: string sql: ${TABLE}.source ;; }
  dimension: destination_city { type: string sql: ${TABLE}.destination_city ;; }
  dimension: craft_interest { type: string sql: ${TABLE}.craft_interest ;; }

  measure: events { type: count }
  measure: unique_users { type: count_distinct sql: ${TABLE}.user_id ;; }
  measure: completed_bookings {
    type: count
    filters: [event_name: "booking_completed"]
  }
}
