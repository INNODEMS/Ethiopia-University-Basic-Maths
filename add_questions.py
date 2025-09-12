import os
import urllib.parse

sections_map = {
    "analytic-geometry/sections/subsections/sec-the-general-second-degree-equation/subsec-analysis-of-the-general-second.ptx" : "Analytic-Geometry-(NS)/Analysis-of-the-general-second-degree-equation",
    "analytic-geometry/sections/subsections/sec-circles/subsec-definition-of-a-circle.ptx" : "Analytic-Geometry-(NS)/Definition-of-a-circle",
    "analytic-geometry/sections/subsections/sec-hyperbolas/subsec-definition-of-a-hyperbola.ptx" : "Analytic-Geometry-(NS)/Definition-of-a-hyperbola",
    "analytic-geometry/sections/subsections/sec-parabolas/subsec-definition-of-a-parabola.ptx" : "Analytic-Geometry-(NS)/Definition-of-a-parabola",
    "analytic-geometry/sections/subsections/sec-ellipses/subsec-definition-of-an-ellipse.ptx" : "Analytic-Geometry-(NS)/Definition-of-an-ellipse",
    "analytic-geometry/sections/subsections/sec-distance-formula-and-equation-of/subsec-distance-between-a-point-and.ptx" : "Analytic-Geometry-(NS)/Distance-between-a-point-and-a-line",
    "analytic-geometry/sections/subsections/sec-distance-formula-and-equation-of/subsec-distance-between-two-points-and.ptx" : "Analytic-Geometry-(NS)/Distance-between-two-points-and-division-of-segments",
    "analytic-geometry/sections/subsections/sec-circles/subsec-equation-of-a-circle.ptx" : "Analytic-Geometry-(NS)/Equation-of-a-circle",
    "analytic-geometry/sections/subsections/sec-hyperbolas/subsec-equation-of-a-hyperbola.ptx" : "Analytic-Geometry-(NS)/Equation-of-a-hyperbola",
    "analytic-geometry/sections/subsections/sec-parabolas/subsec-equation-of-parabolas.ptx" : "Analytic-Geometry-(NS)/Equation-of-a-parabola",
    "analytic-geometry/sections/subsections/sec-ellipses/subsec-equation-of-an-ellipse.ptx" : "Analytic-Geometry-(NS)/Equation-of-an-ellipse",
    "analytic-geometry/sections/subsections/sec-distance-formula-and-equation-of/subsec-equations-of-lines.ptx" : "Analytic-Geometry-(NS)/Equations-of-lines",
    "analytic-geometry/sections/subsections/sec-circles/subsec-intersection-of-a-circle-with.ptx" : "Analytic-Geometry-(NS)/Intersection-of-a-circle-with-a-line-and-tangent-line-to-a-circle",
    "analytic-geometry/sections/subsections/sec-the-general-second-degree-equation/subsec-rotation-of-coordinate-axes.ptx" : "Analytic-Geometry-(NS)/Rotation-of-coordinate-axes",
    "functions/sections/sec-definition-and-basic-properties-of.ptx" : "Functions-(NS-and-SS)/Definition-and-basic-properties-of-logarithmic,-exponential,-trigonometric-functions-and-their-graphs",
    "functions/sections/sec-polynomials-zeros-of-polynomials-rational.ptx" : "Functions-(NS-and-SS)/Polynomials,-zeros-of-polynomials,-rational-functions-and-their-graphs",
    "functions/sections/sec-real-valued-functions-and-their.ptx" : "Functions-(NS-and-SS)/Real-valued-functions-and-their-properties",
    "functions/sections/sec-review-of-relations-and-functions.ptx" : "Functions-(NS-and-SS)/Review-of-relations-and-functions",
    "functions/sections/sec-types-of-functions-and-inverse.ptx" : "Functions-(NS-and-SS)/Types-of-functions-and-inverse-of-a-function",
    "propositional-logic-and-set-theory/sections/sec-argument-and-validity.ptx" : "Propositional-Logic-and-Set-Theory-(NS-and-SS)/Argument-and-validity",
    "propositional-logic-and-set-theory/sections/sec-open-propositions-and-quantifiers.ptx" : "Propositional-Logic-and-Set-Theory-(NS-and-SS)/Open-propositions-and-quantifiers",
    "propositional-logic-and-set-theory/sections/subsections/sec-propositional-logic/subsec-compound-(or-complex)-propositions.ptx" : "Propositional-Logic-and-Set-Theory-(NS-and-SS)/Compound-(or-complex)-propositions",
    "propositional-logic-and-set-theory/sections/subsections/sec-propositional-logic/subsec-definition-and-examples-of-propositions.ptx" : "Propositional-Logic-and-Set-Theory-(NS-and-SS)/Definition-and-examples-of-propositions",
    "propositional-logic-and-set-theory/sections/subsections/sec-set-theory/subsec-description-of-sets.ptx" : "Propositional-Logic-and-Set-Theory-(NS-and-SS)/Description-of-sets",
    "propositional-logic-and-set-theory/sections/subsections/sec-propositional-logic/subsec-logical-connectives.ptx" : "Propositional-Logic-and-Set-Theory-(NS-and-SS)/Logical-connectives",
    "propositional-logic-and-set-theory/sections/subsections/sec-set-theory/subsec-set-operations-and-venn-diagrams.ptx" : "Propositional-Logic-and-Set-Theory-(NS-and-SS)/Set-operations-and-Venn-diagrams",
    "propositional-logic-and-set-theory/sections/subsections/sec-propositional-logic/subsec-tautology-and-contradiction.ptx" : "Propositional-Logic-and-Set-Theory-(NS-and-SS)/Tautology-and-contradiction",
    "propositional-logic-and-set-theory/sections/subsections/sec-set-theory/subsec-the-concept-of-a-set.ptx" : "Propositional-Logic-and-Set-Theory-(NS-and-SS)/The-concept-of-a-set",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-additive-and-multiplicative-inverses.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/Additive-and-multiplicative-inverses",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-argument-amplitude-of-a-complex.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/Argument-(amplitude)-of-a-complex-number",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-conjugate-of-a-complex-number.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/Conjugate-of-a-complex-number",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-extraction-of-roots.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/Extraction-of-roots",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-modulus-norm-of-a-complex.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/Modulus-(norm)-of-a-complex-number",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-operations-on-complex-numbers.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/Operations-on-complex-numbers",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-plotting-complex-numbers.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/Plotting-complex-numbers",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-set-of-complex-numbers/subsec-polar-form-of-a-complex.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/Polar-form-of-a-complex-number",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-real-number-system/subsec-the-set-of-integers.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/The-set-of-integers",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-real-number-system/subsec-the-set-of-natural-numbers.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/The-set-of-natural-numbers",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-real-number-system/subsec-the-set-of-rational-numbers.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/The-set-of-rational-numbers",
    "the-real-and-complex-number-systems/sections/subsections/sec-the-real-number-system/subsec-the-set-of-real-numbers.ptx" : "The-Real-and-Complex-Number-Systems-(NS)/The-set-of-real-numbers",
}

