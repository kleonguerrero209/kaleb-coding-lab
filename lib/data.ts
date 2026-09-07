import { env } from 'cloudflare:workers';
export function database(){if(!env.DB)throw new Error('Storage is unavailable. Please try again.');return env.DB as D1Database;}
export async function list(owner:string){const rows=await database().prepare('SELECT id,kind,data,updated FROM records WHERE owner = ? ORDER BY updated DESC').bind(owner).all<{id:string;kind:string;data:string;updated:number}>();return rows.results.map(r=>({...JSON.parse(r.data),id:r.id,kind:r.kind,updated:r.updated}));}
