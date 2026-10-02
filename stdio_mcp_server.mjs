#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "wellfound",
  boardId: "wellfound-official",
  domain: "wellfound.com",
  npmName: "zc-wellfound-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
