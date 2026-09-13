from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


OUTPUT = "public/Tayeba-Khan-CV.pdf"
INK = colors.HexColor("#181815")
MUTED = colors.HexColor("#5f5b54")
SIGNAL = colors.HexColor("#EF5B32")
PAPER = colors.HexColor("#FFFEFA")
LINE = colors.HexColor("#D4CEC2")


doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    rightMargin=15 * mm,
    leftMargin=15 * mm,
    topMargin=8 * mm,
    bottomMargin=5 * mm,
    title="Tayeba Khan - CV",
    author="Tayeba Khan",
)

styles = {
    "name": ParagraphStyle(
        "name", fontName="Helvetica-Bold", fontSize=25, leading=27, textColor=INK, spaceAfter=3
    ),
    "tagline": ParagraphStyle(
        "tagline", fontName="Helvetica", fontSize=9.5, leading=13, textColor=MUTED
    ),
    "meta": ParagraphStyle(
        "meta", fontName="Helvetica-Bold", fontSize=8, leading=11, textColor=INK, alignment=TA_RIGHT
    ),
    "section": ParagraphStyle(
        "section", fontName="Helvetica-Bold", fontSize=8.2, leading=10, textColor=SIGNAL,
        spaceBefore=5, spaceAfter=2.5, uppercase=True
    ),
    "role": ParagraphStyle(
        "role", fontName="Helvetica-Bold", fontSize=9.9, leading=11.8, textColor=INK, spaceAfter=1
    ),
    "sub": ParagraphStyle(
        "sub", fontName="Helvetica", fontSize=8.1, leading=10.5, textColor=MUTED, spaceAfter=3
    ),
    "body": ParagraphStyle(
        "body", fontName="Helvetica", fontSize=8.4, leading=11.6, textColor=INK, spaceAfter=3
    ),
    "bullet": ParagraphStyle(
        "bullet", fontName="Helvetica", fontSize=8, leading=10.4, textColor=INK,
        leftIndent=8, firstLineIndent=-5, bulletIndent=0, spaceAfter=1
    ),
    "small": ParagraphStyle(
        "small", fontName="Helvetica", fontSize=7.8, leading=10.5, textColor=INK
    ),
}


def rule():
    table = Table([[""]], colWidths=[180 * mm], rowHeights=[1])
    table.setStyle(TableStyle([("LINEBELOW", (0, 0), (-1, -1), 0.8, LINE)]))
    return table


def bullet(text):
    return Paragraph(f"• {text}", styles["bullet"])


story = []
header = Table(
    [[
        Paragraph("TAYEBA KHAN", styles["name"]),
        Paragraph("London, United Kingdom<br/>linkedin.com/in/tayebakhan2410<br/>github.com/tayebakhan/tayeba-portfolio<br/><link href='https://tayeba-khan-portfolio.tayebakhan2410.chatgpt.site'>Portfolio website</link>", styles["meta"]),
    ]],
    colWidths=[116 * mm, 64 * mm],
)
header.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP")]))
story.extend([
    header,
    Paragraph(
        "Computer Science (Artificial Intelligence) student building reliable software and practical AI systems. "
        "Interested in software engineering, agentic AI, and product-focused technology roles.",
        styles["tagline"],
    ),
    Spacer(1, 5),
    rule(),
])

story.append(Paragraph("EDUCATION", styles["section"]))
edu = Table(
    [[
        Paragraph("BSc Computer Science (Artificial Intelligence)", styles["role"]),
        Paragraph("Sep 2025 - Jun 2029", styles["meta"]),
    ]],
    colWidths=[143 * mm, 37 * mm],
)
edu.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP")]))
story.extend([
    edu,
    Paragraph("Brunel University London", styles["sub"]),
    bullet("Selected results: Logic and Computation (A*); Information Systems and Organisations (A); Software Design and Implementation (A); Introductory Programming (B+); Programming Applications (B+)."),
])

