#!/usr/bin/env node
// Reads a list of newly added story files (one path per line) and creates a
// draft post in Beehiiv for each, using the story's frontmatter.
//
// Requires env vars: BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID.
// Verify field names against Beehiiv's current API docs before relying on
// this in production — it has not been run against a live account.

import { readFile } from 'node:fs/promises';
import matter from 'gray-matter';

const [, , listPath] = process.argv;
if (!listPath) {
  console.error('Usage: crosspost-beehiiv.mjs <file-with-list-of-paths>');
  process.exit(1);
}

const apiKey = process.env.BEEHIIV_API_KEY;
const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
if (!apiKey || !publicationId) {
  console.error('Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID.');
  process.exit(1);
}

const listing = (await readFile(listPath, 'utf-8')).trim();
if (!listing) {
  console.log('No new story files found, nothing to cross-post.');
  process.exit(0);
}

const files = listing.split('\n').filter(Boolean);

for (const file of files) {
  const raw = await readFile(file, 'utf-8');
  const { data, content } = matter(raw);

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/posts`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data.title,
        subtitle: data.socialSnippet,
        status: 'draft',
        content_html: `<p>${data.description}</p>${content}`,
      }),
    }
  );

  if (!res.ok) {
    console.error(`Failed to create Beehiiv draft for ${file}: ${res.status} ${await res.text()}`);
    process.exitCode = 1;
    continue;
  }

  console.log(`Created Beehiiv draft for "${data.title}" (${file}).`);
}
