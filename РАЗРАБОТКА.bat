@echo off
title PhoneRank — режим разработки
color 0B
cd /d "%~dp0"

echo  PhoneRank — режим разработки (горячая перезагрузка)
echo  Сайт: http://localhost:3000
echo  Сеть: http://192.168.31.219:3000
echo.

npm run dev
pause
