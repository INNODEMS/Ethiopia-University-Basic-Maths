var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "propositional-logic",
  "level": "1",
  "url": "propositional-logic.html",
  "type": "Section",
  "number": "1.1",
  "title": "Propositional Logic",
  "body": " Propositional Logic   Mathematical or symbolic logic is an analytical theory of the art of reasoning whose goal is to systematize and codify principles of valid reasoning. It has emerged from a study of the use of language in argument and persuasion and is based on the identification and examination of those parts of language which are essential for these purposes. It is formal in the sense that it lacks reference to meaning. Thereby it achieves versatility: it may be used to judge the correctness of a chain of reasoning (in particular, a \"mathematical proof\") solely on the basis of the form (and not the content) of the sequence of statements which make up the chain. There is a variety of symbolic logics. We shall be concerned only with that one which encompasses most of the deductions of the sort encountered in mathematics. Within the context of logic itself, this is \"classical\" symbolic logic.   Section objectives:   After completing this section, students will be able to:-     Identify the difference between proposition and sentence.    Describe the five logical connectives.    Determine the truth values of propositions using the rules of logical connectives.    Construct compound propositions using the five logical connectives.    Identify the difference between the converse and contrapositive of conditional statements.    Determine the truth values of compound propositions.    Distinguish a given compound proposition is whether tautology or contradiction.       Definition and examples of propositions  Consider the following sentences.     2 is an even number.    A triangle has four sides.    Athlete Haile G\/silassie weighed 45 kg when he was 20 years old.    May God bless you!    Give me that book.    What is your name?     The first three sentences are declarative sentences. The first one is true and the second one is false. The truth value of the third sentence cannot be ascertained because of lack of historical records but it is, by its very form, either true or false but not both. On the other hand, the last three sentences have no truth value. So they are not declaratives.  Now we begin by examining proposition, the building blocks of every argument. A proposition is a sentence that may be asserted or denied. Proposition in this way are different from questions, commands, and exclamations. Neither questions, which can be asked, nor exclamations, which can be uttered, can possibly be asserted or denied. Only propositions assert that something is (or is not) the case, and therefore only they can be true or false.    A proposition (or statement) is a sentence which has a truth value (either True or False but not both).    The above definition does not mean that we must always know what the truth value is. For example, the sentence “The digit in the decimal expansion of is 7” is a proposition, but it may be necessary to find this information in a Web site on the Internet to determine whether this statement is true. Indeed, for a sentence to be a proposition (or a statement), it is not a requirement that we are able to determine its truth value.  Every proposition has a truth value, namely true (denoted by T ) or false (denoted by F ).   Add review   Add review   Add review   Add review    Logical connectives  In mathematical discourse and elsewhere one constantly encounters declarative sentences which have been formed by modifying a statement with the word “not” or by connecting statements with the words “and”, “or”, “if . . . then (or implies)”, and “if and only if”. These five words or combinations of words are called propositional connectives.   Letters such as etc. are usually used to denote propositions.    Conjunction  When two propositions are joined with the connective “ and ,” the proposition formed is a logical conjunction . “and” is denoted by . So, the logical conjunction of two propositions, and , is written:      p and q are called the components of the conjunction . is true if and only if is true and is true.   The truth table for conjunction is given as follows:                                Consider the following propositions:   : 3 is an odd number. (True)   : 27 is a prime number. (False)   : Addis Ababa is the capital city of Ethiopia. (True)      : 3 is an odd number and 27 is a prime number. (False)     : 3 is an odd number and Addis Ababa is the capital city of Ethiopia. (True)        Disjunction  When two propositions are joined with the connective “ or ,” the proposition formed is called a logical disjunction . “or” is denoted by “ ”. So, the logical disjunction of two propositions, and , is written:   , read as “ or ” or “ disjunction ”.   is false if and only if both and are false.   The truth table for disjunction is given as follows:                                Consider the following propositions:   : 3 is an odd number. (True)   : 27 is a prime number. (False)   : Nairobi is the capital city of Ethiopia. (False)     : 3 is an odd number or 27 is a prime number. (True)    : 3 is an odd number or Nairobi is the capital city of Ethiopia. (False)        The use of “ or ” in propositional logic is rather different from its normal use in the English language. For example, if Solomon says, “I will go to the football match in the afternoon or I will go to the cinema in the afternoon,” he means he will do one thing or the other, but not both. Here “or” is used in the exclusive sense. But in propositional logic, “or” is used in the inclusive sense; that is, we allow Solomon the possibility of doing both things without him being inconsistent.    Implication  When two propositions are joined with the connective “ implies ,” the proposition formed is called a logical implication . “implies” is denoted by “ ” So, the logical implication of two propositions, and , is written:   .  The function of the connective “implies” between two propositions is the same as the use of “If … then …” Thus can be read as “if , then .”   is false if and only if is true and is false.   This form of a proposition is common in mathematics. The proposition is called the hypothesis or the antecedent of the conditional proposition while is called its conclusion or the consequent.  The following is the truth table for implication.                                Consider the following propositions:   : 3 is an odd number. (True)   : 27 is a prime number. (False)   : Addis Ababa is the capital city of Ethiopia. (True)     : If 3 is an odd number, then 27 is a prime number. (False)    : If 3 is an odd number, then Addis Ababa is the capital city of Ethiopia. (True)     We have already mentioned that can be expressed as both “If , then ” and “ implies . ” There are various ways of expressing the proposition , namely:   .   .   .   .   .   .     Bi-Implication  When two propositions are joined with the connective “ bi-implication ,” the proposition formed is called a logical  bi-implication or a logical equivalence . A bi-implication is denoted by “ ”. So the logical bi-implication of two propositions, and , is written:   .   is false if and only if and have different truth values.   The truth table for bi-implication is given by:                                   Let   : 2 is greater than 3. (False)  Let : 5 is greater than 4. (True)  Then   : 2 is greater than 3 if and only if 5 is greater than 4. (False)    Consider the following propositions:   : 3 is an odd number. (True)   : 2 is a prime number. (True)   : 3 is an odd number if and only if 2 is a prime number. (True)     There are various ways of stating the proposition .   if and only if (also written as iff ),   implies and implies ,   is necessary and sufficient for    is necessary and sufficient for    is equivalent to      Negation  Given any proposition , we can form the proposition called the negation of . The truth value of is if is and if is .   We can describe the relation between and as follows.                   Let   : Addis Ababa is the capital city of Ethiopia. (True)   : Addis Ababa is not the capital city of Ethiopia. (False)     Exercises       Which of the following sentences are propositions? For those that are, indicate the truth value.   123 is a prime number.    0 is an even number.     .    Multiply by 3.    What an impossible question!            State the negation of each of the following statements.    is a rational number.    0 is not a negative integer.    111 is a prime number.         Let : 15 is an odd number.   : 21 is a prime number.  State each of the following in words, and determine the truth value of each.    .     .     .     .     .     .     .     .         Complete the following truth table.                                       Add review   Add review   Add review    Compound (or complex) propositions  So far, what we have done is simply to define the logical connectives, and express them through algebraic symbols. Now we shall learn how to form propositions involving more than one connective, and how to determine the truth values of such propositions.    The proposition formed by joining two or more proposition by connective(s) is called a compound statement.     We must be careful to insert the brackets in proper places, just as we do in arithmetic. For example, the expression will be meaningless unless we know which connective should apply first. It could mean or , which are very different propositions. The truth value of such complicated propositions is determined by systematic applications of the rules for the connectives.       The possible truth values of a proposition are often listed in a table, called a truth table . If and are propositions, then there are four possible combinations of truth values for and . That is, , , and . If a third proposition is involved, then there are eight possible combinations of truth values for , and . In general, a truth table involving “ ” propositions , ,…, contains possible combinations of truth values. So, we use truth tables to determine the truth value of a compound proposition based on the truth value of its constituent component propositions.          Suppose and are true and is false.  What is the truth value of ?   Since is true and is false, is true.    Since is true and is false, true.    Thus, by applying the rule of implication, we get that is true.       Suppose that a compound proposition is symbolized by and that the truth values of and are and , respectively. Then the truth value of is , that of is , that of is . So the truth value of is         When dealing with compound propositions, we shall adopt the following convention on the use of parenthesis. Whenever “ ” or “ ” occur with “ ” or “ ”, we shall assume that “ ” or “ ” is applied first, and then “ ” or “ ” is then applied. For example,    However, it is always advisable to use brackets to indicate the order of the desired operations.     Two compound propositions and are said to be equivalent if they have the same truth value for all possible combinations of truth values for the component propositions occurring in both and . In this case we write .      Let P : .   Q : .                                             Then, P is equivalent to Q , since columns 5 and 6 of the above table are identical.      Let P : .   Q : .                                                     Looking at columns 5 and 6 of the table we see that they are not identical. Thus . It is useful at this point to mention the non-equivalence of certain conditional propositions. Given the conditional , we give the related conditional propositions:-     As we observed from example 1.7, the conditional and its contrapositve are equivalent. On the other hand, and .     Do not confuse the contrapositive and the converse of the conditional proposition. Here is the difference:    Converse: The hypothesis of a converse statement is the conclusion of the conditional statement and the conclusion of the converse statement is the hypothesis of the conditional statement.   Contrapositive: The hypothesis of a contrapositive statement is the negation of conclusion of the conditional statement and the conclusion of the contrapositive statement is the negation of hypothesis of the conditional statement.       If Kidist lives in Ethiopia, then she lives in Addis Ababa.   Converse: If Kidist lives in Addis Ababa, then she lives in Ethiopia.   Contrapositive: If Kidist does not live in Ethiopia, then she does not live in Addis Ababa.   Inverse: If Kidist does not live in Addis Ababa, then she does not live in Ethiopia.    If it is morning, then the sun is in the east.   Converse: If the sun is in the east, then it is morning.   Contrapositive: If the sun is not in the east, then it is not morning.   Inverse: If it is not morning, then the sun is not in the east.       Propositions, under the relation of logical equivalence, satisfy various laws or identities, which are listed below.     Idempotent Laws    .     .       Commutative Laws    .     .       Associative Laws    .     .       Distributive Laws    .     .       De Morgan’s Laws    .     .       Law of Contrapositive     Complement Law .      Add review   Add review    Tautology and contradiction    A compound proposition is a tautology if it is always true regardless of the truth values of its component propositions. If, on the other hand, a compound proposition is always false regardless of its component propositions, we say that such a proposition is a contradiction .     A proposition that is neither a tautology nor a contradiction is called a contingency .        Suppose is any proposition. Consider the compound propositions and .                       Observe that is a tautology while is a contradiction.    For any propositions and . Consider the compound proposition . Let us make a truth table and study the situation.                                   We have exhibited all the possibilities and we see that for all truth values of the constituent propositions, the proposition is always true. Thus, is a tautology.    The truth table for the compound proposition .                                              In example 1.10(c), the given compound proposition has a truth value for every possible combination of assignments of truth values for the component propositions and . Thus is a contradiction.        In truth table, if a proposition is a tautology, then every line in its column has as its entry; if a proposition is a contradiction, every line in its column has as its entry.    Two compound propositions and are equivalent if and only if \" \" is a tautology.         For statements , , and , use a truth table to show that each of the following pairs of statements are logically equivalent.    and .     and .     and .     and .     and .         For statements , , and , show that the following compound statements are tautology.    .     .     .         For statements and , show that is a contradiction.      Write the contrapositive and the converse of the following conditional statements.   If it is cold, then the lake is frozen.    If Solomon is healthy, then he is happy.    If it rains, Tigist does not take a walk.         Let and be statements. Which of the following implies that is false?    is false.     is true.     is true.     is true.     is false.         Suppose that the statements and are assigned the truth values and , respectively. Find the truth value of each of the following statements.    .     .     .     .     .     .     .                             Suppose the value of is ; what can be said about the value of ?         Suppose the value of is ; what can be said about the value of  ?    Suppose the value of is ; what can be said about the value of and ?         Construct the truth table for each of the following statements.                                      For each of the following determine whether the information given is sufficient to decide the truth value of the statement. If the information is enough, state the truth value. If it is insufficient, show that both truth values are possible.    , where .     , where .     , where .     , where .     , where .     , where and .         Add review   Add review   "
},
{
  "id": "propositional-logic-2-2",
  "level": "2",
  "url": "propositional-logic.html#propositional-logic-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Section objectives: "
},
{
  "id": "definition-and-examples-of-propositions-2",
  "level": "2",
  "url": "propositional-logic.html#definition-and-examples-of-propositions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Consider the following sentences. "
},
{
  "id": "def-definition_1_1",
  "level": "2",
  "url": "propositional-logic.html#def-definition_1_1",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A proposition (or statement) is a sentence which has a truth value (either True or False but not both).   "
},
{
  "id": "definition-and-examples-of-propositions-8",
  "level": "2",
  "url": "propositional-logic.html#definition-and-examples-of-propositions-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "true T false F "
},
{
  "id": "definition-and-examples-of-propositions-9",
  "level": "2",
  "url": "propositional-logic.html#definition-and-examples-of-propositions-9",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": " Add review "
},
{
  "id": "definition-and-examples-of-propositions-10",
  "level": "2",
  "url": "propositional-logic.html#definition-and-examples-of-propositions-10",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "",
  "body": " Add review "
},
{
  "id": "definition-and-examples-of-propositions-11",
  "level": "2",
  "url": "propositional-logic.html#definition-and-examples-of-propositions-11",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "",
  "body": " Add review "
},
{
  "id": "definition-and-examples-of-propositions-12",
  "level": "2",
  "url": "propositional-logic.html#definition-and-examples-of-propositions-12",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "",
  "body": " Add review "
},
{
  "id": "logical-connectives-3",
  "level": "2",
  "url": "propositional-logic.html#logical-connectives-3",
  "type": "Note",
  "number": "1.1.6",
  "title": "",
  "body": " Letters such as etc. are usually used to denote propositions.  "
},
{
  "id": "assemblage-Conjunction-2",
  "level": "2",
  "url": "propositional-logic.html#assemblage-Conjunction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "and conjunction "
},
{
  "id": "assemblage-Conjunction-4",
  "level": "2",
  "url": "propositional-logic.html#assemblage-Conjunction-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the components of the conjunction "
},
{
  "id": "logical-connectives-7",
  "level": "2",
  "url": "propositional-logic.html#logical-connectives-7",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "  Consider the following propositions:   : 3 is an odd number. (True)   : 27 is a prime number. (False)   : Addis Ababa is the capital city of Ethiopia. (True)      : 3 is an odd number and 27 is a prime number. (False)     : 3 is an odd number and Addis Ababa is the capital city of Ethiopia. (True)      "
},
{
  "id": "assemblage-Disjunction-2",
  "level": "2",
  "url": "propositional-logic.html#assemblage-Disjunction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "or disjunction "
},
{
  "id": "logical-connectives-11",
  "level": "2",
  "url": "propositional-logic.html#logical-connectives-11",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  Consider the following propositions:   : 3 is an odd number. (True)   : 27 is a prime number. (False)   : Nairobi is the capital city of Ethiopia. (False)     : 3 is an odd number or 27 is a prime number. (True)    : 3 is an odd number or Nairobi is the capital city of Ethiopia. (False)      "
},
{
  "id": "logical-connectives-12",
  "level": "2",
  "url": "propositional-logic.html#logical-connectives-12",
  "type": "Note",
  "number": "1.1.9",
  "title": "",
  "body": " The use of “ or ” in propositional logic is rather different from its normal use in the English language. For example, if Solomon says, “I will go to the football match in the afternoon or I will go to the cinema in the afternoon,” he means he will do one thing or the other, but not both. Here “or” is used in the exclusive sense. But in propositional logic, “or” is used in the inclusive sense; that is, we allow Solomon the possibility of doing both things without him being inconsistent.  "
},
{
  "id": "logical-connectives-17",
  "level": "2",
  "url": "propositional-logic.html#logical-connectives-17",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  Consider the following propositions:   : 3 is an odd number. (True)   : 27 is a prime number. (False)   : Addis Ababa is the capital city of Ethiopia. (True)     : If 3 is an odd number, then 27 is a prime number. (False)    : If 3 is an odd number, then Addis Ababa is the capital city of Ethiopia. (True)     We have already mentioned that can be expressed as both “If , then ” and “ implies . ” There are various ways of expressing the proposition , namely:   .   .   .   .   .   .   "
},
{
  "id": "assemblage-Bi-Implication-2",
  "level": "2",
  "url": "propositional-logic.html#assemblage-Bi-Implication-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bi-implication bi-implication "
},
{
  "id": "logical-connectives-21",
  "level": "2",
  "url": "propositional-logic.html#logical-connectives-21",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "     Let   : 2 is greater than 3. (False)  Let : 5 is greater than 4. (True)  Then   : 2 is greater than 3 if and only if 5 is greater than 4. (False)    Consider the following propositions:   : 3 is an odd number. (True)   : 2 is a prime number. (True)   : 3 is an odd number if and only if 2 is a prime number. (True)     There are various ways of stating the proposition .   if and only if (also written as iff ),   implies and implies ,   is necessary and sufficient for    is necessary and sufficient for    is equivalent to    "
},
{
  "id": "logical-connectives-25",
  "level": "2",
  "url": "propositional-logic.html#logical-connectives-25",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": "  Let   : Addis Ababa is the capital city of Ethiopia. (True)   : Addis Ababa is not the capital city of Ethiopia. (False)   "
},
{
  "id": "exercises-logical-connectives-2",
  "level": "2",
  "url": "propositional-logic.html#exercises-logical-connectives-2",
  "type": "Exercise",
  "number": "1.1.2.1",
  "title": "",
  "body": "     Which of the following sentences are propositions? For those that are, indicate the truth value.   123 is a prime number.    0 is an even number.     .    Multiply by 3.    What an impossible question!         "
},
{
  "id": "exercises-logical-connectives-3",
  "level": "2",
  "url": "propositional-logic.html#exercises-logical-connectives-3",
  "type": "Exercise",
  "number": "1.1.2.2",
  "title": "",
  "body": "  State the negation of each of the following statements.    is a rational number.    0 is not a negative integer.    111 is a prime number.      "
},
{
  "id": "exercises-logical-connectives-4",
  "level": "2",
  "url": "propositional-logic.html#exercises-logical-connectives-4",
  "type": "Exercise",
  "number": "1.1.2.3",
  "title": "",
  "body": "  Let : 15 is an odd number.   : 21 is a prime number.  State each of the following in words, and determine the truth value of each.    .     .     .     .     .     .     .     .      "
},
{
  "id": "exercises-logical-connectives-5",
  "level": "2",
  "url": "propositional-logic.html#exercises-logical-connectives-5",
  "type": "Exercise",
  "number": "1.1.2.4",
  "title": "",
  "body": "  Complete the following truth table.                                    "
},
{
  "id": "logical-connectives-27",
  "level": "2",
  "url": "propositional-logic.html#logical-connectives-27",
  "type": "Checkpoint",
  "number": "1.1.13",
  "title": "",
  "body": " Add review "
},
{
  "id": "logical-connectives-28",
  "level": "2",
  "url": "propositional-logic.html#logical-connectives-28",
  "type": "Checkpoint",
  "number": "1.1.14",
  "title": "",
  "body": " Add review "
},
{
  "id": "logical-connectives-29",
  "level": "2",
  "url": "propositional-logic.html#logical-connectives-29",
  "type": "Checkpoint",
  "number": "1.1.15",
  "title": "",
  "body": " Add review "
},
{
  "id": "def-compound-proposition1",
  "level": "2",
  "url": "propositional-logic.html#def-compound-proposition1",
  "type": "Definition",
  "number": "1.1.16",
  "title": "",
  "body": "  The proposition formed by joining two or more proposition by connective(s) is called a compound statement.   "
},
{
  "id": "compound-or-complex-propositions-4",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-4",
  "type": "Note",
  "number": "1.1.17",
  "title": "",
  "body": " We must be careful to insert the brackets in proper places, just as we do in arithmetic. For example, the expression will be meaningless unless we know which connective should apply first. It could mean or , which are very different propositions. The truth value of such complicated propositions is determined by systematic applications of the rules for the connectives.  "
},
{
  "id": "compound-or-complex-propositions-5-2-1-1",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-5-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truth table "
},
{
  "id": "compound-or-complex-propositions-6",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-6",
  "type": "Example",
  "number": "1.1.18",
  "title": "",
  "body": "     Suppose and are true and is false.  What is the truth value of ?   Since is true and is false, is true.    Since is true and is false, true.    Thus, by applying the rule of implication, we get that is true.       Suppose that a compound proposition is symbolized by and that the truth values of and are and , respectively. Then the truth value of is , that of is , that of is . So the truth value of is       "
},
{
  "id": "compound-or-complex-propositions-7",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-7",
  "type": "Remark",
  "number": "1.1.19",
  "title": "",
  "body": " When dealing with compound propositions, we shall adopt the following convention on the use of parenthesis. Whenever “ ” or “ ” occur with “ ” or “ ”, we shall assume that “ ” or “ ” is applied first, and then “ ” or “ ” is then applied. For example,    However, it is always advisable to use brackets to indicate the order of the desired operations.  "
},
{
  "id": "def-equivalence-of-propositions",
  "level": "2",
  "url": "propositional-logic.html#def-equivalence-of-propositions",
  "type": "Definition",
  "number": "1.1.20",
  "title": "",
  "body": "  Two compound propositions and are said to be equivalent if they have the same truth value for all possible combinations of truth values for the component propositions occurring in both and . In this case we write .   "
},
{
  "id": "compound-or-complex-propositions-9",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-9",
  "type": "Example",
  "number": "1.1.21",
  "title": "",
  "body": "  Let P : .   Q : .                                             Then, P is equivalent to Q , since columns 5 and 6 of the above table are identical.   "
},
{
  "id": "compound-or-complex-propositions-10",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-10",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": "  Let P : .   Q : .                                                     Looking at columns 5 and 6 of the table we see that they are not identical. Thus . It is useful at this point to mention the non-equivalence of certain conditional propositions. Given the conditional , we give the related conditional propositions:-     As we observed from example 1.7, the conditional and its contrapositve are equivalent. On the other hand, and .   "
},
{
  "id": "compound-or-complex-propositions-11",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Do not confuse the contrapositive and the converse of the conditional proposition. Here is the difference: "
},
{
  "id": "compound-or-complex-propositions-12",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Converse: "
},
{
  "id": "compound-or-complex-propositions-13",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Contrapositive: "
},
{
  "id": "compound-or-complex-propositions-14",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-14",
  "type": "Example",
  "number": "1.1.23",
  "title": "",
  "body": "     If Kidist lives in Ethiopia, then she lives in Addis Ababa.   Converse: If Kidist lives in Addis Ababa, then she lives in Ethiopia.   Contrapositive: If Kidist does not live in Ethiopia, then she does not live in Addis Ababa.   Inverse: If Kidist does not live in Addis Ababa, then she does not live in Ethiopia.    If it is morning, then the sun is in the east.   Converse: If the sun is in the east, then it is morning.   Contrapositive: If the sun is not in the east, then it is not morning.   Inverse: If it is not morning, then the sun is not in the east.      "
},
{
  "id": "compound-or-complex-propositions-17",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-17",
  "type": "Checkpoint",
  "number": "1.1.24",
  "title": "",
  "body": " Add review "
},
{
  "id": "compound-or-complex-propositions-18",
  "level": "2",
  "url": "propositional-logic.html#compound-or-complex-propositions-18",
  "type": "Checkpoint",
  "number": "1.1.25",
  "title": "",
  "body": " Add review "
},
{
  "id": "def-tautology-and-contradiction1",
  "level": "2",
  "url": "propositional-logic.html#def-tautology-and-contradiction1",
  "type": "Definition",
  "number": "1.1.26",
  "title": "",
  "body": "  A compound proposition is a tautology if it is always true regardless of the truth values of its component propositions. If, on the other hand, a compound proposition is always false regardless of its component propositions, we say that such a proposition is a contradiction .   "
},
{
  "id": "tautology-and-contradiction-3",
  "level": "2",
  "url": "propositional-logic.html#tautology-and-contradiction-3",
  "type": "Note",
  "number": "1.1.27",
  "title": "",
  "body": " A proposition that is neither a tautology nor a contradiction is called a contingency .  "
},
{
  "id": "tautology-and-contradiction-4",
  "level": "2",
  "url": "propositional-logic.html#tautology-and-contradiction-4",
  "type": "Example",
  "number": "1.1.28",
  "title": "",
  "body": "     Suppose is any proposition. Consider the compound propositions and .                       Observe that is a tautology while is a contradiction.    For any propositions and . Consider the compound proposition . Let us make a truth table and study the situation.                                   We have exhibited all the possibilities and we see that for all truth values of the constituent propositions, the proposition is always true. Thus, is a tautology.    The truth table for the compound proposition .                                              In example 1.10(c), the given compound proposition has a truth value for every possible combination of assignments of truth values for the component propositions and . Thus is a contradiction.   "
},
{
  "id": "tautology-and-contradiction-5",
  "level": "2",
  "url": "propositional-logic.html#tautology-and-contradiction-5",
  "type": "Remark",
  "number": "1.1.29",
  "title": "",
  "body": "    In truth table, if a proposition is a tautology, then every line in its column has as its entry; if a proposition is a contradiction, every line in its column has as its entry.    Two compound propositions and are equivalent if and only if \" \" is a tautology.     "
},
{
  "id": "exercises-tautology-and-contradiction-1",
  "level": "2",
  "url": "propositional-logic.html#exercises-tautology-and-contradiction-1",
  "type": "Exercise",
  "number": "1.1.4.1",
  "title": "",
  "body": "  For statements , , and , use a truth table to show that each of the following pairs of statements are logically equivalent.    and .     and .     and .     and .     and .      "
},
{
  "id": "exercises-tautology-and-contradiction-2",
  "level": "2",
  "url": "propositional-logic.html#exercises-tautology-and-contradiction-2",
  "type": "Exercise",
  "number": "1.1.4.2",
  "title": "",
  "body": "  For statements , , and , show that the following compound statements are tautology.    .     .     .      "
},
{
  "id": "exercises-tautology-and-contradiction-3",
  "level": "2",
  "url": "propositional-logic.html#exercises-tautology-and-contradiction-3",
  "type": "Exercise",
  "number": "1.1.4.3",
  "title": "",
  "body": "  For statements and , show that is a contradiction.   "
},
{
  "id": "exercises-tautology-and-contradiction-4",
  "level": "2",
  "url": "propositional-logic.html#exercises-tautology-and-contradiction-4",
  "type": "Exercise",
  "number": "1.1.4.4",
  "title": "",
  "body": "  Write the contrapositive and the converse of the following conditional statements.   If it is cold, then the lake is frozen.    If Solomon is healthy, then he is happy.    If it rains, Tigist does not take a walk.      "
},
{
  "id": "exercises-tautology-and-contradiction-5",
  "level": "2",
  "url": "propositional-logic.html#exercises-tautology-and-contradiction-5",
  "type": "Exercise",
  "number": "1.1.4.5",
  "title": "",
  "body": "  Let and be statements. Which of the following implies that is false?    is false.     is true.     is true.     is true.     is false.      "
},
{
  "id": "exercises-tautology-and-contradiction-6",
  "level": "2",
  "url": "propositional-logic.html#exercises-tautology-and-contradiction-6",
  "type": "Exercise",
  "number": "1.1.4.6",
  "title": "",
  "body": "  Suppose that the statements and are assigned the truth values and , respectively. Find the truth value of each of the following statements.    .     .     .     .     .     .     .                          "
},
{
  "id": "exercises-tautology-and-contradiction-7",
  "level": "2",
  "url": "propositional-logic.html#exercises-tautology-and-contradiction-7",
  "type": "Exercise",
  "number": "1.1.4.7",
  "title": "",
  "body": "  Suppose the value of is ; what can be said about the value of ?   "
},
{
  "id": "exercises-tautology-and-contradiction-8",
  "level": "2",
  "url": "propositional-logic.html#exercises-tautology-and-contradiction-8",
  "type": "Exercise",
  "number": "1.1.4.8",
  "title": "",
  "body": "     Suppose the value of is ; what can be said about the value of  ?    Suppose the value of is ; what can be said about the value of and ?      "
},
{
  "id": "exercises-tautology-and-contradiction-9",
  "level": "2",
  "url": "propositional-logic.html#exercises-tautology-and-contradiction-9",
  "type": "Exercise",
  "number": "1.1.4.9",
  "title": "",
  "body": "  Construct the truth table for each of the following statements.                                   "
},
{
  "id": "exercises-tautology-and-contradiction-10",
  "level": "2",
  "url": "propositional-logic.html#exercises-tautology-and-contradiction-10",
  "type": "Exercise",
  "number": "1.1.4.10",
  "title": "",
  "body": "  For each of the following determine whether the information given is sufficient to decide the truth value of the statement. If the information is enough, state the truth value. If it is insufficient, show that both truth values are possible.    , where .     , where .     , where .     , where .     , where .     , where and .      "
},
{
  "id": "tautology-and-contradiction-7",
  "level": "2",
  "url": "propositional-logic.html#tautology-and-contradiction-7",
  "type": "Checkpoint",
  "number": "1.1.30",
  "title": "",
  "body": " Add review "
},
{
  "id": "tautology-and-contradiction-8",
  "level": "2",
  "url": "propositional-logic.html#tautology-and-contradiction-8",
  "type": "Checkpoint",
  "number": "1.1.31",
  "title": "",
  "body": " Add review "
},
{
  "id": "open-propositions-and-quantifiers",
  "level": "1",
  "url": "open-propositions-and-quantifiers.html",
  "type": "Section",
  "number": "1.2",
  "title": "Open propositions and quantifiers",
  "body": " Open propositions and quantifiers  In mathematics, one frequently comes across sentences that involve a variable. For example, is one such. The truth value of this statement depends on the value we assign for the variable . For example, if , then this sentence is true, whereas if , then the sentence is false.   Section objectives:   After completing this section, students will be able to:-     Define open proposition.    Explain and exemplify the difference between proposition and open proposition.    Identify the two types of quantifiers.    Convert open propositions into propositions using quantifiers.#    Determine the truth value of a quantified proposition.    Convert a quantified proposition into words and vise versa.    Explain the relationship between existential and universal quantifiers.    Analyze quantifiers occurring in combinations.       An open statement (also called a predicate) is a sentence that contains one or more variables and whose truth value depends on the values assigned for the variables. We represent an open statement by a capital letter followed by the variable(s) in parenthesis, e.g., etc.      Here are some open propositions:    is the day before Sunday.     is a city in Africa.     is greater than .     .     It is clear that each one of these examples involves variables, but is not a proposition as we cannot assign a truth value to it. However, if individuals are substituted for the variables, then each one of them is a proposition or statement. For example, we may have the following.   Monday is the day before Sunday.    London is a city in Africa.    5 is greater than 9.             The collection of all allowable values for the variable in an open sentence is called the universal set (the universe of discourse) and denoted by U .     Two open proposition and are said to be equivalent if and only if for all individual . Note that if the universe is specified, then and are equivalent if and only if for all .      Let   .   .    Let   Then for all ; and have the same truth value.                Therefore for all .      Let be the universal set. An open proposition is a tautology if and only if is always true for all values of .      The open proposition is a tautology.  As we have observed in example 1.11, an open proposition can be converted into a proposition by substituting the individuals for the variables. However, there are other ways that an open proposition can be converted into a proposition, namely by a method called quantification. Let be an open proposition over the domain . Adding the phrase “For every ” to or “For some ” to produces a statement called a quantified statement.  Consider the following open propositions with universe .                   Then is always true for each .    is true only for and .     is always false for all values of .   Hence, given an open proposition , with universe , we observe that there are three possibilities.    is true for all .     is true for some .     is false for all .   Now we proceed to study open propositions which are satisfied by “ all ” and “ some ” members of the given universe.           The phrase \"for every \" is called a universal quantifier . We regard \"for every ,\" \"for all ,\" and \"for each \" as having the same meaning and symbolize each by “ .” Think of the symbol as an inverted (representing all). If is an open proposition with universe , then is a quantified proposition and is read as “every has the property .”    The phrase \"there exists an \" is called an existential quantifier . We regard \"there exists an ,\" \"for some ,\" and \"for at least one \" as having the same meaning, and symbolize each by “ .” Think of the symbol as the backwards capital (representing exists). If is an open proposition with universe , then is a quantified proposition and is read as “there exists with the property .”            To show that is , it is sufficient to find at least one such that is . Such an element is called a counter example .     is if we cannot find any having the property .           Write the following statements using quantifiers.   For each real number .    There is a real number such that .    The square of any real number is nonnegative.          Let . The truth value for [i.e ] is .    Let . The truth value for is . is a counterexample since but . On the other hand, is true, since such that .    Let . The truth value for is since there is no real number whose absolute value is .                 .     .           Relationship between the existential and universal quantifiers.   If is a formula in , consider the following four statements.    .     .     .     .   We might translate these into words as follows.   Everything has property .    Something has property .    Nothing has property .    Something does not have property .     Now (d) is the denial of (a), and (c) is the denial of (b), on the basis of everyday meaning. Thus, for example, the existential quantifier may be defined in terms of the universal quantifier.  Now we proceed to discuss the negation of quantifiers. Let be an open proposition. Then is false only if we can find an individual “ ” in the universe such that is false. If we succeed in getting such an individual, then is true. Hence will be false if is true. Therefore the negation of is . Hence we conclude that     Similarly, we can easily verified that   .   To negate a statement that involves the quantifiers and , change each to , change each to , and negate the open statement.     Let .                  Given propositions containing quantifiers we can form a compound proposition by joining them with connectives in the same way we form a compound proposition without quantifiers. For example, if we have and we can form . Consider the following statements involving quantifiers. Illustrations of these along with translations appear below.   All rationals are reals. .    No rationals are reals. .    Some rationals are reals. .    Some rationals are not reals. .       Let The set of intergers.  Let is a prime number.   is an even number.   is an odd number.  Then    is ; since there is an , say 2, such that is .     is . As a counterexample take 7. Then is and is . Hence .     is .     is .        Quantifiers Occurring in Combinations   So far, we have only considered cases in which universal and existential quantifiers appear simply. However, if we consider cases in which universal and existential quantifiers occur in combination, we are lead to essentially new logical structures. The following are the simplest forms of combinations:   “for all and for all the relation holds”;     “there is an and there is a for which holds”;     “for every there is a such that holds”;     “there is an which stands to every in the relation .”       Let The set of integers.  Let       means that there is an integer and there is an integer such that . This statement is true when and , since 4 + 1 = 5. Therefore, the statement is always true for this universe. There are other choices of and for which it would be true, but the symbolic statement merely says that there is at least one choice for and which will make the statement true, and we have demonstrated one such choice.     means that there is an integer such that for every , . This is false since no fixed value of will make this true for all in the universe; e.g. if , then is false for some .     means that for every integer , there is an integer such that . Let , then will always be an integer, so this is a true statement.     means that for every integer and for every integer , . This is false, for if and , we get .            Consider the statement If we let where the domain of both and is , the statement can be expressed as Since and for all real numbers and , it follows that and so is true for all real numbers and . Thus the quantified statement is true.    Consider the open statement     where the domain of the variable is the set of even integers and the domain of the variable is the set of odd integers. Then the quantified statement     can be expressed in words as  There exist an even integer and an odd integer such that .  Since is true, the quantified statement is true.    Consider the open statement where the domain of both and is the set of positive rational numbers. Then the quantified statement can be expressed in words as  For every positive rational number , there exists a positive rational number such that .  It turns out that the quantified statement is true. If we replace by , then we have     Since and for every real number , is false.    Consider the open statement where the domain of both and is the set of natural numbers. Then the quantified statement expressed in words, is  There exists a natural number such that for every natural numbers , is odd. The statement is false.       In general, from the meaning of the universal quantifier it follows that in an expression the two universal quantifiers may be interchanged without altering the sense of the sentence. This also holds for the existential quantifies in an expression such as .  In the statement , the choice of is allowed to depend on - the that works for one need not work for another . On the other hand, in the statement , the must work for all , i.e., is independent of . For example, the expression , where and are variables referring to the domain of real numbers, constitutes a true proposition, namely, “For every number , there is a number , such that is less that ,” i.e., “given any number, there is a greater number.” However, if the order of the symbol and is changed, in this case, we obtain: , which is a false proposition, namely, “There is a number which is greater than every number.” By transposing and , therefore, we get a different statement.  The logical situation here is:   .  Finally, we conclude this section with the remark that there are no mechanical rules for translating sentences from English into the logical notation which has been introduced. In every case one must first decide on the meaning of the English sentence and then attempt to convey that same meaning in terms of predicates, quantifiers, and, possibly, individual constants.     In each of the following, two open statements and are given, where the domain of both and is . Determine the truth value of for the given values of and .    . and . .     . and . .     . and . .         Let denote the set of odd integers and let is even, and is even. be open statements over the domain . State and in words.      State the negation of the following quantified statements.   For every rational number , the number is rational.    There exists a rational number such that .         Let is an integer, be an open sentence over the domain . Determine, with explanations, whether the following statements are true or false:      .     .         Determine the truth value of the following statements.    .     .     .     .     .     .     .              Consider the quantified statement where the domain of the variables and is .   Express this quantified statement in symbols.   Is the quantified statement in (a) true or false? Explain.  Express the negation of the quantified statement in (a) in symbols.  Is the negation of the quantified in (a) true or false? Explain.        Consider the open statement where the domain of is and the domain of is .   State the quantified statement in words.    Show quantified statement in (a) is true.         Consider the open statement where the domain of is and the domain of is .   State the quantified statement in words.    Show quantified statement in (a) is true.        "
},
{
  "id": "open-propositions-and-quantifiers-3",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Section objectives: "
},
{
  "id": "def-definition1",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#def-definition1",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  An open statement (also called a predicate) is a sentence that contains one or more variables and whose truth value depends on the values assigned for the variables. We represent an open statement by a capital letter followed by the variable(s) in parenthesis, e.g., etc.   "
},
{
  "id": "open-propositions-and-quantifiers-7",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-7",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Here are some open propositions:    is the day before Sunday.     is a city in Africa.     is greater than .     .     It is clear that each one of these examples involves variables, but is not a proposition as we cannot assign a truth value to it. However, if individuals are substituted for the variables, then each one of them is a proposition or statement. For example, we may have the following.   Monday is the day before Sunday.    London is a city in Africa.    5 is greater than 9.           "
},
{
  "id": "open-propositions-and-quantifiers-8",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-8",
  "type": "Remark",
  "number": "1.2.3",
  "title": "",
  "body": " The collection of all allowable values for the variable in an open sentence is called the universal set (the universe of discourse) and denoted by U .  "
},
{
  "id": "def-definition2",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#def-definition2",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  Two open proposition and are said to be equivalent if and only if for all individual . Note that if the universe is specified, then and are equivalent if and only if for all .   "
},
{
  "id": "open-propositions-and-quantifiers-10",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-10",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": "  Let   .   .    Let   Then for all ; and have the same truth value.                Therefore for all .   "
},
{
  "id": "def-definition3",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#def-definition3",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "  Let be the universal set. An open proposition is a tautology if and only if is always true for all values of .   "
},
{
  "id": "open-propositions-and-quantifiers-12",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-12",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": "  The open proposition is a tautology.  As we have observed in example 1.11, an open proposition can be converted into a proposition by substituting the individuals for the variables. However, there are other ways that an open proposition can be converted into a proposition, namely by a method called quantification. Let be an open proposition over the domain . Adding the phrase “For every ” to or “For some ” to produces a statement called a quantified statement.  Consider the following open propositions with universe .                   Then is always true for each .    is true only for and .     is always false for all values of .   Hence, given an open proposition , with universe , we observe that there are three possibilities.    is true for all .     is true for some .     is false for all .   Now we proceed to study open propositions which are satisfied by “ all ” and “ some ” members of the given universe.   "
},
{
  "id": "open-propositions-and-quantifiers-13-2-1-1",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-13-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universal quantifier existential quantifier "
},
{
  "id": "open-propositions-and-quantifiers-14",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-14",
  "type": "Remark",
  "number": "1.2.8",
  "title": "",
  "body": "    To show that is , it is sufficient to find at least one such that is . Such an element is called a counter example .     is if we cannot find any having the property .     "
},
{
  "id": "open-propositions-and-quantifiers-15",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-15",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "     Write the following statements using quantifiers.   For each real number .    There is a real number such that .    The square of any real number is nonnegative.          Let . The truth value for [i.e ] is .    Let . The truth value for is . is a counterexample since but . On the other hand, is true, since such that .    Let . The truth value for is since there is no real number whose absolute value is .                 .     .         "
},
{
  "id": "open-propositions-and-quantifiers-16",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Relationship between the existential and universal quantifiers. "
},
{
  "id": "open-propositions-and-quantifiers-23",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-23",
  "type": "Remark",
  "number": "1.2.10",
  "title": "",
  "body": " To negate a statement that involves the quantifiers and , change each to , change each to , and negate the open statement.  "
},
{
  "id": "open-propositions-and-quantifiers-24",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-24",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  Let .                 "
},
{
  "id": "open-propositions-and-quantifiers-26",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-26",
  "type": "Example",
  "number": "1.2.12",
  "title": "",
  "body": "  Let The set of intergers.  Let is a prime number.   is an even number.   is an odd number.  Then    is ; since there is an , say 2, such that is .     is . As a counterexample take 7. Then is and is . Hence .     is .     is .      "
},
{
  "id": "open-propositions-and-quantifiers-27",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quantifiers Occurring in Combinations "
},
{
  "id": "open-propositions-and-quantifiers-29",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-29",
  "type": "Example",
  "number": "1.2.13",
  "title": "",
  "body": "  Let The set of integers.  Let       means that there is an integer and there is an integer such that . This statement is true when and , since 4 + 1 = 5. Therefore, the statement is always true for this universe. There are other choices of and for which it would be true, but the symbolic statement merely says that there is at least one choice for and which will make the statement true, and we have demonstrated one such choice.     means that there is an integer such that for every , . This is false since no fixed value of will make this true for all in the universe; e.g. if , then is false for some .     means that for every integer , there is an integer such that . Let , then will always be an integer, so this is a true statement.     means that for every integer and for every integer , . This is false, for if and , we get .      "
},
{
  "id": "open-propositions-and-quantifiers-30",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#open-propositions-and-quantifiers-30",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": "     Consider the statement If we let where the domain of both and is , the statement can be expressed as Since and for all real numbers and , it follows that and so is true for all real numbers and . Thus the quantified statement is true.    Consider the open statement     where the domain of the variable is the set of even integers and the domain of the variable is the set of odd integers. Then the quantified statement     can be expressed in words as  There exist an even integer and an odd integer such that .  Since is true, the quantified statement is true.    Consider the open statement where the domain of both and is the set of positive rational numbers. Then the quantified statement can be expressed in words as  For every positive rational number , there exists a positive rational number such that .  It turns out that the quantified statement is true. If we replace by , then we have     Since and for every real number , is false.    Consider the open statement where the domain of both and is the set of natural numbers. Then the quantified statement expressed in words, is  There exists a natural number such that for every natural numbers , is odd. The statement is false.      "
},
{
  "id": "exercises-open-propositions-and-quantifiers-1",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#exercises-open-propositions-and-quantifiers-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "  In each of the following, two open statements and are given, where the domain of both and is . Determine the truth value of for the given values of and .    . and . .     . and . .     . and . .      "
},
{
  "id": "exercises-open-propositions-and-quantifiers-2",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#exercises-open-propositions-and-quantifiers-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "  Let denote the set of odd integers and let is even, and is even. be open statements over the domain . State and in words.   "
},
{
  "id": "exercises-open-propositions-and-quantifiers-3",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#exercises-open-propositions-and-quantifiers-3",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "  State the negation of the following quantified statements.   For every rational number , the number is rational.    There exists a rational number such that .      "
},
{
  "id": "exercises-open-propositions-and-quantifiers-4",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#exercises-open-propositions-and-quantifiers-4",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "  Let is an integer, be an open sentence over the domain . Determine, with explanations, whether the following statements are true or false:      .     .      "
},
{
  "id": "exercises-open-propositions-and-quantifiers-5",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#exercises-open-propositions-and-quantifiers-5",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": "  Determine the truth value of the following statements.    .     .     .     .     .     .     .           "
},
{
  "id": "exercises-open-propositions-and-quantifiers-6",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#exercises-open-propositions-and-quantifiers-6",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "",
  "body": "  Consider the quantified statement where the domain of the variables and is .   Express this quantified statement in symbols.   Is the quantified statement in (a) true or false? Explain.  Express the negation of the quantified statement in (a) in symbols.  Is the negation of the quantified in (a) true or false? Explain.     "
},
{
  "id": "exercises-open-propositions-and-quantifiers-7",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#exercises-open-propositions-and-quantifiers-7",
  "type": "Exercise",
  "number": "1.2.7",
  "title": "",
  "body": "  Consider the open statement where the domain of is and the domain of is .   State the quantified statement in words.    Show quantified statement in (a) is true.      "
},
{
  "id": "exercises-open-propositions-and-quantifiers-8",
  "level": "2",
  "url": "open-propositions-and-quantifiers.html#exercises-open-propositions-and-quantifiers-8",
  "type": "Exercise",
  "number": "1.2.8",
  "title": "",
  "body": "  Consider the open statement where the domain of is and the domain of is .   State the quantified statement in words.    Show quantified statement in (a) is true.      "
},
{
  "id": "sec-argument-and-validity",
  "level": "1",
  "url": "sec-argument-and-validity.html",
  "type": "Section",
  "number": "1.3",
  "title": "Argument and Validity",
  "body": " Argument and Validity   Section objectives:  After completing this section, students will be able to:-   Define argument (or logical deduction).  Identify hypothesis and conclusion of a given argument.  Determine the validity of an argument using a truth table.  Determine the validity of an argument using rules of inferences.      Definition 1.7: An argument (logical deduction) is an assertion that a given set of statements , called hypotheses or premises , yield another statement , called the conclusion . Such a logical deduction is denoted by:  or        Example 1.19: Consider the following argument:  If you study hard, then you will pass the exam.  You did not pass the exam.  Therefore, you did not study hard.  Let : You study hard.  : You will pass the exam.  The argument form can be written as:   When is an argument form accepted to be correct? In normal usage, we use an argument in order to demonstrate that a certain conclusion follows from known premises. Therefore, we shall require that under any assignment of truth values to the statements appearing, if the premises became all true, then the conclusion must also become true. Hence, we state the following definition.     Definition 1.8: An argument form is said to be valid if is true whenever all the premises are true; otherwise it is invalid .     Example 1.20: Investigate the validity of the following argument:     If it rains, crops will be good. It did not rain. Therefore, crops were not good.   Solution: First we construct a truth table for the statements appearing in the argument forms.                                      The premises and are true simultaneously in row 4 only. Since in this case is also true, the argument is valid.                                                                                 The 1 st , 2 nd , 5 th , 6 th and 7 th rows are those in which all the premises take value . In the 5 th , 6 th and 7 th rows however the conclusion takes value . Hence, the argument form is invalid.   Let : It rains.   : Crops are good.  : It did not rain.  : Crops were not good.  The argument form is  Now we can use truth table to test validity as follows:                                   The premises and are true simultaneously in row 4 only. Since in this case is also true, the argument is valid.  Remark:   What is important in validity is the form of the argument rather than the meaning or content of the statements involved.  The argument form is valid iff the statement   is a tautology.  Rules of inferences  Below we list certain valid deductions called rules of inferences.      Modes Ponens             Modes Tollens            Principle of Syllogism           Principle of Adjunction                         Principle of Detachment          Modes Tollendo Ponens             Modes Ponendo Tollens               Constructive Dilemma           Principle of Equivalence             Principle of Conditionalization           Formal proof of validity of an argument     Definition 1.9: A formal proof of a conclusion given hypotheses is a sequence of stapes, each of which applies some inference rule to hypotheses or previously proven statements (antecedent) to yield a new true statement (the consequent).     A formal proof of validity is given by writing on the premises and the statements which follows from them in a single column, and setting off in another column, to the right of each statement, its justification. It is convenient to list all the premises first.  Example 1.21: Show that is valid.  Solution:   is true premise  is true premise  is true contrapositive of (2)  is true Modes Ponens using (1) and (3)   Example 1.22: Show that the hypotheses  It is not sunny this afternoon and it is colder than yesterday.  If we go swimming, then it is sunny.  If we do not go swimming, then we will take a canoe trip.  If we take a canoe trip, then we will be home by sunset.  Lead to the conclusion:  We will be home by sunset.  Let : It is sunny this afternoon.  : It is colder than yesterday.  : We go swimming.  : We take a canoe trip.  : We will be home by sunset.  Then   hypothesis  simplification using (1)  hypothesis  Modus Tollens using (2) and (3)  hypothesis  Modus Ponens using (4) and (5)  hypothesis  Modus Ponens using (6) and (7)   Exercises      Use the truth table method to show that the following argument forms are valid.   .  .  .  .  .   For the following argument given a, b and c below:   Identify the premises.  Write argument forms.  Check the validity.   If he studies medicine, he will get a good job. If he gets a good job, he will get a good wage. He did not get a good wage. Therefore, he did not study medicine.  If the team is late, then it cannot play the game. If the referee is here, then the team is can play the game. The team is late. Therefore, the referee is not here.  If the professor offers chocolate for an answer, you answer the professor’s question. The professor offers chocolate for an answer. Therefore, you answer the professor’s question    Give formal proof to show that the following argument forms are valid.   .  .  .  .  .  .  .  .  .   Prove the following are valid arguments by giving formal proof.    If the rain does not come, the crops are ruined and the people will starve. The crops are not ruined or the people will not starve. Therefore, the rain comes.  If the team is late, then it cannot play the game. If the referee is here then the team can play the game. The team is late. Therefore, the referee is not here.        Add review   Add review  "
},
{
  "id": "sec-argument-and-validity-2-4",
  "level": "2",
  "url": "sec-argument-and-validity.html#sec-argument-and-validity-2-4",
  "type": "Table",
  "number": "1.3.1",
  "title": "",
  "body": "   Definition 1.7: An argument (logical deduction) is an assertion that a given set of statements , called hypotheses or premises , yield another statement , called the conclusion . Such a logical deduction is denoted by:  or       "
},
{
  "id": "sec-argument-and-validity-2-14",
  "level": "2",
  "url": "sec-argument-and-validity.html#sec-argument-and-validity-2-14",
  "type": "Table",
  "number": "1.3.2",
  "title": "",
  "body": "   Definition 1.8: An argument form is said to be valid if is true whenever all the premises are true; otherwise it is invalid .    "
},
{
  "id": "sec-argument-and-validity-2-19",
  "level": "2",
  "url": "sec-argument-and-validity.html#sec-argument-and-validity-2-19",
  "type": "Table",
  "number": "1.3.3",
  "title": "",
  "body": "                                "
},
{
  "id": "sec-argument-and-validity-2-22",
  "level": "2",
  "url": "sec-argument-and-validity.html#sec-argument-and-validity-2-22",
  "type": "Table",
  "number": "1.3.4",
  "title": "",
  "body": "                                                                           "
},
{
  "id": "sec-argument-and-validity-2-30",
  "level": "2",
  "url": "sec-argument-and-validity.html#sec-argument-and-validity-2-30",
  "type": "Table",
  "number": "1.3.5",
  "title": "",
  "body": "                                "
},
{
  "id": "sec-argument-and-validity-2-37",
  "level": "2",
  "url": "sec-argument-and-validity.html#sec-argument-and-validity-2-37",
  "type": "Table",
  "number": "1.3.6",
  "title": "",
  "body": "    Modes Ponens             Modes Tollens            Principle of Syllogism           Principle of Adjunction                         Principle of Detachment          Modes Tollendo Ponens             Modes Ponendo Tollens               Constructive Dilemma           Principle of Equivalence             Principle of Conditionalization          "
},
{
  "id": "sec-argument-and-validity-2-39",
  "level": "2",
  "url": "sec-argument-and-validity.html#sec-argument-and-validity-2-39",
  "type": "Table",
  "number": "1.3.7",
  "title": "",
  "body": "   Definition 1.9: A formal proof of a conclusion given hypotheses is a sequence of stapes, each of which applies some inference rule to hypotheses or previously proven statements (antecedent) to yield a new true statement (the consequent).    "
},
{
  "id": "sec-argument-and-validity-2-59",
  "level": "2",
  "url": "sec-argument-and-validity.html#sec-argument-and-validity-2-59",
  "type": "Table",
  "number": "1.3.8",
  "title": "",
  "body": "    Use the truth table method to show that the following argument forms are valid.   .  .  .  .  .   For the following argument given a, b and c below:   Identify the premises.  Write argument forms.  Check the validity.   If he studies medicine, he will get a good job. If he gets a good job, he will get a good wage. He did not get a good wage. Therefore, he did not study medicine.  If the team is late, then it cannot play the game. If the referee is here, then the team is can play the game. The team is late. Therefore, the referee is not here.  If the professor offers chocolate for an answer, you answer the professor’s question. The professor offers chocolate for an answer. Therefore, you answer the professor’s question    Give formal proof to show that the following argument forms are valid.   .  .  .  .  .  .  .  .  .   Prove the following are valid arguments by giving formal proof.    If the rain does not come, the crops are ruined and the people will starve. The crops are not ruined or the people will not starve. Therefore, the rain comes.  If the team is late, then it cannot play the game. If the referee is here then the team can play the game. The team is late. Therefore, the referee is not here.     "
},
{
  "id": "sec-argument-and-validity-3",
  "level": "2",
  "url": "sec-argument-and-validity.html#sec-argument-and-validity-3",
  "type": "Checkpoint",
  "number": "1.3.9",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-argument-and-validity-4",
  "level": "2",
  "url": "sec-argument-and-validity.html#sec-argument-and-validity-4",
  "type": "Checkpoint",
  "number": "1.3.10",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-set-theory",
  "level": "1",
  "url": "sec-set-theory.html",
  "type": "Section",
  "number": "1.4",
  "title": "Set theory",
  "body": " Set theory     In this section, we study some part of set theory especially description of sets, Venn diagrams and operations of sets.    Explain the concept of set.  Describe sets in different ways.  Identify operations on sets.  Illustrate sets using Venn diagrams.     The concept of a set  The term set is an undefined term, just as a point and a line are undefined terms in geometry. However, the concept of a set permeates every aspect of mathematics. Set theory underlies the language and concepts of modern mathematics. The term set refers to a well-defined collection of objects that share a certain property or certain properties. The term “ well-defined ” here means that the set is described in such a way that one can decide whether or not a given object belongs in the set. If is a set, then the objects of the collection are called the elements or members of the set . If is an element of the set , we write . If is not an element of the set , we write .  As a convention, we use capital letters to denote the names of sets and lowercase letters for elements of a set.  Note that for each objects and each set , exactly one of or but not both must be true.   Add review   Add review    Description of Sets  Sets are described or characterized by one of the following four different ways.     In this method, an ordinary English statement with minimum mathematical symbolization of the property of the elements is used to describe a set. actually, the statement could be in any language.       The set of counting numbers less than ten.    The set of letters in the word Addis Ababa.     The set of all countries in Africa.          If the elements of a set can be listed, we list them all between a pair of braces without repetion separating by commas, and without concern about the order of their appearance. Such a method of describing a set is called the rooster\/complete listing method.       The set of vowels in English alphabet may also be desribed as     The set of positive factors of is also described as            We agree on the convention that the order of writing the elements in the list is immaterial. As a result the sets contain the same elements, namely     The set contains just two distinct elements; namely hence it is the same set as We list distinct elements without repetition.           Let Elements of are   Notice that are different objects. Here but     Let The only element of is But     Let Then has four elements.     The readers are invited to write down all the elements of        In many occassions, the number of elements of a set may be too large to list them all; and in other occassions there may not be an end to the list. In such cases we look for a common property of the elements and describe the set by partially listing the elements. More precisely, if the common property is simple that it can easily be identified from a list of the first few elements, then within a pair of braces, we list these few elements followed (or preceded) by exactly three dotes and possibly by one last element. The following are such instances of describing sets by partial listing method.       The set of all counting numbers in     The set of non-positive integers is     The set of multiples of is     The set of odd integers less than is           When all the elements satisfy a common property we express the situation as an open proposition and describe the set using a method called the set-builder Method as follows:     We read it as is equal to the set of all 's is true. Here the bar | and the colon : mean such that. Notice that the letter is only a place holder and can be replaced throughout by other letters. So, for a property the set are all the same set.    The following sets are described using the set-builder method.                                   Express each of the above by using either the complete or the oartial listing method.      The set which has no elements is called the empty (or null) set and is denoted by       The set of such that is an empty set.      A set is finite if it has limited number of elements and it is called infinite if it unlimited number of elements.         Set is said to be a subset of set (or contained in ), denoted by every element of is an element of i.e.,   It follows from the definition that set is not a subset of if at least one element of is not an element of i.e., In such cases we write or      For any set and         If then and On the other hand, it is clear that and     If and then since every multiple of is even. However, while Thus     If then and On the other hand, since and             Sets and are said to be equal if they contain exactly the same elements. In this case, we write     Sets and are said to be equivalent if and only if there is a one to one correspondence among their elements. In this case, we write             The sets are all equal.              he set is said to be a proper subset of if every element is also an element in but has at least one element that is not in In this case, we write We also say is a proper set of and write It is clear that      Some authors do not use the symbol Instead they use the symbol for both subset and proper subset. In this material, we prefer to use the notations commonly used in highschool mathematics, and we continue using and differently, namely for subset and proper subset, respectively.     Let be a set. The power set of denoted by is the set whose elements are all subsets of That is,      If a set is finite with elements, then   The number of subsets of is and    The number of proper subsets of is         Let As denoted before, and are subset af Moreover, are all subsets of Therefore,     Frequently it is necessary to limit the topic of discussion to elements of a certain fixed set and regard all sets under consideration as a subset of this fixed set. We call this set the universal set or the universe and denoted by U.      Which of the following are sets?                                 Which of the following sets can be described in complete listing, partial listing and\/or set-builder methods? Describe each set by at least one of the three methods.   The set of the first letters in the English alphabet.    The set of all countries in the world.    The set of students of Addis Ababa University in the 2018\/2019 academic year.    The set of positive multiples of     The set of all horses with six legs.         Write each of the following sets by listing its elements within braces.                                 Let be the set of positive even integers less than Find the truth value of each of the following.                                                     Find the truth value of each of the following and verify your conclusion.              for any set      for any set               For any set               For each of the following set, find its power set.                            How many subsets and proper subsets do the sets that contain exactly elements have?      Is there a set with exactly the following indicated property?   Only one subset    Only one proper subset    Exactly 3 proper subsets    Exactly 4 subsets    Exactly 6 proper subse    Exactly 30 subsets    Exactly 14 proper subsets    Exactly 15 proper subsets         How many elements does contain if it has:    subsets?     proper subsets?    No proper subset?     proper subsets?         Find the truth value of each of the following.        For any set     For any set     For any set          For any three sets prove that:   If and then     If and then          Add review   Add review   Add review   Add review    Set Operations and Venn diagrams  Given two subsets and of a universal set , new sets can be formed using and in many ways, such as taking common elements or non-common elements, and putting everything together. Such processes of forming new sets are called set operations. In this section, three most important operations, namely union, intersection and complement are discussed.    The union of two sets and , denoted by , is the set of all elements that are either in or in (or in both sets). That is,     As easily seen the union operator in the theory of set id the counterpart of the logical operator     The union of two sets and , denoted by , is the set of all elements that are in That is,     As suggested by , the intersection operator in the theory of sets is the counterpart of the logical operator .   Two sets and are said to be disjoint sets if         Let Then,       Let The set of positive even integers and The set of positive multiples of 3. Then,                        The difference between two sets denoted by is all the elements in and not in this set is also called the relative complement of with respect to Symbolically,       is sometimes denoted by  are used interchangeably.     If then and      The above example shows that, in general, are disjoint.     Let be a subset of a universal set The absolute complement (or simply complement ) of denoted by is defined to be the set of all elements of that are not in That is,     Notice that taking the absolute complement of is the same as finding the relative complement of with respect to the universal set That is        If and if then         and     Then,            Let Then             Find Which of these are equal?    For any two sets and each of the following holds.                                    Now we define the symmetric difference of two sets.    The symmetric difference of two sets denoted by is the set       Let be the universal set, and Then and Thus       For any three sets, each of the following holds.    a.     b.     c.     d.     e.     f.       Let us prove property e formally.                              The readers are invited to prove the rest part of the theorem        While working with sets, it is helpful to use diagrams, called Venn diagrams , to illustrate the relationships involved. A Venn diagram is a schematic or pictorial representative of the sets involved in the discussion. Usually sets are represented as interlocking circles, each of which is enclosed in a rectangle, which represents the universal set    In some occasions, we list the elements of set inside the curve representing A.       If then a Venn diagram representation of these two sets looks like the following.       Let         A Venn diagram representation of these sets is given below.            Let    The set of one digits even numbers   The set of positive prime numbers less than 10  We illustrate the sets using a Venn diagram as follows.        Illustrate by a Venn diagram       Illustrate by Venn diagram       Illustrate by using a Venn diagram          Now we illustrate intersections and unions of sets by Venn diagram.        If find       Let and Find                  Suppose The set of one digit numbers and   Describe each of the sets by complete listing method:                                                                       Let Then show that       Perform each of the following operations                            Let       Then find each of the following.         Let    If _______________    If _______________    If _________________         Let Verify each of the following.                                 Depending on question No.9 find.                            For any two subsets of a universal set prove that:                            Draw an appropriate Venn diagram to depict each of the following sets.    The set of high scool students in Addis Ababa.   The set of female high school students in Addis Ababa.   The set of high school anti-AIDS club members students in Addis Ababa.   The set of school Nature Club members students in Addis Ababa.     The set of integers   The set of even integers.   The set of odd integers.   The set of multiples of 3.   The set of prime numbers.         Add review   Add review   "
},
{
  "id": "sec-set-theory-2",
  "level": "2",
  "url": "sec-set-theory.html#sec-set-theory-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "   In this section, we study some part of set theory especially description of sets, Venn diagrams and operations of sets.    Explain the concept of set.  Describe sets in different ways.  Identify operations on sets.  Illustrate sets using Venn diagrams.   "
},
{
  "id": "subsec-the-concept-of-a-set-5",
  "level": "2",
  "url": "sec-set-theory.html#subsec-the-concept-of-a-set-5",
  "type": "Checkpoint",
  "number": "1.4.1",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-the-concept-of-a-set-6",
  "level": "2",
  "url": "sec-set-theory.html#subsec-the-concept-of-a-set-6",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-description-of-sets-5",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-5",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "     The set of counting numbers less than ten.    The set of letters in the word Addis Ababa.     The set of all countries in Africa.      "
},
{
  "id": "subsec-description-of-sets-7",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the rooster\/complete listing "
},
{
  "id": "subsec-description-of-sets-8",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-8",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "     The set of vowels in English alphabet may also be desribed as     The set of positive factors of is also described as       "
},
{
  "id": "subsec-description-of-sets-9",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-9",
  "type": "Remark",
  "number": "1.4.5",
  "title": "",
  "body": "    We agree on the convention that the order of writing the elements in the list is immaterial. As a result the sets contain the same elements, namely     The set contains just two distinct elements; namely hence it is the same set as We list distinct elements without repetition.     "
},
{
  "id": "subsec-description-of-sets-10",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-10",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "     Let Elements of are   Notice that are different objects. Here but     Let The only element of is But     Let Then has four elements.     The readers are invited to write down all the elements of    "
},
{
  "id": "subsec-description-of-sets-13",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-13",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "     The set of all counting numbers in     The set of non-positive integers is     The set of multiples of is     The set of odd integers less than is       "
},
{
  "id": "subsec-description-of-sets-15",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set-builder Method "
},
{
  "id": "subsec-description-of-sets-18",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-18",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": "  The following sets are described using the set-builder method.                                "
},
{
  "id": "subsec-description-of-sets-19",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-19",
  "type": "Checkpoint",
  "number": "1.4.9",
  "title": "",
  "body": "  Express each of the above by using either the complete or the oartial listing method.   "
},
{
  "id": "def-description-of-sets-1",
  "level": "2",
  "url": "sec-set-theory.html#def-description-of-sets-1",
  "type": "Definition",
  "number": "1.4.10",
  "title": "",
  "body": "  The set which has no elements is called the empty (or null) set and is denoted by    "
},
{
  "id": "subsec-description-of-sets-21",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-21",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": "  The set of such that is an empty set.   "
},
{
  "id": "def-description-of-sets-2",
  "level": "2",
  "url": "sec-set-theory.html#def-description-of-sets-2",
  "type": "Definition",
  "number": "1.4.12",
  "title": "",
  "body": "  A set is finite if it has limited number of elements and it is called infinite if it unlimited number of elements.   "
},
{
  "id": "def-description-of-sets-3",
  "level": "2",
  "url": "sec-set-theory.html#def-description-of-sets-3",
  "type": "Definition",
  "number": "1.4.13",
  "title": "",
  "body": "  Set is said to be a subset of set (or contained in ), denoted by every element of is an element of i.e.,   It follows from the definition that set is not a subset of if at least one element of is not an element of i.e., In such cases we write or    "
},
{
  "id": "subsec-description-of-sets-25",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-25",
  "type": "Remark",
  "number": "1.4.14",
  "title": "",
  "body": " For any set and   "
},
{
  "id": "subsec-description-of-sets-26",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-26",
  "type": "Example",
  "number": "1.4.15",
  "title": "",
  "body": "     If then and On the other hand, it is clear that and     If and then since every multiple of is even. However, while Thus     If then and On the other hand, since and       "
},
{
  "id": "def-description-of-sets-4",
  "level": "2",
  "url": "sec-set-theory.html#def-description-of-sets-4",
  "type": "Definition",
  "number": "1.4.16",
  "title": "",
  "body": "     Sets and are said to be equal if they contain exactly the same elements. In this case, we write     Sets and are said to be equivalent if and only if there is a one to one correspondence among their elements. In this case, we write       "
},
{
  "id": "subsec-description-of-sets-28",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-28",
  "type": "Example",
  "number": "1.4.17",
  "title": "",
  "body": "     The sets are all equal.           "
},
{
  "id": "def-description-of-sets-5",
  "level": "2",
  "url": "sec-set-theory.html#def-description-of-sets-5",
  "type": "Definition",
  "number": "1.4.18",
  "title": "",
  "body": "  he set is said to be a proper subset of if every element is also an element in but has at least one element that is not in In this case, we write We also say is a proper set of and write It is clear that    "
},
{
  "id": "subsec-description-of-sets-30",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-30",
  "type": "Remark",
  "number": "1.4.19",
  "title": "",
  "body": " Some authors do not use the symbol Instead they use the symbol for both subset and proper subset. In this material, we prefer to use the notations commonly used in highschool mathematics, and we continue using and differently, namely for subset and proper subset, respectively.  "
},
{
  "id": "def-description-of-sets-6",
  "level": "2",
  "url": "sec-set-theory.html#def-description-of-sets-6",
  "type": "Definition",
  "number": "1.4.20",
  "title": "",
  "body": "  Let be a set. The power set of denoted by is the set whose elements are all subsets of That is,    "
},
{
  "id": "subsec-description-of-sets-32",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-32",
  "type": "Note",
  "number": "1.4.21",
  "title": "",
  "body": " If a set is finite with elements, then   The number of subsets of is and    The number of proper subsets of is      "
},
{
  "id": "subsec-description-of-sets-33",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-33",
  "type": "Example",
  "number": "1.4.22",
  "title": "",
  "body": "  Let As denoted before, and are subset af Moreover, are all subsets of Therefore,    "
},
{
  "id": "subsec-description-of-sets-34",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universal set universe U. "
},
{
  "id": "exercises-description-of-sets-1",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-1",
  "type": "Exercise",
  "number": "1.4.2.1",
  "title": "",
  "body": "  Which of the following are sets?                              "
},
{
  "id": "exercises-description-of-sets-2",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-2",
  "type": "Exercise",
  "number": "1.4.2.2",
  "title": "",
  "body": "  Which of the following sets can be described in complete listing, partial listing and\/or set-builder methods? Describe each set by at least one of the three methods.   The set of the first letters in the English alphabet.    The set of all countries in the world.    The set of students of Addis Ababa University in the 2018\/2019 academic year.    The set of positive multiples of     The set of all horses with six legs.      "
},
{
  "id": "exercises-description-of-sets-3",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-3",
  "type": "Exercise",
  "number": "1.4.2.3",
  "title": "",
  "body": "  Write each of the following sets by listing its elements within braces.                              "
},
{
  "id": "exercises-description-of-sets-4",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-4",
  "type": "Exercise",
  "number": "1.4.2.4",
  "title": "",
  "body": "  Let be the set of positive even integers less than Find the truth value of each of the following.                                                  "
},
{
  "id": "exercises-description-of-sets-5",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-5",
  "type": "Exercise",
  "number": "1.4.2.5",
  "title": "",
  "body": "  Find the truth value of each of the following and verify your conclusion.              for any set      for any set               For any set            "
},
{
  "id": "exercises-description-of-sets-6",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-6",
  "type": "Exercise",
  "number": "1.4.2.6",
  "title": "",
  "body": "  For each of the following set, find its power set.                         "
},
{
  "id": "exercises-description-of-sets-7",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-7",
  "type": "Exercise",
  "number": "1.4.2.7",
  "title": "",
  "body": "  How many subsets and proper subsets do the sets that contain exactly elements have?   "
},
{
  "id": "exercises-description-of-sets-8",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-8",
  "type": "Exercise",
  "number": "1.4.2.8",
  "title": "",
  "body": "  Is there a set with exactly the following indicated property?   Only one subset    Only one proper subset    Exactly 3 proper subsets    Exactly 4 subsets    Exactly 6 proper subse    Exactly 30 subsets    Exactly 14 proper subsets    Exactly 15 proper subsets      "
},
{
  "id": "exercises-description-of-sets-9",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-9",
  "type": "Exercise",
  "number": "1.4.2.9",
  "title": "",
  "body": "  How many elements does contain if it has:    subsets?     proper subsets?    No proper subset?     proper subsets?      "
},
{
  "id": "exercises-description-of-sets-10",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-10",
  "type": "Exercise",
  "number": "1.4.2.10",
  "title": "",
  "body": "  Find the truth value of each of the following.        For any set     For any set     For any set       "
},
{
  "id": "exercises-description-of-sets-11",
  "level": "2",
  "url": "sec-set-theory.html#exercises-description-of-sets-11",
  "type": "Exercise",
  "number": "1.4.2.11",
  "title": "",
  "body": "  For any three sets prove that:   If and then     If and then       "
},
{
  "id": "subsec-description-of-sets-36",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-36",
  "type": "Checkpoint",
  "number": "1.4.23",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-description-of-sets-37",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-37",
  "type": "Checkpoint",
  "number": "1.4.24",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-description-of-sets-38",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-38",
  "type": "Checkpoint",
  "number": "1.4.25",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-description-of-sets-39",
  "level": "2",
  "url": "sec-set-theory.html#subsec-description-of-sets-39",
  "type": "Checkpoint",
  "number": "1.4.26",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-2",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set operations. "
},
{
  "id": "def-set-operations-and-venn-diagrams-1",
  "level": "2",
  "url": "sec-set-theory.html#def-set-operations-and-venn-diagrams-1",
  "type": "Definition",
  "number": "1.4.27",
  "title": "",
  "body": "  The union of two sets and , denoted by , is the set of all elements that are either in or in (or in both sets). That is,    "
},
{
  "id": "definition-set-theory-2",
  "level": "2",
  "url": "sec-set-theory.html#definition-set-theory-2",
  "type": "Definition",
  "number": "1.4.28",
  "title": "",
  "body": "  The union of two sets and , denoted by , is the set of all elements that are in That is,    "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-7",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-7",
  "type": "Note",
  "number": "1.4.29",
  "title": "",
  "body": " Two sets and are said to be disjoint sets if   "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-8",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-8",
  "type": "Example",
  "number": "1.4.30",
  "title": "",
  "body": "     Let Then,       Let The set of positive even integers and The set of positive multiples of 3. Then,                     "
},
{
  "id": "def-set-operations-and-venn-diagrams-3",
  "level": "2",
  "url": "sec-set-theory.html#def-set-operations-and-venn-diagrams-3",
  "type": "Definition",
  "number": "1.4.31",
  "title": "",
  "body": "  The difference between two sets denoted by is all the elements in and not in this set is also called the relative complement of with respect to Symbolically,    "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-10",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-10",
  "type": "Note",
  "number": "1.4.32",
  "title": "",
  "body": "  is sometimes denoted by  are used interchangeably.  "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-11",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-11",
  "type": "Example",
  "number": "1.4.33",
  "title": "",
  "body": "  If then and    "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-12",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-12",
  "type": "Note",
  "number": "1.4.34",
  "title": "",
  "body": " The above example shows that, in general, are disjoint.  "
},
{
  "id": "def-set-operations-and-venn-diagrams-4",
  "level": "2",
  "url": "sec-set-theory.html#def-set-operations-and-venn-diagrams-4",
  "type": "Definition",
  "number": "1.4.35",
  "title": "",
  "body": "  Let be a subset of a universal set The absolute complement (or simply complement ) of denoted by is defined to be the set of all elements of that are not in That is,    "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-15",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-15",
  "type": "Example",
  "number": "1.4.36",
  "title": "",
  "body": "     If and if then         and     Then,            Let Then            "
},
{
  "id": "thm-set-operations-and-venn-diagrams-1-1",
  "level": "2",
  "url": "sec-set-theory.html#thm-set-operations-and-venn-diagrams-1-1",
  "type": "Theorem",
  "number": "1.4.37",
  "title": "",
  "body": "  For any two sets and each of the following holds.                                   "
},
{
  "id": "def-set-operations-and-venn-diagrams-5",
  "level": "2",
  "url": "sec-set-theory.html#def-set-operations-and-venn-diagrams-5",
  "type": "Definition",
  "number": "1.4.38",
  "title": "",
  "body": "  The symmetric difference of two sets denoted by is the set    "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-20",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-20",
  "type": "Example",
  "number": "1.4.39",
  "title": "",
  "body": "  Let be the universal set, and Then and Thus    "
},
{
  "id": "theorem-set-theory-1",
  "level": "2",
  "url": "sec-set-theory.html#theorem-set-theory-1",
  "type": "Theorem",
  "number": "1.4.40",
  "title": "",
  "body": "  For any three sets, each of the following holds.    a.     b.     c.     d.     e.     f.      "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-27",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Venn diagrams "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-30",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-30",
  "type": "Example",
  "number": "1.4.41",
  "title": "",
  "body": "     If then a Venn diagram representation of these two sets looks like the following.       Let         A Venn diagram representation of these sets is given below.         "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-31",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-31",
  "type": "Example",
  "number": "1.4.42",
  "title": "",
  "body": "  Let    The set of one digits even numbers   The set of positive prime numbers less than 10  We illustrate the sets using a Venn diagram as follows.        Illustrate by a Venn diagram       Illustrate by Venn diagram       Illustrate by using a Venn diagram         "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-1",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-1",
  "type": "Exercise",
  "number": "1.4.3.1",
  "title": "",
  "body": "  If find    "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-2",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-2",
  "type": "Exercise",
  "number": "1.4.3.2",
  "title": "",
  "body": "  Let and Find               "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-3",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-3",
  "type": "Exercise",
  "number": "1.4.3.3",
  "title": "",
  "body": "  Suppose The set of one digit numbers and   Describe each of the sets by complete listing method:                                        "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-4",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-4",
  "type": "Exercise",
  "number": "1.4.3.4",
  "title": "",
  "body": "                           "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-5",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-5",
  "type": "Exercise",
  "number": "1.4.3.5",
  "title": "",
  "body": "  Let Then show that    "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-6",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-6",
  "type": "Exercise",
  "number": "1.4.3.6",
  "title": "",
  "body": "  Perform each of the following operations                         "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-7",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-7",
  "type": "Exercise",
  "number": "1.4.3.7",
  "title": "",
  "body": "  Let       Then find each of the following.      "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-8",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-8",
  "type": "Exercise",
  "number": "1.4.3.8",
  "title": "",
  "body": "  Let    If _______________    If _______________    If _________________      "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-9",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-9",
  "type": "Exercise",
  "number": "1.4.3.9",
  "title": "",
  "body": "  Let Verify each of the following.                              "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-10",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-10",
  "type": "Exercise",
  "number": "1.4.3.10",
  "title": "",
  "body": "  Depending on question No.9 find.                         "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-11",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-11",
  "type": "Exercise",
  "number": "1.4.3.11",
  "title": "",
  "body": "  For any two subsets of a universal set prove that:                         "
},
{
  "id": "exercises-set-operations-and-venn-diagrams-12",
  "level": "2",
  "url": "sec-set-theory.html#exercises-set-operations-and-venn-diagrams-12",
  "type": "Exercise",
  "number": "1.4.3.12",
  "title": "",
  "body": "  Draw an appropriate Venn diagram to depict each of the following sets.    The set of high scool students in Addis Ababa.   The set of female high school students in Addis Ababa.   The set of high school anti-AIDS club members students in Addis Ababa.   The set of school Nature Club members students in Addis Ababa.     The set of integers   The set of even integers.   The set of odd integers.   The set of multiples of 3.   The set of prime numbers.      "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-35",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-35",
  "type": "Checkpoint",
  "number": "1.4.43",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-set-operations-and-venn-diagrams-36",
  "level": "2",
  "url": "sec-set-theory.html#subsec-set-operations-and-venn-diagrams-36",
  "type": "Checkpoint",
  "number": "1.4.44",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-the-real-number-system",
  "level": "1",
  "url": "sec-the-real-number-system.html",
  "type": "Section",
  "number": "2.1",
  "title": "The real number System",
  "body": " The real number System       The set of natural numbers   The history of numbers indicated that the first set of numbers used by the ancient human beings for counting purpose was the set of natural (counting) numbers.    The set of natural numbers is denoted by and is described as       Operations on the set of natural numbers   i) Addition (+)  If two natural numbers & are added using the operation “+”, then the sum is also a natural number. If the sum of the two natural numbers & is denoted by , then we can write the operation as: , where is called the sum and & are called terms.     , here is the sum whereas & are terms.      ii) Multiplication  If two natural numbers & are multiplied using the operation “ ”, then the product is also a natural number. If the product of the two natural numbers & is denoted by , then we can write the operation as: , where is called the product and & are called factors.     , here is the product whereas & are factors.      Properties of addition and multiplication on the set of natural numbers  i. For any two natural numbers & , the sum is also a natural number. For instance in the above example, and are natural numbers, their sum is also a natural number. In general, we say that the set of natural numbers is closed under addition.  ii. For any two natural numbers & , .     . In general, we say that addition is commutative on the set of natural numbers.    iii. For any three natural numbers , & , .     . In general, we say that addition is associative on the set of natural numbers.    iv. For any two natural numbers & , the product is also a natural number. For instance in the above example, and are natural numbers, their product is also a natural number. In general, we say that the set of natural numbers is closed under multiplication.  v. For any two natural numbers & , .     In general, we say that multiplication is commutative on the set of natural numbers.    vi. For any three natural numbers , & , .     . In general, we say that multiplication is associative on the set of natural numbers.    vii. For any natural number , it holds that .     In general, we say that multiplication has an identity element on the set of natural numbers and is the identity element.    For any three natural numbers , & , .     . In general, we say that multiplication is distributive over addition on the set of natural numbers.      Consider two numbers and , we say is greater than denoted by > if is positive.     Order Relation in       Transitive property :  For any three natural numbers , & ,      Addition property :  For any three natural numbers , & ,      Multiplication property :  For any three natural numbers , and ,      Law of trichotomy   For any two natural numbers & we have .       Factors of a number    If such that , then & are factors (divisors) of and is called product (multiple) of & .      Find the factors of .    Factors of are .       A number is said to be    Even if it is divisible by .     Odd if it is not divisible by .     Prime if it has only two factors ( and itself).     Composite : if it has three or more factors.          are even numbers       are odd numbers       are prime numbers       are composite numbers      is neither prime nor composite.     Prime Factorization    Prime factorization of a composite number is the product of all its prime factors.                                        Fundamental Theorem of Arithmetic:     Every composite number can be expressed as a product of its prime factors. This factorization is unique except the order of the factors.       Greatest Common Factor (GCF)    The greatest common factor (GCF) of two numbers & is denoted by GCF ( , ) and is the greatest number which is a factor of each of the given number.     Note: If the GCF of two numbers is , then the numbers are called relatively prime.     Consider the two numbers and .    Now and   Next from which is greatest  Therefore, GCF .  This method of finding the GCF of two or more numbers is usually lengthy and time consuming. Hence an alternative method (Prime factorization method) is provided as below:  Step 1: Find the prime factorization of each of the natural numbers  Step 2: Form the GCF of the given numbers as the product of every factor that appears in each of the prime factorization but take the least number of times it appears.      Consider the two numbers and .    Step 1:   Step 2: The factors that appear in both cases are and , but take the numbers with the least number of times.         Consider the three numbers and .    Step 1:   Step 2: The factors that appear in all cases are and , but take the numbers with the least number of times.         Least Common Multiple (LCM)    The least common multiple (LCM) of two numbers & is denoted by LCM ( , ) and is the least number which is a multiple of each of the given number.      Consider the two numbers and .    Now, and   Next, from which is least   Therefore, LCM .  This method of finding the LCM of two or more numbers is usually lengthy and time consuming. Hence an alternative method (Prime factorization method) is provided as below:  Step 1: Find the prime factorization of each of the natural numbers  Step 2: Form the LCM of the given numbers as the product of every factor that appears in any of the prime factorization but take the highest number of times it appears.      Consider the two numbers and .    Step 1:   Step 2: The factors that appear in any case are and , but take the numbers with the highest number of times.         Consider the three numbers and .    Step 1:   Step 2: The factors that appear in any cases are and , but take the numbers with the highest number of times.         Well ordering Principle in the set of natural numbers    Every non-empty subset of the set of natural numbers has smallest (least) element.            The set of counting numbers including zero is called the set of whole numbers and is denoted by W . i.e      Principle of Mathematical Induction  Mathematical induction is one of the most important techniques used to prove in mathematics. It is used to check conjectures about the outcome of processes that occur repeatedly according to definite patterns. We will introduce the technique with examples.      For a given assertion involving a natural number , if   the assertion is true for (usually).    it is true for , whenever it is true for ( ), then the assertion is true for every natural number .        The method is used to prove different propositions involving positive integers using three steps:  Step1: Prove that (usually ) holds true.  Step 2: Assume that for is true.  Step 3: Show that is true for .    Show that .     Step1. For which is true.  Step2. Assume that it is true for    i.e   Step3. We should show that it is true for    Claim:       It is true for any natural number        Show that        Step1. For which is true.  Step2. Assume that it is true for    i.e.   Step3. We should show that it is true for    Claim:        It is true for any natural number .       Show that      Step1. For , which is true  Step2. Assume that it is true for .  i.e. .  Step3. We should show that it is true for   Claim: .  Now                It is true for any natural number .       Add review   Add review   Add review    The set of Integers   As the knowledge and interest of human beings increased, it was important and obligatory to extend the natural number system. For instance to solve the equation , the set of natural numbers was not sufficient. Hence the set of integers was developed to satisfy such extended demands.    The set of integers is denoted by Z and described as       Operations on the set of integers   i) Addition  If two integers & are added using the operation , then the sum is also an integer. If the sum of the two integers & is denoted by , then we can write the operation as: , where is called the sum and & are called terms.     , here is the sum whereas & are terms.      ii) Subtraction  For any two integers & , the operation of subtracting from , denoted by is defined by . This means that subtracting from is equivalent to adding the additive inverse of to .           iii) Multiplication ( )  If two integers & are multiplied using the operation “ ”, then the product is also an integer. If the product of the two integers & is denoted by , then we can write the operation as: , where is called the product and & are called factors.     , here is the product whereas & are factors.      Properties of addition and multiplication on the set of integers  i) For any two integers & , the sum is also an integer. For instance in the above example, and are integers, their sum is also an integer. In general, we say that the set of integers is closed under addition.  ii) For any two integers & , .     . In general, we say that addition is commutative on the set of integers.    iii) For any three integers , & , .     . In general, we say that addition is associative on the set of integers.    iv) For any integer , it holds that .     . In general, we say that addition has an identity element on the set of integers and is the identity element.    v) For any integer , it holds that .     . In general, we say that every integer has an additive inverse denoted by .    vi) For any two integers & , the product is also an integer. For instance in the above example, and are integers, their product is also an integer. In general, we say that the set of integers is closed under multiplication.  vii) For any two integers & , .     . In general, we say that multiplication is commutative on the set of integers.    viii) For any three integers , & , .     . In general, we say that multiplication is associative on the set of integers.    ix) For any integer , it holds that .     . In general, we say that multiplication has an identity element on the set of integers and is the identity element.    x) For any three integers , & , .     . In general, we say that multiplication is distributive over addition on the set of integers.       Order Relation in Z      Transitive property: For any three integers , & , &      Addition property : For any three integers , & ,      Multiplication property : For any three integers , and , where > ,      Law of trichotomy : For any two integers & we have .        Find an odd natural number such that LCM .      There are between and number of eggs in a basket. When Loza counts by 3’s, there are eggs left over. When she counts by 5’s, there are left over. How many eggs are there in the basket?      The GCF of two numbers is and their LCM is . If one of the numbers is , then find the second number.      Using Mathematical Induction, prove the following:      is divisible by , for .     for      is divisible by for odd natural number                               Add review   Add review    The set of rational numbers   As the knowledge and interest of human beings increased with time, it was again necessary to extend the set of integers. For instance to solve the equation , the set of integers was not sufficient. Hence the set of rational numbers was developed to satisfy such extended needs.    Any number that can be expressed in the form , where and are integers and , is called a rational number. The set of rational numbers denoted by is described by       Notes:   From the expression  is called numerator and is called denominator.    A rational number is said to be in lowest form if GCF .       Operations on the set of rational numbers   i) Addition  If two rational numbers and are added using the operation “+”, then the sum defined as is also a rational number.           ii) Subtraction  For any two rational numbers & , the operation of subtracting from , denoted by is defined by .           iii) Multiplication  If two rational numbers and are multiplied using the operation , then the product defined as is also a rational number.           iv) Division  For any two rational numbers & , dividing by is defined by              Properties of addition and multiplication on the set of rational numbers  Let , and be three rational numbers, then     The set of rational numbers is closed under addition and multiplication.    Addition and multiplication are both commutative on the set of rational numbers.    Addition and multiplication are both associative on the set of rational numbers.     is the additive identity  i.e., .    Every rational number has an additive inverse.  i.e., .     is the multiplicative identity  i.e., .    Every non-zero rational number has a multiplicative inverse.  i.e., .        Order Relation in Q        For any three rational numbers , &         For any three rational numbers , &  .       For any three rational numbers , , and .       For any two rational numbers & we have .       Decimal representation of rational numbers  A rational number can be written in decimal form using long division.   Terminating decimals    Express the fraction number in decimal form.           Non-terminating periodic decimals    Express the fraction number in decimal form.          Now we will see how to convert decimal numbers in to their fraction forms. In earlier mathematics topics, we have seen that multiplying a decimal by pushes the decimal point to the right by one position and in general, multiplying a decimal by pushes the decimal point to the right by positions. We will use this fact for the succeeding topics.    Fraction form of decimal numbers  A rational number which is written in decimal form can be converted to a fraction form as in lowest (simplified) form, where and are relatively prime.   Terminating decimals  Consider any terminating decimal number . Suppose terminates digits after the decimal point. can be converted to its fraction form as below:   .    Convert the terminating decimal to fraction form.     .      Non-terminating periodic decimals  Consider any non-terminating periodic decimal number . Suppose has non-terminating digits and terminating digits after the decimal point. can be converted to its fraction form as below:       Convert the non-terminating periodic decimal to fraction form.    Solution: .         From the above two cases, we can conclude that both terminating decimals and non-terminating periodic decimals are rational numbers. (Why? Justify).      Non-terminating and non-periodic decimals  Some decimal numbers are neither terminating nor non-terminating periodic. Such types of numbers are called irrational numbers.           Show that is an irrational number.           From (**) and (***) we get a contradiction that GCF ( , ) which implies that is not a rational number.  Therefore, is an irrational number.       Add review   Add review    The set of real numbers     A number is called a real number if and only if it is either a rational number or an irrational number.  The set of real numbers denoted by can be described as the union of the set of rational and irrational numbers. i.e { is a rational number or an irrational number}.    There is a correspondence between the set of real numbers and the number line (For each point in the number line, there is a corresponding real number and vice-versa).    Operations on the set of real numbers     i) Addition ( )  If two real numbers are added using the operation , then the sum is also a real number.    ii) Subtraction ( )  For any two real numbers & , the operation of subtracting from , denoted by is defined by .    iii) Multiplication ( )  If two real numbers and are multiplied using the operation , then the product defined as is also a real number.    iv) Division ( )  For any two real numbers & , dividing by is defined by .    Properties of addition and multiplication on the set of real numbers  Let , and be three real numbers, then     The set of real numbers is closed under addition and multiplication.    Addition and multiplication are commutative on the set of real numbers.    Addition and multiplication are associative on the set of real numbers.     is the additive identity.  i.e., .    Every real number has an additive inverse.  i.e.,      is the multiplicative identity.   .    Every non-zero real number has a multiplicative inverse.           The real number and the number line  One of the most important properties of the real number is that it can be represented graphically by points on a straight line. The point is termed as the origin. Points to the right of are called positive real numbers and points to the left of are called negative real numbers. Each point on the number line corresponds a unique real number and vice-versa.      Geometrically we say is greater than if is located to the right of on the number line.    Order Relation in R      Transitive property: For any three real numbers , & , & .     Addition property: For any three real numbers , & , .     Multiplication property: For any three real numbers , , and , we have .     Law of trichotomy: For any two real numbers & we have .      Summary of the real number system        Intervals  Let and be two real numbers such that , then the intervals which are subsets of R with end points and are denoted and defined as below:      open interval from to .     closed interval from to .     open-closed interval from to .     closed-open interval from to .       Upper bounds and lower bounds    Let be non - empty and .     A point is said to be an upper bound of iff for all .    An upper bound of is said to be least upper bound (lub) iff it is the least of all upper bounds.    A point is said to be lower bound of iff for all .    A lower bound of is said to be greatest lower bound (glb) iff it is the greatest of all lower bounds.         Consider the set .       lower bounds are   Here the greatest element is .   glb     upper bonds are   Here the least element is .   lub .         Consider the set for .          lower bounds are   Here the greatest element is . Thus, glb     upper bounds are   Here the least element is . Thus, lub .     Based on the above definitions, we can define the completeness property of real numbers as below.      Completeness property of real number (R)  Completeness property of real numbers states that: Every non-empty subset of that has lower bounds has glb and every non-empty subset of that has upper bounds has a lub.     Express each of the following rational numbers as decimal:                                   Write each of the following as decimal and then as a fraction:     three tenths    four thousands         Write each of the following in meters as a fraction and then as a decimal      mm     cm and mm     cm and mm         Classify each of the following as terminating or non-terminating periodic                                   Convert the following decimals to fractions:                         Determine whether the following are rational or irrational:                         Which of the following statements are true and which of them are false?     The sum of any two rational numbers is rational    The sum of any two irrational numbers is irrational    The product of any two rational numbers is rational    The product of any two irrational numbers is irrational         Find two rational numbers between .       Add review   Add review   Add review   Add review   "
},
{
  "id": "def-natural-numbers",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-natural-numbers",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  The set of natural numbers is denoted by and is described as    "
},
{
  "id": "subsubsec-operations-on-the-set-of-natural-numbers-2-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-natural-numbers-2-3",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "   , here is the sum whereas & are terms.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-natural-numbers-3-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-natural-numbers-3-3",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "   , here is the product whereas & are factors.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-natural-numbers-4-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-natural-numbers-4-4",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "   . In general, we say that addition is commutative on the set of natural numbers.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-natural-numbers-4-6",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-natural-numbers-4-6",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "   . In general, we say that addition is associative on the set of natural numbers.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-natural-numbers-4-9",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-natural-numbers-4-9",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "   In general, we say that multiplication is commutative on the set of natural numbers.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-natural-numbers-4-11",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-natural-numbers-4-11",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "   . In general, we say that multiplication is associative on the set of natural numbers.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-natural-numbers-4-13",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-natural-numbers-4-13",
  "type": "Example",
  "number": "2.1.8",
  "title": "",
  "body": "   In general, we say that multiplication has an identity element on the set of natural numbers and is the identity element.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-natural-numbers-4-15",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-natural-numbers-4-15",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": "   . In general, we say that multiplication is distributive over addition on the set of natural numbers.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-natural-numbers-5",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-natural-numbers-5",
  "type": "Note",
  "number": "2.1.10",
  "title": "",
  "body": " Consider two numbers and , we say is greater than denoted by > if is positive.  "
},
{
  "id": "def-factors-of-a-number",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-factors-of-a-number",
  "type": "Definition",
  "number": "2.1.11",
  "title": "",
  "body": "  If such that , then & are factors (divisors) of and is called product (multiple) of & .   "
},
{
  "id": "subsubsec-factors-of-a-number-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-factors-of-a-number-3",
  "type": "Example",
  "number": "2.1.12",
  "title": "",
  "body": "  Find the factors of .    Factors of are .    "
},
{
  "id": "def-a",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-a",
  "type": "Definition",
  "number": "2.1.13",
  "title": "",
  "body": "  A number is said to be    Even if it is divisible by .     Odd if it is not divisible by .     Prime if it has only two factors ( and itself).     Composite : if it has three or more factors.      "
},
{
  "id": "subsubsec-factors-of-a-number-5",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-factors-of-a-number-5",
  "type": "Example",
  "number": "2.1.14",
  "title": "",
  "body": "   are even numbers   "
},
{
  "id": "subsubsec-factors-of-a-number-6",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-factors-of-a-number-6",
  "type": "Example",
  "number": "2.1.15",
  "title": "",
  "body": "   are odd numbers   "
},
{
  "id": "subsubsec-factors-of-a-number-7",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-factors-of-a-number-7",
  "type": "Example",
  "number": "2.1.16",
  "title": "",
  "body": "   are prime numbers   "
},
{
  "id": "subsubsec-factors-of-a-number-8",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-factors-of-a-number-8",
  "type": "Example",
  "number": "2.1.17",
  "title": "",
  "body": "   are composite numbers   "
},
{
  "id": "subsubsec-factors-of-a-number-9",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-factors-of-a-number-9",
  "type": "Remark",
  "number": "2.1.18",
  "title": "",
  "body": "  is neither prime nor composite.  "
},
{
  "id": "def-prime-factorization",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-prime-factorization",
  "type": "Definition",
  "number": "2.1.19",
  "title": "",
  "body": "  Prime factorization of a composite number is the product of all its prime factors.   "
},
{
  "id": "subsubsec-prime-factorization-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-prime-factorization-3",
  "type": "Example",
  "number": "2.1.20",
  "title": "",
  "body": "                                "
},
{
  "id": "def-gcd",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-gcd",
  "type": "Definition",
  "number": "2.1.21",
  "title": "",
  "body": "  The greatest common factor (GCF) of two numbers & is denoted by GCF ( , ) and is the greatest number which is a factor of each of the given number.   "
},
{
  "id": "subsubsec-greatest-common-factor-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-greatest-common-factor-3",
  "type": "Note",
  "number": "2.1.22",
  "title": "",
  "body": " Note: If the GCF of two numbers is , then the numbers are called relatively prime.  "
},
{
  "id": "subsubsec-greatest-common-factor-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-greatest-common-factor-4",
  "type": "Example",
  "number": "2.1.23",
  "title": "",
  "body": "  Consider the two numbers and .    Now and   Next from which is greatest  Therefore, GCF .  This method of finding the GCF of two or more numbers is usually lengthy and time consuming. Hence an alternative method (Prime factorization method) is provided as below:  Step 1: Find the prime factorization of each of the natural numbers  Step 2: Form the GCF of the given numbers as the product of every factor that appears in each of the prime factorization but take the least number of times it appears.   "
},
{
  "id": "subsubsec-greatest-common-factor-5",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-greatest-common-factor-5",
  "type": "Example",
  "number": "2.1.24",
  "title": "",
  "body": "  Consider the two numbers and .    Step 1:   Step 2: The factors that appear in both cases are and , but take the numbers with the least number of times.      "
},
{
  "id": "subsubsec-greatest-common-factor-6",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-greatest-common-factor-6",
  "type": "Example",
  "number": "2.1.25",
  "title": "",
  "body": "  Consider the three numbers and .    Step 1:   Step 2: The factors that appear in all cases are and , but take the numbers with the least number of times.      "
},
{
  "id": "def-lcm",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-lcm",
  "type": "Definition",
  "number": "2.1.26",
  "title": "",
  "body": "  The least common multiple (LCM) of two numbers & is denoted by LCM ( , ) and is the least number which is a multiple of each of the given number.   "
},
{
  "id": "subsubsec-lcm-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-lcm-3",
  "type": "Example",
  "number": "2.1.27",
  "title": "",
  "body": "  Consider the two numbers and .    Now, and   Next, from which is least   Therefore, LCM .  This method of finding the LCM of two or more numbers is usually lengthy and time consuming. Hence an alternative method (Prime factorization method) is provided as below:  Step 1: Find the prime factorization of each of the natural numbers  Step 2: Form the LCM of the given numbers as the product of every factor that appears in any of the prime factorization but take the highest number of times it appears.   "
},
{
  "id": "subsubsec-lcm-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-lcm-4",
  "type": "Example",
  "number": "2.1.28",
  "title": "",
  "body": "  Consider the two numbers and .    Step 1:   Step 2: The factors that appear in any case are and , but take the numbers with the highest number of times.      "
},
{
  "id": "subsubsec-lcm-5",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-lcm-5",
  "type": "Example",
  "number": "2.1.29",
  "title": "",
  "body": "  Consider the three numbers and .    Step 1:   Step 2: The factors that appear in any cases are and , but take the numbers with the highest number of times.      "
},
{
  "id": "prop-non-empty-set",
  "level": "2",
  "url": "sec-the-real-number-system.html#prop-non-empty-set",
  "type": "Proposition",
  "number": "2.1.30",
  "title": "",
  "body": "  Every non-empty subset of the set of natural numbers has smallest (least) element.   "
},
{
  "id": "subsubsec-well-ordering-principle-in-the-set-of-natural-numbers-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-well-ordering-principle-in-the-set-of-natural-numbers-3",
  "type": "Example",
  "number": "2.1.31",
  "title": "",
  "body": "      "
},
{
  "id": "subsubsec-well-ordering-principle-in-the-set-of-natural-numbers-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-well-ordering-principle-in-the-set-of-natural-numbers-4",
  "type": "Note",
  "number": "2.1.32",
  "title": "",
  "body": " The set of counting numbers including zero is called the set of whole numbers and is denoted by W . i.e   "
},
{
  "id": "subsubsec-principle-of-mathematical-induction-8",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-principle-of-mathematical-induction-8",
  "type": "Example",
  "number": "2.1.33",
  "title": "",
  "body": "  Show that .     Step1. For which is true.  Step2. Assume that it is true for    i.e   Step3. We should show that it is true for    Claim:       It is true for any natural number     "
},
{
  "id": "subsubsec-principle-of-mathematical-induction-9",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-principle-of-mathematical-induction-9",
  "type": "Example",
  "number": "2.1.34",
  "title": "",
  "body": "  Show that        Step1. For which is true.  Step2. Assume that it is true for    i.e.   Step3. We should show that it is true for    Claim:        It is true for any natural number .    "
},
{
  "id": "subsubsec-principle-of-mathematical-induction-10",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-principle-of-mathematical-induction-10",
  "type": "Example",
  "number": "2.1.35",
  "title": "",
  "body": "  Show that      Step1. For , which is true  Step2. Assume that it is true for .  i.e. .  Step3. We should show that it is true for   Claim: .  Now                It is true for any natural number .    "
},
{
  "id": "subsec-the-set-of-natural-numbers-11",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-natural-numbers-11",
  "type": "Checkpoint",
  "number": "2.1.36",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-the-set-of-natural-numbers-12",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-natural-numbers-12",
  "type": "Checkpoint",
  "number": "2.1.37",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-the-set-of-natural-numbers-13",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-natural-numbers-13",
  "type": "Checkpoint",
  "number": "2.1.38",
  "title": "",
  "body": " Add review "
},
{
  "id": "def-set-of-integers",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-set-of-integers",
  "type": "Definition",
  "number": "2.1.39",
  "title": "",
  "body": "  The set of integers is denoted by Z and described as    "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-2-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-2-3",
  "type": "Example",
  "number": "2.1.40",
  "title": "",
  "body": "   , here is the sum whereas & are terms.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-3-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-3-3",
  "type": "Example",
  "number": "2.1.41",
  "title": "",
  "body": "      "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-4-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-4-3",
  "type": "Example",
  "number": "2.1.42",
  "title": "",
  "body": "   , here is the product whereas & are factors.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-5-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-5-4",
  "type": "Example",
  "number": "2.1.43",
  "title": "",
  "body": "   . In general, we say that addition is commutative on the set of integers.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-5-6",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-5-6",
  "type": "Example",
  "number": "2.1.44",
  "title": "",
  "body": "   . In general, we say that addition is associative on the set of integers.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-5-8",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-5-8",
  "type": "Example",
  "number": "2.1.45",
  "title": "",
  "body": "   . In general, we say that addition has an identity element on the set of integers and is the identity element.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-5-10",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-5-10",
  "type": "Example",
  "number": "2.1.46",
  "title": "",
  "body": "   . In general, we say that every integer has an additive inverse denoted by .   "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-5-13",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-5-13",
  "type": "Example",
  "number": "2.1.47",
  "title": "",
  "body": "   . In general, we say that multiplication is commutative on the set of integers.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-5-15",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-5-15",
  "type": "Example",
  "number": "2.1.48",
  "title": "",
  "body": "   . In general, we say that multiplication is associative on the set of integers.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-5-17",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-5-17",
  "type": "Example",
  "number": "2.1.49",
  "title": "",
  "body": "   . In general, we say that multiplication has an identity element on the set of integers and is the identity element.   "
},
{
  "id": "subsubsec-operations-on-the-set-of-integers-5-19",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-integers-5-19",
  "type": "Example",
  "number": "2.1.50",
  "title": "",
  "body": "   . In general, we say that multiplication is distributive over addition on the set of integers.   "
},
{
  "id": "exercises-sets-of-integers-1",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-sets-of-integers-1",
  "type": "Exercise",
  "number": "2.1.2.2.1",
  "title": "",
  "body": "  Find an odd natural number such that LCM .   "
},
{
  "id": "exercises-sets-of-integers-2",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-sets-of-integers-2",
  "type": "Exercise",
  "number": "2.1.2.2.2",
  "title": "",
  "body": "  There are between and number of eggs in a basket. When Loza counts by 3’s, there are eggs left over. When she counts by 5’s, there are left over. How many eggs are there in the basket?   "
},
{
  "id": "exercises-sets-of-integers-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-sets-of-integers-3",
  "type": "Exercise",
  "number": "2.1.2.2.3",
  "title": "",
  "body": "  The GCF of two numbers is and their LCM is . If one of the numbers is , then find the second number.   "
},
{
  "id": "exercises-sets-of-integers-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-sets-of-integers-4",
  "type": "Exercise",
  "number": "2.1.2.2.4",
  "title": "",
  "body": "  Using Mathematical Induction, prove the following:      is divisible by , for .     for      is divisible by for odd natural number                           "
},
{
  "id": "subsec-the-set-of-integers-5",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-integers-5",
  "type": "Checkpoint",
  "number": "2.1.51",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-the-set-of-integers-6",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-integers-6",
  "type": "Checkpoint",
  "number": "2.1.52",
  "title": "",
  "body": " Add review "
},
{
  "id": "def-rational-number",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-rational-number",
  "type": "Definition",
  "number": "2.1.53",
  "title": "",
  "body": "  Any number that can be expressed in the form , where and are integers and , is called a rational number. The set of rational numbers denoted by is described by      "
},
{
  "id": "subsubsec-operations-on-the-set-of-rational-numbers-2-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-rational-numbers-2-3",
  "type": "Example",
  "number": "2.1.54",
  "title": "",
  "body": "      "
},
{
  "id": "subsubsec-operations-on-the-set-of-rational-numbers-3-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-rational-numbers-3-3",
  "type": "Example",
  "number": "2.1.55",
  "title": "",
  "body": "      "
},
{
  "id": "subsubsec-operations-on-the-set-of-rational-numbers-4-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-rational-numbers-4-3",
  "type": "Example",
  "number": "2.1.56",
  "title": "",
  "body": "      "
},
{
  "id": "subsubsec-operations-on-the-set-of-rational-numbers-5-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-operations-on-the-set-of-rational-numbers-5-4",
  "type": "Example",
  "number": "2.1.57",
  "title": "",
  "body": "      "
},
{
  "id": "subsubsec-decimal-representation-of-rational-numbers-3-2",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-decimal-representation-of-rational-numbers-3-2",
  "type": "Example",
  "number": "2.1.58",
  "title": "",
  "body": "  Express the fraction number in decimal form.        "
},
{
  "id": "subsubsec-decimal-representation-of-rational-numbers-4-2",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-decimal-representation-of-rational-numbers-4-2",
  "type": "Example",
  "number": "2.1.59",
  "title": "",
  "body": "  Express the fraction number in decimal form.        "
},
{
  "id": "subsubsec-fraction-form-of-decimal-numbers-3-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-fraction-form-of-decimal-numbers-3-4",
  "type": "Example",
  "number": "2.1.60",
  "title": "",
  "body": "  Convert the terminating decimal to fraction form.     .   "
},
{
  "id": "subsubsec-fraction-form-of-decimal-numbers-4-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-fraction-form-of-decimal-numbers-4-4",
  "type": "Example",
  "number": "2.1.61",
  "title": "",
  "body": "  Convert the non-terminating periodic decimal to fraction form.    Solution: .       "
},
{
  "id": "subsubsec-fraction-form-of-decimal-numbers-4-5",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-fraction-form-of-decimal-numbers-4-5",
  "type": "Note",
  "number": "2.1.62",
  "title": "",
  "body": " From the above two cases, we can conclude that both terminating decimals and non-terminating periodic decimals are rational numbers. (Why? Justify).  "
},
{
  "id": "subsubsec-non-terminating-and-non-periodic-decimals-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-non-terminating-and-non-periodic-decimals-3",
  "type": "Example",
  "number": "2.1.63",
  "title": "",
  "body": "      "
},
{
  "id": "subsubsec-non-terminating-and-non-periodic-decimals-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-non-terminating-and-non-periodic-decimals-4",
  "type": "Example",
  "number": "2.1.64",
  "title": "",
  "body": "  Show that is an irrational number.           From (**) and (***) we get a contradiction that GCF ( , ) which implies that is not a rational number.  Therefore, is an irrational number.    "
},
{
  "id": "subsec-the-set-of-rational-numbers-8",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-rational-numbers-8",
  "type": "Checkpoint",
  "number": "2.1.65",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-the-set-of-rational-numbers-9",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-rational-numbers-9",
  "type": "Checkpoint",
  "number": "2.1.66",
  "title": "",
  "body": " Add review "
},
{
  "id": "def-set-of-real-numbers",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-set-of-real-numbers",
  "type": "Definition",
  "number": "2.1.67",
  "title": "",
  "body": "  A number is called a real number if and only if it is either a rational number or an irrational number.  The set of real numbers denoted by can be described as the union of the set of rational and irrational numbers. i.e { is a rational number or an irrational number}.   "
},
{
  "id": "def-upper-bounds-lower-bounds",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-upper-bounds-lower-bounds",
  "type": "Definition",
  "number": "2.1.68",
  "title": "",
  "body": "  Let be non - empty and .     A point is said to be an upper bound of iff for all .    An upper bound of is said to be least upper bound (lub) iff it is the least of all upper bounds.    A point is said to be lower bound of iff for all .    A lower bound of is said to be greatest lower bound (glb) iff it is the greatest of all lower bounds.      "
},
{
  "id": "subsubsec-upper-bounds-and-lower-bounds-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-upper-bounds-and-lower-bounds-3",
  "type": "Example",
  "number": "2.1.69",
  "title": "",
  "body": "  Consider the set .       lower bounds are   Here the greatest element is .   glb     upper bonds are   Here the least element is .   lub .      "
},
{
  "id": "subsubsec-upper-bounds-and-lower-bounds-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsubsec-upper-bounds-and-lower-bounds-4",
  "type": "Example",
  "number": "2.1.70",
  "title": "",
  "body": "  Consider the set for .          lower bounds are   Here the greatest element is . Thus, glb     upper bounds are   Here the least element is . Thus, lub .     Based on the above definitions, we can define the completeness property of real numbers as below.   "
},
{
  "id": "exercises-real-number-1",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-real-number-1",
  "type": "Exercise",
  "number": "2.1.4.6.1",
  "title": "",
  "body": "  Express each of the following rational numbers as decimal:                                "
},
{
  "id": "exercises-real-number-2",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-real-number-2",
  "type": "Exercise",
  "number": "2.1.4.6.2",
  "title": "",
  "body": "  Write each of the following as decimal and then as a fraction:     three tenths    four thousands      "
},
{
  "id": "exercises-real-number-3",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-real-number-3",
  "type": "Exercise",
  "number": "2.1.4.6.3",
  "title": "",
  "body": "  Write each of the following in meters as a fraction and then as a decimal      mm     cm and mm     cm and mm      "
},
{
  "id": "exercises-real-number-4",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-real-number-4",
  "type": "Exercise",
  "number": "2.1.4.6.4",
  "title": "",
  "body": "  Classify each of the following as terminating or non-terminating periodic                                "
},
{
  "id": "exercises-real-number-5",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-real-number-5",
  "type": "Exercise",
  "number": "2.1.4.6.5",
  "title": "",
  "body": "  Convert the following decimals to fractions:                      "
},
{
  "id": "exercises-real-number-6",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-real-number-6",
  "type": "Exercise",
  "number": "2.1.4.6.6",
  "title": "",
  "body": "  Determine whether the following are rational or irrational:                      "
},
{
  "id": "exercises-real-number-7",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-real-number-7",
  "type": "Exercise",
  "number": "2.1.4.6.7",
  "title": "",
  "body": "  Which of the following statements are true and which of them are false?     The sum of any two rational numbers is rational    The sum of any two irrational numbers is irrational    The product of any two rational numbers is rational    The product of any two irrational numbers is irrational      "
},
{
  "id": "exercises-real-number-8",
  "level": "2",
  "url": "sec-the-real-number-system.html#exercises-real-number-8",
  "type": "Exercise",
  "number": "2.1.4.6.8",
  "title": "",
  "body": "  Find two rational numbers between .   "
},
{
  "id": "subsec-the-set-of-real-numbers-9",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-real-numbers-9",
  "type": "Checkpoint",
  "number": "2.1.71",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-the-set-of-real-numbers-10",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-real-numbers-10",
  "type": "Checkpoint",
  "number": "2.1.72",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-the-set-of-real-numbers-11",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-real-numbers-11",
  "type": "Checkpoint",
  "number": "2.1.73",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-the-set-of-real-numbers-12",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-the-set-of-real-numbers-12",
  "type": "Checkpoint",
  "number": "2.1.74",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-the-set-of-complex-numbers",
  "level": "1",
  "url": "sec-the-set-of-complex-numbers.html",
  "type": "Section",
  "number": "2.2",
  "title": "The set of complex numbers",
  "body": "The set of complex numbers   The positive integers (natural numbers) were invented to count things. The negative integers were introduced to count money when we owed more than we had. The rational numbers were invented for measuring quantities. Since quantities like voltage, length and time can be measured using fractions, they can be measured using the rational numbers.  The real numbers were invented for wholly mathematical reasons: it was found that there were lengths such as the diagonal of the unit square which, in principle, couldn't be measured by the rational numbers, instead they can be measured using real numbers.  The complex numbers were invented for purely mathematical reasons, just like the real numbers and were intended to make things neat and tidy in solving equations. They were regarded with deep suspicion by the more conservative folk for a century. Complex numbers are points in the plane, together with a rule telling you how to multiply them. They are two-dimensional, whereas the real numbers are one dimensional.  Equations of the form has no solution on the set of real numbers. Therefore, the set of complex numbers permits us to solve such equations.    The set of complex numbers is denoted by and is described by .    Note: If , the number is called purely imaginary and if , the number is called purely real.  Complex numbers can be defined as an order pair of real numbers that can be interpreted as points in the complex plane (z- plane) with coordinates and .    Find the real imaginary part of the following complex numbers :     Solution: real part & imaginary part      Solution: real part & imaginary part       Plotting complex numbers  Any complex number can be drawn in the complex plane as below :     Draw the complex number         Two complex numbers and are equal iff & .    If and are equal, then find the value of & .     , .     Add review   Add review    Operations on Complex numbers  Example 2.46            .    If and , then find                    Add review   Add review   Add review    Conjugate of a complex number    The conjugate of a complex number z = x+iy is denoted by and is defined as = x-iy. It can be represented by the point (x, -y) which is the reflection of the point (x, y) about the x-axis.       Find the conjugate of the complex number .        .                              proof : a) let          .   &    &   Now         The others are left for the reader.   Add review   Add review    Modulus (Norm) of a complex number    The modulus of a complex number z = x+iy is a non-negative real number denoted by |z| and is defined as |z| = . Geometrically, the number |z| represents the distnce between the point (x, y) and the origin.     Example 2.48: Find the modulus of the complex number z = 3 – 4i.  Properties of modulus  The others are left for the reader.   Add review   Add review   Add review    Additive and multiplicative inverses  Let z = x +i y be a complex number, then  Example 2.49 : Find the additive and the multiplicative inverse of z = 3+4i.     Exercise 2.3         Verify that  Show that  Do the following operations and simplify your answer.  Locate the complex numbers z 1 +z 2 and z 1 -z 2 , as vectors where  Sketch the following set of points determined by the condition given below:  Using properties of conjugate and modulus, show that  Show that  Using mathematical induction, show that (when n = 2, 3, . . . ,)  Show that the equation which is a circle of radius r centered at can be written as       Add review   Add review    Argument (Amplitude) of a complex number     Definition 2.15    Argument of a complex number z = x+iy is the angle formed by the complex number z = x+iy with the positive x-axis. The argument of a complex number z = x+iy is deonted by argz and is given by arg(z) =  The particular argument of z that lies in the range is called the principal argument of z and is dented by Argz.     Example 2.50 : Find the principal argument of the following complex numbers:  Properties of Arguments  Example 2.51 : Find the principal argument of   Add review   Add review    Polar form of a complex number     Definition 2.16    Let r and be polar coordinates of the point (x, y) of the complex number z = x+iy. Since x = and y = , then the complex number can be written as : which is called polar form, where r is modulus of z and is principal argument of z.     Example 2.52 : Express the following complex numbers in polar form:       Multiplication and division in polar forms     Proof:  Example 2.53:      Argument of a product      The argument of the product of two complex numbers is the sum of their arguments.      Proof:   Argument of a quotient     The argument of the quotient of two complex numbers is the difference of their arguments.     Proof:  Example 2.54:      De Moivre’s Formula     Example 2.55: Express in polar form.  Example 2.56: Express in polar form.     Euler’s formula  The complex number can be written in exponential form as: which is called Euler’s formula.     Example 2.57 : Express the complex number z = 1+i using Euler’s formula.   Example 2.58 : Express the complex number using Euler’s formula.  Example 2.59 : Express the complex number using Euler’s formula.   Add review   Add review    Extraction of roots  Example 2.60 : Find the square roots of the complex number  Example 2.61 : Find the cube roots of the complex number     Exercise 2.4        1. Find the argument of the following complex numbers:  2. Show that  3. Using mathematical induction, show that  4. Show that  5. Show that  6. Find the square roots of z = 9i  7. Find the cube roots of z = 8i  8. Solve the following equations:         Add review   Add review   Add review   Add review   "
},
{
  "id": "def-the-set-of-complex-numbers",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#def-the-set-of-complex-numbers",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  The set of complex numbers is denoted by and is described by .   "
},
{
  "id": "sec-the-set-of-complex-numbers-2-8",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#sec-the-set-of-complex-numbers-2-8",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  Find the real imaginary part of the following complex numbers :     Solution: real part & imaginary part      Solution: real part & imaginary part    "
},
{
  "id": "subsec-plotting-complex-numbers-4",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-plotting-complex-numbers-4",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Draw the complex number       "
},
{
  "id": "subsec-plotting-complex-numbers-7",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-plotting-complex-numbers-7",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  If and are equal, then find the value of & .     , .   "
},
{
  "id": "subsec-plotting-complex-numbers-8",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-plotting-complex-numbers-8",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-plotting-complex-numbers-9",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-plotting-complex-numbers-9",
  "type": "Checkpoint",
  "number": "2.2.6",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-operations-on-complex-numbers-7",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-operations-on-complex-numbers-7",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "  If and , then find                  "
},
{
  "id": "subsec-operations-on-complex-numbers-8",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-operations-on-complex-numbers-8",
  "type": "Checkpoint",
  "number": "2.2.8",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-operations-on-complex-numbers-9",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-operations-on-complex-numbers-9",
  "type": "Checkpoint",
  "number": "2.2.9",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-operations-on-complex-numbers-10",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-operations-on-complex-numbers-10",
  "type": "Checkpoint",
  "number": "2.2.10",
  "title": "",
  "body": " Add review "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#def-",
  "type": "Definition",
  "number": "2.2.11",
  "title": "",
  "body": "  The conjugate of a complex number z = x+iy is denoted by and is defined as = x-iy. It can be represented by the point (x, -y) which is the reflection of the point (x, y) about the x-axis.   "
},
{
  "id": "subsec-conjugate-of-a-complex-number-4",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-conjugate-of-a-complex-number-4",
  "type": "Example",
  "number": "2.2.12",
  "title": "",
  "body": "  Find the conjugate of the complex number .        .   "
},
{
  "id": "subsec-conjugate-of-a-complex-number-24",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-conjugate-of-a-complex-number-24",
  "type": "Checkpoint",
  "number": "2.2.13",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-conjugate-of-a-complex-number-25",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-conjugate-of-a-complex-number-25",
  "type": "Checkpoint",
  "number": "2.2.14",
  "title": "",
  "body": " Add review "
},
{
  "id": "def-modulus-of-a-complex-number",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#def-modulus-of-a-complex-number",
  "type": "Definition",
  "number": "2.2.15",
  "title": "",
  "body": "  The modulus of a complex number z = x+iy is a non-negative real number denoted by |z| and is defined as |z| = . Geometrically, the number |z| represents the distnce between the point (x, y) and the origin.   "
},
{
  "id": "subsec-modulus-norm-of-a-complex-7",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-modulus-norm-of-a-complex-7",
  "type": "Checkpoint",
  "number": "2.2.16",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-modulus-norm-of-a-complex-8",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-modulus-norm-of-a-complex-8",
  "type": "Checkpoint",
  "number": "2.2.17",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-modulus-norm-of-a-complex-9",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-modulus-norm-of-a-complex-9",
  "type": "Checkpoint",
  "number": "2.2.18",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-additive-and-multiplicative-inverses-4",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-additive-and-multiplicative-inverses-4",
  "type": "Table",
  "number": "2.2.19",
  "title": "",
  "body": "   Exercise 2.3    "
},
{
  "id": "subsec-additive-and-multiplicative-inverses-5",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-additive-and-multiplicative-inverses-5",
  "type": "Table",
  "number": "2.2.20",
  "title": "",
  "body": "    Verify that  Show that  Do the following operations and simplify your answer.  Locate the complex numbers z 1 +z 2 and z 1 -z 2 , as vectors where  Sketch the following set of points determined by the condition given below:  Using properties of conjugate and modulus, show that  Show that  Using mathematical induction, show that (when n = 2, 3, . . . ,)  Show that the equation which is a circle of radius r centered at can be written as     "
},
{
  "id": "subsec-additive-and-multiplicative-inverses-6",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-additive-and-multiplicative-inverses-6",
  "type": "Checkpoint",
  "number": "2.2.21",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-additive-and-multiplicative-inverses-7",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-additive-and-multiplicative-inverses-7",
  "type": "Checkpoint",
  "number": "2.2.22",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-argument-amplitude-of-a-complex-2",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-argument-amplitude-of-a-complex-2",
  "type": "Table",
  "number": "2.2.23",
  "title": "",
  "body": "   Definition 2.15    Argument of a complex number z = x+iy is the angle formed by the complex number z = x+iy with the positive x-axis. The argument of a complex number z = x+iy is deonted by argz and is given by arg(z) =  The particular argument of z that lies in the range is called the principal argument of z and is dented by Argz.    "
},
{
  "id": "subsec-argument-amplitude-of-a-complex-6",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-argument-amplitude-of-a-complex-6",
  "type": "Checkpoint",
  "number": "2.2.24",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-argument-amplitude-of-a-complex-7",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-argument-amplitude-of-a-complex-7",
  "type": "Checkpoint",
  "number": "2.2.25",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-polar-form-of-a-complex-2",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-polar-form-of-a-complex-2",
  "type": "Table",
  "number": "2.2.26",
  "title": "",
  "body": "   Definition 2.16    Let r and be polar coordinates of the point (x, y) of the complex number z = x+iy. Since x = and y = , then the complex number can be written as : which is called polar form, where r is modulus of z and is principal argument of z.    "
},
{
  "id": "subsec-polar-form-of-a-complex-6",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-polar-form-of-a-complex-6",
  "type": "Table",
  "number": "2.2.27",
  "title": "",
  "body": "   Multiplication and division in polar forms    "
},
{
  "id": "subsec-polar-form-of-a-complex-11",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-polar-form-of-a-complex-11",
  "type": "Table",
  "number": "2.2.28",
  "title": "",
  "body": "   The argument of the product of two complex numbers is the sum of their arguments.    "
},
{
  "id": "subsec-polar-form-of-a-complex-15",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-polar-form-of-a-complex-15",
  "type": "Table",
  "number": "2.2.29",
  "title": "",
  "body": "   The argument of the quotient of two complex numbers is the difference of their arguments.    "
},
{
  "id": "subsec-polar-form-of-a-complex-18",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-polar-form-of-a-complex-18",
  "type": "Table",
  "number": "2.2.30",
  "title": "",
  "body": "   De Moivre’s Formula    "
},
{
  "id": "subsec-polar-form-of-a-complex-21",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-polar-form-of-a-complex-21",
  "type": "Table",
  "number": "2.2.31",
  "title": "",
  "body": "   Euler’s formula  The complex number can be written in exponential form as: which is called Euler’s formula.    "
},
{
  "id": "subsec-polar-form-of-a-complex-26",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-polar-form-of-a-complex-26",
  "type": "Checkpoint",
  "number": "2.2.32",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-polar-form-of-a-complex-27",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-polar-form-of-a-complex-27",
  "type": "Checkpoint",
  "number": "2.2.33",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-extraction-of-roots-4",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-extraction-of-roots-4",
  "type": "Table",
  "number": "2.2.34",
  "title": "",
  "body": "   Exercise 2.4    "
},
{
  "id": "subsec-extraction-of-roots-5",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-extraction-of-roots-5",
  "type": "Table",
  "number": "2.2.35",
  "title": "",
  "body": "   1. Find the argument of the following complex numbers:  2. Show that  3. Using mathematical induction, show that  4. Show that  5. Show that  6. Find the square roots of z = 9i  7. Find the cube roots of z = 8i  8. Solve the following equations:       "
},
{
  "id": "subsec-extraction-of-roots-6",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-extraction-of-roots-6",
  "type": "Checkpoint",
  "number": "2.2.36",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-extraction-of-roots-7",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-extraction-of-roots-7",
  "type": "Checkpoint",
  "number": "2.2.37",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-extraction-of-roots-8",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-extraction-of-roots-8",
  "type": "Checkpoint",
  "number": "2.2.38",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-extraction-of-roots-9",
  "level": "2",
  "url": "sec-the-set-of-complex-numbers.html#subsec-extraction-of-roots-9",
  "type": "Checkpoint",
  "number": "2.2.39",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-review-of-relations-and-functions",
  "level": "1",
  "url": "sec-review-of-relations-and-functions.html",
  "type": "Section",
  "number": "3.1",
  "title": "Review of relations and functions",
  "body": " Review of relations and functions  After completing this section, the student should be able to:    define Cartesian product of two sets  understand the notion of relation and function  know the difference between relation and function  determine the domain and range of relations and functions  find the inverse of a relation    The student is familiar with the phrase ordered pair. In the ordered pair and ; and are the first coordinates while and are the second coordinates.       Given sets and . Then, the set is the Cartesian product of and , and it is denoted by .    Suppose and are sets. The Cartesian product of and , denoted by , is the set which contains every ordered pair whose first coordinate is an element of and second coordinate is an element of , i.e.  and .      For and , we have      , and  .      Let and . Then,    .  From example 3.1, we can see that and are not equal. Recall that two sets are equal if one is a subset of the other and vice versa. To check equality of Cartesian products we need to define equality of ordered pairs.    Two ordered pairs and are equal if and only if and .      If and are sets, any subset of is called a relation from A into B .    Suppose R is a relation from a set A to a set B . Then, R ⊆ A × B and hence for each , we have either or . If , we say “ a is R- related (or simply related) to b ”, and write . If , we say that “ a is not related to b ”.  In particular if R is a relation from a set A to itself, then we say that R is a relation on A .       Let and . Let be the relation “less than” from to . Then, .    Let and .  (a) The following are relations from into ;  (i)   (ii)   (iii)   (b) The following are relations from to ;  (i)   (ii)   (iii)          Let be a relation from into . Then,     the domain of , denoted by , is the set of first coordinates of the elements of , i.e       the range of , denoted by , is the set of second coordinates of elements of , i.e           : If is a relation from the set to the set , then the set is called the codomain of the relation . The range of relation is always a subset of the codomain.       The set is a relation from set to set . The domain of is , the range of is and the codomain of is .    The set of ordered pairs is a relation between the sets and , where is the domain and is the range.             If for a relation , we say is related to (or paired with) . Note that may also be paired with an element different from . In any case, is called the image of while is called the pimageA of under .    If the domain and\/or range of a relation is infinite, we cannot list each element assignment, so instead we use set builder notation to describe the relation. The situation we will encounter most frequently is that of a relation defined by an equation or formula. For example,     is a relation for which the range value is 3 less than twice the domain value. Hence, and are examples of ordered pairs that are of the assignment.          Let Let be the relation on defined by is a factor of . Find the domain and range of .    Let and .  Let Find   (a)   (b)   (c)            We have   .  Then, and .    We have   and and 64 are in whereas 125 is not in . Thus, , and .             A relation on a set is called  (i) a universal relation if   (ii) identity relation if   (iii) void or empty relation if     If is a relation from into , then the inverse relation of , denoted by , is a relation from to and is given by:   .  Observe that and . For instance, if is a relation on a set , then        Let be a relation defined on by .Find   (a)   (b)   (c)   (d)      The smallest natural number is           Therefore, , , and .             Mathematically, it is important for us to distinguish among the relations that assign a unique range element to each domain element and those that do not.    A function is a relation in which each element of the domain corresponds to exactly one element of the range.      Determine whether the following relations are functions.   (a)   (b)         Since the domain element is assigned to two different values in the range, and , it is not a function.    Each element in the domain, , is assigned no more than one value in the range, 2 is assigned only 4, 3 is assigned only 4, and 6 is assigned only . Therefore, it is a function.        Map or mapping, transformation and correspondence are synonyms for the word function. If is a function and , we say is mapped to by .    A relation from A into B is called a function from A into B , denoted by   or   if and only if          No element of A is mapped by to more than one element in B , i.e. if and , then .             If to the element of corresponds under the function , then we write and is called the image of x under and x is called a preimage of under .    The symbol is read as “ of ” but not “ times ”.    In order to show that a relation from into is a function, we first show that the domain of is and next we show that well defined or single-valued, i.e. if in , then in for all .       Let and . Which of the following are functions from A to .    defined by  defined by  defined by  defined by  defined by          is a function because to each element of there corresponds exactly one element of .     is not a function because there is no element of which correspond to ( ).     is a function because to each element of there corresponds exactly one element of . In the given function, the images of all element of are the same.     is not a function because there are two elements of which correspond to .In other words, the image of is not unique.     is a function because to each element of there corresponds exactly one element of .       As with relations, we can describe a function with an equation. For example, is a function, since each will produce only one .    Let . Then, maps:             More generally any real number is mapped to its square. As the square of a number is unique, maps every real number to a unique number. Thus, is a function from into .  We will find it useful to use the following vocabulary: The independent variable refers to the variable representing possible values in the domain, and the dependent variable refers to the variable representing possible values in the range. Thus, in our usual ordered pair notation , is the independent variable and is the dependent variable.    Let be the subset of defined by . Is a function?    First we note that . Then, satisfies condition (i) in the definition of a function. Now, , and but . Thus is not well defined. Hence, is not a function from to .      Let be the subset of defined by . Is a function?    First we show that satisfies condition (i) in the definition. Let be any element of . Then, . Hence, . This implies that . Thus, . However, and so . Now, and . Thus, and are in . Hence we find that and . This implies that is not well defined, i.e, does not satisfy condition (ii). Hence, is not a function from to .             For a function      The set A is called the domain of     The set B is called the codomain of     The set of all image of elements of A is called the range of        Let and . Let be the correspondence which assigns to each element in , its square. Thus, we have . Therefore, is a function and , and codomain of is .      Let . Let and represent the elements in the sets and , respectively. Let be a function defined by .  The variable can take values Thus, we have   .  This implies that and codomain of is IN .      Determine whether the following equations determine as a function of , if so, find the domain of the function.                            To determine whether gives as a function of , we need to know whether each x-value uniquely determines a y-value . Looking at the equation , we can see that once is chosen we multiply it by – 3 and then add 5. Thus, for each x there is a unique . Therefore, is a function. It domain is the set of all real numbers.    Looking at the equation carefully, we can see that each uniquely determines a (one can not produce two different ). Therefore, is a function.  As for its domain, we ask ourselves. Are there any values of that must be excluded? Since is a fractional expression, we must exclude any value of that makes the denominator equal to zero. We must have     Therefore, the domain consists of all real numbers except . Thus, .    For the equation , if we choose we get , which gives . In other words, there are two values associated with . Therefore, is not a function.         Find the domain of the function .    Since is defined and is real when the expression under the radical is non-negative, we need to satisfy the inequality     This is a quadratic inequality, which can be solved by analyzing signs:  Sign of    Since we want to be non-negative, the sign analysis shows us that the domain is or .       Let R be a relation on the set defined by .     List the elements of     Is          Let be a relation on the set defined by divides .     List the elements of     Find &     Find the elements of     Find &          Let . Define a relation on by . Write down the domain, codomain and range of . Find .      Find the domain and range of the relation .      Let and . Which of the following are functions from to ?                              Determine the domain and range of the following relations. Which relation a function?                                        Find the domain and range of the following functions.                              Given .  Find                           Add review   Add review   Add review   Add review  "
},
{
  "id": "def-Cartesian-product",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#def-Cartesian-product",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  Suppose and are sets. The Cartesian product of and , denoted by , is the set which contains every ordered pair whose first coordinate is an element of and second coordinate is an element of , i.e.  and .   "
},
{
  "id": "sec-review-of-relations-and-functions-8",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-8",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  For and , we have   "
},
{
  "id": "sec-review-of-relations-and-functions-10",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-10",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Let and . Then,   "
},
{
  "id": "def-Equality-of-ordered-pairs",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#def-Equality-of-ordered-pairs",
  "type": "Definition",
  "number": "3.1.4",
  "title": "",
  "body": "  Two ordered pairs and are equal if and only if and .   "
},
{
  "id": "def-Relation",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#def-Relation",
  "type": "Definition",
  "number": "3.1.5",
  "title": "",
  "body": "  If and are sets, any subset of is called a relation from A into B .   "
},
{
  "id": "sec-review-of-relations-and-functions-17",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-17",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "     Let and . Let be the relation “less than” from to . Then, .    Let and .  (a) The following are relations from into ;  (i)   (ii)   (iii)   (b) The following are relations from to ;  (i)   (ii)   (iii)       "
},
{
  "id": "def-relation-from-A-B",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#def-relation-from-A-B",
  "type": "Definition",
  "number": "3.1.7",
  "title": "",
  "body": "  Let be a relation from into . Then,     the domain of , denoted by , is the set of first coordinates of the elements of , i.e       the range of , denoted by , is the set of second coordinates of elements of , i.e         "
},
{
  "id": "sec-review-of-relations-and-functions-20",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-20",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": "     The set is a relation from set to set . The domain of is , the range of is and the codomain of is .    The set of ordered pairs is a relation between the sets and , where is the domain and is the range.      "
},
{
  "id": "sec-review-of-relations-and-functions-23",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-23",
  "type": "Example",
  "number": "3.1.9",
  "title": "",
  "body": "     Let Let be the relation on defined by is a factor of . Find the domain and range of .    Let and .  Let Find   (a)   (b)   (c)            We have   .  Then, and .    We have   and and 64 are in whereas 125 is not in . Thus, , and .      "
},
{
  "id": "sec-review-of-relations-and-functions-26",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-26",
  "type": "Example",
  "number": "3.1.10",
  "title": "",
  "body": "  Let be a relation defined on by .Find   (a)   (b)   (c)   (d)      The smallest natural number is           Therefore, , , and .   "
},
{
  "id": "def-Function",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#def-Function",
  "type": "Definition",
  "number": "3.1.11",
  "title": "",
  "body": "  A function is a relation in which each element of the domain corresponds to exactly one element of the range.   "
},
{
  "id": "sec-review-of-relations-and-functions-30",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-30",
  "type": "Example",
  "number": "3.1.12",
  "title": "",
  "body": "  Determine whether the following relations are functions.   (a)   (b)         Since the domain element is assigned to two different values in the range, and , it is not a function.    Each element in the domain, , is assigned no more than one value in the range, 2 is assigned only 4, 3 is assigned only 4, and 6 is assigned only . Therefore, it is a function.      "
},
{
  "id": "def-mapping-transformation-correspondence",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#def-mapping-transformation-correspondence",
  "type": "Definition",
  "number": "3.1.13",
  "title": "",
  "body": "  A relation from A into B is called a function from A into B , denoted by   or   if and only if          No element of A is mapped by to more than one element in B , i.e. if and , then .      "
},
{
  "id": "sec-review-of-relations-and-functions-35",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-35",
  "type": "Example",
  "number": "3.1.14",
  "title": "",
  "body": "  Let and . Which of the following are functions from A to .    defined by  defined by  defined by  defined by  defined by          is a function because to each element of there corresponds exactly one element of .     is not a function because there is no element of which correspond to ( ).     is a function because to each element of there corresponds exactly one element of . In the given function, the images of all element of are the same.     is not a function because there are two elements of which correspond to .In other words, the image of is not unique.     is a function because to each element of there corresponds exactly one element of .      "
},
{
  "id": "sec-review-of-relations-and-functions-37",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-37",
  "type": "Example",
  "number": "3.1.15",
  "title": "",
  "body": "  Let . Then, maps:            "
},
{
  "id": "sec-review-of-relations-and-functions-40",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-40",
  "type": "Example",
  "number": "3.1.16",
  "title": "",
  "body": "  Let be the subset of defined by . Is a function?    First we note that . Then, satisfies condition (i) in the definition of a function. Now, , and but . Thus is not well defined. Hence, is not a function from to .   "
},
{
  "id": "sec-review-of-relations-and-functions-41",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-41",
  "type": "Example",
  "number": "3.1.17",
  "title": "",
  "body": "  Let be the subset of defined by . Is a function?    First we show that satisfies condition (i) in the definition. Let be any element of . Then, . Hence, . This implies that . Thus, . However, and so . Now, and . Thus, and are in . Hence we find that and . This implies that is not well defined, i.e, does not satisfy condition (ii). Hence, is not a function from to .   "
},
{
  "id": "sec-review-of-relations-and-functions-45",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-45",
  "type": "Example",
  "number": "3.1.18",
  "title": "",
  "body": "  Let and . Let be the correspondence which assigns to each element in , its square. Thus, we have . Therefore, is a function and , and codomain of is .   "
},
{
  "id": "sec-review-of-relations-and-functions-46",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-46",
  "type": "Example",
  "number": "3.1.19",
  "title": "",
  "body": "  Let . Let and represent the elements in the sets and , respectively. Let be a function defined by .  The variable can take values Thus, we have   .  This implies that and codomain of is IN .   "
},
{
  "id": "sec-review-of-relations-and-functions-47",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-47",
  "type": "Example",
  "number": "3.1.20",
  "title": "",
  "body": "  Determine whether the following equations determine as a function of , if so, find the domain of the function.                            To determine whether gives as a function of , we need to know whether each x-value uniquely determines a y-value . Looking at the equation , we can see that once is chosen we multiply it by – 3 and then add 5. Thus, for each x there is a unique . Therefore, is a function. It domain is the set of all real numbers.    Looking at the equation carefully, we can see that each uniquely determines a (one can not produce two different ). Therefore, is a function.  As for its domain, we ask ourselves. Are there any values of that must be excluded? Since is a fractional expression, we must exclude any value of that makes the denominator equal to zero. We must have     Therefore, the domain consists of all real numbers except . Thus, .    For the equation , if we choose we get , which gives . In other words, there are two values associated with . Therefore, is not a function.      "
},
{
  "id": "sec-review-of-relations-and-functions-48",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-48",
  "type": "Example",
  "number": "3.1.21",
  "title": "",
  "body": "  Find the domain of the function .    Since is defined and is real when the expression under the radical is non-negative, we need to satisfy the inequality     This is a quadratic inequality, which can be solved by analyzing signs:  Sign of    Since we want to be non-negative, the sign analysis shows us that the domain is or .   "
},
{
  "id": "exercises-Review-of-relations-and-functions-1",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#exercises-Review-of-relations-and-functions-1",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": "  Let R be a relation on the set defined by .     List the elements of     Is       "
},
{
  "id": "exercises-Review-of-relations-and-functions-2",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#exercises-Review-of-relations-and-functions-2",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": "  Let be a relation on the set defined by divides .     List the elements of     Find &     Find the elements of     Find &       "
},
{
  "id": "exercises-Review-of-relations-and-functions-3",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#exercises-Review-of-relations-and-functions-3",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "",
  "body": "  Let . Define a relation on by . Write down the domain, codomain and range of . Find .   "
},
{
  "id": "exercises-Review-of-relations-and-functions-4",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#exercises-Review-of-relations-and-functions-4",
  "type": "Exercise",
  "number": "3.1.4",
  "title": "",
  "body": "  Find the domain and range of the relation .   "
},
{
  "id": "exercises-Review-of-relations-and-functions-5",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#exercises-Review-of-relations-and-functions-5",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "",
  "body": "  Let and . Which of the following are functions from to ?                           "
},
{
  "id": "exercises-Review-of-relations-and-functions-6",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#exercises-Review-of-relations-and-functions-6",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "",
  "body": "  Determine the domain and range of the following relations. Which relation a function?                                     "
},
{
  "id": "exercises-Review-of-relations-and-functions-7",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#exercises-Review-of-relations-and-functions-7",
  "type": "Exercise",
  "number": "3.1.7",
  "title": "",
  "body": "  Find the domain and range of the following functions.                           "
},
{
  "id": "exercises-Review-of-relations-and-functions-8",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#exercises-Review-of-relations-and-functions-8",
  "type": "Exercise",
  "number": "3.1.8",
  "title": "",
  "body": "  Given .  Find                        "
},
{
  "id": "sec-review-of-relations-and-functions-50",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-50",
  "type": "Checkpoint",
  "number": "3.1.22",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-review-of-relations-and-functions-51",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-51",
  "type": "Checkpoint",
  "number": "3.1.23",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-review-of-relations-and-functions-52",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-52",
  "type": "Checkpoint",
  "number": "3.1.24",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-review-of-relations-and-functions-53",
  "level": "2",
  "url": "sec-review-of-relations-and-functions.html#sec-review-of-relations-and-functions-53",
  "type": "Checkpoint",
  "number": "3.1.25",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-real-valued-functions-and-their",
  "level": "1",
  "url": "sec-real-valued-functions-and-their.html",
  "type": "Section",
  "number": "3.2",
  "title": "Real Valued functions and their properties",
  "body": " Real Valued functions and their properties  After completing this section, the student should be able to:    perform the four fundamental operations on polynomials  compose functions to get a new function  determine the domain of the sum, difference, product and quotient of two functions  define equality of two functions    Let be a function from set to set . If is a subset of the set of real numbers , then is called a real valued function, and in particular if is also a subset of , then is called a real function.       The function defined by , is a real function.    The function defined as is also a real valued function.                Functions are not numbers. But just as two numbers and can be added to produce a new number , so two functions and can be added to produce a new function . This is just one of the several operations on functions that we will describe in this section.  Consider functions and defined by and . We can make a new function by having it assign to the value , that is,  .    Let and be two functions. We define the following four functions:    The sum of the two functions  The difference of the two functions  The product of the two functions  The quotient of the two functions (provided    Since an value must be an input into both and , the domain of is the set of all common to the domain of and . This is usually written as . Similar statements hold for the domains of the difference and product of two functions. In the case of the quotient, we must impose the additional restriction that all elements in the domain of for which are excluded.      Let and . Find each of the following and its domain                                      We have            Let and , with respective domains and . Find formulas for and and give their domains.      Formula  Domain                            There is yet another way of producing a new function from two given functions.      Given two functions and , the composition of the two functions is denoted by and is defined by:   .   is read as composed with of . The domain of consists of those s in the domain of whose range values are in the domain of , i.e. those s for which is in the domain of .      Suppose and . The function is found by taking elements in the domain of and evaluating as follows:   ,   If we attempt to find we get , but is not in the domain of and so we cannot find . Hence, . The figure below illustrates this situation.          Given and , find                                …… First evaluate            …….First evaluate            ……. But               ……. But                   Given and , find       and its domain     and its domain            . Thus, .     . Since must first be an input into and so must be in the domain of , we see that .         Let and . Find and and its domain.    We have .   .  The domain of is .  We now explore the meaning of equality of two functions. Let and be two functions. Then, and are subsets of . Suppose . Let be any element of . Then, and thus . Since is a function and , we must have Conversely, assume that for all . Let . Then, . Thus, , which implies that . Similarly, we can show that . It now follows that . Thus two functions and are equal if and only if for all . In general we have the following definition.      Two functions are said to be equal if and only if the following two conditions hold:     The functions have the same domain;    Their functional values are equal at each element of the domain.            Let and be defined by and . Now, for all , . Thus, .    Let , and . The function and are not equal because           For and , find each value:                                          If and , find a formula for each of the following and state its domain.                              Let and .     Find and its domain.    Find and its domain    Are and the same functions? Explain.         Let . Find so that .      Let Find so that .      If is a real function defined by . Show that .      Find two functions and so that the given function , where                              Let and . Find                                        Add review   Add review   Add review   Add review  "
},
{
  "id": "sec-real-valued-functions-and-their-5",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-5",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": "     The function defined by , is a real function.    The function defined as is also a real valued function.      "
},
{
  "id": "def-sum-difference-product-quotient-of-functions",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#def-sum-difference-product-quotient-of-functions",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": "  Let and be two functions. We define the following four functions:    The sum of the two functions  The difference of the two functions  The product of the two functions  The quotient of the two functions (provided    Since an value must be an input into both and , the domain of is the set of all common to the domain of and . This is usually written as . Similar statements hold for the domains of the difference and product of two functions. In the case of the quotient, we must impose the additional restriction that all elements in the domain of for which are excluded.   "
},
{
  "id": "sec-real-valued-functions-and-their-11",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-11",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Let and . Find each of the following and its domain                                      We have         "
},
{
  "id": "sec-real-valued-functions-and-their-12",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-12",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  Let and , with respective domains and . Find formulas for and and give their domains.      Formula  Domain                            There is yet another way of producing a new function from two given functions.   "
},
{
  "id": "def-Composition-of-functions",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#def-Composition-of-functions",
  "type": "Definition",
  "number": "3.2.5",
  "title": "",
  "body": "  Given two functions and , the composition of the two functions is denoted by and is defined by:   .   is read as composed with of . The domain of consists of those s in the domain of whose range values are in the domain of , i.e. those s for which is in the domain of .   "
},
{
  "id": "sec-real-valued-functions-and-their-14",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-14",
  "type": "Example",
  "number": "3.2.6",
  "title": "",
  "body": "  Suppose and . The function is found by taking elements in the domain of and evaluating as follows:   ,   If we attempt to find we get , but is not in the domain of and so we cannot find . Hence, . The figure below illustrates this situation.       "
},
{
  "id": "sec-real-valued-functions-and-their-15",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-15",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  Given and , find                                …… First evaluate            …….First evaluate            ……. But               ……. But                "
},
{
  "id": "sec-real-valued-functions-and-their-16",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-16",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": "  Given and , find       and its domain     and its domain            . Thus, .     . Since must first be an input into and so must be in the domain of , we see that .      "
},
{
  "id": "sec-real-valued-functions-and-their-17",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-17",
  "type": "Example",
  "number": "3.2.9",
  "title": "",
  "body": "  Let and . Find and and its domain.    We have .   .  The domain of is .  We now explore the meaning of equality of two functions. Let and be two functions. Then, and are subsets of . Suppose . Let be any element of . Then, and thus . Since is a function and , we must have Conversely, assume that for all . Let . Then, . Thus, , which implies that . Similarly, we can show that . It now follows that . Thus two functions and are equal if and only if for all . In general we have the following definition.   "
},
{
  "id": "def-Equality-of-functions",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#def-Equality-of-functions",
  "type": "Definition",
  "number": "3.2.10",
  "title": "",
  "body": "  Two functions are said to be equal if and only if the following two conditions hold:     The functions have the same domain;    Their functional values are equal at each element of the domain.      "
},
{
  "id": "sec-real-valued-functions-and-their-19",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-19",
  "type": "Example",
  "number": "3.2.11",
  "title": "",
  "body": "     Let and be defined by and . Now, for all , . Thus, .    Let , and . The function and are not equal because       "
},
{
  "id": "exercises-Real-Valued-functions-and-their-properties-1",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#exercises-Real-Valued-functions-and-their-properties-1",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "  For and , find each value:                                       "
},
{
  "id": "exercises-Real-Valued-functions-and-their-properties-2",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#exercises-Real-Valued-functions-and-their-properties-2",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "  If and , find a formula for each of the following and state its domain.                           "
},
{
  "id": "exercises-Real-Valued-functions-and-their-properties-3",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#exercises-Real-Valued-functions-and-their-properties-3",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "  Let and .     Find and its domain.    Find and its domain    Are and the same functions? Explain.      "
},
{
  "id": "exercises-Real-Valued-functions-and-their-properties-4",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#exercises-Real-Valued-functions-and-their-properties-4",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "  Let . Find so that .   "
},
{
  "id": "exercises-Real-Valued-functions-and-their-properties-5",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#exercises-Real-Valued-functions-and-their-properties-5",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": "  Let Find so that .   "
},
{
  "id": "exercises-Real-Valued-functions-and-their-properties-6",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#exercises-Real-Valued-functions-and-their-properties-6",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "",
  "body": "  If is a real function defined by . Show that .   "
},
{
  "id": "exercises-Real-Valued-functions-and-their-properties-7",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#exercises-Real-Valued-functions-and-their-properties-7",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "",
  "body": "  Find two functions and so that the given function , where                           "
},
{
  "id": "exercises-Real-Valued-functions-and-their-properties-8",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#exercises-Real-Valued-functions-and-their-properties-8",
  "type": "Exercise",
  "number": "3.2.8",
  "title": "",
  "body": "  Let and . Find                                     "
},
{
  "id": "sec-real-valued-functions-and-their-21",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-21",
  "type": "Checkpoint",
  "number": "3.2.12",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-real-valued-functions-and-their-22",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-22",
  "type": "Checkpoint",
  "number": "3.2.13",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-real-valued-functions-and-their-23",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-23",
  "type": "Checkpoint",
  "number": "3.2.14",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-real-valued-functions-and-their-24",
  "level": "2",
  "url": "sec-real-valued-functions-and-their.html#sec-real-valued-functions-and-their-24",
  "type": "Checkpoint",
  "number": "3.2.15",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-types-of-functions-and-inverse",
  "level": "1",
  "url": "sec-types-of-functions-and-inverse.html",
  "type": "Section",
  "number": "3.3",
  "title": "Types of functions and inverse of a function",
  "body": " Types of functions and inverse of a function  After completing this section, the student should be able to:   define one to oneness and ontoness of a function    check invertibility of a function    find the inverse of an invertible function     In this section we shall study some important types of functions.   One to One functions     A function is called one to one , often written 1 - 1, if and only if for all , implies . In words, no two elements of are mapped to one element of .         If we consider the sets and and if , and , then both and are functions from into . Observe that is not a function because but . However, is a function.    Let and . Consider the functions    defined as      defined as    Then, is not 1 - 1, but is a 1 - 1 function.        Onto functions     Let be a function from a set into a set . Then is called an onto function(or  maps onto  if every element of is an image of some element in , i.e, .         Let and . The function defined by , , is not onto because there is no element in , whose image under is 4. The function given by is onto because each element of is an image of at least one element of .  Note that if is a non-empty set, the function defined by for all is a 1 – 1 function from onto . is called the identity map on .    TODO{Check out the apostrophes here}  Consider the relation from into defined by for all . Now, domain of is . Also, if , then , i.e. . Hence, is well defined and is a function. However, and , which implies that is not 1 – 1. For all , is a non-negative integer. This shows that a negative integer has no preimage. Hence, is not onto. Note that is onto .    Consider the relation from into defined by for all . As in the previous example, we can show that is a function. Let and suppose that . Then and thus . Hence, is 1 – 1. Since for all , is an even integer; we see that an odd integer has no preimage. Therefore, is not onto.        1 - 1 Correspondence     A function is said to be a 1 - 1 correspondence if is both 1 - 1 and onto.         Let and . Suppose given by for all . One can easily see that every element of has a preimage in and hence is onto. Moreover, if , then , i.e. . Hence, is 1 - 1. Therefore, is a 1 - 1 correspondence between and .    Let be a finite set. If is onto, then it is one to one.       Let . Then . Since is onto we have .Thus, , which implies that , , , are all distinct. Hence, implies for all . Therefore, is 1 - 1.     Inverse of a function   Since a function is a relation , the inverse of a function is denoted by and is defined by:     For instance, if , then . Note that the inverse of a function is not always a function. To see this consider the function . Then, , which is not a function.  As we have seen above not all functions have an inverse, so it is important to determine whether or not a function has an inverse before we try to find the inverse. If the function does not have an inverse, then we need to realize that it does not have an inverse so that we do not waste our time trying to find something that does not exist.  A one to one function is special because only one to one functions have inverse. If a function is one to one, to find the inverse we will follow the steps below:   Interchange and in the equation     Solving the resulting equation for , we will obtaining the inverse function.     Note that the domain of the inverse function is the range of the original function and the range of the inverse function is the domain of the original function.       Given . Find and its domain.    Let . Find .          We begin by interchanging and , and we solve for .      Interchange and      Take the cube root of both sides      This is the inverse of the function    Thus, . The domain of is the set of all real numbers.    Again we begin by interchanging and , and then we solve for .      Interchange and      Solving for       Thus, .        Even though, in general, we use an exponent of to indicate a reciprocal, inverse function notation is an exception to this rule. Please be aware that is not the reciprocal of . That is, If we want to write the reciprocal of the function by using a negative exponent, we must write       Consider the function from into . Is one to one? Is it onto?      Let . List all one to one functions from onto .      Let . Let be the inverse relation, i.e. .   Show by an example that need not be a function.    Show that is a function from into if and only if is 1 - 1.   Show that is a function from into if and only if is 1 - 1 and onto.   Show that if is a function from into , then .        Let and . Show that defined by is a 1 - 1 function from onto .      Which of the following functions are one to one?    defined by      defined by      defined by      defined by      defined by          Which of the following functions are onto?    defined by    defined by    defined by    defined by        Find if                                                Add review   Add review  "
},
{
  "id": "sec-types-of-functions-and-inverse-4",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "One to One functions "
},
{
  "id": "def-One-to-One-functions",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#def-One-to-One-functions",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  A function is called one to one , often written 1 - 1, if and only if for all , implies . In words, no two elements of are mapped to one element of .   "
},
{
  "id": "sec-types-of-functions-and-inverse-6",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-6",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "     If we consider the sets and and if , and , then both and are functions from into . Observe that is not a function because but . However, is a function.    Let and . Consider the functions    defined as      defined as    Then, is not 1 - 1, but is a 1 - 1 function.      "
},
{
  "id": "sec-types-of-functions-and-inverse-7",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Onto functions "
},
{
  "id": "def-onto-funtions",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#def-onto-funtions",
  "type": "Definition",
  "number": "3.3.3",
  "title": "",
  "body": "  Let be a function from a set into a set . Then is called an onto function(or  maps onto  if every element of is an image of some element in , i.e, .   "
},
{
  "id": "sec-types-of-functions-and-inverse-9",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-9",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "     Let and . The function defined by , , is not onto because there is no element in , whose image under is 4. The function given by is onto because each element of is an image of at least one element of .  Note that if is a non-empty set, the function defined by for all is a 1 – 1 function from onto . is called the identity map on .    TODO{Check out the apostrophes here}  Consider the relation from into defined by for all . Now, domain of is . Also, if , then , i.e. . Hence, is well defined and is a function. However, and , which implies that is not 1 – 1. For all , is a non-negative integer. This shows that a negative integer has no preimage. Hence, is not onto. Note that is onto .    Consider the relation from into defined by for all . As in the previous example, we can show that is a function. Let and suppose that . Then and thus . Hence, is 1 – 1. Since for all , is an even integer; we see that an odd integer has no preimage. Therefore, is not onto.      "
},
{
  "id": "sec-types-of-functions-and-inverse-10",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1 - 1 Correspondence "
},
{
  "id": "def-1-1-correspondence",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#def-1-1-correspondence",
  "type": "Definition",
  "number": "3.3.5",
  "title": "",
  "body": "  A function is said to be a 1 - 1 correspondence if is both 1 - 1 and onto.   "
},
{
  "id": "sec-types-of-functions-and-inverse-12",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-12",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "     Let and . Suppose given by for all . One can easily see that every element of has a preimage in and hence is onto. Moreover, if , then , i.e. . Hence, is 1 - 1. Therefore, is a 1 - 1 correspondence between and .    Let be a finite set. If is onto, then it is one to one.       Let . Then . Since is onto we have .Thus, , which implies that , , , are all distinct. Hence, implies for all . Therefore, is 1 - 1.   "
},
{
  "id": "sec-types-of-functions-and-inverse-13",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Inverse of a function "
},
{
  "id": "sec-types-of-functions-and-inverse-20",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-20",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": "     Given . Find and its domain.    Let . Find .          We begin by interchanging and , and we solve for .      Interchange and      Take the cube root of both sides      This is the inverse of the function    Thus, . The domain of is the set of all real numbers.    Again we begin by interchanging and , and then we solve for .      Interchange and      Solving for       Thus, .      "
},
{
  "id": "sec-types-of-functions-and-inverse-21",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-21",
  "type": "Remark",
  "number": "3.3.8",
  "title": "",
  "body": " Even though, in general, we use an exponent of to indicate a reciprocal, inverse function notation is an exception to this rule. Please be aware that is not the reciprocal of . That is, If we want to write the reciprocal of the function by using a negative exponent, we must write   "
},
{
  "id": "exercises-types-of-functions-and-inverse-1",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#exercises-types-of-functions-and-inverse-1",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "  Consider the function from into . Is one to one? Is it onto?   "
},
{
  "id": "exercises-types-of-functions-and-inverse-2",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#exercises-types-of-functions-and-inverse-2",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": "  Let . List all one to one functions from onto .   "
},
{
  "id": "exercises-types-of-functions-and-inverse-3",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#exercises-types-of-functions-and-inverse-3",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": "  Let . Let be the inverse relation, i.e. .   Show by an example that need not be a function.    Show that is a function from into if and only if is 1 - 1.   Show that is a function from into if and only if is 1 - 1 and onto.   Show that if is a function from into , then .     "
},
{
  "id": "exercises-types-of-functions-and-inverse-4",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#exercises-types-of-functions-and-inverse-4",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": "  Let and . Show that defined by is a 1 - 1 function from onto .   "
},
{
  "id": "exercises-types-of-functions-and-inverse-5",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#exercises-types-of-functions-and-inverse-5",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "  Which of the following functions are one to one?    defined by      defined by      defined by      defined by      defined by       "
},
{
  "id": "exercises-types-of-functions-and-inverse-6",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#exercises-types-of-functions-and-inverse-6",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "  Which of the following functions are onto?    defined by    defined by    defined by    defined by     "
},
{
  "id": "exercises-types-of-functions-and-inverse-7",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#exercises-types-of-functions-and-inverse-7",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "",
  "body": "  Find if                                             "
},
{
  "id": "sec-types-of-functions-and-inverse-23",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-23",
  "type": "Checkpoint",
  "number": "3.3.9",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-types-of-functions-and-inverse-24",
  "level": "2",
  "url": "sec-types-of-functions-and-inverse.html#sec-types-of-functions-and-inverse-24",
  "type": "Checkpoint",
  "number": "3.3.10",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational",
  "level": "1",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html",
  "type": "Section",
  "number": "3.4",
  "title": "Polynomials, zeros of polynomials, rational functions and their graphs",
  "body": " Polynomials, zeros of polynomials, rational functions and their graphs    After completing this section, the student should be able to:       define polynomial and rational functions    apply the theorems on polynomials to find the zeros of polynomial functions    use the division algorithm to find quotient and remainder    apply theorems on polynomials to solve related problems    sketch and analyze the graphs of rational functions     The functions described in this section frequently occur as mathematical models of real-life situations. For instance, in business the demand function gives the price per item, , in terms of the number of items sold, . Suppose a company finds that the price (in Birr) for its model GC-5 calculator is related to the number of calculators sold, (in millions), and is given by the demand function .  The manufacturer’s revenue is determined by multiplying the number of items sold ( ) by the price per item ( ). Thus, the revenue function is   These demand and revenue functions are examples of polynomial functions. The major aim of this section is to better understand the significance of applied functions (such as this demand function).In order to do this, we need to analyze the domain, range, and behavior of such functions.    A polynomial function is a function of the form Each is assumed to be a real number and is a non-negative integer, is called the leading coefficient. Such a polynomial is said to be of degree         The domain of a polynomial function is always the set of real numbers.    (Types of polynomials)     A polynomial of degree is called a linear function.    A polynomial of degree is called quadratic function.    A polynomial of degree is called a cubic function.    i.e             , and are examples of polynomial functions.     Properties of polynomial functions     The graph of a polynomial is a smooth unbroken curve. The word smooth means that the graph does not have any sharp corners as turning points.    If is a polynomial of degree , then it has at most zeros. Thus, a quadratic polynomial has at most 2 zeros    The graph of a polynomial function of degree can have at most turning points. Thus, the graph of a polynomial of degree 5 can have at most 4 turning points.    The graph of a polynomial always exhibits the characteristic that as gets very large, gets very large.       Zeros of a polynomial  The zeros of a polynomial function provide valuable information that can be helpful in sketching its graph. One can find the zeros by factorizing the polynomial. However, we have no general method for factorizing polynomials of degree greater than . In this subsection, we turn our attention to methods that will allow us to find zeros of higher degree polynomials. To do this, we first need to discuss about the division algorithm. Recall that a number is a zero of a polynomial function if .   Division Algorithm  Let and be polynomials with , and with the degree of less than or equal to the degree of . Then there are polynomials and such that , where either or the degree of is less than degree of      Divide .    Using long division we have:                                                    This long division means   With the aid of the division algorithm, we can derive two important theorems that will allow us to recognize the zeros of polynomials.  If we apply the division algorithm where the divisor, , is linear (that is of the form ), we get     Note that since the divisor is of the first degree, the remainder , must be a constant. If we now substitute , into this equation, we get     Therefore, .  The result we just proved is called the remainder theorem.    When a polynomial of degree at least is divided by , the remainder is       The remainder when is divided by is .As a consequence of the remainder theorem, if is a factor of , then the remainder must be . Conversely, if the remainder is 0, then , is a factor of . This is known as the Factor Theorem.       is a factor of if and only if .    The next theorem, called location theorem, allows us to verify that a zero exists somewhere within an interval of numbers, and can also be used to zoom in closer on a value.    Let be a polynomial function and and be real numbers such that . If , then there is at least one zero of between and .    The Factor and Remainder theorems establish the intimate relationship between the factors of a polynomial and its zeros. Recall that a polynomial of degree can have at most zeros. Does every polynomial have a zero? Our answer depends on the number system in which we are working. If we restrict ourselves to the set of real number system, then we are already familiar with the fact that the polynomial has no real zeros. However, this polynomial does have two zeros in the complex number system.(The zeros are and ). Carl Friedrich Gauss ( ), in his doctoral dissertation, proved that within the complex number system, every polynomial of degree has at least one zero. This fact is usually referred to as the Fundamental theorem of Algebra.    If is a polynomial of degree whose coefficients are complex numbers, then has at least one zero in the complex number system.    Note that since all real numbers are complex numbers, a polynomial with real coefficients also satisfies the Fundamental theorem of Algebra.As an immediate consequence of the Fundamental theorem of Algebra, we have    If , where and , then , where are complex numbers (possible real not necessarily distinct).    From the linear factorization theorem, it follows that every polynomial of degree has exactly zeros in the complex number system, where a root of multiplicity counted times.    Express each of the polynomials in the form described by the Linear Factorization Theorem. List each zero and its multiplicity.                          We may factorize as follows:     The zeros of are and each of multiplicity one.    We may factorize as follows:     Thus, the zeros of are and , each of multiplicity one.    We may factorize as follows:     Thus, the zeros of f(x) are 0 with multiplicity two and and each with multiplicity one.            Find a polynomial with exactly the following zeros and multiplicity.    zeros  multiplicity                Are there any other polynomials that give the same roots and multiplicity?    Find a polynomial having the zeros described in part (a) such that .          Based on the Factor Theorem, we may write the polynomial as which gives the required roots and multiplicities. Any polynomial of the form , where is a non-zero constant will give the same roots and multiplicities.    Based on part (1), we know that . Since we want , we have Thus, .       Our experience in using the quadratic formula on quadratic equations with real coefficients has shown us that complex roots always appear in conjugate pairs. For example, the roots of are and . Infact, this property extends to all polynomial equations.    Let be a polynomial with real coefficients. If complex number (where and are real numbers) is a zero of , then so is its conjugate       Let . Given that is a zero, find the other zero of .    According to the Conjugate Roots Theorem, if is a zero, then its conjugate, must also be a zero. Therefore, and are both factors of , and so their product must be a factor of . That is,   is a factor of . Dividing by , we obtain     Thus, the zeros of are , , and .    The theorems we have discussed so far are called existence theorems because they ensure the existence of zeros and linear factors of polynomials. These theorems do not tell us how to find the zeros or the linear factors. The Linear Factorization Theorem guarantees that we can factor a polynomial of degree at least one into linear factors, but it does not tell us how.  We know from experience that if happens to be a quadratic function, then we may find the zeros of by using the quadratic formula to obtain the zeros   .  The rest of this subsection is devoted to developing some special methods for finding the zeros of a polynomial function.  As we have seen, even though we have no general techniques for factorizing polynomials of degree greater than , if we happen to know a root, say , we can use long division to divide by and obtain a quotient polynomial of lower degree. If we can get the quotient polynomial down to a quadratic, then we are able to determine all the roots. But how do we find a root to start the process? The following theorem can be most helpful.    Suppose that , where is an degree polynomial with integer coefficients. If is a rational root of , where and have no common factor other than , then is a factor of and is a factor of .    To get a feeling as to why this theorem is true, suppose is a root of .  Then, which implies that       If we look at equation , the left hand side is divisible by , and therefore the right hand side must also be divisible by . Since is not divisible by , must be divisible by . From equation , must be divisible by .    Find all the zeros of the function     According to the Rational Root Theorem, if is a rational root of the given equation, then must be a factor of and must be a factor of . Thus, we have  possible values of :   possible values of :   possible rational roots :   We may check these possible roots by substituting the value in . Now and . Since is negative and is positive, by location theorem, has a zero between and 1. Since , then is a factor of . Using long division, we obtain     Therefore, the zeros of are , and .      Rational Functions and their Graphs  A rational function is a function of the form where both and are polynomials and .    The functions , and are examples of rational function.     Note that the domain of the rational function is      Find the domain and zeros of the function .    The values of for which are excluded from the domain of . Since , we have . To find the zeros of , we solve the equation     Therefore, to find the zeros of , we solve , giving . Since does not make the denominator zero, it is the only zero of .    The following terms and notations are useful in our next discussion.  Given a number ,      approaches from the right means takes any value near and near to but > . This is denoted by: (read: ‘ approaches from the right’ ).  For instance, means can be etc.     approaches from the left means takes any value near and near to but < .  This is denoted by: (read: ‘ approaches from the left’ ).  For instance, means can be etc.     (read: ‘ approaches or tends to infinity ’) means the value of gets indefinitely larger and larger in magnitude (keep increasing without bound). For instance, can be etc.     (read: ‘ approaches or tends to negative infinity ’) means the value of is negative and gets indefinitely larger and larger negative in magnitude (keep decreasing without bound). For instance, can be etc.     The same meanings apply also for the values of a function if we wrote or . The following figure illustrates these notion and notations.    Graphical illustration of the idea of , , etc.   (for accessibility)    We may also write (read: ‘ approaches ’) to mean the function values, , becomes arbitrarily closer and closer to (i.e., approximately ) but not exactly equal to . For instance, if , then as ; i.e., is approximately when is arbitrarily large.  The following steps are usually used to sketch (or draw) the graph of a rational function .     Identify the domain and simplify it.    Find the intercepts of the graph whenever possible. Recall the following:     y–intercept is the point on -axis where the graph of intersects with the -axis. At this point . Thus, , or ( ) is the y-intercept if Dom( ).     –intercept is the point on -axis where the graph of intersects with the -axis. At this point . Thus, or is x-intercept if .       Determine the asymptotes of the graph. Here, remember the following.        Vertical Asymptote: The vertical line is called a vertical asymptote(VA) of ( if      dom( ), i.e., is not defined at ; and     or when or . In this case, the graph of is almost vertically rising upward (if ) or sinking downward (if ) along with the vertical line when approaches either from the right or from the left.          Consider where and is a positive integer.    Obviously Dom( ). Next, we investigate the trend of the values of near . To do this, we consider two cases, when is even or odd:  Suppose is even: In this case for all ; and since as or . Hence, as or . Therefore, is a VA of . Moreover, or ( ) is its y-intercept since . However, it has no -intercept since for all in its domain (See, ).  Suppose is odd: In this case, for all , and as , just like in the even case. Thus, is a VA of . However, as , since for . Moreover, or is its y-intercept, since . However, it has no -intercept in this case either. (See, ).  Note that in both cases, as or .        (A)   (for accessibility)     (B)   (for accessibility)      Let be a rational function. Then,     if and , then is a VA of .    if , then may or may not be a VA of f . In this case, simplify and look for VA of the simplest form of f .          Horizontal Asymptote : A horizontal line is called horizontal asymptote (HA) of if the value of the function becomes closer and closer to (i.e., as or as .  In this case, the graph of f becomes almost a horizontal line along with (or near) the line as and as . For instance, from the above example, the HA of is (the -axis) , for any positive integer (See, , ).      A rational function has a HA only when degree ( ) degree ( )  In this case,   If degree < degree , then (the x-axis) is the HA of f .    If degree  degree , i.e., ,  then is the HA of .      In this case,   If degree < degree , then (the x-axis) is the HA of f .    If degree  degree , i.e., ,  then is the HA of .         Oblique Asymptote: The oblique line , , is called an oblique asymptote (OA) of f if the value of the function, , becomes closer and closer to (i.e., becomes approximately ) as either or . In this case, the graph of f becomes almost a straight line along with (or near) the oblique line as and as .      A rational function has an OA only when degree  degree  . In this case, using long division, if the quotient of is , then is the OA of .     Sketch the graphs of                     Since at , dom( ) .      Intercepts : -intercept: . Hence, is -intercept.   -intercept: . Hence, is -intercept.     Asymptotes:      VA: Since at and at , is VA of . In fact, if , then but the denominator is almost (but positive).  Consequently, as .  Moreover, as (since, if then is almost but negative).  (So, the graph of rises up to at the right side of , and sink down to at the left side of )    HA: Note that if you divide by , the quotient is and remainder is . Thus, . Thus, if (or ), then so that .  Hence, is the HA of .     Using these information, you can sketch the graph of as displayed below in Fig. 2.3 (A).       Both the denominator and numerator are at . So, first factorize and simplify them:   and . Therefore,     This implies that only is VA.     Hence, the graph of , is exactly the same as that of except that is not defined at . Therefore, the graph of and its VA are the same as that of except that there should be a hole at the point corresponding to on the graph of as shown on below.      (A)   (for accessibility)     (B)   (for accessibility)         Perform the requested divisions. Find the quotient and remainder and verify the Remainder Theorem by computing .   Divide     Divide     Divide     Divide          Given that , factor as completely as possible.      Given that and , find the remaining zeros of .      Given that is a double zero of , find all the zeros of .         Write the general polynomial whose only zeros are and , with multiplicity and respectively. What is its degree?    Find described in part if .         If is a root of , find the remaining zeros of p( ).      Determine the rational zeros of the polynomials                         Find the domain and the real zeros of the given function.                              Sketch the graph of                              Determine the behavior of when is near .      The graph of any rational function in which the degree of the numerator is exactly one more than the degree of the denominator will have an oblique (or slant) asymptote.     Use long division to show that       Show that this means that the line is a slant asymptote for the graph and sketch the graph of .        "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-2",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-2",
  "type": "Objectives",
  "number": "3.4",
  "title": "",
  "body": "  After completing this section, the student should be able to:       define polynomial and rational functions    apply the theorems on polynomials to find the zeros of polynomial functions    use the division algorithm to find quotient and remainder    apply theorems on polynomials to solve related problems    sketch and analyze the graphs of rational functions    "
},
{
  "id": "def-polynomial-function",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#def-polynomial-function",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  A polynomial function is a function of the form Each is assumed to be a real number and is a non-negative integer, is called the leading coefficient. Such a polynomial is said to be of degree    "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-7",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-7",
  "type": "Remark",
  "number": "3.4.2",
  "title": "",
  "body": "    The domain of a polynomial function is always the set of real numbers.    (Types of polynomials)     A polynomial of degree is called a linear function.    A polynomial of degree is called quadratic function.    A polynomial of degree is called a cubic function.    i.e         "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-8",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-8",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "   , and are examples of polynomial functions.   "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-10-4",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-10-4",
  "type": "Example",
  "number": "3.4.4",
  "title": "",
  "body": "  Divide .    Using long division we have:                                                   "
},
{
  "id": "thm-remainder-theorem",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#thm-remainder-theorem",
  "type": "Theorem",
  "number": "3.4.5",
  "title": "",
  "body": "  When a polynomial of degree at least is divided by , the remainder is    "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-10-14",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-10-14",
  "type": "Example",
  "number": "3.4.6",
  "title": "",
  "body": "  The remainder when is divided by is .As a consequence of the remainder theorem, if is a factor of , then the remainder must be . Conversely, if the remainder is 0, then , is a factor of . This is known as the Factor Theorem.   "
},
{
  "id": "thm-factor-theorem",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#thm-factor-theorem",
  "type": "Theorem",
  "number": "3.4.7",
  "title": "",
  "body": "   is a factor of if and only if .   "
},
{
  "id": "thm-location-theorem",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#thm-location-theorem",
  "type": "Theorem",
  "number": "3.4.8",
  "title": "",
  "body": "  Let be a polynomial function and and be real numbers such that . If , then there is at least one zero of between and .   "
},
{
  "id": "thm-fundamental-theorem-of-algebra",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#thm-fundamental-theorem-of-algebra",
  "type": "Theorem",
  "number": "3.4.9",
  "title": "",
  "body": "  If is a polynomial of degree whose coefficients are complex numbers, then has at least one zero in the complex number system.   "
},
{
  "id": "thm-linear-factorization-theorem",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#thm-linear-factorization-theorem",
  "type": "Theorem",
  "number": "3.4.10",
  "title": "",
  "body": "  If , where and , then , where are complex numbers (possible real not necessarily distinct).   "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-10-23",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-10-23",
  "type": "Example",
  "number": "3.4.11",
  "title": "",
  "body": "  Express each of the polynomials in the form described by the Linear Factorization Theorem. List each zero and its multiplicity.                          We may factorize as follows:     The zeros of are and each of multiplicity one.    We may factorize as follows:     Thus, the zeros of are and , each of multiplicity one.    We may factorize as follows:     Thus, the zeros of f(x) are 0 with multiplicity two and and each with multiplicity one.      "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-10-24",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-10-24",
  "type": "Example",
  "number": "3.4.12",
  "title": "",
  "body": "     Find a polynomial with exactly the following zeros and multiplicity.    zeros  multiplicity                Are there any other polynomials that give the same roots and multiplicity?    Find a polynomial having the zeros described in part (a) such that .          Based on the Factor Theorem, we may write the polynomial as which gives the required roots and multiplicities. Any polynomial of the form , where is a non-zero constant will give the same roots and multiplicities.    Based on part (1), we know that . Since we want , we have Thus, .      "
},
{
  "id": "thm-conjugate-roots-theorem",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#thm-conjugate-roots-theorem",
  "type": "Theorem",
  "number": "3.4.13",
  "title": "",
  "body": "  Let be a polynomial with real coefficients. If complex number (where and are real numbers) is a zero of , then so is its conjugate    "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-10-27",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-10-27",
  "type": "Example",
  "number": "3.4.14",
  "title": "",
  "body": "  Let . Given that is a zero, find the other zero of .    According to the Conjugate Roots Theorem, if is a zero, then its conjugate, must also be a zero. Therefore, and are both factors of , and so their product must be a factor of . That is,   is a factor of . Dividing by , we obtain     Thus, the zeros of are , , and .   "
},
{
  "id": "thm-rational-root",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#thm-rational-root",
  "type": "Theorem",
  "number": "3.4.15",
  "title": "",
  "body": "  Suppose that , where is an degree polynomial with integer coefficients. If is a rational root of , where and have no common factor other than , then is a factor of and is a factor of .   "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-10-38",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-10-38",
  "type": "Example",
  "number": "3.4.16",
  "title": "",
  "body": "  Find all the zeros of the function     According to the Rational Root Theorem, if is a rational root of the given equation, then must be a factor of and must be a factor of . Thus, we have  possible values of :   possible values of :   possible rational roots :   We may check these possible roots by substituting the value in . Now and . Since is negative and is positive, by location theorem, has a zero between and 1. Since , then is a factor of . Using long division, we obtain     Therefore, the zeros of are , and .   "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-11-3",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-11-3",
  "type": "Example",
  "number": "3.4.17",
  "title": "",
  "body": "  The functions , and are examples of rational function.   "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-11-4",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-11-4",
  "type": "Note",
  "number": "3.4.18",
  "title": "",
  "body": " Note that the domain of the rational function is   "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-11-5",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-11-5",
  "type": "Example",
  "number": "3.4.19",
  "title": "",
  "body": "  Find the domain and zeros of the function .    The values of for which are excluded from the domain of . Since , we have . To find the zeros of , we solve the equation     Therefore, to find the zeros of , we solve , giving . Since does not make the denominator zero, it is the only zero of .   "
},
{
  "id": "rational-func",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#rational-func",
  "type": "Figure",
  "number": "3.4.20",
  "title": "",
  "body": " Graphical illustration of the idea of , , etc.   (for accessibility)   "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-11-15",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-11-15",
  "type": "Example",
  "number": "3.4.21",
  "title": "",
  "body": "  Consider where and is a positive integer.    Obviously Dom( ). Next, we investigate the trend of the values of near . To do this, we consider two cases, when is even or odd:  Suppose is even: In this case for all ; and since as or . Hence, as or . Therefore, is a VA of . Moreover, or ( ) is its y-intercept since . However, it has no -intercept since for all in its domain (See, ).  Suppose is odd: In this case, for all , and as , just like in the even case. Thus, is a VA of . However, as , since for . Moreover, or is its y-intercept, since . However, it has no -intercept in this case either. (See, ).  Note that in both cases, as or .   "
},
{
  "id": "fig-n-even",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#fig-n-even",
  "type": "Figure",
  "number": "3.4.22",
  "title": "",
  "body": " (A)   (for accessibility)   "
},
{
  "id": "fig-n-odd",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#fig-n-odd",
  "type": "Figure",
  "number": "3.4.23",
  "title": "",
  "body": " (B)   (for accessibility)   "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-11-17",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-11-17",
  "type": "Remark",
  "number": "3.4.24",
  "title": "",
  "body": " Let be a rational function. Then,     if and , then is a VA of .    if , then may or may not be a VA of f . In this case, simplify and look for VA of the simplest form of f .     "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-11-19",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-11-19",
  "type": "Remark",
  "number": "3.4.25",
  "title": "",
  "body": " A rational function has a HA only when degree ( ) degree ( )  In this case,   If degree < degree , then (the x-axis) is the HA of f .    If degree  degree , i.e., ,  then is the HA of .     "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-11-22",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-11-22",
  "type": "Note",
  "number": "3.4.26",
  "title": "",
  "body": " A rational function has an OA only when degree  degree  . In this case, using long division, if the quotient of is , then is the OA of .  "
},
{
  "id": "sec-polynomials-zeros-of-polynomials-rational-11-23",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#sec-polynomials-zeros-of-polynomials-rational-11-23",
  "type": "Example",
  "number": "3.4.27",
  "title": "",
  "body": "  Sketch the graphs of                     Since at , dom( ) .      Intercepts : -intercept: . Hence, is -intercept.   -intercept: . Hence, is -intercept.     Asymptotes:      VA: Since at and at , is VA of . In fact, if , then but the denominator is almost (but positive).  Consequently, as .  Moreover, as (since, if then is almost but negative).  (So, the graph of rises up to at the right side of , and sink down to at the left side of )    HA: Note that if you divide by , the quotient is and remainder is . Thus, . Thus, if (or ), then so that .  Hence, is the HA of .     Using these information, you can sketch the graph of as displayed below in Fig. 2.3 (A).       Both the denominator and numerator are at . So, first factorize and simplify them:   and . Therefore,     This implies that only is VA.     Hence, the graph of , is exactly the same as that of except that is not defined at . Therefore, the graph of and its VA are the same as that of except that there should be a hole at the point corresponding to on the graph of as shown on below.   "
},
{
  "id": "func-01",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#func-01",
  "type": "Figure",
  "number": "3.4.28",
  "title": "",
  "body": " (A)   (for accessibility)   "
},
{
  "id": "func-02",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#func-02",
  "type": "Figure",
  "number": "3.4.29",
  "title": "",
  "body": " (B)   (for accessibility)   "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-1",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-1",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "  Perform the requested divisions. Find the quotient and remainder and verify the Remainder Theorem by computing .   Divide     Divide     Divide     Divide       "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-2",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-2",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "  Given that , factor as completely as possible.   "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-3",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-3",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": "  Given that and , find the remaining zeros of .   "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-4",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-4",
  "type": "Exercise",
  "number": "3.4.4",
  "title": "",
  "body": "  Given that is a double zero of , find all the zeros of .   "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-5",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-5",
  "type": "Exercise",
  "number": "3.4.5",
  "title": "",
  "body": "     Write the general polynomial whose only zeros are and , with multiplicity and respectively. What is its degree?    Find described in part if .      "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-6",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-6",
  "type": "Exercise",
  "number": "3.4.6",
  "title": "",
  "body": "  If is a root of , find the remaining zeros of p( ).   "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-7",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-7",
  "type": "Exercise",
  "number": "3.4.7",
  "title": "",
  "body": "  Determine the rational zeros of the polynomials                      "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-8",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-8",
  "type": "Exercise",
  "number": "3.4.8",
  "title": "",
  "body": "  Find the domain and the real zeros of the given function.                           "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-9",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-9",
  "type": "Exercise",
  "number": "3.4.9",
  "title": "",
  "body": "  Sketch the graph of                           "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-10",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-10",
  "type": "Exercise",
  "number": "3.4.10",
  "title": "",
  "body": "  Determine the behavior of when is near .   "
},
{
  "id": "exercises-polynomials-zeros-of-polynomials-rationals-11",
  "level": "2",
  "url": "sec-polynomials-zeros-of-polynomials-rational.html#exercises-polynomials-zeros-of-polynomials-rationals-11",
  "type": "Exercise",
  "number": "3.4.11",
  "title": "",
  "body": "  The graph of any rational function in which the degree of the numerator is exactly one more than the degree of the denominator will have an oblique (or slant) asymptote.     Use long division to show that       Show that this means that the line is a slant asymptote for the graph and sketch the graph of .      "
},
{
  "id": "sec-definition-and-basic-properties-of",
  "level": "1",
  "url": "sec-definition-and-basic-properties-of.html",
  "type": "Section",
  "number": "3.5",
  "title": "Definition and basic properties of logarithmic, exponential, trigonometric and hyperbolic functions and their graphs",
  "body": " Definition and basic properties of logarithmic, exponential, trigonometric and hyperbolic functions and their graphs   After completing this section, the student should be able to:    define exponential, logarithmic, trigonometric and hyperbolic functions  understand the relationship of the exponential and logarithmic functions  define the hyperbolic functions and be familiar with their properties  sketch the graph of exponential, logarithmic, trigonometric and hyperbolic functions  use basic properties of logarithmic, exponential, hyperbolic and trigonometric functions to solve problems           For a natural number and a real number , the power , read “ the power of ” or “ raised to ”, is defined as follows:   In the symbol , is called the base and is called the exponent.    For example, .  Based of the definition of , must be a natural number. It does not make sense for to be negative or zero. However, we can extend the definition of exponents to include 0 and negative exponents.                 As a result of the above definition, we have . We have the following rules of exponents for integer exponents:                  Next we extend the definition of exponents even further to include rational number exponents. To do this, we assume that we want the rules for integer exponents also to apply to rational exponents and then use the rules to show us to define a rational exponent. For example, how do we define ? Consider .  If we apply rule 2 and square , we get . Thus, is a number that, when squared, yields 9. There are two possible answers: 3 and – 3, since squaring either number will yield 9. To avoid ambiguity, we define (called the principal square root of ) as the non-negative quantity that, when squared, yield . Thus, .  We will arrive at the definition of in the same way as we did for . For example, if we cube , we get . Thus, is the number that, when cubed, yields 8. Since we have . Similarly, . Thus, we define (called the cube root of ) as the quantity that, when cubed yields .     If is an odd positive integer, then if and only if  If is an even positive integer and , then if and only if    We call the principal root of . Hence, is the real number (nonnegative when is even) that, when raised to the power, yields . Therefore,       Thus far, we have defined , where is a natural number. With the help of the second rule for exponent, we can define the expression , where and are natural numbers and is reduced to lowest terms.     If is a real number, then (i.e. the root of a raised to the power)    We can also define negative rational exponents:       Evaluate the following           We have                       Radical notation is an alternative way of writing an expression with rational exponents. We define for real number , the root of as follows:     (   ):  = , where is a positive integer.    The number is also called the principal root of . If the root of exists, we have:        For example, .       In the previous sections we examined functions of the form , where is a constant. How is this function different from .    A function of the form , where and , is called an exponential function.     The functions , and are examples of exponential functions.  As usual the first question raised when we encounter a new function is its domain. Since rational exponents are well defined, we know that any rational number will be in the domain of an exponential function. For example, let . Then as takes on the rational values – 2 , and , we have      Note that even though we do not know the exact values of and , we do know exactly what they mean. However, what about for irrational values of ? For instance,  We have not defined the meaning of irrational exponents. In fact, a precise formal definition of where is irrational requires the ideas of calculus. However, we can get an idea of what should be by using successive rational approximations to . For example, we have   Thus, it would seem reasonable to expect that . Since 1.414 and 1.415 are rational numbers, and are well defined, even though we cannot compute their values by hand. Using a calculator, we get . If we use better approximations to , we get . Using a calculator again, we get . Computing directly on a calculator gives . This numerical evidence suggests that as approaches , the values of approach a unique real number that we designate by , and so we will accept without proof, the fact that the domain of the exponential function is the set of real numbers.       , where   ,  .   Before we state some general facts about exponential functions , let’s see if we can determine what the graph of an exponential function will look like.        Sketch the graph of the function and identify its domain and range.    Sketch the graph of .          To aid in our analysis, we set up a short table of values to give us a frame of reference.          -3                                 With these points in hand, we draw a smooth curve through the points obtaining the graph appearing above. Observe that the domain of is , the graph has no intercepts, as  , the values are increasing very rapidly, whereas as , the values are getting closer and closer to 0. Thus, is a horizontal asymptote, the intercept is 1 and the range of is the set of positive real numbers.    It would be instructive to compute a table of values as we did in example 1 above (you are urged to do so). However, we will take a different approach. We note that . If , then . Thus by the graphing principle for , we can obtain the graph of by reflecting the graph of about the .     Here again the is a horizontal asymptote, there is no intercept, 1 is intercept and the range is the set of positive real numbers. However, the graph is now decreasing rather than increasing.  The following box summarizes the important facts about exponential functions and their graphs.            The domain of the exponential function is the set of real numbers  The range of the exponential function is the set of positive real numbers  The graph of exhibits exponential growth if or exponential decay if .  The intercept is 1.  The intercept is a horizontal asymptote  The exponential function is 1 – 1. Algebraically if , then              Sketch the graph of each of the following. Find the domain, range, intercepts, and asymptotes.  a)          To get the graph of . We start with the graph of , which is the basic exponential growth graph, and shift it up 1 unit.          From the graph we see that    Dom( f )  Range( f )  The intercept is 2  The line is a horizontal asymptote         To get the graph of , we start with the graph of , and shift 1 unit to the left.          From the graph we see that    Dom( f )  Range( f )  The intercept is 3  The line is a horizontal asymptote         To get the graph of , we start with the basic exponential decay . We then reflect it with respect to the , which gives the graph of . Finally, we shift this graph up 3 units to get the required graph of .   Basic exponential decay   From the graph of , we can see that , , the line is a horizontal asymptote, 2 is the intercept and is the intercept.  : When the base of the exponential function equals to the number , where , we call the exponential function the natural exponential function.            In the previous subsection we noted that the exponential function (where and ) is one to one. Thus, the exponential function has an inverse function. What is the inverse of ?  To find the inverse of , let’s review the process for finding an inverse function by comparing the process for the polynomial function and the exponential function . Keep in mind that is our independent variable and is the dependent variable and so whenever possible we want a function solved explicitly for .            and     and          There is no algebraic procedure we can use to solve for . By introducing radical notations we could express the inverse of explicitly in the form . In words, and both mean exactly the same thing: is the number whose cube is . Similarly, if we want to express explicitly as a function of , we need to invent a special notation for this. The key idea is to take the equation and express it verbally.     We introduce the following notation, which expresses this idea in a much more compact form.    For and , we write to mean is the exponent to which must be raised to yield . In other words, .    We read as “ equals the logarithm of to the base ”.    is an alternative way of writing   When an expression is written in the form , it is said to be in exponential form. When an expression is written in the form , it is said to be in logarithmic form. The table below illustrates the equivalence of the exponential and logarithmic forms.     Exponential form  Logarithmic form                       Write each of the following in exponential form.                  Write each of the following in logarithmic form.                  Evaluate each of the following.                        We have      means   and     means        We have      means      means           To evaluate , we let , and then rewrite the equation in exponential form, . Now, if we can express both sides in terms of the same base, we can solve the resulting exponential equation, as follows:  Let     Therefore, .    We apply the same procedure as in part (a).  Let     Therefore, .          As was pointed out at the beginning of this subsection, logarithm notation was invented to express the inverse of the exponential function. Thus, is a function of . We usually write rather than writing and use parenthesis only when needed to clarify the input to the log function. For example,  If , then , whereas if , then , which is undefined.    Given f , find                 (since )     (since )     is not defined (what power of will yield 0?). We say that is not in the domain of .     is not defined (what power of will yield a negative number?). We say that is not in the domain of .       Acknowledging that the logarithmic and exponential functions are inverses, we can derive a great deal of information about the logarithmic function and its graph from the exponential function and its graph.    Sketch the graph of the following functions. Find the domain and range of each.                Since is the inverse of , we can obtain the graph of by reflecting the graph of about the line , as shown below.   The first graph     To get the graph of , we reflect the graph of about the line as shown below.   The second graph        Taking note of the features of the two graphs we have the following important informations about the graph of the log function:            Its domain is the set of positive real numbers  Its range is the set of real numbers.  Its graph exhibits logarithmic growth if and logarithmic decay if .  The intercept is . There is no .  The axisis a vertical asymptote.            Sketch the graph of . Find the domain, range, asymptote and intercepts.    Find the inverse function for                   We can obtain the graph of by applying the graphing principle to shift the basic logarithmic growth graph units to the right and 1 unit up.     We have Dom  , Range and the graph has the line as a vertical asymptote. To find the intercept, we set and solve for . Setting and solving for , we will obtain . Thus, the intercept is .    Following the procedure for finding an inverse function, we have     We have       We have             The following table contains the basic properties of logarithm:          Assume that , and are positive and . Then           In words, logarithm of a product is equal to the sum of the logs of the factors.       In words, the log of a quotient is the log of the numerator minus the log of the denominator.       In words, the log of a power is the exponent times the log.               if a is positive and .        The following table contains the basic properties of logarithm:    Express in terms of simpler logarithms.                Show that .                  Examining the properties of logarithms, we can see that they deal with log of a product, quotient and power. Thus, which is the log of a sum cannot be simplified using log properties.    We have                  The logarithmic function was introduced without stressing the particular base chosen. However, there are two bases of special importance in science and mathematics, namely, and .        is called the common logarithm function. We write .    The inverse of the natural exponential function is called the natural logarithmic function and has its own special notation.        is called the natural logarithm function. We write .         Evaluate .    Find the inverse function of .          Evaluate .  Let . Then , .     Let            For the functions we have encountered so far, namely polynomial, rational and exponential functions, as the independent variable goes to infinity the graph of each of these three functions either goes to infinity(very quickly) for exponential functions or approaches a finite horizontal asymptote. None of these functions can model the regular periodic patterns that play an important role in the social, biological, and physical sciences: business cycles, agricultural seasons, heart rhythms, and hormone level fluctuations, and tides and planetary motions. The basic functions for studying regular periodic behaviour are the trigonometric functions. The domain of the trigonometric functions is more naturally the set of all geometric angles.   Angle Measurement    An angle is the figure formed by two half-lines or rays with a common end point. The common end point is called the vertex of the angle.     In forming the angle, one side remains fixed and the other side rotates. The fixed side is called the initial side and the side that rotates is called the terminal side. If the terminal side rotates in a counter clockwise direction, we call the angle positive angle, and if the terminal side rotates in a clockwise direction, we call the angle negative angle.          What attribute of an angle are we trying to measure when we measure the size of an angle? A moment of thought will lead us to the conclusion that when we measure an angle we are trying to answer the question: Through what part of a complete rotation has the terminal side rotated?  We will use degree (°) as the unit of measurement for angles. Recall that the measure of a full round angle (full circle) is 360°, straight angle is 180°, and right angle is 90°.  An alternative unit of measure for angles which will indicate their size is the radian measure. To see the connection between the degree measure and radian measure of an angle, let us consider an angle and draw a circle of radius with the vertex of at its center . Let represent the length of the arc of the circle intercepted by (as shown below).     Basic geometry tells us that the central angle will be the same fractional part of one complete rotation as will be of the circumference of the circle. For example, is of a complete rotation, then will be of the circumference of the circle. In other words, we can set up the following proportion:     Thus, we have the following conversion formula:        Convert each of the following radian measures to degrees.             Convert to radian measures                      By the conversion formula, we have , which implies that .    Again using the conversion formula, we get , which implies that .          Let represent the radian measure of . Using the conversion formula, we obtain: , which implies that .    Rather than using the conversion formula, we notice that . In part (a) we found that , and so we have .          To define the trigonometric functions, we will view all angles in the context of a Cartesian coordinate system: that is, given an angle , we begin by putting in standard position, meaning that the vertex of is placed at the origin and initial side of is placed along the positive x-axis . Thus the location of the terminal side of will, of course, depend on the size of .          We then locate a point (other than the origin) on the terminal side of and identify its coordinates and its distance to the origin, denoted by . Then, is positive.  With in standard position, we define the six trigonometric functions of as follows:            Sine      Cosine      Tangent      Cosecant      Secant      Cotangent        Recall that the radian measure of an angle is defined as , where is the length of the arc intercepted by and is the length of the radius Since and are both lengths, the quotient is a pure number without any units attached. Thus, any angle can be interpreted as a real number. Conversely, any real number can be interpreted as an angle. Thus, we can describe the domains of the trigonometric functions in the frame work of the real number systems. If we let , the domain consists of all real numbers for which is defined. Since and are never equal to zero, the domain for is the set of all real numbers. Similarly, the domain of is also the set of all real numbers.        To analyze , we keep in mind that once we choose a real number , we draw the angle, in standard position, that corresponds to . To simplify our analysis, we choose the point on the terminal side so that . That is, is a point on the unit circle .  Note that .     As the terminal side of moves through the first quadrant, increases from (when ) to (when ). Thus, as increases from to , steadily increases from to . As increases from to , decreases from to . A similar analysis reveals that as increases from to , decreases from to ; and as increases from to , increases from to .  Based on this analysis, we have the graph of in the interval as show below.     Since the values of depend only on the position of the terminal side, adding or subtracting multiples of to will leave the unchanged. Thus, the value of will repeat every units. The complete graph of appears below.     The graph of , which is called the basic sine curve.           Applying the same type of analysis to , we will able to get a good idea of what its graph looks like. The figure below shows the angle corresponding to as it increases through quadrant I, II, III and IV.  Keeping in mind that , we have the following:     As increases from 0 to , decreases from 1 to 0.    As increases from to , decreases from 0 to -1.    As increases from to , increases from -1 to 0.    As increases from to , increases from 0 to 1.     Based on this analysis, we have the graph of f (\\theta ) = cos\\theta as shown below:        since is undefined whenever , is undefined whenever the terminal side of the angle corresponding to falls on the - axis . This happens for , to which we can add or subtract any multiple of that will again bring the terminal side back to the - axis . Thus, domain of is { : } , where is an integer.     As increases from 0 to , decreases from 1 to 0 and increases from 0 to 1; therefore, increases from 0 to .    As increases from to , decreases from 0 to -1 and decreases from 1 to 0; therefore, increases from to 0.    As increases from to , increases from -1 to 0 and decreases from 0 to -1; therefore, increases from 0 to .    As increases from to , increases from 0 to 1 and increases from -1 to 0; therefore, increases from to .     You may want to add some more specific values to this analysis. In any case, we get the following as the graph of the tangent function.   The tangent curve         A function is called periodic if there exists a number such that for all in the domain of . The smallest such number is called the period of the function.    A periodic function keeps repeating the same set of - values over and over again. The graph of a periodic function shows the same basic segment of its graph being repeated. In the case of sine and cosine functions, the period is . The period of the tangent function is .       The amplitude of a periodic function f ( x ) is       Thus, the amplitude of the basic sine and cosine function is . The portion of the graph of a sine or cosine function over one period is called a complete cycle of the graph. In other words, the minimal portion of a sine or cosine graph that keeps repeating itself is called a complete cycle of the graph.       The number of complete cycles a sine or cosine graph makes on an interval of length equal to is called its frequency.    The frequency of the basic sine curve and the basic cosine curve is , because each graph makes complete cycle in the interval .  If a sine function has period of (see the figure below), then the number of complete cycles its graph will make in an interval of length is .   A sine graph of period and frequency 4   A sine graph of period and frequency   Thus if a sine function has a period of , its frequency is and its graph will make complete cycles in an interval of length .    Sketch the graph of and find its amplitude, period and frequency.    We can obtain this graph by applying our knowledge of the basic sine graph. For the basic curve, we have     These quadrantal values serve as guide points, which help us draw the graph. To obtain similar guide points for , we ask for what values of is   and we get     Thus, will have the values at , respectively. The graph of will thus complete one cycle in the interval , and will repeat the same values in the interval .   The graph of y = sin 2x   From this graph we see that has an amplitude of 1, a period , and a frequency of 2.    For convenience we summarize our discussion on the domains of the trigonometric functions in the table.     1.  Domain = All real numbers    2.  Domain = All real numbers    3.  Domain     4.  Domain    5.  Domain    6.  Domain      where is an integer    In the course of our discussion of the trigonometric functions, we have discussed two types of trigonometric relationships: the reciprocal and quotient relationships. These relationships are examples of trigonometric identities. In the table below we list identities that are satisfied by the trigonometric functions.   The reciprocal Identities                       The quotient Identities                  The Pythagorean Identities                       The addition formula                                                    The double angle formula                       The half-angle formula                           The hyperbolic functions are certain combinations of exponential functions, that occur in various applications, with properties similar to those of the trigonometric functions. Among many other applications they are used to describe the formation of satellite rings around the planets, to describe the shape of a rope hanging from two points, and have application in relativity theory. The two basic hyperbolic functions are the hyperbolic sine and hyperbolic cosine functions. They are defined as follows:       The function is defined by:     The domain of is .    The function is defined by:     The domain of is .        Remark:      is pronounced \" kosh\" x and is pronounced as \" cinch \" .    Since for all , we see that for every .    If , then . Thus, is an even     is an odd function.    In contrast to sine and cosine, the hyperbolic functions are not periodic.                                We have            Left as an exercise.                Since is an even function, its graph is symmetric about the y-axis . Its intercept is , because . As tends to infinity, tends to infinity because goes to infinity and approaches to 0. When is a large negative number acts like , because gets close to . Thus the graph of looks like:     This graph can also be obtained by geometrically adding the two curves and , and taking half of each resulting -value. Observe that range of is .           Since is an odd function, its graph is symmetric about the origin. The graph passes through the origin because . As gets large, acts like and when is a large negative number, acts like . Thus, the graph of looks like:     The remaining four hyperbolic functions are defined in terms of cosh x and sinh x by analogy with trigonometry.   (The domain of is ).   (The domain of is ).   (The domain of is ).   (The domain of is ).  You may sketch the graphs of these four hyperbolic functions (see exercise ).  The trigonometric terminology and notation for the hyperbolic functions stem from the fact that they satisfy a list of identities that much resemble the familiar trigonometric identities, apart from an occasional difference of sign.                          The trigonometric functions are sometimes called circular functions because the point ( ) lies on the circle for all . Similarly, identity (1) tells us that the point ( ) lies on the hyperbola , and this is the reason for the name hyperbolic functions.     Find the domain of the given function.             Sketch the graph of the given function. Identify the domain, range, intercepts, and asymptotes               Solve the given exponential equation.               Let . Show that .      Let . Show that .      Let .Show that       Evaluate the given logarithmic expression (where it is defined).                    If , find and the domain of .      If , find and the domain of .      Show that       Sketch the graph of the given function and identify the domain, range, intercepts and asymptotes.               Find the inverse of       Let . Find a function so that .      Convert the given angle from radians to degrees               Convert the given angle from degrees to radians               Sketch the graph of                    Verify the following identities:                    Given and , find .      Sketch the graphs of                    Prove the identities (2) and (3).      Find the exact numerical value of                 Prove the following identities:                     Add review   Add review   Add review   Add review  "
},
{
  "id": "def-exponents-and-radicals",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-exponents-and-radicals",
  "type": "Definition",
  "number": "3.5.1",
  "title": "",
  "body": "  For a natural number and a real number , the power , read “ the power of ” or “ raised to ”, is defined as follows:   In the symbol , is called the base and is called the exponent.   "
},
{
  "id": "def-zero-and-negative-exponents",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-zero-and-negative-exponents",
  "type": "Definition",
  "number": "3.5.2",
  "title": "",
  "body": "              "
},
{
  "id": "def-rational-exponent",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-rational-exponent",
  "type": "Definition",
  "number": "3.5.3",
  "title": "",
  "body": "   If is an odd positive integer, then if and only if  If is an even positive integer and , then if and only if   "
},
{
  "id": "def-rational-exponent-2",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-rational-exponent-2",
  "type": "Definition",
  "number": "3.5.4",
  "title": "",
  "body": "   If is a real number, then (i.e. the root of a raised to the power)   "
},
{
  "id": "sec-definition-and-basic-properties-of-25",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-25",
  "type": "Example",
  "number": "3.5.5",
  "title": "",
  "body": "  Evaluate the following           We have                      "
},
{
  "id": "def-n-th-root",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-n-th-root",
  "type": "Definition",
  "number": "3.5.6",
  "title": "",
  "body": "   (   ):  = , where is a positive integer.   "
},
{
  "id": "def-exponential-function",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-exponential-function",
  "type": "Definition",
  "number": "3.5.7",
  "title": "",
  "body": "  A function of the form , where and , is called an exponential function.   "
},
{
  "id": "sec-definition-and-basic-properties-of-35",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-35",
  "type": "Example",
  "number": "3.5.8",
  "title": "",
  "body": " The functions , and are examples of exponential functions.  As usual the first question raised when we encounter a new function is its domain. Since rational exponents are well defined, we know that any rational number will be in the domain of an exponential function. For example, let . Then as takes on the rational values – 2 , and , we have      Note that even though we do not know the exact values of and , we do know exactly what they mean. However, what about for irrational values of ? For instance,  We have not defined the meaning of irrational exponents. In fact, a precise formal definition of where is irrational requires the ideas of calculus. However, we can get an idea of what should be by using successive rational approximations to . For example, we have   Thus, it would seem reasonable to expect that . Since 1.414 and 1.415 are rational numbers, and are well defined, even though we cannot compute their values by hand. Using a calculator, we get . If we use better approximations to , we get . Using a calculator again, we get . Computing directly on a calculator gives . This numerical evidence suggests that as approaches , the values of approach a unique real number that we designate by , and so we will accept without proof, the fact that the domain of the exponential function is the set of real numbers.       , where   ,  .   Before we state some general facts about exponential functions , let’s see if we can determine what the graph of an exponential function will look like.  "
},
{
  "id": "sec-definition-and-basic-properties-of-36",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-36",
  "type": "Example",
  "number": "3.5.9",
  "title": "",
  "body": "     Sketch the graph of the function and identify its domain and range.    Sketch the graph of .          To aid in our analysis, we set up a short table of values to give us a frame of reference.          -3                                 With these points in hand, we draw a smooth curve through the points obtaining the graph appearing above. Observe that the domain of is , the graph has no intercepts, as  , the values are increasing very rapidly, whereas as , the values are getting closer and closer to 0. Thus, is a horizontal asymptote, the intercept is 1 and the range of is the set of positive real numbers.    It would be instructive to compute a table of values as we did in example 1 above (you are urged to do so). However, we will take a different approach. We note that . If , then . Thus by the graphing principle for , we can obtain the graph of by reflecting the graph of about the .     Here again the is a horizontal asymptote, there is no intercept, 1 is intercept and the range is the set of positive real numbers. However, the graph is now decreasing rather than increasing.  The following box summarizes the important facts about exponential functions and their graphs.            The domain of the exponential function is the set of real numbers  The range of the exponential function is the set of positive real numbers  The graph of exhibits exponential growth if or exponential decay if .  The intercept is 1.  The intercept is a horizontal asymptote  The exponential function is 1 – 1. Algebraically if , then           "
},
{
  "id": "sec-definition-and-basic-properties-of-37",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-37",
  "type": "Example",
  "number": "3.5.10",
  "title": "",
  "body": "  Sketch the graph of each of the following. Find the domain, range, intercepts, and asymptotes.  a)          To get the graph of . We start with the graph of , which is the basic exponential growth graph, and shift it up 1 unit.          From the graph we see that    Dom( f )  Range( f )  The intercept is 2  The line is a horizontal asymptote         To get the graph of , we start with the graph of , and shift 1 unit to the left.          From the graph we see that    Dom( f )  Range( f )  The intercept is 3  The line is a horizontal asymptote         To get the graph of , we start with the basic exponential decay . We then reflect it with respect to the , which gives the graph of . Finally, we shift this graph up 3 units to get the required graph of .   Basic exponential decay   From the graph of , we can see that , , the line is a horizontal asymptote, 2 is the intercept and is the intercept.  : When the base of the exponential function equals to the number , where , we call the exponential function the natural exponential function.      "
},
{
  "id": "def-compacts",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-compacts",
  "type": "Definition",
  "number": "3.5.11",
  "title": "",
  "body": "  For and , we write to mean is the exponent to which must be raised to yield . In other words, .   "
},
{
  "id": "sec-definition-and-basic-properties-of-50",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-50",
  "type": "Example",
  "number": "3.5.12",
  "title": "",
  "body": "     Write each of the following in exponential form.                  Write each of the following in logarithmic form.                  Evaluate each of the following.                        We have      means   and     means        We have      means      means           To evaluate , we let , and then rewrite the equation in exponential form, . Now, if we can express both sides in terms of the same base, we can solve the resulting exponential equation, as follows:  Let     Therefore, .    We apply the same procedure as in part (a).  Let     Therefore, .         "
},
{
  "id": "sec-definition-and-basic-properties-of-53",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-53",
  "type": "Example",
  "number": "3.5.13",
  "title": "",
  "body": "  Given f , find                 (since )     (since )     is not defined (what power of will yield 0?). We say that is not in the domain of .     is not defined (what power of will yield a negative number?). We say that is not in the domain of .      "
},
{
  "id": "sec-definition-and-basic-properties-of-55",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-55",
  "type": "Example",
  "number": "3.5.14",
  "title": "",
  "body": "  Sketch the graph of the following functions. Find the domain and range of each.                Since is the inverse of , we can obtain the graph of by reflecting the graph of about the line , as shown below.   The first graph     To get the graph of , we reflect the graph of about the line as shown below.   The second graph       "
},
{
  "id": "sec-definition-and-basic-properties-of-58",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-58",
  "type": "Example",
  "number": "3.5.15",
  "title": "",
  "body": "     Sketch the graph of . Find the domain, range, asymptote and intercepts.    Find the inverse function for                   We can obtain the graph of by applying the graphing principle to shift the basic logarithmic growth graph units to the right and 1 unit up.     We have Dom  , Range and the graph has the line as a vertical asymptote. To find the intercept, we set and solve for . Setting and solving for , we will obtain . Thus, the intercept is .    Following the procedure for finding an inverse function, we have     We have       We have            "
},
{
  "id": "sec-definition-and-basic-properties-of-62",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-62",
  "type": "Example",
  "number": "3.5.16",
  "title": "",
  "body": "  Express in terms of simpler logarithms.                Show that .                  Examining the properties of logarithms, we can see that they deal with log of a product, quotient and power. Thus, which is the log of a sum cannot be simplified using log properties.    We have                 "
},
{
  "id": "def-common-logarithm",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-common-logarithm",
  "type": "Definition",
  "number": "3.5.17",
  "title": "",
  "body": "      is called the common logarithm function. We write .   "
},
{
  "id": "def-natural-logarithm",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-natural-logarithm",
  "type": "Definition",
  "number": "3.5.18",
  "title": "",
  "body": "      is called the natural logarithm function. We write .   "
},
{
  "id": "sec-definition-and-basic-properties-of-67",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-67",
  "type": "Example",
  "number": "3.5.19",
  "title": "",
  "body": "     Evaluate .    Find the inverse function of .          Evaluate .  Let . Then , .     Let      "
},
{
  "id": "sec-definition-and-basic-properties-of-70-14",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-70-14",
  "type": "Example",
  "number": "3.5.20",
  "title": "",
  "body": "     Convert each of the following radian measures to degrees.             Convert to radian measures                      By the conversion formula, we have , which implies that .    Again using the conversion formula, we get , which implies that .          Let represent the radian measure of . Using the conversion formula, we obtain: , which implies that .    Rather than using the conversion formula, we notice that . In part (a) we found that , and so we have .         "
},
{
  "id": "def-trigonometric-functions",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-trigonometric-functions",
  "type": "Definition",
  "number": "3.5.21",
  "title": "",
  "body": "          Sine      Cosine      Tangent      Cosecant      Secant      Cotangent       "
},
{
  "id": "def-periodic-function",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-periodic-function",
  "type": "Definition",
  "number": "3.5.22",
  "title": "",
  "body": "     A function is called periodic if there exists a number such that for all in the domain of . The smallest such number is called the period of the function.   "
},
{
  "id": "def-amplitude",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-amplitude",
  "type": "Definition",
  "number": "3.5.23",
  "title": "",
  "body": "     The amplitude of a periodic function f ( x ) is      "
},
{
  "id": "def-frequency",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-frequency",
  "type": "Definition",
  "number": "3.5.24",
  "title": "",
  "body": "     The number of complete cycles a sine or cosine graph makes on an interval of length equal to is called its frequency.   "
},
{
  "id": "sec-definition-and-basic-properties-of-81",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-81",
  "type": "Example",
  "number": "3.5.25",
  "title": "",
  "body": "  Sketch the graph of and find its amplitude, period and frequency.    We can obtain this graph by applying our knowledge of the basic sine graph. For the basic curve, we have     These quadrantal values serve as guide points, which help us draw the graph. To obtain similar guide points for , we ask for what values of is   and we get     Thus, will have the values at , respectively. The graph of will thus complete one cycle in the interval , and will repeat the same values in the interval .   The graph of y = sin 2x   From this graph we see that has an amplitude of 1, a period , and a frequency of 2.   "
},
{
  "id": "def-hyperbolic-functions",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#def-hyperbolic-functions",
  "type": "Definition",
  "number": "3.5.26",
  "title": "",
  "body": "     The function is defined by:     The domain of is .    The function is defined by:     The domain of is .      "
},
{
  "id": "sec-definition-and-basic-properties-of-95",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-95",
  "type": "Example",
  "number": "3.5.27",
  "title": "",
  "body": "                          We have            Left as an exercise.      "
},
{
  "id": "exercises-Basic-properties-of-functions-1",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-1",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": "  Find the domain of the given function.          "
},
{
  "id": "exercises-Basic-properties-of-functions-2",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-2",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": "  Sketch the graph of the given function. Identify the domain, range, intercepts, and asymptotes            "
},
{
  "id": "exercises-Basic-properties-of-functions-3",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-3",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": "  Solve the given exponential equation.            "
},
{
  "id": "exercises-Basic-properties-of-functions-4",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-4",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": "  Let . Show that .   "
},
{
  "id": "exercises-Basic-properties-of-functions-5",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-5",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": "  Let . Show that .   "
},
{
  "id": "exercises-Basic-properties-of-functions-6",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-6",
  "type": "Exercise",
  "number": "3.5.6",
  "title": "",
  "body": "  Let .Show that    "
},
{
  "id": "exercises-Basic-properties-of-functions-7",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-7",
  "type": "Exercise",
  "number": "3.5.7",
  "title": "",
  "body": "  Evaluate the given logarithmic expression (where it is defined).                 "
},
{
  "id": "exercises-Basic-properties-of-functions-8",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-8",
  "type": "Exercise",
  "number": "3.5.8",
  "title": "",
  "body": "  If , find and the domain of .   "
},
{
  "id": "exercises-Basic-properties-of-functions-9",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-9",
  "type": "Exercise",
  "number": "3.5.9",
  "title": "",
  "body": "  If , find and the domain of .   "
},
{
  "id": "exercises-Basic-properties-of-functions-10",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-10",
  "type": "Exercise",
  "number": "3.5.10",
  "title": "",
  "body": "  Show that    "
},
{
  "id": "exercises-Basic-properties-of-functions-11",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-11",
  "type": "Exercise",
  "number": "3.5.11",
  "title": "",
  "body": "  Sketch the graph of the given function and identify the domain, range, intercepts and asymptotes.            "
},
{
  "id": "exercises-Basic-properties-of-functions-12",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-12",
  "type": "Exercise",
  "number": "3.5.12",
  "title": "",
  "body": "  Find the inverse of    "
},
{
  "id": "exercises-Basic-properties-of-functions-13",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-13",
  "type": "Exercise",
  "number": "3.5.13",
  "title": "",
  "body": "  Let . Find a function so that .   "
},
{
  "id": "exercises-Basic-properties-of-functions-14",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-14",
  "type": "Exercise",
  "number": "3.5.14",
  "title": "",
  "body": "  Convert the given angle from radians to degrees            "
},
{
  "id": "exercises-Basic-properties-of-functions-15",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-15",
  "type": "Exercise",
  "number": "3.5.15",
  "title": "",
  "body": "  Convert the given angle from degrees to radians            "
},
{
  "id": "exercises-Basic-properties-of-functions-16",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-16",
  "type": "Exercise",
  "number": "3.5.16",
  "title": "",
  "body": "  Sketch the graph of                 "
},
{
  "id": "exercises-Basic-properties-of-functions-17",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-17",
  "type": "Exercise",
  "number": "3.5.17",
  "title": "",
  "body": "  Verify the following identities:                 "
},
{
  "id": "exercises-Basic-properties-of-functions-18",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-18",
  "type": "Exercise",
  "number": "3.5.18",
  "title": "",
  "body": "  Given and , find .   "
},
{
  "id": "exercises-Basic-properties-of-functions-19",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-19",
  "type": "Exercise",
  "number": "3.5.19",
  "title": "",
  "body": "  Sketch the graphs of                 "
},
{
  "id": "exercises-Basic-properties-of-functions-20",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-20",
  "type": "Exercise",
  "number": "3.5.20",
  "title": "",
  "body": "  Prove the identities (2) and (3).   "
},
{
  "id": "exercises-Basic-properties-of-functions-21",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-21",
  "type": "Exercise",
  "number": "3.5.21",
  "title": "",
  "body": "  Find the exact numerical value of              "
},
{
  "id": "exercises-Basic-properties-of-functions-22",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#exercises-Basic-properties-of-functions-22",
  "type": "Exercise",
  "number": "3.5.22",
  "title": "",
  "body": "  Prove the following identities:                 "
},
{
  "id": "sec-definition-and-basic-properties-of-113",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-113",
  "type": "Checkpoint",
  "number": "3.5.28",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-definition-and-basic-properties-of-114",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-114",
  "type": "Checkpoint",
  "number": "3.5.29",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-definition-and-basic-properties-of-115",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-115",
  "type": "Checkpoint",
  "number": "3.5.30",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-definition-and-basic-properties-of-116",
  "level": "2",
  "url": "sec-definition-and-basic-properties-of.html#sec-definition-and-basic-properties-of-116",
  "type": "Checkpoint",
  "number": "3.5.31",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-distance-formula-and-equation-of",
  "level": "1",
  "url": "sec-distance-formula-and-equation-of.html",
  "type": "Section",
  "number": "4.1",
  "title": "Distance Formula and Equation of Lines",
  "body": " Distance Formula and Equation of Lines   By the end of this section, you should    be able to find the distance between two points in the coordinate plane.  be able to find the coordinates of a point that divides a line segment in a given ratio.  know different forms of basic equations of a line  be able to find equation of a line and draw the line.  know when two lines are parallel.  know when two lines are perpendicular.  be able to find the distance between a point and a line in the coordinate plane.      Distance between two points and division of segments  If P and Q are two points on the coordinate plane, then PQ represents the line segment joining P and Q and d (P , Q) or | PQ | represents the distance between P and Q .  Recall that the distance between points a and b on a number line is | a - b | = | b − a |. Thus, the distance between two points P( , ) and R( , ) on a horizontal line must be |  | and the distance between Q( , ) and R( , ) on a vertical line must be | - |.(See, ) .        To find distance between any two points and , we note that triangle PRQ in is a right triangle, and so by Pythagorean Theorem we get:   Therefore, we have the following:   The distance between the points P( , ) and Q( , ) is     Note that, from the distance formula, the distance between the origin O(0,0) and a point P( x , y ) is          The distance between O(0,0) and P(3,4) is       The distance between P(1,2) and Q(3,6) is       The distance between P(−1,2) and Q(5,−6) is          Division point of a line segment: Given two distinct points P( , ) and Q( , ) in the coordinate plane, we want to find the coordinates ( , ) of the point R that lies on the segment PQ and divides the segment in the ratio to ; that is     where and are given positive numbers. ( )        To determine ( , ), we construct two right triangles ∆PSR and ∆RTQ as shown. We then have | PS| = − , |SR| =  − , |RT| =  x_2 − x_0 , and |TQ| =  y_2 − y_0 . Now since ∆PSR is similar to ∆RTQ, we have that     or ( − ) = ( − ) and ( − ) = ( − ) .  Solving for and , we obtain     Therefore, we have shown the following.    Let P( , ) and Q( , ) be distinct points in the coordinate plane.  If R( , ) is a point on the line segment PQ that divides the segment in the ratio |PR| : |RQ| =  :  , then the coordinates of R is given by     In particular, the midpoint of PQ is given by         Given P(−3, 3) and Q(7,8 ),     find the coordinates of the point R on the line segment PQ such that |PR| : |RQ| = 2 : 3.    find the coordinates of the midpoint of PQ.          Obviously R( , ) is given by       The coordinates of the midpoint is            Find the distance between the following pair of points.     (−1, 0) and (3, 0).    (1, −2) and (1, 4).   (−2, 3) and (2, 0)  The origin and  ( a , a ) and (− a , − a )  ( a , b ) and (− a , − b )      If the vertices of ∆ABC are A(1,1), B(4,5) and C(7, 1), find the perimeter of the triangle.    Let P = (−3,0) and Q be a point on the positive y -axis. Find the coordinates of Q if |PQ| =5.    Suppose the endpoints of a line segment AB are A(−1,1) and B(5, 10). Find the coordinates of point P and Q if     P is the midpoint of AB.    P divides AB in the ratio 2:3 (That is, |AP| : |PB| = 2 : 3 ).    Q divides AB in the ratio 3 : 2.    P and Q trisect AB (i.e., divide it into three equal parts).       Let M(−1,3) be the midpoint of a line segment PQ. If the coordinates of P is (−5, −7), then what is the coordinates of Q?    Let A( a , 0), B(0, b ) and O(0,0) be the vertices of a right triangle. Show that the midpoint of AB is equidistant from the vertices of the triangle     Add review   Add review   Add review   Add review    Equations of lines  An equation of a line l is an equation which must be satisfied by the coordinates ( x , y ) of every point on the line. A line can be vertical, horizontal or oblique. The equation of a vertical line that intersects the x -axis at ( a , 0) is x=a because the x -coordinate of every point on the line is a . Similarly, the equation of a horizontal line that intersects the y -axis at (0, b ) is y=b because the y -coordinate of every point on the line is b .  An oblique line is a straight line which is neither vertical nor horizontal. To find equation of an oblique line we use its slope which is the measure of the steepness of the line. In particular, the slope of a line is defined as follows.    The slope of a non-vertical line that passes through the points   ( , ) and ( , ) is     The slope of a vertical line is not defined. Note that the slope of horizontal line is 0.          Thus the slope of a line l is the ratio of the change in y , ∆ y , to the change in x , ∆ x (See ). Hence, slope is the rate of change of y with respect x . The slope depends also on the angle of inclination of the line. Note that the angle of inclination θ is the angle between x -axis and the line (measured counterclockwise from the direction of positive x -axis to the line). Observe that     Therefore, if θ is the angle of inclination of a line, then its slope is m = tan θ .  Now let us find an equation of the line that passes through a point ( , ) and has slope m . A point P( x , y ) with x ≠ lies on this line if and only if the slope of the line though and P is m ; that is     This leads to the following equation of the line:     In general, depending on the given information, you can show that the equations of oblique lines can be obtained using the following formulas.          Slope m and its y -intercept (0, b )  V Slope-Intercept-Form: y = mx + b    Slope and a point ( , ) on l  Point-Slope-Form: = ( )  Or y = m ( )    Two points ( , ) and ( , ) on l  Two-Point Form:    x -intercept ( a ,0) and y -intercept (0, b )  Intercept Form:      Find an equation of the line l if     the line passes through (3, −2) and its angle of inclination is 135°.    the line passes through the points (1, 2) and (4, −2)          The slope of l is m = tan(135°) = −1; and it passes through point (3, −2). Thus, using the point-slope form with = 3 and = −2, we obtain the equation of the line as   y – (−2)= − 1( x – 3) which simplifies to y = − x + 1.    Given the line passes through (1, 2) and (4, −2) , the slope of the line is     So, using the point-slope form with = 1 and = 2, we obtain the equation of the line as   which simplifies to 4 x + 3 y =10.  (Note that it is possible to use the two-point form to find the equation of this line)        In general, the equation of a straight line can be written as     for constants a , b , c with a and b not both zero. Indeed, if a =0 the line is a horizontal line given by y = − c\/b , if b =0 the line is a vertical line given by x = − c\/a , and if both a , b≠ 0 it is the oblique line given by with slope and y -intercept .   slopes can be used to check whether lines are parallel, perpendicular or not. In particular, let and be non-vertical lines with slope and , respectively. Then,      and are parallel by || iff = .     and are perpendicular, denoted by | iff (or )     Moreover, if and are are both vertical lines then they are parallel. However, if one of them is horizontal and the other is vertical, then they are perpendicular.    Find an equation of the line through the point (3,2) that is parallel to the line       The given line can be written in the form which is the slope-intercept form; that is, it has slope So, as parallel lines have the same slope, the required line has slope Therefore, its equation in point-slope form is which can be simplified to       Show that the lines and are perpendicular.    The equations can be written as and from which we can see that and . Since , the lines are perpendicular.       Find the slope and equation of the line determined by the following pair of points. Also find the y- and x- intercepts, if any, and draw each line.     (0, 2) and (3, 2)   (2, 0) and (2, 3)  The origin and (1,0)  The origin and (−1, 0)  The origin and (1,2)  The origin and (1,−3)  (1,2) and (3, 4)  (−2, −3), (2, 5)  (−1, 3) and (1, 6 )  (−3, −2) and (2, −2)  (0, 3) and (3, 0)  (−1, 0) and (0, 2)        Find the slope and equation of the line whose angle of inclination is θ and passes through the point P, if      , P = (1,1).     ,P = (0,1).     ,P = (0,1).     ,P = (0, 1).     , P = (1, 3).     , P = (1,−3).         Find the x -and y -intercepts and slope of the line given by , and draw the line.      Draw the triangle with vertices A(−2,4), B(1,−1) and C(6,2) and find the following.     Equations of the sides.    Equations of the medians.    Equations of the perpendicular bisectors of the sides.    Equation of the lines through the vertices parallel to the opposite sides.         Find the equation of the line that passes through (2, −1) and perpendicular to 3 x + 4 y = 6.      Suppose and are perpendicular lines intersecting at (−1, 2). If the angle of inclination of is 45°, then find an equation of .      Determine which of the following pair are parallel, perpendicular or neither.     2 x − y + 1 = 0 and 2 x + 4 y = 3   3 x −6 y +1 = 0 and x − 2 y = 3  2 x +5 y +3 = 0 and 5 x + 3 y +2 =0  y = 3 x +2 and 3 x + y = 2  2 x − 3 y = 5 and 3 x + 2 y − 3= 0   and 2 x +3 y −6 = 0        Let be the line passing through P( a, b ) and Q( b, a ) such that a ≠ b . Find an equation of the line in terms of a and b if      passes through P and perpendicular to      passes through (a,a) and parallel to          Let and be given by 2 x + 3 y −4= 0 and x +3 y −5= 0, respectively. A third line is perpendicular to . Find an equation of if the three lines intersect at the same point.      Dertermine the values(s) of which the line        is parallel to the x -axis.    is parallel to the y -axis.    passes through the origin    passes through the point (1,1).     In each case write the equation of the line.      Determine the values of a and b for which the two lines and      have exactly one intersection point.    are distinct parallel lines.    coincide.    are perpendicular.         Add review   Add review   Add review   Add review    Distance between a point and a line  Suppose a line and a point P( x,y ) not on the line are given. The distance from P to , d (P, ), is defined as the perpendicular distance between P and l . That is,  d (P, ) = | PQ | , where Q is the point on such that PQ⊥ .(See )        If P is on , then d (P, ) = 0. Moreover, given a point P( h,k ) observe that     if the line is a horizontal line y=b , then d (P, ) = | k – b | .    if the line is a vertical line x=a , then d (P, ) = | h – a |      In general, however, to find the distance between a point P( ) and an arbitrary line given by ax + by + c = 0, we have to first get a point Q on such that PQ⊥ and then compute | PQ | . This yields the formula given in the following Theorem.    The distance between a point P( ) and a line L : ax + by + c = 0 is given by       In particular, if we take ( )=(0,0) in this formula, we obtain the distance between the origin O(0,0) and a line L : ax + by + c = 0 which is given by       Show that the origin and P(6,4) are equidistant from the line .    By equidistant we mean equal distance. So, we need to show d (O, L ) = d (P, L ).  To use the above formula, we first write the equation of the line L in the general form which is 3 x + 2 y –13 = 0. Thus, a =3, b =2 and c = –13.     and   Therefore, d (O, L ) = d (P, L) =   Thus, O(0,0) and P(6,4) are equidistant from the given line L .       Find the distance between the line L given by y = 2 x +3 and each of the following points.     The origin    (2, 3)    (1, 5)    ( −1, −1)         Suppose L is the line through (1, 2) and (3, 2). What is the distance between L and     The origin    (2, −3)    ( a , 0)    ( a , b )    ( a , 2)         Suppose L is the vertical line that crosses the x -axis at (5, 0). Find d (P, L ), when P is     The origin    (2, −4)    (0, b )    (5, b )    ( a , b )         Suppose L is the line that passes through (0, −3) and (4, 0). Find the distance between L and each of the following points    The origin  (1, 4)  (−1, 0)  (8, 3)  (0,1)  (4, −2)   (7, −4)        The vertices of ∆ABC are given below. Find the length of the side BC, the height of the altitude from vertex A to BC, and the area of the triangle when its vertices are     A(3, 4), B(2, 1), and C(6, 1)    A(3, 4), B(1, 1), and C(5, 2)         Consider the quadrilateral whose vertices are A(1,2), B(2,6), C(6,8) and D(5,4). Then,     Show that the quadrilateral is a parallelogram.    How long is the side AD?    What is the height of the altitude of the quadrilateral from vertex A to the side AD.    Determine the area of the quadrilateral.         Add review   Add review   "
},
{
  "id": "distance_between-two-points",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#distance_between-two-points",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": "     "
},
{
  "id": "subsec-distance-between-two-points-and-12",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-distance-between-two-points-and-12",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "     The distance between O(0,0) and P(3,4) is       The distance between P(1,2) and Q(3,6) is       The distance between P(−1,2) and Q(5,−6) is         "
},
{
  "id": "division_point-of-a-line-segment",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#division_point-of-a-line-segment",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": "     "
},
{
  "id": "thm-1",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#thm-1",
  "type": "Theorem",
  "number": "4.1.4",
  "title": "",
  "body": "  Let P( , ) and Q( , ) be distinct points in the coordinate plane.  If R( , ) is a point on the line segment PQ that divides the segment in the ratio |PR| : |RQ| =  :  , then the coordinates of R is given by     In particular, the midpoint of PQ is given by      "
},
{
  "id": "subsec-distance-between-two-points-and-24",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-distance-between-two-points-and-24",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  Given P(−3, 3) and Q(7,8 ),     find the coordinates of the point R on the line segment PQ such that |PR| : |RQ| = 2 : 3.    find the coordinates of the midpoint of PQ.          Obviously R( , ) is given by       The coordinates of the midpoint is         "
},
{
  "id": "exercises-distance-between-two-points-and-1",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance-between-two-points-and-1",
  "type": "Exercise",
  "number": "4.1.1.1",
  "title": "",
  "body": " Find the distance between the following pair of points.     (−1, 0) and (3, 0).    (1, −2) and (1, 4).   (−2, 3) and (2, 0)  The origin and  ( a , a ) and (− a , − a )  ( a , b ) and (− a , − b )    "
},
{
  "id": "exercises-distance-between-two-points-and-2",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance-between-two-points-and-2",
  "type": "Exercise",
  "number": "4.1.1.2",
  "title": "",
  "body": " If the vertices of ∆ABC are A(1,1), B(4,5) and C(7, 1), find the perimeter of the triangle.  "
},
{
  "id": "exercises-distance-between-two-points-and-3",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance-between-two-points-and-3",
  "type": "Exercise",
  "number": "4.1.1.3",
  "title": "",
  "body": " Let P = (−3,0) and Q be a point on the positive y -axis. Find the coordinates of Q if |PQ| =5.  "
},
{
  "id": "exercises-distance-between-two-points-and-4",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance-between-two-points-and-4",
  "type": "Exercise",
  "number": "4.1.1.4",
  "title": "",
  "body": " Suppose the endpoints of a line segment AB are A(−1,1) and B(5, 10). Find the coordinates of point P and Q if     P is the midpoint of AB.    P divides AB in the ratio 2:3 (That is, |AP| : |PB| = 2 : 3 ).    Q divides AB in the ratio 3 : 2.    P and Q trisect AB (i.e., divide it into three equal parts).     "
},
{
  "id": "exercises-distance-between-two-points-and-5",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance-between-two-points-and-5",
  "type": "Exercise",
  "number": "4.1.1.5",
  "title": "",
  "body": " Let M(−1,3) be the midpoint of a line segment PQ. If the coordinates of P is (−5, −7), then what is the coordinates of Q?  "
},
{
  "id": "exercises-distance-between-two-points-and-6",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance-between-two-points-and-6",
  "type": "Exercise",
  "number": "4.1.1.6",
  "title": "",
  "body": " Let A( a , 0), B(0, b ) and O(0,0) be the vertices of a right triangle. Show that the midpoint of AB is equidistant from the vertices of the triangle  "
},
{
  "id": "subsec-distance-between-two-points-and-26",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-distance-between-two-points-and-26",
  "type": "Checkpoint",
  "number": "4.1.6",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-distance-between-two-points-and-27",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-distance-between-two-points-and-27",
  "type": "Checkpoint",
  "number": "4.1.7",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-distance-between-two-points-and-28",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-distance-between-two-points-and-28",
  "type": "Checkpoint",
  "number": "4.1.8",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-distance-between-two-points-and-29",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-distance-between-two-points-and-29",
  "type": "Checkpoint",
  "number": "4.1.9",
  "title": "",
  "body": " Add review "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#def-",
  "type": "Definition",
  "number": "4.1.10",
  "title": "",
  "body": "  The slope of a non-vertical line that passes through the points   ( , ) and ( , ) is     The slope of a vertical line is not defined. Note that the slope of horizontal line is 0.   "
},
{
  "id": "equations-of-line2",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#equations-of-line2",
  "type": "Figure",
  "number": "4.1.11",
  "title": "",
  "body": "     "
},
{
  "id": "subsec-equations-of-lines-15",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-equations-of-lines-15",
  "type": "Example",
  "number": "4.1.12",
  "title": "",
  "body": "  Find an equation of the line l if     the line passes through (3, −2) and its angle of inclination is 135°.    the line passes through the points (1, 2) and (4, −2)          The slope of l is m = tan(135°) = −1; and it passes through point (3, −2). Thus, using the point-slope form with = 3 and = −2, we obtain the equation of the line as   y – (−2)= − 1( x – 3) which simplifies to y = − x + 1.    Given the line passes through (1, 2) and (4, −2) , the slope of the line is     So, using the point-slope form with = 1 and = 2, we obtain the equation of the line as   which simplifies to 4 x + 3 y =10.  (Note that it is possible to use the two-point form to find the equation of this line)      "
},
{
  "id": "subsec-equations-of-lines-22",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-equations-of-lines-22",
  "type": "Example",
  "number": "4.1.13",
  "title": "",
  "body": "  Find an equation of the line through the point (3,2) that is parallel to the line       The given line can be written in the form which is the slope-intercept form; that is, it has slope So, as parallel lines have the same slope, the required line has slope Therefore, its equation in point-slope form is which can be simplified to    "
},
{
  "id": "subsec-equations-of-lines-23",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-equations-of-lines-23",
  "type": "Example",
  "number": "4.1.14",
  "title": "",
  "body": "  Show that the lines and are perpendicular.    The equations can be written as and from which we can see that and . Since , the lines are perpendicular.   "
},
{
  "id": "exercises-equations-of-lines-1",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-1",
  "type": "Exercise",
  "number": "4.1.2.1",
  "title": "",
  "body": "  Find the slope and equation of the line determined by the following pair of points. Also find the y- and x- intercepts, if any, and draw each line.     (0, 2) and (3, 2)   (2, 0) and (2, 3)  The origin and (1,0)  The origin and (−1, 0)  The origin and (1,2)  The origin and (1,−3)  (1,2) and (3, 4)  (−2, −3), (2, 5)  (−1, 3) and (1, 6 )  (−3, −2) and (2, −2)  (0, 3) and (3, 0)  (−1, 0) and (0, 2)     "
},
{
  "id": "exercises-equations-of-lines-2",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-2",
  "type": "Exercise",
  "number": "4.1.2.2",
  "title": "",
  "body": "  Find the slope and equation of the line whose angle of inclination is θ and passes through the point P, if      , P = (1,1).     ,P = (0,1).     ,P = (0,1).     ,P = (0, 1).     , P = (1, 3).     , P = (1,−3).      "
},
{
  "id": "exercises-equations-of-lines-3",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-3",
  "type": "Exercise",
  "number": "4.1.2.3",
  "title": "",
  "body": "  Find the x -and y -intercepts and slope of the line given by , and draw the line.   "
},
{
  "id": "exercises-equations-of-lines-4",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-4",
  "type": "Exercise",
  "number": "4.1.2.4",
  "title": "",
  "body": "  Draw the triangle with vertices A(−2,4), B(1,−1) and C(6,2) and find the following.     Equations of the sides.    Equations of the medians.    Equations of the perpendicular bisectors of the sides.    Equation of the lines through the vertices parallel to the opposite sides.      "
},
{
  "id": "exercises-equations-of-lines-5",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-5",
  "type": "Exercise",
  "number": "4.1.2.5",
  "title": "",
  "body": "  Find the equation of the line that passes through (2, −1) and perpendicular to 3 x + 4 y = 6.   "
},
{
  "id": "exercises-equations-of-lines-6",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-6",
  "type": "Exercise",
  "number": "4.1.2.6",
  "title": "",
  "body": "  Suppose and are perpendicular lines intersecting at (−1, 2). If the angle of inclination of is 45°, then find an equation of .   "
},
{
  "id": "exercises-equations-of-lines-7",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-7",
  "type": "Exercise",
  "number": "4.1.2.7",
  "title": "",
  "body": "  Determine which of the following pair are parallel, perpendicular or neither.     2 x − y + 1 = 0 and 2 x + 4 y = 3   3 x −6 y +1 = 0 and x − 2 y = 3  2 x +5 y +3 = 0 and 5 x + 3 y +2 =0  y = 3 x +2 and 3 x + y = 2  2 x − 3 y = 5 and 3 x + 2 y − 3= 0   and 2 x +3 y −6 = 0     "
},
{
  "id": "exercises-equations-of-lines-8",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-8",
  "type": "Exercise",
  "number": "4.1.2.8",
  "title": "",
  "body": "  Let be the line passing through P( a, b ) and Q( b, a ) such that a ≠ b . Find an equation of the line in terms of a and b if      passes through P and perpendicular to      passes through (a,a) and parallel to       "
},
{
  "id": "exercises-equations-of-lines-9",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-9",
  "type": "Exercise",
  "number": "4.1.2.9",
  "title": "",
  "body": "  Let and be given by 2 x + 3 y −4= 0 and x +3 y −5= 0, respectively. A third line is perpendicular to . Find an equation of if the three lines intersect at the same point.   "
},
{
  "id": "exercises-equations-of-lines-10",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-10",
  "type": "Exercise",
  "number": "4.1.2.10",
  "title": "",
  "body": "  Dertermine the values(s) of which the line        is parallel to the x -axis.    is parallel to the y -axis.    passes through the origin    passes through the point (1,1).     In each case write the equation of the line.   "
},
{
  "id": "exercises-equations-of-lines-11",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-equations-of-lines-11",
  "type": "Exercise",
  "number": "4.1.2.11",
  "title": "",
  "body": "  Determine the values of a and b for which the two lines and      have exactly one intersection point.    are distinct parallel lines.    coincide.    are perpendicular.      "
},
{
  "id": "subsec-equations-of-lines-25",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-equations-of-lines-25",
  "type": "Checkpoint",
  "number": "4.1.15",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equations-of-lines-26",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-equations-of-lines-26",
  "type": "Checkpoint",
  "number": "4.1.16",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equations-of-lines-27",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-equations-of-lines-27",
  "type": "Checkpoint",
  "number": "4.1.17",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equations-of-lines-28",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-equations-of-lines-28",
  "type": "Checkpoint",
  "number": "4.1.18",
  "title": "",
  "body": " Add review "
},
{
  "id": "distance-between-a-point",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#distance-between-a-point",
  "type": "Figure",
  "number": "4.1.19",
  "title": "",
  "body": "     "
},
{
  "id": "thm-distance_between_a_point",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#thm-distance_between_a_point",
  "type": "Theorem",
  "number": "4.1.20",
  "title": "",
  "body": "  The distance between a point P( ) and a line L : ax + by + c = 0 is given by      "
},
{
  "id": "subsec-distance-between-a-point-and-11",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-distance-between-a-point-and-11",
  "type": "Example",
  "number": "4.1.21",
  "title": "",
  "body": "  Show that the origin and P(6,4) are equidistant from the line .    By equidistant we mean equal distance. So, we need to show d (O, L ) = d (P, L ).  To use the above formula, we first write the equation of the line L in the general form which is 3 x + 2 y –13 = 0. Thus, a =3, b =2 and c = –13.     and   Therefore, d (O, L ) = d (P, L) =   Thus, O(0,0) and P(6,4) are equidistant from the given line L .   "
},
{
  "id": "exercises-distance_between_a_point-1",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance_between_a_point-1",
  "type": "Exercise",
  "number": "4.1.3.1",
  "title": "",
  "body": "  Find the distance between the line L given by y = 2 x +3 and each of the following points.     The origin    (2, 3)    (1, 5)    ( −1, −1)      "
},
{
  "id": "exercises-distance_between_a_point-2",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance_between_a_point-2",
  "type": "Exercise",
  "number": "4.1.3.2",
  "title": "",
  "body": "  Suppose L is the line through (1, 2) and (3, 2). What is the distance between L and     The origin    (2, −3)    ( a , 0)    ( a , b )    ( a , 2)      "
},
{
  "id": "exercises-distance_between_a_point-3",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance_between_a_point-3",
  "type": "Exercise",
  "number": "4.1.3.3",
  "title": "",
  "body": "  Suppose L is the vertical line that crosses the x -axis at (5, 0). Find d (P, L ), when P is     The origin    (2, −4)    (0, b )    (5, b )    ( a , b )      "
},
{
  "id": "exercises-distance_between_a_point-4",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance_between_a_point-4",
  "type": "Exercise",
  "number": "4.1.3.4",
  "title": "",
  "body": "  Suppose L is the line that passes through (0, −3) and (4, 0). Find the distance between L and each of the following points    The origin  (1, 4)  (−1, 0)  (8, 3)  (0,1)  (4, −2)   (7, −4)     "
},
{
  "id": "exercises-distance_between_a_point-5",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance_between_a_point-5",
  "type": "Exercise",
  "number": "4.1.3.5",
  "title": "",
  "body": "  The vertices of ∆ABC are given below. Find the length of the side BC, the height of the altitude from vertex A to BC, and the area of the triangle when its vertices are     A(3, 4), B(2, 1), and C(6, 1)    A(3, 4), B(1, 1), and C(5, 2)      "
},
{
  "id": "exercises-distance_between_a_point-6",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#exercises-distance_between_a_point-6",
  "type": "Exercise",
  "number": "4.1.3.6",
  "title": "",
  "body": "  Consider the quadrilateral whose vertices are A(1,2), B(2,6), C(6,8) and D(5,4). Then,     Show that the quadrilateral is a parallelogram.    How long is the side AD?    What is the height of the altitude of the quadrilateral from vertex A to the side AD.    Determine the area of the quadrilateral.      "
},
{
  "id": "subsec-distance-between-a-point-and-13",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-distance-between-a-point-and-13",
  "type": "Checkpoint",
  "number": "4.1.22",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-distance-between-a-point-and-14",
  "level": "2",
  "url": "sec-distance-formula-and-equation-of.html#subsec-distance-between-a-point-and-14",
  "type": "Checkpoint",
  "number": "4.1.23",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-circles",
  "level": "1",
  "url": "sec-circles.html",
  "type": "Section",
  "number": "4.2",
  "title": "Circles",
  "body": " Circles   By the end of this section, you should     know the geometric definition of a circle.    be able to identify whether a given point is on, inside or outside a circle.    be able to construct equation of a circle.    be able to identify equations that represent circles    be able to find the center and radius of a circle and sketch its graph if its equation is given.    be able to identify whether a given circle and a line intersect at two points, one points or never intersect at all.    know the properties of a tangent line to a circle.    be able to find equation of a tangent line to a circle.       Definition of a Circle    A circle is the locus of points (set of points) in a plane each of which is equidistant from a fixed point in the plane. The fixed point is called the center of the circle and the constant distance is called its radius .    Definition 4.2 is illustrated by Figure 4.6 in which the center of the circle is denoted by ''C'' and its radius is denoted by r .     Figure 4.6 . Circle with center C, radius r  Observe that a circle is symmetric with respect its center. Based on the definition, a point P is on the circle if and only if its distance to C is r , that is | CP | = r . A point in the plane is said to be inside the circle if its distance to the center C is less than r . Similarly, a point in the plane is said to be outside the circle if its distance to C is greater than r . Moreover, a chord of the circle is a line segment whose endpoints are on the circle. A diameter is a chord of the circle through the center C. Consequently, C is the midpoint of a diameter and the length of a diameter is 2 r . For example, AB and QR are diameters of the circle in Figure 4.6.    Consider a circle of radius 5 whose center is at C(2,1). Determine whether each of the following points is on the circle, inside the circle or outside the circle:       The distance between a given point P( x , y ) and the center C(2,1) is given by   or We need to compare | PC | with the radius .  Note that | PC |  ,  and   Thus, P is on the circle if , inside the circle if | PC | and outside the circle if | PC | . So, we can use the square distance to answer the question. Thus, as     and    is on the circle, is inside the circle, and is outside the circle. Similarly, you can show that is inside the circle, is on the circle, and is outside the circle.        Suppose the center of a circle is and is a point on the circle. What is the radius of the circle?      Let and are endpoints of a diameter of a circle. Find the center and radius of the circle.      Consider a circle whose center is the origin and radius is. Determine whether or not the circle contains the following point.                                                  Consider a circle of radius 5 whose center is at . Determine whether each of the following points is on the circle, inside the circle or outside the circle:                                                  Add review   Add review   Add review    Equation of a Circle  We now construct an equation that the coordinates ( x , y ) of the points on the circle should satisfy. So, let P( x,y ) be any point on a circle of radius r and center C( h,k ) (see, Figure 4.7). Then, the definition of a circle requires that  |CP|= r   ⇒   or       (Standard equation of a circle with center ( h ,k) and radius r).      In particular, if the center is at origin, i.e., ( h,k ) = , the equation is      (Standard Equation of a circle of radius r centered at origin)          Figure 4.7 :(a) Center at C(h,k) ; (b) Center at origin    Find an equation of the circle with radius and center .    Using the standard equation of a circle in which the center ( h, k ) =  and radius r =  we obtain the equation         Find the equation of a circle with endpoints of a diameter at and .    The center of the circle C( h,k ) is the mid-point of the diameter. Hence, . Also, for its radius r , .  Thus, the equation of the circle is . That is,   .      Suppose and are points on a circle whose center is on x -axis. Find the equation of the circle.    We need to obtain the center and radius r of the circle to construct its equation. As the center is on x -axis, its second coordinate is . Therefore, let C( h ,0) be the center of the circle. Note that as both and are on the circle. So, from the first equality we get . Solving this for h we get . Hence, the center is at and . Therefore, the equation of the circle is   .      Determine whether the given equation represents a circle. If it does, identify its center and radius and sketch its graph.                       We need to rewrite each equation in standard form to identify its center and radius. We do this by completing the square on the x-terms and y-terms of the equation as follows:      (Grouping x-terms and y-terms)     (Adding and to both sides)   .  Comparing this with the standard equation of a circle, this is the equation of a circle with center ( h , k ) = (-1, 3) and radius r = . The graph of the circle is sketched in Figure 4.8 below.    Figure 4.8 .    Following the same steps as in (a), you can see that is equivalent to .  This is satisfied by the point only. The locus of this equation is considered as a point-circle, circle of zero radius (sometimes called degenerated circle).    Again following the same steps as in (a), you can see that is equivalent to .  Note that this does not represent a circle; in fact it has no locus at all (Why? ).          Consider an equation of the form     By completing the square you can show the following:     If , then the equation represents a circle with center and radius .    If , then the equation is satisfied by the point only. In this case the locus of the equation is called point-circle (circle of zero radius).    If , then the equation has no locus.       Exercise    Determine whether each of the following points is inside, outside or on the circle with equation .                              Find an equation of the circle whose endpoints of a diameter are and .      Determine an equation of a circle whose center is on y -axis and radius is .      Find an equation of the circle passing through and which has its center on the line .      Find the value(s) of k for which the equation represent a circle.      An equation of a circle is . If the radius of the circle is , then what is the coordinates of its center?      Find equation of the circle passing through and .      Find equation of the circle inscribed in the triangle with vertices ( , and .      In each of the following, check whether or not the given equation represents a circle. If the equation represents a circle, then identify its center and the length of its diameter.                                        Show that represents a circle of positive radius iff .      Add review   Add review   Add review    Intersection of a circle with a line and tangent line to a circle  The number of intersection points of a given line and a circle is at most two; that is, either no intersection point, or only one intersection point, or two intersection points. For instance, in Figure 4.9, the line has no intersection with the circle, has two intersection points with the circle, namely, and , and has only one intersection point with the circle, namely, P.  A line which intersects a circle at one and only one point is called a tangent line to the circle. In this case, the intersection point is called the point of tangency . Thus, a tangent line to the circle in Figure 4.9 and P is the point of tangency.     Figure 4.9 . Intersection of a line and circle  In Figure 4.9, observe that every point on are outside of the circle. Hence, d (C,Q) > r for every point Q on . Consequently, . On the other hand, there is a point on which is inside the circle. Hence,   For the tangent line the point of tangency P is on the circle implies that and P is the point on closest to C. Therefore, . This shows also that CP⊥ .  In general, given a circle of radius r with center C( h , k ) and a line l , by computing the distance d (C, l ) between C and l we can conclude the following.     If d (C, l ) > r , then the line does not intersect with the circle.    If d (C, l ) < r , then the line is a secant of the circle; that is, they have two intersection points.    If d (C, l ) = r , then l is a tangent line to the circle. The point of tangency is the point P on the line (and on the circle) such that CP ⊥ l  . This means the product of the slopes of l and CP must be .       Write the equation of the circle tangent to the x -axis at whose center is on the line .    The circle in the question is as in Figure 4.10.   Figure 4.10    Figure 4.10   Let C( h, k ) be the center of the circle. ( h, k ) is on the line ; and the circle is tangent to x-axis at P CP should be perpendicular to the x-axis.   and the radius is r  .  Hence, the circle is centered at with radius r  . Therefore, the equation of the circle is .      Suppose the line y=x is tangent to a circle at point P . If the center of the circle is on the x -axis, then what is the equation of the circle?    The circle in the question is as in Figure 4.11.     Figure 4.11 .  Let the center of the circle be C( h ,0). We need to find h . The slope of the line l : y=x is and l is perpendicular to CP. Hence the slope of CP is .  So, the slope of CP or .   The center of the circle is C ; and   Therefore, the equation of the circle is .     Exercise    Find the equation of the line tangent to the circle with the center at and point of tangency at .      The center of a circle is on the line and the line is tangent to the circle at . Find the center and radius of the circle.      Suppose two lines and are tangent to a circle at and , respectively. Find the equation of the circle.      Find an equation of the line tangent to the circle at       Find equation of the line through ( ) and tangent to the circle with equation .      Suppose P( ) and Q( ) are the endpoints of a diameter of a circle and L is the line tangent to the circle at Q.  Show that R( ) is on L .  Find the area of ∆PQR, when R is the point given in (a).        Add review   Add review   "
},
{
  "id": "def-definition-of-a-circle",
  "level": "2",
  "url": "sec-circles.html#def-definition-of-a-circle",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  A circle is the locus of points (set of points) in a plane each of which is equidistant from a fixed point in the plane. The fixed point is called the center of the circle and the constant distance is called its radius .   "
},
{
  "id": "subsec-definition-of-a-circle-7",
  "level": "2",
  "url": "sec-circles.html#subsec-definition-of-a-circle-7",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Consider a circle of radius 5 whose center is at C(2,1). Determine whether each of the following points is on the circle, inside the circle or outside the circle:       The distance between a given point P( x , y ) and the center C(2,1) is given by   or We need to compare | PC | with the radius .  Note that | PC |  ,  and   Thus, P is on the circle if , inside the circle if | PC | and outside the circle if | PC | . So, we can use the square distance to answer the question. Thus, as     and    is on the circle, is inside the circle, and is outside the circle. Similarly, you can show that is inside the circle, is on the circle, and is outside the circle.   "
},
{
  "id": "exercises-definition-of-a-circle-2",
  "level": "2",
  "url": "sec-circles.html#exercises-definition-of-a-circle-2",
  "type": "Exercise",
  "number": "4.2.1.1",
  "title": "",
  "body": "  Suppose the center of a circle is and is a point on the circle. What is the radius of the circle?   "
},
{
  "id": "exercises-definition-of-a-circle-3",
  "level": "2",
  "url": "sec-circles.html#exercises-definition-of-a-circle-3",
  "type": "Exercise",
  "number": "4.2.1.2",
  "title": "",
  "body": "  Let and are endpoints of a diameter of a circle. Find the center and radius of the circle.   "
},
{
  "id": "exercises-definition-of-a-circle-4",
  "level": "2",
  "url": "sec-circles.html#exercises-definition-of-a-circle-4",
  "type": "Exercise",
  "number": "4.2.1.3",
  "title": "",
  "body": "  Consider a circle whose center is the origin and radius is. Determine whether or not the circle contains the following point.                                               "
},
{
  "id": "exercises-definition-of-a-circle-5",
  "level": "2",
  "url": "sec-circles.html#exercises-definition-of-a-circle-5",
  "type": "Exercise",
  "number": "4.2.1.4",
  "title": "",
  "body": "  Consider a circle of radius 5 whose center is at . Determine whether each of the following points is on the circle, inside the circle or outside the circle:                                               "
},
{
  "id": "subsec-definition-of-a-circle-9",
  "level": "2",
  "url": "sec-circles.html#subsec-definition-of-a-circle-9",
  "type": "Checkpoint",
  "number": "4.2.3",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-definition-of-a-circle-10",
  "level": "2",
  "url": "sec-circles.html#subsec-definition-of-a-circle-10",
  "type": "Checkpoint",
  "number": "4.2.4",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-definition-of-a-circle-11",
  "level": "2",
  "url": "sec-circles.html#subsec-definition-of-a-circle-11",
  "type": "Checkpoint",
  "number": "4.2.5",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-a-circle-11",
  "level": "2",
  "url": "sec-circles.html#subsec-equation-of-a-circle-11",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": "  Find an equation of the circle with radius and center .    Using the standard equation of a circle in which the center ( h, k ) =  and radius r =  we obtain the equation      "
},
{
  "id": "subsec-equation-of-a-circle-12",
  "level": "2",
  "url": "sec-circles.html#subsec-equation-of-a-circle-12",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "  Find the equation of a circle with endpoints of a diameter at and .    The center of the circle C( h,k ) is the mid-point of the diameter. Hence, . Also, for its radius r , .  Thus, the equation of the circle is . That is,   .   "
},
{
  "id": "subsec-equation-of-a-circle-13",
  "level": "2",
  "url": "sec-circles.html#subsec-equation-of-a-circle-13",
  "type": "Example",
  "number": "4.2.8",
  "title": "",
  "body": "  Suppose and are points on a circle whose center is on x -axis. Find the equation of the circle.    We need to obtain the center and radius r of the circle to construct its equation. As the center is on x -axis, its second coordinate is . Therefore, let C( h ,0) be the center of the circle. Note that as both and are on the circle. So, from the first equality we get . Solving this for h we get . Hence, the center is at and . Therefore, the equation of the circle is   .   "
},
{
  "id": "subsec-equation-of-a-circle-14",
  "level": "2",
  "url": "sec-circles.html#subsec-equation-of-a-circle-14",
  "type": "Example",
  "number": "4.2.9",
  "title": "",
  "body": "  Determine whether the given equation represents a circle. If it does, identify its center and radius and sketch its graph.                       We need to rewrite each equation in standard form to identify its center and radius. We do this by completing the square on the x-terms and y-terms of the equation as follows:      (Grouping x-terms and y-terms)     (Adding and to both sides)   .  Comparing this with the standard equation of a circle, this is the equation of a circle with center ( h , k ) = (-1, 3) and radius r = . The graph of the circle is sketched in Figure 4.8 below.    Figure 4.8 .    Following the same steps as in (a), you can see that is equivalent to .  This is satisfied by the point only. The locus of this equation is considered as a point-circle, circle of zero radius (sometimes called degenerated circle).    Again following the same steps as in (a), you can see that is equivalent to .  Note that this does not represent a circle; in fact it has no locus at all (Why? ).      "
},
{
  "id": "subsec-equation-of-a-circle-15",
  "level": "2",
  "url": "sec-circles.html#subsec-equation-of-a-circle-15",
  "type": "Remark",
  "number": "4.2.10",
  "title": "",
  "body": "   Consider an equation of the form     By completing the square you can show the following:     If , then the equation represents a circle with center and radius .    If , then the equation is satisfied by the point only. In this case the locus of the equation is called point-circle (circle of zero radius).    If , then the equation has no locus.     "
},
{
  "id": "exercises-exercise-2",
  "level": "2",
  "url": "sec-circles.html#exercises-exercise-2",
  "type": "Exercise",
  "number": "4.2.2.1",
  "title": "",
  "body": "  Determine whether each of the following points is inside, outside or on the circle with equation .                           "
},
{
  "id": "exercises-exercise-3",
  "level": "2",
  "url": "sec-circles.html#exercises-exercise-3",
  "type": "Exercise",
  "number": "4.2.2.2",
  "title": "",
  "body": "  Find an equation of the circle whose endpoints of a diameter are and .   "
},
{
  "id": "exercises-exercise-4",
  "level": "2",
  "url": "sec-circles.html#exercises-exercise-4",
  "type": "Exercise",
  "number": "4.2.2.3",
  "title": "",
  "body": "  Determine an equation of a circle whose center is on y -axis and radius is .   "
},
{
  "id": "exercises-exercise-5",
  "level": "2",
  "url": "sec-circles.html#exercises-exercise-5",
  "type": "Exercise",
  "number": "4.2.2.4",
  "title": "",
  "body": "  Find an equation of the circle passing through and which has its center on the line .   "
},
{
  "id": "exercises-exercise-6",
  "level": "2",
  "url": "sec-circles.html#exercises-exercise-6",
  "type": "Exercise",
  "number": "4.2.2.5",
  "title": "",
  "body": "  Find the value(s) of k for which the equation represent a circle.   "
},
{
  "id": "exercises-exercise-7",
  "level": "2",
  "url": "sec-circles.html#exercises-exercise-7",
  "type": "Exercise",
  "number": "4.2.2.6",
  "title": "",
  "body": "  An equation of a circle is . If the radius of the circle is , then what is the coordinates of its center?   "
},
{
  "id": "exercises-exercise-8",
  "level": "2",
  "url": "sec-circles.html#exercises-exercise-8",
  "type": "Exercise",
  "number": "4.2.2.7",
  "title": "",
  "body": "  Find equation of the circle passing through and .   "
},
{
  "id": "exercises-exercise-9",
  "level": "2",
  "url": "sec-circles.html#exercises-exercise-9",
  "type": "Exercise",
  "number": "4.2.2.8",
  "title": "",
  "body": "  Find equation of the circle inscribed in the triangle with vertices ( , and .   "
},
{
  "id": "exercises-exercise-10",
  "level": "2",
  "url": "sec-circles.html#exercises-exercise-10",
  "type": "Exercise",
  "number": "4.2.2.9",
  "title": "",
  "body": "  In each of the following, check whether or not the given equation represents a circle. If the equation represents a circle, then identify its center and the length of its diameter.                                     "
},
{
  "id": "exercises-exercise-11",
  "level": "2",
  "url": "sec-circles.html#exercises-exercise-11",
  "type": "Exercise",
  "number": "4.2.2.10",
  "title": "",
  "body": "  Show that represents a circle of positive radius iff .   "
},
{
  "id": "subsec-equation-of-a-circle-17",
  "level": "2",
  "url": "sec-circles.html#subsec-equation-of-a-circle-17",
  "type": "Checkpoint",
  "number": "4.2.11",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-a-circle-18",
  "level": "2",
  "url": "sec-circles.html#subsec-equation-of-a-circle-18",
  "type": "Checkpoint",
  "number": "4.2.12",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-a-circle-19",
  "level": "2",
  "url": "sec-circles.html#subsec-equation-of-a-circle-19",
  "type": "Checkpoint",
  "number": "4.2.13",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-intersection-of-a-circle-with-10",
  "level": "2",
  "url": "sec-circles.html#subsec-intersection-of-a-circle-with-10",
  "type": "Example",
  "number": "4.2.14",
  "title": "",
  "body": "  Write the equation of the circle tangent to the x -axis at whose center is on the line .    The circle in the question is as in Figure 4.10.   Figure 4.10    Figure 4.10   Let C( h, k ) be the center of the circle. ( h, k ) is on the line ; and the circle is tangent to x-axis at P CP should be perpendicular to the x-axis.   and the radius is r  .  Hence, the circle is centered at with radius r  . Therefore, the equation of the circle is .   "
},
{
  "id": "subsec-intersection-of-a-circle-with-11",
  "level": "2",
  "url": "sec-circles.html#subsec-intersection-of-a-circle-with-11",
  "type": "Example",
  "number": "4.2.15",
  "title": "",
  "body": "  Suppose the line y=x is tangent to a circle at point P . If the center of the circle is on the x -axis, then what is the equation of the circle?    The circle in the question is as in Figure 4.11.     Figure 4.11 .  Let the center of the circle be C( h ,0). We need to find h . The slope of the line l : y=x is and l is perpendicular to CP. Hence the slope of CP is .  So, the slope of CP or .   The center of the circle is C ; and   Therefore, the equation of the circle is .   "
},
{
  "id": "exercises-intersection-of-a-circle-2",
  "level": "2",
  "url": "sec-circles.html#exercises-intersection-of-a-circle-2",
  "type": "Exercise",
  "number": "4.2.3.1",
  "title": "",
  "body": "  Find the equation of the line tangent to the circle with the center at and point of tangency at .   "
},
{
  "id": "exercises-intersection-of-a-circle-3",
  "level": "2",
  "url": "sec-circles.html#exercises-intersection-of-a-circle-3",
  "type": "Exercise",
  "number": "4.2.3.2",
  "title": "",
  "body": "  The center of a circle is on the line and the line is tangent to the circle at . Find the center and radius of the circle.   "
},
{
  "id": "exercises-intersection-of-a-circle-4",
  "level": "2",
  "url": "sec-circles.html#exercises-intersection-of-a-circle-4",
  "type": "Exercise",
  "number": "4.2.3.3",
  "title": "",
  "body": "  Suppose two lines and are tangent to a circle at and , respectively. Find the equation of the circle.   "
},
{
  "id": "exercises-intersection-of-a-circle-5",
  "level": "2",
  "url": "sec-circles.html#exercises-intersection-of-a-circle-5",
  "type": "Exercise",
  "number": "4.2.3.4",
  "title": "",
  "body": "  Find an equation of the line tangent to the circle at    "
},
{
  "id": "exercises-intersection-of-a-circle-6",
  "level": "2",
  "url": "sec-circles.html#exercises-intersection-of-a-circle-6",
  "type": "Exercise",
  "number": "4.2.3.5",
  "title": "",
  "body": "  Find equation of the line through ( ) and tangent to the circle with equation .   "
},
{
  "id": "exercises-intersection-of-a-circle-7",
  "level": "2",
  "url": "sec-circles.html#exercises-intersection-of-a-circle-7",
  "type": "Exercise",
  "number": "4.2.3.6",
  "title": "",
  "body": "  Suppose P( ) and Q( ) are the endpoints of a diameter of a circle and L is the line tangent to the circle at Q.  Show that R( ) is on L .  Find the area of ∆PQR, when R is the point given in (a).     "
},
{
  "id": "subsec-intersection-of-a-circle-with-13",
  "level": "2",
  "url": "sec-circles.html#subsec-intersection-of-a-circle-with-13",
  "type": "Checkpoint",
  "number": "4.2.16",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-intersection-of-a-circle-with-14",
  "level": "2",
  "url": "sec-circles.html#subsec-intersection-of-a-circle-with-14",
  "type": "Checkpoint",
  "number": "4.2.17",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-parabolas",
  "level": "1",
  "url": "sec-parabolas.html",
  "type": "Section",
  "number": "4.3",
  "title": "Parabolas",
  "body": " Parabolas       Objectives   By the end of this section, you should:     Know the geometric definition of a parabola.    Know the meaning of vertex, focus, directrix, and axis of a parabola.    Be able to find equation of a parabola whose axis is horizontal or vertical.    Be able to identify equations representing sec-parabolas.    Be able to find the vertex, focus, and directrix of a parabola and sketch the parabola.      Definition of a Parabola    Let L be a fixed line and F be a fixed point not on the line, both lying on the plane. A parabola is a set of points equidistant from L and F. The line L is called the directrix and the fixed point F is called the focus of the parabola.     This definition is illustrated by Figure 4.12.   Note that the point halfway between the focus F and directrix is on the parabola; it is called the denoted by .    VF| is called the .    The line through F perpendicular to the directrix is called the of the parabola. It is the line of symmetry for the parabola.    The chord through perpendicular to the axis is called .    The length of the latus rectum, i.e, , is called .      Parabola illustration    Letting , you may show that ; i.e., focal width is times focal length.  If is any point on the parabola, then by the definition, the distance of from the directrix is equal to the distance between and the focus . This is used to determine an equation of a parabola. To do this, we consider first the cases when the axis of the parabola is parallel to one of the coordinate axes.     Use the definition of parabola and the given information to answer or solve each of the following problems.     Suppose the focal length of a parabola is , for some > 0. Then, show that the focal width (length of the latus rectum) of the parabola is .    Suppose the vertex of a parabola is the origin and its focus is . Then,     (a) What is the focal length of the parabola.    (b) Find the equations of the axis and directrix of the parabola.    (c) Find the endpoints of the latus rectum of the parabola.    (d) Determine whether each of the following point is on the parabola or not.     (Note: By the definition, a point is on the parabola iff its distances from the focus and from the directrix are equal. )       Suppose the vertex of a parabola is and its directrix is the line . Then,     Find the equation of the axis of the parabola.    Find the focus of the parabola.    Find the length and endpoints of the latus rectum of the parabola.    Determine whether each of the following point is on the parabola or not.               Add review   Add review    Equation of Parabolas   I: Equation of a parabola whose axis is parallel to the -axis :  A parabola whose axis is parallel to -axis is called . A vertical parabola is either open upward (as in Figure 4.13 (a) ) or open downward (as in Figure 4.13 (b)).     Let be the distance from vertex to the focus of the parabola, i.e., . Then, by the definition, is located units above if the parabola opens upward and it is located units below if the parabola opens downward as indicated on Figure 4.13(a) and (b), respectively. To determine the desired equation, we first consider the case when the parabola opens upward.  Therefore, considering a vertical parabola with vertex that opens upward (Figure 4.13a), its focus is at . The equation of its directrix is   Then, for any point on the parabola, is equal to the distance between P and the directrix if and only if     Upon simplification, this becomes         called standard equation of a vertical parabola, vertex , focal length open upward.      In particular, if the vertex of a vertical parabola is at origin, i.e., and opens upward, then its equation is        ( In this case, its focus is at , and its directrix is .)     If a vertical parabola with vertex opens downward, then its directrix is above the parabola and its focus lies below the vertex (see Figure 4.13(b). In this case, the focus is at , and its directrix is given by . Moreover, following the same steps as above , the equation of this parabola becomes         ( Standard equation of a vertical parabola, open downward, vertex , and focal length )      In particular, if the vertex of a vertical parabola is at origin, i.e., and opens downward, then it's equation is      ( In this case, its focus is at ), and its directrix is )     Find the vertex, focal length, focus and directrix of the parabola .    The given equation, , is the standard equation of the parabola with vertex at origin and ⇒ its focal length is = . Since the parabola opens upward, its focus is units above its vertex ⇒ its focus is at ; and its directrix is horizontal line units below its vertex its directrix is = . You may sketch this parabola.         If a parabola opens upward and the endpoints of its latus rectum are at and , then find the equation of the parabola, its directrix and sketch it.    Since the focus of the parabola is at the midpoint of its latus rectum , we have , and focal width  focal length Moreover, as the parabola opens upward its vertex is units below its focus. That is, Therefore, the equation of the parabola is   And its directrix is horizontal line units below its vertex, which is .  The parabola is sketch in the Figure 4.14 .        II: Equation of a parabola whose axis is parallel to the -axis .  A parabola whose axis is parallel to -axis is called . Such parabola opens either to the right or to the left as shown in Figure 4.15 (a) and (b), respectively.   horizontal parabola   The equations of such sec-parabolas can be obtained by interchanging the role of and in the equations of the sec-parabolas discussed previously. These equations are stated below. In both cases, let the vertex of the parabola be at .     If a horizontal parabola (as in Fig.4.15(a) ), then its focus is to the right of at , its directrix is , and its equation is       If a parabola (as in Figure 4.15 (b) ), then its focus is to the left of at , its directrix is , and its equation is:       If the vertices of these sec-parabolas are at the origin , then you can obtain their corresponding equations by setting and in the above equations.       Find the focus and directrix of the parabola and sketch its graph.    The equation is ; and comparing this with the above equation, it is an equation of a parabola whose vertex is at axis of symmetry is the x-axis, open to the left and , i.e., . Thus, the focus is and its directrix is Its graph is sketched in Figure 4.16.         Find the focus and directrix of the parabola and sketch it.    The equation is . (Now complete the square of y-terms)  ⇒   ⇒   ⇒   This is equation of a parabola with vertex at open to the left and focal length , where . Therefore, its focus is   , and directrix . The parabola is sketched in Figure 4.17.        An equation given as:   or     may represent a parabola whose axis is parallel to the -axis or parallel to the -axis, respectively. The vertex, focal length and focus for such sec-parabolas can be identified after converting the equations into one of the standard forms by completing the square.     For questions 1 to 8, find an equation of the parabola with the given properties and sketch its graph.   Focus and directrix   2. Focus and directrix   3. Focus and directrix   4. Focus and directrix   5. Vertex and Focus .  6. Vertex and Focus   7. Vertex and directrix   8. Vertex and directrix      For questions 9 to 17 find the vertex, focus and directrix of the parabola and sketch it.   9.   12.   15.     10.   13.   16.     11.   14.      17.   18. Find an equation of the parabola that has a vertical axis, its vertex at and passing through   19. The vertex and endpoints of the latus rectum of the parabola forms a triangle. Find the area of the triangle.  20. P is a point on a parabola whose focus is at and directrix is parallel to -axis.  (a) Find an equation of the parabola, its vertex and directrix.  (b) Determine the distance from P to the directrix.  21. An iron wire bent in the shape of a parabola has latus rectum of length 60cm. What is its focal length?  22. A cross-section of a parabolic reflector is shown in the figure below. A bulb is located at the focus and the opening at the focus, . What is the diameter of the opening, from the vertex?        Add review   Add review   Add review   "
},
{
  "id": "sec-parabolas-3",
  "level": "2",
  "url": "sec-parabolas.html#sec-parabolas-3",
  "type": "Objectives",
  "number": "4.3",
  "title": "Objectives",
  "body": " Objectives   By the end of this section, you should:     Know the geometric definition of a parabola.    Know the meaning of vertex, focus, directrix, and axis of a parabola.    Be able to find equation of a parabola whose axis is horizontal or vertical.    Be able to identify equations representing sec-parabolas.    Be able to find the vertex, focus, and directrix of a parabola and sketch the parabola.    "
},
{
  "id": "def-definition-of-a-parabola",
  "level": "2",
  "url": "sec-parabolas.html#def-definition-of-a-parabola",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  Let L be a fixed line and F be a fixed point not on the line, both lying on the plane. A parabola is a set of points equidistant from L and F. The line L is called the directrix and the fixed point F is called the focus of the parabola.   "
},
{
  "id": "exercises-definition-of-a-parabola-1",
  "level": "2",
  "url": "sec-parabolas.html#exercises-definition-of-a-parabola-1",
  "type": "Exercise",
  "number": "4.3.1.1",
  "title": "",
  "body": "  Use the definition of parabola and the given information to answer or solve each of the following problems.     Suppose the focal length of a parabola is , for some > 0. Then, show that the focal width (length of the latus rectum) of the parabola is .    Suppose the vertex of a parabola is the origin and its focus is . Then,     (a) What is the focal length of the parabola.    (b) Find the equations of the axis and directrix of the parabola.    (c) Find the endpoints of the latus rectum of the parabola.    (d) Determine whether each of the following point is on the parabola or not.     (Note: By the definition, a point is on the parabola iff its distances from the focus and from the directrix are equal. )       Suppose the vertex of a parabola is and its directrix is the line . Then,     Find the equation of the axis of the parabola.    Find the focus of the parabola.    Find the length and endpoints of the latus rectum of the parabola.    Determine whether each of the following point is on the parabola or not.            "
},
{
  "id": "subsec-definition-of-a-parabola-7",
  "level": "2",
  "url": "sec-parabolas.html#subsec-definition-of-a-parabola-7",
  "type": "Checkpoint",
  "number": "4.3.2",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-definition-of-a-parabola-8",
  "level": "2",
  "url": "sec-parabolas.html#subsec-definition-of-a-parabola-8",
  "type": "Checkpoint",
  "number": "4.3.3",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-parabolas-2",
  "level": "2",
  "url": "sec-parabolas.html#subsec-equation-of-parabolas-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "I: Equation of a parabola whose axis is parallel to the -axis "
},
{
  "id": "subsec-equation-of-parabolas-17",
  "level": "2",
  "url": "sec-parabolas.html#subsec-equation-of-parabolas-17",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Find the vertex, focal length, focus and directrix of the parabola .    The given equation, , is the standard equation of the parabola with vertex at origin and ⇒ its focal length is = . Since the parabola opens upward, its focus is units above its vertex ⇒ its focus is at ; and its directrix is horizontal line units below its vertex its directrix is = . You may sketch this parabola.      "
},
{
  "id": "subsec-equation-of-parabolas-18",
  "level": "2",
  "url": "sec-parabolas.html#subsec-equation-of-parabolas-18",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "  If a parabola opens upward and the endpoints of its latus rectum are at and , then find the equation of the parabola, its directrix and sketch it.    Since the focus of the parabola is at the midpoint of its latus rectum , we have , and focal width  focal length Moreover, as the parabola opens upward its vertex is units below its focus. That is, Therefore, the equation of the parabola is   And its directrix is horizontal line units below its vertex, which is .  The parabola is sketch in the Figure 4.14 .      "
},
{
  "id": "subsec-equation-of-parabolas-24",
  "level": "2",
  "url": "sec-parabolas.html#subsec-equation-of-parabolas-24",
  "type": "Example",
  "number": "4.3.6",
  "title": "",
  "body": "  Find the focus and directrix of the parabola and sketch its graph.    The equation is ; and comparing this with the above equation, it is an equation of a parabola whose vertex is at axis of symmetry is the x-axis, open to the left and , i.e., . Thus, the focus is and its directrix is Its graph is sketched in Figure 4.16.      "
},
{
  "id": "subsec-equation-of-parabolas-25",
  "level": "2",
  "url": "sec-parabolas.html#subsec-equation-of-parabolas-25",
  "type": "Example",
  "number": "4.3.7",
  "title": "",
  "body": "  Find the focus and directrix of the parabola and sketch it.    The equation is . (Now complete the square of y-terms)  ⇒   ⇒   ⇒   This is equation of a parabola with vertex at open to the left and focal length , where . Therefore, its focus is   , and directrix . The parabola is sketched in Figure 4.17.      "
},
{
  "id": "subsec-equation-of-parabolas-26",
  "level": "2",
  "url": "sec-parabolas.html#subsec-equation-of-parabolas-26",
  "type": "Remark",
  "number": "4.3.8",
  "title": "",
  "body": " An equation given as:   or     may represent a parabola whose axis is parallel to the -axis or parallel to the -axis, respectively. The vertex, focal length and focus for such sec-parabolas can be identified after converting the equations into one of the standard forms by completing the square.  "
},
{
  "id": "subsec-equation-of-parabolas-27",
  "level": "2",
  "url": "sec-parabolas.html#subsec-equation-of-parabolas-27",
  "type": "Checkpoint",
  "number": "4.3.9",
  "title": "",
  "body": "  For questions 1 to 8, find an equation of the parabola with the given properties and sketch its graph.   Focus and directrix   2. Focus and directrix   3. Focus and directrix   4. Focus and directrix   5. Vertex and Focus .  6. Vertex and Focus   7. Vertex and directrix   8. Vertex and directrix      For questions 9 to 17 find the vertex, focus and directrix of the parabola and sketch it.   9.   12.   15.     10.   13.   16.     11.   14.      17.   18. Find an equation of the parabola that has a vertical axis, its vertex at and passing through   19. The vertex and endpoints of the latus rectum of the parabola forms a triangle. Find the area of the triangle.  20. P is a point on a parabola whose focus is at and directrix is parallel to -axis.  (a) Find an equation of the parabola, its vertex and directrix.  (b) Determine the distance from P to the directrix.  21. An iron wire bent in the shape of a parabola has latus rectum of length 60cm. What is its focal length?  22. A cross-section of a parabolic reflector is shown in the figure below. A bulb is located at the focus and the opening at the focus, . What is the diameter of the opening, from the vertex?      "
},
{
  "id": "subsec-equation-of-parabolas-28",
  "level": "2",
  "url": "sec-parabolas.html#subsec-equation-of-parabolas-28",
  "type": "Checkpoint",
  "number": "4.3.10",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-parabolas-29",
  "level": "2",
  "url": "sec-parabolas.html#subsec-equation-of-parabolas-29",
  "type": "Checkpoint",
  "number": "4.3.11",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-parabolas-30",
  "level": "2",
  "url": "sec-parabolas.html#subsec-equation-of-parabolas-30",
  "type": "Checkpoint",
  "number": "4.3.12",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-ellipses",
  "level": "1",
  "url": "sec-ellipses.html",
  "type": "Section",
  "number": "4.4",
  "title": "Ellipses",
  "body": " Ellipses   By the end of this section, you should     know the geometric definition of an ellipse.    know the meaning of the center, vertices, foci, major axis and minor axis of an ellipse.    be able to find equation of an ellipse whose major axis is horizontal or vertical.    be able to identify equations representing ellipses.    be able to find the center, foci and vertices of an ellipse and sketch the ellipse.       Definition of an Ellipse    Let F and F ′ be two fixed points in the plane. An ellipse is the locus or set of all points in the plane such that the sum of the distances from each point to F and F ′ is constant. That is, a point P is on the ellipse if and only if |PF|+ |PF ′ | = constant. (See Figure 4.18).    The two fixed points, F and F ′ , are called foci (singular- focus ) of the ellipse.     Figure 4.18 : Ellipse: |PF| + |PF ′ |= constant  Note also the following terminologies and relationships about ellipse.     The midpoint C between the foci F ′ and F is called the center of the ellipse.    The longest diameter (longest chord) V ′ V through F ′ and F is called the major axis of the ellipse; and the chord BB ′ through C which is perpendicular to V ′ V is called minor axis .    The endpoints of the major axis, V ′ and V, are called the vertices of the ellipse.    From the definition, |V ′ F ′ | + |V ′ F| = |VF ′ | + |VF| ⇒ |V ′ F ′ | = |VF| ⇒ |CV ′ | = |CV|. Hence, C is the midpoint of V ′ V. We denote the length of the major axis by 2 a . That is, |CV| = a .  ⇒ |VF ′ | + |VF| = |V ′ V| = 2 a .  ⇒ |PF ′ | + |PF| = 2 a , for any point P on the ellipse.    We let | BC | = b . (You can show that C is the midpoint of BB ′ . So, |B ′ C| = b. )    The distance from the center C to a focus F (or F ′ ) is denoted by c , i.e., |CF| = c = |CF ′ |.    Now, since |BF ′ |+ |BF| = 2 a and BC is a perpendicular bisector of F ′ F, we obtain that |BF ′ | = |BF|= a . Hence, using the Pythagoras Theorem on ∆BCF, we obtain   or .  ( Note:  a ≥ b . If a=b , the ellipse would be a circle with radius r =a =b ).    The ratio of the distance between the two foci to the length of the major axis is called the eccentricity of the ellipse, and denoted by e. That is,   . (Note that 0 < e < 1 because 0 < c < a )      Exercise   Use the definition of ellipse and the given information to answer or solve each of the following problems.     Suppose F ′ and F are the foci of an ellipse and B ′ and B are the endpoints of the minor axis of the ellipse, as in Figure 4.18. Then, show that each of the followings hold.     ∆BF ′ F is isosceles triangle.    The quadrilateral BF ′ B ′ F is a rhombus.    FF ′ is perpendicular bisector of BB ′ ; and also BB ′ is perpendicular bisector of FF ′.     If the length of the major axis is 2 a , length of minor axis is |BB ′ | = 2 b , and |F ′ F|=2 c , for some positive a , b , c , then     |BF| = a                  Suppose the vertices of an ellipse are and its foci are .     Where is the center of the ellipse?    Find the endpoints of its minor axis.    Find the lengths of the major and minor axes.    Determine whether each of the following points is on the ellipse or not.                                  (Note: By the definition, a point is on the ellipse iff the sum of its distances to the two foci is 2 a )      Suppose the endpoints of the major axis of an ellipse are and the end points of its minor axis are .     Where is the center of the ellipse?    Find the coordinates of the foci.    Determine whether each of the following points is on the ellipse or not.                                 Suppose the endpoints of the minor axis of an ellipse are and its eccentricity is . Find the coordinates of (a) the center, (b) the foci , (c) the vertices of the ellipse.      Add review   Add review    Equation of an Ellipse   In order to obtain the simplest equation for an ellipse, we place the ellipse at standard position. An ellipse is said to be at standard position when its center is at the origin and its major axis lies on either the x -axis or y -axis.    Equation of an ellipse at standard position  There are two possible situations, namely, when the major axis lies on x -axis (called horizontal ellipse) and when the major axis lies on y -axis (called vertical ellipse). We first consider a horizontal ellipse as in Figure 4.19     Figure 4.19 : Horizontal ellipse at standard position  Let the center of the ellipse be at the origin, C(0,0) and foci at F′(− c ,0), F ( c ,0) and vertices at (− a ,0) and ( a ,0) (see Figure 4.19). Then, a point P( x,y ) is on the ellipse iff  |PF′| + |PF| = 2 a .  That is,   or   Squaring both sides we get     which simplifies to   Again squaring both sides, we get   Which becomes   Now recalling that and dividing both sides by , the equation becomes     (Equation of horizontal ellipse at standard position, vertices (± a , 0), foci (± c , 0), where )    For a vertical ellipse at standard position, the same procedure gives the equation     (Equation of vertical ellipse at standard position, vertices (0,± a ), foci (0,± c ), where )     Note : Notice that here, for vertical ellipse, the larger denominator is under .    Locate the vertices and foci of and sketch its graph.    Dividing both sides of the equation by 144, we get:   or   This is equation of a vertical ellipse at standard position with a= 4, so vertices at (0, ±4), and b= 3; i.e., endpoints of the minor axis at . Since , the foci are . The graph is sketched in Figure 4.20.     Figure 4.20 :      Equation of shifted Ellipses  When an ellipse is not at standard position but with center at a point C( h,k ), then we can still obtain its equation by considering translation of the xy -axes in such a way that its origin translated to the point C( h , k ). This result in a new X ′ Y ′ coordinate system whose origin O′ is at C( h,k ) so that the ellipse is at standard position relative to the X ′ Y ′ system( see, Figure 4.21)    (a) horizontal ellipse, center C(h,k)    (b) vertical ellipse, center C(h,k)    Figure 4.21 : (a) horizontal ellipse, center C(h,k); (b) vertical ellipse, center C(h,k)  Consequently, the equation of the horizontal and vertical ellipses relative to the new X ′ Y ′ coordinate system with ( x ′, y ′) coordinate points are   and , .........(I) respectively.  Since the origin of the new coordinate system is at the point ( h,k ) of the xy -coordinate system, the relationship between a point ( x,y ) of the xy -coordinate system and ( x ′ ,y ′) of the new coordinate system is given by ( x, y ) = ( x ′ ,y ′) + ( h, k ). That is,   and   Thus, in the original xy -coordinate system the equations of the horizontal and vertical ellipses with center C( h, k ), lengths of major axis = 2 a and minor axis = 2 b are, respectively, given by     (Standard equation of horizontal ellipse with center C( h,k ) )    and     (Standard equation of vertical ellipse with center C( h,k ) )      The endpoints of the major axis of an ellipse are at and and its eccentricity is . Find the equation of the ellipse and its foci.    The given vertices are at and implies that ; and the center C( h,k ) is the midpoint of . Moreover, eccentricity . Hence, . Note that the major axis V'V is horizontal. Therefore, using the standard equation of a horizontal ellipse, the equation of the ellipse is     Now, as the center ( h,k ) = , c =3 and V′V is horizontal, the foci are at ( h ± c , k ) = .  That is, the foci are at F ′ (-1, 4) and F(5, 4).  Moreover, the endpoints of major axis are at and   The graph of the ellipse is sketched in Figure 4.22.     Figure 4.22 : Example ellipse      Find the center, foci and vertices of and sketch its graph    Group the x-terms of the equation and complete the square:      (divide both sides by 4)     This is equation of a vertical ellipse (major axis parallel to the y-axis), center C=( h,k ) = ,     Thus, foci : F′ and F ,  Vertices: V = , V′= ;  Endpoints of minor axis: B= , B′= ;  The graph of the ellipse is sketched in Figure 4.23.     Figure 4.23 :       Consider the equation: ,  when A and C have the same sign. So, without lose of generality, let A >0 and C >0.  By completing the squares you can show that this equation is equivalent to     From this you can conclude that the given equation represents:-     an ellipse with center if .    If ,the equation is satisfied by the point only. In this case, the locus of the equation is called a point-ellipse (degenerate ellipse).    If , then the equation has no locus.       Exercise   For questions 1 to 13, find an equation of the ellipse with the given properties and sketch its graph.     Foci at and a vertex at       A focus at and vertices at       Foci at and a vertex at       Foci at and a vertex at       Center at , one focus at and one vertex at       Foci at and the length of the major axis is .      Foci at and the length of the minor axis is .      The distance between its foci is and the endpoints of its minor axis are and .      Vertices at and the ellipse passes through .      Center at , a vertex at , and one of the endpoints of the minor axis is .      The ellipse passes through and with center at origin.      The endpoints of the major axis are and , and the ellipse passes through the origin      The endpoints of the minor axis are and , and the ellipse passes through the origin  For questions 14 to 22 find the center, foci and vertices of the ellipse having the given equation and sketch its graph.                                                                     Consider the equation . Find all values of F such that the graph of the equation  (a) is an ellipse. (b) is a point. (c) consists of no points at all.       Add review   Add review   Add review   "
},
{
  "id": "def-ellipse",
  "level": "2",
  "url": "sec-ellipses.html#def-ellipse",
  "type": "Definition",
  "number": "4.4.1",
  "title": "",
  "body": "  Let F and F ′ be two fixed points in the plane. An ellipse is the locus or set of all points in the plane such that the sum of the distances from each point to F and F ′ is constant. That is, a point P is on the ellipse if and only if |PF|+ |PF ′ | = constant. (See Figure 4.18).   "
},
{
  "id": "exercises-ellipse-3",
  "level": "2",
  "url": "sec-ellipses.html#exercises-ellipse-3",
  "type": "Exercise",
  "number": "4.4.1.1",
  "title": "",
  "body": "  Suppose F ′ and F are the foci of an ellipse and B ′ and B are the endpoints of the minor axis of the ellipse, as in Figure 4.18. Then, show that each of the followings hold.     ∆BF ′ F is isosceles triangle.    The quadrilateral BF ′ B ′ F is a rhombus.    FF ′ is perpendicular bisector of BB ′ ; and also BB ′ is perpendicular bisector of FF ′.     If the length of the major axis is 2 a , length of minor axis is |BB ′ | = 2 b , and |F ′ F|=2 c , for some positive a , b , c , then     |BF| = a               "
},
{
  "id": "exercises-ellipse-4",
  "level": "2",
  "url": "sec-ellipses.html#exercises-ellipse-4",
  "type": "Exercise",
  "number": "4.4.1.2",
  "title": "",
  "body": "  Suppose the vertices of an ellipse are and its foci are .     Where is the center of the ellipse?    Find the endpoints of its minor axis.    Find the lengths of the major and minor axes.    Determine whether each of the following points is on the ellipse or not.                                  (Note: By the definition, a point is on the ellipse iff the sum of its distances to the two foci is 2 a )   "
},
{
  "id": "exercises-ellipse-5",
  "level": "2",
  "url": "sec-ellipses.html#exercises-ellipse-5",
  "type": "Exercise",
  "number": "4.4.1.3",
  "title": "",
  "body": "  Suppose the endpoints of the major axis of an ellipse are and the end points of its minor axis are .     Where is the center of the ellipse?    Find the coordinates of the foci.    Determine whether each of the following points is on the ellipse or not.                              "
},
{
  "id": "exercises-ellipse-6",
  "level": "2",
  "url": "sec-ellipses.html#exercises-ellipse-6",
  "type": "Exercise",
  "number": "4.4.1.4",
  "title": "",
  "body": "  Suppose the endpoints of the minor axis of an ellipse are and its eccentricity is . Find the coordinates of (a) the center, (b) the foci , (c) the vertices of the ellipse.   "
},
{
  "id": "subsec-definition-of-an-ellipse-9",
  "level": "2",
  "url": "sec-ellipses.html#subsec-definition-of-an-ellipse-9",
  "type": "Checkpoint",
  "number": "4.4.2",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-definition-of-an-ellipse-10",
  "level": "2",
  "url": "sec-ellipses.html#subsec-definition-of-an-ellipse-10",
  "type": "Checkpoint",
  "number": "4.4.3",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsubsec-equation-of-an-ellipse-at-standard-position-19",
  "level": "2",
  "url": "sec-ellipses.html#subsubsec-equation-of-an-ellipse-at-standard-position-19",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": "  Locate the vertices and foci of and sketch its graph.    Dividing both sides of the equation by 144, we get:   or   This is equation of a vertical ellipse at standard position with a= 4, so vertices at (0, ±4), and b= 3; i.e., endpoints of the minor axis at . Since , the foci are . The graph is sketched in Figure 4.20.     Figure 4.20 :   "
},
{
  "id": "subsubsec-equation-of-shifted-ellipses-13",
  "level": "2",
  "url": "sec-ellipses.html#subsubsec-equation-of-shifted-ellipses-13",
  "type": "Example",
  "number": "4.4.5",
  "title": "",
  "body": "  The endpoints of the major axis of an ellipse are at and and its eccentricity is . Find the equation of the ellipse and its foci.    The given vertices are at and implies that ; and the center C( h,k ) is the midpoint of . Moreover, eccentricity . Hence, . Note that the major axis V'V is horizontal. Therefore, using the standard equation of a horizontal ellipse, the equation of the ellipse is     Now, as the center ( h,k ) = , c =3 and V′V is horizontal, the foci are at ( h ± c , k ) = .  That is, the foci are at F ′ (-1, 4) and F(5, 4).  Moreover, the endpoints of major axis are at and   The graph of the ellipse is sketched in Figure 4.22.     Figure 4.22 : Example ellipse   "
},
{
  "id": "subsubsec-equation-of-shifted-ellipses-14",
  "level": "2",
  "url": "sec-ellipses.html#subsubsec-equation-of-shifted-ellipses-14",
  "type": "Example",
  "number": "4.4.6",
  "title": "",
  "body": "  Find the center, foci and vertices of and sketch its graph    Group the x-terms of the equation and complete the square:      (divide both sides by 4)     This is equation of a vertical ellipse (major axis parallel to the y-axis), center C=( h,k ) = ,     Thus, foci : F′ and F ,  Vertices: V = , V′= ;  Endpoints of minor axis: B= , B′= ;  The graph of the ellipse is sketched in Figure 4.23.     Figure 4.23 :   "
},
{
  "id": "subsubsec-equation-of-shifted-ellipses-15",
  "level": "2",
  "url": "sec-ellipses.html#subsubsec-equation-of-shifted-ellipses-15",
  "type": "Remark",
  "number": "4.4.7",
  "title": "",
  "body": "   Consider the equation: ,  when A and C have the same sign. So, without lose of generality, let A >0 and C >0.  By completing the squares you can show that this equation is equivalent to     From this you can conclude that the given equation represents:-     an ellipse with center if .    If ,the equation is satisfied by the point only. In this case, the locus of the equation is called a point-ellipse (degenerate ellipse).    If , then the equation has no locus.     "
},
{
  "id": "fig-ellipse-3",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-3",
  "type": "Exercise",
  "number": "4.4.2.2.1",
  "title": "",
  "body": "  Foci at and a vertex at    "
},
{
  "id": "fig-ellipse-4",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-4",
  "type": "Exercise",
  "number": "4.4.2.2.2",
  "title": "",
  "body": "  A focus at and vertices at    "
},
{
  "id": "fig-ellipse-5",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-5",
  "type": "Exercise",
  "number": "4.4.2.2.3",
  "title": "",
  "body": "  Foci at and a vertex at    "
},
{
  "id": "fig-ellipse-6",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-6",
  "type": "Exercise",
  "number": "4.4.2.2.4",
  "title": "",
  "body": "  Foci at and a vertex at    "
},
{
  "id": "fig-ellipse-7",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-7",
  "type": "Exercise",
  "number": "4.4.2.2.5",
  "title": "",
  "body": "  Center at , one focus at and one vertex at    "
},
{
  "id": "fig-ellipse-8",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-8",
  "type": "Exercise",
  "number": "4.4.2.2.6",
  "title": "",
  "body": "  Foci at and the length of the major axis is .   "
},
{
  "id": "fig-ellipse-9",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-9",
  "type": "Exercise",
  "number": "4.4.2.2.7",
  "title": "",
  "body": "  Foci at and the length of the minor axis is .   "
},
{
  "id": "fig-ellipse-10",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-10",
  "type": "Exercise",
  "number": "4.4.2.2.8",
  "title": "",
  "body": "  The distance between its foci is and the endpoints of its minor axis are and .   "
},
{
  "id": "fig-ellipse-11",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-11",
  "type": "Exercise",
  "number": "4.4.2.2.9",
  "title": "",
  "body": "  Vertices at and the ellipse passes through .   "
},
{
  "id": "fig-ellipse-12",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-12",
  "type": "Exercise",
  "number": "4.4.2.2.10",
  "title": "",
  "body": "  Center at , a vertex at , and one of the endpoints of the minor axis is .   "
},
{
  "id": "fig-ellipse-13",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-13",
  "type": "Exercise",
  "number": "4.4.2.2.11",
  "title": "",
  "body": "  The ellipse passes through and with center at origin.   "
},
{
  "id": "fig-ellipse-14",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-14",
  "type": "Exercise",
  "number": "4.4.2.2.12",
  "title": "",
  "body": "  The endpoints of the major axis are and , and the ellipse passes through the origin   "
},
{
  "id": "fig-ellipse-15",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-15",
  "type": "Exercise",
  "number": "4.4.2.2.13",
  "title": "",
  "body": "  The endpoints of the minor axis are and , and the ellipse passes through the origin  For questions 14 to 22 find the center, foci and vertices of the ellipse having the given equation and sketch its graph.   "
},
{
  "id": "fig-ellipse-16",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-16",
  "type": "Exercise",
  "number": "4.4.2.2.14",
  "title": "",
  "body": "      "
},
{
  "id": "fig-ellipse-17",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-17",
  "type": "Exercise",
  "number": "4.4.2.2.15",
  "title": "",
  "body": "      "
},
{
  "id": "fig-ellipse-18",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-18",
  "type": "Exercise",
  "number": "4.4.2.2.16",
  "title": "",
  "body": "      "
},
{
  "id": "fig-ellipse-19",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-19",
  "type": "Exercise",
  "number": "4.4.2.2.17",
  "title": "",
  "body": "      "
},
{
  "id": "fig-ellipse-20",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-20",
  "type": "Exercise",
  "number": "4.4.2.2.18",
  "title": "",
  "body": "      "
},
{
  "id": "fig-ellipse-21",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-21",
  "type": "Exercise",
  "number": "4.4.2.2.19",
  "title": "",
  "body": "      "
},
{
  "id": "fig-ellipse-22",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-22",
  "type": "Exercise",
  "number": "4.4.2.2.20",
  "title": "",
  "body": "      "
},
{
  "id": "fig-ellipse-23",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-23",
  "type": "Exercise",
  "number": "4.4.2.2.21",
  "title": "",
  "body": "      "
},
{
  "id": "fig-ellipse-24",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-24",
  "type": "Exercise",
  "number": "4.4.2.2.22",
  "title": "",
  "body": "      "
},
{
  "id": "fig-ellipse-25",
  "level": "2",
  "url": "sec-ellipses.html#fig-ellipse-25",
  "type": "Exercise",
  "number": "4.4.2.2.23",
  "title": "",
  "body": "  Consider the equation . Find all values of F such that the graph of the equation  (a) is an ellipse. (b) is a point. (c) consists of no points at all.   "
},
{
  "id": "subsec-equation-of-an-ellipse-5",
  "level": "2",
  "url": "sec-ellipses.html#subsec-equation-of-an-ellipse-5",
  "type": "Checkpoint",
  "number": "4.4.8",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-an-ellipse-6",
  "level": "2",
  "url": "sec-ellipses.html#subsec-equation-of-an-ellipse-6",
  "type": "Checkpoint",
  "number": "4.4.9",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-an-ellipse-7",
  "level": "2",
  "url": "sec-ellipses.html#subsec-equation-of-an-ellipse-7",
  "type": "Checkpoint",
  "number": "4.4.10",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-hyperbolas",
  "level": "1",
  "url": "sec-hyperbolas.html",
  "type": "Section",
  "number": "4.5",
  "title": "Hyperbolas",
  "body": " Hyperbolas       Objectives   By the end of this section, you should     know the geometric definition of a hyperbola.    know the meaning of the center, vertices, foci and transverse axis of a hyperbola.    be able to find equation of a hyperbola whose transverse axis is horizontal or vertical.    be able to identify equations representing sec-hyperbolas.    be able to find the center, vertices, foci, and asymptotes of a hyperbola and sketch the hyperbola.      Definition of a hyperbola    Let F and be two fixed points in the plane. A hyperbola is the set of all points in the plane such that the difference of the distance of each point from F and F ′ is constant. We shall denote the constant by 2 , for some  0. That is, a point P is on the hyperbola if and only if |PF ′ | – |PF| = 2 (or |PF|– |PF ′ | = 2 , whichever is positive). The two fixed points F and F ′ are called the foci of the hyperbola.      Figure 4.24 illustrates the definition of hyperbola. Notice that the definition of hyperbola is similar to that of an ellipse, the only change is that the sum of distances has become the difference of distances. Here, for the difference of any two unequal values, we take the higher value minus the smaller so that 0 in the definition. The following terminologies, notations and relationships are also important with regard to a hyperbola. Refer to Figure 4.24 for the following discussion.     The line through the two foci F ′ and F is called the principal axis of the hyperbola. The point on the principal axis at halfway between the two foci, that is, the midpoint of F′F, is called the center of the hyperbola and represented by C. We denote the distance between the two foci by 2 . That is, | F ′ F | = 2 or | CF | = = | CF ′| . Noting also that |PF ′ | | F ′ F | + |PF| in ∆ PF ′ F and |PF ′ | – |PF| = 2 , you can show that  .    The points V ′ and V where the hyperbola crosses the principal axis are called vertices of the hyperbola. The line segment V ′ V is called the transverse axis of the hyperbola. So, as V ′ and V are on the hyperbola, the definition requires that | V′F | – | V′F′ | = | VF ′ | – |VF|. From this, you can obtain that |V′F′| = |VF|. Consequently:   C is the midpoint of also V′V; that is, | CV ′ | = |CV | .    |V ′ V| = |V ′ F| − |VF | = |V ′ F| − |V′F′| = 2 . (The length of the transverse axis is 2 )     | V ′ C | = = |CV | (This follows from (i) and (ii).)       The eccentricity of a hyperbola is defined to be the ratio of the distance between its foci to the length of its transverse axis. That is, similar to the definition of eccentricity of an ellipse, the eccentricity of a hyperbola is  (But here, > 1 because > )        Use the definition of hyperbola and the given information to answer or solve each of the following problems.     Suppose C is the center, F ′ and F are the foci, and V ′ and V are the vertices of the hyperbola, as in Figure 4.24, with |CV| = and |CF| = . Then, show that each of the followings hold.     If P is any point on the hyperbola, then |PF| – |PF ′ | = .  (Note: Taking that |PF| – |PF ′ | = , a constant, show that = .)     > .       Consider a hyperbola whose foci are at and contains the point    Where is the center of the hyperbola?    Determine the principal axis of the hyperbola.    Find the length of the transverse axis of the hyperbola.    Find the coordinates of the vertices of the hyperbola.    Determine whether each of the following points is on the hyperbola or not:   (−2, 3) (ii) (−2, −3) (iii) (2, −3) (iv) (3, 4) (v)        Suppose the vertices of a hyperbola are at and its eccentricity is . Then,   Find the foci of the hyperbola.    Determine whether each of the following points is on the hyperbola or not:   (0, 3) (ii) (2, 3) (iii) (iv)                   Add review   Add review    Equation of a hyperbola  We are now ready to derive equation of a hyperbola. But, for simplicity, we consider first the equation of a standard hyperbola with center at origin. A standard hyperbola is the one whose principal axis (or transverse axis) is parallel to either of the coordinate axes.   I. Equation of a standard hyperbola with center at origin.  There are two possible situations, namely, when the transverse axis lies on x -axis (called horizontal hyperbola) and when the transverse axis lies on y -axis (called vertical hyperbola). We first consider a horizontal hyperbola with center C(0,0), vertices V′(− a , 0), V ( a , 0) and foci  F′(− c , 0), F ( c , 0).     Notice that − > 0 as c > a . Hence, we can put for some positive b . That is, so that a , b, c are sides of a right triangle (see, Figure 4.25). The line segment BB′ perpendicular to the transverse axis at C and with endpoints B(0, b ) and B′(0,− b ) is called conjugate axis of the hyperbola. Observe that the midpoint of the conjugate axis is C and its length is |BB′ | = 2 b . ( b will play important role in equation of the hyperbola and its graph).  Now, for any point P( x,y ) on the hyperbola it holds that | PF′ | − | PF | = 2 a  .   That is,   or   Squaring both sides we get    which simplifies to   Again squaring both sides and rearranging, we get   Recall that we set . So, using this in the above equation and dividing both sides by , the equation becomes      (Equation of horizontal hyperbola with center C(0,0) , vertices , foci , where = + )   Note that this hyperbola has no y -intercept because if x = 0, then − = which is not possible. The hyperbola is symmetric with respect to both x -and y - axes.  Also, from this equation we get   implies that . So, .   Therefore, we have x ≥ a or x ≤ − a . This means that the hyperbola consists of two parts, called its branches . Moreover, if we solve for y from the equation we get as x → ∞.  This means the hyperbola will approach (but never reaches) the line as x gets larger and larger. That is, the lines are the asymptotes of the hyperbola.  In sketching a hyperbola, it is best to draw the rectangle formed by the line y = ± b and x = ± a and the to draw the asymptotes which are along the diagonals of the rectangle (as shown by the dashed lines in Figure 4.25). The hyperbola lies outside the rectangle and inside the asymptotes. It opens around the foci.    Find the foci and equation of the hyperbola with vertices F′(−5, 0) and F(5, 0) and passing through P(5, 16\/3).    It is horizontal hyperbola with center (0,0) and c = 5. In addition, as P(5, 16\/3) is on the hyperbola we have that | PF′ | − | PF | = 2 a . That is,     ⇒ a =3. (So, its vertices are (−3, 0) and (3, 0) ).  Now, using the relationship = - , we have .  Therefore, the equation of the hyperbola is   You may find the asymptotes and sketch the hyperbola.  For a vertical hyperbola with center at origin (i.e., when transverse axis lies on y -axis), by reversing the role of x and y we obtain the following equation which is illustrated in Figure 4.26.      ( Equation of vertical hyperbola with center C(0,0) , foci (0, ± ), vertices (0, ± a ), where c = + and asymptotes     Note :   For a vertical hyperbola, the coefficient of is positive and that of is negative.     is always the denominator of the positive term.      (for accessibility)       Find the foci and equation of the hyperbola with vertices V′(0,−1) and V(0, 1) and an asymptote     It is a vertical hyperbola with center C(0,0) and a = |CV| = 1. Since an asymptote of such vertical hyperbola is and the slope of the given asymptote is 2, we have a\/b = 2 ⇒ 1 \/b =2 ⇒ b = 1\/2. Thus, = + .  So, the foci are and the equation of the hyperbola is − 4   (You may sketch the hyperbola)     (II) Equation of shifted sec-hyperbolas:   The center of a horizontal or vertical hyperbola may be not at origin but at some other point C( h,k ) as shown in Figure 4.27. In this case, we form the equation of the sec-hyperbolas by using the translation of the xy -coordinate system that shifts its origin to the point C( h , k ). As discussed in Section 4.4, the effect of this translation is just replacing x and y by and , respectively, in the equation of the desired hyperbola.     Therefore, the standard equation of a horizontal hyperbola (transverse axis parallel to x -axis) with center C( h,k ), length of transverse axis =2 a, and length of conjugate axis =2 b is         Center:   Vertices: V′ ( h–a,k ), V( h+a, k )  Foci : F′( h–c, k ), F( h + c , k ), where = +   Asymptotes:       Similarly, the standard equation of a vertical hyperbola (transverse axis parallel to y -axis) with center C( h,k ), length of transverse axis =2 a, and length of conjugate axis =2 b is         Center:   Vertices: V′ ( h,k–a ), V( h, k+a ),  Foci : F′( h, k–c ), F( h, k + c ), where = +  Asymptotes:        Find the foci, vertices and the asymptotes of the hyperbola whose equation is and sketch the hyperbola.    Dividing both sides of the equation by 4 yields   This is equation of a hyperbola with center . Note that the ' term' is positive indicates that the hyperbola is horizontal (principal axis y= 2), a =1, b =2, and = + ⇒ . As a result the foci are at and , vertices are at and and the asymptotes are the lines , that is, and . Consequently, the hyperbola is sketched as in Figure 4.28.            Find the foci of the conic and sketch its graph.    Group the x -terms and y -terms of the equation and complete their squares:     (Multiply both sides by -1)              (Next, divide each by 36)      This is standard equation of a hyperbola whose transverse axis is parallel to the y-axis (as its ' term' is positive) with center C , and . ⇒ . Thus, foci are F′ and F , and vertices , i.e,, V′ and V . Moreover, the asymptotes are y Hence, the asymptotes are   : and : . The hyperbola is sketched in Figure 4.29        Determine the locus or type of the conic section given by the equation     Grouping the x -terms and y -terms of the equation and completing their squares yield     This represents pair of two lines intersecting at (2, 1), namely, y = x −1 and y = − x +3.     Consider the equation: A + C + D x + E y + F = 0 when AC < 0;  (i.e., A and C have opposite signs). Then, by completing the squares of x-terms and y-terms you can convert the equation to the following form:   Now, letting you can conclude the following:   If ∆ ≠ 0, the equation represents a hyperbola with center .    If ∆ = 0, the equation becomes which are two lines intersecting at . In this case, it is called degenerate hyperbola.         For questions 1 to 9, find an equation of the hyperbola having the given properties and sketch its graph.  1. Center at the origin, a focus at , and a vertex at   2. Center at the origin, a focus at , and a vertex at .  3. Center at the origin, x -intercepts ±3, an asymptote y = 2 x .  4. Center at the origin, a vertex at , and passing through .  5. Center at , a vertex at , and an asymptote   6. Foci at and , length of transverse axis 6.  7. Foci at and , and vertices at and .  8. Vertices at (±3, 0), and asymptotes   9. Eccentricity e . , endpoints of transversal axis at and .  For questions 10 to 17 find the center, foci, vertices and asymptotes of the hyperbola having the given equation and sketch its graph.   10.  14.    11.  15.    12.  16.    13.  17.   18. Find an equation of hyperbola whose major axis is parallel to the x-axis, has a focus at and its vertices are at the endpoints of a diameter of the circle   19. A satellite moves along a hyperbolic curve whose horizontal transverse axis is 24 km and an asymptote . Then what is the eccentricity of the hyperbola?  20 Two regions A and B are separated by a sea. The shores are roughly in a shape of hyperbolic curves with asymptotes and a focus at taking a coordinate system with origin at the center of the hyperbola. What is the shortest distance between the regions in kms?  21. Determine the type of curve represented by the equation    In each of the following cases: ( a) (b) (c)       Add review   Add review   Add review   Add review   "
},
{
  "id": "sec-hyperbolas-3",
  "level": "2",
  "url": "sec-hyperbolas.html#sec-hyperbolas-3",
  "type": "Objectives",
  "number": "4.5",
  "title": "Objectives",
  "body": " Objectives   By the end of this section, you should     know the geometric definition of a hyperbola.    know the meaning of the center, vertices, foci and transverse axis of a hyperbola.    be able to find equation of a hyperbola whose transverse axis is horizontal or vertical.    be able to identify equations representing sec-hyperbolas.    be able to find the center, vertices, foci, and asymptotes of a hyperbola and sketch the hyperbola.    "
},
{
  "id": "def-definition-of-a-hyperbola",
  "level": "2",
  "url": "sec-hyperbolas.html#def-definition-of-a-hyperbola",
  "type": "Definition",
  "number": "4.5.1",
  "title": "",
  "body": "  Let F and be two fixed points in the plane. A hyperbola is the set of all points in the plane such that the difference of the distance of each point from F and F ′ is constant. We shall denote the constant by 2 , for some  0. That is, a point P is on the hyperbola if and only if |PF ′ | – |PF| = 2 (or |PF|– |PF ′ | = 2 , whichever is positive). The two fixed points F and F ′ are called the foci of the hyperbola.   "
},
{
  "id": "subsec-definition-of-a-hyperbola-5",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-definition-of-a-hyperbola-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "′ principal axis center | ′ | | | | ′| ′ | ′ | ′ ′ ′ vertices ′ transverse axis ′ | | | | | ′ | ′ | | ′ ′ | ′ | ′ | | eccentricity "
},
{
  "id": "exercises-definition-of-a-hyperbola-1",
  "level": "2",
  "url": "sec-hyperbolas.html#exercises-definition-of-a-hyperbola-1",
  "type": "Exercise",
  "number": "4.5.1.1",
  "title": "",
  "body": "  Use the definition of hyperbola and the given information to answer or solve each of the following problems.     Suppose C is the center, F ′ and F are the foci, and V ′ and V are the vertices of the hyperbola, as in Figure 4.24, with |CV| = and |CF| = . Then, show that each of the followings hold.     If P is any point on the hyperbola, then |PF| – |PF ′ | = .  (Note: Taking that |PF| – |PF ′ | = , a constant, show that = .)     > .       Consider a hyperbola whose foci are at and contains the point    Where is the center of the hyperbola?    Determine the principal axis of the hyperbola.    Find the length of the transverse axis of the hyperbola.    Find the coordinates of the vertices of the hyperbola.    Determine whether each of the following points is on the hyperbola or not:   (−2, 3) (ii) (−2, −3) (iii) (2, −3) (iv) (3, 4) (v)        Suppose the vertices of a hyperbola are at and its eccentricity is . Then,   Find the foci of the hyperbola.    Determine whether each of the following points is on the hyperbola or not:   (0, 3) (ii) (2, 3) (iii) (iv)                "
},
{
  "id": "subsec-definition-of-a-hyperbola-7",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-definition-of-a-hyperbola-7",
  "type": "Checkpoint",
  "number": "4.5.2",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-definition-of-a-hyperbola-8",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-definition-of-a-hyperbola-8",
  "type": "Checkpoint",
  "number": "4.5.3",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-a-hyperbola-7",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": ". "
},
{
  "id": "subsec-equation-of-a-hyperbola-19",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": ". "
},
{
  "id": "subsec-equation-of-a-hyperbola-23",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-23",
  "type": "Example",
  "number": "4.5.4",
  "title": "",
  "body": "  Find the foci and equation of the hyperbola with vertices F′(−5, 0) and F(5, 0) and passing through P(5, 16\/3).    It is horizontal hyperbola with center (0,0) and c = 5. In addition, as P(5, 16\/3) is on the hyperbola we have that | PF′ | − | PF | = 2 a . That is,     ⇒ a =3. (So, its vertices are (−3, 0) and (3, 0) ).  Now, using the relationship = - , we have .  Therefore, the equation of the hyperbola is   You may find the asymptotes and sketch the hyperbola.  For a vertical hyperbola with center at origin (i.e., when transverse axis lies on y -axis), by reversing the role of x and y we obtain the following equation which is illustrated in Figure 4.26.      ( Equation of vertical hyperbola with center C(0,0) , foci (0, ± ), vertices (0, ± a ), where c = + and asymptotes     Note :   For a vertical hyperbola, the coefficient of is positive and that of is negative.     is always the denominator of the positive term.      (for accessibility)    "
},
{
  "id": "subsec-equation-of-a-hyperbola-24",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-24",
  "type": "Example",
  "number": "4.5.5",
  "title": "",
  "body": "  Find the foci and equation of the hyperbola with vertices V′(0,−1) and V(0, 1) and an asymptote     It is a vertical hyperbola with center C(0,0) and a = |CV| = 1. Since an asymptote of such vertical hyperbola is and the slope of the given asymptote is 2, we have a\/b = 2 ⇒ 1 \/b =2 ⇒ b = 1\/2. Thus, = + .  So, the foci are and the equation of the hyperbola is − 4   (You may sketch the hyperbola)   "
},
{
  "id": "subsec-equation-of-a-hyperbola-25",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(II) Equation of shifted sec-hyperbolas: "
},
{
  "id": "subsec-equation-of-a-hyperbola-32",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-32",
  "type": "Example",
  "number": "4.5.6",
  "title": "",
  "body": "  Find the foci, vertices and the asymptotes of the hyperbola whose equation is and sketch the hyperbola.    Dividing both sides of the equation by 4 yields   This is equation of a hyperbola with center . Note that the ' term' is positive indicates that the hyperbola is horizontal (principal axis y= 2), a =1, b =2, and = + ⇒ . As a result the foci are at and , vertices are at and and the asymptotes are the lines , that is, and . Consequently, the hyperbola is sketched as in Figure 4.28.         "
},
{
  "id": "subsec-equation-of-a-hyperbola-33",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-33",
  "type": "Example",
  "number": "4.5.7",
  "title": "",
  "body": "  Find the foci of the conic and sketch its graph.    Group the x -terms and y -terms of the equation and complete their squares:     (Multiply both sides by -1)              (Next, divide each by 36)      This is standard equation of a hyperbola whose transverse axis is parallel to the y-axis (as its ' term' is positive) with center C , and . ⇒ . Thus, foci are F′ and F , and vertices , i.e,, V′ and V . Moreover, the asymptotes are y Hence, the asymptotes are   : and : . The hyperbola is sketched in Figure 4.29     "
},
{
  "id": "subsec-equation-of-a-hyperbola-34",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-34",
  "type": "Example",
  "number": "4.5.8",
  "title": "",
  "body": "  Determine the locus or type of the conic section given by the equation     Grouping the x -terms and y -terms of the equation and completing their squares yield     This represents pair of two lines intersecting at (2, 1), namely, y = x −1 and y = − x +3.   "
},
{
  "id": "subsec-equation-of-a-hyperbola-35",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-35",
  "type": "Remark",
  "number": "4.5.9",
  "title": "",
  "body": " Consider the equation: A + C + D x + E y + F = 0 when AC < 0;  (i.e., A and C have opposite signs). Then, by completing the squares of x-terms and y-terms you can convert the equation to the following form:   Now, letting you can conclude the following:   If ∆ ≠ 0, the equation represents a hyperbola with center .    If ∆ = 0, the equation becomes which are two lines intersecting at . In this case, it is called degenerate hyperbola.     "
},
{
  "id": "exercises-equation-of-a-hyperbola-1",
  "level": "2",
  "url": "sec-hyperbolas.html#exercises-equation-of-a-hyperbola-1",
  "type": "Exercise",
  "number": "4.5.2.1",
  "title": "",
  "body": "  For questions 1 to 9, find an equation of the hyperbola having the given properties and sketch its graph.  1. Center at the origin, a focus at , and a vertex at   2. Center at the origin, a focus at , and a vertex at .  3. Center at the origin, x -intercepts ±3, an asymptote y = 2 x .  4. Center at the origin, a vertex at , and passing through .  5. Center at , a vertex at , and an asymptote   6. Foci at and , length of transverse axis 6.  7. Foci at and , and vertices at and .  8. Vertices at (±3, 0), and asymptotes   9. Eccentricity e . , endpoints of transversal axis at and .  For questions 10 to 17 find the center, foci, vertices and asymptotes of the hyperbola having the given equation and sketch its graph.   10.  14.    11.  15.    12.  16.    13.  17.   18. Find an equation of hyperbola whose major axis is parallel to the x-axis, has a focus at and its vertices are at the endpoints of a diameter of the circle   19. A satellite moves along a hyperbolic curve whose horizontal transverse axis is 24 km and an asymptote . Then what is the eccentricity of the hyperbola?  20 Two regions A and B are separated by a sea. The shores are roughly in a shape of hyperbolic curves with asymptotes and a focus at taking a coordinate system with origin at the center of the hyperbola. What is the shortest distance between the regions in kms?  21. Determine the type of curve represented by the equation    In each of the following cases: ( a) (b) (c)    "
},
{
  "id": "subsec-equation-of-a-hyperbola-37",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-37",
  "type": "Checkpoint",
  "number": "4.5.10",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-a-hyperbola-38",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-38",
  "type": "Checkpoint",
  "number": "4.5.11",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-a-hyperbola-39",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-39",
  "type": "Checkpoint",
  "number": "4.5.12",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-equation-of-a-hyperbola-40",
  "level": "2",
  "url": "sec-hyperbolas.html#subsec-equation-of-a-hyperbola-40",
  "type": "Checkpoint",
  "number": "4.5.13",
  "title": "",
  "body": " Add review "
},
{
  "id": "sec-the-general-second-degree-equation",
  "level": "1",
  "url": "sec-the-general-second-degree-equation.html",
  "type": "Section",
  "number": "4.6",
  "title": "The General Second Degree Equation",
  "body": " The General Second Degree Equation   By the end of this section, you should:     know the general form of second degree equation representing conic sections whose lines of symmetry are not necessarily parallel to the coordinate axes.    know the rotation formula for rotating the coordinate axes.    be able to find equivalent equation of a conic section under rotation of the reference axes.    be able to apply the rotation formula to find a suitable coordinate system in which a given general second degree equation is converted to a simpler standard form.    be able to convert a given general second degree equation to an equivalent simpler standard form of equation of a conic section.    be able to identify a conic section that a given general second degree equation represents and sketch the corresponding conic section.     In the previous sections we have seen that, except in degenerate cases, the graph of the equation   is a circle, parabola, ellipse or hyperbola. The construction of these equations was based on the assumption that the axis of symmetry of a conic section is parallel to one of the coordinate axes. The assumption seems to be quite restrictive because the axis of symmetry for a parabola, ellipse, or hyperbola can be any oblique line as indicated in their corresponding definitions.  However, the reason why we have assumed that is not only for simplicity but there is always a coordinate system whose one of the axes is parallel to a desired line of symmetry. In particular, we can rotate the axes of our xy - coordinate system, whenever needed, so as to form a new x ' y '-coordinate system such that either the x'- axis or y'-axis is parallel to the desired line of symmetry. Toward this end, let us review the notion of rotation of axes.    Rotation of Coordinate Axes  A rotation of the x and y coordinate axes by an angle θ about the origin O(0,0) creates a new x ' y '-coordinate system whose x '-axis is the line obtained by rotating the x -axis by angle θ about O and y ' -axis is the line obtained by rotating the y -axis in the same way. This makes a point P to have two sets of coordinates denoted by ( x , y ) and ( x ′, y ′) relative to the xy - and x ′ y ′-coordinate axes, respectively.(See )     (for accessibility)    The angle θ considered in the above discussion is called the angle of rotation. Our aim is to find the relationships between the coordinates ( x , y ) and the coordinates ( x ′, y ′) of the same point P.  To find this relationships, let P( x,y ) be any point in xy -plane, θ be an angle of rotation (i.e., θ is angle between x and x ' axes ) and θ be the angle between OP and x ' -axis. (See )     (for accessibility)    So, letting | OP | = r observe that   , .....(1)  and   , .....(2)  Then, using the trigonometric identities        and (1), the equations in (2) become     Moreover, these equations can be solved for x ′ and y ′ in terms of x and y to obtain     The Equations (3) and (4) are called . It follows that if the angle of rotation θ is given, then Equation (3) can be used to determine the x and y coordinates of a point P if we know its x ′ and y ′ coordinates. Similarly, Equation (4) can be used to determine the x ′ and y ′ coordinates of P if we know its x and y coordinates.    Suppose the x and y coordinate axes are rotated by π\/4 about the origin.     Find the coordinates of P(1, 2) relative to the new x ' and y ' axes.    Find the equation of the curve xy = 1 relative to the new x ' y '-coordinate system and sketch its graph       The given information about P and the curve are relative to the xy -coordinate system and we need to express them in terms of x ' and y ' coordinates relative to the new x ′ y ′-coordinate system obtained under the rotation of the original axes by θ = π\/4 rad about the origin. Thus, we use in the relevant rotation formula to obtain the following.     Since P(1,2) has the coordinates x =1 and y =2, its x ' and y ' coordinates are, using formula (4)        Therefore, the coordinates of P relative to the new x ' and y ' axes are     We need to express x and y in the equation xy =1 in terms of x ' and y ' using the rotation formula (3). So, again since ,we obtain the formula (3)     and   Therefore, xy=1           Note that this is an equation of a hyperbola with center at origin vertices and in the x ' y '-coordinate system with principal axis on x '-axis. Since the x and y - axes were rotated though an angle of π\/4 to obtain x ' and y '-axes, the hyperbola can be sketched as shown. (You may use Formula (3) to show that the vertices and are (-1,1) and (1,1), respectively, relative to the x and y -axes).        (for accessibility)        Find an equation of the ellipse whose center is the origin, vertices are (−4,−3) and (4, 3), and length of minor axis is 6.    The position of the ellipse is as shown in .     (for accessibility)    To apply the standard equation of ellipse we use the x ' y '-coordinate system such that the x ' -axis coincide with the major axis of the ellipse. Therefore, the equation of the ellipse relative to the x ' y ' system is     Moreover, from the given information, = = + =25; and  length of minor axis = 2 b = 6 ⇒ b = 3. So, = 9 .  Hence, the equation of the ellipse relative to the x ' y ' -coordinate system is     Now we use the rotation formula to express the equation relative to our xy -coordinate system.  So, let θ the angle between x -axis and x '-axis. Then, observe that     Thus, using rotation formula (4) we get:      Now we substitute these for x ′ and y ′ in (1) to obtain     And simplifying this we get     which is the equation of the ellipse in the xy - coordinate system.       Suppose the xy -coordinate axes are rotated 60° counterclockwise about the origin to obtain the new x ' y '-coordinate system.     If each of the following are coordinates of points relative to the xy -system, find the coordinates of the points relative to the x ′ y ′ - system.   (5, 0)    (1, 4)    (0, 1)    (−1\/2, 5\/2)    (−2, −1)       Find the equation of the following lines and conics relative to the new x ′ y ′ - system.                                                          Suppose the -coordinate axes are rotated 30° counterclockwise about the origin to obtain the new -coordinate system. If the following points are with respect to the new -system, what is the coordinates of each point with respect to the old -system?     (0, 2)    (−2, 4)    (1, −3)              Add review   Add review    Analysis of the General Second Degree Equations  In the previous sections, we have seen that the equation of the form  .......... (1)  represents a conic section (a parabola, ellipse, or hyperbola) whose axis of symmetry is parallel to one of the coordinate axes, except in degenerate cases.  In Subsection 4.6.1, we also saw some examples of conic sections whose equations involve the term when their lines of symmetry are not parallel to either of the axes.  Now we would like to analyze the graph of any quadratic (second degree) equation in and of the form:  ........... (2)  where . In order to analyze the graph of Equation (2), we usually convert it into an equation of type (1) using a suitable rotated coordinate system. To this end, we prove the following theorem.    Consider the general second degree equation of the form (2), i..e.,   , where ........... (2)  there is a rotation angle through which the -coordinate system in which Equation (2) reduces to the form   ........... (3)     Let the -coordinate system be rotated by an angle about the origin to form a new -coordinate system. Then, from the rotation formula (3),we have     we substitute for and in Equation (2) so that      After some calculations, combining like terms (those involving and so on ), we get equation of the form  ............... (4)  where the new coefficient is given by:   Here the exact expressions for A', C', D', E' are omitted as they are irrelevant. What we need is to get the angle of rotation for which Equation (4) has x'y' term, that is B'=0.  This means that,   Since and   this equation is equivalent to           That is, if we choose the angle of rotation satisfying (5), then B' = 0 in Equation (4) so that the resulting equation in x'y'-coordinate system is in the form of Equation (3). Moreover, we can always find an angle that satisfies for any A C, since the range of the cotangent function is the entire set of real numbers. Note also that since , the angel of rotation  can always be chosen so that . So, the Theorem is proved.   If , then .   Therefore, we can rewrite the result of the above theorem as follows:  The rotation of the -coordinate system by angle creates an -coordinate system in which a general second degree equation , with , is converted to an equation (with no term), if we choose such that:          Use rotation of axes to eliminate the term in each of the following equations,\\ describe the locus (type of conic section) and sketch the graph of the equation                     Given:  . So, from the above Remark, the rotation angle is  , and .  Now we substitute these for and in the given equation:        Expanding the squared expressions, combining like terms and simplifying, we obtain  or,  This is an equation of a parabola. Its vertex is relative to the -system, principal axis is on -axis and opens towards negative direction. (You can show that its vertex is relative to the -system.) The graph of the equation is sketched in      (for accessibility)      Given: , and .  Hence,   The terminal side of is through since .  . Now as , both and are positive. Hence,    This implies the -axis is through the coordinate point , that is the line .  Therefore, using the rotation formula (3), we get  and  Now we substitute these for and in the given equation to obtain        Expanding the squared expressions, combining like terms and simplifying, we obtain   Completing the square and dividing by 100 to get   which is an ellipse with center at relative to the -system, major axis on - axis (which is the line ), length of major axis = 4 and length of minor axis = 2. (You can show that the center is relative to the -system). The graph of the equation is sketched in      (for accessibility)            Find an equation of the conic section having the given properties and sketch its graph.   Ellipsi with center at origin, foci at and , and length of major axis .    Parabola whose vertex is at and focus     Hyperbola whose foci are and , and length of transverse axis .         Use rotation of axes to eliminate the term in each of the following equations, describe the locus (type of conic section) and sketch the graph of the equation.                                        Show that if , then the graph of     is a hyperbola if , and two intersecting lines if       Add review   Add review   Add review   "
},
{
  "id": "rotation-of-coordinates1",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#rotation-of-coordinates1",
  "type": "Figure",
  "number": "4.6.1",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "rotation-of-coordinates2",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#rotation-of-coordinates2",
  "type": "Figure",
  "number": "4.6.2",
  "title": "",
  "body": "   (for accessibility)   "
},
{
  "id": "subsec-rotation-of-coordinate-axes-19",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#subsec-rotation-of-coordinate-axes-19",
  "type": "Example",
  "number": "4.6.3",
  "title": "",
  "body": "  Suppose the x and y coordinate axes are rotated by π\/4 about the origin.     Find the coordinates of P(1, 2) relative to the new x ' and y ' axes.    Find the equation of the curve xy = 1 relative to the new x ' y '-coordinate system and sketch its graph       The given information about P and the curve are relative to the xy -coordinate system and we need to express them in terms of x ' and y ' coordinates relative to the new x ′ y ′-coordinate system obtained under the rotation of the original axes by θ = π\/4 rad about the origin. Thus, we use in the relevant rotation formula to obtain the following.     Since P(1,2) has the coordinates x =1 and y =2, its x ' and y ' coordinates are, using formula (4)        Therefore, the coordinates of P relative to the new x ' and y ' axes are     We need to express x and y in the equation xy =1 in terms of x ' and y ' using the rotation formula (3). So, again since ,we obtain the formula (3)     and   Therefore, xy=1           Note that this is an equation of a hyperbola with center at origin vertices and in the x ' y '-coordinate system with principal axis on x '-axis. Since the x and y - axes were rotated though an angle of π\/4 to obtain x ' and y '-axes, the hyperbola can be sketched as shown. (You may use Formula (3) to show that the vertices and are (-1,1) and (1,1), respectively, relative to the x and y -axes).        (for accessibility)     "
},
{
  "id": "subsec-rotation-of-coordinate-axes-20",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#subsec-rotation-of-coordinate-axes-20",
  "type": "Example",
  "number": "4.6.5",
  "title": "",
  "body": "  Find an equation of the ellipse whose center is the origin, vertices are (−4,−3) and (4, 3), and length of minor axis is 6.    The position of the ellipse is as shown in .     (for accessibility)    To apply the standard equation of ellipse we use the x ' y '-coordinate system such that the x ' -axis coincide with the major axis of the ellipse. Therefore, the equation of the ellipse relative to the x ' y ' system is     Moreover, from the given information, = = + =25; and  length of minor axis = 2 b = 6 ⇒ b = 3. So, = 9 .  Hence, the equation of the ellipse relative to the x ' y ' -coordinate system is     Now we use the rotation formula to express the equation relative to our xy -coordinate system.  So, let θ the angle between x -axis and x '-axis. Then, observe that     Thus, using rotation formula (4) we get:      Now we substitute these for x ′ and y ′ in (1) to obtain     And simplifying this we get     which is the equation of the ellipse in the xy - coordinate system.   "
},
{
  "id": "exercises-rotation-of-coordinate-axes-1",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#exercises-rotation-of-coordinate-axes-1",
  "type": "Exercise",
  "number": "4.6.1.1",
  "title": "",
  "body": "  Suppose the xy -coordinate axes are rotated 60° counterclockwise about the origin to obtain the new x ' y '-coordinate system.     If each of the following are coordinates of points relative to the xy -system, find the coordinates of the points relative to the x ′ y ′ - system.   (5, 0)    (1, 4)    (0, 1)    (−1\/2, 5\/2)    (−2, −1)       Find the equation of the following lines and conics relative to the new x ′ y ′ - system.                                                       "
},
{
  "id": "exercises-rotation-of-coordinate-axes-2",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#exercises-rotation-of-coordinate-axes-2",
  "type": "Exercise",
  "number": "4.6.1.2",
  "title": "",
  "body": "  Suppose the -coordinate axes are rotated 30° counterclockwise about the origin to obtain the new -coordinate system. If the following points are with respect to the new -system, what is the coordinates of each point with respect to the old -system?     (0, 2)    (−2, 4)    (1, −3)           "
},
{
  "id": "subsec-rotation-of-coordinate-axes-22",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#subsec-rotation-of-coordinate-axes-22",
  "type": "Checkpoint",
  "number": "4.6.7",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-rotation-of-coordinate-axes-23",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#subsec-rotation-of-coordinate-axes-23",
  "type": "Checkpoint",
  "number": "4.6.8",
  "title": "",
  "body": " Add review "
},
{
  "id": "thm-4analysis",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#thm-4analysis",
  "type": "Theorem",
  "number": "4.6.9",
  "title": "",
  "body": "  Consider the general second degree equation of the form (2), i..e.,   , where ........... (2)  there is a rotation angle through which the -coordinate system in which Equation (2) reduces to the form   ........... (3)   "
},
{
  "id": "subsec-analysis-of-the-general-second-26",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#subsec-analysis-of-the-general-second-26",
  "type": "Remark",
  "number": "4.6.10",
  "title": "",
  "body": " If , then .  "
},
{
  "id": "subsec-analysis-of-the-general-second-31",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#subsec-analysis-of-the-general-second-31",
  "type": "Example",
  "number": "4.6.11",
  "title": "",
  "body": "  Use rotation of axes to eliminate the term in each of the following equations,\\ describe the locus (type of conic section) and sketch the graph of the equation                     Given:  . So, from the above Remark, the rotation angle is  , and .  Now we substitute these for and in the given equation:        Expanding the squared expressions, combining like terms and simplifying, we obtain  or,  This is an equation of a parabola. Its vertex is relative to the -system, principal axis is on -axis and opens towards negative direction. (You can show that its vertex is relative to the -system.) The graph of the equation is sketched in      (for accessibility)      Given: , and .  Hence,   The terminal side of is through since .  . Now as , both and are positive. Hence,    This implies the -axis is through the coordinate point , that is the line .  Therefore, using the rotation formula (3), we get  and  Now we substitute these for and in the given equation to obtain        Expanding the squared expressions, combining like terms and simplifying, we obtain   Completing the square and dividing by 100 to get   which is an ellipse with center at relative to the -system, major axis on - axis (which is the line ), length of major axis = 4 and length of minor axis = 2. (You can show that the center is relative to the -system). The graph of the equation is sketched in      (for accessibility)        "
},
{
  "id": "exercises-analysis-of-the-general-1",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#exercises-analysis-of-the-general-1",
  "type": "Exercise",
  "number": "4.6.2.1",
  "title": "",
  "body": "  Find an equation of the conic section having the given properties and sketch its graph.   Ellipsi with center at origin, foci at and , and length of major axis .    Parabola whose vertex is at and focus     Hyperbola whose foci are and , and length of transverse axis .      "
},
{
  "id": "exercises-analysis-of-the-general-2",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#exercises-analysis-of-the-general-2",
  "type": "Exercise",
  "number": "4.6.2.2",
  "title": "",
  "body": "  Use rotation of axes to eliminate the term in each of the following equations, describe the locus (type of conic section) and sketch the graph of the equation.                                     "
},
{
  "id": "exercises-analysis-of-the-general-3",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#exercises-analysis-of-the-general-3",
  "type": "Exercise",
  "number": "4.6.2.3",
  "title": "",
  "body": "  Show that if , then the graph of     is a hyperbola if , and two intersecting lines if    "
},
{
  "id": "subsec-analysis-of-the-general-second-33",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#subsec-analysis-of-the-general-second-33",
  "type": "Checkpoint",
  "number": "4.6.14",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-analysis-of-the-general-second-34",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#subsec-analysis-of-the-general-second-34",
  "type": "Checkpoint",
  "number": "4.6.15",
  "title": "",
  "body": " Add review "
},
{
  "id": "subsec-analysis-of-the-general-second-35",
  "level": "2",
  "url": "sec-the-general-second-degree-equation.html#subsec-analysis-of-the-general-second-35",
  "type": "Checkpoint",
  "number": "4.6.16",
  "title": "",
  "body": " Add review "
},
{
  "id": "basic-maths-for-natural-sciences-8",
  "level": "1",
  "url": "basic-maths-for-natural-sciences-8.html",
  "type": "Chapter",
  "number": "5",
  "title": "References",
  "body": "References   Alemayehu Haile and Yismaw Alemu, Mathematics an Introductory Course ,   Department of Mathematics, Addis Ababa University   Demisu Gemeda and Seid Mohammed, Fundamental Cocepts of Algebra, AAU  Semu Mitiku Kassa, Berhanu Guta Wordofa and Tilahun Abebaw Kebede, Engineering Mathematics I, Galaxy University Books Series, , 2017.  Edwin J. Purcell, Dale Varberg, Calculus with Analytic Geometry  G. Chartrand, A. D. Polimeni and P. Zihang, Mathematical proofs: a transition to   advanced mathematics 3 rd edition, Pearson Education. Inc.   Goodman Hirsch, Precalculus-Understanding functions, 2000  James Ward Brown and Ruel V. Churchill: Complex Numbers and Applications, 7 th   edition   Michael D. Alder: An Introduction to Complex Analysis to Engineers, 1997   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt . By the following contibutiong team;   Rodgers Maragia    Daniel Murunga    Henry Onyango    Isdora Akinyi    Michael Onyimbo    Joseph Baya    Armstrong Opondo    Eric Morara    Sheila Cherotich    Hariet Moraa    Monica Auma     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
