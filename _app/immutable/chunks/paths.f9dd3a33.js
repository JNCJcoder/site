import{n as c,s as h}from"./scheduler.b3c879a1.js";const e=[];function q(o,l=c){let i;const n=new Set;function r(t){if(h(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=l(r,f)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_go5qhp)==null?void 0:u.base)??"/site";var a;const d=((a=globalThis.__sveltekit_go5qhp)==null?void 0:a.assets)??p;export{d as a,p as b,q as w};
