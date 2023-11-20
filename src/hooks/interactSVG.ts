import { useRef } from "react";

export function useSVG() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  function setSVGRef(ref: SVGSVGElement) {
    if (!ref) return;
    svgRef.current = ref;

    initializeEvents();
  }

  function initializeEvents() {
    if (window.PointerEvent) {
      svgRef.current?.addEventListener("pointerdown", onPointerDown);
      svgRef.current?.addEventListener("pointerup", onPointerUp);
      svgRef.current?.addEventListener("pointerleave", onPointerUp);
      svgRef.current?.addEventListener("pointermove", onPointerMove);
    } else {
      svgRef.current?.addEventListener("mousedown", onPointerDown);
      svgRef.current?.addEventListener("mouseup", onPointerUp);
      svgRef.current?.addEventListener("mouseleave", onPointerUp);
      svgRef.current?.addEventListener("mousemove", onPointerMove);

      svgRef.current?.addEventListener("touchstart", onPointerDown);
      svgRef.current?.addEventListener("touchend", onPointerUp);
      svgRef.current?.addEventListener("touchmove", onPointerMove);
    }
  }

  function getPointFromEvent(event: any) {
    var point = { x: 0, y: 0 };
    if (event.targetTouches) {
      point.x = event.targetTouches[0].clientX;
      point.y = event.targetTouches[0].clientY;
    } else {
      point.x = event.clientX;
      point.y = event.clientY;
    }

    return point;
  }

  let isPointerDown = false;
  let originPointer = { x: 0, y: 0 };
  let viewBox = { x: 0, y: 0, width: 500, height: 500 };
  let newViewBox = { x: 0, y: 0 };

  function onPointerDown(e: any) {
    isPointerDown = true;
    const point = getPointFromEvent(e);

    originPointer.x = point.x;
    originPointer.y = point.y;
  }

  function onPointerMove(e: any) {
    if (!isPointerDown) return;
    e.preventDefault();

    const point = getPointFromEvent(e);
    newViewBox.x = viewBox.x - (point.x - originPointer.x);
    newViewBox.y = viewBox.y - (point.y - originPointer.y);

    svgRef.current?.setAttribute(
      "viewBox",
      `${newViewBox.x} ${newViewBox.y} ${viewBox.width} ${viewBox.height}`,
    );

    console.log(
      `${newViewBox.x} ${newViewBox.y} ${viewBox.width} ${viewBox.height}`,
    );
  }

  function onPointerUp() {
    isPointerDown = false;

    viewBox.x = newViewBox.x;
    viewBox.y = newViewBox.y;
  }

  return { setSVGRef };
}
