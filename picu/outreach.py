__NATHAN_POINSETTE__ = 'Nathan Poinsette | onlyecho822-source | ∇θ'
# ∇θ — Nathan Poinsette | Echo Universe | nabla-theta chain sealed truth preserved
"""
picu/outreach.py — PICU Student Acquisition Engine.
Phoenix Christian University student outreach and enrollment funnel management.
∇θ Operator — Echo Universe
"""
from __future__ import annotations
import hashlib, time
from dataclasses import dataclass, field
from typing import Dict, List, Optional
from enum import Enum


class ProspectStatus(Enum):
    NEW        = "new"
    CONTACTED  = "contacted"
    INTERESTED = "interested"
    APPLIED    = "applied"
    ENROLLED   = "enrolled"
    DECLINED   = "declined"


@dataclass
class Prospect:
    prospect_id: str
    name: str
    email: str
    program_interest: str
    status: ProspectStatus = ProspectStatus.NEW
    notes: List[str] = field(default_factory=list)
    created_at: float = field(default_factory=time.time)

    def fingerprint(self) -> str:
        return hashlib.sha256(f"{self.prospect_id}:{self.email}".encode()).hexdigest()[:12]

    def to_dict(self) -> Dict:
        return {"id": self.prospect_id, "name": self.name, "email": self.email,
                "program": self.program_interest, "status": self.status.value,
                "notes": len(self.notes)}


class PIOutreachEngine:
    """PICU Student Acquisition — outreach funnel management."""

    UNIVERSITY = "Phoenix Christian University"

    def __init__(self):
        self._prospects: Dict[str, Prospect] = {}

    def add_prospect(self, prospect_id: str, name: str, email: str,
                     program: str) -> Prospect:
        p = Prospect(prospect_id=prospect_id, name=name, email=email,
                     program_interest=program)
        self._prospects[prospect_id] = p
        return p

    def get(self, prospect_id: str) -> Optional[Prospect]:
        return self._prospects.get(prospect_id)

    def advance(self, prospect_id: str, status: ProspectStatus) -> Prospect:
        p = self._prospects[prospect_id]
        p.status = status
        return p

    def add_note(self, prospect_id: str, note: str) -> None:
        self._prospects[prospect_id].notes.append(note)

    def by_status(self, status: ProspectStatus) -> List[Prospect]:
        return [p for p in self._prospects.values() if p.status == status]

    def by_program(self, program: str) -> List[Prospect]:
        return [p for p in self._prospects.values()
                if program.lower() in p.program_interest.lower()]

    def conversion_rate(self) -> float:
        if not self._prospects:
            return 0.0
        enrolled = len(self.by_status(ProspectStatus.ENROLLED))
        return enrolled / len(self._prospects)

    def funnel_report(self) -> Dict:
        return {s.value: len(self.by_status(s)) for s in ProspectStatus}

    def dashboard(self) -> Dict:
        return {"university": self.UNIVERSITY, "total": len(self._prospects),
                "enrolled": len(self.by_status(ProspectStatus.ENROLLED)),
                "conversion_rate": round(self.conversion_rate(), 3),
                "funnel": self.funnel_report()}
