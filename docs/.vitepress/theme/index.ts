import DefaultTheme from "vitepress/theme"
import "./custom.css"

/* 본문 이미지 클릭 → 크게 보기. 오버레이 한 장을 재사용하고,
   문서 전체에 위임 이벤트를 걸어 두어 페이지를 옮겨도 그대로 동작합니다. */
function setupImageZoom() {
  const overlay = document.createElement("div")
  overlay.className = "img-zoom"
  const big = document.createElement("img")
  overlay.appendChild(big)
  document.body.appendChild(overlay)

  const close = () => overlay.classList.remove("is-open")

  document.addEventListener("click", (e) => {
    const img = (e.target as HTMLElement).closest?.(
      ".vp-doc img",
    ) as HTMLImageElement | null
    if (!img) return close()
    big.src = img.currentSrc || img.src
    big.alt = img.alt
    overlay.classList.add("is-open")
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close()
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof document !== "undefined") setupImageZoom()
  },
}
