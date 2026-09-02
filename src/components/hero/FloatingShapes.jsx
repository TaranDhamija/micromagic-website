function LeafSilhouette({ className = '', viewBox = '0 0 420 520', children }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function FloatingShapes() {
  return (
    <>
      <div className="hero-orb hero-orb-gold absolute left-[8%] top-[18%] hidden h-40 w-40 md:block" />
      <div className="hero-orb hero-orb-sage absolute bottom-[12%] right-[10%] h-44 w-44" />
      <div className="hero-orb hero-orb-cream absolute right-[28%] top-[12%] hidden h-24 w-24 lg:block" />

      <LeafSilhouette className="hero-leaf hero-leaf-a absolute -left-10 top-[8%] hidden h-[420px] w-[340px] md:block">
        <path
          d="M204 494C199 474 190 446 174 411C137 332 79 241 24 184C64 144 122 98 189 58C275 8 351 -6 394 12C411 64 396 148 348 243C304 329 246 426 204 494Z"
          fill="rgba(143,190,160,0.14)"
        />
        <path
          d="M204 486C231 412 277 325 328 235C351 193 372 155 389 123C382 161 367 207 340 259C304 329 254 412 204 486Z"
          fill="rgba(247,242,232,0.2)"
        />
      </LeafSilhouette>

      <LeafSilhouette className="hero-leaf hero-leaf-b absolute right-[-5%] top-[6%] h-[520px] w-[380px]">
        <path
          d="M92 494C76 433 71 363 84 297C109 169 188 67 340 18C391 106 405 220 382 315C357 418 276 487 164 510C138 512 114 507 92 494Z"
          fill="rgba(78,124,95,0.18)"
        />
        <path
          d="M116 470C181 405 254 304 311 185C334 138 353 93 368 51C367 95 359 148 342 206C315 298 260 395 180 478C158 484 136 482 116 470Z"
          fill="rgba(247,242,232,0.13)"
        />
      </LeafSilhouette>

      <LeafSilhouette className="hero-leaf hero-leaf-c absolute bottom-[-8%] left-[22%] hidden h-[260px] w-[260px] lg:block" viewBox="0 0 280 280">
        <path
          d="M36 222C29 188 37 150 58 117C97 56 169 18 248 20C250 94 222 164 172 209C131 247 78 254 36 222Z"
          fill="rgba(232,201,122,0.1)"
        />
        <path
          d="M53 214C92 180 138 125 175 64C184 50 192 37 198 24C200 72 181 128 146 177C120 213 87 229 53 214Z"
          fill="rgba(247,242,232,0.16)"
        />
      </LeafSilhouette>

      <div className="hero-particle absolute left-[18%] top-[26%] hidden md:block" />
      <div className="hero-particle hero-particle-delay absolute right-[18%] top-[56%]" />
      <div className="hero-particle hero-particle-slow absolute bottom-[18%] left-[48%]" />
    </>
  );
}
