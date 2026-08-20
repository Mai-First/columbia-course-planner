#!/usr/bin/env python3
"""Dev server for the planner. Same as `python3 -m http.server` but tells the
browser never to cache, so edits always show up on plain reload."""
import http.server
import sys


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
    http.server.ThreadingHTTPServer(("", port), NoCacheHandler).serve_forever()
