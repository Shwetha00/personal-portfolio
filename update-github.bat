@echo off
echo Updating GitHub repository...
echo.

echo Adding all files...
git add .

echo Committing changes...
git commit -m "Update portfolio: Add projects page, fix contact form, remove about page, update navigation"

echo Pushing to GitHub...
git push origin main

echo.
echo Done! Your GitHub repository has been updated.
pause