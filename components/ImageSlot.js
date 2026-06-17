"use client";

// 画像があれば「ラベル＋画像」を表示、なければ「あとで差し込む」プレースホルダーを表示。
export default function ImageSlot({ src, label = "画像", hint }) {
  if (src) {
    return (
      <figure className="slot-fig">
        {label ? <figcaption className="slot-cap">{label}</figcaption> : null}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label} className="slot-img" />
      </figure>
    );
  }
  return (
    <div className="slot-empty" role="img" aria-label={`${label}（未設定）`}>
      <div className="slot-icon">🖼️</div>
      <div className="slot-text">
        {label}をここに表示できます
        {hint ? <span className="slot-hint">{hint}</span> : null}
      </div>
    </div>
  );
}
