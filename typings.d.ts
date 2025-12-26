// typings.d.ts 或 src/typings.d.ts
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}