const funnel = [
  {stage:"Awareness", event:"page_view", count:3441},
  {stage:"Consideration", event:"experience_card_viewed", count:1813},
  {stage:"Decision", event:"booking_started", count:1002},
  {stage:"Payment", event:"payment_success", count:729},
  {stage:"Workshop", event:"booking_completed", count:658},
  {stage:"Post-session", event:"review_submitted", count:315}
];

const max = funnel[0].count;
document.getElementById("funnel").innerHTML = funnel.map(item => `
  <div class="funnel-stage">
    <strong>${item.stage}</strong>
    <div class="bar-shell"><div class="bar" style="width:${Math.max(6, (item.count/max)*100)}%"></div></div>
    <span>${item.count.toLocaleString()}</span>
  </div>
`).join("");

const demand = [
  ["Top city", "Jaipur"],
  ["Top craft", "Blue Pottery"],
  ["Payment drop-off", "27.3%"],
  ["North Star", "Monthly Active Bookings"],
  ["Main risk", "Metric misinterpretation"]
];

document.getElementById("demandTable").innerHTML = demand.map(row => `
  <div class="metric-row"><strong>${row[0]}</strong><span>${row[1]}</span></div>
`).join("");

const events = [
  ["page_view","Landing page opens","Measures acquisition and top-of-funnel reach."],
  ["experience_card_viewed","Traveler opens workshop card","Shows consideration for a specific craft/city."],
  ["booking_started","Calendar or booking flow opens","Captures high-intent behavior before payment."],
  ["payment_success","Payment gateway returns success","Shows payment completion but not final workshop completion."],
  ["booking_completed","Workshop is completed","North Star input: real completed sessions."],
  ["review_submitted","Traveler submits rating/review","Captures quality and advocacy signal."]
];

document.getElementById("eventRows").innerHTML = events.map(row => `
  <tr><td><code>${row[0]}</code></td><td>${row[1]}</td><td>${row[2]}</td></tr>
`).join("");
