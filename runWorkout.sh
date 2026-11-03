#!/data/data/com.termux/files/usr/bin/bash
# Serves the workout timer page and opens it.
#   runWorkout         start (or say it is already running) and open http://localhost:8095/ken/
#   runWorkout stop    stop it
# A plain static server: edits show on the next page reload, no restart needed.
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT="${PORT:-8095}"
PIDFILE="$HOME/.cache/workout.pid"
URL="http://localhost:$PORT/ken/"
mkdir -p "$(dirname "$PIDFILE")"

running() { [ -f "$PIDFILE" ] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; }

case "${1:-start}" in
  stop)
    if running; then kill "$(cat "$PIDFILE")" && rm -f "$PIDFILE" && echo "workout: stopped"; else echo "workout: not running"; fi
    exit 0 ;;
  start) ;;
  *) echo "usage: runWorkout [start|stop]" >&2; exit 2 ;;
esac

if running; then
  echo "workout: already running (pid $(cat "$PIDFILE"))"
else
  nohup python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$DIR" > /dev/null 2>&1 &
  echo $! > "$PIDFILE"
  sleep 1
  echo "workout: started (pid $(cat "$PIDFILE"))"
fi
termux-open-url "$URL" 2>/dev/null || echo "open $URL"
