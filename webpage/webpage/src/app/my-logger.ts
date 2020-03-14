export function MyLogger(msg: string): MethodDecorator {
    console.log('hello from mylogger');
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`MyLogger: ${msg}`);
    };
}
