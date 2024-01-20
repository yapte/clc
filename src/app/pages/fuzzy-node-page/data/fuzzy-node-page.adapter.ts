import { Example } from '../core/models/example';

export class FuzzyNodePageAdapter {
    // TODO: data types
    static toModel(dto: any): Example {
        return {
            id: dto.id,
            // TODO: implement
        };
    }
}