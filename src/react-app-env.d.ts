/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: 'development' | 'production' | 'test';
		readonly PUBLIC_URL: string;
	}
}

declare module '*.bmp' {
	const src: string;
	export default src;
}

declare module '*.gif' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.jpeg' {
	const src: string;
	export default src;
}

declare module '*.png' {
	const src: string;
	export default src;
}

declare module '*.webp' {
	const src: string;
	export default src;
}

declare module '*.svg' {
	import * as React from 'react';

	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

	const src: string;
	export default src;
}

declare module '*.module.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.module.scss' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.module.sass' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.styl' {
	const styles: any;
	export = styles;
}

declare module '*.scss' {
	const styles: any;
	export = styles;
}

declare module '*.sass' {
	const styles: any;
	export = styles;
}

declare module '*.less' {
	const styles: any;
	export = styles;
}

// Omit type https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
