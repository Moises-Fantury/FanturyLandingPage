import { timelinePosition, timelineTextPosition } from "../types/timeline-child-css.type"

export interface Timeline {
    ano: string
    title: string
    text: string
    linePosition: timelinePosition
    textPositon: timelineTextPosition
}