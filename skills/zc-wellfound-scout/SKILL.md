---
name: zc-wellfound-scout
description: >-
  Search jobs on wellfound.com via zc-wellfound-scout-mcp.
  No usable official seeker MCP; uses the portable channel scraper MCP.
  Supports query, location, remoteOnly. Read-only. Works in any Agent Host that can
  mount stdio MCP (Cursor, Claude Code, Codex, Zhencheng, …).
---

# Wellfound 创业搜岗 · Skill

## When to use

- Target board: **wellfound.com**
- No usable official MCP / HTTP Jobs API / RSS for seekers
- User provides role keywords and optional location / remote preference

## Tools (`zc-wellfound-scout-mcp`)

| Tool | Args |
|---|---|
| `search_jobs` | `query?`, `location?`, `remoteOnly?`, `postedAfter?`, `limit?` |
| `get_job` | `url` |

## Example

```json
{
  "query": "engineer",
  "location": "远程",
  "remoteOnly": true,
  "limit": 20
}
```

Returns jobs with `title`, `company`, `location`, `applyUrl`, `publishedAt`, `sourceUrl`.

## Host install

Mount the MCP package per its README (`mcp.json` / allowlist). Runtime uses the **bundled standalone scout runner** — no Zhencheng monorepo required. Any Host that can `tools/call` works.

## Limits

- Read-only; does not apply or store site cookies
- `location` is a **soft** filter on posting location text
- Still subject to site rate limits / ToS
