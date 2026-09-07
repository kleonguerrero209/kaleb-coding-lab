import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';
export const records=sqliteTable('records',{id:text('id').primaryKey(),owner:text('owner').notNull(),kind:text('kind').notNull(),data:text('data').notNull(),updated:integer('updated').notNull()},t=>[index('idx_records_owner_kind').on(t.owner,t.kind)]);
export const connections=sqliteTable('connections',{owner:text('owner').primaryKey(),secret:text('secret').notNull()});
