#!/bin/sh

find top/ -not \( -name .svn -prune -o -name .git -prune \) -type f -print0 | xargs -0 sed -i "s|<quiz>|<quiz xmlns=\"http://stack-assessment.org/2025/moodle-question\">|g"