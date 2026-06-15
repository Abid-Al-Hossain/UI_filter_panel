"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import Switch from "@/components/shared/input/Switch";
import type { FilterPanelState } from "../types";

type Props = { state: FilterPanelState; update: <K extends keyof FilterPanelState>(key: K, value: FilterPanelState[K]) => void };

export default function BehaviorSection({ state, update }: Props) {
  return (
    <div className="space-y-4">
      <SectionCard title="Applied Filters" subtitle="Active filter count and chip display.">
        <Slider label="Applied count" value={state.appliedCount} min={0} max={10} step={1} onChange={(value) => update("appliedCount", value)} />
        <Switch label="Show chips" checked={state.showChips} onChange={(value) => update("showChips", value)} />
      </SectionCard>
      <SectionCard title="Actions" subtitle="Apply and reset footer controls.">
        <Switch label="Show apply / reset" checked={state.showApplyReset} onChange={(value) => update("showApplyReset", value)} />
        <Switch label="Disabled" checked={state.disabled} onChange={(value) => update("disabled", value)} />
      </SectionCard>
    </div>
  );
}
