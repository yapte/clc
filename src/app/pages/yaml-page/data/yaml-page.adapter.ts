import { Example } from '../core/models/example';

export class YamlPageAdapter {
    // TODO: data types
    static toModel(dto: any): Example {
        return {
            id: dto.id,
            // TODO: implement
        };
    }
}