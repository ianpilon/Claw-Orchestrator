import { memo, useRef, useEffect, useState, CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface WorkflowZone {
  id: string
  label: string
  color: string
  radius: number // percentage of max radius (0-1)
}

const WORKFLOW_ZONES: WorkflowZone[] = [
  { id: 'feedback', label: '🎯 Customer Feedback', color: '#22c55e', radius: 0.15 },
  { id: 'review', label: 'Review & UX Testing', color: '#3b82f6', radius: 0.35 },
  { id: 'development', label: 'Development', color: '#8b5cf6', radius: 0.55 },
  { id: 'prd', label: 'PRD & Planning', color: '#f59e0b', radius: 0.75 },
  { id: 'research', label: 'Research', color: '#ef4444', radius: 0.95 },
]

interface WorkflowTargetProps {
  graphRef: React.RefObject<any>
  canvasWidth: number
  canvasHeight: number
  className?: string
  style?: CSSProperties
}

function WorkflowTargetComponent({
  graphRef,
  canvasWidth,
  canvasHeight,
  className,
  style
}: WorkflowTargetProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const groupRef = useRef<SVGGElement>(null)
  const rafRef = useRef<number | null>(null)
  const lastTransformRef = useRef<{ x: number; y: number; zoom: number } | null>(null)

  // Calculate the max radius based on canvas size
  const maxRadius = Math.min(canvasWidth, canvasHeight) * 0.8

  useEffect(() => {
    const updateTransform = () => {
      if (!graphRef.current || !groupRef.current) return

      try {
        const zoom = graphRef.current.zoom?.() || 1

        let centerX = 0
        let centerY = 0

        if (typeof graphRef.current.centerAt === 'function') {
          const center = graphRef.current.centerAt()
          centerX = center?.x ?? 0
          centerY = center?.y ?? 0
        }

        // Convert world coordinates to screen position
        const screenX = canvasWidth / 2 - centerX * zoom
        const screenY = canvasHeight / 2 - centerY * zoom

        const last = lastTransformRef.current
        if (!last) {
          lastTransformRef.current = { x: screenX, y: screenY, zoom }
          groupRef.current.setAttribute('transform', `translate(${screenX}, ${screenY}) scale(${zoom})`)
          return
        }

        const zoomChanged = Math.abs(zoom - last.zoom) > 0.0001
        const posChanged = Math.abs(screenX - last.x) > 0.5 || Math.abs(screenY - last.y) > 0.5

        if (zoomChanged || posChanged) {
          lastTransformRef.current = { x: screenX, y: screenY, zoom }
          groupRef.current.setAttribute('transform', `translate(${screenX}, ${screenY}) scale(${zoom})`)
        }
      } catch {
        // ignore errors
      }
    }

    updateTransform()

    const animate = () => {
      updateTransform()
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [graphRef, canvasWidth, canvasHeight])

  return (
    <svg
      ref={svgRef}
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        ...style,
        width: canvasWidth,
        height: canvasHeight,
      }}
    >

      <g ref={groupRef}>
        {/* Render zones from outside in so inner circles are on top */}
        {[...WORKFLOW_ZONES].reverse().map((zone, index) => {
          const radius = maxRadius * zone.radius
          const circumference = 2 * Math.PI * radius
          // Dotted pattern: dash length proportional to circle size
          const dashLength = Math.max(8, radius * 0.05)
          const gapLength = Math.max(12, radius * 0.08)

          return (
            <g key={zone.id}>
              {/* Zone circle - dotted stroke only */}
              <circle
                cx={0}
                cy={0}
                r={radius}
                fill="none"
                stroke={zone.color}
                strokeWidth={1.5}
                strokeDasharray={`${dashLength} ${gapLength}`}
                opacity={0.5}
              />

              {/* Zone label */}
              <text
                x={0}
                y={-radius + 16}
                textAnchor="middle"
                fill={zone.color}
                fontSize={12}
                fontWeight={500}
                opacity={0.5}
                style={{ userSelect: 'none' }}
              >
                {zone.label}
              </text>
            </g>
          )
        })}

        {/* Center target marker - small dotted circle */}
        <circle
          cx={0}
          cy={0}
          r={maxRadius * 0.05}
          fill="none"
          stroke="#22c55e"
          strokeWidth={2}
          strokeDasharray="4 6"
          opacity={0.25}
        />
      </g>
    </svg>
  )
}

WorkflowTargetComponent.displayName = 'WorkflowTarget'

export const WorkflowTarget = memo(WorkflowTargetComponent)
