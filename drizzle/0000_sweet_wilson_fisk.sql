CREATE TABLE `connections` (
	`owner` text PRIMARY KEY NOT NULL,
	`secret` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `records` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`kind` text NOT NULL,
	`data` text NOT NULL,
	`updated` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_records_owner_kind` ON `records` (`owner`,`kind`);