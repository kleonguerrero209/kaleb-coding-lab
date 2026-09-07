# kalebOS

A personal dashboard rebuilt from `kleonguerrero209/kaleb-coding-lab`, with tasks, notes, six life areas, an XP counter, a wrestling round timer, daily planning and a hosted iCloud connection.

## Status
This is an in-progress rebuild, not a completed autonomous assistant. The app compiles and core API/planner tests pass. Real iCloud account connection and round-trip testing remain pending. The assistant currently supports explicit planning/capture commands; general AI and an always-on background scheduler are not yet configured. See ROADMAP.md.

## Development
Node 22.13+ and pnpm are required. Install with `pnpm install`, generate schema migrations with `pnpm db:generate`, and run `pnpm dev`. The Sites plugin provides local sign-in. Apply `drizzle/*.sql` to the local D1 database before testing writes. Run `pnpm build`, `pnpm exec tsc --noEmit`, and `node --experimental-strip-types --test tests/planner.test.mjs`.

## Calendar setup
Set `CALENDAR_ENCRYPTION_KEY` to 32 random bytes encoded as base64, in an ignored local `.env` and as a production Sites secret. Keep this key stable: changing it makes saved calendar credentials unreadable. Use a separate iCloud calendar named `kalebOS`. Connect through the app’s private Preferences form using an Apple app-specific password, never the primary Apple Account password.

Appointments are read before planning. Only app-generated task events in the kalebOS calendar are changed. A calendar event contains a 10-minute display alarm; delivery depends on Apple Calendar notification settings. Failed calendar operations surface an error and do not mean syncing succeeded. External calendar writes and D1 updates are not a single transaction; full reconciliation and automated retry remain on the roadmap.

## Privacy
All saved records are scoped to the authenticated user. Calendar credentials are AES-GCM encrypted with owner-bound additional authenticated data and a server-only key. Requests with a mismatched origin are rejected. No real personal data or credentials are included in source.
