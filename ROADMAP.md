# kalebOS rebuild

Source brief: https://github.com/kleonguerrero209/kaleb-coding-lab (main e507195461a3dcdc313ca23f3b43478db4b7a4db).
Original: browser dashboard with transient tasks and six areas: Cyber Lab, workouts, wrestling timer, Study Center, Home Lab, finance.

## Required completion criteria
- Responsive dashboard accessible on iPhone and Mac with durable authenticated storage.
- Tasks and notes: create, edit, complete, delete, filter by area; task durations, deadlines, priorities.
- Calendar: authenticated hosted iCloud connection; read appointments including recurring/all-day events; write/update only app-owned blocks; reminders in calendar; recover safely from conflicts and failed sync.
- Scheduler: deadline-aware free slots, buffers, protected fixed events; replanning; tests.
- Assistant: natural-language capture and planning with actual model integration (current command assistant is limited).
- Background operation while Mac/browser closed: hosted recurring scheduler and delivered reminders verified end to end.
- Live iCloud verification and cross-device user testing.

## In progress
- Dashboard, task and note APIs, scheduling engine and preference forms implemented. Core API checks and four scheduling tests pass; TypeScript and production build pass.
- Private Site registered; not published yet.
- Encrypted iCloud connection and app-owned event writes implemented; no live account test yet.
- Background scheduler service and general AI assistant not yet configured. User confirmed they have neither an OpenAI API nor Cloudflare account. This is a setup dependency, not an implementation success.
- WebMCP tools implemented; no supported live WebMCP contract test context used.
- Private publication is pending full functionality and service setup; do not publish an incomplete slice as the completed product.

Do not present this project as complete until every required workflow above is verified or the user explicitly changes scope.
