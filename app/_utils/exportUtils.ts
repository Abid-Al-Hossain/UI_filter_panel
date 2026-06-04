import type { FilterPanelState } from "../types";

export type ExportPayload = { fileName: string; mimeType: "text/plain;charset=utf-8"; content: string };

export function buildExportPayload(state: FilterPanelState, fileName = "filter-panel") : ExportPayload {
  return { fileName: `${fileName || "filter-panel"}.jsx`, mimeType: "text/plain;charset=utf-8", content: buildReactCode(state) };
}

export function buildReactCode(state: FilterPanelState) {
  return ["import * as React from \"react\";", "", "const state = " + JSON.stringify(state, null, 2) + ";", "", "export default function FilterPanelComponent() {", "  return <section id={state.id} role={state.role} aria-label={state.ariaLabel} style={{ width: state.width, minHeight: state.height, padding: state.padding, borderRadius: state.radius, border: state.borderWidth + 'px solid ' + state.border, background: state.background, color: state.foreground, fontFamily: state.fontFamily }}>{state.title}</section>;", "}", ""].join("\n");
}
