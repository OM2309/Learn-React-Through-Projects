echo "Starting Frontend Server..."
start cmd.exe /C "cd client && npm run dev"
echo "Starting Backend Server..."
start cmd.exe /C "cd server && npm run server"