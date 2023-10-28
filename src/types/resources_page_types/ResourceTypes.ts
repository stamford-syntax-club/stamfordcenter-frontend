export interface Resource {
	name: string;
	iconURL: string;
	files: ResourceFile[];
}

export interface ResourceFile {
	name: string;
	url: string;
}
