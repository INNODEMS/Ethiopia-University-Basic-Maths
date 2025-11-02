# pip install python-slugify
from slugify import slugify

import os
import json
from pathlib import Path
import re
import urllib.parse

MAXCATLENGTH = 64
MAXQLENGTH = 64

sections_map = {
    "preface.ptx" : "Default-for-Typing-Answers-Quiz",
    "analytic-geometry/sections/subsections/sec-the-general-second-degree-equation/subsec-analysis-of-the-general-second.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Analysis-of-the-general-second-degree-equation",
    "analytic-geometry/sections/subsections/sec-circles/subsec-definition-of-a-circle.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Definition-of-a-circle",
    "analytic-geometry/sections/subsections/sec-hyperbolas/subsec-definition-of-a-hyperbola.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Definition-of-a-hyperbola",
    "analytic-geometry/sections/subsections/sec-parabolas/subsec-definition-of-a-parabola.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Definition-of-a-parabola",
    "analytic-geometry/sections/subsections/sec-ellipses/subsec-definition-of-an-ellipse.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Definition-of-an-ellipse",
    "analytic-geometry/sections/subsections/sec-distance-formula-and-equation-of/subsec-distance-between-a-point-and.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Distance-between-a-point-and-a-line",
    "analytic-geometry/sections/subsections/sec-distance-formula-and-equation-of/subsec-distance-between-two-points-and.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Distance-between-two-points-and-division-of-segments",
    "analytic-geometry/sections/subsections/sec-circles/subsec-equation-of-a-circle.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Equation-of-a-circle",
    "analytic-geometry/sections/subsections/sec-hyperbolas/subsec-equation-of-a-hyperbola.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Equation-of-a-hyperbola",
    "analytic-geometry/sections/subsections/sec-parabolas/subsec-equation-of-parabolas.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Equation-of-a-parabola",
    "analytic-geometry/sections/subsections/sec-ellipses/subsec-equation-of-an-ellipse.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Equation-of-an-ellipse",
    "analytic-geometry/sections/subsections/sec-distance-formula-and-equation-of/subsec-equations-of-lines.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Equations-of-lines",
    "analytic-geometry/sections/subsections/sec-circles/subsec-intersection-of-a-circle-with.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Intersection-of-a-circle-with-a-line-and-tangent-line-to-a-circle",
    "analytic-geometry/sections/subsections/sec-the-general-second-degree-equation/subsec-rotation-of-coordinate-axes.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Analytic-Geometry-(NS)/Rotation-of-coordinate-axes",
    "functions/sections/sec-definition-and-basic-properties-of.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Functions-(NS-and-SS)/Definition-and-basic-properties-of-logarithmic,-exponential,-trigonometric-functions-and-their-graphs",
    "functions/sections/sec-polynomials-zeros-of-polynomials-rational.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Functions-(NS-and-SS)/Polynomials,-zeros-of-polynomials,-rational-functions-and-their-graphs",
    "functions/sections/sec-real-valued-functions-and-their.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Functions-(NS-and-SS)/Real-valued-functions-and-their-properties",
    "functions/sections/sec-review-of-relations-and-functions.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Functions-(NS-and-SS)/Review-of-relations-and-functions",
    "functions/sections/sec-types-of-functions-and-inverse.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Functions-(NS-and-SS)/Types-of-functions-and-inverse-of-a-function",
    "propositional-logic-and-set-theory/sections/sec-argument-and-validity.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Propositional-Logic-and-Set-Theory-(NS-and-SS)/Argument-and-validity",
    "propositional-logic-and-set-theory/sections/sec-open-propositions-and-quantifiers.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Propositional-Logic-and-Set-Theory-(NS-and-SS)/Open-propositions-and-quantifiers",
    "propositional-logic-and-set-theory/sections/subsections/sec-propositional-logic/subsec-compound-(or-complex)-propositions.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Propositional-Logic-and-Set-Theory-(NS-and-SS)/Compound-(or-complex)-propositions",
    "propositional-logic-and-set-theory/sections/subsections/sec-propositional-logic/subsec-definition-and-examples-of-propositions.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Propositional-Logic-and-Set-Theory-(NS-and-SS)/Definition-and-examples-of-propositions",
    "propositional-logic-and-set-theory/sections/subsections/sec-set-theory/subsec-description-of-sets.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Propositional-Logic-and-Set-Theory-(NS-and-SS)/Description-of-sets",
    "propositional-logic-and-set-theory/sections/subsections/sec-propositional-logic/subsec-logical-connectives.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Propositional-Logic-and-Set-Theory-(NS-and-SS)/Logical-connectives",
    "propositional-logic-and-set-theory/sections/subsections/sec-set-theory/subsec-set-operations-and-venn-diagrams.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Propositional-Logic-and-Set-Theory-(NS-and-SS)/Set-operations-and-Venn-diagrams",
    "propositional-logic-and-set-theory/sections/subsections/sec-propositional-logic/subsec-tautology-and-contradiction.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Propositional-Logic-and-Set-Theory-(NS-and-SS)/Tautology-and-contradiction",
    "propositional-logic-and-set-theory/sections/subsections/sec-set-theory/subsec-the-concept-of-a-set.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/Propositional-Logic-and-Set-Theory-(NS-and-SS)/The-concept-of-a-set",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-additive-and-multiplicative-inverses.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/Additive-and-multiplicative-inverses",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-argument-amplitude-of-a-complex.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/Argument-(amplitude)-of-a-complex-number",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-conjugate-of-a-complex-number.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/Conjugate-of-a-complex-number",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-extraction-of-roots.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/Extraction-of-roots",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-modulus-norm-of-a-complex.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/Modulus-(norm)-of-a-complex-number",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-operations-on-complex-numbers.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/Operations-on-complex-numbers",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-plotting-complex-numbers.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/Plotting-complex-numbers",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-polar-form-of-a-complex.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/Polar-form-of-a-complex-number",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-real-number-system/subsec-the-set-of-integers.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/The-set-of-integers",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-real-number-system/subsec-the-set-of-natural-numbers.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/The-set-of-natural-numbers",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-real-number-system/subsec-the-set-of-rational-numbers.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/The-set-of-rational-numbers",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-real-number-system/subsec-the-set-of-real-numbers.ptx" : "Mathematics-for-NS-SS-23-24-Question-Bank/The-Real-and-Complex-Number-Systems-(NS)/The-set-of-real-numbers",
}

