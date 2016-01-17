import compile from 'bitbox-pub/compiler'

export function translate(load) {
    load.source = compile(load.source)
}
