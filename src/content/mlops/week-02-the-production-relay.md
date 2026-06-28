---
title: "The Production Relay"
track: "mlops"
week: 2
description: "Archi assembles a team of five to navigate the four hurdles of MLOps: Reproducible Pipelines, Automated Deployment, Continuous Monitoring, and Operational Governance."
tagline: "the relay race"
icon: "🏃"
characters: ["Archi", "Reliability", "Observability", "Infrastructure", "Scalability", "Cost"]
publishDate: 2026-06-29
draft: false
socialSnippet: "MLOps as a relay race: five operational pillars working together to carry the baton through four hurdles without dropping it on screen."
quiz:
  - tier: "basic"
    question: "In Archi's relay team, what does **Reproducible Pipelines** require?"
    options:
      - "Every step can be recreated exactly the same way using versioned data, code, and models"
      - "The team must run at exactly the same speed each time"
      - "All runners must take the same number of steps"
      - "The baton must never be dropped"
    answer: 0
  - tier: "intermediate"
    question: "Why does *Archi* choose to show the Judge a low confidence signal rather than a wrong answer delivered with certainty?"
    options:
      - "A wrong answer delivered with total confidence is worse than admitting uncertainty"
      - "Low confidence signals are always better than any answer"
      - "The Judge prefers to see no answers at all"
      - "It is faster to show uncertainty than to compute a confident answer"
    answer: 0
  - tier: "expert"
    question: "What does the three layer monitoring from *Observability* track, and why is most teams monitoring incomplete?"
    options:
      - "System metrics, model metrics, and business metrics. Most teams only monitor the first layer."
      - "Data quality, model accuracy, and latency. Most teams monitor all three equally."
      - "User behavior, system performance, and cost. Most teams only care about cost."
      - "Pipelines, deployments, and governance. Most teams skip governance."
    answer: 0
---

The stadium lights came on early that morning, long before the stands filled. *Archi* stood at the edge of the track, clipboard in hand, eyes steady on the four hurdles ahead of her.

Her task was specific and urgent.

She had to lead her team to win the coveted relay. The team had to carry the baton through four hurdles: **Reproducible Pipelines**, **Automated Deployment**, **Continuous Monitoring**, and **Operational Governance**, without the baton ever touching the ground.

She looked nervously at the Judge. His eyes were glued to the live feed projected onto the stadium screen.

One drop, one stall, one moment of latency and the Judge watching that screen would disqualify them immediately.

*Archi* took a deep breath as the camera zoomed in on her. She smiled and said, "Hi there, I am team captain *Archi* and this is our team."

*Reliability* was steady and unshaken, the kind of runner who had a backup plan for every twisted ankle before it happened.

*Observability* had sharp eyes and never looked away from the track, convinced that nothing could be fixed if nobody was watching it happen.

*Infrastructure* was broad shouldered and calm under pressure, built to carry any weight without buckling.

*Scalability* had a superpower: he gauged crowd noise to learn when demand was rising and was quick to multiply effort.

*Cost* was the one who counted every meter run and every coin spent doing it. Very careful and watchful with every resource spent.

![The MLOps relay team: Reliability, Scalability, Infrastructure, Observability, and Cost](/images/mlops/week-02/team-sketch.jpg)

The five gathered at the starting line as the Judge's voice echoed over the speakers.

"Four hurdles. One baton. Let me see how your team carries it."

The team echoed in unison, "Let's WIN!"

---

*Reliability* took the first leg, the hurdle called **Reproducible Pipelines**.

The challenge here was brutal and specific.

If a runner ever needed to repeat this exact leg again, every step had to be the same. Every choice about pace and direction had to match. Every number, every byte of data, everything had to recreate exactly.

*Reliability* turned to the team.

"I do not trust luck. I will version lock every choice I make. Data, code, the stride length, the turn angle. All of it. If we ever need to run this leg again, the next runner can follow my path exactly and get the same result."

The team nodded. She took the baton and ran.

---

*Infrastructure* and *Scalability* ran the second leg together, the hurdle called **Automated Deployment**.

