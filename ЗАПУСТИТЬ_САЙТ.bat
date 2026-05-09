@echo off
title PhoneRank — работает
color 0A
cd /d "%~dp0"

echo.
echo  =============================================
echo   PhoneRank — Рейтинг телефонов
echo  =============================================
echo.
echo  Запуск сервера...
echo.

call npm run build

echo.
echo  =============================================
echo   САЙТ ЗАПУЩЕН! Держи это окно открытым.
echo  =============================================
echo.
echo  Компьютер:  http://localhost:3000
echo  Телефон:    http://192.168.31.219:3000
echo             (тот же WiFi что и компьютер)
echo.
echo  Нажми Ctrl+C чтобы остановить сайт
echo  =============================================
echo.

npx next start --hostname 0.0.0.0 --port 3000
pause
