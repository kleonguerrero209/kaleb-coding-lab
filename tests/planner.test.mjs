import assert from 'node:assert/strict';
import {test} from 'node:test';
import {planTasks} from '../lib/planner.ts';
const future=new Date(Date.now()+86400000);future.setUTCHours(9,0,0,0);const at=m=>new Date(+future+m*60000).toISOString();
test('avoids fixed events and maintains buffer',()=>{const r=planTasks([{id:'a',title:'A',minutes:60}],[{start:at(0),end:at(60)}],[{start:at(0),end:at(240)}],10);assert.equal(r.planned[0].start,at(70));});
test('rejects work that cannot fit before deadline',()=>{const r=planTasks([{id:'a',title:'A',minutes:120,due:at(60)}],[],[{start:at(0),end:at(240)}]);assert.equal(r.planned.length,0);assert.equal(r.unscheduled.length,1)});
test('prioritizes deadlines then importance and excludes completed tasks',()=>{const r=planTasks([{id:'low',title:'L',minutes:30,priority:'Low'},{id:'done',title:'D',minutes:30,done:true},{id:'high',title:'H',minutes:30,priority:'High'},{id:'due',title:'Due',minutes:30,due:at(60)}],[],[{start:at(0),end:at(240)}],0);assert.deepEqual(r.planned.map(t=>t.id),['due','high','low']);});
test('uses next day when the current day is full',()=>{const r=planTasks([{id:'a',title:'A',minutes:60}],[{start:at(0),end:at(120)}],[{start:at(0),end:at(120)},{start:at(1440),end:at(1560)}],0);assert.equal(r.planned[0].start,at(1440))});
