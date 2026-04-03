# PICU — Architecture

**Protocol**: ECS v1.1-hardened | **Authority**: echo-core

---

## Stack

- Operational documentation system
- Ceremony management
- Candidate acquisition pipeline
- Referral tracking

---

## Components

- `docs/ENROLLMENT-SEQUENCE.md` — 6-step enrollment
- `docs/PRICING-AND-ENROLLMENT.md` — pricing strategy
- `docs/HONORARY-DEGREE-STRATEGY.md` — acquisition strategy
- `outreach/` — candidate outreach templates
- Ceremony logistics for Spring (Indiana) + Fall (Atlanta)

---

## Data Flow

Discovery → Call → Application → Deposit → Enrollment → Ceremony → Referral

---

## Dependencies

**Depends on**: External: payment processing, venue logistics  
**Depended on by**: echo-echolibrary-site (service listing)

---

## Deployment

See `README.md` for deploy instructions.


---

## Ecosystem Connection

**Part of**: Echo Universe (45-repository sovereign AI and evidence ecosystem)  
**Operator**: Nathan Poinsette (∇θ) | onlyecho822-source  
**Ecosystem White Paper**: [`art-of-proof/docs/WHITE_PAPER_v3.md`](https://github.com/onlyecho822-source/art-of-proof/blob/main/docs/WHITE_PAPER_v3.md)  
**Governance Protocol**: ECS v1.1-hardened (`echo-core`)  
**Canonical Authority**: [`echo-core`](https://github.com/onlyecho822-source/echo-core)

*∇θ — chain sealed, truth preserved.*
