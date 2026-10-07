/* TEKDEN çizgi ikon seti: 24px ızgara, 1.6 çizgi, siyah çizgi + mavi vurgu. */
type IconProps = { size?: number; className?: string };

const base = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true,
});

const ACCENT = "var(--blue)";

export function TruckIcon({ size = 28, className }: IconProps) {
  return <svg {...base(size, className)}><path d="M2.5 6.5h11v9.5h-11z" /><path d="M13.5 9.5h4.2l3 3.4V16h-7.2" /><circle cx="6.5" cy="17.3" r="1.9" stroke={ACCENT} /><circle cx="17" cy="17.3" r="1.9" stroke={ACCENT} /><path d="M5 10h4" stroke={ACCENT} /></svg>;
}
export function ShieldCheckIcon({ size = 28, className }: IconProps) {
  return <svg {...base(size, className)}><path d="M12 2.8 4.5 5.6v5.6c0 4.6 3.1 8.4 7.5 10 4.4-1.6 7.5-5.4 7.5-10V5.6z" /><path d="m8.6 12 2.4 2.4 4.6-4.8" stroke={ACCENT} /></svg>;
}
export function LockIcon({ size = 28, className }: IconProps) {
  return <svg {...base(size, className)}><rect x="4.5" y="10.5" width="15" height="10.5" rx="2" /><path d="M8 10.5V7.6a4 4 0 0 1 8 0v2.9" /><path d="M12 14.4v2.6" stroke={ACCENT} /></svg>;
}
export function CameraFrontIcon({ size = 24, className }: IconProps) {
  return <svg {...base(size, className)}><rect x="2.5" y="7" width="19" height="11" rx="2" /><circle cx="12" cy="12.5" r="3" stroke={ACCENT} /><path d="M9 7V5h6v2" /></svg>;
}
export function CameraRearIcon({ size = 24, className }: IconProps) {
  return <svg {...base(size, className)}><rect x="6" y="6" width="12" height="12" rx="3" /><circle cx="12" cy="12" r="2.6" stroke={ACCENT} /><path d="M3 12h3M18 12h3" /></svg>;
}
export function WifiIcon({ size = 24, className }: IconProps) {
  return <svg {...base(size, className)}><path d="M3 9a13 13 0 0 1 18 0" /><path d="M6.2 12.3a8.4 8.4 0 0 1 11.6 0" /><path d="M9.4 15.5a3.9 3.9 0 0 1 5.2 0" stroke={ACCENT} /><circle cx="12" cy="18.6" r="0.9" fill="currentColor" stroke="none" /></svg>;
}
export function GpsIcon({ size = 24, className }: IconProps) {
  return <svg {...base(size, className)}><path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" stroke={ACCENT} /></svg>;
}
export function HdrIcon({ size = 24, className }: IconProps) {
  return <svg {...base(size, className)}><circle cx="12" cy="12" r="8.5" /><path d="M12 3.5v17" /><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill={ACCENT} stroke={ACCENT} fillOpacity={0.9} /></svg>;
}
export function ParkingIcon({ size = 24, className }: IconProps) {
  return <svg {...base(size, className)}><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M9.5 17V7.5h3.3a2.8 2.8 0 0 1 0 5.6H9.5" stroke={ACCENT} /></svg>;
}
export function ChevronDownIcon({ size = 14, className }: IconProps) {
  return <svg {...base(size, className)} strokeWidth={2.2}><path d="m6 9 6 6 6-6" /></svg>;
}
export function PadlockSolid({ size = 22, className }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true"><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /><rect x="5" y="10" width="14" height="10.5" rx="2.2" fill="currentColor" /></svg>;
}
export function MicIcon({ size = 24, className }: IconProps) {
  return <svg {...base(size, className)}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0" /><path d="M12 17.5V21M8.5 21h7" /><path d="M3 8.5v4M21 8.5v4" stroke={ACCENT} /></svg>;
}
export function ScreenIcon({ size = 24, className }: IconProps) {
  return <svg {...base(size, className)}><rect x="2.5" y="6" width="19" height="12" rx="2" /><path d="M6 14.5 9.5 11l3 3 2-2 3.5 3" stroke={ACCENT} /></svg>;
}
export function LanguageIcon({ size = 24, className }: IconProps) {
  return <svg {...base(size, className)}><path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3.5V15H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /><path d="M7 9h5M9.5 9v4" stroke={ACCENT} /><path d="M19 9h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v2.5L16 18h-3" /></svg>;
}
