# MCA Setu — Hackathon Prototype

A consumer-side redesign concept for the Ministry of Corporate Affairs (MCA) website, created for a hackathon prompt on reimagining Indian public websites.

## Problem focus

The prototype addresses recurring stakeholder pain points observed around MCA/MCA21 usage:

- peak-season slowdowns, timeouts and outage anxiety;
- confusing Registered User / Business User / DSC / OTP flows;
- form upload, prefill, PDF generation and payment uncertainty;
- opaque support escalation;
- privacy and trust concerns around sensitive director/company data;
- jargon-heavy navigation that assumes users already know the correct legal form.

## Concept

**MCA Setu** reframes the portal around four plain-language jobs:

1. Start a company
2. File compliance
3. Verify a company
4. Resolve an issue

The UI is intentionally a presentational prototype rather than a full MCA backend implementation. It demonstrates the consumer-facing idea: guided journeys, system-confidence indicators, smart search, role-based dashboards, contextual support and transparent compliance timelines.

## Development

```bash
npm install
npm run start
```

## Build

```bash
npm run build
```

## Hosting

This repo includes a GitHub Pages workflow. After the branch is merged and Pages is enabled for GitHub Actions, the built site will be published from the workflow artifact.
