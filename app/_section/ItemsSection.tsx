"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { FilterPanelState } from "../types";

type Props = { state: FilterPanelState; update: <K extends keyof FilterPanelState>(key: K, value: FilterPanelState[K]) => void };

export default function ItemsSection({ state, update }: Props) {
  return <SectionCard title="Items" subtitle="Items controls for native filter generation."><Slider label="Groups" value={state.groupCount} min={1} max={8} step={1} onChange={(value) => update("groupCount", value)} />
<Slider label="Filters" value={state.filterCount} min={1} max={16} step={1} onChange={(value) => update("filterCount", value)} /></SectionCard>;
}
