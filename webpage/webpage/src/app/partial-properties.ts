import { IPersonObject } from './iperson-object';
import { Imymodel } from './imymodel';

export type Element = [string, number, Imymodel, 'on' | 'off'];

export class PartialProperties {

    get [Symbol.toStringTag](){
        return 'PartialProperties class yeah!!';
    }

    setProperties(obj: IPersonObject, newProps: Partial<IPersonObject>): IPersonObject {
        console.log('It is a person!!', obj);
        const merged = { ...obj, ...newProps};
        return merged;
    }

    isPerson(obj: IPersonObject): obj is IPersonObject {
        return obj.type === 'person';
    }

    isModel(obj: Imymodel): obj is Imymodel {
        return obj.type === 'model';
    }

    hitTest(elem1: Element): void {
        const [s1, n1, model, turned] = elem1;
        console.log('hitTest: ', elem1);
        console.log('hitTest2: ', s1, n1, model, turned);
    }
}
