@echo off
REM Helper script to initialize and push the Backend folder to GitHub.
REM Run from the project root: push_to_github.bat

REM Configure your name/email (adjust as needed)
git config user.name "g-kalani"
set /p EMAIL=Enter your email for git config (leave blank to keep existing): 
if not "%EMAIL%"=="" git config user.email "%EMAIL%"

REM Initialize repo if needed
git rev-parse --is-inside-work-tree >nul 2>&1 || (
  git init
  git checkout -b main
)

REM Add remote (replace if exists)
if NOT "%%1"=="" (
  set REMOTE_URL=%%1
) else (
  set REMOTE_URL=https://github.com/g-kalani/Backend.git
)

git remote remove origin 2>nul || rem
git remote add origin %REMOTE_URL%

REM Add, commit and push
git add .
git commit -m "Initial commit" || echo "No changes to commit"
git push -u origin main

echo Done. If authentication failed, create a Personal Access Token and use it when prompted.