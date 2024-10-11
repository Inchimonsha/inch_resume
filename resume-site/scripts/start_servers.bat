@echo off

start cmd /k "cd resume-site\ruby_backend && rails server -p 4568"
start cmd /k "cd resume-site\frontend\src && npm start"
start cmd /k "cd resume-site\backend && python app.py"

exit