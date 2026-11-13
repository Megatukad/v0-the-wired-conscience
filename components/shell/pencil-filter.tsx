/** Hand-drawn wobble used by every pencil circle, arrow and underline. */
export function PencilFilter() {
  return (
    <svg className="[position:absolute]" width="0" height="0" aria-hidden="true"><filter id="pencil" x="-10%" y="-40%" width="120%" height="180%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="4" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" xChannelSelector="R" yChannelSelector="G" /></filter></svg>
  )
}
