import { clsx } from "clsx"
import React, { ReactNode } from "react"

export default function Card({ className, children }: {className?: string; children: ReactNode }) {
    return (
        <div className={clsx(
            "rounded-2xl bg-base-200/70 shadow-soft border border-base-300/40",
            "p-5 md:p-6",
            className
        )}>
            {children}
        </div>
    )
}