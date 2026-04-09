"""Tests for PICU-Student-Acquisition — PIOutreachEngine funnel management."""
import pytest
try:
    from picu.outreach import PIOutreachEngine, Prospect, ProspectStatus
    HAS = True
except ImportError:
    HAS = False

def test_prospect_creates():
    p = Prospect("pr1","Alice","alice@example.com","Theology")
    assert p.name == "Alice"

def test_prospect_default_status():
    p = Prospect("pr1","A","a@b.com","Program")
    assert p.status == ProspectStatus.NEW

def test_engine_add_prospect():
    if not HAS: pytest.skip()
    e = PIOutreachEngine()
    p = e.add_prospect("pr1","Alice","a@test.com","Theology")
    assert e.get("pr1") is not None

def test_engine_advance_status():
    if not HAS: pytest.skip()
    e = PIOutreachEngine()
    e.add_prospect("pr1","A","a@t.com","Prog")
    e.advance("pr1", ProspectStatus.INTERESTED)
    assert e.get("pr1").status == ProspectStatus.INTERESTED

def test_engine_add_note():
    if not HAS: pytest.skip()
    e = PIOutreachEngine()
    e.add_prospect("pr1","A","a@t.com","Prog")
    e.add_note("pr1","Called on Monday, interested")
    assert len(e.get("pr1").notes) == 1

def test_by_status():
    if not HAS: pytest.skip()
    e = PIOutreachEngine()
    e.add_prospect("pr1","A","a@t.com","P1")
    e.add_prospect("pr2","B","b@t.com","P2")
    e.advance("pr1", ProspectStatus.ENROLLED)
    enrolled = e.by_status(ProspectStatus.ENROLLED)
    assert len(enrolled) == 1

def test_by_program():
    if not HAS: pytest.skip()
    e = PIOutreachEngine()
    e.add_prospect("pr1","A","a@t.com","Theology")
    e.add_prospect("pr2","B","b@t.com","Business")
    assert len(e.by_program("Theology")) == 1

def test_conversion_rate():
    if not HAS: pytest.skip()
    e = PIOutreachEngine()
    e.add_prospect("pr1","A","a@t.com","P")
    e.add_prospect("pr2","B","b@t.com","P")
    e.advance("pr1", ProspectStatus.ENROLLED)
    assert abs(e.conversion_rate() - 0.5) < 0.01

def test_funnel_report():
    if not HAS: pytest.skip()
    e = PIOutreachEngine()
    e.add_prospect("pr1","A","a@t.com","P")
    report = e.funnel_report()
    assert isinstance(report, dict)

def test_dashboard():
    if not HAS: pytest.skip()
    e = PIOutreachEngine()
    d = e.dashboard()
    assert "university" in d and "conversion_rate" in d