def shorten_filename(sec):
    return '/'.join(s[:MAXCATLENGTH] for s in sec.split('/'))

sections_map = {s: shorten_filename(q) for s, q in sections_map.items()}

xmlids = set()

# This file contains all the questions that appear in some mastery quiz.
# We get this by running list_quizzes.py on the gitsync quiz output.
quiz_questions = json.load(open("question_files.json"))
# [1:] omits leading slash (/)
quiz_questions = {os.path.join("source/stack", file[1:]) : None for file in quiz_questions.keys()}

for section, questions in sections_map.items():
    sfile = os.path.join("source", section)
    qpath = os.path.join("source/stack/top/", questions)
    qfiles = []
    qincludes = []
    section_qfiles = set()
    for file in os.listdir(qpath):
        full_path = os.path.join(qpath, file)
        if os.path.isfile(full_path) and file != "gitsync_category.xml":
            qfile = os.path.join(qpath, file)
            # Filter out questions that don't appear in a quiz
            if qfile not in quiz_questions:
                print(f"Omitted {qfile} as it is not part of any quiz.")
            section_qfiles.add(qfile)
    # Order the questions in accordance of how they appear in the quiz

    # print(section_qfiles)
    ordered_qfiles = [file for file in quiz_questions if file in section_qfiles]
    # print(ordered_qfiles)
        # print(file)
    
    for qfile in ordered_qfiles:
        qfile_esc = qfile.replace("&", "&amp;")
        # print(qfile)
        qfiles.append(qfile_esc)
        baseurl = "https://docs.google.com/forms/d/e/1FAIpQLSfSNI6CXkmgeSZJh6v0WKkeD9MJ9g4pEQ9r0JaowD4ovNxj5w/viewform?"
        data = {
            "usp": "pp_url",
            "entry.699375810": qfile,
            "entry.2077830997": sfile,
        }
        encoded_data = urllib.parse.urlencode(data)
        xmlid = slugify(Path(qfile).stem)
        while xmlid in xmlids:
            # This masks re-use of questions in multiple quizzes.
            xmlid += "-2"
            print(f"Warning: repeated {xmlid}, question possibly used twice.")
        xmlids.add(xmlid)
        rel_path = os.path.relpath(qfile, os.path.dirname(sfile)).replace("&", "&amp;")
        review_url = (baseurl + encoded_data).replace("&", "&amp;")
        qincludes.append(
            # <stack source="/{qfile_esc}" />
            f"""
        <exercise>
            <stack-moodle label="{xmlid}" xmlns="http://stack-assessment.org/2025/moodle-question">
                <xi:include href="{rel_path}" />
            </stack>
            <conclusion component="review">
                <url href="{review_url}">Add review</url>
            </conclusion>
        </exercise>
            """
        )
    # qincludes = [f'<exercise><stack source="/{qfile}" /></exercise>' for qfile in qfiles]
    qincludes = "\n".join(qincludes)
    with open(sfile, "r") as f:
        content = f.read()
    # Remove old STACK question includes
    content = re.sub(r"\s*<exercise>\s*<stack.*?</exercise>", "", content, flags=re.DOTALL)
    # Add new includes
    if os.path.basename(sfile).startswith("sec"):
        content = content.replace("</section>", "\n" + qincludes + "\n</section>")
    elif os.path.basename(sfile).startswith("subsec"):
        content = content.replace("</subsection>", "\n" + qincludes + "\n</subsection>")
    elif os.path.basename(sfile).startswith("preface"):
        content = content.replace("</preface>", "\n" + qincludes + "\n</preface>")
    else:
        print("Strange file")
    with open(sfile, "w") as f:
        f.write(content)
