---
title: "Drift Walks the Night Shift"
track: "mlops"
week: 1
description: "An intruder named Drift slips past every dashboard for three weeks while the model quietly decays, until one downstream metric breaks."
tagline: "production down"
icon: "⚠️"
characters: ["Drift", "Monitor", "Status", "Engineer"]
publishDate: 2026-06-22
draft: false
socialSnippet: "Data drift explained as a quiet intruder who walks past a sleeping guard for three weeks straight. New story: Drift Walks the Night Shift."
quiz:
  - tier: "basic"
    question: "What is data drift?"
    options:
      - "A gradual change in input data so production data no longer matches the training data"
      - "A bug introduced while training the model"
      - "A sudden hardware failure in production"
      - "A deliberate change to the model architecture"
    answer: 0
  - tier: "intermediate"
    question: "Why can an accuracy dashboard stay green for weeks while a model degrades from drift?"
    options:
      - "Dashboards only refresh once a month by default"
      - "Accuracy needs ground truth labels that arrive late, so it lags behind the input shift"
      - "Drift affects training data only, never production data"
      - "A green dashboard mathematically proves there is no drift"
    answer: 1
  - tier: "expert"
    question: "What is the most reliable way to catch data drift early?"
    options:
      - "Retrain the model on a fixed schedule regardless of drift"
      - "Raise the alert threshold on existing outcome metrics"
      - "Monitor input feature distributions against a rolling baseline, not just downstream outcomes"
      - "Switch to a larger model architecture"
    answer: 2
---

It is the night shift in the operations center. The room is quiet, and a lone screen glows as the engineer monitors the recommendation model serving customer traffic.

The issue is small and specific. Three input feature values have started creeping upward. These features describe how long a user browses, and they now sit about 15% above where they were at training time. The downstream metric everyone actually cares about, conversion rate on recommended items, has not moved yet.

The engineer is not worried. There is a shift in some input features, but the outcome still looks fine.

Unknown to her, the intruder *Drift* is patient and never dramatic. He never breaks anything all at once. He only makes today look slightly different from yesterday, again and again.

*Monitor* is the guard on duty. He is confident and well meaning, but he only checks lagging accuracy against labels that arrive two weeks late.

*Status* is tasked with updating the dashboard. He is literal and loyal, and he reports exactly the five numbers he was told to watch, nothing more.

![Drift, Monitor, and Status on the night shift](/images/mlops/week-02/MLOps2.png)

In week one, a wave of new users signs up from a region the model has barely seen. Their sessions run longer. Their taste leans toward categories the training data hardly covered.

"Nothing dramatic," the engineer thought, and did not look closer.

*Monitor* does his rounds. Ask him how the model is doing and he answers without hesitation.

"Accuracy is fine. I checked it this morning."

What *Monitor* does not mention is what that check compares: today's predictions against labels from two weeks ago, because **ground truth** here takes that long to settle. Every morning he answers a question about a version of the world where *Drift* is not noticed yet.

*Status* posts his five numbers like he does every day: requests per second, latency, error rate, accuracy, uptime. All green.

Week two passes like week one. *Status* stays green. *Monitor* stays confident. Underneath them both, the inputs keep walking further from where the model was trained. The average of three input features has crept up 15%, but nobody caught the intruder, *Drift*.

Then week three arrives, and conversion rate falls off a cliff.

"It dropped," the on call engineer says, staring at the screen. "It did not dip. It dropped."

Numbers that held steady for weeks collapse in a single afternoon. The model has been making confidently wrong predictions on a population it never trained on, and the damage has finally compounded into something everyone can see at once.

The engineer pulls up *Status*. Green. Green. Green. Green. Red.

"Wait," the engineer says. "You were green this whole time?"

"Do not blame me," *Status* says. "Nobody told me to watch the input features. I watch what I was told to watch, and what I was told to watch had not moved."

He is right, and that is the problem.

The team starts at the wound and works backward. They pull conversion rate apart by user segment and notice it is not falling evenly. It is collapsing hardest in the exact segment that grew fastest over the last three weeks.

That is the thread. They compare this week's **input distribution** against the training distribution from three months back, and there it is: the 15% creep *Drift* caused in week one, sitting right where nobody was looking.

"You could have told us," the engineer says to *Monitor*.

"I told you exactly what you asked me to track," *Monitor* says. "You asked about outcomes from two weeks ago. You never asked about the inputs from this morning."

The senior on call lead has seen this before. She writes the lesson on the whiteboard like a short verse, so the next shift cannot miss it.

"Watch the inputs, not just the score,
The labels lag, the truth is slow.
Compare today to training day,
And catch the drift before it grows.

A green dashboard is not a promise,
It only shows the squares you drew,
So measure what the model sees,
Not just the outcomes trickling through."

The fix is simple. *Monitor* gets a second job. Instead of only checking lagging accuracy against stale labels, he now watches whether today's inputs still look like the inputs the model trained on, continuously, against a **rolling baseline**.

The team is now equipped to stop *Drift* at the door the moment he walks in, not three weeks and one crashed metric later.

## Terminology

**Data Drift**: a gradual change in the input data over time, so production data no longer looks like the training data.

**Input Distribution**: the typical range and shape of the feature values the model receives.

**Lagging Metric**: a measure like accuracy that can only be computed once slow ground truth labels arrive.

**Ground Truth**: the real outcome a prediction is eventually checked against.

**Rolling Baseline**: a continuously updated reference for what normal inputs look like, used to spot drift early.

**Downstream Metric**: a business outcome, like conversion rate, that reflects model quality only after the fact.
