import { createContext } from "react"
import type { DescriptionProps } from "../../App.types"

export const ProjectContext = createContext<DescriptionProps | undefined>(undefined)