The challenge was getting the baton from one track to four tracks parallelly.

*Infrastructure* spoke first.

"I will not push this to the tracks until we test it. Every handoff gets checked. Every choice gets verified. If it fails, we catch it before the Judge sees it."

*Scalability* stepped forward.

"And I will watch the crowd. The moment demand spikes and I see the tracks split and increase in number, I will call it out. You have to flex those muscles to then share the load across all tracks. We will not let a single lane get bottlenecked. The baton keeps moving."

Together, they pushed through the CI tests built into the track.

The baton stayed steady.

The handoff was clean.

---

"What is our status?" *Archi* asked.

"All looking good?" 

*Observability* gave her a thumbs up.

She was in charge of **Continuous Monitoring**. From the dugout, her sharp eyes locked onto three layers at once.

"First layer, the system. Are player devices working as they must? Is the timing system responding?"

She watched for the first signs of drift.

"Second layer, the controller itself. Is it performing the way it should? Are its predictions staying on course or drifting?"

She called out numbers as she ran.

"Third layer, the people watching. Does the crowd create value for them?"

She turned back to *Cost*.

"No big changes here. Good to go."

---

*Cost* ran the final leg, the hurdle called **Operational Governance**.

This leg looked different from the others.

It was not about speed. It was about control.

*Cost* held a ledger in one hand and the baton in the other.

He tracked every decision.

"Who touched this baton? When? Why? What did it cost us?"

"Compute. Storage. API calls. Check. Data moved between runners. Check. Every meter we run, every coin we spend. I know where we are overspending before we even get there."

He pulled out spending alerts from his pocket like a stopwatch.

"The moment any leg runs over budget, this sounds, in real time."

---

Up in the booth, the Judge leaned toward the screen as the race reached its final stretch.

This was where *Archi's* real test began.

A slow handoff on screen meant the feed would lag for 8 seconds or more. A Judge watching a stalled screen stops watching, no matter how good the run actually was.

The team entered the final quarter.

*Observability* called out.

"Wait. Confidence is dipping. The prediction is getting uncertain."

*Archi* made the call instantly.

"Do not guess and look certain. Flash the honest signal instead. A wrong answer delivered with total confidence is worse than admitting uncertainty in front of the crowd."

*Infrastructure* stumbled briefly on a loose patch of track. The baton wavered.

"Backup lane," *Archi* called out.

*Reliability* was ready. She had rehearsed this exact moment. The backup lane kicked in immediately. The screen showed a smooth recovery instead of a blank, frozen frame.

*Cost* flagged a problem in his ledger.

"Stale numbers. The team is pulling old predictions from the last lap. The recommendation on screen does not match what is actually happening on the track."

*Archi* waved for an immediate refresh.

"Fix it now. Before the Judge notices."

It was done in seconds. The baton stayed clean. The screen stayed live.

The baton crossed the finish line steady in *Cost's* hand, and the Judge nodded from the booth.

"Clean run. Nobody dropped the baton. And every technical decision you made showed up on that screen as something the crowd could actually feel."

*Archi* looked at the five runners, each one having carried their leg the way only they could.

They had won.

---

**MLOps** — the discipline of deploying, monitoring, and maintaining ML models in production reliably and at scale.

**Reproducible Pipelines** — versioning data, code, and models so any result can be recreated exactly.

**Automated Deployment** — CI/CD for models, pushing to production with confidence and tests built in.

**Continuous Monitoring** — tracking performance, data quality, and drift across system metrics, model metrics, and business metrics.

**Operational Governance** — access control, audit trails, and compliance, tracking who changed what and when.

**Reliability** — handling failure gracefully through fallbacks, circuit breakers, retries, and health checks.

**Observability** — seeing what is actually happening inside a system across all three layers: system, model, and business.

**Infrastructure and Scalability** — load balancing and auto scaling that let a system grow from 10 requests per minute to 10,000 without breaking.

**Cost Management** — tracking and optimizing what a system spends on compute, storage, API calls, and data transfer.
