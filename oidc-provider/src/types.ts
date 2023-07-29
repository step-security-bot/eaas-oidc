export type Bindings = {
	GIT_HASH?: string;
	ENVIRONMENT: string;
	NODE_ENV: string;
	LOGGING: '1' | '2' | '3' | '4';

	FETCH_DISK_CACHE_AGE: string;
	FETCH_MAX_REDIRECTS: string;
	FETCH_DOH_SERVER: string;
};
