// src/lib/solar.ts
export type Coords = { lat: number; lon: number };
const rad = (deg: number) => (Math.PI / 180) * deg;
const deg = (radv: number) => (180 / Math.PI) * radv;
function getDayOfYear(d: Date): number { const s = new Date(d.getFullYear(),0,0); return Math.floor(((d as any)-(s as any))/(1000*60*60*24)); }
function solarTime(isSunrise: boolean, date: Date, lat: number, lon: number, tzOffsetMin: number): number | null {
  const N = getDayOfYear(date); const lngHour = lon/15; const t = N + ((isSunrise?6:18)-lngHour)/24;
  const M = (0.9856*t)-3.289; let L = M + (1.916*Math.sin(rad(M))) + (0.020*Math.sin(rad(2*M))) + 282.634; L=((L+360)%360);
  let RA = deg(Math.atan(0.91764*Math.tan(rad(L)))); RA=((RA+360)%360); const Lq=Math.floor(L/90)*90; const RAq=Math.floor(RA/90)*90; RA=RA+(Lq-RAq); RA=RA/15;
  const sinDec=0.39782*Math.sin(rad(L)); const cosDec=Math.cos(Math.asin(sinDec)); const zenith=rad(90.833);
  const cosH=(Math.cos(zenith)-(sinDec*Math.sin(rad(lat))))/(cosDec*Math.cos(rad(lat))); if(cosH>1||cosH<-1) return null;
  let H=isSunrise?(360-deg(Math.acos(cosH))):deg(Math.acos(cosH)); H=H/15; const T=H+RA-(0.06571*t)-6.622;
  let UT=(T-lngHour)%24; if(UT<0) UT+=24; const localOffsetHours=-tzOffsetMin/60; const localTime=UT+localOffsetHours;
  return (localTime+24)%24;
}
export function getSunTimes(date: Date, coords: Coords, tzOffsetMin: number){ return { sunrise: solarTime(true,date,coords.lat,coords.lon,tzOffsetMin), sunset: solarTime(false,date,coords.lat,coords.lon,tzOffsetMin) }; }
export function isDaylightNow(date: Date, coords: Coords, tzOffsetMin: number): boolean {
  const {sunrise, sunset} = getSunTimes(date, coords, tzOffsetMin);
  if (sunrise==null || sunset==null){ const h=date.getHours(); return h>=7 && h<19; }
  const hNow = date.getHours()+date.getMinutes()/60+date.getSeconds()/3600;
  return (sunrise<sunset) ? (hNow>=sunrise && hNow<sunset) : !(hNow>=sunset && hNow<sunrise);
}
const GEO_KEY='rs-geo';
const FALLBACK_FOR_TZ: Record<string, Coords> = {
  'America/Sao_Paulo': { lat: -23.55, lon: -46.63 },
  'America/Bahia':     { lat: -12.97, lon: -38.50 },
  'America/Fortaleza': { lat:  -3.73, lon: -38.52 },
  'America/Manaus':    { lat:  -3.10, lon: -60.02 },
  'America/Belem':     { lat:  -1.45, lon: -48.48 },
  'America/Recife':    { lat:  -8.05, lon: -34.88 },
  'America/Cuiaba':    { lat: -15.60, lon: -56.10 },
  'America/Campo_Grande': { lat: -20.47, lon: -54.62 },
  'America/Porto_Velho':  { lat:  -8.76, lon: -63.90 },
  'America/Boa_Vista':    { lat:   2.82, lon: -60.67 },
  'America/Rio_Branco':   { lat:  -9.97, lon: -67.81 },
};
export function getCachedCoords(): Coords | null { try{ const raw=localStorage.getItem(GEO_KEY); if(!raw) return null; const o=JSON.parse(raw); if(typeof o?.lat==='number'&&typeof o?.lon==='number') return o as Coords; return null }catch{ return null } }
export function setCachedCoords(c: Coords){ try{ localStorage.setItem(GEO_KEY, JSON.stringify(c)) }catch{} }
export function guessCoordsByTimeZone(): Coords { const tz=Intl.DateTimeFormat().resolvedOptions().timeZone; const m=(FALLBACK_FOR_TZ as any)[tz]; return m? m as Coords : { lat:-15.78, lon:-47.93 }; }
export function tryFetchCoordsOnce(cb?: () => void){ if(!navigator.geolocation) return; navigator.geolocation.getCurrentPosition((pos)=>{setCachedCoords({lat:pos.coords.latitude,lon:pos.coords.longitude}); if(cb) cb();}, ()=>{}, { enableHighAccuracy:false, timeout:5000, maximumAge:86400000 }); }
