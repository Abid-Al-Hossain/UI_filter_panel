"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import type { FilterPanelState } from "../types";

type Props = { state: FilterPanelState; update: <K extends keyof FilterPanelState>(key: K, value: FilterPanelState[K]) => void };

export default function ContentSection({ state, update }: Props) {
  return <SectionCard title="Content" subtitle="Content controls for native filter generation."><div className="rounded-2xl border p-4 text-sm" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>No separate native controls are needed for this section in this component.</div></SectionCard>;
}
