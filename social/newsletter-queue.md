# Newsletter send queue

Emails are sent **manually**, roughly **one story every 15 days**, no matter how
many stories were pushed to git in between. Publishing to the site and emailing
subscribers are fully decoupled.

## How to send the next one (in Beehiiv)

1. Take the **top item** from "Pending" below.
2. In Beehiiv: **New → Post** (a newsletter).
3. Title it with the story title. For the body, reuse that story's blurb from
   `social/linkedin-posts.md` as the teaser, then add a button/link to the full
   story at `https://www.orivale.com/<track>/<slug>`.
4. **Send** to all subscribers now (or **Schedule** it).
5. Move the item from "Pending" to "Sent" here and add the date. Commit.

## Pending (send oldest first)

- [ ] The Attention Question — https://www.orivale.com/concepts/week-01-the-attention-heist
- [ ] The Stranger at the Gates (AI Governance) — https://www.orivale.com/governance/the-stranger-at-the-gates
- [ ] The Model on Trial — https://www.orivale.com/evaluation/week-01-the-model-on-trial
- [ ] Drift Walks the Night Shift — https://www.orivale.com/mlops/week-01-drift-walks-the-night-shift
- [ ] The Production Relay — https://www.orivale.com/mlops/week-02-the-production-relay

## Sent

_(none yet — add entries here as `YYYY-MM-DD — <title>` once emailed)_
