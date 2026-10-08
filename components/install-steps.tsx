import Image from "next/image";

export const installSteps = [
  [1, "Yerleştirin", "V30’u ön cama, görüşünüzü kapatmayacak şekilde yerleştirin."],
  [2, "Bağlayın", "Arka kamera kablosunu ana kameraya takın. Güç için OBD Park Kiti’ni ya da kutudan çıkan çakmaklık kablosunu ana kameraya bağlayın."],
  [3, "Kayda başlayın", "microSD kartı takın, kamera kayda başlar."],
] as const;

const alts = [
  "V30 ön cama, aynanın üstüne yerleştirilir",
  "Arka kamera ve güç kablosu (OBD Park Kiti ya da çakmaklık kablosu) ana kameraya bağlanır",
  "microSD kart kameranın yan yuvasına takılır",
];

export function InstallSteps() {
  return (
    <ol>
      {installSteps.map(([step, title, text]) => (
        <li key={step} className="install-card">
          <Image className="install-card__img" src={`/media/kurulum/kurulum-${step}.webp`} alt={alts[step - 1]} fill sizes="(max-width: 860px) 100vw, 33vw" />
          <div className="install-card__text"><span>{step}</span><strong>{title}</strong><p>{text}</p></div>
        </li>
      ))}
    </ol>
  );
}
