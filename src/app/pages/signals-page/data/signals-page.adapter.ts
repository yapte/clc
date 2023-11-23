import { SignalCreateDto } from "src/app/shared/api/models/signals/signal-create.dto";
import { SignalCreate } from "../core/models/signal-create";
import { ListRequestDto } from "@shared/api";
import { SignalListRequest } from "../core/models/signal-list-request";

export class SignalsPageAdapter {
    static toSignalCreateDto(model: SignalCreate): SignalCreateDto {
        return {
            signal_name: model.name,
            signal_description: model.descrption,
        };
    }

    static toListRequestDto(model: SignalListRequest): ListRequestDto {
        return {
            search: model.search,
            pageNumber: model.page,
        };
    }
}