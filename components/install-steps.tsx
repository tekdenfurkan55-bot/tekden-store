import { InstallScene } from "./illustrations";

export const installSteps = [
  [1, "Yerleştirin", "V30’u ön cama, görüşünüzü kapatmayacak şekilde konumlandırın."],
  [2, "Bağlayın", "Arka kamerayı ve güç kablosunu takın. Park modu için OBD kitini kullanın."],
  [3, "Kayda başlayın", "microSD kartı takın ve kayda başlayın."],
] as const;

export function InstallSteps() {
  return (
    <ol>
      {installSteps.map(([step, title, text]) => (
        <li key={step} className="install-card">
          <InstallScene step={step} />
          <div className="install-card__text"><span>{step}</span><strong>{title}</strong><p>{text}</p></div>
        </li>
      ))}
    </ol>
  );
}
