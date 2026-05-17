export default function BrandLogo({
  className = '',
  markClassName = 'h-9 w-16',
  textClassName = 'text-2xl',
  monochrome = false,
  lightWordmark = false,
  showWordmark = true,
}) {
  const leafColor = monochrome ? '#445246' : '#3DB54A';
  const wordmarkClass = monochrome
    ? 'text-[#445246]'
    : lightWordmark
      ? 'text-cream'
      : 'text-[#313338]';

  return (
    <span className={`inline-flex items-end gap-2.5 leading-none ${className}`}>
      <svg
        viewBox="0 0 120 78"
        className={`${markClassName} flex-shrink-0`}
        aria-hidden="true"
      >
        <path
          d="M59.3 66.5C58.9 64.9 58.2 62.8 56.8 60.2C53.3 53.6 45.3 43.8 33.5 35.8C22.4 28.2 10.8 24.6 2.2 24.7C1 29.9 0.4 35.7 0.4 42.2C0.4 57.8 8.6 66.8 23.8 70.4C36.3 73.3 49.5 70.8 59.3 66.5Z"
          fill={leafColor}
        />
        <path
          d="M57.2 67.5C59.2 65.5 61.8 62.9 64.8 59.8C75.6 48.4 89.7 33.8 101 18.1C98.5 26 93.4 36.2 84.9 46.5C76.4 56.7 66.6 64.1 57.2 67.5Z"
          fill="#FFFFFF"
        />
        <path
          d="M67 70.9C65.6 67.2 65.2 62.1 66.1 56.3C67.7 45 73.5 31.2 84.4 19.7C95.5 8 107.6 1.8 117.6 0.8C119.5 7.2 119.8 14.8 118.8 23.3C117.1 38.2 111.1 49.8 101 58.4C91.1 66.8 78.8 71.2 67 70.9Z"
          fill={leafColor}
        />
        <path
          d="M66.8 70.9C73.6 63.6 82 55.6 90.4 46.9C98.8 38.2 106.1 29.2 111.4 21.3C108.8 30 103.4 40.8 95.2 51C87 61 76.8 68 66.8 70.9Z"
          fill="#FFFFFF"
        />
      </svg>
      {showWordmark && (
        <span
          className={`font-sans font-semibold tracking-[-0.03em] ${wordmarkClass} ${textClassName}`}
        >
          MicroMagic
        </span>
      )}
    </span>
  );
}
