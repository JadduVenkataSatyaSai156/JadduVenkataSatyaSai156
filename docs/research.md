# MCA Website Redesign Research Notes

Research date: 2026-08-24

## Publicly reported pain points

- Peak-season instability: practitioners report slowdowns, timeouts and filing disruption near statutory deadlines.
- Login and identity confusion: common issues include OTP failures, invalid credentials, Business User vs Registered User confusion, duplicate migrated profiles and DSC association errors.
- Filing defects: common complaints include failed uploads, incorrect or blank prefilled data, PDF generation issues, dropdown failures, failed SRNs and payment mismatches.
- Support uncertainty: users raise repeated tickets and often cannot see a clear recovery path, status timeline or escalation route tied to the filing context.
- Privacy and trust: reporting around exposed Aadhaar-linked KYC details underlines the need for stronger masking, consent and audit trails.
- Jargon-first navigation: founders, directors and investors have to translate their real-world goal into MCA form names before they can proceed.

## Sources reviewed

- ICSI letter on MCA-21 V3 portal issues and stakeholder challenges: https://www.icsi.edu/media/webmodules/IssuesChallengesFunctioningMCA21V3Portal22072024.pdf
- Mukunda Shiva & Associates summary of MCA V3 challenges: https://www.msassociates.pro/articles/challenges-in-mca-v3-portal/
- Ebizfiling guide noting OTP, credential and profile mapping issues: https://ebizfiling.com/blog/how-to-update-email-id-on-mca-v3-portal-for-company-or-llp/
- CapEasy summary of MCA V3 login and DSC failure causes: https://www.capeasy.in/compliance/mca-v3-problems/
- The Wire report on MCA portal KYC data exposure: https://m.thewire.in/article/tech/security-bug-in-mca-portal-leaked-aadhaar-based-kyc-details-of-indias-top-industrialists
- IndiaFilings MCA helpdesk overview: https://www.indiafilings.com/learn/mca-helpdesk

## Design response

The prototype answers these problems with an intent-first information architecture: **Start**, **File**, **Verify** and **Resolve**. It adds visible system confidence, role-specific dashboards, contextual support, autosave/validation concepts, privacy-first public records and plain-language explainers.
