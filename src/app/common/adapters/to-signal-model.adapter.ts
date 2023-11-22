import { SignalDto } from "@shared/api";
import { Signal } from "../models/signal";

export const toSignalModelAdapter = (dto: SignalDto): Signal => {
    return {
        id: dto.signal_id,
        name: dto.signal_name,
        description: dto.signal_description,
    };
}