for section, questions in sections_map.items():
    sfile = os.path.join("source", section)
    qpath = os.path.join("assets/questions/top/Mathematics-for-NS-&-SS-23-24-Question-Bank/", questions)
    qpath2 = os.path.join("questions/top/Mathematics-for-NS-&-SS-23-24-Question-Bank/", questions)
    qfiles = []
    qincludes = []
    for file in os.listdir(qpath):
        # print(file)
        full_path = os.path.join(qpath, file)
        if os.path.isfile(full_path) and file != "gitsync_category.xml":
            qfile = os.path.join(qpath2, file)
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
            review_url = (baseurl + encoded_data).replace("&", "&amp;")
            qincludes.append(
                f'''<exercise><stack source="/{qfile_esc}" />\n
                <url href="{review_url}">Add review</url></exercise>'''
            )
    # qincludes = [f'<exercise><stack source="/{qfile}" /></exercise>' for qfile in qfiles]
    qincludes = "\n".join(qincludes)
    with open(sfile, "r") as f:
        content = f.read()
    if os.path.basename(sfile).startswith("sec"):
        content = content.replace("</section>", "\n" + qincludes + "\n</section>")
    elif os.path.basename(sfile).startswith("subsec"):
        content = content.replace("</subsection>", "\n" + qincludes + "\n</subsection>")
    else:
        print("Strange file")
    with open(sfile, "w") as f:
        f.write(content)