story.append(Paragraph("SELECTED TECHNICAL PROJECTS", styles["section"]))
story.extend([
    Paragraph("LifeOS - Agentic Personal-Administration System", styles["role"]),
    Paragraph("Python · Gemini · Google ADK · Google Cloud · REST APIs", styles["sub"]),
    bullet("Built an evidence-first agent that extracts facts and obligations from documents, flags missing information, and produces editable next actions without presenting assumptions as facts."),
    bullet("Refactored domain-specific logic into generic admin items and added GET/PATCH API endpoints so multiple documents can feed one manageable workflow."),
    bullet("Diagnosed authentication and model-region failures, validated PDF extraction with real document structures, and kept deadline planning deterministic where reliability mattered."),
    Spacer(1, 3),
    Paragraph("SwiftBot Traffic-Light Rover - Team Software Design Project", styles["role"]),
    Paragraph("Java · Maven · SwiftBot API · Camera classification · Testing", styles["sub"]),
    bullet("Designed a modular control system that detects coloured signals within 30 cm, executes timed manoeuvres, handles button input, and produces an execution log."),
    bullet("Improved unreliable RGB classification, corrected control mappings, resolved dependency issues, and implemented sensitivity modes plus safe termination flows."),
    Spacer(1, 3),
    Paragraph("Java Task Manager - Independent Build", styles["role"]),
    Paragraph("Java · Collections · Object-oriented programming · Input validation", styles["sub"]),
    bullet("Turned first-year programming concepts into a complete productivity tool for creating, organizing, and tracking tasks using structured objects and mutable collections."),
])

story.append(Paragraph("TECHNICAL SKILLS", styles["section"]))
skills = Table(
    [
        [Paragraph("Languages", styles["role"]), Paragraph("Java, Python, C, C++, SQL, JavaScript, HTML/CSS", styles["small"])],
        [Paragraph("Tools", styles["role"]), Paragraph("Git, Maven, Google ADK, Gemini API, Google Cloud, Eclipse, VS Code", styles["small"])],
        [Paragraph("Practices", styles["role"]), Paragraph("OOP, REST APIs, testing, requirements analysis, debugging, documentation, team leadership", styles["small"])],
    ],
    colWidths=[35 * mm, 145 * mm],
)
skills.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LINEBELOW", (0, 0), (-1, -2), 0.5, LINE),
    ("TOPPADDING", (0, 0), (-1, -1), 4),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
]))
story.append(skills)

story.append(Paragraph("LEADERSHIP &amp; ACHIEVEMENTS", styles["section"]))
story.extend([
    Paragraph("1st Place - Brunel x HackerRank Java Intro Contest | 2026", styles["role"]),
    bullet("Solved the final Java Priority Queue challenge in 28 minutes, finishing 17 minutes ahead of the second-place completion time."),
    Paragraph("READY Programme Finalist - ClayClean | 2025", styles["role"]),
    bullet("Researched the needs of displaced families in Afghanistan, completed a SWOT analysis, planned a £5,000 first-year budget and presented a 150-filter proposal to a judging panel."),
    Paragraph("University Group Project - Task 6 Lead", styles["role"]),
    bullet("Arranged meetings, distributed responsibilities, set soft deadlines, and followed up to bring delayed contributions into one completed submission."),
    Paragraph("Club Leadership", styles["role"]),
    bullet("Served as Secretary of the Debating Club, Secretary General of the Earth and Nature Club, and Organizing Secretary of the Art Club at Rajuk College."),
    Paragraph("Operations Executive - Rise of Youth Community Global | 2021", styles["role"]),
    bullet("Supported international campaign delivery, coordinated reporting, and helped lead 106 core members from 13 nations across eight departments."),
])

story.append(Paragraph("PROFESSIONAL EXPERIENCE", styles["section"]))
story.extend([
    Paragraph("Ambassadorship Award - Markopolo.ai | 2021", styles["role"]),
    bullet("Completed the Academy Ambassadors Program under a Forbes 30 Under 30 instructor, building foundations in marketing strategy and digital marketing."),
    Paragraph("Content Writer - Falcon Academy of Sciences | Nov 2022 - Apr 2023", styles["role"]),
    bullet("Researched academic topics, collaborated with subject specialists, and produced clear, accessible web and print content for different audiences."),
])

story.append(Paragraph("PART-TIME EXPERIENCE", styles["section"]))
story.extend([
    Paragraph("Back of House - Nando’s UK and IRE | Jan - May 2026", styles["role"]),
    bullet("Maintained accuracy during high-volume service and coordinated opening, closing, restocking, and rush-period work within a fast team."),
    Paragraph("IELTS Instructor - Mentors’ Bangladesh", styles["role"]),
    bullet("Explained unfamiliar ideas simply, adapted to different learners, and communicated confidently with varied audiences."),
])

doc.build(story, onFirstPage=lambda c, d: c.setFillColor(PAPER) or c.rect(0, 0, A4[0], A4[1], fill=1, stroke=0))
