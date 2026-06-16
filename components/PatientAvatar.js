"use client";

// 表情が変わる患者アバター（SVG・超軽量）
// emotion: "anxious" | "neutral" | "relieved" | "happy"
// variant: "young"（標準）| "elder"（白髪の高齢者）
export default function PatientAvatar({ emotion = "anxious", size = 200, variant = "young" }) {
  const isElder = variant === "elder" || variant === "elder_female";
  const isElderF = variant === "elder_female";
  const hair = isElder ? "#e6e6e6" : "#4a3f36";
  const hairShade = isElder ? "#cfcfcf" : "#5a4d42";
  const brow = isElder ? "#b7b1a8" : "#6b5a4a";
  const skin = isElder ? "#f4dabf" : "#ffe1c4";
  const skinStroke = isElder ? "#e2bf9f" : "#f0c9a4";

  const faces = {
    anxious: {
      blush: 0,
      brow: <>
        <path d="M58 78 q12 -8 24 0" stroke={brow} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M118 78 q12 -8 24 0" stroke={brow} strokeWidth="4" fill="none" strokeLinecap="round" />
      </>,
      eyes: <>
        <ellipse cx="72" cy="98" rx="9" ry="11" fill="#3a3a3a" />
        <ellipse cx="128" cy="98" rx="9" ry="11" fill="#3a3a3a" />
        <circle cx="69" cy="94" r="3" fill="#fff" />
        <circle cx="125" cy="94" r="3" fill="#fff" />
      </>,
      mouth: <path d="M82 138 q18 -10 36 0" stroke="#7a4a4a" strokeWidth="4" fill="none" strokeLinecap="round" />,
      sweat: <path d="M150 86 q6 10 0 16 q-6 -6 0 -16Z" fill="#8fd3e8" opacity="0.9" />,
    },
    neutral: {
      blush: 0.25,
      brow: <>
        <path d="M58 80 q12 -3 24 0" stroke={brow} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M118 80 q12 -3 24 0" stroke={brow} strokeWidth="4" fill="none" strokeLinecap="round" />
      </>,
      eyes: <>
        <circle cx="72" cy="100" r="9" fill="#3a3a3a" />
        <circle cx="128" cy="100" r="9" fill="#3a3a3a" />
        <circle cx="69" cy="96" r="3" fill="#fff" />
        <circle cx="125" cy="96" r="3" fill="#fff" />
      </>,
      mouth: <path d="M86 140 h28" stroke="#7a4a4a" strokeWidth="4" fill="none" strokeLinecap="round" />,
      sweat: null,
    },
    relieved: {
      blush: 0.55,
      brow: <>
        <path d="M58 78 q12 -2 24 1" stroke={brow} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M118 79 q12 -3 24 0" stroke={brow} strokeWidth="4" fill="none" strokeLinecap="round" />
      </>,
      eyes: <>
        <path d="M63 100 q9 8 18 0" stroke="#3a3a3a" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M119 100 q9 8 18 0" stroke="#3a3a3a" strokeWidth="5" fill="none" strokeLinecap="round" />
      </>,
      mouth: <path d="M84 136 q16 12 32 0" stroke="#7a4a4a" strokeWidth="4" fill="none" strokeLinecap="round" />,
      sweat: null,
    },
    happy: {
      blush: 0.8,
      brow: <>
        <path d="M58 74 q12 -3 24 0" stroke={brow} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M118 74 q12 -3 24 0" stroke={brow} strokeWidth="4" fill="none" strokeLinecap="round" />
      </>,
      eyes: <>
        <path d="M62 98 q10 10 20 0" stroke="#3a3a3a" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M118 98 q10 10 20 0" stroke="#3a3a3a" strokeWidth="5" fill="none" strokeLinecap="round" />
      </>,
      mouth: <path d="M80 134 q20 22 40 0" stroke="#7a4a4a" strokeWidth="4" fill="#fff5f0" strokeLinecap="round" />,
      sweat: null,
    },
  };

  const f = faces[emotion] || faces.neutral;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={`患者の表情: ${emotion}`}
      style={{ display: "block", transition: "transform .3s ease" }}
    >
      {/* 頭・顔の輪郭 */}
      <circle cx="100" cy="105" r="78" fill={skin} stroke={skinStroke} strokeWidth="3" />
      {/* 髪（標準＝短髪／高齢男性＝白髪後退／高齢女性＝白髪ふんわり） */}
      {isElderF ? (
        <>
          <path d="M22 108 q-2 -76 78 -76 q80 0 78 76 q-10 -30 -30 -40 q4 12 0 22 q-14 -22 -34 -24 q4 10 -2 18 q-12 -14 -26 -14 q-14 0 -26 14 q-6 -8 -2 -18 q-20 2 -34 24 q-4 -10 0 -22 q-20 10 -30 40Z" fill={hair} stroke="#d6d6d6" strokeWidth="1.5" />
          <path d="M100 38 q-26 4 -36 24 q20 -12 38 -11 q-2 -7 -2 -13Z" fill={hairShade} opacity="0.4" />
          <path d="M70 122 q-6 14 -2 24" stroke="#e3bd9b" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
          <path d="M130 122 q6 14 2 24" stroke="#e3bd9b" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
        </>
      ) : isElder ? (
        <>
          <path d="M34 92 q4 -50 66 -52 q62 2 66 52 q-16 -22 -40 -24 q4 8 2 14 q-12 -12 -28 -12 q-16 0 -28 12 q-2 -6 2 -14 q-24 2 -40 24Z" fill={hair} stroke="#d2d2d2" strokeWidth="1.5" />
          <path d="M100 40 q-22 4 -30 22 q18 -10 34 -10 q-2 -7 -4 -12Z" fill={hairShade} opacity="0.5" />
          {/* 高齢の柔らかいほうれい線 */}
          <path d="M70 120 q-6 14 -2 24" stroke="#e3bd9b" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
          <path d="M130 120 q6 14 2 24" stroke="#e3bd9b" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
        </>
      ) : (
        <>
          <path d="M30 90 q3 -56 70 -58 q67 2 70 58 q-15 -27 -70 -27 q-55 0 -70 27Z" fill={hair} />
          <path d="M96 38 q-24 6 -32 26 q20 -12 40 -11 q-4 -9 -8 -15Z" fill={hairShade} opacity="0.55" />
        </>
      )}
      {/* ほっぺ */}
      <circle cx="58" cy="120" r="12" fill="#ff9a8b" opacity={f.blush} />
      <circle cx="142" cy="120" r="12" fill="#ff9a8b" opacity={f.blush} />
      {f.brow}
      {f.eyes}
      {f.mouth}
      {f.sweat}
    </svg>
  );
}
