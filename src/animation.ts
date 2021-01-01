// source: https://github.com/styled-components/polished/blob/main/src/shorthands/animation.js

export type Styles = {
  [ruleOrSelector: string]: string | number | Styles
}

export default function animation(
  ...args: Array<Array<string | number> | string | number>
): Styles {
  // Allow single or multiple animations passed
  const multiMode = Array.isArray(args[0])
  if (!multiMode && args.length > 8) {
    throw new Error(
      'The animation shorthand only takes 8 arguments. See: http://mdn.io/animation'
    )
  }

  const code = args
    .map((arg) => {
      if (
        (multiMode && !Array.isArray(arg)) ||
        (!multiMode && Array.isArray(arg))
      ) {
        throw new Error(
          `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').`
        )
      }
      if (Array.isArray(arg) && arg.length > 8) {
        throw new Error(
          `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.`
        )
      }

      return Array.isArray(arg) ? arg.join(' ') : arg
    })
    .join(', ')

  return {
    animation: code,
  }
}
