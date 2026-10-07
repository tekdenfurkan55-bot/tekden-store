import { LockIcon, ShieldCheckIcon, TruckIcon } from "./icons";

const badges = [
  { Icon: TruckIcon, label: "Ücretsiz hızlı kargo" },
  { Icon: ShieldCheckIcon, label: "2 yıl garanti" },
  { Icon: LockIcon, label: "Güvenli ödeme" },
] as const;

export function TrustBadges({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <ul className={`trust-badges trust-badges--${tone}`} aria-label="Alışveriş güvenceleri">
      {badges.map(({ Icon, label }) => <li key={label}><Icon size={30} /><span>{label}</span></li>)}
    </ul>
  );
}
