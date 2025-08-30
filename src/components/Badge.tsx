import { clsx } from "clsx"
import React, { ReactNode } from "react"

export default function Badge({ className, children }: {className?: string; children: ReactNode }) {
    return (
        <span className={clsx(
          "inline-flex items-center gap-2 rounded-xl bg-base-300/80 border border-base-300 px-3 py-1 text-sm",
          className
        )}>{children}</span>
    )
}