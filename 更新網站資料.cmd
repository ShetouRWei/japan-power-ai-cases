@echo off
cd /d "%~dp0"
set "CODEX_NODE=C:\Users\joekao\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%CODEX_NODE%" (
  "%CODEX_NODE%" build-data.mjs
) else (
  node build-data.mjs
)
if errorlevel 1 (
  echo.
  echo 更新失敗，請確認已安裝 Node.js。
) else (
  echo.
  echo 更新完成，可開啟 index.html。
)
pause
